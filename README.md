# JavaScript-Starter-Kit
A JS environment that can be used as a boiler-plate for applications

### Includes set-up for the following:

#### 1) Editor
Running VS Code with **editorconfig.org** plugin
* included ```.editorconfig``` 

---

#### 2) Packages
Running NPM
* included ```.package.json```
* run ``` npm install -g nsp ``` (Node Security Project)

---

#### 3) Web Servers
Running Express
* included within ```package.json```
* included ``` srcServer.js ``` start script within /buildScripts

---

#### 4) Sharing Work-in-Progress
Running localTunnel
* run ```npm install localtunnel -g```
* command ```lt --port <portnumber>``` to generate URL for sharing
* command ``` lt --port <portnumber> <subdomain>``` to generate URL using specified subdomain

---

#### 5) Task Automation
Using NPM Scipts
* command ```npm start``` to start server & run security checks
* command ``` npm run share ``` starts server & localtunnel URL generation

---

#### 6) Transpiling
Using Babel
* included ``` babel-node``` for build scripts, allowing ES6 features

---

#### 7) Bundling
Using Webpack
* Included ``` webpack.config.dev.js ``` in root
* transpiles and bundles babel/ES6 JS down to ES5

---

#### 8) Linting
Using ESLint & ESLint-watch 
* Included ```.eslintrc.json ``` in root & included linting         within ```npm start ``` build scripts
* command ```npm run lint ``` 
* command ```npm run lint:watch ```

---

#### 9) Testing & CI

##### Testing
* Test framework: Mocha
* Assertion library: Chai
* Helper libraries: JSDOM

* command ```npm test ``` to run Mocha tests

##### CI


