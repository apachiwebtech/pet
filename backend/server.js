const sql = require('mysql')
const express = require('express')

const app = express()
const cors = require('cors');


app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use(express.json());

app.get('/', (req, res) => {
  return res.json("this is from backend")
});

const port = 8081;
app.listen(port, () => {
  (`Server is running at http://localhost:${port}`);
});

const con = sql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pets',
})

con.connect((err) => {
  if (err) {
    ('err')
  }
  else {
    ('connection is ok')
  }
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



  let sql;
  let params;

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


            }
          })
        }
        return res.json(data)

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

app.post('/petProfile', (req, res, next)=>{
  const id = req.body.userId;
  const parent = req.body.parent;
  const state = req.body.state; // Fix the typo here from req.bosy.state to req.body.state
  const city = req.body.city;
  const address = req.body.address;
  const pincode = req.body.pincode;

  const sql = 'INSERT INTO awt_userprofile (`userid`, `state`, `city`, `pincode`) VALUES (?,?,?,?)';

  con.query(sql, [id, state, city, pincode],(err, data)=>{
    if(err){
      return res.json(err);
    }else{
      return res.json(data);
    }
  })
});