export default function ConstructObject(id,obj1,obj2,obj3){
    let object = {}
    for (let obj of obj1){
        if (obj.ID == id){
            Object.assign(object,obj)
        }
    }
    let array = []
    for (let objs of obj2){
        for(let obj of objs){
            if(obj.MakeID == object.ID){
                array.push(obj)
            }
        }
    }
    Object.assign(object,{child:array})
    for (let i of object.child){
        i.versions = []
        for(let array of [...obj3]){
            for(let version of array){
                if(version.ModelID == i.ID){
                    i.versions.push(version)
                }
            }
        }
    }
    console.log(object)
}