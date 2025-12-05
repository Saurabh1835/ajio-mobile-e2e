Feature: AJIO E2E

  Scenario: Login, Search, Add to Cart, Remove and Logout
    Given the app is launched
    When I login with username "testuser" and password "password123"
    Then I should see the home screen
    When I search for "shoes"
    And I open first product in results
    And I add product to cart
    Then I open cart
    And I remove the product from cart
    And I logout
    Then I should see the login screen
