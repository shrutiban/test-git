let express = require('express');
let auth = require('../middleware/auth');
const chalk = require('chalk');
let loginRouter = express.Router();
// const {log4jsconfig}=require('../../config/log4jsconfig.ts')
 const log=require('log-to-file')
 // Using __filename as the first argument is recommended.
 // This will set the `file` field in the output to the relative path of the current file.

let loginTriesLimit = 0;

loginRouter.get('/', (req, res) => {
	console.log(chalk.green('GET ' + chalk.blue('/login')));
	res.render('login.ejs');
	log("login reached")
});
