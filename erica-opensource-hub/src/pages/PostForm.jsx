import './PostForm.css';
import { useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import courseData from '../json/course_item_test.json';
import { useNavigate } from 'react-router-dom';
import { createProject, getUser, patchProject } from '../api';
import { useEffect } from 'react';

function List({ onDelpost, onAddpostsub, data, handleInputChange, main, index }) {
  return (
    <div className="list_form">
      {main && <h1 onClick={(e) => onAddpostsub(data.key, e)}>추가</h1>}
      <label for="index">{main ? index + 1 : (data.key % 10) + 1} </label>
      <input
        type="text"
        name="text"
        placeholder="프로젝트 제목"
        value={data.text}
        onChange={(e) => handleInputChange(main, data.parent, data.key, e)}
      />
      <textarea
        name="content"
        placeholder="설명을 입력해주세요"
        value={data.content}
        onChange={(e) => handleInputChange(main, data.parent, data.key, e)}
      />
      <button type="button">첨부파일</button>
      <button type="button" onClick={(e) => onDelpost(data.key, e)}>
        삭제
      </button>
    </div>
  );
}

function PostForm() {
  const colors = ['skyblue', 'darkseagreen', 'palevioletred'];
  const loc = ['77 -22', '200 -48', '200 4', '-20 -22', '77 53'];

  const [title, setTitle] = useState('');
  const [isRecruit, setIsRecruit] = useState(false);
  const [kind, setKind] = useState({
    colleage: '',
    department: '',
  });
  const [userInfo, setUserInfo] = useState();
  const [commit, setCommit] = useState('');
  const [hashTag, setHashTag] = useState('');
  const [projectData, setProjectData] = useState([
    {
      key: 1,
      parent: 0,
      text: '프로젝트 문제 사항',
      content: '문제 사항은 어쩌고 저쩌고~',
      subData: [],
    },
  ]);

  const navigate = useNavigate();

  const getUserInfo = async () => {
    const response = await getUser(1);
    response && setUserInfo(response);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const onDelpost = (key) => {
    setProjectData((projectData) => projectData.filter((data) => data.key !== key));
  };

  const handleInputChange = (main, parent, key, e) => {
    const { value, name } = e.target;
    if (main) {
      setProjectData(
        projectData.map((project) =>
          project.key === key
            ? {
                ...project,
                [name]: value,
              }
            : project,
        ),
      );
    } else {
      setProjectData((prev) =>
        prev.map((project) =>
          project.key === parent
            ? {
                ...project,
                subData: project.subData.map((data) =>
                  data.key === key ? { ...data, [name]: value } : data,
                ),
              }
            : project,
        ),
      );
    }
  };

  const handelTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleRecruitChange = (e) => {
    setIsRecruit((prev) => !prev);
  };

  const handleSelect = (e) => {
    const { value, name } = e.target;
    setKind({
      ...kind,
      [name]: value,
    });
  };

  const handleClickListButton = (e) => {
    const nextKey = projectData[projectData.length - 1].key + 1;
    setProjectData([
      ...projectData,
      {
        key: nextKey,
        parent: 0,
        text: '프로젝트 문제 사항',
        content: '문제 사항은 어쩌고 저쩌고~',
        subData: [],
      },
    ]);
  };

  const handleClickAddPost = (key, e) => {
    const parentPost = projectData.filter((project) => project.key === key);
    const subData = parentPost[0].subData;
    let nextId;
    subData.length > 0 ? (nextId = subData[subData.length - 1].key + 1) : (nextId = key * 10);
    setProjectData((prev) =>
      prev.map((project) =>
        project.key === key
          ? {
              ...project,
              subData: [
                ...project.subData,
                {
                  key: nextId,
                  parent: key,
                  text: '프로젝트 문제 사항',
                  content: '문제 사항은 어쩌고 저쩌고~',
                },
              ],
            }
          : project,
      ),
    );
  };

  const handleCommit = (e) => {
    setCommit(e.target.value);
  };

  const handleHashTag = (e) => {
    setHashTag(e.target.value);
  };

  const handleCreateButton = async (e) => {
    const projectInfo = [];

    let locIdx = 0;
    let dir = true;
    for (let i = 0; i < projectData.length; i++) {
      projectInfo.push({
        key: projectData[i].key,
        parent: projectData[i].parent,
        text: projectData[i].text,
        content: projectData[i].content,
        brush: colors[i],
        dir: dir ? 'right' : 'left',
        loc: loc[locIdx],
      });
      locIdx++;
      if (projectData[i].subData.length > 0) {
        for (let j = 0; j < projectData[i].subData.length; j++) {
          projectInfo.push({
            key: projectData[i].subData[j].key,
            parent: projectData[i].subData[j].parent,
            text: projectData[i].subData[j].text,
            content: projectData[i].subData[j].content,
            brush: colors[i],
            dir: dir ? 'right' : 'left',
            loc: loc[locIdx],
          });
          locIdx++;
        }
      }
      dir = !dir;
    }

    const d = new Date();
    const date =
      d.getFullYear() +
      '.' +
      (d.getMonth() + 1) +
      '.' +
      d.getDate() +
      ' ' +
      d.getHours() +
      '시 ' +
      d.getMinutes() +
      '분 ' +
      d.getSeconds() +
      '초';
    const data = {
      owner_id: userInfo.id,
      owner_name: userInfo.name,
      owner_num: userInfo.user_id,
      project_id: 0,
      project_version: 1,
      title: title,
      college: kind.colleage,
      department: kind.department,
      hashtag: hashTag,
      createdate: date,
      editdate: date,
      like: 0,
      view: 0,
      collaborator: [userInfo.id],
      team_proposal: isRecruit,
      commit_message: commit,
      commit_user: userInfo.id,
      commit_username: userInfo.name,
      project_data: [
        {
          key: 0,
          text: '프로젝트 제목',
          content: title,
          loc: '0 0',
        },
        ...projectInfo,
      ],
      proposal_data: [],
    };

    const response = await createProject(data);
    const result = await patchProject(response.id);

    navigate(`/post/${response.id}`);
  };

  return (
    <div>
      <Header />
      <div className="Mainbox">
        <SideBar />
        <div className="MainDetail">
          <div className="StDetailHeader">
            <div className="StTitle">
              <input
                className="text"
                type="text"
                name="title"
                value={title}
                placeholder="  프로젝트 제목을 입력해주세요"
                onChange={handelTitleChange}
              />
              <h2>구인중</h2>
              <input
                classsName="checkbox"
                type="checkbox"
                name="getTeam"
                value="getTeam"
                checked={isRecruit}
                onChange={handleRecruitChange}
              />
            </div>
            <div className="StSelectbox">
              <h2>카테고리 설정</h2>
              <div>
                <select onChange={handleSelect} name="colleage">
                  <option>--대학 선택--</option>
                  {courseData.course.map((course) => (
                    <option value={course.menu}>{course.menu}</option>
                  ))}
                </select>
                <select onChange={handleSelect} name="department">
                  <option>--학부 선택--</option>
                  {courseData.course.map(
                    (course) =>
                      course.menu === kind.colleage &&
                      course.colleage.map((department) => (
                        <option value={department.name}>{department.name}</option>
                      )),
                  )}
                </select>
              </div>
            </div>
          </div>
          <div className="outline">
            {projectData.map((data, index) => (
              <>
                <List
                  key={data.key}
                  onDelpost={onDelpost}
                  onAddpostsub={handleClickAddPost}
                  data={data}
                  handleInputChange={handleInputChange}
                  main={true}
                  index={index}
                />
                <div className="outline-innner">
                  {data.subData.length > 0 &&
                    data.subData.map((data) => (
                      <List
                        key={data.key}
                        data={data}
                        handleInputChange={handleInputChange}
                        main={false}
                      />
                    ))}
                </div>
              </>
            ))}
          </div>
          <div className="create_form">
            <button onClick={handleClickListButton}>프로젝트 항목 추가하기</button>
          </div>
          <div className="StFooterbox">
            <div className="StCommit">
              <input
                className="text"
                type="text"
                name="commit"
                value={commit}
                onChange={handleCommit}
                placeholder=" 프로젝트 변경사항을 입력해주세요"
              ></input>
            </div>
            <div className="StHashtag">
              <div className="StHashtagOut"></div>
              <input
                type="text"
                name="hashTag"
                value={hashTag}
                onChange={handleHashTag}
                placeholder="# 해쉬태그 추가"
              ></input>
            </div>
          </div>
          <div className="StMainButtonbox">
            <button className="StMainButton" onClick={handleCreateButton}>
              생성하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostForm;
