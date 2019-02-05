import * as express from "express";
import * as wallet from "./controllers/wallet";
import * as transaction from "./controllers/transaction"; 
import * as bodyParser from "body-parser";
import * as dbController from "./controllers/dbController";

const app = express();
app.set("port", 3000);
app.use(bodyParser.json());

app.get("/transactions", transaction.transactions);
app.get("/transaction/:id", transaction.getTransaction);
app.post("/transaction", transaction.addTransaction);
app.delete("/transaction/:id", transaction.delTransaction);
app.put("/transaction/:id", transaction.updateTransaction);

app.get("/wallets", wallet.wallets);
app.get("/wallet/:id", wallet.getWallet);
app.post("/wallet", wallet.addWallet);
app.delete("/wallet/:id", wallet.delWallet);
app.put("/wallet/:id", wallet.updateWallet);

app.get("/initialise", dbController.initialise);
app.get("/drop", dbController.drop);

app.listen(app.get("port"), () => {
    console.log("server running on port %d", app.get("port"));
});