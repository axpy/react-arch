import React from 'react';
import GeneralStyles from './components/core/GeneralStyles';
import { AuthProvider } from './components/core/auth/AuthContext';
import MainRouter from './components/core/MainRouter';

function App() {
  return (
    <div className="App">
      <GeneralStyles>
        <AuthProvider>
          <MainRouter/>
        </AuthProvider>
      </GeneralStyles>
    </div>
  );
}

export default App;

