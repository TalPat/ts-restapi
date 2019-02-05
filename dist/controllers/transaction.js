"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//get /transaction #returns all transactions
exports.transactions = (req, res) => {
    res.send("all transactions listed");
};
//get /transaction/{1} #returns transaction with id 1
exports.getTransaction = (req, res) => {
    res.send(`transaction id ${req.params.id} requested`);
};
//put /transaction #adds new transaction to table
exports.addTransaction = (req, res) => {
    res.send(`${req.body} added to database`);
};
//delete /transaction/{1} #removes transaction with id 1
exports.delTransaction = (req, res) => {
    res.send(`transaction id ${req.params.id} deleted`);
};
//post /transaction/{1} #updates transaction with id 1
exports.updateTransaction = (req, res) => {
    res.send(`transaction id ${req.params.id} updated with ${req.body}`);
};
