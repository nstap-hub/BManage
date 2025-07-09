import dotenv from 'dotenv'
import {Pool} from 'pg'
dotenv.config({override:true})


const pool = new Pool({
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT ||'5432', 10),
    database:process.env.DB_NAME!,
    user:process.env.DB_USER!,
    password:process.env.DB_PASS!
});

pool.on('error', (err,client)=>{
    console.error('Unexpected error on idle in DB pool', err)
})

const connectDB= async ():Promise<Pool> =>{
    try {
        const client = pool.connect();
        (await client).query('SELECT 1 +1 AS Solution;')
        ;(await client).release();
        console.info("PostgreSQL connected ")
        return pool
    } catch (error:any) {
        console.error('Error trying connect to postgres server')
        throw error;
    }
}
/*
 connectDB()
.then(() => console.info("ConnecteDB running"))
.catch((error) => console.info("DB connection failed", error.message || error));
*/
export {pool, connectDB};