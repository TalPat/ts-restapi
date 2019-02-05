import * as express from "express";
import * as wallet from "./controllers/wallet";
import * as transaction from "./controllers/transaction"; 
import * as bodyParser from "body-parser";

const app = express();
app.set("port", 3000);
app.use(bodyParser.json());

app.get("/transactions", transaction.transactions);
app.get("/transaction/:id", transaction.getTransaction);
app.put("/transaction", transaction.addTransaction);
app.delete("/transaction/:id", transaction.delTransaction);
app.post("/transaction/:id", transaction.updateTransaction);

app.get("/wallets", wallet.wallets);
app.get("/wallet/:id", wallet.getWallet);
app.put("/wallet", wallet.addWallet);
app.delete("/wallet/:id", wallet.delWallet);
app.post("/wallet/:id", wallet.updateWallet);

app.listen(app.get("port"), () => {
    console.log("server running on port %d", app.get("port"));
});