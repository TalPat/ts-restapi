import { Request, Response } from "express";

//get /transaction #returns all transactions
export let transactions = (req: Request, res: Response) => {
    res.send("all transactions listed");
}

//get /transaction/{1} #returns transaction with id 1
export let getTransaction = (req: Request, res: Response) => {
    res.send(`transaction id ${req.params.id} requested`);
}

//put /transaction #adds new transaction to table
export let addTransaction = (req : Request, res: Response) => {
    res.send(`${req.body} added to database`);
}

//delete /transaction/{1} #removes transaction with id 1
export let delTransaction = (req : Request, res: Response) => {
    res.send(`transaction id ${req.params.id} deleted`);
}

//post /transaction/{1} #updates transaction with id 1
export let updateTransaction = (req : Request, res: Response) => {
    res.send(`transaction id ${req.params.id} updated with ${req.body}`);
}