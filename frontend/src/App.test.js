import { render } from "@testing-library/react";
import { Provider } from 'react-redux';

import { store } from './utils/redux/store';
import App from './App';

it('test App components', () =>{
  const screen = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});