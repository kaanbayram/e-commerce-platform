import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true
        } as any);

        console.log(`mongodb connected: ${(conn as any).connection.host}`);
    } catch (error) {
        process.exit(1);
    }
}

export default connectDB;