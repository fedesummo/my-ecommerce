import mongoose from "../db/config";

const usersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    }
})

const usersModel = mongoose.model("users", usersSchema)

export default usersModel;