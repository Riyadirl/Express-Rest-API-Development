const mongoose = require('mongoose');

const deptSchema = new mongoose.Schema({
    Name: String,
    id: {
        type: Number,//type casting
        //custom error msg
        // min: [6, 'Min 6 & Max 12 But supplied value is ={VALUE}'],
        //max: [12, 'Min 6 & Max 12 But supplied value is ={VALUE}'],
    },

    //Custom Validation
    /*
     mobile: {
         type: String,
         validate: {
             validator: function (value) {
                 if (value.length === 11) {
                     return true
                 } else {
                     return false
                 }
             }
         },
         messages: "11 digit number required"
 
     },
     */
    /*
    //regex validation
    Contact_no: {
        type: String,
        validate: {
            validator: function (value) {
                return /^(\+?880|0)1[3456789]\d{8}$/.test(value)
            },
            messages: "Inavalid bd number"
        }


    },

*/
    city: String,
    dept: String

},
    { timestamps: true, versionKey: false }
);

const DeptModel = mongoose.model('depts', deptSchema);

module.exports = DeptModel;




/*


{
 "name":"",
"id" : ,

"dept" : "",
"city" : ""
}

*/