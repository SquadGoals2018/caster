/*
* @Author: Narnia
* @Date:   2017-12-09 01:31:05
* @Last Modified by:   Narnia
* @Last Modified time: 2017-12-19 03:10:48
*/
import { baseURL } from "../config";
import cors from "cors";
import express from "express";
import { getAll } from "../models/user";

const router = express.Router();

/* GET home page. */
router.get("/", cors(), async (req, res, next) => {
  //functions to return the data
  const users = await getAll();
  res.json({ status: 200, response: { success: true, users } });
});

router.get("/:user_id", cors(), async(req, res, next) => {
  const user = await getOne(req.params.user_id)
  res.json({ status: 200, response: { success: true, user } });
})

module.exports = router;
