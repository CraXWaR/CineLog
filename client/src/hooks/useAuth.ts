import {useState} from "react";
import {loginRequest, registerRequest} from "../services/auth.service.ts";

function parseErrors(json: any): Record<string, string> {
    if (json.errors) {
        const errorMap: Record<string, string> = {};
        json.errors.forEach((err: { field: string; message: string }) => {
            errorMap[err.field] = err.message;
        });
        return errorMap;
    }

    if (json.message?.includes("Unique constraint")) {
        return {email: "This email is already registered"};
    }

    return {general: json.message || "Something went wrong"};
}

export function useLogin() {
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = async (e: React.FormEvent, data: { email: string; password: string }) => {
        e.preventDefault();
        setErrors({});

        try {
            const {ok, json} = await loginRequest(data);

            if (!ok) {
                setErrors(parseErrors(json));
                return;
            }

            console.log(json);
        } catch (err) {
            setErrors({general: "Something went wrong"});
        }
    };

    return {handleSubmit, errors};
}

export function useRegister() {
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = async (e: React.FormEvent, data: {
        username: string;
        email: string;
        password: string;
        confirmPassword: string
    }) => {
        e.preventDefault();
        setErrors({});

        try {
            const {ok, json} = await registerRequest(data);

            if (!ok) {
                setErrors(parseErrors(json));
                return;
            }

            console.log(json);
        } catch (err) {
            setErrors({general: "Something went wrong"});
        }
    };

    return {handleSubmit, errors};
}