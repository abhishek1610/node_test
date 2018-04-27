var mongoose = require('mongoose');

var zomato = require('zomato');
var fs = require('fs');
 
var express = require('express');

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

console.log(obj.location.title) ;

//console.log(obj.nearby_restaurants);

var rest = obj.nearby_restaurants

for (var i = 0; i < rest.length; ++i) {



    console.log("Emp ID: "+rest[i].restaurant.name);
    
//console.log(rest[i].restaurant);
  }


  var app = express();

  app.get('/resturants', function (req, res) {
    
//console.log("Emp ID: "+rest[i].restaurant.name);
        res.send(rest);
        
    //console.log(rest[i].restaurant);
      
    
    
  });
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
  
