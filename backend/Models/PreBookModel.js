import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },

    lastname:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    street:{
        type: String,
        required: true
    },

    city:{
        type: String,
        required: true
    },

    state:{
        type: String,
        required: true
    },

    zipcode:{
        type: String,
        required: true
    },

    country:{
        type: String,
        required: true
    },

    phone:{
        type: String,
        required: true
    }
}  
)

const PreBookModel = mongoose.model('preBook' , customerSchema);
export default PreBookModel