/* eslint-disable no-unused-vars */
import React from 'react';

const AdminPanel = () => {
    return (
        <div>
            <div className="stats stats-vertical lg:stats-horizontal shadow">

                <div className="stat">
                    <div className="stat-title">Admin</div>
                    <div className="stat-value">Noman</div>
                    <div className="stat-desc">↗︎If you are an admin go to Admin Panel</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Instructor</div>
                    <div className="stat-value">Shakib</div>
                    <div className="stat-desc">↗︎ If you are an Instructor go to InstructorPanel</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Student</div>
                    <div className="stat-value">All other</div>
                    <div className="stat-desc">↗︎If you are a student go to student portal</div>
                </div>

            </div>
        </div>
    );
};

export default AdminPanel;