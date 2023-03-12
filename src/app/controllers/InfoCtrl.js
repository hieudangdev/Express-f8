


class InfoController {
    // [GET] /info
    index(req, res) {
        res.render('info')
    }

}

module.exports = new InfoController
