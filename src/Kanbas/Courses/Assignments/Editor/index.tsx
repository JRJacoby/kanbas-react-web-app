import "./index.css";
import { useParams, useNavigate, Link } from "react-router-dom";
import { assignments } from "../../../Database";
function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = assignments.find(assignment => assignment._id === assignmentId);
    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        navigate(`/Kanbas/Courses/${courseId}/Assignments`)
    }

    return (
        <div className="w-75 jj-assignments-edit-main-content">
            <div className="header d-flex align-content-center justify-content-end">
                <i className="fa fa-check-circle text-success"></i>
                <p>Published</p>
                <button className="jj-grey-btn"><i className="fa-solid fa-ellipsis-vertical"></i></button>
            </div>
            <hr />
            <form className="container">
                <div className="mb-3">
                    <label htmlFor="assignment-name" className="form-label">Assignment Name</label>
                    <input name="assignment-name" value={assignment?.title} id="assignment-name" className=" mb-3 form-control"></input>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                    <div className="mb-3 form-check">
                        <label htmlFor="notify-checkbox" className="form-label">Notify users that this content has
                            changed</label>
                        <input type="checkbox" className="form-check-input" id="notify-checkbox"
                            name="final-grade-checkbox"></input>
                    </div>
                    <div>
                        <button className="jj-grey-btn">Cancel</button>
                        <button type="submit" className="jj-red-btn" onClick={handleSave}>
                            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>Save</Link>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default AssignmentEditor;