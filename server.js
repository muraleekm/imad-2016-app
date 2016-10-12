var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOone = {
    title:'Article1-Muralee',
    heading:'Article One',
    date:'Sep 5 2016',
    content:`<p>
            
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit justo quis fermentum placerat. Donec ac dictum diam, sit amet blandit ex. Donec iaculis nisl ullamcorper vehicula convallis. Phasellus tempor, lacus vitae varius viverra, arcu mauris molestie metus, finibus pellentesque enim ex vitae orci. Pellentesque accumsan varius metus nec convallis. Aenean dignissim leo eget enim posuere, eu lobortis mi volutpat. Suspendisse nisi risus, cursus quis eros sit amet, congue suscipit nisi. Cras tristique eu lacus eu finibus.
        </p>
        
        <p>
            Ut finibus vel purus faucibus congue. Duis at ex nec ligula efficitur pulvinar vitae a est. Nunc sit amet erat dictum, aliquam metus a, placerat turpis. Mauris luctus nibh eu nibh sollicitudin convallis. Vestibulum et tempor nunc. In eu lorem ut neque luctus luctus eget a mauris. Vestibulum sit amet pretium turpis. Nunc pellentesque pretium metus, et blandit enim imperdiet quis. Fusce et nulla non nibh egestas viverra. Pellentesque odio velit, bibendum non nisl quis, vehicula maximus eros. Donec viverra mi neque, sit amet vehicula velit volutpat ac.
        </p>
        
        <p>
            Nulla ut sapien ut est tincidunt efficitur. Donec non maximus mauris, sed fringilla diam. Nulla non volutpat massa. Ut dapibus, ex eu sagittis accumsan, tortor nisi cursus diam, eget pharetra urna velit id mauris. Sed ut ipsum condimentum diam malesuada consectetur sed id odio. Pellentesque nunc libero, vehicula a placerat a, venenatis ut ante. Vestibulum ultrices risus eu urna tristique commodo. Vestibulum sit amet sem aliquet, ullamcorper dolor ut, auctor neque. Donec vitae consequat lacus. Sed pretium rhoncus arcu, non efficitur est malesuada sed. Vivamus congue orci metus, a semper neque fermentum non
        </p>`
    
};
function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
var htmlTemplate=`<html>

    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width-device-width , intial-scale=1" /> 
        <link href="/ui/style.css" rel="stylesheet" />
        
        
    </head>
    
    <body>
        
      <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <h1>
            ${heading}
        </h1>
        
        <h3>
            ${date}
        </h3>
        
        <div>
            
            ${content}
        </div>
     </div>    
    </body>

    
</html>
`;
  return htmlTemplate;  
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-one', function (req, res) {
    res.send(createTemplate(articleOne));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
