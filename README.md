# meet

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
    1. AS A USERS 
    2.  I SHOULD BE ABLE TO SHOW/HIDE AN EVENT’S DETAILS
    3.  SO THAT THE USERS CAN SEE TIME, LOCATION, AND A DESCRIPTION OF EACH     EVENTWHEN THEY WOULD LIKE TO 

FEATURE 3: SPECIFY NUMBER OF EVENTS
1.	AS A USERS
2.	I SHOULD BE ABLE TO SPECIFY NUMBER OF EVENTS
3.	SO THAT WHEN THE USERS SEARCH RESULTS SHOW THEY ARE NOT OVERWHELMED BY THE AMOUNT OF RESULTS ALL AT ONCE

FEATURE 4: USE THE APP WHEN OFFLINE
1.	AS A USER
2.	I SHOULD BE ABLE TO USE THE APP WHEN OFFLINE
3.	SO THAT THE USERS CAN USE THE APP AT ANY TIME OR PLACE 

FEATURE 5: DATA VISUALIZATION
1.	AS A USER
2.	I SHOULD BE ABLE TO USE DATA VISUALIZATION
3.	SO THAT IT IS EASIER FOR USERS TO READ INFORMATION ABOUT EVENTS

Scenario 1: An event element is collapsed by default.
Given:  The user is inactive after a certain amount of time
When: The user doesn’t click or move the cursor
Then: returns to home page

Scenario 2: User can expand an event to see its details.
Given:  The user has searched an event 
When: The user clicks on the details of the event that was searched
Then: The time, date , location and descriptions  of the event should be displayed.

Scenario 3: User can collapse an event to hide its details.
Given:  That users has clicked on an event to pull it up along with the detail button to show details
When: The user clicks on the details button a second time
Then: The details that are displayed will now be hided and the user can just see the name of the event

Scenario 4: When user hasn’t specified a number, 32 is the default number.
Given:  The user has not clicked on the number of search results shown next to the actually search bar
When:  The user enters a search
Then:  Only 32 results are shown for that search since the user did not choose how many results they wanted to see 

Scenario 5: User can change the number of events they want to see.
Given:  While using the search, users can choose how many results they would like to be displayed
When: When the uses clicks on the number of search result next to the search bar
Then: The search results will show the amount that the user choose for it to display at one time

Scenario 6: Show cached data when there’s no internet connection.
Given:  When there is no internet connection
When: The User lost connection or is unable to connect
Then: Show an alert/message that there is no internet connection

Scenario 7: Show error when user changes the settings (city, time range).
Given:  When the user changes the settings of the search
When: The user clicks on the settings to change the city and time range
Then: Shows an alert/message that there is an error

Scenario 8: Show a chart with the number of upcoming events in each city.
Given:  Opening up the website to the main page. Searching a city in the search bar
When: When you scroll down to where suggested searches are. Type in a city
Then: A chart is displayed on the webpage with your city and the number of events coming. After a city is searched a message is displayed with the number of upcoming events.

