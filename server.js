const express= require('express');
const app = express();
const bodyParser= require('body-parser')
const mongodb= require('./data/database');
const passport =require('passport');
const session = require('express-session');
const GitHubStrategy = require('passport-github2').Strategy;
const cors = require('cors');
const validate =require('express-validator')


const port = process.env.PORT || 3000;




app
.use(bodyParser.json())
.use(session({
 secret :"secret",
 resave:false ,
 saveUninitialized:true,
}))
// this is the basic express session ({...})
.use(passport.initialize())
//init passport on every route call.
.use(passport.session())
//allow password to use "express-session"
.use((req,res,next)=>{
    res.setHeader("Access-Control-allow-Origin, "*" ");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With, Content-Type ,Accept,Z-key,Authorization "
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "POST,GET,PUT,PATCH,OPTIONS,DELETE"
    );
    next();
})
.use(cors({methods : ['GET','POST','DELETE','UPDATE','PUT','PATCH']}))
.use(cors({origin :'#'}))
.use("/", require("./routes/index.js"))

passport.use(new GitHubStrategy({
    CLIENTID:  process.env.GITHUB-CLIENT_ID,
    clientSecret :process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,

},
function(accessToken, refreshToken,profile,done){
//user.findOrCreate({githubId:profile.id}),function(err,user){
return done(null,profile);
//});

}
));
passport.serializeUser((user,done) =>{
    done(null,user);
});
passport.deserializeUser((user,done)=>{
    done(null,user);
});

app.get('/',(req,res)=>{res.send(req.session.user!==undefined ? `Logged in as ${req.session.user.displayName}`: "Logged out")})

app.get('/github/callback',passport.authenticate('github',{
 failureRedirect:'/api-docs', session:false}),
 (req,res)=>{
req.session.user =req.user;
res.redirect('/');
 });

 process.on('uncaughtException', (err,origin ) =>{
    console.log(process.stderr.fd,`caught exception :${err}\n `+ `Exception origin :${origin}` );
 });

mongodb.initDb((err)=>{
    if(err){
        console.log(err);
    }
    else{
        app.listen(port,()=>{console.log(`Database is listining and node Running on port  ${port}`)});
    }

});

