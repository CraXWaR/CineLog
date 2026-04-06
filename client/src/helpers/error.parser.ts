export default function parseErrors(json: any): Record<string, string> {
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