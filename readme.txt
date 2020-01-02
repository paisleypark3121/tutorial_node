PRE-CONDITIONS
- check if GIT is installed: git --version
- check if HEROKU is installed: heroku --version
- check if NODE is installed: node --v

STEPS
- File -> Open Folder (create a new one if needed)
- Create package.json --> new terminal: npm init -y
- TTD: npm i jest --save-dev
- TTD: open package.json and change the content of "test" (echo \"Error: no test specified\" && exit 1)  with the following: jest --watchAll
- Express: npm i express --save
- Express: open package.json and add in the script "start": "node index.js"
- BodyParser: npm i body-parser --save
- Path: npm i path --save
- Nodemon: npm i nodemon --save-dev
- Nodemon: open package.json and add in the script "dev": "nodemon index.js"

START
- standard Express: npm run start
- DEV: npm run dev

GIT
- Source Control Side Bar
- create a file .gitignore and add the following code to avoid pushing node_modules folder
.gitignore
/node_modules