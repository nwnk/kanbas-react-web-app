export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><h4>Assignment Name</h4></label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description" rows={10} cols={40}>
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="assignments">ASSIGNMENTS</option>
              <option value="extracredit">EXTRACREDIT</option>
              <option value="goosechases">GOOSECHASES</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="percentage">Percentage</option>
              <option value="score">Score</option>
              <option value="emoji">Emoji</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="online">Online</option>
              <option value="in-person">In person</option>
              <option value="telepathic">Telepathic</option>
            </select><br/>
            <label>Online Entry Options</label><br/>
            <input type="checkbox" name="online-entry-options" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label><br/>
            <input type="checkbox" name="online-entry-options" id="wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label><br/>
            <input type="checkbox" name="online-entry-options" id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
            <input type="checkbox" name="online-entry-options" id="wd-student-annotations"/>
            <label htmlFor="wd-student-annotations">Student Annotations</label><br/>
            <input type="checkbox" name="online-entry-options" id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">File Uploads</label><br/>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label>Assign</label>
          </td>
          <td>
            <tr>
              <label htmlFor="wd-assign-to">Assign to</label><br/>
              <input id="wd-assign-to" value="Everyone" /><br/>
            </tr>
            <tr>
              <label htmlFor="wd-due-date">Due</label><br/>
              <input id="wd-due-date" type="date" /><br/>
            </tr>
            <tr>
              <td>
                <label htmlFor="wd-available-from">Available from</label><br/>
                <input id="wd-available-from" type="date" /><br/>
              </td>
              <td>
                <label htmlFor="wd-available-until">Until</label><br/>
                <input id="wd-available-until" type="date" /><br/>
              </td>
            </tr>
          </td>
        </tr>
      </table>
      <hr/>
      <table>
        <tr>
          <td align="right">
            <button type="button" id="wd-cancel">Cancel</button>
            <button type="button" id="wd-save">Save</button>
          </td>
        </tr>
      </table>
    </div>
);}
