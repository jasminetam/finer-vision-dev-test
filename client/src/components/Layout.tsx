import React from 'react';
import { BackgroundDiv, FlexWrapper, FormArea } from '../style/style';

function Layout({ children }: any) {
  return (
    <BackgroundDiv>
      <FlexWrapper>
        <FormArea>
          {children}
        </FormArea>
      </FlexWrapper>
    </BackgroundDiv>
  );
}

export default Layout;
