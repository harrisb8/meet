Feature: Show/Hide an event details

Scenario: An event element is collapsed by default. 
Given: The user is inactive after a certain amount of time 
When: The user doesn’t click or move the cursor 
Then: returns to home page

Scenario: User can expand an event to see its details. 
Given: The user has searched an event 
When: The user clicks on the details of the event that was searched 
Then: The time, date , location and descriptions of the event should be displayed.

Scenario: User can collapse an event to hide its details. 
Given: That users has clicked on an event to pull it up along with the detail button to show details 
When: The user clicks on the details button a second time 
Then: The details that are displayed will now be hided and the user can just see the name of the event