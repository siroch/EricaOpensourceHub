import './PostForm.css';
import { useState } from 'react';
import Header from '../../src/components/Header';

function Title() {
  const text = '프로젝트 업로드';
  return (
    <div className="title">
      <h1> {text} </h1>
      <h4>프로젝트 세부내용 작성</h4>
    </div>
  );
}

function List({ id, onDelpost, index, onAddpostsub }) {
  return (
    <div className="list_form">
      <form>
        <h1 onClick={(id) => onAddpostsub(id)}>추가</h1>
        <label for="index">{index + 1} </label>
        <input type="text" name="title" placeholder="프로젝트 제목"></input>
        <textarea name="data"></textarea>
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
      id: 0,
      title: '',
      data: '',
      subdata: [{}],
    },
  ]);
  const [nextId, setNextId] = useState(1);
  // const [project_data, setProject_data] = useState([0]);
  const onAddpost = (id) => {
    let dataTemp = [...project_data];
    // let counter = countTemp.slice(-1)[0];
    // console.log(countTemp.slice(-1)[0]);
    dataTemp.push({
      id: nextId,
      title: '',
      data: '',
      subdata: [{}],
    });
    setNextId(nextId + 1);
    console.log(dataTemp.slice(-1)[0]);
    setProject_data(dataTemp);
  };

  const onDelpost = (id) => {
    setProject_data((project_data) => project_data.filter((data) => data.id !== id));
  };

  const onAddpostsub = (parentId) => {
    console.log(parentId);
  };

  // const [input, setInput] = useState('asdfasf');
  // const [data_list, setData_list] = useState([

  // ]);
  const dataList = project_data.map((data, index) => (
    <List
      key={data.id}
      onDelpost={() => onDelpost(data.id)}
      index={index}
      onAddpostsub={() => onAddpostsub(data.id)}
    ></List>
  ));

  return (
    <div>
      <Header></Header>
      <div className="outline">{dataList}</div>
      <div className="create_form">
        <button onClick={onAddpost}>생성하기</button>
      </div>
    </div>
  );
}

export default PostForm;
