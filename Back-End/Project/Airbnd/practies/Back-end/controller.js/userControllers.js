const genToken = require("../../../backend/Day-5-back-end/config/token");
const signUpSchemModelaClass = require("../model/userModel");

async function signUpform(req, res) {
  console.log(req.body);

  // step 1:get the signup data from the request body
  const { userName, email, password, confirmPassword } = req.body; //destructuing the data from req.body
  console.log(userName, email, password, confirmPassword);

  //step 2 validate the data

  // 1) basic validation: check if all fields are filled
  if (!userName || !email || !password || !confirmPassword) {
    return res
      .status(404)
      .json({ success: false, message: "all filed are required" });
  }

  //2) email validation :  check if all fields are filled
  const emailcode = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailcode.test(email)) {
    return res
      .status(400)
      .json({
        success: false,
        message: "invaild email address formet:@gmail.com ",
      });
  }

  //3) password validation: check if the password is at least 8 characters long and contains at least one uppercase letter, one lowercase letter, one number, and one special character
  const passcode =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passcode.test(password)) {
    return res
      .status(400)
      .json({
        success: false,
        message:
          "check if the password is at least 8 characters long and contains at least one uppercase letter, one lowercase letter, one number, and one special character",
      });
  }

  //4) confirm password validation: check if the password and confirm password match
  const confirmPasswordcode =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!confirmPasswordcode.test(confirmPassword)) {
    return res
      .status(400)
      .json({ success: false, message: "password do not match" });
  }

  //every think is ok now we save the data in database but before we create object
  const User = new signUpSchemModelaClass({
    userName: userName,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  });

  try {
    //we signup with mongodb
    const newUser = User.save();
    console.log(`save the data in database sueccessfully newuser`);

    // before cookie  we genrate token in another file
    const token = genToken(newUser._id);
    //we have genrate the cookie before response

    //we make cookie and pass two aggrument
    res.cookie("token", token, {
      httponly: true,
      maxAge: 15 * 24 * 60 * 60 * 1000,
      secure: true,
    });
    //cookie maximum days 15

    return res
      .status(200)
      .json({
        sueccess: true,
        message: "you have sueccessfully login please signup",
      });
  } catch (error) {
    console.log(error);
    returnres
      .status(500)
      .json({ sueccess: false, message: "internal server error" });
  }
}

async function loginform(req, res) {
  //step1 getting the data from req.data
  console.log("login form data:",req.body)
  const { email, password } = req.body;

  console.log(email, password);
  //step2 validate the data
  //1) basic validation: check if all fields are filled

  if ((!email, !password)) {
    return res
      .status(400)
      .json({ success: false, message: "All field are required" });
  }


  //step2 chcek validation of email
  const emailcode =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailcode.test(email)) {
    return res
      .status(400)
      .json({
        success: false,
        message: "invaild email please follow this format username@gmail.com",
      });
  }


  //step3 check password validation for login
  const passcode =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passcode.test(password)) {
    return res
      .status(404)
      .json({
        success: false,
        message:
          " password must be  at least 8 characters long and contains at least one uppercase letter, one lowercase letter, one number, and one special character",
      });
  }

  // find the current user document exist or not in database
  try {
    const foundUser = await signUpSchemModelaClass.findOne({ email });
    console.log(foundUser);
    if (!foundUser) {
      return res
        .status(400)
        .json({
          sueccess: true,
          message: "user doesn't exsit please  sigup first",
        });
    }

    //Now if user exist then we should check user password , it match or not with data base password
    const foundPaasowrd = foundUser.password;
    if (!foundPaasowrd === password) {
      //we give token and cookie for login page

      //1) genrate the token
      const token = await jwt.sign(
        { _id: foundUser._id },
        process.env.secret_key,
        { expiresIn: "15d" },
      );
      if (token) {
        return res
          .status(404)
          .json({ success: false, message: "token dosen't genrate" });
      }
      //2)make a cookie
      res.cookie("token", token, {
        secure: true,
        httponly: true,
        sameSite: "lax", // use "lax" for localhost
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
      });
      return res
        .status(400)
        .json({ sueccess: false, message: "password doesn't match" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({success:false,message:"oops something went wrong"})
  }
}
module.exports = {
  signUpform,
  loginform
}
