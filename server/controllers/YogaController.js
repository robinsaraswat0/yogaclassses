const YogaClass=require("../models/YogaClass")


exports.createYogaClass=async(req,res)=>{
    try {
        const {name,teacherName,level,img,price,rating,style,description,schedule}=req.body;
        const yogaClassDetails=await YogaClass.create({
            name,
            teacherName,
            level,
            img,
            price,
            rating,
            style,
            description,
            schedule
        });
        return res.status(403).json({
            success: true,
            message: yogaClassDetails,
          });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            error:error
          })
    }
}

exports.getAllYogaClasses = async(req,res,next)=>{
    try {
        let search = req.query.keyword;
        let level = req.query.level ? req.query.level : [];
        let style = req.query.style ? req.query.style : [];
        let time = req.query.time ? req.query.time : [];
        let priceFilter = req.query.price;

        const classFilter = [];
        !!search && classFilter.push({
            $or:[
             {
                 "name":{
                     $regex: search,
                     $options: "i",
                   },
             },
             {
                "teacherName":{
                    $regex:search,
                    $options:"i"
                }
             }
            ]
        }
        )

        let leveling = [];
        if(level.length){
            for(let i=0;i<level.length;i++){
                leveling.push({"level":level[i]})
            }
            classFilter.push({$or:leveling})
        }

        let styling=[];

        if(style.length){
            for(let i=0;i<style.length;i++){
                styling.push({"style":style[i]})
            }
            classFilter.push({$or:styling})
        }

        let timing = [];

        if(time.length){
            for(let i=0;i<time.length;i++){
                timing.push({"schedule":time[i]})
            }
            classFilter.push({$or:timing})
        }

        if (priceFilter) {
            let priceString = JSON.stringify(priceFilter);
            priceString = priceString.replace(
              /\b(gt|gte|lt|lte)\b/g,
              (key) => `$${key}`
            );
            priceString = JSON.parse(priceString);
            for (let key in priceString) {
              priceString[key] *= 1;
            }
            classFilter.push({ price: priceString });
        }

        const pipeline = [];
        if (classFilter.length) {
            const classf = { $match: { $and: classFilter } };
            pipeline.push(classf);
        }else{
            const classf = { $match: {} };
            pipeline.push(classf);
        }


        const classes = await YogaClass.aggregate(pipeline)

        res.status(201).json({
            message:"FilterClasses",
            classes
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            error:error
          })
    }
}

exports.getClassDetails = async(req,res,next)=>{
    try {
        const id = req.params.id;
        const classDetails = await YogaClass.findById(id);
        if(!classDetails){
            return res.status(401).json({
                success:false,
                message:"Class not Found"
            })
        }

        res.json({
            success:true,
            classDetails
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            error:error
          })
    }
}