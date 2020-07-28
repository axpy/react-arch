import React from 'react';
import GeneralStyles from './components/core/GeneralStyles';
import MainRouter from './components/core/MainRouter';
import { AuthProvider } from './components/core/auth/AuthContext';
import { ServicesProvider } from './components/core/services/ServicesContext';
import { ServicesList } from './services/servicesInitializator';

type Props = {
  services: ServicesList
}

const App = ({services}: Props) => {
  return (
    <div className="App">
      <GeneralStyles/>
      <ServicesProvider services={services}>
        <AuthProvider>
          <MainRouter/>
        </AuthProvider>
      </ServicesProvider>
    </div>
  );
}

export default App;

