import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';



if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
}

// 👇 Type declaration for globalThiss
declare global {
    var mongoose: {
        conn: Mongoose | null;
        promise: Promise<Mongoose> | null;
    };
}

// 👇 Setup global cache
global.mongoose = global.mongoose || { conn: null, promise: null };

export async function connectToDB() {
    if (global.mongoose.conn) return global.mongoose.conn;

    if (!global.mongoose.promise) {
        global.mongoose.promise = mongoose.connect(MONGODB_URI, {
            dbName: 'college-system',
            bufferCommands: false,
        });
    }

    global.mongoose.conn = await global.mongoose.promise;
    return global.mongoose.conn;
}
