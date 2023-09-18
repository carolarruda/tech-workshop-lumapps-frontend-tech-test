import axios from 'axios';
import md5 from 'md5';

const instance = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  timeout: 5000,
});

const publicKey = '57d5105f4ca10f8e6999bd23327df3cf';
const privateKey = 'd7111473c8e8f55f8007138b1d9681e59ec79e78'

  const ts = new Date().getTime();
  const hash = md5(`${ts}${privateKey}${publicKey}`);

const baseQueryParams = {
  apikey: process.env.REACT_APP_MARVEL_API_KEY,
  limit:100,
  ts: ts,
  hash: hash,
};

const get = (url, query) => instance.get(url, {
  params: {

    ...query,
    ...baseQueryParams,
  },
});

export { instance as api, get };
