import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'src/features/redux/store';
import * as serviceWorker from './serviceWorker';
import App from './features/phone/App';

ReactDOM.render((
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>

), document.getElementById('root'));

serviceWorker.unregister();
