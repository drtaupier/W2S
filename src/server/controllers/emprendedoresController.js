const { response } = require('express');
path = require('path');

const emprendedores = (req, res = response) => {
  res.sendFile(path.resolve('./dist/emprendedores.html'));
};

module.exports = {
  emprendedores,
};
