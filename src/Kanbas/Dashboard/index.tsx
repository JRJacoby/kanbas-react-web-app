import { Link } from "react-router-dom";
import { courses } from "../Database"
import "./index.css"

function Dashboard() {
    return (
        <div className="p-4">
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses ({courses.length})</h2>
            <hr />
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map(course => (
                        <div key={course._id} className="col jj-card-col">
                            <div className="card">
                                <img src={course.image} className="card-img-top" />
                                <div className="card-body">
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}>{course.number}</Link>
                                    <p className="card-text">{course.name}</p>
                                    <Link className="btn btn-primary" to={`/Kanbas/Courses/${course._id}/Home`}> Go </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Dashboard;
