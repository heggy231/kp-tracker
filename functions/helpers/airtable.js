// TODO: create Airtable configuration

const Airtable = require('airtable');
const base = new Airtable({apikey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID);
const table = base(process.env.AIRTABLE_TABLE_NAME);
module.exports = { table };