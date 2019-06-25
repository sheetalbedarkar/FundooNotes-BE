var userModel = require('../models/app.model.js');

//Register purpose
exports.register = (req, callback) => 
{
    userModel.register(req, (err, data) => 
    {
        if (err) 
        {
            return callback(err);
        } 
        else 
        {
            console.log("services register");
            return callback(null, data);
        }
    })
}

//Email verification purpose
exports.isVerified = (req, callback) => 
{
    userModel.isVerified(req, (err, data) => 
    {
        if (err) 
        {
            return callback(err);
        } 
        else 
        {
            console.log("services verfication");
            return callback(null, data);
        }
    })
}
    
//Login purpose
exports.login = (req, callback) => 
{
    userModel.login(req, (err, data) => 
    {
        if (err) 
        {
            return callback(err);
        } 
        else 
        {
            console.log("services login");
            return callback(null, data);
        }
    })
}

//forget purpose
exports.forgetPassword=(data,callback)=>
{
    userModel.forgetPassword(data,(err,result)=>{
        if(err)
        {
            callback(err);
        }
        else 
        {
            console.log("services forgetPassword")
            callback(null,result)
                
        }
    })
}

//reset purpose
exports.resetPassword=(req,callback)=>
{
    console.log("in reset services")
    userModel.resetPassword(req,(err,result)=>
    {
        if(err)
        {
            callback(err);
        }
        else 
        {
            console.log("services resetPass")
            callback(null,result)
        }
    })
} 
