import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "OK",
  });
});

app.get("/hello", (req: Request, res: Response) => {
  res.json({
    message: "Hello world",
  });
});

app.listen(PORT, () => {
  console.log(`App started on PORT ${PORT}`);
});
