# Blog-express-handlebars
Blog with Express Js and Express Handlebars
<p>This is an demo Blog, which is made using Express Js and Express Handlebars. For installation and setting up of Express Js and Express Handlebars project refer below step.</p>

Check out https://blog-express-handlebars.herokuapp.com/ 

<h3>Step 1:  Install Express Js</h3>
<p><strong>Note :-</strong> Make sure you have <a href="https://nodejs.org/en/">Node.js</a> installed.</p>
<p>Go to <a href="https://expressjs.com/">Express Js</a> Website to install Express Js or use below commands to setup Express Js Project</p>
<p>Create an empty folder for your application</p>
     
     $ mkdir blog 
     $ cd blog

<p>Use the npm init command to create a package.json file for your application.</p>
          
     $ npm init

<p>This command prompts you for a number of things, such as the name and version of your application. For now, you can simply hit Enter to accept the defaults for most of them.
            For Entry Point you can stick with default index.js or create with any name eg.: app.js</p>

<p>Now install Express in the myapp directory and save it in the dependencies list. For example:</p>
    
    $ npm install express --save
    
<h3>Step 2:  Creating Project Files</h3>
<p>Open project folder into <a href="https://code.visualstudio.com/download">VS Codes</a></p>
<p>Assuming you have select index.js as Entry Point, now create index.js file.</p>

<p>Now create Routes folder, and in that create route.js file</p>

<h3>Step 3:  Install Nodemon</h3>
<p>nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected. Now use below command to install nodemon in your project directory.</p>
    
    $ npm install --save-dev nodemon

<p>Now use below command to run your application using nodemon</p>
        
    $ nodemon index.js

<h3>Step 4:  Initialize Express Handlebars</h3>
<p>Checkout <a href="https://github.com/ericf/express-handlebars">Express Handlebar Git repository</a> or use below commands.</p>

<p>Install express handlebars using below command</p>
        
    $ npm install express-handlebars

<p>Now create views folder in application directory, and inside it create layouts folder. The directory structure will look as follows.</p>
      
      .
      ├── index.js
          └── views
              ├── home.handlebars
              └── layouts
                  └── main.handlebars

      2 directories, 3 files</pre>

<p>Create .handlebars pages inside views folders eg.: home.handlebars</p>
<p>Create main.handlebars file inside layouts folder, main file will look like</p>
      
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <title>Example App</title>
      </head>
      <body>

          {{{body}}}

      </body>
      </html>
      
<p>Inside index.js file, copy and paste below code</p>

      
      const express = require("express");

      var exphbs = require("express-handlebars"); //Express Handle bars

      const path = require("path");
      const app = express();
      const port = 3000;

      //Handle bars
      app.engine("handlebars", exphbs());
      app.set("view engine", "handlebars");

      app.use("/", require(path.join(__dirname, "routes/route.js")));

      app.listen(port, () => {
        console.log(`Blog app listening at http://localhost:${port}`);
      });

