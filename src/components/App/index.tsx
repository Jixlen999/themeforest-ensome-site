import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '@components/Header';
import ContactUsSection from '@components/ContactUsSection';
import Footer from '@components/Footer';
import routes from '@constants/routes';

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
    <ContactUsSection />
    <Footer />
  </AppWrapper>
);

export default App;
