import styled from 'styled-components';
import { icLogo, icMenu, icMypage, icSearch } from '../assets/icons';

function Header() {
  return (
    <StWrapper>
      <StLogoWrapper>
        <StLogoImg src={icLogo} alt="logo" />
      </StLogoWrapper>
      <StInputWrapper>
        <StSelectBox name="sortOption">
          <option value="total">전체</option>
        </StSelectBox>
        <StInput type="text" />
        <StInputButton>
          <img src={icSearch} alt="search" />
        </StInputButton>
      </StInputWrapper>
      <StImageWrapper>
        <img src={icMypage} alt="mypage" width={40} height={40} />
        <img src={icMenu} alt="menu" width={40} height={40} />
      </StImageWrapper>
    </StWrapper>
  );
}

export default Header;

const StSelectBox = styled.select`
  width: 65px;
  padding: 0.8em 0.5em;
  font-family: inherit;
  border: 0;
  outline: 0;
`;

const StLogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

const StInput = styled.input`
  border: 0;
  outline: 0;
  width: 350px;
  height: 40px;
`;

const StInputButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0f3871;
  width: 55px;
  height: 100%;
`;

const StLogoWrapper = styled.div`
  width: 200px;
`;

const StInputWrapper = styled.div`
  border: 1px solid #0f3871;
  border-radius: 5px;
  width: 450px;
  height: 40px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const StImageWrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
`;

const StWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  align-items: center;
  border-bottom: 1px solid lightgrey;
`;
