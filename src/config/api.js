import axios from 'axios';

export async function _apiSendOtp() {
  let data = {
    To: 'whatsapp:+923120256369',
    From: 'whatsapp:+14155238886',
    ContentSid: 'HX229f5a04fd0510ce1b071852155d3e75',
    ContentVariables: '{"1":"409173"}',
  };
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.twilio.com/2010-04-01/Accounts/ACbc655db2d19fea8064bb991abae3bd12/Messages.json',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic QUNiYzY1NWRiMmQxOWZlYTgwNjRiYjk5MWFiYWUzYmQxMjo3MWJjOWY1YmE2YzYzMWFiNGU0OWEwNjUzZDdjNzhmNQ==',
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
