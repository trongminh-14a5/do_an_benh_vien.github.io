
const express =require('express');
const app = express();
const port = 3000; 
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const route = require('./routes');
const db = require('./admincp/config/db');


db.connect();
// app.use(morgan('combined'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources','views'));

app.use(express.static(path.join(__dirname, 'public')));

route(app);
app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});























/*

const express = require('express');
const morgan = require('morgan');
//
const path = require('path');
const { engine } = require('express-handlebars'); // chu y
//
const app = express();
const port = 3002;
const rootRoutes = express.Router();


const  route  = require('./routes');
module.exports = router;



// lay photo
app.use(express.static(path.join(__dirname,'public')));

app.use(express.urlencoded({
  extended :true
}));
app.use(express.json());

//SMLHTTPREQUEST, FETCH, exIOS
// HTTP Logger
app.use(morgan('combined'));

// Template Engine
app.engine( // chu y 2
  'hbs',
  engine({
    extname: 'hbs',
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


route(app);


// app.get('/', (req, res) => {
//   res.render('home');
// });

// app.get('/news', (req, res) => {
//   console.log(req.query.q);
//   res.render('news');
// }); 

// app.get('/search', (req, res) => {
//   console.log(req.query.q);
//   res.render('search');
// });

// app.post('/search', (req, res) => {
//   console.log(req.body);
//   res.send('');


  
// });
// app.post('/search', (req, res) => {
//   console.log(req.query.q);
//   res.send('');
// });



// app.post('/search', (req, res) => {
//   console.log(req.query.q);
//   res.render('search');
// });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


*/