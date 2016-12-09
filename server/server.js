var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var chatCtrl = require('./controllers/chatCtrl');
var keys = require('./secretkeys')
var port = 3737;

// TODO server front end files with static
app.use(express.static(__dirname+ '/../public'));
app.use(bodyParser.json());

// TODO Initialize Session
app.use(session({
  secret:keys.expressSecret,
  resave: false,
  saveUninitialized: false
}))
app.post("/api/screenname", function(req, res){
  // TODO Save screenname to session
  var screenname = req.body;
  console.log('this is req.body',req.body);

  req.session.screenname = screenname.name;
  console.log('got scrrenname',req.session.screenname);
    console.log('this is the session object',req.session)
    res.end()
    //res.send(req.session.screenname)
})

app.get("/api/chats", chatCtrl.getChats);
app.post("/api/chats", chatCtrl.postChats);
app.delete("/api/chats", chatCtrl.deleteChats);



app.listen(port, function(){
  console.log("Listeing on port ", port, " INSERT-WITTY-STATEMENT-HERE");
});
