const ConnectToDB = require('../helpers/connectToDB');
const Ajv = require('ajv');
const ClienteSchema = require('../schemas/cliente');
const camelCaseToWords = require('../helpers/solo-camel-case-to-words');

//reference to the database collection
const clienteCollection = ConnectToDB.collection('cliente');

exports.cliente_lista_cliente = (req,res,next) => {
    let clienteList = [];
    clienteCollection.get()
    .then(snapshot => {
        snapshot.forEach((doc) => {
            let id = doc.id;
            let element = doc.data();
            element.id = id;
            element.fechaProbableMuerte = "12/12/2099";
            clienteList.push(element);
        });
        res.status(200).json(clienteList);
    })
    .catch(error => {
        res.status(500).json({
            error: error.message
        });
    });
}

