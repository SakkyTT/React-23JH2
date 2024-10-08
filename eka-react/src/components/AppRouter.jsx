// Root componentti

import './AppRouter.css';

import {
    createBrowserRouter,
    // createRoutesFromElements, vanhan tavan importit
    // Route,
    RouterProvider
} from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetailPage from './pages/ProductDetail';

// https://google.com <- domain
// /search/jne <- route/path

// Vanhempi tapa tehdä router
// const routeDefinitions = createRoutesFromElements(
//     <Route>
//         <Route path='/' element={<HomePage />} />
//         <Route path='/Products' element={<ProductsPage />} />
//     </Route>
// );
// const router = createBrowserRouter(routeDefinitions);

// Määritellään reittejä / polkuja (routes/paths)
const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />, // Jokaisella path:lla voisi olla oma errorElement
        children: [
            { index: true, element: <HomePage /> }, // polkuja taulukossa, polut annetaan map-muodossa
            { path: '/products', element: <ProductsPage /> },
            { path: '/products/:productId', element: <ProductDetailPage />,  }
        ]
    },
    {
        path: '/admin', // voi olla muita rootteja eri poluissa
        children: [],
    }
]);

function AppRouter() {
    return <RouterProvider router={router} />;
}

export default AppRouter;