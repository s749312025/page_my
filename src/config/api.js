import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui';

axios.defaults.timeout = 5000;
axios.defaults.headers.post['data-Type'] = 'json';
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//axios.defaults.baseURL = 'http://api.shengchao.me';


//POST传参序列化
axios.interceptors.request.use((config) => {
  if(config.method  === 'post'){
    //config.data = qs.stringify(config.data);
  }
  return config;
},(error) =>{
  Message.error('错误的传参');
  return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) =>{
  if(res.status !== 200){
    return Promise.reject(res);
  }else if(res.data.status === 'error') {
    Message.error(res.data.data);
    return Promise.reject(res);
  }
  return res;
}, (error) => {
  Message.error('网络异常');
  return Promise.reject(error);
});

export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function fetch_get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  signup(params) {
    return fetch('/api/signup', params)
  },
  login(params) {
    return fetch('/api/login', params)
  },
  articleAdd(params) {
    return fetch('/api/article/add', params)
  },
  articleList(params) {
    return fetch('/api/article/list', params)
  },
  articleUpdate(params) {
    return fetch('/api/article/update', params)
  },
  getToken(params) {
    return fetch('/api/token/getToken', params)
  }
}
