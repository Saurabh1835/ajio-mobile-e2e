Feature: User Registration

  Scenario: Register a new user successfully
    Given the app is launched
    When I navigate to the registration page
    And I enter registration details
      | name     | Test User        |
      | email    | testuser@mail.com|
      | password | Password@123     |
      | mobile   | 9999999999       |
    And I submit the registration form
    Then I should see registration success message
