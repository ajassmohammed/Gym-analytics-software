 cconst express = require('express');
 const mongoose = require('mongoose');
 const dotenv = require('dotenv');
 const bodyParser = require('body-parser');
 const apiRoutes = require('./routes/api');
 dotenv.config();
 const app = express();
 const PORT = process.env.PORT || 5000;
 // Middleware
 app.use(bodyParser.json());
 // Database connection
 mongoose.connect(process.env.MONGO_URI, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 });
 const db = mongoose.connection;
 db.on('error', (error) => console.error(error));
 db.once('open', () => console.log('Connected to MongoDB'));
 // API routes
 app.use('/api', apiRoutes);
 // Start server
 app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
 })
