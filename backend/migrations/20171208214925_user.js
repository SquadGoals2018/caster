exports.up = function(knex, Promise) {
  return knex.schema.createTable("user", t => {
    t.increments("user_id");
    t.string("email");
    t.string("first_name");
    t.string("last_name");
    t.string("password");
    t.boolean("is_verified");
    t.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("user");
};
