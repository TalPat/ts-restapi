import { Request, Response } from "express";
import * as dbFunctions from "../db";

//get /wallet #returns all wallets
export let wallets = (req: Request, res: Response) => {
    res.send("all wallets listed");
}

//get /wallet/{1} #returns wallet with id 1
export let getWallet = (req: Request, res: Response) => {
    res.send(`wallet id ${req.params.id} requested`);
}

//post /wallet #adds new wallet to table
export let addWallet = (req : Request, res: Response) => {
    res.send(req.body);
}

//delete /wallet/{1} #removes wallet with id 1
export let delWallet = (req : Request, res: Response) => {
    res.send(`wallet id ${req.params.id} deleted`);
}

//put /wallet/{1} #updates wallet with id 1
export let updateWallet = (req : Request, res: Response) => {
    res.send(`wallet id ${req.params.id} updated with ${req.body}`);
}