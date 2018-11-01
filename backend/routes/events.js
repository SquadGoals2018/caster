import { baseURL } from "../config";
import cors from "cors";
import express from "express";
import { getAll } from "../models/events";

const router = express.Router();

/* GET home page. */
router.get("/", cors(), async (req, res, next) => {
  //functions to return the data
  const events = await getAll();
  res.json({ status: 200, response: { success: true, events } });
});

module.exports = router;