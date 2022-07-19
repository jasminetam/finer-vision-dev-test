import React from 'react';
import { DataProps } from '../utils/interface';
import {
  Form,
  InputFormDiv,
  InputFormatDiv,
  SingleInputDiv,
  StyledLabel,
  StyledInput,
  StyledSelect,
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

const InputFormTwo: React.FC<Props> = ({
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
    if (
      data.tele_num === 0 ||
      data.day === 0 ||
      data.month === 0 ||
      data.year === 0 ||
      data.gender === ''
    ) {
      alert('please fill in all the blanks');
      setIsOpen(2)
    } else currentPage < numberOfPages && setIsOpen((prev) => prev + 1);
  };

  return (
    <Form data-test="component-InputFormTwo">
      <InputFormDiv>
        <InputFormatDiv>
          <SingleInputDiv>
            <StyledLabel>Telephone number</StyledLabel>
            <StyledInput
              name="tele_num"
              type="string"
              value={data.tele_num}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </SingleInputDiv>
          <SingleInputDiv>
            <StyledLabel>Date of Birth</StyledLabel>
            <div style={{ display: 'inline-block' }}>
              <StyledInput
                name="day"
                type="number"
                value={data.day}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                style={{ width: '40px', marginRight: '5px' }}
              />
              <StyledInput
                name="month"
                type="number"
                value={data.month}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                style={{ width: '40px', marginRight: '5px' }}
              />
              <StyledInput
                name="year"
                type="number"
                value={data.year}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                style={{ width: '50px', marginRight: '5px' }}
              />
            </div>
          </SingleInputDiv>
        </InputFormatDiv>
        <InputFormatDiv>
          <SingleInputDiv>
            <StyledLabel>Gender</StyledLabel>
            <StyledSelect
              name="gender"
              value={data.gender}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="trans">Transsexual</option>
              <option value="prefer not to tell">prefer not to tell</option>
            </StyledSelect>
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

export default InputFormTwo;
