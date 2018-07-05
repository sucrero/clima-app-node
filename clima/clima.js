const axios = require('axios')

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=7a1cb05463a8a6f109104266060490b0`)

    let temp = resp.data.main.temp
        //console.log(resp.data.main);
    return temp
}


module.exports = {
    getClima
}