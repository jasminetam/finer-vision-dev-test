const express = require('express');
const sequelize = require('./database');
const cors = require('cors');
const User = require('./User');

sequelize.sync({ force: true }).then(() => console.log('db is ready'));

const app = express();

app.use(cors());
app.use(express.json());

app.post('/users', async (req, res) => {
  await User.create(req.body);
  res.send('success');
});

app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

app.listen(3001, () => {
  console.log('app is running on port 3001');
});
