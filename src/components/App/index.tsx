import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '@components/Header';
import routes from '@src/constants/routes';

import AppWrapper from './styled';

const App = () => (
  <AppWrapper>
    <Header />
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </Suspense>
  </AppWrapper>
);

export default App;
