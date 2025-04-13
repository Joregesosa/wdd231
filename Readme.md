How did you incorporate ES Modules.
How you used DOM interaction.
How you used localStorage.
How you used your API/Data integration and what was the output.
How you used a modal dialog structure. 

I used ES Modules to organize my code into separate files. I created a `components` folder inside the `scripts` directory and added three files:  
- `ProjectCard`: This file contains the code for displaying project cards.  
- `ProjectDetail`: This file contains the code for showing the details of a project.  
- `TechnologyItem`: This file contains the code for displaying the technologies I use.  

I used DOM interaction to show and hide the menu, show dialogs, display project details, and handle form submissions. I used the `document.querySelector` method to select elements and add event listeners to them. I also used the `classList` property to add and remove classes for showing and hiding elements.

I used local storage to save the data when the user is fulfilling the form.  in case the user closes the page, the data will be saved in local storage. When the user opens the page again, the data will be retrieved from local storage and displayed in the form.

I used the Fetch API to retrieve data from github Api and display it on the page. I created a function that fetches the data and then uses DOM manipulation to display the results on the project page.

I used a modal dialog structure to show the project details when the user clicks on a project card. I created a modal element in the HTML and used CSS to style it. When the user clicks on a project card, I used JavaScript to show the modal and populate it with the project details. I also added an event listener to close the modal when the user clicks outside of it or on the close button.

I also yoused a modal dialog to ask the user if wants to resume filling the form when the user closes the page.

 [See the video here](https://youtu.be/Tqi-OAdI_RI)