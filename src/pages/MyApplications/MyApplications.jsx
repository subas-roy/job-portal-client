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

    return (
        <div>
            <h2 className='text-3xl'>My Applications {applications.length}</h2>
        </div>
    );
};

export default MyApplications;