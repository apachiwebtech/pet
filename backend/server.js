const sql = require('mysql')
const express = require('express')
const nodemailer = require('nodemailer');
const dotenv = require('dotenv')
const app = express()
const path = require('path');
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');
dotenv.config();

app.use(
  cors({
    origin: '*',
  })
);

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.use(express.json());  
app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: 'uploads/', // 
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const storage2 = multer.diskStorage({
  destination : 'uploads/lost_found/',
  filename: (req, file, cb)=>{
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
})
const upload = multer({ storage: storage });
const upload2 = multer({storage: storage2});
app.get('/', (req, res) => {
  return res.json("this is from backend")
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// const con = sql.createConnection({
//   host: 'localhost',
//   user: 'pet_shop',
//   password: '}jR1Z(UR#w7d',
//   database: 'pet_shop',
// })
const con = sql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pets',
})

con.connect((err) => {
  if (err) {
    console.log('err')
  }
  else {
    console.log('connection is ok')
  }
})
// const response = {
//   connected: false,
//   message: 'pls connect'
// };

// con.connect('/',(err) => {
//   if (err) {
//     response.message = `Error connecting to database: ${err.message}`;
//   } else {
//     response.connected = true;
//     response.message = 'Connected to database!';
//     // Perform other operations here after successful connection
//   }

// })

app.post('/login', (req, res) => {
  let email = req.body.email;
  let otp = req.body.otp;


  const sql = "SELECT * from awt_registeruser where email = ? AND deleted = 0"


  con.query(sql, [email], (err, data) => {
    if (err) {
      return res.json(err);
    } else {

      if (data.length !== 0) {
        const mailOptions = {
          from: 'dharvik.badga22@gmail.com',
          to: email,
          subject: 'OTP for login into pupcat app',
          text: `your otp has been updated to ${otp}`,

        }
        transporter.verify(function (error, success) {
          if (error) {
            console.log(error, "error connecting server");
          } else {
            console.log("Server is ready to take our messages");
          }
        });
        transporter.sendMail(mailOptions, (error, data) => {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + data);
          }
        });
        const sql2 = "UPDATE awt_registeruser SET otp = ? WHERE email = ?";

        con.query(sql2, [otp, email], (err, data) => {
          if (err) {
            return res.json(err)
          }
          else {
            if (data.length !== 0) {

              const sql = "SELECT * from awt_registeruser WHERE email = ? and deleted = 0";
              con.query(sql, [email], (err, data) => {
                if (err) {
                  return res.json(err)
                } else {
                  return res.json(data)
                }
              })
            }

          }
        })
      } else {
        const sql3 = "INSERT INTO awt_registeruser_dummy(`email`,`otp`) VALUES (?, ?)";
        con.query(sql3, [email, otp], (err, data) => {
          if (err) {
            return res.json(err);
          }
          else {
            const insertedId = data.insertId;

            const mailOptions = {
              from: 'Your Sender Email',
              to: email,
              subject: 'Welcome to Our Platform!',
              text: 'Thank you for registering. Your OTP is ' + otp,
            };
            transporter.verify(function (error, success) {
              if (error) {
                console.log(error, "error connecting server");
              } else {
                console.log("Server is ready to take our messages");
              }
            });
            transporter.sendMail(mailOptions, (error, data) => {
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + data);
              }
            });
            const sql = "SELECT * from awt_registeruser_dummy WHERE id = ? and deleted = 0";
            con.query(sql, [insertedId], (err, data) => {
              if (err) {
                console.log(err)
              }
              else {

                return res.json(data)
              }
            })

          }
        })
      }
    }
  });
});



app.post('/otp', (req, res) => {
  let email = req.body.email;
  let value = req.body.value;
  let otp = req.body.otp;
  const currentDate = new Date();


  if (value == 1) {
    const sql = "SELECT * from awt_registeruser where email = ? and otp = ? and deleted = 0 ";
    params = [email, otp]
    con.query(sql, params, (err, data) => {
      if (err) {
        return res.json(err)
      } else {

        return res.json(data)
      }
    })
  }

  if (value == 0) {
    const sql = "SELECT * from awt_registeruser_dummy where email = ? and otp = ? and deleted = 0 ";
    params = [email, otp]
    con.query(sql, params, (err, data) => {
      if (err) {
        return res.json(err)
      } else {
        if (data.length !== 0) {

          const sql = "INSERT INTO awt_registeruser(`email`,`otp`,`created_date`) VALUES(?,?,?)"

          con.query(sql, [email, otp, currentDate], (err, data) => {
            if (err) {
              return res.json(err)
            } else {
              const insertedId = data.insertId;
              const sql = "SELECT * from awt_registeruser WHERE id = ? and deleted = 0";

              con.query(sql, [insertedId], (err, data) => {
                if (err) {
                  console.log(err)
                }
                else {
                  return res.json(data)
                }
              })

            }
          })
        }


      }
    })
  }



});

