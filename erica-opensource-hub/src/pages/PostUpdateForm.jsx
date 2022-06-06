import "./PostUpdateForm.css"
import ProjectData from "../json/project_item_test.json"
import UserData from "../json/user_item_test.json"
import { useNavigate } from "react-router-dom";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function PostUpdateForm() {
  const navigate = useNavigate();

  const goToMain = (id) => { // 네비게이터
    navigate("/post/:"+String(id));
  };
  return (
    <div class="test">
        {ProjectData.project.map((project_data) => ( // 프로젝트 데이터를 사용
          project_data.project_id === 26 // 프로젝트 id로 판별
          ? project_data.project_version % 2 === 1
            ?
              // https://github.com/stephane-monnot/react-vertical-timeline
              // 위 깃허브에 설명 존재
              // h1~p까지가 박스에 들어가는 내용물, 버전, 커밋유저 이름, 커밋메세지가 나옴
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--content"
                  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', cursor: 'pointer' }}
                  contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                  date={project_data.editdate}
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', cursor: 'pointer' }}
                  iconOnClick={()=>goToMain(project_data.project_version)}
                  onTimelineElementClick={()=>goToMain(project_data.project_version)}
                  position="left">
                  <h1 className="vertical-timeline-element-title">{"version:" + project_data.project_version}</h1>
                  <h3 className="vertical-timeline-element-subtitle">{UserData.user.map((u)=>(u.id === project_data.commit_user ? u.name : null))}</h3>
                  <p>
                    commit message : {project_data.commit_message}
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            :
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--content"
                  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', cursor: 'pointer' }}
                  contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                  date={project_data.editdate}
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', cursor: 'pointer' }}
                  iconOnClick={()=>goToMain(project_data.project_version)}
                  onTimelineElementClick={()=>goToMain(project_data.project_version)}
                  position="right">
                  <h1 className="vertical-timeline-element-title">{"version:" + project_data.project_version}</h1>
                  <h3 className="vertical-timeline-element-subtitle">{UserData.user.map((u)=>(u.id === project_data.commit_user ? u.name : null))}</h3>
                  <p>
                    commit message : {project_data.commit_message}
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
          : <></>
        ))}
    </div>
  );
}

export default PostUpdateForm;