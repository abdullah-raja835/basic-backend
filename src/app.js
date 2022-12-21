let express = require("express");
let app = express();
let path = require("path");
let port = process.env.PORT || 8000;

// Requiring from foreign
require("./db/conn");
let User = require('./models/schema')


// changing format 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// setting paths
let staticPath = path.join(__dirname, "../public");
let viewsPath = path.join(__dirname, "../public/views");

app.use(express.static(staticPath));
app.set("view engine", "ejs");
app.set("views", viewsPath);

app.get("/", (req, res) => {
  res.render("home");
});





// app.get("/contact", (req, res) => {
//   res.render("contact");
// });
app.post('/contact', async (req, res) => {
  try {
    let userData = new User({
      Name: req.body.name,
      Email: req.body.email,
      Password: req.body.password,
      Phone: req.body.phone,
      Message: req.body.msg


    });
    let ye = await userData.save();
    res.status(201).send('We have got your message')

  }
  catch (err) {
    res.status(500).send(err)
  }

})
app.listen(port, () => {
  console.log("Listeniing port at 8000");
});
