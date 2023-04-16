import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import { store } from '@/store/store';
import { useAuth } from '@/hooks/useAuth';

const BASE_URL = "http://localhost:9000";

type IConfig = AxiosRequestConfig & {
  showError?: boolean;
};

const requestConfig: IConfig = {
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

const HttpRequest = axios.create(requestConfig);

HttpRequest.interceptors.request.use(
  (config: any) => {
    const state = store.getState();
    const { access_token, refresh_token, user }: any = state.auth.data;
    const { outlet }: any = state;
    const business_id = user?.business?.id;
    const outlet_id = outlet?.currentOutlet?.public_id;

    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
      config.headers.business_id = business_id;
      config.headers.outlet_id = config.headers.outlet_id || outlet_id || 'all';
    }

    if (!config.headers) {
      config.headers = {};
    }

    if (config.showError) {
    }
    return config;
  },
  (error: any) => {
    if (error.config.showError) {
    }
    return Promise.reject(error);
  }
);

HttpRequest.interceptors.response.use(
  (res) => {
    return res;
  },
  (error: AxiosError) => {
    // Auth error
    if (error.response?.status === 401) {
      const { logout } = useAuth();
      logout();
      window.location.replace('/login');
      return;
    }

    if (error.response.data) {
      const { message } = error.response.data as any;
      if (message?.length > 0) {
        toast.error(message);
      }
    }

    return Promise.reject(error);
  }
);

export { HttpRequest };
