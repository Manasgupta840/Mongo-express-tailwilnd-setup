import express, { Request, Response } from 'express';
import  {router} from "./routes/routes";
import { connects } from './config/db';
const app = express();
const PORT = 3001;

app.get('/', (req: Request, resp: Response) => {
    
    resp.json({ data: "hello world" });
});

connects();


app.use('/api',router)

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
});
