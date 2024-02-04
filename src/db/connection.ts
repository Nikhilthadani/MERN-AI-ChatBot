import { connect, disconnect } from "mongoose";

async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error)
        throw new Error("Could Not Connect to MongoDB")
    }
}

async function disconnectFromDatabase() {
    try {
        await disconnect();
    } catch (error) {
        console.log(error)
        throw new Error("Could Not disconnect from MongoDB")
    }
}

export { connectToDatabase, disconnectFromDatabase }