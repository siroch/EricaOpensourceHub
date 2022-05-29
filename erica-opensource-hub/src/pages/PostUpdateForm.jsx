import "./PostUpdateForm.css"
import ProjectData from "../json/project_item_test.json"

function UpdateLog({data}){ // 핀 형태로 변경 예정, 클릭시 project id와 version을 넘겨줌, 호버시 커밋메세지,커밋한유저 정보 뜸
  return (
  <button>
    {[data.owner, data.title, data.project_version]}
  </button>
  );
}

function PostUpdateForm() {
  return (
    <div>
      <ul>
        {ProjectData.project.map((project_data) => (
          project_data.project_id === 1 // 프로젝트 id로 판별
          ? <UpdateLog data={project_data} key={project_data.owner}/> 
          : <></>
        ))}
      </ul>
    </div>
  );
}

export default PostUpdateForm;