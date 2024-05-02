const csvToJson = require("convert-csv-to-json")

const fileInputName = "coordinates.csv"
const fileOutputName = "coordinates.json"

csvToJson
  .fieldDelimiter(",")
  .generateJsonFileFromCsv(fileInputName, fileOutputName)
