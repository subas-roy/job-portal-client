
const AddJob = () => {

    const handleAddJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData)
        const { min, max, currency, ...newJob } = initialData;
        newJob.salaryRange = { min, max, currency }
        newJob.requirements = newJob.requirements.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')

        fetch('http://localhost:3000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className="card bg-base-100 w-full shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Add new job</h1>
                <fieldset className="fieldset">
                    <form onSubmit={handleAddJob}>
                        <label className="label">Title</label>
                        <input type="title" name="title" className="input w-full" placeholder="title" />
                        <label className="label">Location</label>
                        <input type="text" title="location" className="input w-full" placeholder="location" />
                        <label className="label">Job type</label>
                        <select defaultValue="Full-time" name="type" className="select select-ghost w-full">
                            <option disabled={true}>Pick a job type</option>
                            <option>Full-time</option>
                            <option>Intern</option>
                            <option>Part-time</option>
                        </select>
                        <label className="label">Category</label>
                        <select defaultValue="Engineering" name="category" className="select select-ghost w-full">
                            <option disabled={true}>Pick a job category</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Finance</option>
                            <option>Teaching</option>
                        </select>
                        <label className="label">Application Deadline</label>
                        <input type="text" name="deadline" className="input w-full" placeholder="application deadline" />
                        <label className="label">Salary Range</label>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            <input type="number" name="min" className="input w-full" placeholder="min" />
                            <input type="number" name="max" className="input w-full" placeholder="max" />
                            <select defaultValue="BDT" name="currency" className="select select-ghost w-full">
                                <option disabled={true}>Select currency</option>
                                <option>BDT</option>
                                <option>INR</option>
                                <option>USD</option>
                            </select>
                        </div>
                        <label className="label">Description</label>
                        <textarea className="textarea textarea-ghost w-full" name="description" placeholder="description"></textarea>
                        <label className="label">Company name</label>
                        <input type="text" name="company_name" className="input w-full" placeholder="company name" />
                        <label className="label">Requirements</label>
                        <textarea className="textarea textarea-ghost w-full" name="requirements" placeholder="requirements"></textarea>
                        <label className="label">Responsibilities</label>
                        <textarea className="textarea textarea-ghost w-full" name="responsibilities" placeholder="responsibilities"></textarea>
                        <label className="label">HR Name</label>
                        <input type="text" name="hr_name" className="input w-full" placeholder="hr name" />
                        <label className="label">HR Email</label>
                        <input type="text" name="hr_email" className="input w-full" placeholder="hr email" />
                        <label className="label">Company Logo</label>
                        <input type="url" name="company_logo" className="input w-full" placeholder="company logo" />
                        <button className="btn btn-primary mt-4">Submit</button>
                    </form>
                </fieldset>
            </div>
        </div>
    );
};

export default AddJob;