class SiteController {

    // [GET] /search
    search(req, res){
        console.log('search ')
        res.render("search")

    }

    // [GET] /
    index(req, res) {
        console.log('home index')
        res.render("home")
    }

    
    
    

    
}

module.exports =new SiteController;