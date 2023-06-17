const mongoose = require('mongoose');
let mongoConnection=()=>{
mongoose.connect(""+process.env.MONGOOSE_URL)
  .then(() => console.log('Connected!'));
}
module.exports ={mongoConnection}