const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response){
    response.sendFile(__dirname+'/index.html');
});

app.post('/', function(request, response){
    console.log(request.body);
    let num1 = Number(request.body.num1);
    let num2 = Number(request.body.num2);
    let result = (num1/(num2*num2)).toFixed(2);
    console.log(`teie kehamassiindeks: ${num1} / (${num2} * ${num2}) = ${result}`);

    if (result < 19) {
        response.send(`teie kehamassiindeks:${result}, see on alakal`);
    }
    if (result >= 19 && result < 24.9) {
        response.send(`teie kehamassiindeks:${result}, see on normaalkaal`);
    }
    if (result >= 24.9 && result < 29.9) {
        response.send(`teie kehamassiindeks:${result}, see on ülekaal`);
    }
    if (result >= 29.9) {
        response.send(`teie kehamassiindeks:${result}, see on rasvumine`);
    }
});

app.listen(3000, function(){
    console.log('Server is running on Port 3000');
    
});