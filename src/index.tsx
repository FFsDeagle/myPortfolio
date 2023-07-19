import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/content/about/About';
import Contact from './components/content/contact/Contact';
import TopPane from './components/toppane/TopPane';
import Root from './components/content/Root';
import Projects from './components/content/projects/Projects';

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
]);

root.render(
  <Provider store={store}>
    <TopPane />
    <RouterProvider router={router} />
  </Provider>
);