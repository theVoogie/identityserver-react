import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #004176;
  border-bottom: 1px solid #e6e6e6;
  box-shadow: 0 0 10px -5px #ccc;
  z-index: 10000;
`;

const HeaderNav = styled.div`
  margin-right: 25px;
  display: flex;
  align-items: right;
  font-size: 12px;

  & > svg {
    fill: #0069a5;
  }
`;

const APSLogo = styled.span`
  vertical-align: middle;
  line-height: 60px;
  text-align: center;
  margin-left: 25px;
  text-transform: capitalize;
  font-size: 35px;
`;

const HeaderLink = styled(Link)`
  margin-left: 25px;
  display: flex;
  align-items: right;
  font-size: 12px;
  line-height: 60px;
  color: white;
  text-decoration: none;
`;

const UserIcon = styled.div`
  margin-right: 25px;
  display: flex;
  align-items: right;

  & > svg {
    fill: #0069a5;
  }
`;

const UserIcon2 = styled(Link)`
  margin-right: 25px;
  display: flex;
  color: white;
  text-decoration: none;
  malign-items: right;

  & > svg {
    fill: #0069a5;
  }
`;

const UserName = styled.div`
  vertical-align: middle;
  line-height: 60px;
  text-align: center;
  margin-right: 25px;
`;

export default {
  Header,
  APSLogo,
  HeaderNav,
  HeaderLink,
  UserName,
  UserIcon,
  UserIcon2
};
