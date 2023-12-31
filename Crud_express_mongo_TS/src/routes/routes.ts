import  express from 'express';
import { homeDetail } from '../controllers/users';
const router = express.Router();

router.get('/home', homeDetail);

router.get('/about', (req, res) => {
    res.json({
        message: "About Page",
    })
})

export {
    router
}