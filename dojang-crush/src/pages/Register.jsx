import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";

const GlobalStyle = createGlobalStyle`
    body{
        background-color: #F8E8E4;
        margin: 0;
    }
`;

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 80px;
`;

//로고
const LogoContainer = styled.div`
  background-color: gray;
  width: 10vw;
  height: 10vw;
  margin-bottom: 60px;
`;

// 로그인
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`;

const IDinput = styled.input`
  height: 30px;

  border: solid 1.5px #dee2e6;
  border-radius: 3px;
  &::placeholder {
    color: #dee2e6;
  }
`;

const PWinput = styled.input`
  height: 30px;
  border: solid 1.5px #dee2e6;
  border-radius: 3px;
  &::placeholder {
    color: #dee2e6;
  }
`;

const LoginBTN = styled.button`
  width: 30vw;
  height: 35px;
  background-color: #dba290;
  color: #612d1c;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #c38776;
    color: #ffffff;
  }
`;

const SNSLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  font-size: 0.8rem;
`;
const SNSLoginTxt = styled.div`
  color: #000000;
  margin-bottom: 5px;
`;

const KAKAOLoginBTN = styled.button`
  width: 30vw;
  display: flex;
  background-color: #ffdd00;
  justify-content: center;
  align-items: center;
  height: 35px;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  &:hover {
    background-color: #e6c200;
  }
  margin-bottom: 25px;
`;

const KAKAOLogo = styled(RiKakaoTalkFill)`
  font-size: 1.5rem;
  margin-right: 10px;
`;

const SignupBTN = styled.button`
  background-color: #9e8c85;
  height: 35px;
  border: none;
  border-radius: 3px;
  color: #ffffff;
  &:hover {
    background-color: #8d7b74;
  }
`;

const RegisterPage = () => {
  return (
    <RegisterContainer>
      <GlobalStyle />
      <LogoContainer>로고</LogoContainer>
      <LoginContainer>
        <IDinput placeholder="&nbsp; 아이디" />
        <PWinput placeholder="&nbsp; 비밀번호" type="password" />
        <LoginBTN>로그인</LoginBTN>
      </LoginContainer>
      <SNSLoginContainer>
        <SNSLoginTxt>SNS으로 로그인하기</SNSLoginTxt>
        <KAKAOLoginBTN>
          <KAKAOLogo /> 카카오 로그인
        </KAKAOLoginBTN>
        <SignupBTN>회원가입</SignupBTN>
      </SNSLoginContainer>
    </RegisterContainer>
  );
};

export default RegisterPage;
