var mongoose = require('mongoose');

var zomato = require('zomato');
var fs = require('fs');
const path = require('path');
var express = require('express');
var cors = require('cors');

const uri = "mongodb+srv://abhi:abhi1610@cluster123-2yy3u.mongodb.net/test"

/*mongoose.connect(uri, function(err, client) {

    if(err) {

         console.log('Error occurred while connecting to MongoDB Atlas...n',err);

    }
else 
    {console.log('Connected...');}

    //const collection = client.db(test1).collection(devices);

     

    //client.close();

});*/

 

/*var client = zomato.createClient({

    userKey: 'bc441c03b62c65940aba77193a003c29', //as obtained from [Zomato API](https://developers.zomato.com/apis)

  });

 

  client.getGeocode({

    lat:"28.613939", //latitude

    lon:"77.209021" //longitude

    }, function(err, result){

        if(!err){

          console.log(result);

        }else {

          console.log(err);

        }

    });  */



var obj = JSON.parse(fs.readFileSync('sample.txt'));

//console.log(obj.location.title) ;

//console.log(obj.nearby_restaurants);

var rest = obj.nearby_restaurants
let eventsres = [];

var myMap = new Map()

for (var i = 0; i < rest.length; ++i) {



   // console.log("Emp ID: "+rest[i].restaurant.name);
    eventsres.push('{name :' + rest[i].restaurant.name)
    myMap.set ('name', rest[i].restaurant.name).set( 'id' , rest[i].restaurant.id)
    test = strMapToObj(myMap) ;
   // console.log(myMap);
   eventsres.push(test)
  }

  var test = JSON.stringify(eventsres)
  console.log(test)

  function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
        // We don’t escape the key '__proto__'
        // which can cause problems on older engines
        obj[k] = v;
    }
    return obj;
}
  var app = express();

  app.use(express.static(__dirname));
 app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'/dist/index.html'))
});

//sffs djfjf

  app.get('/resturants', function (req, res) {
    
//console.log("Emp ID: "+rest[i].restaurant.name);
        res.send(eventsres)
        
    //console.log(rest[i].restaurant);
      
    
    
  });
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
  
