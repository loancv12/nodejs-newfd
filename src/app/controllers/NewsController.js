class NewsController {

    
    // [GET] /news/:slug
    show(req, res){
        console.log('show fu')
        res.send('news detail')

    }

    // [GET] /news
    index(req, res) {
        console.log('index js')
        res.render("news")
    }

}

module.exports =new NewsController;