const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres.cveicdaizlxtslvosxqm',
  host: 'aws-0-us-east-1.pooler.supabase.com',
  database: 'postgres',
  password: 'gYPndVdJQlupiJoS',
  port: 5432,
})


exports.pool = pool