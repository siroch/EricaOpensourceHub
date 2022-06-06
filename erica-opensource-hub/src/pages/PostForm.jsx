import './PostForm.css';
import { useState } from 'react';

function Title() {
  const text = '프로젝트 업로드';
  return (
    <div className="title">
      <h1> {text} </h1>
      <h4>프로젝트 세부내용 작성</h4>
    </div>
  );
}

function List({ id, onDelpost }) {
  return (
    <div>
      <form>
        {/* <h1></h1> */}
        <input type="text" name="title" placeholder="프로젝트 제목"></input>
        <textarea placeholder="프로젝트 목적" name="data"></textarea>
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

  // const [input, setInput] = useState('asdfasf');
  // const [data_list, setData_list] = useState([

  // ]);
  const dataList = project_data.map((data) => (
    <List key={data.id} onDelpost={() => onDelpost(data.id)}></List>
  ));

  return (
    <div>
      <Title></Title>
      <div className="outline">{dataList}</div>
      <div>
        <button onClick={onAddpost}>생성하기</button>
      </div>
    </div>
  );
}

export default PostForm;
