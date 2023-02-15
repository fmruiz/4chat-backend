import mongoose from 'mongoose';

export default () => {
    const connect = () => {
        mongoose.set('strictQuery', false);
        mongoose
            .connect(
                `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0.iqj6agr.mongodb.net/?retryWrites=true&w=majority`
            )
            .then(() => {
                console.log('Success DB');
            })
            .catch((error) => {
                console.log(`Error connecting to database ${error}`);
                return process.exit(1);
            });
    };
    connect();

    mongoose.connection.on('disconnected', connect);
};
