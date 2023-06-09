// /* eslint-disable no-unused-vars */
// import React from 'react';
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
// import { useContext } from "react";
// import { AuthContext } from "../Pages/providers/AuthProvider";
// const useInstructor = () => {
//     const {user, loading} = useContext(AuthContext)
//     const [axiosSecure] = useAxiosSecure();
//     const {data: isInstructor, isLoading: isAdminLoading} = useQuery({
//         queryKey: ['isInstructor', user?.email],
//         enabled: !loading,
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
//             return res.data.admin;
//         }
//     })
//     return [isInstructor, isInstructor]
// };

// export default useInstructor;