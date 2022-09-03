import express from 'express';

const app = express();
const PORT = 3000;
import csv from 'csvtojson'
import ObjectsToCsv from 'objects-to-csv'
import bodyParser from 'body-parser'

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
// const ObjectsToCsv = require('objects-to-csv');


let csvPath = './ngos_data.csv'

app.get('/', async (req, res) => {
    let data = await convert()
    res.send(data);
});

async function convert() {
    let donaorDataFromCsv = await csv().fromFile(`${csvPath}`)
    return donaorDataFromCsv
}

app.post('/saveData',async (req,res) => {
    console.log('body' ,req.body)
    let body = req.body
    jsontocsv(body)
})

async function jsontocsv(data) {
    let data1 = await convert()
    const mergedArray = [...data1, ...data]
    console.log('Merged Array: ', mergedArray)

    const csv = new ObjectsToCsv(mergedArray);

    // Save to file:
    await csv.toDisk('./ngos_data.csv');

    // Return the CSV file as string:
    console.log(await csv.toString());


}

app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);
}
);