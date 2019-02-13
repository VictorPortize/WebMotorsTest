const apiBase = 'http://desafioonline.webmotors.com.br'

export async function Request (route, options){
    return await fetch(apiBase+route).then(resp =>resp.json())
}

export async function RequestModel(route,options = null){
    return await Request(route+options)
}
export async function RequestVersion(route,options = null){
    return await Request(route+options)
}

export async function RequestAllVehicles(route,options = null){
   return new Promise((resolved,reject) =>{
    let page1 = Request(route+options[0])
    let page2 = Request(route+options[1])
    let page3 = Request(route+options[2]).then(() => {
     retorna(page1,page2,page3)
    })
    retorna = (page1,page2,page3) => {
     resolved(pages ={
         page1,
         page2,
         page3
     })
    }
   })
}


