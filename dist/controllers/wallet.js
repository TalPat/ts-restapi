"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//get /wallet #returns all wallets
exports.wallets = (req, res) => {
    res.send("all wallets listed");
};
//get /wallet/{1} #returns wallet with id 1
exports.getWallet = (req, res) => {
    res.send(`wallet id ${req.params.id} requested`);
};
//put /wallet #adds new wallet to table
exports.addWallet = (req, res) => {
    res.send(req.body);
};
//delete /wallet/{1} #removes wallet with id 1
exports.delWallet = (req, res) => {
    res.send(`wallet id ${req.params.id} deleted`);
};
//post /wallet/{1} #updates wallet with id 1
exports.updateWallet = (req, res) => {
    res.send(`wallet id ${req.params.id} updated with ${req.body}`);
};
