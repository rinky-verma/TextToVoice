const express = require('express');
const bodyParser = require('body-parser');
const say = require('say');

// const gTTs=require('gtts');

// var speech= 'welcome rinkyyy verma';
// var gtts = new gTTs(speech,'en');

// gtts.save('Voice.mp3',function(err,result){
//     if(err){throw new Error(err);}
//     console.log("text to speech hogya");
// })
const app=express();
var path = require("path")

app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,"public")))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('index')
})
app.post('/',(req,res)=> {
    const text=req.body.text
    say.speak(`${text}`)
})

app.listen(3000,function(){
    console.log("server is chal raha")
})