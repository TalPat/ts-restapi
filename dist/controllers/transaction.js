"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbFunctions = require("../db");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
//get /transaction #returns all transactions
exports.transactions = (req, res) => {
    dbFunctions.queryRet("SELECT * FROM transactions", (result) => {
        if (result.length == 0) {
            res.sendStatus(404);
        }
        else
            res.json(result);
    });
};
//get /transaction/{1} #returns transaction with id 1
exports.getTransaction = (req, res) => {
    dbFunctions.queryRet(`SELECT * FROM transactions WHERE transactionid = '${req.params.id}'`, (result) => {
        if (result.length == 0) {
            res.sendStatus(404);
        }
        else
            res.json(result);
    });
};
//post /transaction #adds new transaction to table
exports.addTransaction = (req, res) => {
    jwt.verify(req.token, "secret", (err, authData) => {
        if (err) {
            console.log(err);
            res.sendStatus(403);
        }
        else {
            const schema = Joi.object().keys({
                value: Joi.number().required(),
                sourceid: Joi.number().required(),
                destid: Joi.number().required()
            });
            const result = Joi.validate(req.body, schema);
            console.log(result);
            if (result.error) {
                res.sendStatus(400);
            }
            else {
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
            }
        }
    });
};
//delete /transaction/{1} #removes transaction with id 1
exports.delTransaction = (req, res) => {
    dbFunctions.queryRet(`SELECT * FROM transactions WHERE transactionid = '${req.params.id}'`, (result) => {
        if (result.length == 0) {
            res.sendStatus(404);
        }
        else {
            dbFunctions.queryNoRet(`DELETE FROM transactions where transactionid = '${req.params.id}'`);
            res.send(`transaction id: ${req.params.id} deleted`);
        }
    });
};
//put /transaction/{1} #updates transaction with id 1
exports.updateTransaction = (req, res) => {
    const schema = Joi.object().keys({
        value: Joi.number(),
        sourceid: Joi.number(),
        destid: Joi.number()
    });
    const result = Joi.validate(req.body, schema);
    if (result.error) {
        res.sendStatus(400);
    }
    else {
        let str = "";
        for (var k in req.body) {
            str += `${k}='${req.body[k]}',`;
        }
        if (str.length > 0)
            str = str.slice(0, -1);
        dbFunctions.queryNoRet(`UPDATE transactions SET ${str} WHERE transactionid = '${req.params.id}'`);
        dbFunctions.queryRet(`SELECT * FROM transactions WHERE transactionid = '${req.params.id}'`, (result) => {
            if (result.length == 0) {
                console.log(404);
                res.status(404);
                res.send("invalid id requested");
            }
            else
                res.json(result);
        });
    }
};
