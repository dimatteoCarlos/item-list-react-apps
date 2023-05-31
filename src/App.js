//App for rendering list item apps//

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LayoutPage } from './pages/LayoutPage.jsx';
import { ErrorPage } from './pages/ErrorPage.jsx';
import { HomePage as AppsPage } from './pages/HomePage';
import Applications from './components/Applications.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorPage />,
      element: <LayoutPage />,
      children: [
        { element: <AppsPage />, index: true },
        {
          path: '/:appId',
          element: <Applications />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
