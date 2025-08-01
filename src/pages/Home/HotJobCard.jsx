import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
    const {_id, title, company, company_logo, requirements, description, location, salaryRange } = job;
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="flex gap-2 m-2">
                <figure>
                    <img
                        className="w-16"
                        src={company_logo}
                        alt="companies" />
                </figure>
                <div>
                    <h4 className="text-3xl">{company}</h4>
                    <p className="flex gap-1 items-center"><FaMapMarkerAlt />{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}
                    <div className="badge badge-secondary">New</div>
                </h2>
                <p>{description}</p>
                <div className="flex flex-wrap gap-2">
                    {
                        requirements.map((skill, index )=> <p key={index} className="border rounded-lg px-2 text-center hover:text-purple-600 hover:bg-white">{skill}</p>)
                    }
                </div>
                <div className="card-actions justify-end items-center">
                    <p className="flex items-center">Salary: <FaDollarSign />{salaryRange.min} - {salaryRange.max}</p>
                    <Link to={`jobs/${job._id}`}>
                        <button className="btn btn-primary">Apply</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;