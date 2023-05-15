const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Creating  a connection to the MySQL database
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'ergon@123',
    database: 'reference_details'
});

//for Connecting to the MySQL database
connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }

    console.log('Connected to MySQL database');
});
app.use(express.json());

app.post('/post', (req, res) => {
    const s_no = req.body.s_no;
    const rig_name = req.body.rig_name;
    const short_name = req.body.short_name;
    const customer_name = req.body.customer_name;
    const details = req.body.details;
    const design = req.body.design;
    const location = req.body.location;
    const hull_no = req.body.hull_no;
    const design_2 = req.body.design_2;
    const new_group = req.body.new_group;

    connection.query('insert into rig_details values(?,?,?,?,?,?,?,?,?,?)', [s_no, rig_name, short_name, customer_name, details, design, location, hull_no, design_2, new_group], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send({sucess : true,message : "Data insert Successfully"})
        }
    })
})

app.post('/post1', (req, res) => {
    const s_no = req.body.s_no;
    const country = req.body.country;
    const File_name_for_legal_requirements = req.body.File_name_for_legal_requirements;
    const Documents = req.body.Documents;

    connection.query('insert into legal_details values(?,?,?,?)', [s_no, country, File_name_for_legal_requirements, Documents], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("POSTED")
        }
    })


})

app.post('/post2', (req, res) => {
    console.log("post2 end point")
    const S_No = req.body.S_No;
    const  Customer_Name = req.body.Customer_Name;
    const Designation = req.body.Designation;
    const Signature = req.body.Signature;
    const Components = req.body.Components;
    const Rigs = req.body.Rigs;
    const jackingExperience = req.body.jackingExperience;
    const skiddingExperience = req.body.skiddingExperience;
    const craneExperience = req.body.craneExperience;
    const Upcoming_project_duration_RigName = req.body.Upcoming_project_duration_RigName;

    connection.query('insert into professional_details values(?,?,?,?,?,?,?,?,?,?)', [S_No,Customer_Name, Designation, Signature, Components, Rigs, jackingExperience,skiddingExperience,craneExperience, Upcoming_project_duration_RigName], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send({success : true, message  : "successfully added"})
        }
    })

})


app.post('/post3', (req, res) => {
    const Id_No = req.body.Id_No;
    const Item_No = req.body.Item_No;
    const Description = req.body.Description;
    const Manufacturer = req.body.Manufacturer;
    const Model = req.body.Model;
    const Serial_No = req.body.Serial_No;
    const Cal_Date = req.body.Cal_Date;
    const Due_Date = req.body.Due_Date;
    const Range_Value = req.body.Range_Value;
    const Nominal_Value = req.body.Nominal_Value;
    const Measured_Value = req.body.Measured_Value;
    const Acceptance_Criteria = req.body.Acceptance_Criteria;
    const Frequency = req.body.Frequency;
    const Cert_No = req.body.Cert_No;
    const Status = req.body.Status;
    const Remarks = req.body.Remarks;

    connection.query('insert into tools_register values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [Id_No,Item_No,Description, Serial_No,Manufacturer,Model, Cal_Date,Due_Date, Range_Value, Nominal_Value, Measured_Value, Acceptance_Criteria, Frequency, Cert_No, Status, Remarks], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("POSTED")
        }
    })

})




//write app.get function to get all the details if rig_details table from mysql database
app.get('/rig_details', (req, res) => {
    connection.query('select * from rig_details', (err, data) => {
        if (err) return res.json(err)
        return res.json(data)


    })

})


// rig short name drpdown to fetch the details
// app.get('/rig_details/short_name', (req, res) => {
//     const { shortName } = req.params;
//     connection.query('SELECT rig_name FROM rig_details WHERE rig_short_name = ?', [shortName], (err, results) => {
//         if (err) {
//             console.log(err);
//             res.send({success : false, message : "Error fetching rig short names"});
//         } else {
//             const rigShortNames = results.map(result => result.rig_short_name);
//             res.send({success : true, data : rigShortNames});
//         }
//     });
// });