app.post('/provider_login', (req, res) => {
  let email = req.body.email;
  let otp = req.body.otp;


  const sql = "SELECT * from awt_service_register where email = ? AND deleted = 0"


  con.query(sql, [email], (err, data) => {
    if (err) {
      return res.json(err);
    } else {

      if (data.length !== 0) {
        const mailOptions = {
          from: 'dharvik.badga22@gmail.com',
          to: email,
          subject: 'OTP for login into pupcat app',
          text: `your otp has been updated to ${otp}`,

        }
        transporter.verify(function (error, success) {
          if (error) {
            console.log(error);
          } else {
            console.log("Server is ready to take our messages");
          }
        });
        transporter.sendMail(mailOptions, (error, data) => {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + data);
          }
        });
        const sql2 = "UPDATE awt_service_register SET otp = ? WHERE email = ?";

        con.query(sql2, [otp, email], (err, data) => {
          if (err) {
            return res.json(err)
          }
          else {
            if (data.length !== 0) {

              const sql = "SELECT * from awt_service_register WHERE email = ? and deleted = 0";
              con.query(sql, [email], (err, data) => {
                if (err) {
                  return res.json(err)
                } else {
                  return res.json(data)
                }
              })
            }

          }
        })
      } else {
        const sql3 = "INSERT INTO awt_registeruser_dummy(`email`,`otp`) VALUES (?, ?)";
        con.query(sql3, [email, otp], (err, data) => {
          if (err) {
            return res.json(err);
          }
          else {
            const insertedId = data.insertId;

            const mailOptions = {
              from: 'Your Sender Email',
              to: email,
              subject: 'Welcome to Our Platform!',
              text: 'Thank you for registering. Your OTP is ' + otp,
            };

            transporter.verify(function (error, success) {
              if (error) {
                console.log(error);
              } else {
                console.log("Server is ready to take our messages");
              }
            });
            transporter.sendMail(mailOptions, (error, data) => {
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + data);
              }
            });
            const sql = "SELECT * from awt_registeruser_dummy WHERE id = ? and deleted = 0";
            con.query(sql, [insertedId], (err, data) => {
              if (err) {
                console.log(err)
              }
              else {

                return res.json(data)
              }
            })

          }
        })
      }
    }
  });
});

app.post('/provider_otp', (req, res) => {
  let email = req.body.email;
  let value = req.body.value;
  let otp = req.body.otp;
  const currentDate = new Date();


  let params;

  if (value == 1) {
    const sql = "SELECT * from awt_service_register where email = ? and otp = ? and deleted = 0 ";
    params = [email, otp]
    con.query(sql, params, (err, data) => {
      if (err) {
        return res.json(err)
      } else {

        return res.json(data)
      }
    })
  }

  if (value == 0) {
    const sql = "SELECT * from awt_registeruser_dummy where email = ? and otp = ? and deleted = 0 ";
    params = [email, otp]

    con.query(sql, params, (err, data) => {
      if (err) {
        return res.json(err)
      } else {
        if (data.length !== 0) {

          const sql = "INSERT INTO awt_service_register(`email`,`otp`,`created_date`) VALUES(?,?,?)"

          con.query(sql, [email, otp, currentDate], (err, data) => {
            if (err) {
              return res.json(err)
            } else {
              const insertedId = data.insertId;

              const sql = "SELECT * from awt_service_register WHERE id = ? and deleted = 0";
              con.query(sql, [insertedId], (err, data) => {
                if (err) {
                  console.log(err)
                }
                else {
                  return res.json(data)
                }
              })

            }
          })
        }


      }
    })
  }



});

