import {useAuth} from "../context/auth.context.tsx";
import {Navigate, Outlet} from "react-router";
import Loading from "./UI/Loading/Loading.tsx";

export default function Protected() {
    const {isLoggedIn, loading} = useAuth();

    if (loading) return <Loading text={'Loading user...'} />

    if (!isLoggedIn) return (<Navigate to='/login'/>);

    return (<Outlet />);
}