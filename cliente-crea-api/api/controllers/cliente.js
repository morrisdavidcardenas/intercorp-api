const ConnectToDB = require('../helpers/connectToDB');
const Ajv = require('ajv');
const ClienteSchema = require('../schemas/cliente');
const camelCaseToWords = require('../helpers/solo-camel-case-to-words');

//reference to the database collection
const clienteCollection = ConnectToDB.collection('cliente');

exports.cliente_crear_cliente = (req,res,next) => {
    try {
        let data = req.body;
        let ajv = new Ajv({allErrors: true});
        let validate = ajv.compile(ClienteSchema);
        let valid = validate(data);
        if (!valid) throw new Error(ajv.errorsText(validate.errors));
        console.log(data);
        const setNewCliente = clienteCollection.add(data);
        res.status(200).json(setNewCliente);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

