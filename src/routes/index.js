const express = require('express')
const router  = express.Router();

const homeController = require("../controllers/homeController")
const uploadController = require("../controllers/uploadController")

let routes = app => {
    router.get("/",homeController.getHome);
    router.post("/upload",uploadController.uploadFiles);
    router.get("/files",uploadController.GetListImages);
    return app.use("/",router)
}

module.exports = routes