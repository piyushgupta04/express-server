const express = require("express")
const app = express()
const figlet = require("figlet")

const port = 8080;

app.listen(port, ()=>{
    figlet("Done !", function (err, data) {
  if (err) {
    console.log("Brr ...");
    console.dir(err);
    return;
  }
  console.log(data);
});
})

app.get("/up", (req, res)=>{
    res.send({
        status: 200,
        createdBy: "xD"
    })
})

