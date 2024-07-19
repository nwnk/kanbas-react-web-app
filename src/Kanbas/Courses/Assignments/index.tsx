import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";

function AssignmentItem({title = "",
                        description = "",
                        from = "",
                        to = "",
                        points=0
}) {
  return (
        <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/1">
            {title}
          </a>
          <br />
          {description} |
          <b>Not available until</b> {from} |
          <b>Due</b> {to} |
          {points} pts
        </li>
  );
}

export default function Assignments() {
  return (
    <div id="wd-assignments">

      {/*<AssignmentControls />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 1
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>
      */}

      {/*
      <input id="wd-search-assignment"
             placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      */}
      <ul id="wd-assignments" className="list-group rounded-0">
        <AssignmentItem
          title="A1 - ENV + HTML"
          description="Multiple modules"
          from="May 6 at 12:00 am"
          to="May 13 at 11:59 pm"
          points={100}
          />
        <AssignmentItem
          title="A2 - CSS + BOOTSTRAP"
          description="Multiple modules"
          from="May 13 at 12:00 am"
          to="May 20 at 11:59 pm"
          points={100}
          />
        <AssignmentItem
          title="A3 - JAVASCRIPT + REACT"
          description="Multiple modules"
          from="May 20 at 12:00 am"
          to="May 27 at 11:59 pm"
          points={100}
          />
      </ul>
    </div>
);}
