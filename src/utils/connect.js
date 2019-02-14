const apiBase = 'http://desafioonline.webmotors.com.br'

export async function Request (route){
    return await fetch(apiBase+route).then(resp =>resp.json())
}

export async function RequestModel(route,options = []){
    let array = []
    for await (let maker of options){
        await Request(route+maker.ID.toString()).then(resp => array.push(resp))
    }
    return array
}
export async function RequestVersion(route,options = []){
    let versions = []
    for await (let models of options){
        for await (let model of models){
            await Request(route+model.ID.toString()).then(resp => versions.push(resp))
        }
    }
    return versions
}

export async function RequestAllVehicles(route,options = []){
    let vehicles = []
    for await (let page of options){
        await Request(route+page).then(resp => vehicles.push(resp))
    }
    return vehicles
}


