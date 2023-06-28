
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers['token-key'];

    // Verify the token using the secret key
    jwt.verify(token, "secretKey123", (err, decoded) => {
        if (err) {
            // If there is an error, the token is invalid
            res.status(401).json({ error: "Invalid token" });
        } else {
            // Proceed to the next middleware or route handler
            next()
        }
    });

}