const clienteSchema = {
    "title": "Cliente",
    "type": "object",
    "properties": {
        "nombre": { "type": "string" },
        "apellido": { "type": "string" },
        "edad": { "type": "string" },
        "fechaNacimiento": { "type": "string" }                        
    },
    "required": [ "nombre", "apellido", "edad", "fechaNacimiento" ],
    "additionalProperties": false
};

module.exports = clienteSchema;