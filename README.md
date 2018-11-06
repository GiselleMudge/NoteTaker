# NoteTaker

NoteTaker - an app using Node and Express, Deployed via Heroku

### Overview

NoteTaker encompasses last week's lesson on express as we start to dabble in CRUD-tastic territory. The idea is to create a note to self, and review all notes created. There is no successful update or delete functions in this "easier" attempt (multiple pages to perform function rather than 1), but otherwise the code works wonderfully for GET and POST! Check out the demos below, but if you really want to see where the magic is check out the images folder and the source code in this project's repo!

### Prep Work

The following packages were downloaded:
*   mysql
*   inquire
*   express
      
Database and tables created. View 'db' folder for schema and seeds sql files for more details:
*   notes_db (db)
*   notes (table). Notes table should have the following columns:
     * id (unique id for each note, auto-increments)
     * note_title (Name of Note, manual)
     * note_text (Description of Note, manual)

Some testing was done on Postman to ensure our data was showing up before we tried it out in the live environment. Below are
some screenshots:

![postmanpreview1](https://user-images.githubusercontent.com/41309640/48042900-cfd14880-e151-11e8-9af9-15f89ae14c76.JPG)
![postmanpreview2](https://user-images.githubusercontent.com/41309640/48042901-cfd14880-e151-11e8-9e86-47885ef49505.JPG)

## EXECUTE

There is 1 basic node app that connects the server to your webpage locally:

1. `server.js`

All the work was done for you! All the user needs to do is execute an 'npm install' in the command line before proceeding to test the commands. Next, user will need to enter the following in the command prompt, ignoring the "+":

node + 'server.js' without any quotations

### What This Should Do

1. `server.js`  has the app listening on your port set up in the connection.js file. Once that is listening, you can: 
   * go to http://localhost:3000 which is your index or welcome page
   * It will give you the choice by buttons to go to a page to ADD your new note. This is a form that uploads your input to the MYSQL DB.
   * There is also a button to VIEW all your existing saved notes
   * On the top left part of the page or optional labeled button page center, it will take you back to the welcome screen

See the final demo below to run through the functions I was able to complete. Thanks for reading!

![notedemo](https://user-images.githubusercontent.com/41309640/48039755-3bacb480-e144-11e8-8d49-73d6f77c2aea.gif)

### Future Development
So I am a bit disappointed that the UPDATE and DELETE functions were not able to be configured into this project. Next steps are 
*   Explore getting all these in 1 webpage to dynamically update all data without having to be directed to another page
*   Find out how to get DELETE and UPDATE working within Express framework (DELETE was explored during Handlebars chapter, and syntax did not quite work for HTML)
*   Studying the correct syntax within html, related to the above
*   Adding the buttons to each data row on the HTML page that call these 2 functions respectively to delete and update, in relation to its MySQL data row connected to the ID being deleted

And awaaay we go! 

-G$

