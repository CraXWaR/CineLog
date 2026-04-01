import type {Request, Response} from "express";
import {UserService} from "../services/user.service.js";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    register = async (req: Request, res: Response): Promise<Response> => {
        try {
            const data = req.body;

            //TODO ADD VALIDATION
            const {confirmPassword, ...userToRegister} = data
            const user = await this.userService.register(userToRegister);
            const {password, ...safeUser} = user;

            return res.status(201).json({
                message: "User registered",
                user: safeUser,
            })
        } catch (error: any) {
            return res.status(400).json({
                message: error.message,
            })
        }
    };

    login = async (req: Request, res: Response) => {
        try {
            //TODO ADD VALIDATION
            const user = await this.userService.login(req.body);
            const {password, ...safeUser} = user;
            return res.status(201).json({
                message: "User login",
                user: safeUser,
            })
        } catch (error: any) {
            return res.status(400).json({
                message: error.message,
            })
        }
    };
}