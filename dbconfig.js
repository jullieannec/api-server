	
const config = {
    user: 'sa', //please configure
    password: '1234', //please configure
    server: 'LAPTOP-KNMTDBPE', //please configure
    database: 'localdb', //please configure
    options: {
      trustedConnection: true,
      encrypt: true,
      enableArithAbort: true,
      trustServerCertificate: true
    },
    port: 1433 //please configure
  };
   
  module.exports = config;
  