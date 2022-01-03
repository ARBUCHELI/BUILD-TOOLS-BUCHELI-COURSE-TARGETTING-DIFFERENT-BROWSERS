# BUILD-TOOLS-BUCHELI-COURSE-TARGETTING-DIFFERENT-BROWSERS

## In order to run the project, follow the next steps:

* Open the folder with the project and type: npm init -y
* Install babel using the following command: npm install -save-dev @babel/cli @babel/preset-env
* Create a .babelrc file with the following content:
 ```
 {
  "presets": ["@babel/preset-env"]
}
```

* Create a .browserslistrc file with the following content:
 ```
 cover 99.9%
```

* Define the command you will use to run Babel in your projet: 
```
"scripts" : {
  "build" : "babel src -d out"
}
```

* Run babel using the build command:
```
npm run build
```
