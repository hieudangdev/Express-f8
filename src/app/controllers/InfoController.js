


class InfoController {
    // [GET] /info
    index(req, res) {
        res.render('info')
    }
    show(req, res) {
        res.send('New info')
    }
}

module.exports = new InfoController
