


class SiteController {
    // [GET] /info
    home(req, res) {
        res.render('home')
    }
    search(req, res) {
        res.render('search')
    }
    login(req, res) {
        res.render('login')
    }
    value(req, res) {
        res.send(req.body)
    }
}

module.exports = new SiteController
