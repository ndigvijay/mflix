const { application } = require("express");
const express = require("express");
const router = express.Router();
const signup = require("../models/users");
let value=0;
var user

//  function run(username, password) {
//   try {
//     user = signup.find({ username:username});
//     console.log(user)
// }
// catch (e) {
//     console.log(e.message);
// }
//     if(user.username===username && user.password===password)
//         return 1;
//     else if(user.username==username && user.password!=password)
//         console.log("invalid password")
//     else if(user.username!=username)
//         console.log("user not found")
// }

router.post("/signup", async (req, res) => {
  user=await signup.find({email:req.body.email})
  .then(console.log("Hello"))
  if(user.length==0) {
    // console.log("I love you")
    const signedUpUser = new signup({
      email: req.body.email,
      username:req.body.username,
      password: req.body.password,
      confirm_password: req.body.confirm_password,
    });
    signedUpUser
      .save()
      .then((data) => res.json(data))
      .catch((err) => console.log(err));
    console.log(signedUpUser);
  }
  else {
    console.log("this should not come first!")
    res.send({message:"existing account"})
  }
});

router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
        user =  await signup.find({email:email});
          if(user.length==0)
              res.send({message:"false"})
          else if(user[0].password==password)
              // res.send(user)
              res.send({message:"true"})
              // console.log(user) 
          else
          res.send({message:"false"})
    }
    catch (e) {
        console.log(e.message);
    }
})

router.get("/login",(req,res)=>{
  res.send("login page")
})
//   console.log(username,password)


  // run(username, password,value).then()
  // console.log(user)

//   if(res==1)
//     res.send("welcome")
//     else if(res==2)
//     res.send("incorrect password")
//     else if(res==3)
//     res.send("user not found")
// });


 



module.exports = router;
