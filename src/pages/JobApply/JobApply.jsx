import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();
    console.log(id, user);
    const handleApplication = (event) => {
        event.preventDefault();
        const form = event.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        const applicationData = {
            jobId: id,
            applicant_email: user?.email,
            linkedIn,
            github,
            resume,
        };
        // console.log(applicationData);
        fetch('http://localhost:3000/job-applications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(applicationData),
        })
        .then(res => res.json())
        .then(data => {
            alert('Application submitted successfully!');
            console.log(data);
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Apply Job and Good Luck!</h1>
                    <form onSubmit={handleApplication}>
                        <fieldset className="fieldset">
                            <label className="label">LinkedIn URL</label>
                            <input type="url" name="linkedIn" className="input w-full" placeholder="LinkedIn URL" />
                            <label className="label">Github URL</label>
                            <input type="url" name="github" className="input w-full" placeholder="Github URL" />
                            <label className="label">Resume URL</label>
                            <input type="url" name="resume" className="input w-full" placeholder="Resume URL" />
                            <button type="submit" className="btn btn-primary mt-4">Apply</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobApply;