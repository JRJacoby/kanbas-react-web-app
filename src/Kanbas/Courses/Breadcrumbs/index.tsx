import { FaBars } from 'react-icons/fa';
import { useLocation } from 'react-router';
import "./index.css";
import db from "../../Database";
import { Link } from 'react-router-dom';

// TODO: For long IDs like the auto-generated dates for the new courses, the breadcrumb just collapses to '..'. See if there's a way to avoid this.
function Breadcrumbs() {
    const { pathname } = useLocation();
    const courseID = pathname.split("/")[3];
    const pageNames = pathname.split("/").slice(4);
    const course = db.courses.find(course => course._id === courseID);

    return (
        <div className="jj-assignments-breadcrumbs-bar align-items-center">
            <FaBars className="jj-breadcrumbs-bar-icon"/>
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link className="jj-breadcrumb-link" to={`/Kanbas/Courses/${courseID}/Home`}>
                            {course?.number}.{course?._id}.{course?.startDate}
                        </Link>
                    </li>
                    {pageNames.slice(0, -1).map((pageName, index) => (
                        <li key={index} className="breadcrumb-item">
                            <Link className="jj-breadcrumb-link" to={`/Kanbas/Courses/${courseID}/${pageName}`}>
                                {pageName}
                            </Link>
                        </li>
                    ))}
                    <li className="breadcrumb-item">{pageNames.slice(-1)}</li>
                </ol>
            </nav>
            <button className="float-end jj-grey-btn ms-auto"><i className="fa-solid fa-glasses"></i> Student View</button>
        </div>
    )
}

export default Breadcrumbs;
