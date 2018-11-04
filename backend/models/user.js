/*
* @Author: Narnia
* @Date:   2017-12-09 01:05:05
* @Last Modified by:   Narnia
* @Last Modified time: 2017-12-19 03:09:00
*/
import knex from './knex'

const table = "user"

const getAll = () => {
  return knex(table).select()
}

const getOne = (user_id) => {
  return knex(table).select().where('user_id',user_id)
}

const getWhere = (conditions) => {
  return knex(table).select().where(conditions)
}

const insert = (data) => {
  return knex(table).insert(data).returning('user_id')
}



export { getAll }