export default function ConstructObject(id,obj1,obj2,obj3){
    let object = {}
    for (let obj of obj1){
        if (obj.ID == id){
            Object.assign(object,obj)
        }
    }
    let array = []
    for (let objs of obj2){
        if(objs.MakeID == object.ID){
            array.push(objs)
        }
    }
    Object.assign(object,{itens:array})
    for (let i of object.itens){
        i.versions = []
        for(let version of obj3){
            if(version.ModelID == i.ID){
                i.versions.push(version)
            }
        }
    }
    return object
}