exports.up = function(knex, Promise) {
  return knex.schema.createTable("user", t => {
    t.increments("user_id");
    t.string("email").unique();
    t.string("first_name");
    t.string("last_name");
    t.string("password");
    t.boolean("is_verified").defaultTo(false);
    t.string("token").unique();
    t.datetime("token_expire");
    t.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("user");
};
