const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port=5000;


const homeRouter=require('./routers/home');
const commentsRouter=require('./routers/comments');
const logInRouter=require('./routers/login');
const signUpRouter=require('./routers/signUp');
const userProfileRouter=require('./routers/userProfile');
const postsRouter=require('./routers/posts');


app.use(homeRouter);
app.use(commentsRouter);
app.use(logInRouter);
app.use(signUpRouter);
app.use(userProfileRouter);
app.use(postsRouter);


















app.listen(port, () => {
    console.log(`The server is running on http://localhost:${port}`);
  });
  