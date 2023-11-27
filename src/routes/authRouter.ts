import express from "express";
import authController from "../controllers/authController";
import { body } from "express-validator";
import { validate } from "../middleware/validatorMiddleware";

const router = express.Router();

const loginValidator =[
    body('user').exists().isString().isLength({min: 3, max: 255}),
    body('password').exists().isString().isLength({min: 8, max: 255})
]

router.post('/', loginValidator, validate, authController.login);

export default router;
