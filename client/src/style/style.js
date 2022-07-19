import styled from 'styled-components';

//Layout Components
export const BackgroundDiv = styled.div`
  background-color: #d2e1ff;
  width: 100%;
  height: 100vh;
`;

export const FlexWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormArea = styled.div`
  width: 700px;
  height: auto;
  padding: 5px;
  background-color: white;
  border-radius: 10px;
`;

//TitleBar Components
export const StyledTitleBar = styled.div`
  background-image: linear-gradient(180deg, #fec500, #eea50d);
  border: 0px;
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  height: 50px;
  border-radius: 0.5rem;
`;
export const Title = styled.p`
  font-size: 16px;
  color: white;
  text-shadow: 1px 1px black;
  margin-left: 20px;
`;

//InputForm Components
export const Form = styled.form`
  background-color: #dedede;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
`;

export const InputFormDiv = styled.div`
  background-color: #dedede;
  display: flex;
  width: 100%;
  height: 180px;
  border-radius: 10px;
`;

export const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
`;

export const StyledInput = styled.input`
  border-radius: 0.5rem;
  padding-left: 5px;
  width: 100%;
  height: 25px;
  background-color: white;
  -moz-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
  margin-top: 5px;
`;

export const SingleInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 10px;
`;

export const InputFormatDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
`;
export const ButtonDiv = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: right;
  width: 280px;
`;

export const NextButton = styled.button`
  background-image: linear-gradient(180deg, #4852b8, #7362cf);
  border-radius: 10px;
  border: 0px;
  text-align: center;
  color: #cccbde;
  font-size: 16px;
  width: 100px;
  height: 30px;
  margin: 10px;
  cursor: pointer;
`;

export const StyledSelect = styled.select`
  border-radius: 0.5rem;
  color: gray;
  font-size: 16px;
  width: 150px;
  height: 30px;
  background-color: white;
  -moz-box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
  margin-top: 5px;
`;

export const StyledTextArea = styled.textarea`
  width: 350px;
  border-radius: 0.5rem;
  height: 125px;
  background-color: white;
  -moz-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
  margin-top: 5px;
  padding-left: 5px;
  padding-top: 5px;
`;
