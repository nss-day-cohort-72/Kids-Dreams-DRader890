# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > Well I know that for when it is clicked, the alert runs and that is from the Kids module, but whats clicked on comes from the main.js which has access to the Kids module and the kids function is connected to the alert which uses the data id to connect each other. SO the alert its self is from the Kids module buts it technically displayed in main.js

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > This is to show which kid is paired with which celeb and that had to be done by a new function so when the pairings function comes around we could invoke that function inside another function with the variable name kidStar

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   >  if (clickedElement.tagName === "LI" && clickedElement.closest("#celebrityListContainer")) {  //checks if it is an li 
        const celebrityId = parseInt(clickedElement.getAttribute("data-id")) //uses the data attribute to get the id and turns it to a number
        const celebrities = getCelebrities() //  sets new variable to getCelebrities function
        const celebrity = celebrities.find(celeb => celeb.id === celebrityId) // goes to celebrities array and gets a single(celeb) and gets the id of the current object being tested and finds if it equals the id we want

        if (celebrity) { // using what we just did
            // Display the celebrity's name and sport in an alert
            alert(`${celebrity.name} is a ${celebrity.sport} star`) // allows us to use celebrity and access the celebrity objects
        }
!!! comments are answers !!!


4. Can you describe, in detail, the algorithm that is in the `main` module?
   > line 1-3 imports the functions from different modules
   line 5 accesses html
   line 7-24 we create an html string the Interpolate the functions we imported and in js html string we create classes and ids to be used elsewhere
   line 26 allows us to put in place the change in the html from our main.js