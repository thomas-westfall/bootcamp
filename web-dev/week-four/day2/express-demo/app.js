var express = require('express');
var app = express();

app.get('/:name', function(request, response){
    console.log('got request for "/hello/${request.params.name}"');
    if(request.params.name == "apple" || request.params.name == "ale")
        response.status(200).send("Apple or Ale?");
    else{
        if(request.params.name == "wh(o)\+(a)\+")
            response.status(200).send("I know right?!")
    }
});

app.get('/:firstname/:lastname', function(request, response){
    console.log('got request for "/hello/${request.params.name}"');
        response.status(200).send(request.params.firstname + " " + request.params.lastname);

});

app.get("/words/random/:randomWord", function(request, response){
    let ans = "";
    for(let i = request.params.randomWord.length - 1; i >= 0; i--){
        ans = ans + request.params.randomWord[i];
    }
    response.status(200).send(ans);
});

app.get('*', function(request, response){
    response.status(404).send("Nothing found")
});

app.listen(3000, function () {
    console.log('example app listening on port 3000!');
});