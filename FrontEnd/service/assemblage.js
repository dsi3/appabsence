const JSRSASign = require("jsrsasign");
const header = {
    alg: "HS512",
    typ: "JWT"
   };
   const header1 = {
    alg: ["HS512"]
   };

const key = "$AhmedIsAwesome!";  

const GenerateJWT = (claims) => {
 // Let's convert everything into strings.
 const sPayload = JSON.stringify(claims);
 // Generate the JWT and return it to the caller.
 const sJWT = JSRSASign.jws.JWS.sign("HS512",header,sPayload,key);
 return sJWT;
};
 const DecodeJWT = sJWS => {
 const aJWT = sJWS.split(".");
 const uHeader = JSRSASign.b64utos(aJWT[0]);
 const uClaim = JSRSASign.b64utos(aJWT[1]);
 const pHeader = JSRSASign.jws.JWS.readSafeJSONString(uHeader);
 const pClaim = JSRSASign.jws.JWS.readSafeJSONString(uClaim);
 return pClaim;
};
const ValidateJWT = ( token) => {
   
 return JSRSASign.jws.JWS.verifyJWT(token, key, header1);
};
module.exports = {
 GenerateJWT,
 DecodeJWT,
 ValidateJWT
};
