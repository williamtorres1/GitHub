import { authorize, AuthorizeResult } from 'react-native-app-auth';

import { CLIENT_ID, CLIENT_SECRET } from '../credentials/github.json';

export const config = {
  redirectUrl: 'com.opengit.auth://Search',
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  scopes: ['user'],
  additionalHeaders: { Accept: 'application/json' },
  serviceConfiguration: {
    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
    tokenEndpoint: 'https://github.com/login/oauth/access_token',
    revocationEndpoint: `https://github.com/settings/connections/applications/${CLIENT_ID}`,
  },
};

async function signIn(): Promise<AuthorizeResult> {
  try {
    const authState = await authorize(config);

    return authState;
  } catch (err) {
    throw new Error(err);
  }
}

export { signIn };
