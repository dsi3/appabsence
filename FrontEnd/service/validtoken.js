var rs = require('jsrsasign');
const token =
"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6ImFobWVkIiwiQWdlIjoyNywiRnVsbG5hbWUiOiJhaG1lZCBIYXNzYW4ifQ.fO8ozcUqutzNBPwsrQ5ZaJOBXQhqqodsjGIibzXjGADF-bkkCL_rTeQtmn-0PyF0BtccvsnnavSlmkox4kSWAg";
const algorithm = "HS512";
const key = "$AhmedIsAwesome!";
console.log(
    rs.jws.JWS.verifyJWT(token, key, {
    alg: [algorithm]
    })
   );

   
