Feature: Specify the Number of events

Scenario: When user hasn't specified a number, 32 is the default number. 
Given: The user has not clicked on the number of search results shown next to the actually search bar 
When: The user enters a search 
Then: Only 32 results are shown for that search since the user did not choose how many results they wanted to see

Scenario: User can change the number of events they want to see. 
Given: While using the search, users can choose how many results they would like to be displayed 
When: When the uses clicks on the number of search result next to the search bar 
Then: The search results will show the amount that the user choose for it to display at one time