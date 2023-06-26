const jwt = require('jsonwebtoken');

// Create token
exports.createToken = (req, res) => {
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

// Decode token
exports.decodeToken = (req, res) => {
    // Retrieve the token from the request headers
    const token = req.headers['token-key'];

    // Verify the token using the secret key
    jwt.verify(token, "secretKey123", (err, decoded) => {
        if (err) {
            // If there is an error, the token is invalid
            res.status(401).json({ error: "Invalid token" });
        } else {
            // If the token is valid, send the decoded payload in the response
            res.send(decoded);
        }
    });
};
