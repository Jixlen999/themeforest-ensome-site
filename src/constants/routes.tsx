import React from 'react';

const HomeFC = React.lazy(() => import('@pages/HomePage'));
const ErrorPage = React.lazy(() => import('@pages/ErrorPage'));

const routes = [
  { path: '/', element: <HomeFC /> },
  { path: '/*', element: <ErrorPage /> },
];

export default routes;
