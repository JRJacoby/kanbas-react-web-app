import "./index.css";
import { useParams } from "react-router-dom";
import db from "../../../Kanbas/Database";
function Grades() {
    const { courseId } = useParams();
    const as = db.assignments.filter(a => a.course === courseId);
    const es = db.enrollments.filter(e => e.course === courseId);

    return (
        <div>
            <div className="d-flex justify-content-end mb-3">
                <button className="jj-grey-btn"><i className="fa-solid fa-file-import"></i> Import</button>
                <button className="jj-grey-btn"><i className="fa-solid fa-file-export"></i> Export <i
                    className="fa-solid fa-chevron-down"></i></button>
                <button className="jj-grey-btn"><i className="fa-solid fa-gear"></i></button>
            </div>
            <div className="d-flex mb-3">
                <div className="w-50">
                    <label htmlFor="search-students" className="form-label"><b>Student Names</b></label>
                    <div className="input-group" id="search-students">
                        <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
                        <input type="text" className="form-control" placeholder="Search Students"></input>
                        <span className="input-group-text"><i className="fa-solid fa-chevron-down"></i></span>
                    </div>
                </div>
                <div className="w-50">
                    <label htmlFor="search-assignments" className="form-label"><b>Assignments Names</b></label>
                    <div className="input-group">
                        <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
                        <input type="text" className="form-control" placeholder="Search Assignments"></input>
                        <span className="input-group-text"><i className="fa-solid fa-chevron-down"></i></span>
                    </div>
                </div>
            </div>
            <div className="mb-3"><button className="jj-grey-btn"><i className="fa-solid fa-filter"></i> Apply Filters</button>
            </div>
            <div className="mb-3">
                <table className="table table-bordered text-center table-striped">
                    <thead>
                        <tr>
                            <th className="text-start"><b>Student Name</b></th>
                            {
                                as.map(a => {
                                    return (
                                        <th>{a.title}<br></br>Out of 100</th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            es.map(e => {
                                return (
                                    <tr>
                                        <td className="text-start">{db.users.find(u => u._id === e.user)?.firstName} {db.users.find(u => u._id === e.user)?.lastName}</td>
                                        {
                                            as.map(a => {
                                                return (
                                                    <td>{db.grades.find(g => g.assignment === a._id && g.student === e.user)?.grade}</td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Grades;