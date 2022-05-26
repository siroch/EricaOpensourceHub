import "./MainPage.css"
import ProjectData from "./project_item_test.json"

function MainPage() {
  const project_list = ProjectData.project.map((project_data) => {
    return JSON.stringify(project_data)
  })

  const course_list = ProjectData.course.map((course_data) => {
    return JSON.stringify(course_data)
  })
  return (
    <div>
      <div>
        EOH
      </div><div>
        {course_list}
      </div>
      <div>
        {project_list}
      </div>
      <button>글쓰기</button>
    </div>
  );
}

export default MainPage;
