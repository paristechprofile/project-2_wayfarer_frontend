# Wayfarer by Fantastic 4

The front-end section for Wayfarer was created by Paris Taylor, Tiffany Teaze, Nassima Bouziane, and Jonathan Jolivette. Our short time spend on this project taught us how to create a react application with node, mongoose, and mongodb primarily. Our application helps travelers catalogue their favorite travel destinations.

https://project-wayfarer-app-frontend.herokuapp.com

## Technologies Used

- HTML
- CSS
- Javascript
- React.js
- React Materialize components and css styling
- Node.js
- MongoDB
- JWT Authentication 
- Bcrypt
- Trello
- Sketch
- Balsamiq

## Existing Features

- Carousel
- Login and Signup
- Create, read, and update functionality for users on the frontend
- City Cards in a list of cities that grab City ID from the frontend
- Full CRUD functionality for posts on backend

## Our Approach and Process
We believe that every great project begins with good planning from start to finish. So, we tracked our projects development in trello: 

- https://trello.com/b/NHSCMc4E/wayfarer-project-product-mgmt-fantastic-4

We began by wire-framing out our database structure, our component and dom tree, user stories, and sprints for each step of the way. We also began by setting up file structures and platforms so we could all start the project with the same tech. 

Our next goal was to psuedo code our backend routes and controllers and seed the database to determine if our json responses were behaving as expected
<br />

## Planned Features

- Full CRUD functionality for posts on frontend
- Redirect user to profile page on signup and signin
- Login/Signup modal
- Finish styling to resemble designer mockups
- Dynamically loading components on Cities page

## Challenges and Wins
Some challenges for us were:
- User authentication was a big win and challenge
- Fully functional routes and controllers for each route
- Trying to work around Materialize
- Axios calls for posts. Specifically grabbing by ID

Some wins for us were:
- 

<br />
One of our biggest challenges was authentication. We learned that every route that requires a JWT token needed special attention and detail-oriented focus.

Some of our wins were getting the user signed up and logged in and getting their information to render on their profile. Implementing all of our CRUD methods, and working out the bugs was also a big win. As we worked on these features, sometimes we found unnoticed bugs in previous parts of the code and we had to fix those issues first. 
<br />
Our team worked especially well when it came to pair programing. We found it much less painful to code with someone with a similar work-ethic and passion for good products. We also had a lot of fun together, and the jokes we shared helped ease the pain of connecting frontend to backend. 

---

##### Screenshots

- ERD posted to Trello
![ERD](https://monosnap.com/image/uBwb1NzH2i64OpwW9aHK9J99emltc5.png)

- Component Tree posted to Trello
![Component Tree](https://monosnap.com/image/j6r9dVHislbU2YM0xh9PkamPHVHgqp.png)

- Sketch mockups from our designer Jacquelyn Lamkin
![Sketch Mockups](https://monosnap.com/image/VLxFONb4GEDhtFccfwEwsUo1n5n6uT.png)

- Carousel Component
![Carousel Component](https://monosnap.com/image/vz1wE7uw7ix3MlhEba4GyUHKS70qr0.png)

- Axios call to submit user edit
![Submit User Edit](https://monosnap.com/image/db8ORi97wRSRnnLUowd3Z5Wy7ChzGN.png)

- Creating Posts and Users in relation to Cities
![Seeds Posts and Users inside Cities](https://monosnap.com/image/VFV2f5CVfFlMiINlrutQXzUHmb6ZTo.png)

- Create Post function in Cities Controller
![Create Post in Database](https://monosnap.com/image/qphhx1KLBlTxpBeak7d7sXIeS2SFi6.png)