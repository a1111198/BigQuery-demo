const {BigQuery} = require('@google-cloud/bigquery');

async function loadLocalFile(datasetId, 
tableId,
filename) {
    // Imports a local file into a table.
    const bigquery = new BigQuery();

    const [job] = await bigquery
      .dataset(datasetId)
      .table(tableId)
      .load(filename);

    console.log(`Job ${job.id} completed.`);

    // Check the job's status for errors
    const errors = job.status.errors;
    if (errors && errors.length > 0) {
      throw errors;
    }
  }
  module.exports=loadLocalFile;