import React, {useState} from "react";
import {loginRequest, registerRequest} from "../services/auth.service.ts";
import {useAuth} from "../context/auth.context.tsx";
import parseErrors from "../helpers/error.parser.ts";
import {useNavigate} from "react-router";

export function useLogin() {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const {setAuthUser} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent, data: { email: string; password: string }) => {
        e.preventDefault();
        setErrors({});

        try {
            const {ok, json} = await loginRequest(data);

            if (!ok) {
                setErrors(parseErrors(json));
                return;
            }

            setAuthUser({
                token: json.token,
                user: json.user,
            });

            navigate('/')
        } catch (err) {
            setErrors({general: "Something went wrong"});
        }
    };

    return {handleSubmit, errors};
}

export function useRegister() {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const navigate = useNavigate();

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

            navigate('/login', {
                state: { message: "Registration successful, please login!" }
            });
        } catch (err) {
            setErrors({general: "Something went wrong"});
        }
    };

    return {handleSubmit, errors};
}