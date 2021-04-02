module.exports = {
    type: process.env.DB_TYPE,
    database: process.env.DATABASE,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true, // DEV only, do not use on PROD!
 }