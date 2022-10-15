import React from "react";
import styled from "styled-components";
import background from "../assets/background-Login.jpg";

const BackgroundAuth = styled.div`
  background: url(${background});
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContainerAuth = styled.div`
  background-color: #dfe93a;
  padding: 100px;
  border-radius: 50px;
`;

const AuthLayout = ({ children }) => {
  return (
    <BackgroundAuth>
      <ContainerAuth>{children}</ContainerAuth>
    </BackgroundAuth>
  );
};

export default AuthLayout;
