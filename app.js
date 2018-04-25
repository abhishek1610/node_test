var mongoose = require('mongoose');

var zomato = require('zomato');

 

const uri = "mongodb+srv://abhi:abhi1610@cluster123-2yy3u.mongodb.net/test"

mongoose.connect(uri, function(err, client) {

    if(err) {

         console.log('Error occurred while connecting to MongoDB Atlas...n',err);

    }
else 
    {console.log('Connected...');}

    //const collection = client.db(test1).collection(devices);

     

    //client.close();

});

 

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

    }); */
