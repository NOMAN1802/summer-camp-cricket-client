import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Pages/providers/AuthProvider";
const useEnroll = () => {
    const {user, loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const {data: isEnroll, isLoading: isEnrollLoading} = useQuery({
        queryKey: ['isEnroll', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isEnroll, isEnrollLoading]
}
export default useEnroll;