import "./PostUpdateForm.css"
import ProjectData from "../json/project_item_test.json"

function PostUpdateForm() {
  return (
    <div>
      <ul>
        {ProjectData.project.map((project_data) => (
          project_data.project_id === 1 // 프로젝트 id로 판별
          ? <div class="help-tip">
              <p>edit date: {project_data.editdate}<br />
              user id: {project_data.owner}<br />
              commit message: {project_data.commit_message}<br />
              project_version: {project_data.project_version}</p>
            </div>
          : <></>
        ))}
      </ul>
    </div>
  );
}

export default PostUpdateForm;