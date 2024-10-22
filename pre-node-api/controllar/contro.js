const modal=require('../model/api')
exports.creatuser =async(req,res)=>{
    try {
        const data=await modal.create(req.body)
        res.status(200).json({
            status:200,
            message:"user created successfully",
            data:data
        })
    } catch (error) {
        
    }
}


exports.userlogin=async(req,res)=>{
    const data=req.body
    try {
        const logindata=await modal.findOne({email:req.body.email})
    } catch (error) {
        
    }
}