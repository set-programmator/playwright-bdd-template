Feature: Login functionality

    Scenario Outline: Login as a Standard User
        Given I am on the login page
        When I enter "<username>" and "<password>"
        And I click the login button
        Then I should see the homepage

        Examples:
            | username      | password     |
            | standard_user | secret_sauce |
            | problem_user  | secret_sauce |

    Scenario Outline: Login with invalid credentials
        Given I am on the login page
        When I enter "invalid_user" and "secret_sauce"
        And I click the login button
        Then I should see an error message

    Scenario Outline: Login using Performance Glitch User
        Given I am on the login page
        When I enter "<username>" and "<password>"
        And I click the login button
        Then I should see the homepage

        Examples:
            | username           | password     |
            | performance_glitch_user | secret_sauce |

