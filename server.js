const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Връзка с MongoDB - забележи, че вместо 'localhost' използваме името на услугата 'database' от Docker
const mongoUri = process.env.MONGO_URI || 'mongodb://database:27017/my-docker-db';

mongoose.connect(mongoUri)
  .then(() => console.log('Успешно свързване с MongoDB!'))
  .catch(err => console.error('Грешка при връзка с MongoDB:', err));

app.get('/', (req, res) => {
  res.send('<h1>Привет! Проектът работи успешно в Docker контейнер! 🚀</h1>');
});

app.listen(PORT, () => {
  console.log(`Сървърът е стартиран на порт ${PORT}`);
});