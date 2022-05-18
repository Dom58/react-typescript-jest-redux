import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './routes';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
};
export default App;
