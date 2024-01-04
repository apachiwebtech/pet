const sql = require('mysql')
const express = require('express')
const nodemailer = require('nodemailer');
const dotenv = require('dotenv')
const app = express()
const cors = require('cors');
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

app.use(express.json());

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
        const mailOptions ={
          from : 'dharvik.badga22@gmail.com',
          to : email,
          subject : 'OTP for login into pupcat app',
          text : `your otp has been updated to ${otp}`,
          
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
        const mailOptions ={
          from : 'dharvik.badga22@gmail.com',
          to : email,
          subject : 'OTP for login into pupcat app',
          text : `your otp has been updated to ${otp}`,
          
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

app.post('/dashboard', (req,res)=>{
  const type = req.body.type;
  const sql = "SELECT id,title ,icon, type , status,link from awt_dashboard where type = ? and status = 1 and deleted = 0";

  con.query(sql , [type] , (err,data)=>{
    if(err){
      return res.json(err)
    }
    else{
      return res.json(data)
    }
  })
})

app.post('/petProfile', (req, res)=>{
  const userId = req.body.userId;
  const state = req.body.state;
  const city = req.body.city;
  const pincode = req.body.pincode;

  const sql =  'INSERT INTO awt_userprofile (`userid`, `state`, `city`, `pincode`) VALUES (?,?,?,?)'

  con.query(sql, [userId, state, city, pincode], (err, data)=>{
    if(err){
      return res.json(err);
    }else{
      return res.json(data);
    }
  })
})

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  service : 'gmail',
  secure: false,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.SMTP_MAIL,
    pass: process.env.PLAY_PASSWORD,
  },
});


app.get('/listing/:id', (req, res, next)=>{

  const id = req.params.id;
  const sql = 'SELECT * FROM awt_add_services WHERE scatid = ?'

  con.query(sql,[id], (err,data)=>{
    if(err){
      return res.json(err);
    }else{
      return res.json(data);
    }
  })
})

app.get('/detailPage/:id', (req, res, next)=>{
  const id = req.params.id;

  const sql = 'SELECT * FROM awt_add_services WHERE id = ?'

  con.query(sql,[id], (err, data)=>{
    if(err){
      return res.json(err);
    }else{
      return res.json(data);
    }
  })
})

app.get('/get_category', (req, res, next)=>{

  const sql = 'SELECT * FROM awt_dashboard where deleted = 0 and status = 1'

  con.query(sql, (err, data)=>{
    if(err){
      return res.json(err);
    }else{
      return res.json(data);
    }
  })
})