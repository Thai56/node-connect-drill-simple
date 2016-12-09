var chats = [];
module.exports = {

  getChats:function(req,res){
    // TODO write getChats
    res.status(200).send(chats)
  },
  postChats:function(req,res){
    // TODO write postChats
    console.log(req.body);
    console.log('|||||||||||||||',req.session);
    var chatMessage = req.body.message
    var sn = req.session.screenname;
    console.log('this is sn',sn)
    console.log('this is req.session', req.session);
    chatMessage.screenname = sn;
    console.log('this is chatMessage', chatMessage);

    chats.push(chatMessage)
    console.log(chats);
    res.status(200).end();
  },
  deleteChats:function(req,res){
    // TODO write deleteChats
    for(var i = chats.length; i >= 0; i--){
      chats.splice(i,1)
    }
    res.end();
  }
}
