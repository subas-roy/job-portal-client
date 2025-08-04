import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyApplications = () => {
    const { user } = useAuth();
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/job-applications?email=${user.email}`)
            .then(response => response.json())
            .then(data => setApplications(data));
    }, [user.email]);

    const handleDeleteApplication = (id) => {
        fetch(`http://localhost:3000/job-applications/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(() => {
                setApplications(applications.filter(application => application._id !== id));
            });
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Requirements</th>
                        <th>Job Type</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        applications.map(application => <tr key={application._id}>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={application.company_logo}
                                                alt="Company logo" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{application.company}</div>
                                        <div className="text-sm opacity-50">{application.location}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {
                                    application.requirements.map((skill, index) => (
                                        <span key={index} className="badge">{skill}</span>
                                    ))
                                }
                                <br />
                                <span className="badge badge-ghost badge-sm">{application.title}</span>
                            </td>
                            <td>{application.jobType}</td>
                            <th>
                                <button onClick={() => handleDeleteApplication(application._id)} className="btn btn-ghost btn-xs">X</button>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyApplications;