Feature: Forgot Password

  Scenario: Reset password using email
    Given the app is launched
    When I navigate to forgot password
    And I enter email "testuser@mail.com"
    And I submit reset request
    Then I should receive password reset confirmation
