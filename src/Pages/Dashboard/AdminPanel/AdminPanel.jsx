/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../providers/AuthProvider';

const AdminPanel = () => {
    const {use} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats');
            return res.data;
        }
    })
    return (
      
        <div>
            <div className="stats stats-vertical lg:stats-horizontal shadow bg-stone-400 opacity-50 text-white mb-28">

                <div className="stat ">
                    <div className="stat-title text-white">Revenue</div>
                    <div className="stat-value text-white">${stats.revenue}</div>
                    <div className="stat-desc text-white">↗︎May 1st - Jun 1s</div>
                </div>

                <div className="stat">
                    <div className="stat-title text-white">New Users</div>
                    <div className="stat-value text-white">{stats.users}</div>
                    <div className="stat-desc text-white">↗︎  200 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-title text-white">Classes</div>
                    <div className="stat-value text-white">{stats.classes}</div>
                    <div className="stat-desc text-white">↗︎58</div>
                </div>

                <div className="stat">
                    <div className="stat-title text-white">Orders</div>
                    <div className="stat-value text-white">{stats.orders}</div>
                    <div className="stat-desc text-white">↗︎120</div>
                </div>

            </div>
        </div>
    );
};

export default AdminPanel;