Feature: Wishlist Functionality

  Scenario: Add product to wishlist
    Given I am logged in
    When I search for "jeans"
    And I open first product
    And I add product to wishlist
    Then product should be visible in wishlist
