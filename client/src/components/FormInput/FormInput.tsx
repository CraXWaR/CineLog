import React from "react";
import styles from "./FormInput.module.css";

type FormInputProps = {
    label: string;
    prefix?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    placeholder?: string;
    id: string;
    name: string;
    variant?: "login" | "register";
};

export default function FormInput({
                                      label,
                                      prefix,
                                      value,
                                      onChange,
                                      type = "text",
                                      placeholder,
                                      id,
                                      name,
                                      variant
                                  }: FormInputProps) {
    const prefixClass = variant === "register" ? styles.labelPrefixPink : styles.labelPrefixCyan;

    return (
        <div className={styles.field}>
            <label className={styles.label} htmlFor={id}>
                <span className={prefixClass}>{prefix} /</span> {label}
            </label>
            <input
                id={id}
                name={name}
                type={type}
                className={styles.input}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}