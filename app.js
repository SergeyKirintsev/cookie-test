const express = require('express');
const browserDetectMiddleware = require('./middleware/browserDetectMiddleware');

const PORT = 3000;

const cookieOptionsAll = {
  httpOnly: true,
  maxAge: 3600000 * 24 * 7,
  // пробуем отключить в Safari
  secure: true,
  sameSite: 'Strict',
};

const cookieOptionsSafari = {
  httpOnly: true,
  maxAge: 3600000 * 24 * 7,
};

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(browserDetectMiddleware);

app.get('/logout', (req, res) => {
    res.clearCookie('jwt').send('Куки удалены');
});

app.get('/login', (req, res) => {

    const cookie = req.browser.name === 'safari' ? cookieOptionsSafari : cookieOptionsAll;

    res
        .cookie('jwt', 'test-123', cookie)
        .send('Готово')
});

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))