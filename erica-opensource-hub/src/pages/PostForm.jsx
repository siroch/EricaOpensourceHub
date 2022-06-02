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

function List() {
  return (
    <div>
      <form>
        <h1></h1>
        <input type="text" name="title" placeholder="프로젝트 제목"></input>
        <textarea placeholder="프로젝트 목적" name="data"></textarea>
        <button type="submit">첨부파일</button>
        <button type="submit">삭제</button>
      </form>
    </div>
  );
}

// function CreateForm(props) {
//   return (
//     <button
//       className="createPost"
//       onClick={(event) => {
//         event.preventDefault();
//         props.onAddpost()
//       }}
//     >
//       {' '}
//       생성하기{' '}
//     </button>
//   );
// }

function PostForm() {
  const [project_data, setProject_data] = useState([
    {
      id: 0,
      title: '',
      data: '',
      subdata: [{}],
    },
  ]);
  // const [project_data, setProject_data] = useState([0]);
  const onAddpost = () => {
    let countTemp = [...project_data];
    // let counter = countTemp.slice(-1)[0];
    console.log(countTemp.slice(-1)[0]);
    countTemp.push({
      id: 1,
      title: '',
      data: '',
      subdata: [{}],
    });
    console.log(countTemp.slice(-1)[0]);
    setProject_data(countTemp);
  };

  // const [input, setInput] = useState('asdfasf');
  // const [data_list, setData_list] = useState([

  // ]);
  const dataList = project_data.map((data) => <List key={data.id}></List>);

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
