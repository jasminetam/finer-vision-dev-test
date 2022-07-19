import React from 'react';
import { DataProps } from '../utils/interface';
import {
  Form,
  InputFormDiv,
  InputFormatDiv,
  SingleInputDiv,
  StyledLabel,
  StyledInput,
  ButtonDiv,
  NextButton,
} from '../style/style';

interface Props {
  data: DataProps;
  setData: React.Dispatch<React.SetStateAction<DataProps>>;
  currentPage: number;
  numberOfPages: number;
  setIsOpen: React.Dispatch<React.SetStateAction<number>>;
}

const InputFormOne: React.FC<Props> = ({
  data,
  setData,
  currentPage,
  numberOfPages,
  setIsOpen,
}) => {
  const handleChange = (name: string, value: string | number) => {
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleClick = () => {
    if (data.first_name === '' || data.email === '' || data.surname === '') {
      alert('please fill in all the blanks');
      setIsOpen(1);
    } else currentPage < numberOfPages && setIsOpen((prev) => prev + 1);
  };

  return (
    <Form>
      <InputFormDiv>
        <InputFormatDiv>
          <SingleInputDiv>
            <StyledLabel>First Name</StyledLabel>
            <StyledInput
              name="first_name"
              type="text"
              required
              value={data.first_name}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </SingleInputDiv>
          <SingleInputDiv>
            <StyledLabel>Email Address</StyledLabel>
            <StyledInput
              name="email"
              type="text"
              pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
              required
              value={data.email}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </SingleInputDiv>
        </InputFormatDiv>
        <InputFormatDiv>
          <SingleInputDiv>
            <StyledLabel>Surname</StyledLabel>
            <StyledInput
              name="surname"
              type="text"
              required
              value={data.surname}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </SingleInputDiv>
        </InputFormatDiv>
        <ButtonDiv>
          <NextButton type="submit" onClick={handleClick}>
            Next {'>'}
          </NextButton>
        </ButtonDiv>
      </InputFormDiv>
    </Form>
  );
};

export default InputFormOne;
