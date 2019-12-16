function camelCaseToWords(str) {
    return str.match(/^[a-z]+|[A-Z][a-z$]*/g).map(x => x[0].toUpperCase() + x.substr(1).toLowerCase()).join(' ');
  }
  
  module.exports = camelCaseToWords;