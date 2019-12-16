const ConnectToDB = require('../helpers/connectToDB');
const Ajv = require('ajv');
const ClienteSchema = require('../schemas/cliente');
const camelCaseToWords = require('../helpers/solo-camel-case-to-words');

//reference to the database collection
const clienteCollection = ConnectToDB.collection('cliente');

exports.cliente_kpi_cliente = (req,res,next) => {
    let clienteList = [];
    clienteCollection.get()
    .then(snapshot => {
        snapshot.forEach((doc) => {
            let id = doc.id;
            let element = doc.data();
            element.id = id;
            clienteList.push(element);
        });
        //Edad Promedio Cliente
        let sum = 0;
        clienteList.forEach(element => {
            sum += element.edad;
        });
        let avg = sum/clienteList.length;
        //Desvacion Standar

        //New Object
        let result = {
            promedio: avg,
            desviacionStandar: 0
        };
        res.status(200).json(result);
    })
    .catch(error => {
        res.status(500).json({
            error: error.message
        });
    });
}

