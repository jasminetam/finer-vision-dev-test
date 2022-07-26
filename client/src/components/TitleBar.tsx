import React from 'react';
import { StyledTitleBar, Title } from '../style/style';

function TitleBar({ show, setShow, title }: any) {
  return (
    <StyledTitleBar onClick={() => setShow(!show)} data-test="component-TitleBar">
      <Title>{title}</Title>
    </StyledTitleBar>
  );
}

export default TitleBar;
