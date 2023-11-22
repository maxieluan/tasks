// src/main.jsx

import { h, render } from 'preact';
import { Router } from 'preact-router';

import Home from './routes/Home.jsx';
import About from './routes/About.jsx';
import Contact from './routes/Contact.jsx';

import Layout from './components/Layout.jsx';

import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

// Define your routes
const routes = {
  '/': Home,
  '/about': About,
  '/contact': Contact,
};

const App = () => {
  return (
    <div id="app">
      <Router>
        {Object.keys(routes).map(route => (
          <Layout path={route}>
            {h(routes[route])}
          </Layout>
        ))}
      </Router>
    </div>
  );
};

// Render your application
render(<App />, document.body);
