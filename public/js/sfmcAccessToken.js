// Configura require.js con il percorso di Axios
require.config({
  paths: {
    axios: '../vendor/axios/dist/axios.min'
  }
});

// Ora puoi utilizzare Axios come dipendenza
require(['axios'], function (axios) {
  // URL per ottenere il token
  const apiUrl = 'https://mcslcv42qhfcyrj6snc3y3zvm-c4.auth.marketingcloudapis.com/v2/token';

  // Dati da inviare nella richiesta POST
  const datiDaInviare = {
    grant_type: "client_credentials",
    client_id: "fxw952jq0v31b5syhra79vv5",
    client_secret: "TWxYWlBzb9lsInroD6cJYNYt",
    account_id: "523021578"
  };

  // Esegui la richiesta POST con Axios
  axios.post(apiUrl, datiDaInviare)
    .then(response => {
      // Gestisci la risposta qui
      console.log('Risposta:', response.data);
    })
    .catch(error => {
      // Gestisci gli errori qui
      console.error('Errore nella richiesta POST:', error);
    });
});
