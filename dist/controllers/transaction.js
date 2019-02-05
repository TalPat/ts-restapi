"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbFunctions = require("../db");
//get /transaction #returns all transactions
exports.transactions = (req, res) => {
    let result = dbFunctions.queryRet("SELECT * FROM transactions");
    res.send(result);
};
//get /transaction/{1} #returns transaction with id 1
exports.getTransaction = (req, res) => {
    let result = dbFunctions.queryRet(`SELECT * FROM transactions where transactionid = '${req.params.id}'`);
    res.send(result);
};
//post /transaction #adds new transaction to table
exports.addTransaction = (req, res) => {
    let keys = "";
    let vals = "";
    for (var k in req.body) {
        keys += `${k},`;
        vals += `'${req.body[k]}',`;
    }
    if (keys.length > 0)
        keys = keys.slice(0, -1);
    if (vals.length > 0)
        vals = vals.slice(0, -1);
    dbFunctions.queryNoRet(`INSERT INTO transactions (${keys}) VALUES (${vals})`);
    res.send(JSON.stringify(req.body));
};
//delete /transaction/{1} #removes transaction with id 1
exports.delTransaction = (req, res) => {
    dbFunctions.queryNoRet(`DELETE FROM transactions where transactionid = '${req.params.id}'`);
};
//put /transaction/{1} #updates transaction with id 1
exports.updateTransaction = (req, res) => {
    let keys = "";
    let str = "";
    for (var k in req.body) {
        str += `${k}='${req.body[k]}',`;
    }
    if (str.length > 0)
        str = str.slice(0, -1);
    console.log(str);
    dbFunctions.queryNoRet(`UPDATE transactions SET ${str} WHERE transactionid = '${req.params.id}'`);
    dbFunctions.queryRet(`SELECT * FROM transactions WHERE transactionid = '${req.params.id}'`);
    console.log(dbFunctions.returnedRes);
    res.send(dbFunctions.returnedRes);
};
