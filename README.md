# readjsonrequest
npm package to read the JSON link

# To install
npm install readjsonrequest

# To use
```javascript

var getreq = require('readjsonrequest');
getreq('https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/index.json',
 function(error,obj)
 {
   console.log(obj);
});

```
