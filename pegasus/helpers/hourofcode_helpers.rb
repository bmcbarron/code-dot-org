def hoc_dir(*dirs)
  pegasus_dir('sites.v3','hourofcode.com', *dirs)
end

def trans_dir(*dirs)
  pegasus_dir('sites.v3','translate.hourofcode.com', *dirs)
end

def hoc_load_countries()
  JSON.parse(IO.read(hoc_dir('i18n/countries.json')))
end
HOC_COUNTRIES = hoc_load_countries()

def hoc_load_i18n()
  i18n = {}
  Dir.glob(hoc_dir('i18n/*.yml')).each do |string_file|
    i18n.merge!(YAML.load_file(string_file))
  end
  i18n
end
HOC_I18N = hoc_load_i18n()

def trans_load_i18n()
  i18n = {}
  Dir.glob(trans_dir('i18n/*.yml')).each do |string_file|
    i18n.merge!(YAML.load_file(string_file))
  end
  i18n
end
TRANS_I18N = trans_load_i18n()

def hoc_s(id)
  id = id.to_s

  return TRANS_I18N['en-US'][id] if request.site == 'translate.hourofcode.com'

  HOC_I18N[@language][id] || HOC_I18N['en'][id]
end

def hoc_canonicalized_i18n_path(uri)
  _, possible_country_or_company, possible_language, path = uri.split('/',4)

  if HOC_COUNTRIES[possible_country_or_company]
    @country = possible_country_or_company
  elsif @config[:companies][possible_country_or_company.to_sym]
    @company = possible_country_or_company
    @country = 'us'
  end

  if @country || @company
    if HOC_I18N[possible_language]
      @user_language = possible_language
    else
      path = File.join([possible_language, path].select{|i|!i.nil_or_empty?})
    end
  else
    @country = hoc_detect_country()
    path = File.join([possible_country_or_company, possible_language, path].select{|i|!i.nil_or_empty?})
  end

  country_language = HOC_COUNTRIES[@country]['default_language']
  @language = @user_language || country_language || hoc_detect_language()

  canonical_urls = [File.join(["/#{(@company or @country)}/#{@language}",path].select{|i|!i.nil_or_empty?})]
  canonical_urls << File.join(["/#{(@company or @country)}",path].select{|i|!i.nil_or_empty?}) if @language == country_language
  unless canonical_urls.include?(uri)
    dont_cache
    redirect canonical_urls.last
  end

  # We no longer want the country to be part of the path we use to search:
  search_uri = File.join('/', [@language, path].compact)
  return search_uri if resolve_document(search_uri)
  return "/#{path}"
end

def hoc_detect_country()
  location = Geocoder.search(request.ip).first
  return 'us' unless location

  country_code = location.country_code.to_s.downcase
  return 'us' unless HOC_COUNTRIES[country_code]

  country_code
end

def hoc_detect_language()
  language = request.env['rack.locale']
  return language if HOC_I18N.keys.include?(language)
  language = language[0..1]
  return language if HOC_I18N.keys.include?(language)
  nil
end

def hoc_uri(uri)
  File.join(['/', (@company or @country), @user_language, uri].select{|i| !i.nil_or_empty?})
end

def codeorg_url()
  if @country == 'ar'
    return 'ar.code.org'
  elsif @country == 'br'
    return 'br.code.org'
  elsif @country == 'ro'
    return 'ro.code.org'
  elsif @country == 'uk'
    return 'uk.code.org'
  else
    return 'code.org'
  end
end

def chapter_partner?
  return CDO.partners.include?(@country)
end

def resolve_url(url)
  if url.downcase.include? "code.org"
    partner_page = HOC_COUNTRIES[@country]['partner_page']
    return url.gsub('code.org', partner_page)
  else
    File.join(['/', (@company or @country), @user_language, url].select{|i| !i.nil_or_empty?})
  end
end

def localized_file(path)
  localized_path = File.join('/', @language, path)
  return localized_path if resolve_static('public', localized_path)

  return path
end

def localized_image(path)
  File.join('/', @country, @language, path)
end

def campaign_date(format)
  case format
  when "start-short"
    return HOC_COUNTRIES[@country]['campaign_date_start_short']
  when "start-long"
    return HOC_COUNTRIES[@country]['campaign_date_start_long']
  when "short"
    return HOC_COUNTRIES[@country]['campaign_date_short']
  when "full"
    return HOC_COUNTRIES[@country]['campaign_date_full']
  else
    return HOC_COUNTRIES[@country]['campaign_date_full']
  end
end

def all_unique_events
  DB[:forms].where(kind: 'HocSignup2015').group(:name, :email).select(:name, :email, :processed_data, :data)
end

def company_count
  company_count = 0;
  all_unique_events.each do |i|
    data = JSON.parse(i[:data])
    if data['hoc_company_s'] == @company
      company_count += 1
    end
  end
  return company_count
end

def country_count
  country_count = 0;
  all_unique_events.each do |i|
    unless i[:processed_data].nil?
      data = JSON.parse(i[:processed_data])
      code = HOC_COUNTRIES[@country]['solr_country_code'] || @country
      if data['location_country_code_s'] == code.upcase
        country_count += 1
      end
    end
  end
  return country_count
end

def solr_country_code
  code = HOC_COUNTRIES[@country]['solr_country_code'] || @country
  return code
end

def country_full_name
  return HOC_COUNTRIES[@country]['full_name']
end

def total_hoc_count
  all_unique_events.count
end
