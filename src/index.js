
const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const {engine} = require('express-handlebars')

const  sass = require('sass');
const route=require('./routes')

const port = 3000;

app.use(express.static(path.join(__dirname,'public')))
// voi dang form thi co
app.use(express.urlencoded({
  extended: true,
}))
//  voi ajax nhu xml, fetch, axios, .. thi dung
app.use(express.json())
// html logger
// app.use(morgan('combined'));

// template engine
app.engine( "hbs",engine({
  extname: ".hbs",
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resourses/views"));


// route init 
route(app)
// app.get('/search',(req,res)=>{
//   res.render('search')
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})






