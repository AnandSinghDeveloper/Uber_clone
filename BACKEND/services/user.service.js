const userModel = require('../Models/user.modals');


module.exports.createUser = ({
  firstname,lastname ,email ,password
})=>{
   if(!firstname || !email || !password ){
    throw new Error('All fields are required ');
   }; // if block ended

    const user = userModel.create({
         fullname :{
         firstname,
          lastname
            
         },
         email,
         password
    });

    return user
}