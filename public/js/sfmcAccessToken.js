require.config({
  paths: {
    nodefetch: '../vendor/node-fetch/src/index'
  }
});

// Definisci l'URL della tua API
const apiUrl = 'https://mcslcv42qhfcyrj6snc3y3zvm-c4.auth.marketingcloudapis.com/v2/token';

// Dati da inviare nella richiesta POST
const postData = {
  grant_type: "client_credentials",
  client_id: "fxw952jq0v31b5syhra79vv5",
  client_secret: "TWxYWlBzb9lsInroD6cJYNYt",
  account_id: "523021578"
};

// Opzioni della richiesta
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(postData),
};

// Effettua la chiamata POST con Node-fetch
fetch(apiUrl, requestOptions)
  .then(response => response.json())
  .then(data => {
    console.log('Risposta dalla API:', data);
  })
  .catch(error => {
    console.error('Errore durante la chiamata POST:', error);
  });
