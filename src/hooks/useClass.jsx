/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../Pages/providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useClass = () => {
    const {user, loading} = useContext(AuthContext);
    
    const {refetch, data: classes = []} = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/popular?email=${user.email}`)
            return res.json()
        },
       
    })
    return [classes, refetch]
};

export default useClass;