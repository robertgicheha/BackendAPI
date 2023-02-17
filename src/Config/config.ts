import mssql from 'mssql'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({path:path.resolve(__dirname,'../../.env')})

const sql = require('mssql')
export const sqlConfig = {
  user: 'sa',
  password: '@2023online,*',
  database: 'TENHAG',
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

console.log('server is running');


export const checkConnection = async ()=>{
  try {
    const x = await mssql.connect(sqlConfig)
    if(x.connecting) {
      console.log('connecting...')
    }
    if(x.connected) {
      console.log('connected to database')
    }
  } catch (error) {
    console.log("unable to connect");
  }
}

checkConnection()