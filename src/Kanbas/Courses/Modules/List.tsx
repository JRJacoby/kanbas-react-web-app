import { useState } from "react";
import "./index.css";
import { FaGripVertical, FaCheckCircle, FaPlus, FaEllipsisV } from "react-icons/fa";
import db from "../../Database";
import { useParams } from "react-router";
import { IoMdArrowDropright } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setNewModule
} from "./reducer";
import { KanbasState } from "../../store";

type Lesson = {
    _id: string;
    name: string;
    description: string;
    module: string;
}

type Module = {
    _id: string;
    name: string;
    description: string;
    course: string;
    lessons: Lesson[];
}

function ModuleList() {
    const { courseId } = useParams();
    const courseModules = useSelector((state: KanbasState) => state.modulesReducer.modules)
    const [selectedModule, setSelectedModule] = useState(courseModules[0]);
    const newModule = useSelector((state: KanbasState) => state.modulesReducer.newModule);
    const dispatch = useDispatch();
    // TODO: In the example, the new module form should be in a list item, but that's making CSS difficult. I'm going to leave it as a separate form for now.
    return (
        <div className="flex-grow-1">
            <div className="jj-home-header-buttons">
                <button className="jj-grey-btn">Collapse All</button>
                <button className="jj-grey-btn">View Progress</button>
                <select className="jj-grey-btn">
                    <option>✓ Publish All</option>
                </select>
                <button className="jj-red-btn">+ Module</button>
                <button className="jj-grey-btn"><FaEllipsisV /></button>
            </div>
            <hr />
            <form>
                <button className="jj-red-btn" onClick={() => { dispatch(addModule({ ...newModule, course: courseId })) }}>Add</button>
                <button className="jj-grey-btn" onClick={() => { dispatch(updateModule(newModule)) }}>Update</button>
                <div className="form-group">
                    <label htmlFor="new-module-name">New Module Name</label>
                    <input id="new-module-name" className="form-control" value={newModule.name} onChange={(e) => dispatch(setNewModule({ ...newModule, name: e.target.value }))} />
                </div>
                <div className="form-group">
                    <label htmlFor="new-module-description">New Module Description</label>
                    <textarea id="new-module-description" className="form-control" value={newModule.description} onChange={(e) => dispatch(setNewModule({ ...newModule, description: e.target.value }))} />
                </div>
            </form>
            <ul className="list-group wd-modules">
                {courseModules
                    .filter(module => module.course === courseId)
                    .map(module => {
                        return (
                            <li key={module._id} className="list-group-item" onClick={() => setSelectedModule(module)}>
                                <div className="jj-list-item-inner">
                                    <FaGripVertical className="jj-list-grip" /><IoMdArrowDropright />{module.name}
                                    <span className="float-end">
                                        <button className="jj-grey-btn jj-edit-module-btn" onClick={(e) => { dispatch(setNewModule(module)) }}>Edit</button>
                                        <button className="jj-red-btn jj-delete-module-btn" onClick={(e) => dispatch(deleteModule(module._id))}>Delete</button>
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
                                        {module.lessons.map((lesson: Lesson) => {
                                            return (
                                                <li key={lesson._id} className="list-group-item">
                                                    <FaGripVertical className="jj-list-grip" />{lesson.name}
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