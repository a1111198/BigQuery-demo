// Imports the Google Cloud client library
const {BigQuery} = require('@google-cloud/bigquery');

async function createDataset(name) {
  // Creates a client
  const bigqueryClient = new BigQuery();

  // Create the dataset
  const [dataset] = await bigqueryClient.createDataset(name);
  console.log(`Dataset ${dataset.id} created.`);
}
module.exports=createDataset;