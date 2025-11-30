Feature: Error validations 

@Validation
Scenario Outline: Incorrect Login
    Given a user logs into client App with "<username>" and "<password>"
    Then the error message should be displayed

    Examples: 
    | username            |    password      |
    |testspace@gmail.com  |  test@31         |
    |teatnim@gmail.com    | dfaoke24         |