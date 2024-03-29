const sql = require('mysql')
const express = require('express')
const nodemailer = require('nodemailer');
const dotenv = require('dotenv')
const app = express()
const path = require('path');
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');
const async = require('async');
const moment = require('moment')
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
  destination: '../public_html/pet-app/upload/subcategory/', // 
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});
const storage2 = multer.diskStorage({
  destination: 'uploads/lost_found/',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
})
const upload = multer({ storage: storage });
const upload2 = multer({ storage: storage2 });



app.get('/', (req, res) => {
  return res.json("this is from backend")
});

const port = process.env.PORT;
app.listen(8081, () => {
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

app.post('/user_login', (req, res) => {
  let email = req.body.email;
  let otp = req.body.otp;

  const sql = "SELECT * from awt_registeruser where email = ? AND deleted = 0"

  con.query(sql, [email], (err, data) => {
    if (err) {
      return res.json(err)
    } else {
      if (data.length !== 0) {
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
        return res.json("Email id is not registered")
      }
    }
  })

})

app.post('/provid_login', (req, res) => {
  let email = req.body.email;
  let otp = req.body.otp;

  const sql = "SELECT * from awt_registeruser where email = ? AND deleted = 0"

  con.query(sql, [email], (err, data) => {
    if (err) {
      return res.json(err)
    } else {
      if (data.length !== 0) {
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

        return res.json("Email id is not registered")

      }
    }
  })

})


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
    const sql = "SELECT ar.role, ar.id,ar.email, ar.firstname,ar.lastname,ar.otp,ar.value,au.pet_name, au.parent_name from awt_registeruser as ar left join awt_userprofile au on au.userid = ar.id where ar.email =?  and ar.otp = ? and ar.deleted = 0 ";
    params = [email, otp]

    con.query(sql, params, (err, data) => {
      if (err) {
        return res.json(err)
      } else {

        console.log(data, "otp")
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
              const sql = "SELECT ar.role, ar.id,ar.email, ar.firstname,ar.lastname,ar.otp,ar.value,au.pet_name, au.parent_name from awt_registeruser as ar left join awt_userprofile au on au.userid = ar.id WHERE ar.id = ? and ar.deleted = 0";

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

// app.post('/petProfile', (req, res) => {
//   const userId = req.body.userId;
//   const state = req.body.state;
//   const city = req.body.city;
//   const pincode = req.body.pincode;

//   const sql = 'INSERT INTO awt_userprofile (`userid`, `state`, `city`, `pincode`) VALUES (?,?,?,?)'

//   con.query(sql, [userId, state, city, pincode], (err, data) => {
//     if (err) {
//       return res.json(err);
//     } else {
//       return res.json(data);
//     }
//   })
// })

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
    date,
    mobile
  } = req.body;

  const sql = 'INSERT INTO awt_userprofile (`userid`, `state`, `city`, `pincode`, `parent_name`, `address`, `pet_name`, `profile_image`, `breed`, `color`, `height`, `weight`, `dob`, `mobile`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)'

  con.query(sql, [userId, state, city, pincode, parent, address, pet, image, breed, color, height, weight, date, mobile], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
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
  const sql = 'SELECT aas.id,aas.catid,aas.upload_image,aas.scatid,aas.designation,aas.service,aas.service,aas.address,aas.description,aas.user_id,aas.title, ac.rating  FROM awt_add_services as aas left JOIN awt_comments as ac on ac.service_provider_id = aas.id WHERE catid = ? and aas.deleted = 0 order by aas.id desc'

  con.query(sql, [id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      const result = mergeDataWithSamePostId(data);
      return res.json(result);
    }
  })
})
function mergeDataWithSamePostId(data) {
  const mergedData = {};

  // Merge data with the same post_id
  data.forEach(item => {
    const Ratings = item.id;
    if (!mergedData[Ratings]) {
      mergedData[Ratings] = { ...item, post_rating: [item.rating] };
      delete mergedData[Ratings].rating; // Remove the redundant key
    } else {
      mergedData[Ratings].post_rating.push(item.rating);
    }
  });

  // Reverse the order of the merged data
  const reversedData = Object.values(mergedData).reverse();

  return reversedData;
}

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

app.get('/recommendedFor/:id', (req, res, next) => {
  const id = req.params.id;

  const sql = 'SELECT recommended_for FROM awt_amenities WHERE s_id = ?'

  con.query(sql, [id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
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

app.post('/provider_details', upload.single('image'), (req, res) => {
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

app.post('/add_service', upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'image2', maxCount: 1 },
  { name: 'image3', maxCount: 1 }
]), (req, res) => {
  const category = req.body.category;
  const service = req.body.service;
  const address = req.body.address;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  const description = req.body.description;
  const user_id = req.body.user_id
  const state = req.body.state
  const city = req.body.city
  const pincode = req.body.pincode
  const recommend = req.body.recommend;
  const daysJSON = req.body.days;
  const days = JSON.parse(daysJSON);

  const image1 = req.files['image'];
  const image2 = req.files['image2'];
  const image3 = req.files['image3'];

  let img1 = image1[0].filename
  let img2 = image2[0].filename
  let img3 = image3[0].filename

  const created_date = new Date()

  // Insert data into the main table
  const insertMainQuery = 'INSERT INTO awt_add_services (catid, title, address,state,city ,pin, upload_image, upload_image2, upload_image3, description , created_date , user_id, longitude, latitude,recommend) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
  const mainValues = [category, service, address, state, city, pincode, img1, img2, img3, description, created_date, user_id, longitude, latitude, recommend];

  con.query(insertMainQuery, mainValues, (err, mainResult) => {
    if (err) {
      console.error('Error inserting data into main table:', err);
      return res.json(err);
    }

    const insertedId = mainResult.insertId;

    // Now, insert 'days' data into another table
    const insertDaysQuery = 'INSERT INTO awt_service_time (service_id, day, starttime, endtime, closed , created_date , created_by) VALUES ?';
    const daysValues = days.map(day => [insertedId, day.name, day.start, day.end, day.chaeckval, created_date, user_id]);

    con.query(insertDaysQuery, [daysValues], (daysErr, daysResult) => {
      if (daysErr) {
        console.error('Error inserting data into days table:', daysErr);
        return res.json(daysErr);
      }
      else {

        return res.json({ hii: 'Service Added Successfully' });
      }

    });
  });
});

app.post('/service_data', (req, res) => {
  const service_id = req.body.service_id;

  const sql = "select * from awt_add_services where id = ? and deleted = 0"

  con.query(sql, [service_id], (err, data) => {
    if (err) {
      console.error('Error inserting data into days table:', err);
      return res.json(err);
    }
    else {

      return res.json(data);
    }

  });
});

app.post('/delete_service', (req, res) => {
  const product_id = req.body.product_id;

  const sql = "update awt_add_services set deleted = 1 where id = ?"

  con.query(sql, [product_id], (err, data) => {
    if (err) {
      console.error('Error inserting data into days table:', err);
      return res.json(err);
    }
    else {

      return res.json(data);
    }

  });
});

app.post('/update_service', upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'image2', maxCount: 1 },
  { name: 'image3', maxCount: 1 }
]), async (req, res) => {

  const category = req.body.category;
  const service = req.body.service;
  const address = req.body.address;
  const description = req.body.description;
  const service_id = req.body.service_id;
  const daysJSON = req.body.days;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  const days = JSON.parse(daysJSON);

  const image1 = req.files['image'];
  const image2 = req.files['image2'];
  const image3 = req.files['image3'];

  let img1 = image1[0].filename;
  let img2 = image2[0].filename;
  let img3 = image3[0].filename;

  const updated_date = new Date();

  // Insert data into the main table
  const insertMainQuery = 'update awt_add_services set catid = ? ,title= ?, address = ?, upload_image = ?,upload_image2 = ?,upload_image3 = ? , description = ?, updated_date = ? ,longitude = ? ,latitude = ? where id = ? ';

  const mainValues = [category, service, address, img1, img2, img3, description, updated_date, longitude, latitude, service_id];

  const mainResult = await new Promise((resolve, reject) => {
    con.query(insertMainQuery, mainValues, (err, result) => {
      if (err) {
        console.error('Error inserting data into main table:', err);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });

  // Update data in the awt_service_time table
  const updateQuery = 'UPDATE awt_service_time SET day = ?, starttime = ?, endtime = ?, closed = ?, created_date = ? WHERE service_id = ?and day = ?';

  const updatePromises = days.map(day => {
    const values = [
      day.name,
      day.start,
      day.end,
      day.checkval,
      updated_date,
      service_id,
      day.name,
    ];

    console.log(values);

    return new Promise((resolve, reject) => {
      con.query(updateQuery, values , (err, result) => {
        if (err) {
          console.error('Error updating data in awt_service_time:', err);
          reject(err);
        } else {
          console.log(updateQuery);
          resolve(result);
        }
      });
    });
  });

  // Wait for all update queries to complete
  try {
    const updateResults = await Promise.all(updatePromises);
    console.log(updateResults);
    return res.json(updateResults);
  } catch (error) {
    console.error('Error updating data in awt_service_time:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});


exports.markAttendance = async (req, res) => {
  const { attendance } = req.body;

  try {
    for (const studentData of attendance) {
      const { studentName, status, date } = studentData;

      const insertQuery = 'INSERT INTO attendance (name, status, date) VALUES (?, ?, ?)';
      await connection.query(insertQuery, [studentName, status, date]);
    }

    res.status(200).json({ message: 'Attendance marked successfully' });
  } catch (err) {
    console.error('Error marking attendance:', err);
    res.status(500).json({ error: 'Failed to mark attendance' });
  }
};


app.post('/service_listing', (req, res) => {

  let user_id = req.body.user_id

  const sql = "select * from awt_add_services where created_by = ? and deleted = 0 order by id desc";

  con.query(sql, [user_id], (err, data) => {
    if (err) {
      return res.json(err)
    } else {
      return res.json(data)
    }
  })
})
app.post('/service_time', (req, res) => {

  let id = req.body.id

  const sql = "select * from awt_service_time where service_id = ? and deleted = 0 ";

  con.query(sql, [id], (err, data) => {
    if (err) {
      return res.json(err)
    } else {
      return res.json(data)
    }
  })
})

app.post('/add_product', upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'image2', maxCount: 1 },
  { name: 'image3', maxCount: 1 }
]), (req, res) => {
  let user_id = req.body.user_id
  let title = req.body.title
  let description = req.body.description;

  const image1 = req.files['image'];
  const image2 = req.files['image2'];
  const image3 = req.files['image3'];

  let img1 = image1[0].filename
  let img2 = image2[0].filename
  let img3 = image3[0].filename

  let date = new Date()

  console.log(image1)


  const sql = "insert into awt_add_product(`title`,`description`,`upload_image`,`upload_image2`,`upload_image3`,`created_date`,`created_by`) values(?,?,?,?,?,?,?)";

  con.query(sql, [title, description, img1, img2, img3, date, user_id], (err, data) => {
    if (err) {
      return res.json(err)
    } else {
      return res.json(data)
    }
  })
})

app.post('/product_data', (req, res) => {
  const product_id = req.body.product_id;

  const sql = "select * from awt_add_product where id = ? and deleted = 0"

  con.query(sql, [product_id], (err, data) => {
    if (err) {
      console.error('Error inserting data into days table:', err);
      return res.json(err);
    }
    else {

      return res.json(data);
    }

  });
});

app.post('/delete_product', (req, res) => {
  const product_id = req.body.product_id;

  const sql = "update awt_add_product set deleted = 1 where id = ?"

  con.query(sql, [product_id], (err, data) => {
    if (err) {
      console.error('Error inserting data into days table:', err);
      return res.json(err);
    }
    else {

      return res.json(data);
    }

  });
});

app.post('/update_product', upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'image2', maxCount: 1 },
  { name: 'image3', maxCount: 1 }
]), (req, res) => {

  let product_id = req.body.product_id
  let title = req.body.title
  let description = req.body.description;
  const image1 = req.files['image'];
  const image2 = req.files['image2'];
  const image3 = req.files['image3'];

  let img1 = image1[0].filename
  let img2 = image2[0].filename
  let img3 = image3[0].filename




  const sql = "update awt_add_product set title = ?, description = ? ,upload_image = ? , upload_image2 = ? , upload_image3 = ? where id = ? ";

  con.query(sql, [title, description, img1, img2, img3, product_id], (err, data) => {
    if (err) {
      return res.json(err)
    } else {
      return res.json(data)
    }
  })
})



app.post('/product_listing', (req, res) => {

  let user_id = req.body.user_id

  const sql = "select * from awt_add_product where created_by = ? and deleted = 0 order by id desc";

  con.query(sql, [user_id], (err, data) => {
    if (err) {
      return res.json(err)
    } else {
      return res.json(data)
    }
  })
})

app.get('/product', (req, res) => {


  const sql = "select * from awt_add_product where deleted = 0 order by id desc";

  con.query(sql, (err, data) => {
    if (err) {
      return res.json(err)
    } else {
      return res.json(data)
    }
  })
})
app.post('/getUserName', (req, res, next) => {
  const { user_id } = req.body;

  const sql = 'SELECT parent_name from awt_userprofile WHERE userid = ?';

  con.query(sql, [user_id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  })
})

app.post('/addComment', (req, res, next) => {
  const { pet_id, serviceProviderId, comment, rating } = req.body;
  const currentDate = new Date();
  const sql = 'INSERT INTO awt_comments (`user_id`,`service_provider_id`,`comment`, `rating`, `created_at`) VALUES (?,?,?,?,?)'

  con.query(sql, [pet_id, serviceProviderId, comment, rating, currentDate], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.status(200).json({ message: "Comment added successfully", status: 201 })

    }
  })

})

app.get('/getComments/:id', (req, res, next) => {
  const id = req.params.id;

  const sql = 'SELECT * FROM awt_comments WHERE service_provider_id = ? AND deleted = 0'
  con.query(sql, [id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
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


app.get('/get_breeds', (req, res, next) => {

  const sql = 'SELECT breed as item from awt_breeds where deleted = 0'

  con.query(sql, (err, data) => {

    if (err) {
      res.json({ message: "Could'nt fetch breeds at the moment" });
    } else {
      res.json(data);
    }
  })
})
app.get('/get_color', (req, res, next) => {

  const sql = 'SELECT color as item from awt_colors where deleted = 0'

  con.query(sql, (err, data) => {

    if (err) {
      res.json({ message: "Could'nt fetch colors at the moment" });
    } else {
      res.json(data);
    }
  })
})
app.put('/updatePetProfile', (req, res, next) => {
  const { status, userid } = req.body.data;
  const sql = 'UPDATE awt_userprofile SET community_status = ? WHERE userid = ?'
  console.log(status, userid)
  con.query(sql, [status, userid], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    } else {
      return res.status(200).json(data);
    }
  })
})

app.get('/getCommunityData', (req, res, next) => {

  const sql = 'SELECT * FROM awt_userprofile ';


  con.query(sql, (err, data) => {
    if (err) {
      return res.json(err)
    } else {
      return res.json(data)
    }
  });
});

app.put(('/putGender'), (req, res, next) => {
  const gender = req.body.gender;
  const userid = req.body.userid;
  let newGender = '';
  if (gender === 'male') {
    newGender = "M";
  } else {
    newGender = 'F';
  }
  console.log(newGender, userid);

  const sql2 = "UPDATE awt_userprofile SET gender = ? WHERE userid = ? AND deleted = 0";

  con.query(sql2, [newGender, userid], (error, data) => {
    if (error) {
      res.status(500).json({ error: "could not update gender." });
    } else {
      res.status(200).json({ message: "Gender Updated successfully", gender: newGender });
    }
  })
})


app.post('/addLostFound', upload2.single('image'), (req, res) => {
  const data = req.body;
  console.log(data, "message")
  const image = req.file.fieldname;
  const { userid, petName, breed, color, mobile, message, last_location } = data;

  const sql = 'INSERT INTO awt_lost_found (`user_id`, `pet_name`, `breed`, `color`, `contact`, `message`, `image`, `last_location`)  VALUES(?,?,?,?,?,?,?,?)';

  con.query(sql, [userid, petName, breed, color, mobile, message, image, last_location], (error, data) => {
    if (error) {
      res.json(error);
    } else {
      res.json(data);
    }
  })
})

app.get('/getLostFound', (req, res, next) => {
  const sql = 'SELECT * FROM awt_lost_found WHERE deleted = 0';

  con.query(sql, (error, data) => {
    if (error) {
      res.json(err);
    } else {
      res.json(data);
    }
  })
})

app.post('/book_appoint', (req, res, next) => {
  let user_id = req.body.user_id;
  let service_id = req.body.service_id;
  let date = req.body.date;
  let created_at = new Date()

  console.log(date)

  const sql = 'insert into awt_bookappointment(`user_id`,`service_id`,`book_date`,`created_date`) values(?,?,?,?)';

  con.query(sql, [user_id, service_id, date, created_at], (err, data) => {
    if (err) {
      res.json("Booking UnSuccessfull");
    } else {
      res.json("Booking Successfully");
    }
  })
})

app.post('/getappoint_detail', (req, res, next) => {
  let user_id = req.body.user_id;



  const sql = 'select ab.id , ab.user_id , ab.service_id, ab.status , ab.book_date,aas.title,aas.upload_image,ar.firstname,ar.lastname , au.parent_name , au.mobile from awt_bookappointment as ab left JOIN awt_add_services as aas on ab.service_id = aas.id LEFT JOIN awt_registeruser as ar on ar.id = ab.user_id left join awt_userprofile as au on au.userid = ab.user_id  where ab.user_id = ? and ab.deleted = 0 order by ab.id desc';

  con.query(sql, [user_id], (err, data) => {
    if (err) {
      res.json(err);
    } else {
      const result = data.map((row) => ({
        id: row.id,
        user_id: row.user_id,
        service_id: row.service_id,
        status: row.status,
        book_date: row.book_date,
        title: row.title,
        upload_image: row.upload_image,
        firstname: row.firstname,
        lastname: row.lastname,
        parent_name: row.parent_name,
        mobile: row.mobile
      }));
      res.json(result);
    }
  })
})

app.post('/getservicereq_detail', (req, res, next) => {
  let user_id = req.body.user_id;



  const sql = 'select ab.id , ab.service_id ,ab.book_date,ab.status,aas.title,aas.address,aas.upload_image from awt_bookappointment as ab left join awt_add_services as aas on aas.id = ab.service_id WHERE aas.user_id = 8 order by ab.id desc';

  con.query(sql, [user_id], (err, data) => {
    if (err) {
      res.json(err);
    } else {

      res.json(data);
    }
  })
})

app.post('/update_appoint', (req, res, next) => {
  const request_id = req.body.request_id;

  const sql = "update awt_bookappointment set status = 1 where id = ?"

  con.query(sql, [request_id], (err, data) => {
    if (err) {
      return res.json(err)
    }
    else {
      return res.json(data)
    }
  })
})
// app.post('/getPetProfiledata', (req, res, next) => {
//   const { userId } = req.body; // Destructure the userid from req.body
//   const sql = 'SELECT * FROM awt_userprofile WHERE userid = ? AND deleted = 0 ORDER BY created_date DESC';
//   console.log(userId, "nai mili");

//   con.query(sql, [userId], (err, data) => {
//     if (err) {
//       return res.status(404).json({ msg: "cannot fetch data" });
//     } else {
//       return res.json(data);
//     }
//   });
// });
app.post('/getPetProfiledata', (req, res, next) => {
  const { userId } = req.body; // Destructure the userid from req.body
  const sql = 'SELECT * FROM awt_userprofile WHERE userid = ? AND deleted = 0'

  con.query(sql, [userId], (err, data) => {
    if (err) {
      return res.status(404).json({ message: "cannot fetch data" });
    } else {
      return res.json(data);
    }
  });
});


app.post('/postManageService', upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'image2', maxCount: 1 },
  { name: 'image3', maxCount: 1 }
]), (req, res) => {
  const data = req.body;
  const image1 = req.files['image'];
  const image2 = req.files['image2'];
  const image3 = req.files['image3'];

  let img1 = image1[0].filename
  let img2 = image2[0].filename
  let img3 = image3[0].filename
  let date = new Date()
  console.log(data, img1, img2, img3);
  const { serviceCategory, serviceName, serviceDescription, cost, discount } = req.body;
  const sql = 'INSERT INTO awt_manage_services (`service_name`, `service_category`, `service_description`, `image1`, `image2`, `image3, cost, discount` VALUES (?,?,?,?,?,?))';
  con.query(sql, [serviceName, serviceCategory, serviceDescription, img1, img2, img3, cost, discount], (err, data) => {
    if (err) {
      res.json({ message: "Could not add service" });
    } else {
      res.json({ message: "Added Successfully" });
    }
  })
})

