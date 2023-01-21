var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'mp-database.ckohq00bj3ax.us-east-1.rds.amazonaws.com',
  port: '3306',
  user: 'admin',
  password: 'seniorsproject',
  database: 'seniors_project'
})

connection.connect(error => {
  if (error) throw error;
  console.log('Connected to AWS RDS DB')
})
module.exports = connection;