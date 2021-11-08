const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, path.join(__dirname, "../uploads"))
    },
    filename: function (req, file, callback) {
      const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      callback(null, uniquePrefix + '-' +  file.originalname);
    },
  });

  function fileFilter (req, file, callback) {

    // The function should call `callback` with a boolean
    // to indicate if the file should be accepted
  
    // To reject this file pass `true`, like so:
    if(file.mimetype === "image/png" || "image/jpeg") {
        callback(null, true)
    }
    else {
         // To accept the file pass ,false`, like so:
        callback(null, false)
    }

  }



  module.exports = multer({
      storage: storage,
      limits: {
          fileSize: 1024 * 1024 *5,  // 5 MB
      },
      fileFilter: fileFilter,
  });