const axios = require('axios');

const apiUrl = 'https://mcslcv42qhfcyrj6snc3y3zvm-c4.auth.marketingcloudapis.com/v2/token';

const datiDaInviare = {
  grant_type: "client_credentials",
  client_id: "fxw952jq0v31b5syhra79vv5",
  client_secret: "TWxYWlBzb9lsInroD6cJYNYt",
  account_id: "523021578"
};

axios.post(apiUrl, datiDaInviare)
  .then(response => {
    console.log('Risposta:', response.data);
  })
  .catch(error => {
    console.error('Errore nella richiesta POST:', error);
  });