// app.get('/rig_short_name', (req, res) => {
//     connection.query('SELECT rig_name FROM rig_details', (err, data) => {
//       if (err) {
//         console.log(err);
//         res.send({ success: false, message: 'Error retrieving rig short names' });
//       } else {
//         res.send({ success: true, data: data });
//       }
//     });
//   });
  
  app.get('/short_name', (req, res) => {
    connection.query('SELECT short_name FROM rig_details', (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error retrieving short names');
      } else {
        const shortNames = results.map(result => result.short_name);
        res.send(shortNames);
      }
    });
  });

  app.get('/get-rig-details-with-shortName', (req, res) => {
    const { short_name } = req.query;

    connection.query(`SELECT * FROM reference_details.rig_details where short_name="${short_name}"`, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error retrieving rig details');
      } else {
        const rigDetails = results.map(result => result);
        res.send(rigDetails);
      }
    });
  });
  
//Search api to search results by using parameters like rig short name,customer name,design,location


app.get('/rig_details_search', (req, res) => {
    const { rigShortName, customerName, design, location } = req.query;
  console.log("rig details::::::::::")
    let query = 'SELECT * FROM rig_details';
  
    if (rigShortName || customerName || design || location) {
      query += ' WHERE';
  
      if (rigShortName) {
        query += ` short_name = '${rigShortName}'`;
      }
  
    //   if (customerName) {
    //     query += ` ${rigShortName ? 'AND' : ''} customer_name = '${customerName}'`;
    //   }
  
    //   if (design) {
    //     query += ` ${rigShortName || customerName ? 'AND' : ''} design = '${design}'`;
    //   }
  
    //   if (location) {
    //     query += ` ${rigShortName || customerName || design ? 'AND' : ''} location = '${location}'`;
    //   }
    }
  
    connection.query(query, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  });
  

//search api for legal details by country name 


app.get('/legal_details', (req, res) => {
    const { country } = req.query;
  
    let query = 'SELECT * FROM legal_details';
  
    if (country) {
      query += ` WHERE country = '${country}'`;
    }
  
    connection.query(query, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  });
  


/*app.get('/legal_details', (req, res) => {
    connection.query('select * from legal_details', (err, data) => {
        if (err) return res.json(err)
        return res.json(data)


    })

})*/

//Search api for professional_details by customer name and rigs_short_name


app.get('/professional_details', (req, res) => {
    const { Customer_Name, Rigs } = req.query;
  
    let query = 'SELECT * FROM professional_details';
  
    if (Customer_Name || Rigs) {
      query += ' WHERE';
  
      if (Customer_Name) {
        query += ` Customer_name = '${Customer_Name}'`;
      }
  
      if (Rigs) {
        query += ` ${Customer_Name ? 'AND' : ''} Rigs = '${Rigs}'`;
      }
    }
  
    connection.query(query, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  });
  

//api for supervisiors
  app.get('/supervisor_customer_names', (req, res) => {
    connection.query('SELECT Customer_Name FROM professional_details WHERE Designation = "Supervisor"', (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error retrieving supervisor customer names');
      } else {
        const customerNames = results.map(result => result.Customer_Name);
        res.send(customerNames);
      }
    });
  });
  
  //api for technicians
  app.get('/technician_customer_names', (req, res) => {
    connection.query('SELECT Customer_Name FROM professional_details WHERE Designation = "Technician"', (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error retrieving technician customer names');
      } else {
        const customerNames = results.map(result => result.Customer_Name);
        res.send(customerNames);
      }
    });
  });
  

app.get('/professional_details', (req, res) => {
    connection.query('select * from professional_details', (err, data) => {
        if (err) return res.json(err)
        return res.json(data)


    })

})



//search api for tools_register by Item_No

app.get('/Item_No', (req, res) => {
  
  connection.query('SELECT Item_No FROM reference_details.tools_register ', (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error retrieving tool Item no');
    } else {
      const Item_No = results.map(result => result.Item_No);
      res.send(Item_No);
    }
  });
});

app.get('/get-tools-details-with-Item_No', (req, res) => {
  const { Item_No } = req.query;

  connection.query(`SELECT * FROM reference_details.tools_register where Item_No="${Item_No}"`, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error retrieving tools details');
    } else {
      const tools_register = results.map(result => result);
      res.send(tools_register);
    }
  });
});



app.get('/tools_register', (req, res) => {
    connection.query('select * from tools_register', (err, data) => {
        if (err) return res.json(err)
        return res.json(data)


    })

})

app.get('/Description', (req, res) => {
  
    connection.query('SELECT Description FROM reference_details.tools_register ', (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error retrieving tool descriptions');
      } else {
        const descriptions = results.map(result => result.Description);
        res.send(descriptions);
      }
    });
  });
  
  app.get('/get-Description', (req, res) => {
    const { Description } = req.query;

    connection.query(`SELECT * FROM reference_details.tools_register where Description="${Description}"`, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error retrieving rig details');
      } else {
        const tools_register = results.map(result => result);
        res.send(tools_register);
      }
    });
  });
//To update all the details or specific fields

// app.put('/post', (req, res) => {
//     const s_no = req.body.s_no;
//     const rig_name = req.body.rig_name;
//     const short_name = req.body.short_name;
//     const customer_name = req.body.customer_name;
//     const details = req.body.details;
//     const design = req.body.design;
//     const location = req.body.location;
//     const hull_no = req.body.hull_no;
//     const design_2 = req.body.design_2;
//     const new_group = req.body.new_group;

//     connection.query('UPDATE rig_details SET s_no = ?, rig_name = ?, short_name = ?, customer_name = ?, details = ?, design = ?, location = ?, hull_no = ?, design_2 = ?, new_group = ? WHERE s_no = ?', [s_no, rig_name, short_name, customer_name, details, design, location, hull_no, design_2, new_group, s_no], (err, result) => {
//         if (err) {
//             console.log(err)
//         } else {
//             res.send("UPDATED")
//         }
//     })
// })
app.put('/post/:s_no', (req, res) => {
    const s_no = req.params.s_no;
    const rig_name = req.body.rig_name;
    const short_name = req.body.short_name;
    const customer_name = req.body.customer_name;
    const details = req.body.details;
    const design = req.body.design;
    const location = req.body.location;
    const hull_no = req.body.hull_no;
    const design_2 = req.body.design_2;
    const new_group = req.body.new_group;

    connection.query('update rig_details set rig_name=?, short_name=?, customer_name=?, details=?, design=?, location=?, hull_no=?, design_2=?, new_group=? where s_no=?', [rig_name, short_name, customer_name, details, design, location, hull_no, design_2, new_group, s_no], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send({sucess : true,message : "Data updated Successfully"})
        }
    })
})








app.put('/post1', (req, res) => {
    const s_no = req.body.s_no;
    const country = req.body.country;
    const File_name_for_legal_requirements = req.body.File_name_for_legal_requirements;
    const Documents = req.body.Documents;

    connection.query('update legal_details SET s_no = ?, country = ?, File_name_for_legal_requirements = ?,Documents = ? WHERE s_no = ?', [s_no, country, File_name_for_legal_requirements, Documents, s_no], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("UPDATED")
        }
    })


})


app.put('/post2', (req, res) => {
    const S_No = req.body.S_No;
    const Customer_Name = req.body.Customer_Name;
    const Designation = req.body.Designation;
    const Signature = req.body.Signature;
    const Components = req.body.Components;
    const Rigs = req.body.Rigs;
    const Experience_with_components_X3 = req.body.Experience_with_components_X3;
    const Upcoming_project_duration_RigName = req.body.Upcoming_project_duration_RigName;

    connection.query('update professional_details SET S_No = ?, Customer_Name = ?, Designation = ?, Signature = ?, Components = ?, Rigs = ?, Experience_with_components_X3 = ?, Upcoming_project_duration_RigName = ? WHERE S_NO = ?', [S_No,Customer_Name, Designation, Signature, Components, Rigs, Experience_with_components_X3, Upcoming_project_duration_RigName, S_No], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("UPDATED")
        }
    })

})



