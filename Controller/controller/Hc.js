
const data=require("../data.json")

exports.pageview = (req, res, next) => {
    res.render('index', { data:data });
}

exports.subdata = (req, res, next) => {
    console.log(req.query.index);
    
    res.render('subpage',{data:data[req.query.index]});
}