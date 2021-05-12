// Minha API KEY
var apiKey = {
    key: '11a28bd7-97cd-4325-bc07-2e1b2a75ac9f'
}

fetch ('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apiKey.key)
    .then((response) => {
        if(!response.ok) throw new Error('Erro ao executar a requisição, status' + response.status)
        return response.json();
    })
    .then((api) => {

           var texto = "";
           var texto2 = "";
                // Get 10 coins and symbols 
                for(let i = 0; i < 20; i++){



                //Show API information

                   texto = texto + `
                  
                    <div class="card">
                        <img class="card-img" src="assets/img/coin.jpg" alt="header" width="200" height="200" />
                        <div class="card-info">
                            <h1 class="card-title">${api.data[i].name}</h1>
                        <div class="card-icon">${api.data[i].id}</div>
                            <p class="card-author">${api.data[i].symbol}</p>
                            <p class="card-stats">${api.data[i].first_historical_data}</p> 
                        </div>
                    </div>
                 
                 
               
                    `;

                    document.getElementById("coins").innerHTML = texto;
                    
                }

    })
    .catch((error) => {
        console.error(error.message)
    })