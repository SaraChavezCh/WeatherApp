                        // res.data...
const changeBackgrounds = (weather) => {

    document.getElementById('bg').className = '';
    document.querySelector('body').className = '';
        //res.data...
    switch(weather){
        case 'Clouds':
            document.getElementById('bg').classList.add('Clouds');
            document.querySelector('body').classList.add('CloudsBody');
            break;
        case  'Rain':
            document.getElementById('bg').classList.add('Rain');
            document.querySelector('body').classList.add('RainBody');
            break;
        case 'Snow':
            document.getElementById('bg').classList.add('Snow');
            document.querySelector('body').classList.add('SnowBody');
            break;
        case 'Clear':
            document.getElementById('bg').classList.add('Clear');
            document.querySelector('body').classList.add('ClearBody');
            break;
        case 'Thunderstorm':
            document.getElementById('bg').classList.add('Thunderstorm');
            document.querySelector('body').classList.add('ThunderstormBody');
            break;
           

    }
}
export default changeBackgrounds;


