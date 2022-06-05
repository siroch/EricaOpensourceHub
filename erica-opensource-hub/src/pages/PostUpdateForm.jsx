// import "./PostUpdateForm.css"
// import ProjectData from "../json/project_item_test.json"
// import { useNavigate } from "react-router-dom";
// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';

// function PostUpdateForm() {
//   const navigate = useNavigate();

//   const goToMain = (id) => {
//     navigate("/post/:"+String(id));
//   };
//   return (
//     <div class="test">
//         {ProjectData.project.map((project_data) => (
//           project_data.project_id === 1 // 프로젝트 id로 판별
//           ? project_data.project_version % 2 === 1
//             ?
//               <VerticalTimeline>
//                 <VerticalTimelineElement
//                   className="vertical-timeline-element--content"
//                   contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', cursor: 'pointer' }}
//                   contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
//                   date={project_data.editdate}
//                   iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', cursor: 'pointer' }}
//                   iconOnClick={()=>goToMain(project_data.project_version)}
//                   onTimelineElementClick={()=>goToMain(project_data.project_version)}
//                   position="left">
//                   <h1 className="vertical-timeline-element-title">{"version:" + project_data.project_version}</h1>
//                   <h3 className="vertical-timeline-element-subtitle">{project_data.commit_user}</h3>
//                   <p>
//                     commit message :<br/> {project_data.commit_message}
//                   </p>
//                 </VerticalTimelineElement>
//               </VerticalTimeline>
//             :
//               <VerticalTimeline>
//                 <VerticalTimelineElement
//                   className="vertical-timeline-element--content"
//                   contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', cursor: 'pointer' }}
//                   contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
//                   date={project_data.editdate}
//                   iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', cursor: 'pointer' }}
//                   iconOnClick={()=>goToMain(project_data.project_version)}
//                   onTimelineElementClick={()=>goToMain(project_data.project_version)}
//                   position="right">
//                   <h1 className="vertical-timeline-element-title">{"version:" + project_data.project_version}</h1>
//                   <h3 className="vertical-timeline-element-subtitle">{project_data.commit_user}</h3>
//                   <p>
//                     commit message :<br/> {project_data.commit_message}
//                   </p>
//                 </VerticalTimelineElement>
//               </VerticalTimeline>
//           : <></>
//         ))}
//     </div>
//   );
// }

// export default PostUpdateForm;
