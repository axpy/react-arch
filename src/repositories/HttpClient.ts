import axios from 'axios';
// import tokenInterceptor from '@/httpClient/interceptors/tokenInterceptor';
// import refreshTokenRequestGenerator from '@/httpClient/helpers/refreshTokenRequestGenerator';
// import refreshTokenExpiredHandler from '@/httpClient/helpers/refreshTokenExpiredHandler';

const baseDomain = `${process.env.VUE_APP_BASE_DOMAIN}`;
const baseURL = `${baseDomain}/`;

const httpClient = axios.create({ baseURL });
const httpClientUnauthorized = axios.create({ baseURL });

// httpClient.interceptors.request.use(tokenInterceptor(refreshTokenRequestGenerator(httpClientUnauthorized)));
// httpClient.interceptors.response.use((response: any) => response, refreshTokenExpiredHandler);

export { httpClient, httpClientUnauthorized };
