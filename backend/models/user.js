/*
* @Author: Narnia
* @Date:   2017-12-09 01:05:05
* @Last Modified by:   Narnia
* @Last Modified time: 2017-12-19 03:09:00
*/
import knex from './knex'
var crypto = require('crypto');

const getAll = () => {
  return knex('user').select()
}

const signUp = async (req) => {
  // Hash the password
  req.assert('first_name', 'Name cannot be blank').notEmpty();
  req.assert('last_name', 'Name cannot be blank').notEmpty();
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('email', 'Email cannot be blank').notEmpty();
  req.assert('password', 'Password must be at least 6 characters long').len(6);
  req.sanitize('email').normalizeEmail({ remove_dots: false });
  var errors = req.validationErrors();
  if(errors){
    return { status: 400, response: { success: false, errors } }
  }
  var ifExists = await knex('user').select().where('email', req.body.email);
  if(ifExists.length > 0){
    return { status: 400, response: { success: false, message: "Email is already being used" } }
  }else{
    var token = crypto.randomBytes(16).toString('hex'); //Find a better way
    var token_expire = new Date();
    token_expire.setDate(token_expire.getDate() + 1);
    var data = Object.assign(req.body, {token}, {token_expire});
    console.log(data);
    var success = knex.insert(data).into("user").return({inserted: true});
    return { status: 200, response: { success: true, message: "Success" } }
  }
}

export { getAll, signUp }