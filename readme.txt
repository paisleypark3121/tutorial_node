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
- initialize: git init
- add single files: git add filename1 filename2 
- add all files: git add .
- prepare the changes with a message associated: git commit -m "my message for the commit"
- copy the URL from the repository created: git remote add origin https://github.com/MYACCOUNT/MYREPOSITORY.git
- push the changes to the remote repository (the first time "-u origin master" is needed): git push -u origin master
- in order to ignore some files: create a .gitignore file and add the following lines:
.gitignore
/folder1_name_to_be_ignored
/folder2_name_to_be_ignored
- create a branch: git branch name_of_the_branch
- switch to the branch created: git checkout name_of_the_branch (at the bottom of vscode it will be displayed the active branch)
- making changes to the new branch will require us to perform then the following:
git add .
git commit -m 'message for the commit on the new branch'
git push
- the last push will provide an alert that will inform us that this push has to be performed on a new branch using the following command:
git push --set-upstream origin name_of_the_branch
- merge the branch to the master
git checkout master
git merge name_of_the_branch
