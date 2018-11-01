import { baseURL } from "../config";
import cors from "cors";
import express from "express";

const router = express.Router();

/* GET home page. */
router.get("/", cors(), async (req, res, next) => {
  //functions to return the data
  res.json({
    status: 200,
    response: { success: true, message: "Cool! the API is running!" }
  });
});

module.exports = router;
