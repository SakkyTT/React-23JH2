// Root componentti

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';

// https://google.com <- domain
// /search/jne <- route/path

// Määritellään reittejä / polkuja (routes/paths)
const router = createBrowserRouter([
    { path: '/', element: <HomePage /> }, // polkuja taulukossa, polut annetaan map-muodossa
    { path: '/products', element: <ProductsPage /> },
]);

function AppRouter(){
    return <RouterProvider router={router} />;
}

export default AppRouter;