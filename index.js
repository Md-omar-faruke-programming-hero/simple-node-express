const express= require('express')
var cors = require('cors')
const app= express()
const port=5000

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello i am nodemon express")
})

const users=[
    {id:0,name:"sultan1",email:"omar1@gmail.com",phone:"012"},
    {id:1,name:"nafis1",email:"omar1@gmail.com",phone:"012"},
    {id:2,name:"efti1",email:"omar1@gmail.com",phone:"012"},
    {id:3,name:"rodela1",email:"omar1@gmail.com",phone:"012"},
    {id:4,name:"topu",email:"omar5@gmail.com",phone:"012"},
    {id:5,name:"taslima",email:"omar5@gmail.com",phone:"012"}
]
app.get('/users',(req,res)=>{
    const search=req.query.search 
    if(search){
        const searchResult=users.filter(user=>user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else{
        res.send(users)
    }
    
})

app.get('/users/:id',(req,res)=>{
    const id=req.params.id 
    const user=users[id]
    res.send(user)

})


app.post('/users',(req,res)=>{
    const newUser=req.body
    newUser.id=users.length
    users.push(newUser)
    console.log("heating post",req.body)
    // res.send("inside post")
    res.json(newUser)

})

app.listen(port,()=>{
    console.log("listening port",port)
})