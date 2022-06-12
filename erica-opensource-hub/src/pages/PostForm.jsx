import './PostForm.css';
import { useState } from 'react';
import Header from '../../src/components/Header';

// function Title() {
//   const text = '프로젝트 업로드';
//   return (
//     <div className="title">
//       <h1> {text} </h1>
//       <h4>프로젝트 세부내용 작성</h4>
//     </div>
//   );
// }

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
      id: [0],
      title: '',
      data: '',
      subdata: [{}],
      // parent: false,
      //id를 배열 형식으로 바꾼다.
      //id: [0,0]
      //id: [0]
      //id: [0,0]
      //id: [0,1]
    },
    // {
    //id와 depth 처리 고려
    // id: 0,
    // title: '',
    // data: '',
    // parent: true,
    // },
  ]);
  const [nextId, setNextId] = useState([1]);
  const [maxdepth, setMaxdep] = useState(1);
  // const [subdata, setsubdata] = useState([{}]);
  // const [project_data, setProject_data] = useState([0]);
  const onAddpost = () => {
    let dataTemp = [...project_data];
    // let counter = countTemp.slice(-1)[0];
    // console.log(countTemp.slice(-1)[0]);
    dataTemp.push({
      id: nextId,
      title: '',
      data: '',
      subdata: [{}],
    });
    let tempid = [...nextId];
    tempid[0] = tempid[0] + 1;
    console.log(tempid[0]);
    setNextId(tempid);
    console.log(dataTemp.slice(-1)[0]);
    setProject_data(dataTemp);
  };

  const onDelpost = (id) => {
    setProject_data((project_data) => project_data.filter((data) => data.id !== id));
  };

  const onAddpostsub = (parenid) => {
    let tempid = [...parenid];
    // parentid
    let tempobject = [...project_data];
    for (let i = 0; i < parenid.length; i++) {
      tempobject.map((data, index) => {
        if (data.id[i] === parenid[i]) {
          console.log('asdfadsf' + tempobject.subdata);
          if (i === parenid.length - 1) {
            if (typeof tempobject.subdata === 'undefined') {
              console.log('dfa');
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
    console.log(tempobject.slice(-1)[0]);
    setProject_data(tempobject);

    // tempid.push([]);
    // console.log(tempid);
    // project_data.map((data, index) => {
    //   if (data.id == parent) {
    // let tempid =
    // let tempdata = [...project_data]
    // // console.log('길이' + tempId.length);
    // tempid.push([tempid[index].length]);
    // tempid.push({
    //   id: [0],
    //   title: '',
    //   data: '',
    //   subdata: [{}],
    // })
    // console.log('------------');
    // // let datatemp = [];
    // console.log(tempid);
    // console.log('------------');
    // let datatemp = [];
    // datatemp.push({
    //   id: nextId,
    //   title: '',
    //   data: '',
    //   subdata: [{}],
    // });
    // } else {
    //   console.log('아니다');
    // }
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

  // const ddddd = (maxdepth) => {
  //   let tempdata = [...project_data];
  //   for (let i = 0; i < maxdepth; i++) {
  //     let templen = tempdata.subdata.length;
  //     if (templen > 0) {
  //     }
  //     tempdata.map((data, index) => (
  //       <List
  //         key={data.id}
  //         onDelpost={() => onDelpost(data.id)}
  //         index={index}
  //         onAddpostsub={() => onAddpostsub(data.id)}
  //       ></List>
  //     ));
  //   }
  // };

  // const test = () => {
  //   let data = [[0, [1]], [1], [2], [3]];
  //   data.forEach((item) => console.log(item));
  // };

  return (
    <div>
      <Header></Header>
      <div className="outline">{dataList}</div>
      <div className="create_form">
        {/* <button onClick={dataList}>생성하기</button> */}
        <button onClick={onAddpost}>생성하기</button>
      </div>
    </div>
  );
}

export default PostForm;
