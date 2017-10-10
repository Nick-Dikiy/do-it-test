
const  http = require('http');

const public = require('./routes');
const home = require('./home');
// var static = require('node-static');
// const file = new static.Server('./public');


http.createServer((req, res) => {
    if (req.url.match(/\.(thml|css|js|png)$/)){
        public(req,res);
    } else if(req.url === '/'){
        home(req,res);
    } else if(req.url.startsWith('/search')){

    }
}).listen(3000, () => console.log('Server running on port 3000'));
