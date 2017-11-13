//Auth0 dependencies
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const myJwksUri = process.env.JWKS;
const myAudience = process.env.AUDIENCE;
const myIssuer = process.env.ISSUER

//Auth0 jwtCheck
const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: myJwksUri,
    }),
    audience: myAudience,
    issuer: myIssuer,
    algorithms: ['RS256']
});

module.exports = jwtCheck
