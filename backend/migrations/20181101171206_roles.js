exports.up = function(knex, Promise) {
    return knex.schema.createTable("roles", t => {
      t.unique("role_id");
      t.string("role_title");
      t.string("role_description");
      t.timestamps();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("roles");
  };
  