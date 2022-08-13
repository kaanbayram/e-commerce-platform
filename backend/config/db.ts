import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        } as any);

        console.log(colors.cyan.underline(`mongodb connected: ${(conn as any).connection.host}`));
    } catch (error) {
        console.log(colors.red.underline.bold(`Error: ${error.message}`));
        process.exit(1);
    }
}

export default connectDB;