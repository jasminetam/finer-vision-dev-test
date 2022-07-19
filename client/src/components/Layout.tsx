import React from 'react';
import { BackgroundDiv, FlexWrapper, FormArea } from '../style/style';

function Layout({ children }: any) {
  return (
    <BackgroundDiv data-test="component-Layout">
      <FlexWrapper>
        <FormArea>
          {children}
        </FormArea>
      </FlexWrapper>
    </BackgroundDiv>
  );
}

export default Layout;
