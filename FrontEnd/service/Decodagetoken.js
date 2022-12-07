var rs = require('jsrsasign');

const token =
"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6ImFobWVkIiwiQWdlIjoyNywiRnVsbG5hbWUiOiJhaG1lZCBIYXNzYW4ifQ.fO8ozcUqutzNBPwsrQ5ZaJOBXQhqqodsjGIibzXjGADF-bkkCL_rTeQtmn-0PyF0BtccvsnnavSlmkox4kSWAg";
const aJWT = token.split(".");
const uHeader = rs.b64utos(aJWT[0]);
const uClaim = rs.b64utos(aJWT[1]);

const pHeader = rs.jws.JWS.readSafeJSONString(uHeader);
const pClaim = rs.jws.JWS.readSafeJSONString(uClaim);

console.log(pHeader);
console.log(pClaim);
