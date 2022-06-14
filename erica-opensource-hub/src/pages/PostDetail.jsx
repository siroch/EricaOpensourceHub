import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import PostHome from '../components/PostHome';
import SideBar from '../components/SideBar';
import TimeLine from '../components/TimeLine';

function PostDetail() {
  const [isRecruit, setIsRecruit] = useState(false);
  const [postId, setPostId] = useState(1);

  return (
    <StWrapper>
      <Header />
      <StPostDetailWrapper>
        <SideBar />
        <StPostDetail>
          <StProjectTitle>
            <span>
              {isRecruit && <strong>[구인] </strong>}허리 회전에 어려움을 겪는 환자들을 위한 회전
              병상
            </span>
            <span>Rotating beds for patients with back rotation difficulties</span>
          </StProjectTitle>
          <StProjectWriter>
            <StProfileImg
              src="https://avatars.githubusercontent.com/u/42725903?s=40&v=4"
              alt="writer"
            />
            <span>2021학년도 기계공학과 캡스톤 디자인 팀</span>
          </StProjectWriter>
          <StTabsWrapper>
            <Tabs>
              <Tab>
                <Link to={`/post/${postId}`}>홈</Link>
              </Tab>
              <Tab>
                <Link to={`/post/${postId}/timeline`}>타임라인</Link>
              </Tab>
              <Tab>
                <Link to={`/post/${postId}/constructor`}>개설자/팀원</Link>
              </Tab>
            </Tabs>
          </StTabsWrapper>
          <Routes>
            <Route
              path="/*"
              element={
                <StMindMap>
                  <PostHome />
                </StMindMap>
              }
            />
            <Route
              path="/timeline"
              element={
                <StMindMap>
                  <TimeLine />
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
  padding: 10px 0px;
`;

const StTabsWrapper = styled.div`
  width: 95%;
`;

const StProjectTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  padding: 15px 0px;
  border-bottom: 1px solid lightgrey;
  span:first-child {
    font-size: 1.8rem;
    padding-bottom: 5px;
  }
  span:last-child {
    font-size: 1.3rem;
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
