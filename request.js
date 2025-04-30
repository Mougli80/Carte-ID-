const axios = require('axios');
const fs = require('fs');
const path = require('path');


const data = {
    nom: 'Doe',
    prenom: 'John',
    dateNaissance: '01/01/1990',
    sexe: 'M',
    taille: '180cm',
};

axios.post('http://localhost:3000/api/fill-image', data, { responseType: 'arraybuffer' })
    .then(response => {

        fs.writeFileSync(path.join(__dirname, 'result.png'), response.data);
        console.log('Image sauvegardée sous result.png');
    })
    .catch(error => {
        console.error('Erreur lors de la requête:', error.message);
    });