app.post(`/private`, (req, res) => {
  const user_id = req.body.user_id;
  const private = req.body.private;

  const sql = "update awt_userprofile set private = ? where userid = ?"

  con.query(sql, [private, user_id], (err, data) => {
    if (err) {
      return res.json(err)
    } else {
      return res.json(data)
    }
  })
})

app.post(`/getprivate`, (req, res) => {
  const user_id = req.body.user_id;


  const sql = "select private from awt_userprofile where userid = ?";

  con.query(sql, [user_id], (err, data) => {
    if (err) {
      return res.json(err)
    } else {
      return res.json(data)
    }
  })
})

app.post('/addWeight', (req, res, next) => {
  const { weight } = req.body;
  const { userid } = req.body;

  const createdAt = new Date()

  const checkIfExists = 'SELECT weight FROM awt_userprofile WHERE userid = ?';

  con.query(checkIfExists, [userid], (checkError, checkData) => {
    if (checkError) {
      return res.json(checkError);
    }

    if (checkData.length > 0) {
      const updateQuery = 'UPDATE awt_userprofile SET weight=?, updated_date=? WHERE userid=?';
      con.query(updateQuery, [weight, createdAt, userid], (updateError, updateData) => {
        if (updateError) {
          return res.json({
            error: updateError,
            messsage: "Couldn't Update weight"
          });
        } else {
          return res.json({ message: "Weight Updated Scuccessfully", weight: weight });
        }
      })
    } else {
      const insertQuery = 'INSERT INTO awt_userprofile (userid, weight, created_date) VALUES (?,?,?)'
      con.query(insertQuery, [userid, weight, createdAt], (insertError, insertData) => {
        if (insertError) {
          return res.json({
            error: insertError,
            message: "Sorry we couldn't save weight."
          });
        } else {
          return res.json({ message: "Succefully saved weight.", weight: weight });
        }
      })
    }
  });
});

