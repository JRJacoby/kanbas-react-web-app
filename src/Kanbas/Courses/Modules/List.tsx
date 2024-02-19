import { useState } from "react";
import "./index.css";
import { FaGripVertical, FaCheckCircle, FaPlus, FaEllipsisV } from "react-icons/fa";
import { modules } from "../../Database";
import { useParams } from "react-router";
import { IoMdArrowDropright } from "react-icons/io";
function ModuleList() {
    const { courseId } = useParams();
    const courseModules = modules.filter(module => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(courseModules[0]);

    return (
        <div className="flex-grow-1">
            <div className="jj-home-header-buttons">
                <button className="jj-grey-btn">Collapse All</button>
                <button className="jj-grey-btn">View Progress</button>
                <select className="jj-grey-btn">
                    <option><i className="fa-solid fa-check"></i>Publish All</option>
                </select>
                <button className="jj-red-btn">+ Module</button>
                <button className="jj-grey-btn"><FaEllipsisV /></button>
            </div>
            <hr />
            <ul className="list-group wd-modules">
                {courseModules.map(module => {
                    return (
                        <li className="list-group-item" onClick={() => setSelectedModule(module)}>
                            <div className="jj-list-item-inner">
                                <FaGripVertical className="jj-list-grip"/><IoMdArrowDropright />{module.name}
                                <span className="float-end">
                                    <span className="jj-check-dropdown">
                                        <FaCheckCircle className="text-success" />
                                        <IoMdArrowDropright />
                                    </span>
                                    <FaPlus className="jj-list-plus" />
                                    <FaEllipsisV />
                                </span>
                            </div>
                            {selectedModule._id === module._id && (
                                <ul className="list-group">
                                    {module.lessons.map(lesson => {
                                        return (
                                            <li className="list-group-item">
                                                <FaGripVertical className="jj-list-grip"/>{lesson.name}
                                                <span className="float-end">
                                                    <FaCheckCircle className="text-success" />
                                                    <FaEllipsisV />
                                                </span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            )}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default ModuleList;