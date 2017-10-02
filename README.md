# ElectronDemo
This project is created to demonstrate electron

## Minimal Workable Demonstration

You can find the mininal workable demonstration in commit 39a86bc. In this commit, webpack is used together with javascript and electron.

### How to run

####Get all the packages
`npm install`

####Compile and build
`npm run electron`

This command will do the following things
- Compress js to build/bundle.js
- Compile code to exe file
- Open electron window

After running the code, a folder named "electron_demo-win32-x64" is created with the executable file. You can copy this folder to other places.

####Run web server
`npm run web`

This command will do the following things
- Compress js to build/bundle.js
- Run web server

You can access the webpage by http://localhost:8080
