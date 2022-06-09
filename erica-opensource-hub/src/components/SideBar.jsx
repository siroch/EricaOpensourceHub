import { useState } from 'react';
import styled from 'styled-components';

function SideBar() {
  const [menu, setMenu] = useState([
    {
      id: 1,
      menu: '공학대학',
      colleage: [
        { id: 10, name: '건축학부' },
        { id: 11, name: '교통물류공학과' },
        { id: 12, name: '전자공학부' },
        { id: 13, name: '재료화학공학과' },
        { id: 14, name: '기계공학과' },
        { id: 15, name: '산업경영공학과' },
        { id: 16, name: '생명나노공학과' },
        { id: 17, name: '로봇공학과' },
        { id: 18, name: '융합공학과' },
        { id: 19, name: '국방정보공학과' },
        { id: 20, name: '스마트융합공학부' },
      ],
      isActive: false,
    },
    {
      id: 2,
      menu: '과학기술융합대학',
      colleage: [
        { id: 21, name: '응용수학과' },
        { id: 22, name: '응용물리학과' },
        { id: 23, name: '분자생명과학과' },
        { id: 24, name: '화학분자공학과' },
        { id: 25, name: '해양융합공학과' },
        { id: 26, name: '나노광전자학과' },
      ],
      isActive: false,
    },
    {
      id: 3,
      menu: '경상대학',
      colleage: [
        { id: 27, name: '경제학부' },
        { id: 28, name: '경영학부' },
        { id: 29, name: '보험계리학과' },
        { id: 30, name: '회계세무학과' },
      ],
      isActive: false,
    },
    {
      id: 4,
      menu: '소프트웨어융합대학',
      colleage: [
        { id: 31, name: '소프트웨어학부' },
        { id: 32, name: 'ICT융합학부' },
        { id: 33, name: '인공지능학과' },
      ],
      isActive: false,
    },
    {
      id: 5,
      menu: '국제문화대학',
      colleage: [
        { id: 34, name: '한국언어문학과' },
        { id: 35, name: '문화인류학과' },
        { id: 36, name: '문화콘텐츠학과' },
        { id: 37, name: '중국학과' },
        { id: 38, name: '일본학과' },
        { id: 39, name: '영미언어·문화학' },
        { id: 40, name: '프랑스학' },
      ],
      isActive: false,
    },
    {
      id: 6,
      menu: '디자인대학',
      colleage: [
        { id: 41, name: '주얼리·패션디자인학과' },
        { id: 42, name: '산업디자인학과' },
        { id: 43, name: '커뮤니케이션디자인학과' },
        { id: 44, name: '영상디자인학과' },
      ],
      isActive: false,
    },
    { id: 7, menu: '약학대학', colleage: [], isActive: false },
    {
      id: 8,
      menu: '언론정보대학',
      colleage: [
        { id: 45, name: '광고홍보학과' },
        { id: 46, name: '정보사회미디어학과' },
      ],
      isActive: false,
    },
    {
      id: 9,
      menu: '예체능대학',
      colleage: [
        { id: 47, name: '스포츠과학부' },
        { id: 48, name: '무용예술학과' },
        { id: 49, name: '실용음악학과' },
      ],
      isActive: false,
    },
  ]);

  const handleClickMenu = (e, id) => {
    setMenu((prev) =>
      prev.map((menu) =>
        menu.id === id ? { ...menu, isActive: !menu.isActive } : { ...menu, isActive: false },
      ),
    );
  };

  return (
    <StWrapper>
      <StSideBarTitle>분야별 프로젝트</StSideBarTitle>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            <div onClick={(e) => handleClickMenu(e, item.id)}>{item.menu}</div>
            {item.colleage.length > 0 ? (
              <StCollegeUl key={item.id} isActive={item.isActive}>
                {item.colleage.map((i) => (
                  <li key={i.id}>{i.name}</li>
                ))}
              </StCollegeUl>
            ) : (
              <></>
            )}
          </li>
        ))}
      </ul>
    </StWrapper>
  );
}

export default SideBar;

const StWrapper = styled.div`
  width: 15%;
  min-width: 210px;
  margin: 20px;
  border-right: 1px solid lightgray;

  li {
    padding: 10px;
    &:hover {
      cursor: pointer;
    }
    ul {
      padding: 10px 0px;
      font-size: 0.9rem;
    }
  }
`;

const StCollegeUl = styled.ul`
  display: ${(props) => (props.isActive ? 'block' : 'none')};
`;

const StSideBarTitle = styled.div`
  font-weight: bolder;
  font-size: 1.5rem;
  padding: 10px 0px;
`;
