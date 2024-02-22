const container = document.querySelector('.container');
const pesquisa = document.querySelector('.pesquisa');
const wBox = document.querySelector('.wbox');
const detalhes = document.querySelector('.detalhes');
const erro404 = document.querySelector('.erro');


function reset() {
    document.getElementById('loc').value=''
}

function search() {


    const APIKey = `31882d1eb8db386f4d34d3222ba308c2`;
    const city = document.querySelector('#loc').value;

    if (city == '')
        return;


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`)
        .then(response => response.json()).then(json => {

            if (json.cod == '404') {
                container.style.height = '600px';
                wBox.style.display = 'none';
                detalhes.style.display = 'none';
                erro404.style.display = 'block';
                erro404.classList.add('fadeIn');
                return;
            }

            erro404.style.display = 'none';
            erro404.classList.remove('fadeIn');

            const imge = document.querySelector('.wbox img');
            const temp = document.querySelector('.wbox .temperatura');
            const humi = document.querySelector('.wbox .humidade span');
            const desc = document.querySelector('.wbox .descricao');
            const vent = document.querySelector('.wbox .vento span');

            switch (json.weather[0].main) {
                case 'Clear':
                    imge.src = 'imagens/clear.png';
                    break;

                case 'Rain':
                    imge.src = 'imagens/rain.png';
                    break;

                case 'Snow':
                    imge.src = 'imagens/snow.png';
                    break;

                case 'Clouds':
                    imge.src = 'imagens/cloud.png';
                    break;

                case 'Haze':
                    imge.src = 'imagens/mist.png';
                    break;

                default:
                    imge.src = '';

            }
            temp.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            desc.innerHTML = `${json.weather[0].description}`;
            humi.innerHTML = `${json.main.humidity}%`;
            vent.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            wBox.style.display = '';
            detalhes.style.display = '';
            wBox.classList.add('fadeIn');
            detalhes.classList.add('fadeIn');
            container.style.height = '690px';


        });


};

pesquisa.addEventListener('keydown', (enter) =>{

if(enter.key == "Enter")
{
    

    const APIKey = `31882d1eb8db386f4d34d3222ba308c2`;
    const city = document.querySelector('#loc').value;

    if (city == '')
        return;


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`)
        .then(response => response.json()).then(json => {

            if (json.cod == '404') {
                container.style.height = '600px';
                wBox.style.display = 'none';
                detalhes.style.display = 'none';
                erro404.style.display = 'block';
                erro404.classList.add('fadeIn');
                return;
            }

            erro404.style.display = 'none';
            erro404.classList.remove('fadeIn');

            const imge = document.querySelector('.wbox img');
            const temp = document.querySelector('.wbox .temperatura');
            const humi = document.querySelector('.wbox .humidade span');
            const desc = document.querySelector('.wbox .descricao');
            const vent = document.querySelector('.wbox .vento span');

            switch (json.weather[0].main) {
                case 'Clear':
                    imge.src = 'imagens/clear.png';
                    break;

                case 'Rain':
                    imge.src = 'imagens/rain.png';
                    break;

                case 'Snow':
                    imge.src = 'imagens/snow.png';
                    break;

                case 'Clouds':
                    imge.src = 'imagens/cloud.png';
                    break;

                case 'Haze':
                    imge.src = 'imagens/mist.png';
                    break;

                default:
                    imge.src = '';

            }
            temp.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            desc.innerHTML = `${json.weather[0].description}`;
            humi.innerHTML = `${json.main.humidity}%`;
            vent.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            wBox.style.display = '';
            detalhes.style.display = '';
            wBox.classList.add('fadeIn');
            detalhes.classList.add('fadeIn');
            container.style.height = '690px';


        });
    

}


});
