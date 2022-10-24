import styled from "styled-components";

export const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  @media (max-width: 1367px) {
    margin-top: -5%;
  }
`;

export const LabelForm = styled.label`
  display: inline-block;
  margin-top: 10px;
  font-family: "HindSiliguri-Light";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.32px;
  color: #fafafa;
  flex: none;
  order: 0;
  flex-grow: 0;
  @media (max-width: 1367px) {
    font-size: 13px;
  }
`;

export const InputForm = styled.input`
  width: 415px;
  height: 51px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 0px 0px 15px;
  background: #121212;
  border: 1px solid #c6c6c6;
  border-radius: 4px;
  color: #fafafa;
  font-size: 17px;
  line-height: 28px;
  font-family: "HindSiliguri-Light";
  &:valid {
    outline: none;
    box-shadow: 0px 0px 2px ${(props) => props.noEmptyForm};
    border: 1px solid ${(props) => props.noEmptyForm};
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px ${(props) => props.noEmptyFocus};
    border: 1px solid ${(props) => props.noEmptyFocus};
  }
`;

export const ContainerPassword = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  margin-bottom: 14px;
`;
export const InputPassword = styled.input`
  width: 415px;
  height: 51px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 0px 0px 15px;
  background: #121212;
  border: 1px solid #c6c6c6;
  border-radius: 4px;
  color: #fafafa;
  font-size: 17px;
  line-height: 28px;
  font-family: "HindSiliguri-Light";
  &:valid {
    outline: none;
    box-shadow: 0px 0px 2px ${(props) => props.noEmptyPass};
    border: 1px solid ${(props) => props.noEmptyPass};
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px ${(props) => props.noEmptyFocus};
    border: 1px solid ${(props) => props.noEmptyFocus};
  }
  @media (max-width: 1367px) {
    margin-top: 1px;
    margin-right: 15px;
    margin-bottom: -5px;
    height: 40px;
    font-size: 13px;
  }
`;
export const EyeComponent = styled.div`
  color: #c6c6c6;
  position: absolute;
  top: 32%;
  right: 8%;
  cursor: pointer;
  &:hover {
    color: #00ffff;
  }
  @media (max-width: 1367px) {
    right: 6%;
    top: 30%;
  }
`;

export const PassWrongIcon = styled.div`
  color: #fb5757;
`;

export const ButtonForm = styled.button`
  width: 432px;
  height: 43px;
  border-radius: 6px;
  margin-top: 5%;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #00ffff;
  }

  @media (max-width: 1367px) {
    margin-top: 5%;
    border-radius: 6px;
    margin-right: 15px;
    margin-bottom: -5px;
    height: 40px;
    font-size: 13px;
  }
`;

export const ButtonIcon = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  &:hover {
    background-color: #00ffff;
    border-radius: 5px;
  }
`;
