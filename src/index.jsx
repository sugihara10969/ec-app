import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import * as History from 'history';
import createStore from './reducks/store/store';
// import {ErrorBoundary} from "./components/UIkit";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './assets/theme';
import * as serviceWorker from './serviceWorker';

import App from './App';

// connected-react-router - action経由でルーティングが可能、push,replace..
// historyを強化
const history = History.createBrowserHistory();
export const store = createStore(history);

render(
   //  <Provider store={store}>
   //     <ConnectedRouter history={history}>
   //        <MuiThemeProvider theme={theme}>
   //           <ErrorBoundary>
   //              <App />
   //           </ErrorBoundary>
   //        </MuiThemeProvider>
   //     </ConnectedRouter>
   //  </Provider>,
   <Provider store={store}>
      <ConnectedRouter history={history}>
         <MuiThemeProvider theme={theme}>
            <App />
         </MuiThemeProvider>
      </ConnectedRouter>
   </Provider>,
   document.getElementById('root')
);
serviceWorker.register();
