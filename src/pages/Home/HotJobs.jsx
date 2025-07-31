import { useEffect, useState } from "react";
import HotJobsCard from "./HotJobCard";

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        // Fetch hot jobs from an API or a static file
        fetch('http://localhost:3000/jobs')
            .then(response => response.json())
            .then(data => {
                setJobs(data);
            })
    }, []);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {
                    jobs.map(job => <HotJobsCard key={job.id} job={job} />)
                }
            </div>

        </div>
    );
};

export default HotJobs;