import './MainPage.css';
import styled from 'styled-components';
import SideBar from '../components/SideBar';
import Header from '../components/Header';

function MainPage() {
  const test = [1, 2, 3, 4, 5];
  return (
    <StWrapper>
      <Header />
      <StMainPageWrapper>
        <SideBar />
        <StMainDetail>
          <StMainDetailHeader>
            <span>김한양을 위한 추천 프로젝트</span>
            <div>
              <input id="popular" type="radio" name="sort" value="popular" />
              <label>조회 높은 순 </label>
              <input id="recent " type="radio" name="sort" value="recent" defaultChecked />
              <label>최근순</label>
            </div>
          </StMainDetailHeader>
          <StProjectList>
            {test.map((item) => (
              <StProjectItem>
                <StProjectHeader>
                  <StProjectNumber>1</StProjectNumber>
                  <StProjectTitle>
                    <div>모바일 수집형 RPG의 사용자 분석: "쿠키런:킹덤"을 중심으로</div>
                    <div>{'공학' + ' > ' + '컴퓨터학'}</div>
                  </StProjectTitle>
                </StProjectHeader>
                <div>
                  <StProjectDesc>2022.05.29</StProjectDesc>
                  <StProjectDesc>2018000000 김한양</StProjectDesc>
                  <StProjectPopular>조회수 189회|56명이 서재에 담았어요</StProjectPopular>
                </div>
                <StProjectButton>내 서재 담기</StProjectButton>
              </StProjectItem>
            ))}
            <StProjectPlusItem>+더보기</StProjectPlusItem>
          </StProjectList>
        </StMainDetail>
      </StMainPageWrapper>
    </StWrapper>
  );
}

export default MainPage;

const StWrapper = styled.div`
  width: 100%;
  height: calc(100% - 80px);
`;

const StMainPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const StMainDetail = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`;

const StMainDetailHeader = styled.div`
  width: 100%;
  height: 80px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-weight: bolder;
    font-size: 1.6rem;
  }
`;

const StProjectList = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  row-gap: 40px;
  margin: 20px 0px;
`;

const StProjectItem = styled.div`
  padding: 10px;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 250px;
  min-width: 300px;
`;

const StProjectDesc = styled.div`
  width: 100%;
  font-size: 1.1rem;
  text-align: right;
`;

const StProjectPopular = styled.div`
  width: 100%;
  font-size: 1.1rem;
  text-align: center;
`;

const StProjectButton = styled.button`
  border-radius: 10px;
  background-color: #b4daff;
  border: 1px solid black;
  padding: 5px;
  font-size: 1.1rem;
`;

const StProjectHeader = styled.div`
  width: 100%;
  display: flex;
`;

const StProjectNumber = styled.div`
  width: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const StProjectTitle = styled.div`
  width: calc(100% - 20px);
  font-size: 1.3rem;
  div {
    padding-bottom: 10px;
  }
`;

const StProjectPlusItem = styled.div`
  padding: 10px;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  font-size: 2rem;
  max-height: 250px;
  min-width: 300px;
`;
