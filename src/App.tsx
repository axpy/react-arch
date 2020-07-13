import React from 'react';
import GeneralStyles from './components/core/GeneralStyles';
import { AuthProvider } from './components/core/AuthContext';

function App() {
  return (
    <div className="App">
      <GeneralStyles>
        <AuthProvider>
          
        </AuthProvider>
      </GeneralStyles>
    </div>
  );
}

export default App;

