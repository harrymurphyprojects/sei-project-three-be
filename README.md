# Project Three Epop README #



**Contents** 

* Project Overview
* Brief
* Timeframe
* Deploy Link
* Technologies Used
* Planning
* Build
* Bugs
* Challenges
* Wins & Learning
* Areas For Future Development

<img src="https://i.imgur.com/tjtBJJB.png" width="900" height="600" />

## Project Overview ##

The third project for the General Assembly Software Engineer Immersive course is a group project where we built a full-stack application. We took inspiration from Depop and created a website where developers and creators can share project ideas. We had a week to complete it and I worked with Holly Partridge, David Harvey and Michael Von Etzdorf.

## Project Brief ## 

Build a full-stack application by making your back-end and your front-end.
Build and use an Express API to serve your data from a Mongo database.
Build a complete product with multiple relationships and CRUD functionality and have multiple models. 

## Time Frame ## 

7 Days


## Deployment ## 

Link [**here**](https://eepop.netlify.app/ "here")

## Technologies Used ## 

* HTML
* CSS
* JavaScript
* React.js
* MongooseDB
* Mongoose
* Axios
* Cloudinary
* Bcrypt
* Excalidraw (planning)
* Git
* GitHub

## Planning ## 

Being in a group of four, there were a lot of different creative ideas that were flowing around. We all agreed that instead of designing a completely new site, we would better showcase our styling skills by cloning a site. We liked the way Depop and The Dots displayed information and decided we will use them for inspiration. Instead of selling clothes like Depop, we wanted to share developer ideas for websites and projects. Once we had the creative ideas set, we wanted to note down what were requirements for the MVP and what would be the stretch goals. 

We held a standup every day at 09:30am and one person from the group would be sent to the group stand up with the other teams doing projects and the tutors. We’d discuss what we worked on after our normal coding hours of 9-5 and also review where we were in comparison to our goals/plan.

At the end of each coding day, we would merge our code and work through any conflicts that arose. I held the master file on my computer so when it came to deployment, I deployed first and the others forked my copy from GitHub.

MVP requirements:

* Homepage
* Index Page (displaying projects)
* Show page (display all information about a project)
* Filter projects
* User-created account.
* Users can upload projects.
* Users can favourite projects.
* Users can comment on projects.
* Sign in / Sign Out.
* Styling is similar to Depop.
* User profile page.

The Stretch Goal ideas: 

* Dark Theme (styling)
* Use credit to invest in projects.
* Email verification.
* Newsletter sent to users.

We decided to plan out how we were going to work for the week. The only things we set in stone were the hand in date and the Monday cut off for any new functionality added. We wanted to give ourselves 36hrs to focus on styling and troubleshooting rather than adding new content. Below is the work schedule for the week with responsibilities. Although I’ve assigned names to each role, we would quite often take it in turns to screen share in pairs or as a group on Zoom. We found that by collaborating, the combined brainpower meant we quickly resolved any issues we came up against and rarely had to seek guidance from the staff at General Assembly. 

Tuesday
* Rough Database (David)
Wednesday
* Pages:
  * Home (Harry)
  * Explore (Holly)
  * Add Project (Mike)
  * User Page (Holly)
Thursday
* Login (David)
* Logout (David)
* Register (David)
* WireFrame - SASS (Holly / Harry / Mike)
Friday
* Error Handling (Mike)
* Edit Projects (Harry)
* Delete Projects (Holly)
* Securing Pages (Mike)
Saturday & Sunday
* Fill database (David)
* Small Ad hoc tasks (All)
Monday
* Pure CSS and styling (Harry, Holly)
Tuesday
* Checking app for bugs (All)
* Troubleshooting (All)

Below is a screenshot of the planning that we did as a group. 

<img src="https://i.imgur.com/tjtBJJB.png" width="900" height="600" />

## The Build Back End ## 

As a group, we started building the back end, David was screen sharing as we helped guide him through what we wanted and what was required. We used resources from small workshops we had done in the previous week. We built the index, environment and helper files firstly. As the team was building the seed files, I went and added some example projects so we would have some information to retrieve in testing. We only built the models and seeded the project files, to begin with, as we wanted to start building the front end and pulling through the data for the projects so we could start building the index and show pages. David came back later in the week and added the models for the Users.

#### Models ####

There are two models for project three, project models and user models. But what are models and how are they used? Models are fancy constructors compiled from Schema definitions. An instance of a model is called a document. Models are responsible for creating and reading documents from the underlying MongoDB database. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

In projectSchema, we listed out the twelve different keys we need to create the projects. Naming the type of data that is required is vital because if you try to seed the “micro pay” key with a string, it won’t work correctly. 

With the userSchema, extra care is taken to the types of information that is stored in the MongoDB database. It would be unethical and illegal to store users' passwords in a readable, accessible format. The use of Mongoose unique validator and bcrypt ensures that the passwords are encrypted before they are saved to the database. 

<img src="https://i.imgur.com/4oLu4Wu.png" width="600" height="400" />
<img src="https://i.imgur.com/UPWr6n2.png" width="600" height="700" />

#### Router ####

We built the router in the backend as a separate file in the config folder. We started by creating two routes, “/projects” and “/projects/projectId”. By using these routes we could code a “.get(projects.index)” and “.get(projects.show)”. We could use this router code in our front end API page to retrieve information on the projects and start creating an index page and a show page. 

We continually added more routes and controllers as and when we needed them for our backend. After projects, we added user routes with authentication and then secure routes for the projects. Primarily David was responsible for this but we did code along as a team.

<img src="https://i.imgur.com/DsQFthV.png" width="600" height="700" />

#### Authentication & Error Handling #### 

By the third day, we had implemented the error handling and secure routes and user authentication on the back end. We used JWT (JSON Web Token) to authenticate users. The reason for authenticating users is so we can allow conditional rendering of features on the front end. Allow users access their own page, favouriting content and uploading content, none of which is visible to unauthenticated users. There are three main parts of a JWT token, the Header (type of algorithm), the Payload (Data) and The signature (verification). 

When building the back end it was key to have error handling so if the testing doesn’t work, we have more of an idea why. We added a 404 error if the server was unable to find the requested page. We also added a 422 error which is a validation error that means you do not have permission for the page. 

<img src="https://i.imgur.com/DsQFthV.png" width="600" height="700" />

<img src="https://i.imgur.com/hN98UEx.png" width="600" height="400" />

## The Build Front End ## 

When building the front end we started off Holly built the Homepage, whilst I built the Explore page and Mike built the Show page. We all helped each other where we could and David would code along with us when he wasn’t on the back end. It was important to build the Explore page and show page as we could retrieve the information from the back end. We built an API and followed the rules set by the back end and it worked. 

#### API #### 

This is the API page where the get requests were refactored too. “getAllCharacters” is used for the index page and getSingleCharacter is used for the superheroes show page. The main difference between these requests is the URL, the “getSingleCharacter” uses the character “/id” the URL whereas “getAllCharacters” use “/all”. This was all written in the RESTful API documentation.

The API page for Epop is a lot more complicated than the project 2 I completed weeks prior. One advantage is that due to our team making the back end, we didn’t have any dodgy RESTful API documentation to follow. The introduction of “.post” allowed the user to pass information to the back end. Posting the information needed to build projects, register and log in. The “.delete” restful route allows the user to delete projects they have created. 

<img src="https://i.imgur.com/tjtBJJB.png" width="600" height="200" />

#### Navigation #### 

There were two main challenges when navigating a larger application like Epop. First of all, we wanted to ensure the users could access the correct destinations from the navbar. The second challenge is that we wanted the Navbar to look and feel like one from Depop’s website.

The four destinations you can access from the Navbar are: “/” which is the home page, “/favourites” which allows authorised users to see their favourited projects, “/projects/create” which allows authorised users to upload projects. “/register” is the registration page where users can sign up with their details. “/login” is the login page where users can log in to the website. Once logged in, the favourites, upload and log out are now accessible to the user. This conditional rendering works by using the “isAuth” const and a ternary operator. If “isAuth” is true (the user is logged in) the favourites, upload and log out features are shown. If false they are not shown. 

<img src="https://i.imgur.com/4gMsgKy.png" width="600" height="200" />

<img src="https://i.imgur.com/YEtLHVh.png" width="600" height="200" />

<img src="https://i.imgur.com/edp3Fwm.png" width="600" height="200" />

#### Add Comment #### 

The ability to add comments to projects you like was one of the goals we had for this project. What is a comment? And where do they go? The route for a comment you can see on the Axios.post request. The comments URL is “/API/projects/projectId/comments”, this ensures that the comments end up on the correct pages. The Axios section should have been refactored onto the API page but we must not have gotten around to it. Although it makes the readability worse as the code is longer, it does make it easier to understand what goes on the page if you haven’t looked at the code in a while. 

<img src="https://i.imgur.com/Ueq7ZYF.png" width="600" height="200" />

<img src="https://i.imgur.com/u7fqsWb.png" width="600" height="200" />


#### Styling #### 

For styling, we chose to use SASS rather than a more encompassing styling framework like Bootstrap or Bulma. As you can see from the examples below we are quite close to the themes that are on Depop. I will show some snippets of the code which contribute to this effect.

<img src="https://i.imgur.com/tjtBJJB.png" width="600" height="200" />

<img src="https://i.imgur.com/tjtBJJB.png" width="600" height="200" />

In order to style in SASS, I first wrote out what content I needed on the page. In this code snippet, you can see I have written a div called “hero” with a nested `<h1>` and `<p>` element inside it. Using flexbox in the SASS gave me greater control over how they were positioned relative to other `<div>` on the page. I added in a media query that reduces the sizing of the “hero” section when on a smaller screen. 

<img src="https://i.imgur.com/tjtBJJB.png" width="600" height="200" />

<img src="https://i.imgur.com/tjtBJJB.png" width="600" height="200" />

## Bugs ## 

On the homepage, some links and buttons take the user back to the homepage instead of their intended areas of the app, which is a bug but also room for development. Adding in the correct destination pages would resolve this. 

Another bug that has occurred recently is the data not pulling through from the back end, not sure why this has stopped working a month down the road from deployment however I will fix it ASAP.

## Challenges ## 

One of the main challenges and wins was working in a large group. There were 4 of us working at the same time, so making sure you weren't duplicating work took a lot of communication. Then also working through merge conflicts was a new thing for me to learn. Because the work was so divided up I didn’t get as much time as I’d like to work on the back end which is one of the reasons why in my next project I wanted to do it all myself. 

## Wins & Learning ## 

A win for the project is the styling, we used SASS and got very close to how Depop is styled. Especially on the front page, this grew my confidence in using SASS over a more comprehensive Framework like Bulma or Bootstrap.

I learned a lot about how React works in this project. We had a lot of functionality with the separate Users and Projects data. We used 7 different Axios requests which gave us a lot of functionality on the front end.

## Area For Future Development ## 

One future development stretch goal that I would add is some extra security by adding email verification when you create your profile so if the user loses their password they can go through the normal password reset protocol you see on a lot of websites. 

Another area for future development is to redesign the back end. David H, did an amazing job with it, so good that he didn’t need too much input from the team. I’d like to recreate the backend myself as a challenge and to further my understanding of MERN full-stack applications. 