app.post('/resend', (req, res) => {
  let email = req.body.email;
  let value = req.body.value;
  let otp = req.body.otp;

  let sql;
  let params;

  if (value == 1) {
    sql = "UPDATE awt_registeruser SET otp = ? WHERE email = ? and  deleted = 0";
    params = [otp, email];
  }
  else {
    sql = "UPDATE awt_registeruser_dummy SET otp = ? WHERE email = ? and  deleted = 0";
    params = [otp, email];
  }

  con.query(sql, params, (err, data) => {
    if (err) {
      return res.json(err)
    }
    else {
      return res.json(data)
    }
  })
});

app.post('/resend_provider', (req, res) => {
  let email = req.body.email;
  let value = req.body.value;
  let otp = req.body.otp;

  let sql;
  let params;

  if (value == 1) {
    sql = "UPDATE awt_service_register SET otp = ? WHERE email = ? and  deleted = 0";
    params = [otp, email];
  }
  else {
    sql = "UPDATE awt_registeruser_dummy SET otp = ? WHERE email = ? and  deleted = 0";
    params = [otp, email];
  }

  con.query(sql, params, (err, data) => {
    if (err) {
      return res.json(err)
    }
    else {
      return res.json(data)
    }
  })
});

app.post('/dashboard', (req, res) => {
  const type = req.body.type;
  const sql = "SELECT id, title ,icon, type , status, link from awt_dashboard where type = ? and status = 1 and deleted = 0";

  con.query(sql, [type], (err, data) => {
    if (err) {
      return res.json(err)
    }
    else {
      return res.json(data)
    }
  })
})

app.post('/petProfile', (req, res) => {
    
  const {
    userId,
    state,
    city,
    pincode,
    parent,
    address,
    pet,
    image,
    breed,
    color,
    height,
    weight,
    date
  } = req.body;

  const sql = 'INSERT INTO awt_userprofile (`userid`, `state`, `city`, `pincode`, `parent_name`, `address`, `pet_name`, `profile_image`, `breed`, `color`, `height`, `weight`, `dob`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)'

  con.query(sql, [userId, state, city, pincode, parent, address, pet, image, breed, color, height, weight, date], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  })
})

app.post('/getPetProfile', (req, res)=>{

  const userid = req.body.userId;
  const sql = 'SELECT * FROM awt_userprofile WHERE userid  = ?';

  con.query(sql,[userid], (err, data)=>{
    if(err){  
      res.json(err);
    }else{
      res.json(data);
    }
  })
})
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  service: 'gmail',
  secure: false,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.SMTP_MAIL,
    pass: process.env.PLAY_PASSWORD,
  },
});


app.get('/listing/:id', (req, res, next) => {

  const id = req.params.id;
  const sql = 'SELECT * FROM awt_add_services WHERE scatid = ?'

  con.query(sql, [id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  })
})

app.get('/detailPage/:id', (req, res, next) => {
  const id = req.params.id;

  const sql = 'SELECT * FROM awt_add_services WHERE id = ?'

  con.query(sql, [id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  })
})

app.get('/recommendedFor/:id', (req, res, next)=>{
  const id = req.params.id;

  const sql = 'SELECT recommended_for, id FROM awt_amenities WHERE s_id = ?'

  con.query(sql,[id], (err, data)=>{
    if(err){
      return res.json(err);
    }else{
      return res.json(data);
    }
  })
})
app.post('/addComment', (req, res, next)=>{
  const {pet_id, serviceProviderId, comment, rating} = req.body;
  const currentDate = new Date();
  const sql = 'INSERT INTO awt_comments (`user_id`,`service_provider_id`,`comment`, `rating`, `created_at`) VALUES (?,?,?,?,?)'

  con.query(sql,[pet_id, serviceProviderId, comment, rating, currentDate], (err, data)=>{
    if(err){
      return res.json(err);
    }else{
      return res.status(200).json({message: "Comment added successfully", status: 201})

    }
  })

})

