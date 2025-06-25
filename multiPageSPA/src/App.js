import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products.js';
import RootLayout from './pages/Root.js';
import ErrorPage from './pages/Error.js';
import ProductDetailPage from './pages/ProductDetail.js';
// the path is the part after the domain. for example, the slash after https://google.com/ is where the 'path' begins. google.com is the domain
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <HomePage/>},   //route objects. paths to different pages are typically stored in "pages" or "routes"
      {path: 'products', element: <ProductsPage />}, // no / at the beginning of the path makes it relative instead of an absolute path!
      {path: 'products/:productId', element: <ProductDetailPage />}
    ]
  },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
