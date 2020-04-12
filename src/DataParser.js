import {CSVReader, readRemoteFile} from 'react-papaparse';
var csvFilePath = require("../resources/data/Ball_by_Ball.csv");
var Papa = require("papaparse/papaparse.js");

class DataParser{
    constructor(){
        //let fileUrl = "http://localhost:3000/resources.data/Ball_by_Ball.csv";
        Papa.parse(csvFilePath, {
            header: true
        })
        
    }
}