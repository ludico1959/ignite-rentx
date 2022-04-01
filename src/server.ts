import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({
    message: 'Olá mundo!'
  });
});

const port = 3333;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
