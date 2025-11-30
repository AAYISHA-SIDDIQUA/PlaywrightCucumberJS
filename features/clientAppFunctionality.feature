Feature: Place an Order in the Client App

@Regression
Scenario: Place a Valid Order
    Given a user logins to Client Application with "testspace@gmail.com" and "Testspace@97"
    When a user add the "ZARA COAT 3" product to the cart
    Then the product "ZARA COAT 3" should be visible on the cart page 
    When the user enters all valid details and submits the Order
    Then the order id should be displayed in the Orders section 
    