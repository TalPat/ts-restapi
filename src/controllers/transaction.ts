import { Request, Response } from "express";
import * as dbFunctions from "../db";

//get /transaction #returns all transactions
export let transactions = (req: Request, res: Response) => {
    let result = dbFunctions.queryRet("SELECT * FROM transactions");
    res.send(result);
}

//get /transaction/{1} #returns transaction with id 1
export let getTransaction = (req: Request, res: Response) => {
    let result = dbFunctions.queryRet(`SELECT * FROM transactions where transactionid = '${req.params.id}'`);
    res.send(result);
}

//post /transaction #adds new transaction to table
export let addTransaction = (req : Request, res: Response) => {
    let keys: string = "";
    let vals: string = "";
    for (var k in req.body) {
        keys += `${k},`;
        vals += `'${req.body[k]}',`
    }
    if (keys.length > 0) keys = keys.slice(0, -1);
    if (vals.length > 0) vals = vals.slice(0, -1);
    dbFunctions.queryNoRet(`INSERT INTO transactions (${keys}) VALUES (${vals})`);
    res.send(JSON.stringify(req.body));
}

//delete /transaction/{1} #removes transaction with id 1
export let delTransaction = (req : Request, res: Response) => {
    dbFunctions.queryNoRet(`DELETE FROM transactions where transactionid = '${req.params.id}'`);
}

//put /transaction/{1} #updates transaction with id 1
export let updateTransaction = (req : Request, res: Response) => {let keys: string = "";
    let str: string = "";
    for (var k in req.body) {
        str += `${k}='${req.body[k]}',`;
    }
    if (str.length > 0) str = str.slice(0, -1);
    console.log(str);
    dbFunctions.queryNoRet(`UPDATE transactions SET ${str} WHERE transactionid = '${req.params.id}'`);
    dbFunctions.queryRet(`SELECT * FROM transactions WHERE transactionid = '${req.params.id}'`);
    console.log(dbFunctions.returnedRes);
    res.send(dbFunctions.returnedRes);
}
