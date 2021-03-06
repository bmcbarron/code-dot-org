@no_mobile
Feature: Legacy Share Remix

  Background:
    Given I am on "http://learn.code.org/s/artist/stage/1/puzzle/10?noautoplay=true"
    And I rotate to landscape
    And I wait to see a dialog titled "Puzzle 10 of 10"
    And I close the dialog
    And element "#runButton" is visible
    And element "#resetButton" is hidden

  Scenario: Remixing a legacy /c/ share link
    Then I press "runButton"
    And I wait to see ".congrats"
    And I navigate to the share URL
    And I wait until element "#runButton" is visible
    And I press the first ".project_remix" element
    And I wait for 10 seconds
    And check that the URL contains "/projects/artist/"
    And check that the URL contains "/edit"
