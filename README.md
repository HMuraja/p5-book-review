
<div align=center>
<h1><strong>Project 5 - ReadRave a Book Review Application </strong></h1>
 
*Advanced frontend project* <br>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![DjangoREST](https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Gitpod](https://img.shields.io/badge/gitpod-f06611.svg?style=for-the-badge&logo=gitpod&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)


[View the live site here](https://read-rave-86b7234dccae.herokuapp.com/)
                                
</div>

## About
ReadRave is a online platform and a community for readers that allows you to review books and follow other readers for recommendations.

This application was made using primarly [React]() and [Django Rest Framework](). Django Rest Framework was used to build a backend API and frontend was build using React framework that consumes Django Rest Framework data. Both the backend and frontend are combined under one repository in this case. You can find the React Application inside the *fronend* folder of this repository.

For further information feel free to keep reading or if you want to view the ready project click [here](https://read-rave-86b7234dccae.herokuapp.com/).


## Project Goals

- Build an online platform allowing users to share their interst on books.
- Allows users to post reviews, read reviews and follow readers alike.
- All visitors to the page should be able to view reviews.
- Registered users should be able to share a review with a photo, review content and review score.
- Registered users should be able to like and comment on reviews.
- Application should be responsive on different screen sizes.
- Application should provide a simple intuitive interface that is easy to navigate.
- Sites layout and colorscheme is pleasing and keeps users coming back to it.

### Problem Statement
Every project needs a problem statement and for this project the following statement was generated:

- "I am **a user** trying to **find an application where I can share, read and follow content about the books I like** but **I can't find one** because **other applications aren't specific enough** which makes me feel **like I can't share my passion for books with anyone**."

### Frontend Developer Role 
This project was made with an intent to demonstrate advanced frontend skills and few pricipals were followed in order to simulate the essential and important role that frontend developers play in a larger team:
- Craft an user interfaces (UI) and optimize user experiences (UX). 
- Design and implement visually appealing interface, ensuring compatibility across different browsers and devices.
- Integrate Front-End to the Back-End systems. 
- Stay aware of the user needs and optimize performance for faster loading times. 
- Goal should to deliver engaging and user-friendly web applications.

# Features
<details>

</details>

## UX/UI - Design
### Wireframes
- Wireframes were made with Figma.
- Wireframes were made to have quidelines for styling the pages, but not set rules for final product. 
- Released project was broadly similar to the drafted wireframes.
- Most notable changes to the wireframes was the review cards layout. 

<details align=left>
<summary>Home Page</summary>
  <img src="readme/wireframes/wireframe-home-page-desktop.png" height=250>
  <img src="readme/wireframes/wireframe-home-mobile.png" height=250>

  *Wireframe for the home page on desktop and mobile*
</details>

<details align=left>
<summary>Sign In and Sign Up page</summary>
  
  <img src="readme/wireframes/wireframe-signin-desktop.png" height=250>
  <img src="readme/wireframes/wireframe-signin-mobile.png" height=250>

  *Wireframe for the Sign In page on desktop and mobile.*

<img src="readme/wireframes/wireframe-signup-desktop.png" height=250>
<img src="readme/wireframes/wireframe-signup-mobile.png" height=250>

  *Wireframe for the Sign Up page on desktop and mobile.*

</details>

<details align=left>
<summary>Review Page</summary>
  
  <img src="readme/wireframes/wireframe-review-desktop.png" height=250>
  <img src="readme/wireframes/wireframe-review-mobile.png" height=250>

  *Wireframe for the Review page on desktop and mobile.*

</details>

<details align=left>
<summary>Profile Page</summary>
  
  <img src="readme/wireframes/wireframe-profile-desktop.png" height=250>
  <img src="readme/wireframes/wireframe-profile-mobile.png" height=250>

  *Wireframe for the Review page on desktop and mobile.*
</details>

<details align=left>
<summary>Creat/Edit/Delete Form</summary>
  
  <img src="readme/wireframes/wireframe-crudform-desktop.png" height=250>
  <img src="readme/wireframes/wireframe-crudform-mobile.png" height=250>

  *Wireframe for the Review page on desktop and mobile.*
</details>

### Color Scheme
Following color were selected for the project:
- Charcoal : Text, borders and details
- Mint Green : Logo, Highlights
- Coral Red : Logo, Highlights
- White : Background and models
- Smoke White/Grey : Background

<img src="readme/color-schema.png" width="75%">

## Component Design - FrontEnd/React
To be updated!

## Data Design - Backend/Django Rest Framework
A design for data was drafted using [diagrams.net](https://app.diagrams.net/).

The data diagram has 5 models user, profile, review, comment and like.
<details><summary>View the digram</summary>
<div align=center>
 <img src="readme/entity-relationship-diagram.png" width=65% align=center>
</div>
</details>


## Agile Stragety
Agile methodologies were applied in the development process of this project. Following principles were kept in mind during he process:
- Development process maintained flexible, so changes could be implemented if it yielded better results.
- Features where kept to minimum, avoiding useless features.
- Features were implemented in order of priority.
- Project was developed in small iterations in order ensure functionality of each feature implemented.
- Github Project board was used as an information radiator to manage feature implementation.
- User Stories were used to design user centric features

## User Stories
User Stories were made using the Github _Issues_ feature. Each issue equated a User Story. Each Issue was tagged with a lable, a Github Issues feature, based on it's importance for the application. Following labels were created (listed in order of importance): 
- Must have
- Should have
- Could have
- Nice to have

Issues were added on the Github Projects Boards, a builtin management tool from GitHub, as tasks. The implementation of the features was tracked by moving the tasks on each of the boards column. Three columns were named: Todo, InProgress and Done.

All together **number** user stories were drafted and Acceptance Criteria together with Tasks were created. View all user stories on the repository issues or on the project board [@P5 Book Review App Kanban](https://github.com/users/HMuraja/projects/5/views/1).

### Backend User Stories
Following **9** user stories were implemented during the development of the backedn API. Please see the [project issues](https://github.com/HMuraja/p5-book-review/issues) for the relevant userstories with the **BackEnd tag**.

| Title                     | Story                                                                                                                                        | Priority               | Implemented |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ----------- |
| Profile Model | As a **user/viewer** As a **user** I can **view, edit and delete my profile** so that **I can personalize my account and view my data** | Must Have | Yes |
| Review Model | As a **user** I can **create, edit and delete review** so that **I can share a review on books l have read** | Must Have | Yes          |
| Comment Model | As a **user** I can **easily create a comment and edit/delete it if i want to** so that **I discuss of any reviews I am interested of**.| Must Have | Yes  |
| View Comment Instance | As a **viewer** I can **easily see comments other have made to the review** so that **I can see what other people though about the review**| Should Have | Yes          |
| Like Model | As a **user** I can **boost the reviews I think are good** so that **I can have an impact on the quality of the reviews posted**| Should Have | Yes          |
| Like Feed | As a **user** I can **view the reviews I liked** so that **I can find easily any reviews that I liked** | Should Have | Yes          |
| Follow Model | As a **user** I can **follow users that I like** so that **I modify my personal feed to include reviews from users I like** | Could Have | Yes          |
| Authentication - Backend | As a **user** I can **easily login and logout** so that **I can access the content and be recognized as a logged in user by the application**.| Could Have | Yes          |
| Profile Summary - Backend | As a **user/viewer** I can **view anyone's profile details** so that **I can see a summary of their interactions and activity**. | Could Have | Yes          |


### Frontend User Stories
Following **11** user stories were implemented during the development of the fronend interface. Please see the [project issues](https://github.com/HMuraja/p5-book-review/issues) for the relevant userstories with the **frontend tag**.

| Title                     | Story                                                                                                                                        | Priority               | Implemented |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ----------- |
| Navigation| As a **user** I can **view a navbar from every page** so that **I can navigate easily between pages**. | Must Have | Yes |
| Authentication | As a **user** I can **easily login and logout** so that **I can access the content and be recognized as a logged in user by the application**. | Must Have | Yes          |
| Routing | As a **user** I can **navigate through pages quickly** so that **I can view content seamlessly without page refresh**.| Must Have | Yes  |
| Create Review | As a **user** I can **easily make a review or edit a review** so that **I can share my thought on my read books**. | must Have | Yes          |
| User Profile View | As a **user** I can **view other user profiles** so that **I can find and follow like minded users**.| Could Have | Yes          |
| Edit Profile | As a **user** I can **view, edit or delete my profile** so that **I have full control over how I am displayed on this website** | Should Have | Yes          |
| View Comment | As a **a user** I can **read comments** so that **I can see what is the reception for the review**. | Should Have | Yes          |
| Leave a Comment | As a **logged in user** I can **leave and edit comments** so that **I can share my point of view on the reviews.**.  | Should Have | Yes          |
| Following | As a **logged in user** I can **follow other users** so that **I can receive personalized reviews and encourage the followed user to stay active**. | Could Have | Yes          |
| Like Review | As a **logged in user** I can **like a review ** so that **I can encourage reviews I deem good or/and share my opinion on the posted review**. | Should Have | Yes          |
| Read Review | As a **user** I can **easily access the reviews made by others** so that **I can read content made by other users**. | Must Have | Yes          |


## Features
### Landing Page
The home page or landing displays all the shared review cards. All reviews are displayed one after each other and 10 reviews are downloaded at the time, and if user scrolls down more reviews are displayed. Each review card displays an image of the reviewer, book/a placeholder, book title, and caption for the review. 

On the right hand side(desktop) or on the top of post(mobile) 5 most popular profiles are displayed.

On the top of the posts you have a search bar enabling you to search reviews based on the title or author.

### Header/Navigation Menu
App icon and the navigation items are placed on the top of the application. The navigation menu items are links to home, feed, profile and signup pages. Navigatio options available for the viewer are login, signup and home. Icon works as a link to home page. 
 
On Medium sized screens and smaller the menu collapses into a dropdown menu.
 
### Review Page
If the user clicks on the book image, they are lead on to the review's page where user can read the review and view comments. 

If the logged in user is the owner of the review, a three dot icon appears and allows user to edit or delete the review.

On the bottom of the body the date of creation is detailed and the comment section starts. If user isn't logged in they may only view the the recipe details and any comments that other users have left.

Any users logged can use a leave a comment form to leave a comment and edit or delete any comments left.

### Like
If the user wants to like a review they have to log in and navigate to the review they like. On the review card they must click on the heart icon, in order to like it or unlike it. The page will refresh and the number of likes will be updated and the heart icon will change depending on if the user liked (solid colored heart icon) or unliked (outlined icon). 

### Login

If the user has already signed up and are logged out from their account they can press *Login* button on the navigation menu and a login window will open up.

User needs to enter username and their password and click login. The login form will be validated and an error message will display if the login isn't succesful.

Also, the navigation menu won't have items *Sign Up* or *Login* instead there are *Logout* and *Add Review* instead. 

### Signup

If the user wan't to carry out any other functionalities on the site other than viewing data, they must create a account to do that. They can do it by clicking on the signup button on the navigation menu. This opens a signup form that the new user must fill.

### Logout

Once logged in simply click log out from the top of the navbar.

### Add Reviw

If user wants to create a recipe they must click on the button at the navigation menu or the navigation link stating *Add Review*.

Clicking the link or the button should open the page with the "Add a Review"-form. All the fields, title, author, caption, content and score, are mandatory. If the user won't select an image it will be replaced with a placeholder image.

A succesful submission will take the user to the review page.

### Edit Review
Logged in review owner has the option to edit review on the review detail page. 

### Delete Review
Logged in review owner has the option to delete review on the review detail page.

## Reuse of components
ReadRave, just like other React applications, is built of of components. Each component represents a part of the UI. It is a common practice to reuse components in React application as this makes the application maintenace and build easier and more flexible. 

Reuse means that the same component is used to render UI features for the application in multiple places. This reduces the need to repeat a similar code and therefore make the code more consise and readable.

Below are few examples of the reusable components. 

### Avatar.js

Avatar.js-component renders the user image and name. It is required in multiple places:
- In **Review.js**, it is used to render the image and name of the review author on top of each review card. 
- In **Profile.js** avatar is used to render the image and name for a user.
- In **NavBar.js** avatar is used to render the logged in users name and image. 

It accepts 4 props, image source, that renders the image for the avatar, a text that renders the text following the image, height for the image and a navBar parameter. All 4 properties define how Avatar componenent is defined in the given situation. 

### Asset.js
An asset componenet was used to render spinners, message images or message text. Asset.js was used in:
- **ReviewsPage** before content has been loaded and when more content is being loaded.
- **ReviewPage** before comments are loaded. 
- **PopularProfiles** before profiles are loaded.

Asset componenet can take 3 props: spinner, src and message. More props are defined more complex asset instance is built.

### Comment.js
Comment.js renders a comment instance details in user friendly form, detailing, comment author, comment, comment date and comment author image. The comment details just need to be given as props for the component once it is called. This way comments can be displayed in easy and readable form anywhere in the app, for exmple in **ReviewPage.js** each comment for the review are rendered by calling the comment component inside the map method. 

### Profile.js
Profile component renders user id and image as a link to profile page, as well as a follow and unfollow buttons. Previously mentioned Asset.js is used to build this componenet, which is a great example how components can be nested inside eachother. Profile.js component is reused on **PopularProfiles.js** component to render a list of most popular profiles.

### Review.js
Review  component is used to render the review isntance for the UI. It renders the book image, book name, author name, review author and their profile, date of creation, caption and book genre. The component is reused in **Reviews.js** to render a list of all the reviews published, each review is an instance of the Review.js component. Review.js is a good example of how the same component instances can have completely different content, yet similar "layout". Review.js takes the review instances as the prop, providing the dirrence between each component instance. 

### ReviewsPage.js
As previously mentioned review component is reused inside the ReviewsPage.js component, but the ReviewsPage.js component is reused inside the App.js component. App.js the **root component** of the application and an "entry point" for all the other components. On this component ReviewsPage.js is used to render:
- Homepage that renders all the reviews.
- Feedpage that renders reviews from the authors the user follows.
- Likedpage that renders the reviews user liked. 

The contnent on the ReviewsPage.js is determined by the "filter" props value, as it is used as the part of *axiosReq.get* command when fetching the review data. This way the reviews used on the ReviewsPage-component instance to generate instances of Review-component can be customized as needed. 

## Languages Used
**HTML5** - Used on templates to build the structure of the sites and render an iterface.   
**CSS3** - Used to add design to the html structure for more pleasing interface.  
**Python** - Used as the backend language.   
**JavaScript** - Used as the frontend language.

## Backend Frameworks and Libraries
Versions for all the libraries can be seen in the requirements.txt.
- **asgiref**: ASGI stands for Asynchronous Server Gateway Interface, which is a standard for Python asynchronous web servers and applications.
- **cloudinary**: A cloud-based image and video storage service with features like uploading, optimization, and delivery.
- **dj-database-url**: A utility for Django projects to utilize database configuration via URLs.
- **dj-rest-auth**: Provides authentication features for Django REST framework.
- Django: A high-level Python web framework that encourages rapid development and clean, pragmatic design.
- **django-allauth**: Authentication app for Django that handles various authentication methods.
- **django-cloudinary-storage**: A storage backend for Django to use Cloudinary for file storage.
- django-cors-headers: A Django application for handling the server headers required for Cross-Origin Resource Sharing (CORS).
- **django-filter**: A Django application for allowing users to filter queryset dynamically.
- **djangorestframework**: A powerful and flexible toolkit for building Web APIs in Django.
- djangorestframework-simplejwt: Provides a JSON Web Token authentication backend for Django REST framework.
- **gunicorn**: A Python WSGI HTTP server for deploying web applications.
- **oauthlib**: A generic, spec-compliant, thorough implementation of the OAuth request-signing logic.
- **Pillow**: A Python Imaging Library (PIL) fork for opening, manipulating, and saving image files.
- **psycopg2**: PostgreSQL adapter for Python.
- **PyJWT**: JSON Web Token implementation in Python.
- **python3-openid**: A set of Python packages to support use of the OpenID decentralized identity system.
- **pytz**: World timezone definitions, modern and historical.
- **requests-oauthlib**: OAuthlib support for Python requests.
- **sqlparse**: A non-validating SQL parser module for Python.
- **urllib3**: A powerful HTTP client for Python, which provides a simple interface for making HTTP requests.
- **whitenoise**: Radically simplified static file serving for Python web apps.

## Frontend Dependencies
See the version for the depencies inside the **package.json**, that can be found inside the frontend folder of this repository.

- **react-router-dom**: Enables navigation between different parts of a React app without refreshing the page (client-side routing).
- **react-dom**: Provides methods for rendering React components into the browser's DOM.
- **axios**: A promise-based HTTP client for making requests to APIs and fetching data.
- **jwt-decode**: Decodes JSON Web Tokens (JWTs) for authentication purposes.
- **react-infinite-scroll-component**: Allows easy implementation of infinite scrolling, dynamically loading content as the user scrolls down a page.

## Software and Web Applications Used
Following applications were used to make this project:

- **App Diagrams** - An application used to create database diagrams to visualize the data structure.
- **Cloudinary** - A cloud-based storage for static files, used to store project images.
- **Coolors** -  Used to generate image of the color scheme.
- **ElephantSQL** - A PostgreSQL database hosting service used to store data in this process.
- **FontAwesome** - Used to generate icons for the project.
- **GitHub** - An online repository and version control. Also used as the project management tool.
- **GitPod** - An online code editor used during this process.
- **Google Chrome Dev Tools** - A tool provided by Chrome browser, used to troubleshoot and test responsiveness of the application.
- **Google Fonts** - A free online library of fonts. Used for applying suitable fonts for the project.
- **Heroku** - A cloud platform that is used to deploy the applications.
- **Figma** - Used for creating the site wireframes.

# Testing
Final product was manually tested against the user storie's acceptance criteria. 

- **Backend** was tested against the *Backend*-tagged user stories.
- **Frontend** application was tested against the *Frontend*-tagged user stories. 

See the criterias and testing results below for each *Backend* and *Frontend* below.

In addition, responsivity and code was tested manually. 

### Backend User Stories - Tests

The final product was tested to confirm all acceptance criteria on the user stories, labelled as Backend found from [issues](https://github.com/HMuraja/p5-book-review/issues) was fulfilled. Below is the summary of all the user stories and the acceptance criteria. All criterias were fullfilled.

<details>
<summary>USER STORY: View Comment Instances</summary>
<div>As a **viewer** I can **easily see comments other have made to the review** so that **I can see what other people though about the review**.</div>

- *Acceptance Criteria*
    - [x] **Acceptance Criteria 1:** List all comment instances.
    - [x]  **Acceptance Criteria 2:** Filter comment instances based on the review.

</details>
<details>
<summary>USER STORY: API and Front End Communication - Must Have</summary>

As a **user** I can **easily access data saved on the application** so that **I can interact with others and the application seamlessly.**

- *Acceptance Criteria*
    - [x] **Acceptance Criteria 1:** Build an API that generates JSON data for the front end to consume.
    - [x]  **Acceptance Criteria 2:** Front end is able to send data to the API to consume. 
    - [x] **Acceptance Criteria 3:** Application features behave smoothly and easy to understand manner.
</details>
<details>
<summary>USER STORY: Like Feed</summary>
As a **user** I can **view the reviews I liked** so that **I can find easily any reviews that I liked**.

- *Acceptance Criteria*
    - [x] **Acceptance Criteria 1:** All like instances are listed.
    - [x]  **Acceptance Criteria 2:** Like instance list can be filtered according to the owner of the instance.
</details>
<details>
<summary>USER STORY: Like Model</summary>
As a **user** I can **boost the reviews I think are good** so that **I can have an impact on the quality of the reviews posted**

- *Acceptance Criteria*
    - [x] **Acceptance Criteria 1:** Logged in user can create and delete an like instance
    - [x]  **Acceptance Criteria 2:** Creating an instance automatically adds the liked review id to the like field.
</details>
<details>
<summary>USER STORY: Follow Model</summary>

As a **user** I can **follow users that I like** so that **I modify my personal feed to include reviews from users I like**

- *Acceptance Criteria*
    - [x] **Acceptance Criteria 1:** Followed field and following fields of the instance should be unique pairs in order to avoid duplicate follows from one person.
    - [x]  **Acceptance Criteria 2:** Users can easily create follow instance and delete it.
    - [x] **Acceptance Criteria 3:** User id is automatically added to the following field in creation.
    - [x] **Acceptance Criteria 4:** All follow ids can be listed and filtered according to the following field user id.
</details>
<details>
<summary>USER STORY: Profile Summary - Backend</summary>

As a **user/viewer** I can **view anyone's profile details** so that **I can see a summary of their interactions and activity**.

- *Acceptance Criteria*
    - [x] **Acceptance Criteria 1:** List all reviews for the specified user profile. 
    - [x] **Acceptance Criteria 2:** List all the followed ids for the specified user profile.
    - [x] **Acceptance Criteria 3:** List all the follower ids for the specified user profile.
</details>
<details>
<summary>USER STORY: Authentication - Backend</summary>

As a **user** I can **easily login and logout** so that **I can access the content and be recognized as a logged in user by the application**.

- *Acceptance Criteria*
    - [x] **Acceptance Criteria 1:** An instance of user and profile model class are created when user signs up.
    - [x] **Acceptance Criteria 1:** Users id is automatically added to any of the instances they create.
    - [x] **Acceptance Criteria 1:** Users can't create instances without being logged in. 
</details>
<details>
<summary>USER STORY: Profile Model</summary>

As a **user** I can **view, edit and delete my profile** so that **I can personalize my account and view my data**

- *Acceptance Criteria*
    - [x] **Acceptance Criteria 1:** A profile is automatically created and saved after user logs in.
    - [x]  **Acceptance Criteria 2:** A placeholder image is added initially when profile is created.
    - [x] **Acceptance Criteria 3:** Profile summarizes all the profiles followed, number of liked reviews and made number of reviews made.
    - [x] **Acceptance Criteria 4:** Profile has a description field that the user can add.
    - [x] **Acceptance Criteria 4:** User can edit username, password and profile image to their profile.
</details>
<details>
<summary>USER STORY: Profile Model</summary>

As a **user** I can **view, edit and delete my profile** so that **I can personalize my account and view my data**

- *Acceptance Criteria*
    - [x] **Acceptance Criteria 1:** A profile is automatically created and saved after user logs in.
    - [x]  **Acceptance Criteria 2:** A placeholder image is added initially when profile is created.
    - [x] **Acceptance Criteria 3:** Profile summarizes all the profiles followed, number of liked reviews and made number of reviews made.
    - [x] **Acceptance Criteria 4:** Profile has a description field that the user can add.
    - [x] **Acceptance Criteria 4:** User can edit username, password and profile image to their profile.
</details>
<details>
<summary>USER STORY: Review Model</summary>

As a **user** I can **create, edit and delete review** so that **I can share a review on books l have read**

- *Acceptance Criteria*
    - [x] **Acceptance Criteria 1:** User can create and delete a review.
    - [x]  **Acceptance Criteria 2:** User can edit the title, caption, content and image.
</details>
<details>
<summary>USER STORY: Comment Model</summary>

As a **user** I can **easily create a comment and edit/delete it if i want to ** so that **I discuss of any reviews I am interested of**

- *Acceptance Criteria*
    - [x] **Acceptance Criteria 1:** User can add a comment to a review they like.
    - [x]  **Acceptance Criteria 2:** Review id is added automatically to the comment instance.
    - [x] **Acceptance Criteria 3:** User can edit or delete an comment instance they made.
</details>
<details>
<summary>USER STORY: Follow Model</summary>

As a **user** I can **follow users that I like** so that **I modify my personal feed to include reviews from users I like**

- *Acceptance Criteria*
    - [x] **Acceptance Criteria 1:** Followed field and following fields of the instance should be unique pairs in order to avoid duplicate follows from one person.
    - [x]  **Acceptance Criteria 2:** Users can easily create follow instance and delete it.
    - [x] **Acceptance Criteria 3:** User id is automatically added to the following field in creation.
    - [x] **Acceptance Criteria 4:** All follow ids can be listed and filtered according to the following field user id.
</details>
<details>
<summary>USER STORY: Like Feed</summary>

As a **user** I can **view the reviews I liked** so that **I can find easily any reviews that I liked**.

- *Acceptance Criteria*
    - [x] **Acceptance Criteria 1:** All like instances are listed.
    - [x]  **Acceptance Criteria 2:** Like instance list can be filtered according to the owner of the instance.
</details>
<details>
<summary>USER STORY: Like Model</summary>

As a **user** I can **boost the reviews I think are good** so that **I can have an impact on the quality of the reviews posted**

- *Acceptance Criteria*
    - [x] **Acceptance Criteria 1:** Logged in user can create and delete an like instance
    - [x]  **Acceptance Criteria 2:** Creating an instance automatically adds the liked review id to the like field.
</details>

### Frontend User Stories - Test
The final product was tested to confirm all acceptance criteria on the user stories, labelled as frontend found from [issues](https://github.com/HMuraja/p5-book-review/issues) was fulfilled. Below is the summary of all the user stories and the acceptance criteria. All criterias were fullfilled.

<details>
<summary>USER STORY: Following - Could Have</summary>

As a **logged in user** I can **follow other users** so that **I can receive personalized reviews and encourage the followed user to stay active**.

- *Acceptance Criteria*::
    - [x] **Acceptance Criteria 1:** An easy button is accessible for users to follow and follow. 
    - [x]  **Acceptance Criteria 2:** Users have an overview of followed profiles in their own profile. 
    - [x] **Acceptance Criteria 3:** Users personal feed has reviews only from the followed users..
</details>
<details>
<summary>USER STORY: Navigation -Must Have</summary>

As a **user** I can **view a navbar from every page** so that **I can navigate easily between pages**.

- *Acceptance Criteria:*
    - [x] **Acceptance Criteria 1:** The navbar is visible on each page and all icons are clear and reable.
    - [x] **Acceptance Criteria 2:** The navbar collapses on mobile view.
    - [x] **Acceptance Criteria 3:** Home, log in and sign up links are the only visible  links for users that are **not** logged in.
    - [x] **Acceptance Criteria 4:** Home, log out, add review, my profile and liked links are visible  only for the logged in users.
</details>
<details>
<summary>USER STORY: Authentication - MustHave</summary>
    
As a **user** I can **easily login and logout** so that **I can access the content and be recognized as a logged in user by the application**.

- *Acceptance Criteria*::
    - [x] **Acceptance Criteria 1:** Users are required to log in before accessing any of the CRUD functionalities, apart from signing up.
    - [x] **Acceptance Criteria 2:** Logged in user can access all the features of the application once logged in.
    - [x] **Acceptance Criteria 3:** User who hasn't logged in can't access urls that they aren't authorized to and are redirected to the login page.
</details>
<details>
<summary>USER STORY: Routing - Must Have</summary>

As a **user** I can **navigate through pages quickly** so that **I can view content seamlessly without page refresh**.

- *Acceptance Criteria*:
    - [x] **Acceptance Criteria 1: When any link on the pages is clicked only the relevant components will refresh.
</details>
<details>
<summary>USER STORY: Create Reviews</summary>

As a **user** I can **easily make a review or edit a review** so that **I can share my thought on my read books**.

- *Acceptance Criteria*::
    - [x] **Acceptance Criteria 1:** Function for creating reviews is accessible everywhere for the logged in user.
    - [x]  **Acceptance Criteria 2:** Creating review is easy and simple process. 
    - [x] **Acceptance Criteria 3:** Only the owner of the review can edit or delete the review.
</details>
<details>
<summary>USER STORY: User Profile View</summary>

As a **user** I can **view other user profiles** so that **I can find and follow like minded users**.

- *Acceptance Criteria*::
    - [x] **Acceptance Criteria 1:** User profiles are accessible for all users. 
    - [x]  **Acceptance Criteria 2:** User profiles summarize the profile offer meaningful data of the selected user. 
</details>
<details>
<summary>USER STORY: Edit profile Should Have</summary>

As a **user** I can **view, edit or delete my profile** so that **I have full control over how I am displayed on this website**

- *Acceptance Criteria*::
    - [x] **Acceptance Criteria 1:** My profile is easy for the user to access. 
    - [x]  **Acceptance Criteria 2:** Editing and deleting the profile is easy and straight forward
    - [x] **Acceptance Criteria 3:** User can personalize the profile to reflect them.
    - [x]  **Acceptance Criteria 3:** Profile displays clear summary of the user details. 
</details>
<details>
<summary>USER STORY: View Comments Should Have</summary>

As a **a user** I can **read comments** so that **I can see what is the reception for the review**.

- *Acceptance Criteria*::
    - [x] **Acceptance Criteria 1:** Any user logged in or not can view comments.
</details>
<details>
<summary>USER STORY: Leave a comment- Should Have</summary>


As a **logged in user** I can **leave and edit comments** so that **I can share my point of view on the reviews.*.

- *Acceptance Criteria*::
    - [x] **Acceptance Criteria 1:** Leave comment functionality is easily available on the reviews. 
    - [x]  **Acceptance Criteria 2:** Leaving comments is easy and straight forward.
    - [x] **Acceptance Criteria 3:** Editing or deleting comments is easy and straightforward.
    - [x] **Acceptance Criteria :** Display edit/delete option only for the logged in users.
</details>
<details>
<summary>USER STORY: Like reviews</summary>

As a **logged in user** I can **like a review ** so that **I can encourage reviews I deem good or/and share my opinion on the posted review**.

- *Acceptance Criteria*::
    - [x] **Acceptance Criteria 1:** A easily visible like button is present in all reviews.
    - [x]  **Acceptance Criteria 2:** In the review details user can like/unlike a post by just clicking the hart icon present.
    - [x] **Acceptance Criteria 3:** A number of total likes is visible on the review.
    - [x] **Acceptance Criteria :** Indicate to the user if they have already liked a post.
</details>
<details>
<summary>USER STORY: Read Reviews</summary>

As a **user** I can **easily access the reviews made by others** so that **I can read content made by other users**.

- *Acceptance Criteria*::
    - [x] **Acceptance Criteria 1:** Any user logged in or not can view list of reviews on the home page.
    - [x]  **Acceptance Criteria 2:** Any user can view review details by clicking the review. 
    - [x] **Acceptance Criteria 3:** Review details all the information reader might be interested of.
    - [x] **Acceptance Criteria 4:** Users easily find the reviews they are interested of. 
    - [x] **Acceptance Criteria 5:** Listed reviews display an easy to disgest summary of the review.

</details>

### Responsivness
The website was tested on diffrent screensizes using the Google Developer Tools to ensure user interface was responding accordingly on different screensizes. 

All features of the ReadRave website were tested on 4 different screensizes:

- iPhone 12 pro (390 x 844 px)
- Galaxy Fold (280 x 653 px)
- iPad Mini (768 x 1024 px)
- Average Laptop Screensize (1366 x 768 px)

Website interface responded well on all the screensizes tested above. All text was readable and content wasn't shifting or covered when changing screensizes. All links, buttons and forms or other actionable features were easy to see and use in all screen sizes.
# Code Validation
### Python Code Validation
All Django Rest/API files were tested using the [CI Python Linter](https://pep8ci.herokuapp.com/). No errors were detected. 

<div align=center>
 <img src="readme/ci-py-linter-results.png" width=65% align=center>
</div>

### CSS Code Validation
ReadRave was ran through [w3 CSS Validator](https://jigsaw.w3.org/css-validator/) and no errors were detected.

<div align=center>
 <img src="readme/css-validator.png" width=65% align=center>
</div>

### 
# Deployment
### API Deployment
Once API was built it was deployed in Heroku.

<details><summary>View the steps</summary>

1. First step was to set up an external database in Elephant SQL.

2. A new Instance in ElephantSQL was created and the database URL was added to the env.py with key DATABASE_URL:

        os.environ['DATABASE_URL'] = '<your PostgreSQL URL goes here, starts with "postgres://...">'

5. In the IDE, dj_database_url and psycopg2 were installed as they are needed to connect the external database. Installation was carried out via the IDE termnial whith the following command:
        pip3 install dj_database_url==0.5.0 psycopg2
6. Installed libraries were imported to the rr_drf settings.py file:
        import os
        import dj_database_url
7. Next update the DATABASE section with the following:
        
    if 'DEV' in os.environ:
        DATABASES = {
            'default': {
                'ENGINE': 'django.db.backends.sqlite3',
                'NAME': BASE_DIR / 'db.sqlite3',
            }
        }
    else:
        DATABASES = {
            'default': dj_database_url.parse(os.environ.get("DATABASE_URL"))
        }
8. In env.py environment variable'DEV' was commented out:
    # os.environ['DEV'] = '1'
9. All the database models were migrated to the new database:
    python3 manage.py migrate
10. New superuser was created and a applicaple superuser and password was created:
    python3 manage.py createsuperuser
11. The second part of the prepartion project was prepared for deployment in Heroku. 
12. Using the IDE workspace terminal gunicorn was installed:
     pip3 install gunicorn django-cors-headers
14. A new file called "Procfile" was created, with the following commands inside it:
     release: python manage.py makemigrations && python manage.py migrate
     web: gunicorn drf_api.wsgi
15. In rr_drf folders settins.py ALLOWED_HOST variable was updated as follows:
     ALLOWED_HOSTS = ['localhost', 'read-rave.herokuapp.com']
16. INSTALLED_APPS was updated as follows:
    INSTALLED_APPS = [
    ...
    'dj_rest_auth.registration',
    'corsheaders',
    ...
    ]
17. The 'corsheaders.middleware.CorsMiddleware' was added as the first item on the MIDDLEWARE-list: 
    MIDDLEWARE = [
        'corsheaders.middleware.CorsMiddleware',
        ...
    ]
18. Added an ALLOWED_ORIGINS variable right under the MIDDLEWARE list:
    CORS_ALLOWED_ORIGINS = [
         os.environ.get('CLIENT_ORIGIN'),
    ]
19. Added  CORS_ALLOW_CREDENTIALS = True right under ALLOWED_ORIGINS so that cookie sending is enabled.
    CORS_ALLOW_CREDENTIALS = True

20. Switched JWT_AUTH_SAMESITE to variable to 'None':

     JWT_AUTH_SAMESITE = 'None
21. Changed DEBUG variable:
     DEBUG = 'DEV' in os.environ

22. Requirements.txt was updated:
      pip freeze --local > requirements.txt

4. In Heroku a new app called 'read-rave' was created. 

5. In *settings* of the created app Config Vars key value pairs were set to be as displayed below:
        
        KEY: ALLOWED_HOST           VALUE: read-rave-86b7234dccae.herokuapp.com
        KEY: CLOUDINARY_URL         VALUE: cloudinary:/...
        KEY: DATABASE_URL           VALUE: postgres://...
        KEY: DISABLE_COLLECTSATIC   VALUE: 1
        KEY: SECRET_KEY             VALUE: django-insecure-...

5. In *Deploy* tab of the app *Deployement* method was selected to be GitHUb.
6. *App connected to GitHub* was selected to the the *p5-book-review*.
7. On *Manual Deploy* Deploye Branch was clicked to deploye the API.
8. As a prepartion for the frontend side the env.py was updated to look as below:
        import os
        os.environ['CLOUDINARY_URL'] = 'cloudinary:/...'
        os.environ['ALLOWED_HOST'] = 'https://read-rave-86b7234dccae.herokuapp.com'
        os.environ['SECRET_KEY'] = 'django-insecure-...'
        os.environ['DATABASE_URL'] = 'postgres://...'

</details>

### Deploying the Complete Application
As the React application is integrated into the API repository, a second deployment was required for the final product. Once React application was done second deployment was started. 

<details><summary>View the steps</summary>

1. Static files needed to be set up in addition to few other things.
2. White noise was installed in the root directory:
    ~~~~
    pip3 install whitenoise==6.4.0
    ~~~~
3. New dependency was saved to requirements.txt.
4. A new folder called "statcifiles" was added to the root directory.
5. In settings.py following steps were performed:
    - Added 'django.contrib.staticfiles', 'cloudinary_storage' and 'cloudinary'(**note** to use the given order) in INSTALLED_APPS. 
    - Added white noise to MIDDLEWARE using the strip below and place it right between securityMiddleware and SessionMiddleware:
    ~~~~
    whitenoise.middleware.WhiteNoiseMiddleware
    ~~~~
    - In order for Django and React to find React Index.html the below line was added in TEMPLATES in DIR keys list:
    ~~~~
    os.path.join(BASE_DIR, 'staticfiles', 'build')
    ~~~~
    - Added the following to the staticroot section:
    ~~~~
    STATIC_ROOT = BASE_DIR / 'staticfiles'
    WHITENOISE_ROOT = BASE_DIR / 'staticfiles' / 'build'
    ~~~~
6. In order for the react application to be interface for the project instead of the API, it needed to be added to domains root URL:
    - Inside the rr_api's urls.py.
    - Removed root_route import
    - Imported TemplateView:
    ~~~
    from django.views.generic import TemplateView
    ~~~~
    - In the urls_patterns list replaced root_route code with the following:
    ~~~
    path('', TemplateView.as_view(template_name='index.html'))
    ~~~~~
    - Added 'api/' in front of all the API urls, but **NOT** the home page path and admin panel.
7. All 404 errors should take the user back to React application, so the following was added to the rr_api urls.py:
    ~~~~
    handler404 = TemplateView.as_view(template_name='index.html')
    ~~~~
8. As the base path of API routes was changed, "/api" needed to be attached into all API requests from React, therefore following was added to axiosDefaults.js:
    ~~~~
    axios.defaults.baseURL = "/api";
    ~~~~
9. Staticfiles were collected from Django using the following command:
    ~~~~
    python manage.py collectstatic
    ~~~~
10. Static files were collected from React using the following command:
    ~~~~
    cd frontend
    npm run build && mv build ../staticfiles/.
    ~~~~
11. A *runtime.txt* was created and the used python version, **python-3.9.16** was added to it, so that HEroku knows which version to use.
12. As a final change in the repository the env.py comment out DEV and DEBUG parameters. 
13. All changes were commited.
14. The previously created 'read-rave' app was opened in Heroku.
15. In the settings tab and Config Vars was opened and add *'read-rave-86b7234dccae.herokuapp.com'* value for a CLIENT_ORIGIN key. The final Config Vars looked ike below:

        KEY: ALLOWED_HOST           VALUE: read-rave-86b7234dccae.herokuapp.com
        KEY: CLIENT_ORIGIN          VALUE: https://read-rave-86b7234dccae.herokuapp.com
        KEY: CLOUDINARY_URL         VALUE: cloudinary:/...
        KEY: DATABASE_URL           VALUE: postgres://...
        KEY: DISABLE_COLLECTSATIC   VALUE: 1
        KEY: SECRET_KEY             VALUE: django-insecure-...

16. In *Deploy* taball settings was kept as from previous delpoyment and on *Manual Deploy* Deploy Branch was clicked to deploy the complete application.

</details>

# Credits
Following resources were used to help build this project:
- SVG icons were obtained from [Font Awesome](https://fontawesome.com/)
- Book reviews and reviews content were taken from [Amazon](https://www.amazon.co.uk/)
- Placeholder image, cover photo and profile image was taken from [Pexels](https://www.pexels.com/)
- Code Institutes walk through process "Moments" was used as an inspiration for this project.
- [Django Docs](https://docs.djangoproject.com/en/4.2/) were used through out the process to solve issues and used for guidance.
- [React Bootsrap Docs]([https://getbootstrap.com/docs/5.3/getting-started/introduction/](https://react-bootstrap-v4.netlify.app/)) were used through out the process to solve issues and used for guidance.
- [React Docs](https://legacy.reactjs.org/) were used through out the process to solve issues and used for guidance.
- [wc3 CSS Validator](https://jigsaw.w3.org/css-validator/) was used to validate the CSS code
- [CI Python Linter](https://pep8ci.herokuapp.com/) was used to validate the python code.


