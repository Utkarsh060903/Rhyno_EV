import PreBookModel from "../Models/PreBookModel.js";

const retrieveInfo = async (req, res) => {
    try {
        const customers = await PreBookModel.find({});
        res.json({ success: true, data: customers });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error });
    }
};

export { retrieveInfo };

