const db = require("../models");
const User = db.user;

// Create and Save a new ser
exports.create = async (req, res) => {
  // Validate request

  User.find({
    $and: [
       { email: req.body.email},
       { password: req.body.password}
    ]
  })
  .then(data => {
    if(data.length >0){
        console.log(data)
        res.send ({"error_code":"9998","msg":"already Exist"});
    }
    else{
        const user = new User({
            user_name: req.body.user_name,
            email: req.body.email,
            phone_number:req.body.phone_number,
            password: req.body.password 
          });
          user.save(user)
              .then(data => {
                
                res.send({"error_code":"9999","msg":"Register Succesfully","data":data});
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while creating the Tutorial."
                });
              });
          //   }
    }
})
  .catch(err => {

    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  });
//   let check = await alreadyExist(req.body)
//   console.log(check);
  
//   if (check.error_code == '9999'){
//     user
//     .save(user)
//     .then(data => {
//       res.send(data);
//       res.send({"error_code":"9999","msg":"Register Succesfully","data":data});
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Tutorial."
//       });
//     });
//   }
//   else{
//     res.send(check)
//   }


};

async function alreadyExist (req){
    console.log('work',req);
    
    await User.find ({
        $or: [
           { email: req.email},
           { phone_number: req.phone_number}
        ]
      })
      .then(data => {
        if(data.length >0){
            console.log(data)
            return ({"error_code":"9998","msg":"already Exist"});
        }
        else{
            return ({"error_code":"9999","msg":"already Exist"});
        }
    })
      .catch(err => {
        console.log('not work',req);
    
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
}

exports.login = (req, res) => {

  
    User.find({
        $and: [
           { email: req.body.email},
           { password: req.body.password}
        ]
      })
      .then(data => {
        if(data.length == 0){
            res.send({"error_code":"9998","msg":"emil or password incorrect"});
        }
        else{
            res.send({"error_code":"9999","msg":"login successfully","data":data});
        }
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };