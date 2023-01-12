const express=require("express");
const app=express();
const mysql=require("mysql");
const cors=require("cors");

app.use(cors());
app.use(express.json());


const db=mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"bhushan262",
    database:"student",
});

app.post("/create",(req,res,next)=>{
    const rollno=req.body.rollno;
    const name=req.body.name;
    const course=req.body.course;
    const doa=req.body.doa;
    const marks=req.body.marks;
    const phone=req.body.phone;

    db.query("INSERT INTO student_details (Roll_No,StudentName,Course,DOA,Marks,PhoneNo) VALUES (?,?,?,?,?,?)",
    [rollno,name,course,doa,marks,phone],
    (err,result)=>{
        if(err){
        console.log(err);
    }else{
        res.send("value Inserted");
    }
}
);
});

app.listen(3001,()=>{
    console.log("Server is listen");
})
