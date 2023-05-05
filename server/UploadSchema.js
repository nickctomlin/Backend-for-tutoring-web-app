const mongoose = require("mongoose");

const UploadSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true,
  }
});

const Upload = mongoose.model("upload", UploadSchema);
module.exports = Upload



