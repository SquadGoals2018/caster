import knex from './knex'

const tablename="events"

const getAll = () => {
  return knex(tablename).select()
}

const getOne = (event_id) => {
  return knex(tablename).select().where('event_id', event_id)
}

const getWhere = (conditions) => {
  return knex(tablename).select().where(conditions)
}



export { getAll }