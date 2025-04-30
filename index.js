const express = require('express');
const { createCanvas, loadImage, registerFont } = require('canvas');
const app = express();
const port = 3000;

app.use(express.json());




app.post('/api/fill-image', async (req, res) => {
    const { nom, prenom, dateNaissance, sexe, taille } = req.body;

    try {
        const image = await loadImage('./image.png');
        const canvas = createCanvas(image.width, image.height);
        const ctx = canvas.getContext('2d');

        ctx.drawImage(image, 0, 0, image.width, image.height);

        ctx.font = '30px Alice';
        ctx.fillStyle = 'white';


        ctx.fillText(`${nom}`, 203.57, 135);
        ctx.fillText(`${prenom}`, 335.71, 135);

        ctx.font = '20px Alice';
        ctx.fillStyle = 'white';

        ctx.fillText(`${dateNaissance}`, 195, 205);
        ctx.fillText(`${sexe}`, 330.71, 205);
        ctx.fillText(`${taille}`, 407.14, 205);

        ctx.font = '30px Brittany Signature';
        ctx.fillStyle = '#daa14c';

        ctx.fillText(`${nom}`, 203.57, 270);
        ctx.fillText(`${prenom}`, 335.71, 270);


        const buffer = canvas.toBuffer('image/png');
        res.set('Content-Type', 'image/png');
        res.send(buffer);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur lors de la création de l\'image');
    }
});

app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});
