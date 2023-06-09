/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../Pages/providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useClass = () => {
    const {user, loading} = useContext(AuthContext);
    
    const { data: classes = [], refetch} = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/selectedClasses?email=${user.email}`)
            return res.json()
        },
       
    })
    return [classes, refetch]
};

export default useClass;