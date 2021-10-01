const createDataSet=require('./createDataSet.js');
const createTable=require('./createTable.js');
const loadLocalFile=require('./loadData.js');
//createDataSet("dataSet");
//createTable("customersNew");
loadLocalFile("dataSet", "customers", "./customers.csv")