import React from 'react';
import { DataProps } from '../utils/interface';
import {
  Form,
  InputFormDiv,
  InputFormatDiv,
  SingleInputDiv,
  StyledLabel,
  StyledTextArea,
  ButtonDiv,
  NextButton,
} from '../style/style';

interface Props {
  data: DataProps;
  setData: React.Dispatch<React.SetStateAction<DataProps>>;
  handleSend: () => Promise<void>;
}

const InputFormThree: React.FC<Props> = ({ data, setData, handleSend }) => {
  const handleChange = (name: string, value: string | number) => {
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
console.log(data)
  return (
    <Form>
      <InputFormDiv>
        <InputFormatDiv>
          <SingleInputDiv style={{ width: '400px' }}>
            <StyledLabel>Comments</StyledLabel>
            <StyledTextArea
              name="comments"
              value={data.comments}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </SingleInputDiv>
        </InputFormatDiv>
        <ButtonDiv style={{ width: '500px' }}>
          <NextButton type="submit" onClick={handleSend}>Next {'>'}</NextButton>
        </ButtonDiv>
      </InputFormDiv>
    </Form>
  );
};

export default InputFormThree;
