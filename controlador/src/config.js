const {config} = require("dotenv")
config();

module.exports = {
    db: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
        mail_user: process.env.MAIL_USERNAME,
        mail_password: process.env.MAIL_PASSWORD,
        oauth_client: process.env.OAUTH_CLIENT_ID,
        oauth_client_secret: process.env.OAUTH_CLIENT_SECRET,
        oauth_refresh_token: process.env.OAUTH_REFRESH_TOKEN
    }
}