app.put('/post3', (req, res) => {
    const Id_No = req.body.Id_No;
    const Item_No = req.body.Item_No;
    const Description = req.body.Description;
    const Manufacturer = req.body.Manufacturer;
    const Model = req.body.Model;
    const Serial_No = req.body.Serial_No;
    const Cal_Date = req.body.Cal_Date;
    const Due_Date = req.body.Due_Date;
    const Range_Value = req.body.Range_Value;
    const Nominal_Value = req.body.Nominal_Value;
    const Measured_Value = req.body.Measured_Value;
    const Acceptance_Criteria = req.body.Acceptance_Criteria;
    const Frequency = req.body.Frequency;
    const Cert_No = req.body.Cert_No;
    const Status = req.body.Status;
    const Remarks = req.body.Remarks;

    connection.query('update tools_register SET Id_No = ?, Item_No = ?, Description = ?, Manufacturer = ?, Model = ?, Serial_No = ?, Cal_Date = ?, Due_Date = ?,Range_Value = ?,Nominal_Value = ?,Measured_Value = ?,Acceptance_Criteria = ?,Frequency = ?,Cert_No = ?,Status = ?,Remarks = ? WHERE Id_No = ?', [Id_No, Item_No,Description,Manufacturer,Model,Serial_No, Cal_Date, Due_Date, Range_Value, Nominal_Value, Measured_Value, Acceptance_Criteria, Frequency, Cert_No, Status, Remarks,Id_No], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("UPDATED")
        }
    })

})


//project details api

app.post('/project_details', (req, res) => {
   
    const Sales_Order_No = req.body.Sales_Order_No;
    const Po_No = req.body.Po_No;
    const Po_Days = req.body.Po_Days;
    const Po_Date = req.body.Po_Date;
    const Quote_No = req.body.Quote_No;
    const Sales_Order_Date = req.body.Sales_Order_Date;
    const Service_Component = req.body.Service_Component;
    const Document_Date = req.body.Document_Date;
    const Rig_Name = req.body.Rig_Name;
    const Customer_Name = req.body.Customer_Name;
    const Rig_Location = req.body.Rig_Location;
    const Rig_Type = req.body.Rig_Type;
    const Estimated_Date_Of_Commencement = req.body.Estimated_Date_Of_Commencement;
    const Estimated_Project_Completion_Month = req.body.Estimated_Project_Completion_Month;
    const Supervisor1 = req.body.Supervisor1;
    
    const Technician1 = req.body.Technician1;
    
    const Tool1  = req.body.Tool1;
    const Item_ID1 = req.body.Item_ID1;
    const Make1 = req.body.Make1;
    const Model1 = req.body.Model1;
    const Serial_Number1 = req.body.Serial_Number1;
    const Calibration_Date1 = req.body.Calibration_Date1;
    const Calibration_Due_Date1 = req.body.Calibration_Due_Date1;
    const Acceptance_Criteria1 = req.body.Acceptance_Criteria1;
    const Tool2  = req.body.Tool2;
    const Item_ID2 = req.body.Item_ID2;
    const Make2 = req.body.Make52;
    const Model2 = req.body.Model2;
    const Serial_Number2 = req.body.Serial_Number2;
    const Calibration_Date2 = req.body.Calibration_Date2;
    const Calibration_Due_Date2 = req.body.Calibration_Due_Date2;
    const Acceptance_Criteria2 = req.body.Acceptance_Criteria2;

    connection.query('INSERT INTO project_details (Sales_Order_No, Po_No, Po_Days, Po_Date,Quote_No, Sales_Order_Date, Service_Component,Document_Date ,Rig_Name, Customer_Name, Rig_Location, Rig_Type, Estimated_Date_Of_Commencement, Estimated_Project_Completion_Month,Supervisor1,Technician1,Tool1, Item_ID1,Make1,Model1,Serial_Number1,Calibration_Date1,Calibration_Due_Date1,Acceptance_Criteria1,Tool2,Item_ID2,Make2,Model2,Serial_Number2,Calibration_Date2,Calibration_Due_Date2,Acceptance_Criteria2) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? ,?,? ,? ,?)', [Sales_Order_No, Po_No, Po_Days,Po_Date, Quote_No, Sales_Order_Date, Service_Component, Document_Date, Rig_Name, Customer_Name, Rig_Location, Rig_Type, Estimated_Date_Of_Commencement, Estimated_Project_Completion_Month,Supervisor1,Technician1,Tool1,Item_ID1,Make1,Model1,Serial_Number1,Calibration_Date1,Calibration_Due_Date1,Acceptance_Criteria1,Tool2,Item_ID2,Make2,Model2,Serial_Number2,Calibration_Date2,Calibration_Due_Date2,Acceptance_Criteria2], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send({success : true,message : "Data inserted Successfully"})
        }
    })
})


//get api
app.get('/project_details', (req, res) => {
    connection.query('SELECT * FROM project_details', (err, results) => {
        if (err) {
            console.log(err);
            res.send({success : false, message : "Error fetching data"});
        } else {
            res.send({success : true, data : results});
        }
    });
});




