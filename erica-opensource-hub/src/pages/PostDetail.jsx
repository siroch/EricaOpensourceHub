import { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getProject, getTimeLineProjects } from '../api';
import Header from '../components/Header';
import PostHome from '../components/PostHome';
import SideBar from '../components/SideBar';
import TimeLine from '../components/TimeLine';

function PostDetail() {
  const navigate = useNavigate();
  const params = useParams();

  const [project, setProject] = useState({});
  const [projects, setProjects] = useState([]);

  const getProjectInfo = async () => {
    const response = await getProject(params.id);
    response && setProject(response);
  };

  const getProjectsInfo = async () => {
    const response = await getTimeLineProjects();
    response && setProjects(response);
  };

  const goToForm = () => {
    navigate(`/post/${project.id}/update`);
  };

  useEffect(() => {
    getProjectInfo();
    getProjectsInfo();
  }, []);

  return (
    <StWrapper>
      <Header />
      <StPostDetailWrapper>
        <SideBar />
        <StPostDetail>
          <StProjectTitle>
            <span>
              {project.team_proposal && <strong>[구인] </strong>}
              {project.title}
            </span>
            <div>
              <StProjectButton onClick={goToForm}>수정하기</StProjectButton>
              {project.team_proposal && <StProjectButton>참여하기</StProjectButton>}
            </div>
          </StProjectTitle>
          <StProjectWriter>
            <span>{project.owner_name}</span>
          </StProjectWriter>
          <StTabsWrapper>
            <Tabs>
              <Tab>
                <Link to={`/post/${project.id}`}>홈</Link>
              </Tab>
              <Tab>
                <Link to={`/post/${project.id}/timeline`}>타임라인</Link>
              </Tab>
              <Tab>
                <Link to={`/post/${project.id}/constructor`}>개설자/팀원</Link>
              </Tab>
            </Tabs>
          </StTabsWrapper>
          <Routes>
            <Route
              path="/*"
              element={
                <StMindMap>
                  {project.project_data && <PostHome projectData={project.project_data} />}
                </StMindMap>
              }
            />
            <Route
              path="/timeline"
              element={
                <StMindMap>
                  <TimeLine projects={projects} />
                </StMindMap>
              }
            />
            <Route path="/constructor" element={<StMindMap>개설자/팀원 입니다.</StMindMap>} />
          </Routes>
        </StPostDetail>
      </StPostDetailWrapper>
    </StWrapper>
  );
}

export default PostDetail;

const StWrapper = styled.div`
  width: 100%;
  height: calc(100% - 80px);
`;

const StPostDetailWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const StProjectWriter = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  gap: 5px;
  padding-bottom: 20px;
  span {
    font-size: 1.2rem;
  }
`;

const StTabsWrapper = styled.div`
  width: 95%;
`;

const StProjectButton = styled.button`
  border-radius: 10px;
  background-color: #0f3871;
  color: white;
  padding: 10px;
  font-size: 1.1rem;
  margin: 2px;
`;

const StProjectTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  padding-top: 15px;
  span:first-child {
    font-size: 1.8rem;
  }
`;

const StPostDetail = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 70%;
`;

const StMindMap = styled.div`
  width: 95%;
  height: 70%;
  border: 1px solid lightgrey;
  overflow: auto;
`;

const Tabs = styled.div`
  width: 300px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
`;

const Tab = styled.span`
  text-align: center;
  text-transform: uppercase;
  background-color: #0f3871;
  padding: 4px 6px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  a {
    color: white;
    padding: 7px 0px;
    display: block;
    text-decoration: none;
    font-size: 0.9rem;
  }
`;
