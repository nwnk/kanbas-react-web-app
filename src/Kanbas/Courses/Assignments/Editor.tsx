export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><h4>Assignment Name</h4></label>
      <input id="wd-name" className="form-control" value="A1 - ENV + HTML" /><br /><br />
      <textarea className="form-control" id="wd-description" rows={10} cols={60}>
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <div>
        <div className="wd-grid-row">
          <div className="wd-grid-col-third-page">
            <label htmlFor="wd-points" className="jx-float-right p-2">Points</label>
          </div>
          <div className="wd-grid-col-two-thirds-page">
            <input id="wd-points" className="form-control" value={100} />
          </div>
        </div>
        <div className="wd-grid-row">
          <div className="wd-grid-col-third-page wd-float-left">
            <label htmlFor="wd-group" className="jx-float-right p-2">Assignment Group</label>
          </div>
          <div className="wd-grid-col-two-thirds-page">
            <select className="form-control" id="wd-group">
              <option value="assignments">ASSIGNMENTS</option>
              <option value="extracredit">EXTRACREDIT</option>
              <option value="goosechases">GOOSECHASES</option>
            </select>
          </div>
        </div>
        <div className="wd-grid-row">
          <div className="wd-grid-col-third-page">
            <label htmlFor="wd-display-grade-as" className="jx-float-right p-2">Display Grade as</label>
          </div>
          <div className="wd-grid-col-third-page">
            <select className="form-control" id="wd-display-grade-as">
              <option value="percentage">Percentage</option>
              <option value="score">Score</option>
              <option value="emoji">Emoji</option>
            </select>
          </div>
        </div>
        <div className="wd-grid-row">
          <div className="wd-grid-col-third-page">
            <label htmlFor="wd-submission-type" className="jx-float-right p-2">Submission Type</label>
          </div>
          <div className="wd-grid-col-two-thirds-page">
            <select className="form-control" id="wd-submission-type">
              <option value="online">Online</option>
              <option value="in-person">In person</option>
              <option value="telepathic">Telepathic</option>
            </select><br/>
            <label className="form-check-label">Online Entry Options</label><br/>
            <input className="form-check-input" type="checkbox" name="online-entry-options" id="wd-text-entry"/>
            <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label><br/>
            <input className="form-check-input" type="checkbox" name="online-entry-options" id="wd-website-url"/>
            <label className="form-check-label" htmlFor="wd-website-url">Website URL</label><br/>
            <input className="form-check-input" type="checkbox" name="online-entry-options" id="wd-media-recordings"/>
            <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label><br/>
            <input className="form-check-input" type="checkbox" name="online-entry-options" id="wd-student-annotations"/>
            <label className="form-check-label" htmlFor="wd-student-annotations">Student Annotations</label><br/>
            <input className="form-check-input" type="checkbox" name="online-entry-options" id="wd-file-upload"/>
            <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label><br/>
          </div>
        </div>
        <div className="wd-grid-row">
          <div className="wd-grid-col-third-page">
            <label className="">Assign</label>
          </div>
          <td>
            <div className="wd-grid-row">
              <label htmlFor="wd-assign-to">Assign to</label><br/>
              <input className="form-control" id="wd-assign-to" value="Everyone" /><br/>
            </div>
            <div className="wd-grid-row">
              <label htmlFor="wd-due-date">Due</label><br/>
              <input className="form-control" id="wd-due-date" type="date" /><br/>
            </div>
            <div className="wd-grid-row">
              <div className="wd-grid-col-third-page">
                <label htmlFor="wd-available-from">Available from</label><br/>
                <input className="form-control" id="wd-available-from" type="date" /><br/>
              </div>
              <div className="wd-grid-col-third-page">
                <label htmlFor="wd-available-until">Until</label><br/>
                <input className="form-control" id="wd-available-until" type="date" /><br/>
              </div>
            </div>
          </td>
        </div>
      </div>
      <hr/>
      <div>
        <div className="wd-grid-row">
          <td align="right">
            <button type="button" id="wd-cancel">Cancel</button>
            <button type="button" id="wd-save">Save</button>
          </td>
        </div>
      </div>
    </div>
);}
