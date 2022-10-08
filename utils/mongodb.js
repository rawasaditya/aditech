import mongoose from 'mongoose';
const connectMongoDB = async () => mongoose.connect(process.env.MONGO_URL);
export default connectMongoDB;