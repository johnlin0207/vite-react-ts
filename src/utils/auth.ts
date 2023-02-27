import Cookies from 'js-cookie';
import Config from '@/utils/settings';

const TokenKey = Config.TOKEN;

export function getToken() {
  console.log(Cookies.get(TokenKey));
  return Cookies.get(TokenKey);
}

export function setToken(token: string) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

export function getTimeOut() {
  const val = Cookies.get('request-time-out');
  return val;
}
