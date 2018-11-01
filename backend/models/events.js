import knex from './knex'

const tablename="events"

const getAll = () => {
  return knex(tablename).select()
}

export { getAll }