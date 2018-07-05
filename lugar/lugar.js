const axios = require('axios')

const getLugarLatLng = async(direccion) => {

    let encodedURL = encodeURI(direccion)

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedURL }&key=AIzaSyBTZ-Nn2IAzBwxvk__7LoueJu7odw0L2-c 
    `)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados paa la ciudad ${ direccion }`)
    }



    let location = resp.data.results[0]
    let coors = location.geometry.location


    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}