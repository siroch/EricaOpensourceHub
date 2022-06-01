import "./PostUpdateForm.css"
import ProjectData from "../json/project_item_test.json"
import { useNavigate } from "react-router-dom";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function PostUpdateForm() {
  const navigate = useNavigate();

  const goToMain = (id) => {
    navigate("/post/:"+String(id));
  };
  return (
    <div class="test">
      <ul>
        {ProjectData.project.map((project_data) => (
          project_data.project_id === 1 // 프로젝트 id로 판별
          ? 
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: '45vh', left:'25vh', cursor: 'pointer' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', cursor: 'pointer' }}
              icon={""}
              iconOnClick={()=>goToMain(project_data.project_version)}
              onTimelineElementClick={()=>goToMain(project_data.project_version)}>
              <h3 className="vertical-timeline-element-title">{project_data.commit_message}</h3>
              <h4 className="vertical-timeline-element-subtitle">{project_data.commit_user}</h4>
              <p>
                version: {project_data.project_version} <br/>
                edit_date: {project_data.editdate}
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
          : <></>
        ))}
      </ul>
    </div>
  );
}

export default PostUpdateForm;