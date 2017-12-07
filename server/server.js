import express from 'express';
import { parse } from 'url';
import next from 'next';
import morgan from 'morgan';
import path from 'path';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();
  server.use(express.static(path.resolve(__dirname, 'public')));

  // CUSTOM ROUTES
  server.get('/results', (req, res) => {
    const mergedQuery = Object.assign({}, req.query, req.params);
    return app.render(req, res, '/results', mergedQuery);
  });

  // DEFAULT ROUTE
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.use(morgan('dev'));

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on port ${port}...`);
  });
});


