import axios from 'axios';

export async function _apiSendOtp() {
  let data = {
    To: 'whatsapp:+923120256369',
    From: 'whatsapp:+14155238886',
    ContentSid: 'your-content-sid',
    ContentVariables: '{"1":"409173"}',
  };
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'your-base-url',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'your-auth-token',
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
