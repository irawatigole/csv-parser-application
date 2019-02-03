const mongoose = require('mongoose');
mongoose.Promise = global.Promise; 

mongoose.connect('mongodb://localhost:27017/csv-parser', {useNewUrlParser: true}).then(() => {
  console.log('connected to db');
}).catch((err) => {
   console.log(err); 
});

mongoose.set('useCreateIndex', true);

module.exports = {
    mongoose
}