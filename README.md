# Random1StarYelpReviewsApp

This is a silly app which randomly pulls a 1-star Review from Yelp camp via the Yelp-Fusion API; you can view the live app here: http://www.nosuchthingasbadpress.com/

Because Yelp limits the number of results per API call (and offers no way to search via ranking), this app uses a recursive function which filters through random results and 'tests' to see which are 1-star reviews. It then uses makes another call to randomly obtain three review snippets (the app only gives you three random reviews of just a few words) and then i-Frames the obtained URL.

<h1> Technologies </h1>
Node.Js
Express
Yelp Fusion API

