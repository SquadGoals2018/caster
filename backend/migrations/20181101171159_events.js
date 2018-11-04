exports.up = function(knex, Promise) {
  return knex.schema.createTable("events", t => {
    t.unique("event_id");
    t.string("event_venue");
    t.string("event_activities"); // activity ids
    t.string("event_venue_name");
    t.string("event_date_range");
    t.string("event_members"); // list of user_ids
    t.string("event_capacity");
    t.string("event_is_private");
    t.string("event_share_link");
    t.string("event_creator");
    t.string("event_mods"); // list of user_ids mods
    t.string("event_date_created");
    t.string("event_modified_by");
    t.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("events");
};
