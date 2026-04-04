import {z} from "zod";

//TODO ADD REGEX WHEN APP DONE
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

export const UserValidationSchema = z.object({
    username: z.string().min(4, "Username must be at least 4 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(3, "Password must be at least 3 characters"),
    // .regex(
    //     passwordRegex,
    //     "Password must be at least 8 characters, include 1 uppercase, 1 lowercase, 1 number, and 1 special character"
    // ),
    confirmPassword: z
        .string()
        .min(1, "Password doesn't match"),
});