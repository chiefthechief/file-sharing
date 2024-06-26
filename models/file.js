const mongoose = require("mongoose")

const file = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    originalName: {
        type: String,
        required: true
    },
    password: String,
    downloadCount: {
        type: Number,
        requied: true,
        default: 0
    }
})

module.exports = mongoose.model("File", file)