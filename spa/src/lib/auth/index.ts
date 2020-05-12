import {
  UserManager,
  WebStorageStateStore,
  InMemoryWebStorage,
  User
} from 'oidc-client';

export class Auth {
  private userManager: UserManager;

  constructor() {
    const STS_DOMAIN: string = 'https://localhost:8443';

    const settings: any = {
      // userStore: new WebStorageStateStore({ store: window.localStorage }),
      // userStore: new WebStorageStateStore({ store: new InMemoryWebStorage() }),
      // userStore: new InMemoryWebStorage(),
      // new WebStorageStateStore({ store: new InMemoryWebStorage() }),
      authority: STS_DOMAIN,
      client_id: 'spa_code_client',
      redirect_uri: 'http://localhost:8100/callback.html',
      silent_redirect_uri: 'http://localhost:8100/silent-renew.html',
      response_type: 'code',
      // scope: 'openid profile dataEventRecords',
      scope: 'openid offline_access profile api1',
      post_logout_redirect_uri: 'http://localhost:8100/',
      filterProtocolClaims: true,
      automaticSilentRenew: true
    };

    this.userManager = new UserManager(settings);
  }

  public getUser(): Promise<User | null> {
    return this.userManager.getUser();
  }

  public isAuthenticated(): Promise<boolean> {
    return this.userManager.getUser().then(user => {
      if (user && !user.expired) {
        // Set the authorization header for axios
        // axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.access_token;
        return true;
      }
      return false;
    });
  }

  public signinRedirectCallback(props: any): Promise<any> {
    return this.signinRedirectCallback(props.signInParams);
  }

  public completeLogin(): Promise<any> {
    return this.userManager
      .signinRedirectCallback()
      .catch(error => console.log('Handle ERROR in Auth: ' + error.msg)); // eslint-disable-line
  }
  //   completeLogin() {
  //     this.manager.signinRedirectCallback()
  //        .then(user => this.user = user)
  //        .catch((error) => this.handleError(error));
  //  }

  public login(): Promise<void> {
    return this.userManager.signinRedirect();
  }

  public logout(): Promise<void> {
    return this.userManager.signoutRedirect();
  }

  public getAccessToken(): Promise<string> {
    return this.userManager.getUser().then((data: any) => {
      return data.access_token;
    });
  }
}
