
const userSchema=require('../models/userModel')




exports.getAllData = async(req,res)=>{
    
    try {
        const dataExist= await userSchema.find()
        if(!dataExist){
            return res.status(400).send({msg:"data not exist"})
        }
       
        res.status(200).send({data})
    } catch (error) {
        return res.status(500).send({msg:error});
    }
    }

    exports.getOneData = async(req,res)=>{
    const {id} = req.params
        try {
            const dataExist= await userSchema.findById(id)
            if(!dataExist){
                return res.status(400).send({msg:"data not exist"})
            }
           
            res.status(200).send({data})
        } catch (error) {
            return res.status(500).send({msg:error});
        }
        }
    
        exports.updateOneData = async(req,res)=>{
            const {id} = req.params
                try {
                    const dataUpdated= await userSchema.findByIdAndUpdate({id,$set:{name:'rym'}})
                    if(!dataUpdated){
                        return res.status(400).send({msg:"data not exist"})
                    }
                   
                    res.status(200).send({mgs:'success update',dataUpdated})
                } catch (error) {
                    return res.status(500).send({msg:error});
                }
                }
            
                exports.deleteOneData = async(req,res)=>{
                    const {id} = req.params
                        try {
                            const dataDeleted= await userSchema.findByIdAndRemove(id)
                            if(!dataDeleted){
                                return res.status(400).send({msg:"data not exist"})
                            }
                           
                            res.status(200).send({mgs:'success delete'})
                        } catch (error) {
                            return res.status(500).send({msg:error});
                        }
                        }
    

                        exports.deleteAllData = async(req,res)=>{
                            
                                try {
                                    const deleteAll= await userSchema.remove()
                                    if(!deleteAll){
                                        return res.status(400).send({msg:"data not exist"})
                                    }
                                   
                                    res.status(200).send({mgs:'success delete'})
                                } catch (error) {
                                    return res.status(500).send({msg:error});
                                }
                                }
            






exports.addUser = async(req,res)=>{
    const {email,password}=req.body
try {
    const userExist= await userSchema.findOne({email:email})
    if(userExist){
        return res.status(400).send({msg:"user is already exist"})
    }
    const newUser = new userSchema(req.body);
    const passwordHached = bcrybt.hashSync(password,10);
     newUser.password=passwordHached;
    await newUser.save()
    res.status(200).send({msg:"user added successfully..."})
} catch (error) {
    return res.status(500).send({msg:error});
}
}

