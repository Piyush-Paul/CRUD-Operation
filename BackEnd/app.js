const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const studentRoutes = require('./routes/studentRoutes');
const Book = require('./models/Book');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/books', bookRoutes);
app.use('/student' , studentRoutes);

sequelize.sync({ force: false }).then(() => {
  console.log('Database synced');
});

app.listen(5000, () => console.log('Server running on port 5000'));
