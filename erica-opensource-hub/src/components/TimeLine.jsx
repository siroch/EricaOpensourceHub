import { useNavigate, useParams } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function TimeLine({ projects }) {
  const navigate = useNavigate();
  const params = useParams();

  const goToMain = (versionId) => {
    navigate(`/post/${params.id}/${versionId}`);
  };

  return (
    <div>
      {projects.map((project) =>
        project.project_id == params.id ? ( // 프로젝트 id로 판별
          project.project_version % 2 === 1 ? (
            // https://github.com/stephane-monnot/react-vertical-timeline
            // 위 깃허브에 설명 존재
            // h1~p까지가 박스에 들어가는 내용물, 버전, 커밋유저 이름, 커밋메세지가 나옴
            <VerticalTimeline key={project.id} lineColor="black">
              <VerticalTimelineElement
                className="vertical-timeline-element--content"
                contentStyle={{
                  background: 'rgb(33, 150, 243)',
                  color: 'black',
                  cursor: 'pointer',
                }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date={project.editdate}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: 'black', cursor: 'pointer' }}
                iconOnClick={() => goToMain(project.project_version)}
                onTimelineElementClick={() => goToMain(project.project_version)}
                position="left"
              >
                <h1 className="vertical-timeline-element-title">
                  {'version:' + project.project_version}
                </h1>
                <h3 className="vertical-timeline-element-subtitle">{project.commit_username}</h3>
                <p>commit message : {project.commit_message}</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          ) : (
            <VerticalTimeline key={project.id} lineColor="black">
              <VerticalTimelineElement
                className="vertical-timeline-element--content"
                contentStyle={{
                  background: 'rgb(33, 150, 243)',
                  color: 'black',
                  cursor: 'pointer',
                }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date={project.editdate}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: 'black', cursor: 'pointer' }}
                iconOnClick={() => goToMain(project.project_version)}
                onTimelineElementClick={() => goToMain(project.project_version)}
                position="right"
              >
                <h1 className="vertical-timeline-element-title">
                  {'version:' + project.project_version}
                </h1>
                <h3 className="vertical-timeline-element-subtitle">{project.commit_username}</h3>
                <p>commit message : {project.commit_message}</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          )
        ) : (
          <></>
        ),
      )}
    </div>
  );
}

export default TimeLine;
