---DATABASE setup
1. Execute SQL Script attached for table creation
2. Configure 'dbConfig.js' for your right server
    my default local is:
            const config = {
            user: 'sa',
            password: '1234',
            server: 'LAPTOP-KNMTDBPE',
            database: 'localdb',
            options: {
                trustedConnection: true,
                encrypt: true,
                enableArithAbort: true,
                trustServerCertificate: true
            },
            port: 1433 //found this on SQL Server Configuration Manager > Network Configuration > Protocols > TCP/IP Enabled > IP Adresses > IPAll (bottom) - TCP Port
        };

---Run server
1.  On the terminal node - 
    Install
    $ npm install -g
OR if npm packages are already updated, please proeed at next step
2. Then - $ npm start
3. Should display 
   > nodejsapi@0.0.0 start
   > node ./bin/www
4. Now we can configure the app server side
5. Get your default domain
6. If different, please modify 'app.js' file line 14
     origin: 'http://localhost:8000', 

      