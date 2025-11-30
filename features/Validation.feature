Feature: Error validations 

@Validation
Scenario: Incorrect Login
    Given a user logs into client App with "testspace@gmail.com" and "test@31"
    Then the error message should be displayed