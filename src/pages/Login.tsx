import React from 'react';
import { View } from 'react-native';
import OAuthManager from 'react-native-oauth';
import { useNavigation } from '@react-navigation/native';

import { ClientID, ClientSecret } from '../credentials/github.json';

export const Login: React.FC = () => {
  const navigation = useNavigation();

  const config = {
    github: {
      client_id: ClientID,
      client_secret: ClientSecret,
    },
  };

  const manager = new OAuthManager('OpenGit');

  manager.configure(config);
  manager.addProvider({
    github: {
      auth_version: '2.0',
      authorize_url: 'https://github.com/login/oauth/authorize',
      access_token_url: 'https://github.com/login/oauth/access_token',
      callback_url: ({ github }) => `${github}://oauth`,
    },
  });
  manager
    .authorize('github')
    .then(response => {
      console.log(response);
      navigation.navigate('Search');
    })
    .catch(err => console.log('Your req return error:', err));
  return <View />;
};
