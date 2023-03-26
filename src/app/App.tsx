import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Theme from '@components/Theme';
import Translation from '@components/Translation';

import Main from '@layouts/Main';
import Home from '@views/Home';

function App() {
  return (
    <Suspense fallback="loading">
      <Theme>
        <Translation>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />}>
                <Route index element={<Home />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Translation>
      </Theme>
    </Suspense>
  );
}

export default App;
