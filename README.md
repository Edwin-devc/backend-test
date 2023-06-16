This project is a user management system built with bootstrap, nodejs, express and mysql.

### configuration
To be able to use this project, you should have nodejs and a mysql server running on your computer.

After cloning the project,navigate to the project folder and use the following commands install the independeces used in this project

npm init -y
npm install body-parser dotenv mysql express ejs
npm install --dev nodemon

After all dependencies have finished downloading, edit te package.json file and include the following text under scripts
"start": "nodemon app.js"

Add a .env file in the root directory and include the following code
DB_HOST = '<hostname>'
DB_USER = '<dbusername>'
DB_PASSWORD = '<password>'
DB_NAME = 'user_management'
Replace;
hostname with the hostname of your mysql database
dbusername with the your database username forexample "root"
password with your password

Save the .env file
Finally create the database user_management and import the table user using the user.sql file in the root folder

Run npm start in the terminal