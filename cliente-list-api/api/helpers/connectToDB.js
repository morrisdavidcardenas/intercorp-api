const Firestore = require('@google-cloud/firestore');

const connectToDB = new Firestore({
    projectId: 'intercorp-262003',
    keyFilename: 'keyfile.json',
});

module.exports = connectToDB;

