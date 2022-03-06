require('./models/User');
require('./models/Track');
const requireAuth = require('./middlewares/requireAuth');
const mongoose = require('mongoose');
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');
const app = express();
const trackRoutes = require('./routes/trackRoutes');
const mongoKey = require('./mongo-key')

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`);
});

const mongoUri = ;

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
});
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});