import axios from 'axios';

export const api = axios.create({
  //   baseURL: 'https://some-domain.com/api/',
  //   timeout: 1000,
  //   headers: { 'X-Custom-Header': 'foobar' },
});

// 요청 인터셉터
api.interceptors.request.use(
  (config) => {
    // 요청 전 처리 (예: 토큰 추가)
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터
api.interceptors.response.use(
  (response) => {
    // 응답 데이터 가공
    return response.data;
  },
  (error) => {
    // 에러 처리 (예: 401, 403 등)
    if (error.response?.status === 401) {
      // 인증 에러 처리
    }
    return Promise.reject(error);
  },
);
