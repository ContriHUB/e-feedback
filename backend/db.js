

const mongoose = require('mongoose');


const URL ='mongodb://127.0.0.1/e-feedbackDB';


const connectToMongo = ()=>{
    mongoose.connect(URL,  {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB Connection Successful");
    })
    .catch((err) => {
        console.log(err.message);
    })
}


module.exports = connectToMongo;