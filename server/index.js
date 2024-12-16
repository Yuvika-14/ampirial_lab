const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const db = require('./db'); 
const passport = require('passport');
require('./passportConfig')(passport);

// Make sure this is your MySQL connection file
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({ secret: 'mySecretKey', resave: false, saveUninitialized: false }));

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(cookieParser('mySecretKey'));
app.use(passport.initialize());
app.use(passport.session());


// Test route to check if the server is working
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/signup', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const queryCheckUser = "SELECT * FROM applicants WHERE email = ?";
    const queryInsertUser = "INSERT INTO applicants (`email`, `password`) VALUES (?, ?)";

    // Check if user already exists
    db.query(queryCheckUser, [email], (err, result) => {
        if (err) {
            console.error('Error checking user:', err);
            return res.status(500).json({ error: 'Database error while checking for user' });
        }

        if (result.length > 0) {
            // User already exists
            console.log('User already exists:', email);
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password before saving
        const hashedPassword = bcrypt.hashSync(password, 10);

        // Insert the new user
        db.query(queryInsertUser, [email, hashedPassword], (err, result) => {
            if (err) {
                console.error('Error inserting user:', err);
                return res.status(500).json({ error: 'Database error while inserting user' });
            }
            console.log('User created successfully:', email); 
            return res.status(201).json({ message: "User created successfully" });
        });
    });
});
app.post('/login',(req,res,next) =>{
    passport.authenticate('local',(err,user,info) =>{
        if(err) {throw err};
        if(!user) {
            return res.send("No user exists");

      
        }
        if(user) {
            req.login(user,(err) =>{
                console.log(user);
                return res.send("user logged in");
               

            })
        }
    })(req,res,next);
});
app.get('/getUser',(req,res) =>{
    res.send(req.user);
})
// Start the server
app.listen(3001, () => {
    console.log('Server listening on port 3001');
});
