module.exports = {
    type: process.env.DB_TYPE,
    database: process.env.DATABASE,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true, // DEV only, do not use on PROD!
 }