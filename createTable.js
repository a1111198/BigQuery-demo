const {BigQuery} = require('@google-cloud/bigquery');
async function createTable(tableId) {

    const datasetId = "dataSet";
    const schema ='id:integer, email:string, first:string, last:string, company:string, created_at:string, country:string ';

    const options = {
      schema: schema,
      location: 'US',
    };
    const bigquery = new BigQuery();
    // Create a new table in the dataset
    const [table] = await bigquery
      .dataset(datasetId)
      .createTable(tableId, options);

    console.log(`Table ${table.id} created.`);
  }

module.exports=createTable;