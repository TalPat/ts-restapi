import * as mysql from "mysql";

export let returnedRes: JSON;

let connectServer = (mysql.createConnection({
        host		: 'localhost',
		user		: 'root',
		password	: 'password'
    }));

let connectDb = (mysql.createConnection({
        host		: 'localhost',
        user		: 'root',
        password	: 'password',
        database    : 'my_db'
    }))

export let queryRet = (sqlQuery: string) => {
    connectDb.query(sqlQuery, (err, result) => {
            if (err) throw err;
            console.log(result);
            returnedRes = result;
        });
}

export let queryNoRet = (sqlQuery: string) => {
    connectDb.query(sqlQuery, (err) => {
        if (err) throw err;
    });
}

export let serverDB = (sqlQuery: string) => {
    connectServer.query(sqlQuery, (err) => {
        if (err) throw err;
    });
}