app.put('/project_details', (req, res) => {

    const Order_No = req.body.Order_No;
    const Po_No = req.body.Po_No;
    const Po_Days = req.body.Po_Days;
    const Quote_No = req.body.Quote_No;
    const Sales_Order_Date = req.body.Sales_Order_Date;
    const Service_Component = req.body.Service_Component;
    const Nature_Of_Service = req.body.Nature_Of_Service;
    const Rig_Name = req.body.Rig_Name;
    const Customer_Name = req.body.Customer_Name;
    const Rig_Location = req.body.Rig_Location;
    const Rig_Type = req.body.Rig_Type;
    const Estimated_Date_Of_Commencement = req.body.Estimated_Date_Of_Commencement;
    const Estimated_Project_Completion_Month = req.body.Estimated_Project_Completion_Month;
    const Torque_Wrench = req.body.Torque_Wrench;
    const Dial_Indicator = req.body.Dial_Indicator;
    const Team_Member  = req.body.Team_Member;
    const Designation = req.body.Designation;

    connection.query('UPDATE project_details SET Order_No = ?, Po_No = ?, Po_Days = ?, Quote_No = ?, Sales_Order_Date = ?, Service_Component = ?, Nature_Of_Service = ?, Rig_Name = ?, Customer_Name = ?, Rig_Location = ?  Rig_Type = ?, Estimated_Date_Of_Commencement = ?, Estimated_Project_Completion_Month = ?, Torque_Wrench = ?, Dial_IndiWHERE s_no = ?', [s_no, rig_name, short_name, customer_name, details, design, location, hull_no, design_2, new_group, s_no], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send({sucess : true,message : "Data updated Successfully"})
        }
    })
})

//For deleting the details from table


app.delete('/post', (req, res) => {

    const S_No = req.query.S_No;
    connection.query('DELETE FROM rig_details WHERE S_No = ?', [S_No], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("DELETED")
        }
    })
})


app.delete('/post1', (req, res) => {
    const S_No = req.query.S_No;
    connection.query('DELETE FROM legal_details WHERE S_No = ?', [S_No], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("DELETED")
        }
    })
})


app.delete('/post2', (req, res) => {
    const S_No = req.query.S_No;
    connection.query('DELETE FROM professional_details WHERE S_No = ?', [S_No], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("DELETED")
        }
    })
})







app.delete('/post3', (req, res) => {
    const Id_No = req.query.Id_No;
    connection.query('DELETE FROM tools_register WHERE Id_No = ?', [Id_No], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("DELETED")
        }
    })
})








app.get("/", (req, res) => {
    res.json("hello this from backened")
})

app.get("/rig_details", (req, res) => {
    const query = "SELECT * FROM rig_details";
    connection.query((err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

//for login page
app.post('/loginpage', (req, res) => {
    const { Useremail, Password } = req.body;
    console.log("Useremail", Useremail);
    console.log("Password", Password);
    const query = `SELECT * FROM loginpage WHERE Useremail = '${Useremail}' AND password = '${Password}'`;
  
    connection.query(query, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      } else {
        console.log("results", results);
        if (results.length > 0) {
          // user found, redirect to admin dashboard page
          res.send({ message: 'Login successful' });
        } else {
          res.status(401).send('Unauthorized');
        }
      }
    });
  });


// Starting the server's listening port
// const port = process.env.PORT || 500;
app.listen(8002, () => {
    console.log('Server started on port 8002');
});


/* // Writing the SQL query to insert the data into the MySQL database
 const query = 'INSERT INTO rig_details( s_no,rig_name,short_name,customer_name,details,design,location,hull_no,design2,class) VALUES (3,Trident-16,141,Shelf-Drilling,view_details,MLT 82-SD-C,Egypt,71,Leteourneaue,82-SD-C)';

  // Executing  the SQL query
  connection.query(query, [s_no,rig_name,short_name,customer_name,details,design,location,hull_no,design2,class{}], (err, result) => {
   if (err) {
     console.error('Error adding data to MySQL database:', err);
     res.status(500).send('Error adding data to MySQL database');
     return;
   }

   console.log('Data added to MySQL database:', result);
   res.send('Data added to MySQL database');
 });*/
