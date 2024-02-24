require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const itemsRoutes = require('./routes/itemRoutes');

app.use(express.json());
app.use('/api', itemsRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
