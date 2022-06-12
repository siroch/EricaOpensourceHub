import './PostForm.css';
import { useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

function Title() {
  // 위에 제목이랑 전공 select box
  return (
    <div className="StDetailHeader">
      <div className="StTitle">
        <input
          className="text"
          type="text"
          name="title"
          placeholder="  프로젝트 제목을 입력해주세요"
        ></input>
        <h2>구인중</h2>
        <input classsName="checkbox" type="checkbox" name="getTeam" value="getTeam" checked></input>
      </div>
      <div className="StSelectbox">
        <h2>카테고리 설정</h2>
        <select>
          <option>단과대학</option>
        </select>
        <select>
          <option>학과</option>
        </select>
      </div>
    </div>
  );
}

function MainFooter() {
  const [hashtag, setHashtag] = useState(''); // onChange로 관리할 해쉬태그 State
  const [hashArr, setHashArr] = useState([]); // 해시태그를 담을 배열

  // 하단 commit 내용 및 해쉬태그
  return (
    <div className="StFooterbox">
      <div className="StCommit">
        {/* 변경사항 commit창*/}
        <input
          className="text"
          type="text"
          name="updateCommit"
          placeholder=" 프로젝트 변경사항을 입력해주세요"
        ></input>
      </div>
      <div className="StHashtag">
        {' '}
        {/*해쉬태그*/}
        <div className="StHashtagOut"></div>
        <input type="text" name="hashTag" value={hashtag} placeholder="#해쉬태그 추가"></input>
      </div>
    </div>
  );
}

function List({ id, onDelpost, index, onAddpostsub }) {
  // 생성되는 list 한개. subdata는 여기서 margin만 주고 싶은뎅....
  return (
    <div className="list_form">
      <form>
        <h1 onClick={(id) => onAddpostsub(id)}>추가</h1>
        <label for="index">{index + 1} </label>
        <input type="text" name="title" placeholder="프로젝트 제목"></input>
        <textarea name="data" placeholder="설명을 입력해주세요"></textarea>
        <button type="button">첨부파일</button>
        <button type="button" onClick={(id) => onDelpost(id)}>
          삭제
        </button>
      </form>
    </div>
  );
}

function PostForm() {
  const [project_data, setProject_data] = useState([
    {
      id: [0],
      title: '',
      data: '',
      subdata: [{}],
    },
    // {
    //id와 depth 처리 고려
    // id: 0,
    // title: '',
    // data: '',
    // parent: true,
    // },
  ]);
  const [nextId, setNextId] = useState([1]); //id관리용
  // const [maxdepth, setMaxdep] = useState(1);
  // const [subdata, setsubdata] = useState([{}]);
  // const [project_data, setProject_data] = useState([0]);

  // 제일 큰 목차(배열 0번째) 생성 함수
  const onAddpost = () => {
    let dataTemp = [...project_data];
    dataTemp.push({
      id: nextId,
      title: '',
      data: '',
      subdata: [{}],
    });
    let tempid = [...nextId];
    tempid[0] = tempid[0] + 1;
    // console.log(tempid[0]);
    setNextId(tempid);
    // console.log(dataTemp.slice(-1)[0]);
    setProject_data(dataTemp);
  };

  //배열 0번째 친구들 지우기
  const onDelpost = (id) => {
    setProject_data((project_data) => project_data.filter((data) => data.id !== id));
  };

  //
  const onAddpostsub = (parenid) => {
    // 바로 위의 부모 아이디 받아오는 가정
    let tempid = [...parenid];
    // parentid
    let tempobject = [...project_data];
    for (let i = 0; i < parenid.length; i++) {
      //
      tempobject.map((data, index) => {
        if (data.id[i] === parenid[i]) {
          // console.log('asdfadsf' + tempobject.subdata);
          if (i === parenid.length - 1) {
            if (typeof tempobject.subdata === 'undefined') {
              // console.log('dfa');
              setMaxdep(maxdepth + 1);
              tempobject.subdata = [
                {
                  id: tempid.push(0),
                  title: '',
                  data: '',
                  subdata: [{}],
                },
              ];
            } else {
              tempobject.subdata.concat({
                id: tempid.push(tempobject.subdata.length),
                title: '',
                data: '',
                subdata: [{}],
              });
            }
          }
        }
      });
    }
    // console.log(tempobject.slice(-1)[0]);
    setProject_data(tempobject);
  };

  //subdata 조회를 해야 하는디.....
  const dataList = project_data.map((data, index) => (
    <List
      key={data.id}
      onDelpost={() => onDelpost(data.id)}
      index={index}
      onAddpostsub={() => onAddpostsub(data.id)}
    ></List>
  ));

  const dataList2 = project_data.map((data, index) => (
    <List
      key={data.id}
      onDelpost={() => onDelpost(data.id)}
      index={index}
      onAddpostsub={() => onAddpostsub(data.id)}
    ></List>
  ));

  // const test = () => {
  //   let data = [[0, [1]], [1], [2], [3]];
  //   data.forEach((item) => console.log(item));
  // };

  return (
    <div>
      <Header></Header>
      <div className="Mainbox">
        <SideBar></SideBar>
        <div className="MainDetail">
          <Title></Title>
          <div className="outline">{dataList}</div>
          <div className="create_form">
            <button onClick={onAddpost}>생성하기</button>
          </div>
          <MainFooter></MainFooter>
          <div className="StMainButtonbox">
            <button className="StMainButton" onClick>
              생성하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostForm;
