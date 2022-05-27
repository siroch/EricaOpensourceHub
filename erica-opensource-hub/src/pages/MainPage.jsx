import "./MainPage.css"
import ProjectData from "./project_item_test.json"
import CourseData from "./course_item_test.json"

function MainPage() {
  const project_list = ProjectData.project.map((project_data) => {
    return JSON.stringify(project_data)
  })

  const course_list = CourseData.course.map((course_data) => {
    return JSON.stringify(course_data)
  })
  return (
    <div>
      <div>
        EOH
      </div>
      <button>글쓰기</button>
      <button>로그인</button>
      <ul>
        {CourseData.course.map((course_data) => {
          <li key={course_data.id}>
            {[course_data.college, course_data.department
            ]}
          </li>
        })}
      </ul>
      <ul>
        {ProjectData.project.map((project_data) => (
          <li key={project_data.project_id}>
            {[project_data.title, project_data.createdate, project_data.like, project_data.view, 
              project_data.team_proposal, project_data.course, project_data.hashtag
            ]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainPage;
