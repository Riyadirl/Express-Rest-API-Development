





//Mongoose SchemaTypes

/*
const mongoose = require('mongoose');
// Array:
const schema = new Schema({
    tags: {
        type: Array, // Field type is Array
        default: ['tag1', 'tag2'] // Default value is an array with 'tag1' and 'tag2'
    }
});

// Boolean:
const schema = new Schema({
    isActive: {
        type: Boolean, // Field type is Boolean
        default: true // Default value is true
    }
});

// Buffer:
const schema = new Schema({
    data: Buffer // Field type is Buffer
});

// Date:
const schema = new Schema({
    createdAt: {
        type: Date, // Field type is Date
        default: Date.now // Default value is the current date and time
    }
});

// Decimal128:
const schema = new Schema({
    price: {
        type: Schema.Types.Decimal128, // Field type is Decimal128
        default: 0.0 // Default value is 0.0
    }
});

// Embedded Document (Subdocument):
const addressSchema = new Schema({
    street: String,
    city: String
});

const userSchema = new Schema({
    name: String,
    address: addressSchema // Field type is a subdocument (embedded document)
});

// Map:
const schema = new Schema({
    ratings: {
        type: Map, // Field type is Map
        of: Number // Values in the map are of type Number
    }
});

// Number:
const schema = new Schema({
    quantity: {
        type: Number, // Field type is Number
        default: 0 // Default value is 0
    }
});

// ObjectId:
const schema = new Schema({
    userId: {
        type: Schema.Types.ObjectId, // Field type is ObjectId
        ref: 'User' // Referencing another mongoose model named 'User'
    }
});

// String:
const schema = new Schema({
    name: {
        type: String, // Field type is String
        required: true // Field is required
    }
});

*/



//Mongoose Default Value And Version Key

const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    quantity: {
        type: Number,
        default: 1
    }
}, {
    versionKey: 'version'
});

const ProductModel = mongoose.model('Product', productSchema);





//11 Mongoose Validation
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for the User model
const userSchema = new Schema({
    name: {
        type: String,
        required: true, // Name field is required
        minlength: 2, // Minimum length of 2 characters
        maxlength: 50 // Maximum length of 50 characters
    },
    age: {
        type: Number,
        min: 18, // Minimum age of 18
        max: 100 // Maximum age of 100
    },
    email: {
        type: String,
        required: true, // Email field is required
        unique: true, // Email values must be unique
        match: /^\S+@\S+\.\S+$/ // Email format validation using regex
    },
    role: {
        type: String,
        enum: ['admin', 'user'] // Role values are restricted to 'admin' or 'user'
    }
});

// Create the UserModel using the schema
const UserModel = mongoose.model('User', userSchema);

// Export the UserModel for usage in other parts of the application
module.exports = UserModel;






//Validation with custom error message
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'],
        minlength: [2, 'Name should have at least 2 characters.'],
        maxlength: [50, 'Name cannot exceed 50 characters.']
    },
    age: {
        type: Number,
        min: [18, 'Age must be at least 18.'],
        max: [100, 'Age cannot exceed 100.']
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: true,
        match: [
            /^\S+@\S+\.\S+$/,
            'Invalid email format. Please provide a valid email address.'
        ]
    },
    role: {
        type: String,
        enum: {
            values: ['admin', 'user'],
            message: 'Role must be either admin or user.'
        }
    }
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;





//Custom Validation

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for the User model
const userSchema = new Schema({
    name: {
        type: String,
        required: true, // Name field is required
        validate: {
            validator: (value) => {
                // Custom validation function for name field
                // Return true if validation passes, false otherwise
                return value.length >= 2 && value.length <= 50;
            },
            message: 'Name should have between 2 and 50 characters.' // Custom error message for name field
        }
    },
    age: {
        type: Number,
        validate: {
            validator: (value) => {
                // Custom validation function for age field
                // Return true if validation passes, false otherwise
                return value >= 18 && value <= 100;
            },
            message: 'Age must be between 18 and 100.' // Custom error message for age field
        }
    }
});

// Create the UserModel using the schema
const UserModel = mongoose.model('User', userSchema);

// Export the UserModel for usage in other parts of the application
module.exports = UserModel;





//regex validation
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for the User model
const userSchema = new Schema({
    email: {
        type: String,
        required: true, // Email field is required
        unique: true, // Email values must be unique
        match: [
            /^\S+@\S+\.\S+$/, // Regular expression pattern for email validation
            'Invalid email format. Please provide a valid email address.' // Custom error message for email field
        ]
    }
});

// Create the UserModel using the schema
const UserModel = mongoose.model('User', userSchema);

// Export the UserModel for usage in other parts of the application
module.exports = UserModel;



//JWT Token 
const jwt = require('jsonwebtoken');
const secretKey = 'yourSecretKey';

// Function to generate a JWT token
function generateToken(payload) {
    // Generate the token with the payload and secret key
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

    // Return the generated token
    return token;
}

// Function to verify a JWT token
function verifyToken(token) {
    try {
        // Verify the token using the secret key
        const decoded = jwt.verify(token, secretKey);

        // Return the decoded payload
        return decoded;
    } catch (error) {
        // If the token is invalid or has expired, an error will be thrown
        // Handle the error accordingly (e.g., log the error, return an error response)

        // For example, if the token has expired
        if (error.name === 'TokenExpiredError') {
            throw new Error('Token has expired');
        }

        throw new Error('Invalid token');
    }
}

// Example usage:

// Generate a token for a user
const userPayload = { id: '123', username: 'john.doe' };
const token = generateToken(userPayload);
console.log('Generated Token:', token);

// Verify the token
try {
    const decodedPayload = verifyToken(token);
    console.log('Decoded Payload:', decodedPayload);
} catch (error) {
    console.error('Token Verification Error:', error.message);
}
