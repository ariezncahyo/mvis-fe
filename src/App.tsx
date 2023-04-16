import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';

import { store } from '@/store/store';
import AppRoutes from '@/routes/index';
import { QueryClient, QueryClientProvider } from 'react-query';

import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App(): ReactElement {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
      <ToastContainer position="top-right" newestOnTop />
    </Provider>
  );
}
