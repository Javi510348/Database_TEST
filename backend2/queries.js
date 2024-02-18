const { response } = require('express')

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres.cveicdaizlxtslvosxqm',
  host: 'aws-0-us-east-1.pooler.supabase.com',
  database: 'postgres',
  password: 'gYPndVdJQlupiJoS',
  port: 5432,
})

const getUsers = (request, response) => {
  let test1=[]
  let result=[]
  pool.query('select * from Person', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
    
  })
  
//   let result=[]
//   for (row in test1){
//     result.push(row)
//   }}
}


const getUsers2 = async (request, response) => {
  
  const result= await pool.query('select * from person')

  return result.rows
  

  
//   console.log(test1)
//   let result=[]
//   for (row in test1){
//     result.push(row)
//   }}
}


const createUser =async (request,response)=>{
  const {name,lastname}= request

  const result= await pool.query('insert into person(name,lastname) values ($1,$2) returning id',[name,lastname])

 

  return result.rows



}


module.exports={

    getUsers,
    getUsers2,
    createUser
}


