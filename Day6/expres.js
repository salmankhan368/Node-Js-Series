const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello from home page");
});

app.get("/about", (req, res) => {
  res.send("Hello from about page");
});

app.get("/profile", (req, res) => {
  res.send("Hello from profile page");
});
app.get("/contacts",(req,res)=>{
    res.send("hello from contacts")
})

// 404: baqi sab routes ke baad
app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));