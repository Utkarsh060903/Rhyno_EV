import PreBookModel from '../Models/PreBookModel.js';

const PreBook = async(req,res) => {
    const {firstname , lastname , email , street , city , state , zipcode , country , phone} = req.body;

    try{    
        const newCustomer = new PreBookModel({
            firstname: firstname,
            lastname: lastname,
            email: email,
            street: street,
            city: city,
            state: state,
            zipcode: zipcode,
            country: country,
            phone: phone
        })

        const customer = await newCustomer.save()
        res.json({success: true , message: "successfully information loaded"})
        console.log("data")

    } catch(error){
        console.log(error)
        res.json({success: false , message: "error"})
    }
}

export {PreBook}
