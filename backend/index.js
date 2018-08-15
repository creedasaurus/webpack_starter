const express = require('express');

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
}

app.get('/api/hello', (req, res) => res.send('Hello from the Backend Server!'));

app.listen(3000, () => console.log('Example app listening on port 3000!')); // eslint-disable-line
