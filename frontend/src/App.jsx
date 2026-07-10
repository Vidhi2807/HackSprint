import { RouterProvider } from 'react-router-dom';
import { AppProvider } from '@/context/AppContext';
import router from '@/routes/AppRouter';

export default function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}
