import './App.css';

import { BrowserRouter } from 'react-router-dom';

import { AppSnackbarProvider } from './components/AppSnackbar/AppSnackbarProvider';
import Router from './routes/Router';


function App() {

  return (
    <BrowserRouter> 
      <AppSnackbarProvider>
        <Router />
      </AppSnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