app.post('/addHeight', (req, res, next) => {
  const { height } = req.body;
  const { userid } = req.body;

  const createdAt = new Date()

  const checkIfExists = 'SELECT height FROM awt_userprofile WHERE userid = ?';

  con.query(checkIfExists, [userid], (checkError, checkData) => {
    if (checkError) {
      return res.json(checkError);
    }

    if (checkData.length > 0) {
      const updateQuery = 'UPDATE awt_userprofile SET height=?, updated_date=? WHERE userid=?';
      con.query(updateQuery, [height, createdAt, userid], (updateError, updateData) => {
        if (updateError) {
          return res.json({
            error: updateError,
            messsage: "Couldn't Update height"
          });
        } else {
          return res.json({ message: "Height Updated Scuccessfully", height: height });
        }
      })
    } else {
      const insertQuery = 'INSERT INTO awt_userprofile (userid, height, created_date) VALUES (?,?,?)'
      con.query(insertQuery, [userid, height, createdAt], (insertError, insertData) => {
        if (insertError) {
          return res.json({
            error: insertError,
            message: "Sorry we couldn't save height."
          });
        } else {
          return res.json({ message: "Succefully saved height.", height: height });
        }
      })
    }
  });
});
app.post('/addColor', (req, res, next) => {
  const { color } = req.body;
  const { userid } = req.body;

  const createdAt = new Date()

  const checkIfExists = 'SELECT color FROM awt_userprofile WHERE userid = ?';

  con.query(checkIfExists, [userid], (checkError, checkData) => {
    if (checkError) {
      return res.json(checkError);
    }

    if (checkData.length > 0) {
      const updateQuery = 'UPDATE awt_userprofile SET color=?, updated_date=? WHERE userid=?';
      con.query(updateQuery, [color, createdAt, userid], (updateError, updateData) => {
        if (updateError) {
          return res.json({
            error: updateError,
            messsage: "Couldn't Update color"
          });
        } else {
          return res.json({ message: "Color Updated Scuccessfully", color: color });
        }
      })
    } else {
      const insertQuery = 'INSERT INTO awt_userprofile (userid, color, created_date) VALUES (?,?,?)'
      con.query(insertQuery, [userid, color, createdAt], (insertError, insertData) => {
        if (insertError) {
          return res.json({
            error: insertError,
            message: "Sorry we couldn't save color."
          });
        } else {
          return res.json({ message: "Succefully saved color.", color: color });
        }
      })
    }
  });
});
app.post('/addBreed', (req, res, next) => {
  const { breed } = req.body;
  const { userid } = req.body;

  const createdAt = new Date()

  const checkIfExists = 'SELECT breed FROM awt_userprofile WHERE userid = ?';

  con.query(checkIfExists, [userid], (checkError, checkData) => {
    if (checkError) {
      return res.json(checkError);
    }

    if (checkData.length > 0) {
      const updateQuery = 'UPDATE awt_userprofile SET breed=?, updated_date=? WHERE userid=?';
      con.query(updateQuery, [breed, createdAt, userid], (updateError, updateData) => {
        if (updateError) {
          return res.json({
            error: updateError,
            messsage: "Couldn't Update breed"
          });
        } else {
          return res.json({ message: "breed Updated Scuccessfully", breed: breed });
        }
      })
    } else {
      const insertQuery = 'INSERT INTO awt_userprofile (userid, breed, created_date) VALUES (?,?,?)'
      con.query(insertQuery, [userid, breed, createdAt], (insertError, insertData) => {
        if (insertError) {
          return res.json({
            error: insertError,
            message: "Sorry we couldn't save breed."
          });
        } else {
          return res.json({ message: "Succefully saved breed.", breed: breed });
        }
      })
    }
  });
});
app.post('/addDate', (req, res, next) => {
  const { date } = req.body;
  const { userid } = req.body;

  const createdAt = new Date()

  const checkIfExists = 'SELECT dob FROM awt_userprofile WHERE userid = ?';

  con.query(checkIfExists, [userid], (checkError, checkData) => {
    if (checkError) {
      return res.json(checkError);
    }

    if (checkData.length > 0) {
      const updateQuery = 'UPDATE awt_userprofile SET dob=?, updated_date=? WHERE userid=?';
      con.query(updateQuery, [date, createdAt, userid], (updateError, updateData) => {
        if (updateError) {
          return res.json({
            error: updateError,
            messsage: "Couldn't Update date"
          });
        } else {
          return res.json({ message: "date Updated Scuccessfully", date: date });
        }
      })
    } else {
      const insertQuery = 'INSERT INTO awt_userprofile (userid, dob, created_date) VALUES (?,?,?)'
      con.query(insertQuery, [userid, date, createdAt], (insertError, insertData) => {
        if (insertError) {
          return res.json({
            error: insertError,
            message: "Sorry we couldn't save date."
          });
        } else {
          return res.json({ message: "Succefully saved date.", date: date });
        }
      })
    }
  });
});


app.get('/state', (req, res, next) => {
  const sql = 'SELECT * FROM awt_states';

  con.query(sql, (err, data) => {
    if (err) {
      return res.status(404).json({ msg: "cannot fetch data" });
    } else {
      return res.json(data);
    }
  });
});