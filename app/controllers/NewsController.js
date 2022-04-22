
class  NewsController {
    
    //[GET] /news
    index(req, res) {
        res.render('news'); 
    }

    //[GET] /news/:slug nhận giá trị ngẫu nhiên 
    show(req, res) {
        res.send('NEW DETAIL!!!');
    }
}


module.exports = new NewsController;

