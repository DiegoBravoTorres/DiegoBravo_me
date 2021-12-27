
const path = require("path");
var express = require("express");
const exphbs = require('express-handlebars');

const app = express();

const dotenv = require('dotenv');
dotenv.config({path:"./config/keys.env"});

const sgMail = require('@sendgrid/mail');

// Configure Body Parser
app.use(express.urlencoded({ extended:false}));

// Setup a folder that contains static resources.
app.use(express.static("static"));


// Configure Handlebars
app.engine('.hbs', exphbs.engine({ 
  extname: '.hbs',
  defaultLayout: "main"
}));

app.set('view engine','.hbs');


// Configure Body Parser
app.use(express.urlencoded({ extended:false}));


//Internal pages route configuration

app.get("/headers", (req, res) => {
  const headers = req.headers;
  res.send(headers);

});




// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", (req, res) => {

res.render("index"),{
  name :req.body.name
};

  //res.sendFile(path.join(__dirname, "/views/index.hbs"));
});

app.post("/", (req,res)=>{
  console.log(req.body);
  console.log(req.body.name);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'diegobt30@gmail.com',
    from: 'dbravo-torres@myseneca.ca', // Use the email address or domain you verified above
    subject: 'From submission from diegobravo.me',
    html: `Sender :  ${req.body.name}<br>With the email : ${req.body.email}
    <br><br>Message : ${req.body.message}`,
  };

  sgMail.send(msg)
  .then(() =>{

    res.render("layouts/main",{
      name : req.body.name,
      email: req.body.email
    })
  }
  ).catch((err) =>{
    console.log(`Error : ${err}`);
  })

})


// Default
// We use this function to handle 404 requests to pages that are not found.
app.use((req, res) => {
  res.status(404).send("404: Page Not Found");
});

// This use() will add an error handler function to
// catch all errors.
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send("Something broke!")
});

// Define a port to listen to requests on.
const HTTP_PORT = process.env.PORT || 8082;

// Call this function after the http server starts listening for requests.
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

// Listen on port 8080. The default port for http is 80, https is 443. We use 8080 here
// because sometimes port 80 is in use by other applications on the machine
app.listen(HTTP_PORT, onHttpStart);

