/*
* @Author: Narnia
* @Date:   2017-12-09 01:31:05
* @Last Modified by:   Narnia
* @Last Modified time: 2017-12-19 03:10:48
*/
import { baseURL } from "../config";
import cors from "cors";
import express from "express";
import { getAll, signUp } from "../models/user";

const router = express.Router();

/* GET home page. */
router.get("/", cors(), async (req, res, next) => {
  //functions to return the data
  const users = await getAll();
  res.json({ status: 200, response: { success: true, users } });
});

router.post("/signup", cors(), async (req, res, next) => {
  //functions to return the data
  const result = await signUp(req);
  res.json(result);
});

module.exports = router;
