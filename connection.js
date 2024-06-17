var mysql = require('mysql');
var these = require('mr.s-these');

const db = (QueryString) => {
    return new Promise((resolve, reject) => {
        var QS = QueryString;

        var connection = mysql.createConnection({
            host: '',
            user: '',
            password: '',
            database: '',
            charset: 'utf8mb4',
        });

        connection.connect();
		
        try {
            connection.query(`${QS}`, function (error, results, fields) {
                if(error){
                    reject(error);
                } else{
                    if (results.length == 1) {
                        results = results[0];
                        results.length = 1
                        resolve(results);
                    } else {
                        resolve(results);
                    }
                }
            });
        } catch(e) {
            these.log('e', e);
            reject(false);
        }

        connection.end();
    });
};


module.exports = {
    db
};