const express = require("express");
const app = express();

//order is very important
app.get("/getUserData", (req, res) => {
  try {
    throw new Error("this is test");
    res.send("data is sent");
  } catch (err) {
    res.status(500).send("this is from internal server error");
  }
  // Logic of DB call and get user data
});

app.use("/", (err, req, res, next) => {
  if (err) {
    //Log your error
    res.status(500).send("sorry something wrong");
  }
});

app.listen(3000, () => {
  console.log("The server is listening to 3000");
});
