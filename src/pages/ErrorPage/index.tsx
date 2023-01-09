import React from 'react';
import { MdOutlineFollowTheSigns } from 'react-icons/md';

import { ErrorText, Wrapper } from './styled';

const ErrorPage = () => (
  <Wrapper>
    <ErrorText>
      Ooops, you went on a wrong path <MdOutlineFollowTheSigns />
    </ErrorText>
  </Wrapper>
);

export default ErrorPage;
