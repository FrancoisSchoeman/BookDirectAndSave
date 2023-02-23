import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { getUserData } from "./pages/api/userApi";

// This is a custom hook that uses useSession and useQuery to get the user data and return it
export const useUserData = () => {
    const { data: session, status } = useSession();
    const accessToken = session?.user?.token;

    const { data: userData, isLoading, error } = useQuery(["user-data", accessToken], getUserData, { enabled: !!accessToken });

    return { userData, isLoading, error, session, status };
}