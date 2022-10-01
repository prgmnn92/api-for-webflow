const express = require("express");



const app = express();


const PORT = process.env.PORT || 5001;



app.use(express.json());


// app.post("/ping", (req, res) => {
//   return res.send({
//     status: "Server is up and running",
//   });
// });

app.get('/', (req, res) => {
    res.json({response: 'Hello World!'})
  })
  


app.listen(PORT, () => {
  console.log("Server started listening on port : ", PORT);
});