let csvToJson = require("convert-csv-to-json");

let fileInputName = "coordinates.csv";
let fileOutputName = "coordinates.json";

csvToJson
  .fieldDelimiter(",")
  .generateJsonFileFromCsv(fileInputName, fileOutputName);
