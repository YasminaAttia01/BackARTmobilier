const mongoose = require("mongoose");

const dbconnexion = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, () => {
            console.log('Successfully connected to mongodb');
        });
    } 
    catch (error) {
        console.log(error);
    }
  
};

module.exports = {
    dbconnexion
}
