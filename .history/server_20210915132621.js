const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4000;
//routers
const { userRouter } = require("./src/Routers/routerCollection");
//database stuff
const mongoose = require("mongoose");

//middleware stuff
//cors middleware
app.use(cors({ origin: "https://user-profile-crud-api.netlify.app/" }));
//app.use(cors());

//parses incoming json to objects
app.use(express.json());
//router stuff
app.use(`/users/`, userRouter);

app.get("/", (req, res) => res.send(`Backend is up and running`));

//connect to mongodb
const dbURI = process.env.DBURI;
//mongoose.connect is an asynchronous task that takes time, so it returns a promise
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
  })
  .then(result => {
    console.log("connected to db");
    app.listen(PORT, () =>
      console.log(`Server is up and running in port ${PORT}`)
    );
  })
  .catch(err => console.log(err));
