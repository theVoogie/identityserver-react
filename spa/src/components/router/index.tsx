import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
// import { User } from 'oidc-client';
import SC from './styled';

import Root from '../root';
import Footer from '../footer';
import LoginResponsePage from '../login-response-page';
import AccountPage from '../account-page';

const PersonPage = lazy(() => import('../person-page'));
const TestPage = lazy(() => import('../test-page'));

// interface RoutesModuleProps {
//   user: User;
//   isLoadingUser: boolean;
//   location: any;
// }

export default (() => {
  // if location is callback page, return only CallbackPage route to allow signin process
  // IdentityServer 'bug' with hash history: if callback page contains a '#' params are appended with no delimiter
  // eg. /callbacktoken_id=...
  // const url = props.location.pathname.substring(0, 9);
  // if (url === '/callback') {
  //   const rest = props.location.pathname.substring(9);
  //   return <LoginResponsePage {...props} signInParams={`${url}#${rest}`} />;
  // }

  return (
    <BrowserRouter>
      <SC.SdirHeader />
      <Root>
        <Suspense fallback={<></>}>
          <Switch>
            <Route exact path="/test" component={TestPage} />
            <Route exact path="/person" component={PersonPage} />
            <Route exact path="/account" component={AccountPage} />
            <Route exact path="/loginresponse" component={LoginResponsePage} />
            <Redirect from="/" to="/person" />
          </Switch>
        </Suspense>
      </Root>
      <Footer />
    </BrowserRouter>
  );
}) as React.FC;
