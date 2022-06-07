const router = require("express").Router();

const Celebrity = require('./../models/celebrity.model')

// ----CREATE----

router.get('/create', (req, res) => {

    res.render('celebrities/new-celebrity')
})


router.post('/create', (req, res) => {

    const { name, photo, ocupation, catchPhrase } = req.body

    Celebrity
        .create({ name, photo, ocupation, catchPhrase })
        .then(newCelebrity => {
            res.redirect('/celebrities')
        })
        .catch(error => res.redirect('/celebrities/create'))
})

//----READ----

router.get('/', (req, res) => {

    Celebrity
        .find()
        .then(celebrities => {
            res.render('celebrities/celebrities', { celebrities })
        })
        .catch(err => res.redirect('celebrities/new-celebrity'))
})

module.exports = router;