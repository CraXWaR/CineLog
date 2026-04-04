import type {Request, Response} from "express";
import {UserService} from "../services/user.service.js";
import {UserValidationSchema} from "../validators/user.validator.js";
import {ZodError} from "zod";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    register = async (req: Request, res: Response): Promise<Response> => {
        try {
            const validatedData = UserValidationSchema.safeParse(req.body);
            if (!validatedData.success) {
                const formatted = validatedData.error.issues.map((issue) => ({
                    field: issue.path[0],
                    message: issue.message,
                }));
                return res.status(400).json({errors: formatted});
            }

            const {confirmPassword, ...userToRegister} = validatedData.data
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