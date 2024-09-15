const userModel = require('../Model/Users')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');


// get
const getUser = async (req, res) => {
  const user = await userModel.find({});
  res.json(user);
}

// register
const RegisterUser = async (req, res) => {

  try {
    const { username, email, password } = req.body;
    
    if(!username || !email || !password) {
      return res.status(400).json({message: 'All fields are required'})
    }

    const user = await userModel.findOne({ email });

    if (user) {
      return res.status(400).json({ message: 'User already exit!' })
    }
   
    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return res.status(200).json({ status: true, message: "Record Registered" });


  } catch (error) {
    console.log(error);
  }
}

// login
const login = async (req, res) => {

  try {
    const { email, password } = req.body;

    const userData = await userModel.findOne({ email });
    // console.log(userData);
    // return

    if (!userData) {
      res.status(400).json({ message: 'User not exist!' })
    }

    const validPassword = await bcryptjs.compare(password, userData.password);
    // console.log(validPassword); if the user incorrect userData.password kudhaga

    if (!validPassword) {
      // return res.json({ message: 'password is incorrect' })
      return res.status(400).json({ status: false, message: "Invalid password" });
    }

    const token = jwt.sign({ username: userData.username }, process.env.KEY, { expiresIn: '1hr' });
    // res.cookie('token', token,{httpOnly: true,maxAge: 360000});
    res.cookie('access_token', token, { httpOnly: true, maxAge: 360000 });
    return res.status(200).json({ status: true, message: "Login successfuly.." });

  } catch (error) {
    console.log(error)
  }

}

// forget password
const forgetPassword = async (req, res) => {

  const { email } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User not registered' })
    }

    const token = jwt.sign({ id: user._id }, process.env.KEY, { expiresIn: '10m' });

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'yourEmail@gmail.com', //  email
        pass: 'ghgg kshg skgf hggs' // email: app generated password
      }
    });

    var mailOptions = {
      from: 'yourEmail@gmail.com',
      to: email,
      subject: 'Reset password',
      text: `http://localhost:5173/example/recover_password_v2/${token}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.json({ message: 'Error sending email' })
      } else {
        return res.json({ status: true, message: 'Email sent' })
      }
    });

  } catch (error) {
    console.log(error)
  }
}

// reset password
const resetPassword = async (req, res) => {

  const { token } = req.params;

  const { password } = req.body;

  try {
    const deocded = await jwt.verify(token, process.env.KEY);

    const id = deocded.id;

    const hashedPassword = bcryptjs.hashSync(password, 10);

    await userModel.findByIdAndUpdate({ _id: id }, { password: hashedPassword });

    return res.status(200).json({ status: true, message: 'Updated password' });

  } catch (error) {
    return res.status(403).json({ message: 'Invalid token' });
  }
}


//verify 
const verify = (req, res) => {
  return res.status(200).json({ status: true, message: "authorized" })
}

//logout
const logout = (req, res) => {
  res.clearCookie('access_token');
  return res.status(200).json({ status: true })
}

module.exports = { getUser, RegisterUser, login, forgetPassword, resetPassword, verify, logout }