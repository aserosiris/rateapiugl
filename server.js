const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
const passport = require('passport');
const helmet = require('helmet');
const compression = require('compression');

const app = express();

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB);

app.use(helmet());
app.use(compression());



require('./passport/passport-local.js');
app.use(cors());


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Credentials", "true");
    res.header("Access-Control-Allow-Methods", 'GET','POST','DELETE','PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({mongooseConnection: mongoose.connection})
}));

app.use(passport.initialize());
app.use(passport.session());


const user = require('./routes/userRoute.js');
const company = require('./routes/companyRoute.js');
const cliente = require('./routes/clientesRoute.js');
const producto = require('./routes/Tb_hh_ProductosRoute.js');
const precios = require('./routes/Tb_hh_PreciosRoute');


app.use('/api', user);
app.use('/api', company);
app.use('/api', cliente);
app.use('/api', producto);
app.use('/api', precios);

app.listen(3000, () =>{
    console.log('server running in port 3000');
});
