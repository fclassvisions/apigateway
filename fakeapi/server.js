const express = require("express");
const app = express();
const axios = require("axios");
const HOST = "localhost";
const PORT = 3001;

app.use(express.json());
app.get("/fakeapi", (req, res, next) => {
  res.send("Hello From fake api server");
});
app.post("/bogusapi", (req, res, next) => {
  res.send("Bogus api says hello!");
});

app.listen(PORT, () => {
  const authString = "johndoe:password";
  const encodedAuthString = Buffer.from(authString, "utf8").toString("base64");
  console.log(encodedAuthString);

  axios({
    method: "POST",
    url: "http://localhost:3000/register",
    headers: {
      authorization: encodedAuthString,
      "Content-Type": "application/json",
    },
    data: {
      apiName: "registrytest",
      protocol: "http",
      host: HOST,
      port: PORT,
    },
  }).then((response) => {
    console.log(response.data);
  });
  console.log("Fake server started on port " + PORT);
});
