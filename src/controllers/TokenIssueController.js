const jwt = require('jsonwebtoken');

// Create token
exports.TokenIssue = (req, res) => {
    // Define the payload for the token
    let payload = {
        exp: Math.floor(Date.now() / 1000) + (60 * 60), // Token expiration time (1 hour)
        data: { Name: "Mahbub Hasan", City: "Comilla", admin: true } // Data to be included in the token
    };

    // Generate the token by signing the payload with the secret key
    let token = jwt.sign(payload, "secretKey123");

    // Send the generated token in the response
    res.send(token);
};