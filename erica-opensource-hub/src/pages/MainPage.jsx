import "./MainPage.css"
import ProjectData from "../json/project_item_test.json"
import CourseData from "../json/course_item_test.json"

function MainPage() {
  return (
    <div>
      <div>
        EOH
      </div>
      <button>글쓰기</button>
      <button>로그인</button>
      <button>문의</button>
      <ul>
        {CourseData.course.map((course_data) => (
          <button key={course_data.id}>
            {course_data.college}, 
            {course_data.department}
          </button>
        ))}
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
