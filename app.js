//Set up Dependencies
var express = require("express");
var app = express();
var faker = require('faker');
var faker = require('faker/locale/en_US');
var request = require("request");


//App Config
app.set("view engine", "ejs");
app.use(express.static("public"));
var SECRET = process.env.SECRET;

 'use strict';
const yelp = require('yelp-fusion');
const client = yelp.client(SECRET);
 

'use strict';


//Setup App Variables and Init App
var yelpReviewLink = "";

getDataFromYelp();

//Index Request / Main Functionality

app.get("/", function(req,res){
var yelpReview = yelpReviewLink;
res.render("index.ejs", {yelpReview:yelpReview});
getDataFromYelp();
});

app.get("/about", function(req, res){
 res.render("homepage.ejs");
});

//API Calls / Function which filters through JSON results

function getDataFromYelp(){client.search({
  location: faker.fake("{{address.zipCode}}") + ' us',
  limit: 50
  
}).then(response => {
 var fiftyBusinesses = response.jsonBody.businesses;
 var low = [];

function randomNumber() {
  var random = Math.floor(Math.random() * low.length);
  return random
};
for(i=0; i <fiftyBusinesses.length; i++){
 if((fiftyBusinesses[i].rating <= 3) && (fiftyBusinesses[i].rating >0)) {
  low.push(fiftyBusinesses[i].id); 
 } 
}
if(low == "") {console.log("Trying again"); getDataFromYelp()} else {
 var random = randomNumber();
  client.reviews(low[random].toString()).then(response => {
  var data = response.jsonBody.reviews;
  var finalData = [];
  for(i=0; i<data.length; i++){
   if(data[i].rating == 1) {
    finalData.push(data[i].url);
   } 
  
  }
  if(finalData == "") {
   console.log("error! no one star reviews"); getDataFromYelp();
  } else {
   console.log(finalData[0]); 
   yelpReviewLink = finalData[0];
  }
}).catch(e => {
  getDataFromYelp();
}); }
})

}





//Cloud9 Settings

app.listen(process.env.PORT, process.env.IP, function (){
 console.log("Server has started! You rock!");
});