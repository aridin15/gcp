import express, { Request, Response } from "express";
// import * as express from "express"
const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("simple-hello");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});