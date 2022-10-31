const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://postgres@localhost:5432/pg_listen';

const client = new pg.Client(connectionString);
client.connect();

client.on('notification', function(msg) {
  console.log(msg);
});
var query = client.query("LISTEN watchers");
