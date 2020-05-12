import styled from 'styled-components';
import { Button } from '@sjofartsdir/component-library';

const MyButton = styled(Button)`
  margin-left: 100px !important;
`;

const Page = styled.div`
  width: 500px;
  background-color: yellow;
`;

export default { Page, MyButton };
