const express = require('express');

const cors = require('cors');

const api = express();

api.use(cors());

const HOST = 'localhost';
const PORT = '7000';



let votos = {
    caes: 0,
    gatos: 0,
    total: 0
}



api.get('/votacao', (req, res) => {
    res.status(200).send(votos);
});

const validacao = (voto) => {

    if (voto == 1 || voto == 2 || voto == 3) {
        return true;
    } else {
        return false;
    }

}

api.put('/votacao/:voto', (req, res) => {
    const voto = req.params.voto;
    if (validacao(voto)) {
        votos.total++
        if (voto == '1') {
            votos.caes++
            res.status(200).send(votos);
        }else if (voto == '2') {
            votos.gatos++;
            res.status(200).send(votos);
        }else if (voto == '3') {
            votos.gatos = 0;
            votos.caes = 0;
            votos.total = 0;
            res.status(200).send(votos);
        }
    }else{
        res.send(`Parametro incorreto`);
    }
});

api.listen(PORT, () => {
    console.log(`A aplicação está sendo executada em http://${HOST}:${PORT}`);
});
