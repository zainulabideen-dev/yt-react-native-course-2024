import axios from 'axios';
import {WHATS_APP_SID, WHATS_AUTH_TOKEN} from '@env';

export async function _apiSendOtp() {
  let data = {
    To: 'whatsapp:+923120256369',
    From: 'whatsapp:+14155238886',
    ContentSid: WHATS_APP_SID,
    ContentVariables: '{"1":"409173"}',
  };
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.twilio.com/2010-04-01/Accounts/ACbc655db2d19fea8064bb991abae3bd12/Messages.json',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: WHATS_AUTH_TOKEN,
    },
    data: data,
  };

  try {
    const {data, status} = await axios.request(config);
    console.log('=> data', data);
    console.log('=> status', status);
  } catch (error) {
    console.log('=> error', error);
  }
}
