import auth from '@react-native-firebase/auth';
import {WEB_CLIENT_ID} from '@env';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export async function onGoogleButtonPress() {
  GoogleSignin.configure({
    webClientId: WEB_CLIENT_ID,
  });
  await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  const response = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(
    response?.data?.idToken,
  );
  return auth().signInWithCredential(googleCredential);
}