app.get('/getComments/:id', (req, res, next)=>{
  const id = req.params.id;

  const sql = 'SELECT * FROM awt_comments WHERE service_provider_id = ? AND deleted = 0'
  con.query(sql,[id], (err, data)=>{
    if(err){
      return res.json(err);
    }else{
      return res.status(200).json(data)

    }
  })

})
app.get('/get_category', (req, res, next) => {

  const sql = 'SELECT * FROM awt_dashboard where deleted = 0 and status = 1'

  con.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  })
})
app.post('/getUserName', (req, res, next)=>{
  const {user_id} = req.body;

  const sql = 'SELECT parent_name from awt_userprofile WHERE userid = ?';

  con.query(sql, [user_id], (err, data)=>{
    if(err){
      return res.json(err);
    }else{
      return res.json(data);
    }
  })
})
app.post('/provider_details', upload.single('image'),  (req, res) => {
  let pet_id = req.body.pet_id;
  let imagepath = req.file.filename;
  let fullname = req.body.fullname;
  let mobile = req.body.mobile;
  let mobile1 = req.body.mobile1;
  let address = req.body.address;
  let state = req.body.state;
  let pin = req.body.pin;
  let currentDate = new Date();

  const sql = "update awt_service_register set profile = ? , fullname = ?,mobile = ? , mobile2 = ? , address = ?,state = ?,pin = ?, updated_date = ? where id = ?";

  con.query(sql, [imagepath, fullname, mobile, mobile1, address, state, pin, currentDate, pet_id], (err, data) => {
    if (err) {
      return res.json(err)
    }
    else {
      return res.json(data)
    }
  })
})


app.get('/get_breeds', (req, res, next)=>{

  const sql = 'SELECT breed as item from awt_breeds where deleted = 0'

  con.query(sql, (err, data)=>{

    if(err){
      res.json({message : "Could'nt fetch breeds at the moment"});
    }else{
      res.json(data);
    }
  })
})
app.get('/get_color', (req, res, next)=>{

  const sql = 'SELECT color as item from awt_colors where deleted = 0'

  con.query(sql, (err, data)=>{

    if(err){
      res.json({message : "Could'nt fetch colors at the moment"});
    }else{
      res.json(data);
    }
  })
})
app.put('/updatePetProfile',(req, res, next)=>{
  const {status, userid} = req.body.data;
  const sql = 'UPDATE awt_userprofile SET community_status = ? WHERE userid = ?'
console.log(status, userid)
  con.query(sql,[status, userid], (err, data)=>{
    if(err){
      return res.status(500).json(err);
    }else{
      return res.status(200).json(data);
    }
  })
})

app.post('/getPetProfiledata', (req, res, next) => {
  const { userId } = req.body; // Destructure the userid from req.body
  const sql = 'SELECT * FROM awt_userprofile WHERE userid = ? AND deleted = 0 ORDER BY created_date DESC';
  console.log(userId, "nai mili");

  con.query(sql, [userId], (err, data) => {
    if (err) {
      return res.status(404).json({ msg: "cannot fetch data" });
    } else {
      return res.json(data);
    }
  });
});

app.put(('/putGender'), (req, res, next)=>{
  const gender = req.body.gender;
  const userid = req.body.userid;
  let newGender = '';
  if(gender === 'male'){
    newGender = "M";
  }else{
    newGender = 'F';
  }
  console.log(newGender, userid);

  const sql2 = "UPDATE awt_userprofile SET gender = ? WHERE userid = ? AND deleted = 0";

  con.query(sql2, [newGender, userid], (error, data)=>{
    if(error){
      res.status(500).json({error : "could not update gender."});
    }else{
      res.status(200).json({message : "Gender Updated successfully", gender : newGender});
    }
  })
})


app.post('/addLostFound',upload2.single('image'), (req, res) => {
  const data = req.body;
  console.log(data, "message")
  const image = req.file.fieldname;
  const {userid,petName, breed, color, mobile, message, last_location } = data;

  const sql = 'INSERT INTO awt_lost_found (`user_id`, `pet_name`, `breed`, `color`, `contact`, `message`, `image`, `last_location`)  VALUES(?,?,?,?,?,?,?,?)';

  con.query(sql, [userid,petName, breed, color, mobile, message, image, last_location], (error, data)=>{
    if(error){
      res.json(error);
    }else{
      res.json(data);
    }
  })
})

app.get('/getLostFound', (req, res, next)=>{
  const sql = 'SELECT * FROM awt_lost_found WHERE deleted = 0';

  con.query(sql, (error, data)=>{
    if(error){
      res.json(err);
    }else{
      res.json(data);
    }
  })
})