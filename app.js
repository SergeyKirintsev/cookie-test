const express = require('express');

const PORT = 3000;

const app = express();

app.use(express.static(__dirname + "/public"));

app.get('/logout', (req, res) => {
    res.clearCookie('jwt').send('Куки удалены');
});

app.get('/login', (req, res) => {
    res
        .cookie('jwt', 'test-123', {
            httpOnly: true,
            maxAge: 3600000 * 24 * 7,
            // пробуем отключить в Safari
            secure: true,
            sameSite: 'Strict',
        })
        .send('Готово')
});

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))