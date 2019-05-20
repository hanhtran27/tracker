import app from "./app";
import * as mongoose from 'mongoose';

const PORT = 8080;

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
    
    mongoose.connect('mongodb://127.0.0.1:27017/sample', { useNewUrlParser: true });
    mongoose.connection.on('open', function() {
        console.info('Conenct to mongo!');
    });
    mongoose.connection.on('error', function (err:any) {
        console.error(err);
    });
})