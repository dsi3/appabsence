var rs = require('jsrsasign');

const claims = {
    Username: "ahmed",
    Age: 27,
    Fullname: "ahmed Hassan"
   }
const key = "$AhmedIsAwesome!";  

const header = {
    alg: "HS512",
    typ: "JWT"
   };

   var sHeader = JSON.stringify(header);
   var sPayload = JSON.stringify(claims);

   const sJWT = rs.jws.JWS.sign("HS512", sHeader, sPayload, key);

   console.log(sJWT);    



    
   

   