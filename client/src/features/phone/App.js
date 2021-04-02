import 'react-perfect-scrollbar/dist/css/styles.css';
import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { store } from 'src/features/redux/store';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/features/phone/routes';
import Loading from 'src/components/loading/loading';
import { Provider } from 'react-redux';

const App = () => {
  const routing = useRoutes(routes);

  return (
    <Provider store={store}>
      <Suspense fallback={Loading}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {routing}
        </ThemeProvider>
      </Suspense>
    </Provider>
  );
};

export default App;
