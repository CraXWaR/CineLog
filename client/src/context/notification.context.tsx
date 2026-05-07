import React, {createContext, useContext} from "react";
import {useNotifications} from "../hooks/useNotifications.ts";

const NotificationsContext = createContext<ReturnType<typeof useNotifications> | null>(null);

export const NotificationsProvider = ({children}: {children: React.ReactNode}) => {
    const value = useNotifications();
    return (
        <NotificationsContext.Provider value={value}>
            {children}
        </NotificationsContext.Provider>
    );
};

export const useNotificationsContext = () => {
    const ctx = useContext(NotificationsContext);
    if (!ctx) throw new Error("useNotificationsContext must be used within NotificationsProvider");
    return ctx;
};