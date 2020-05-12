import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import SC from './styled';
import { useAuth } from '../../providers/auth';

export default (() => {
  // const auth = useAuth();
  // auth.service.getUser().then((data: any) => {
  //   console.log(`auth: ${JSON.stringify(data.profile, null, 2)}`); // eslint-disable-line
  // });
  // debugger; // eslint-disable-line
  // auth.getUser();
  // console.log(`auth: ${JSON.stringify(usr, null, 2)}`); // eslint-disable-line
  return (
    <SC.Header>
      <SC.HeaderNav>
        <SC.APSLogo>APS</SC.APSLogo>
        <SC.HeaderLink to="/personer">Sertifikatsøknader</SC.HeaderLink>
        <SC.HeaderLink to="/test">Søk sjøfolk</SC.HeaderLink>
      </SC.HeaderNav>
      <SC.UserIcon2 to="/account">
        <SC.UserName>Karoline Kristiansen</SC.UserName>
        <FontAwesomeIcon icon={faUser} />
      </SC.UserIcon2>
    </SC.Header>
  );
}) as React.FC;
