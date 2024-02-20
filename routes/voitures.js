// routes/voitures.js

const express = require('express');
const router = express.Router();

let voitures = [
  { id: 1, name: "clio" },
  { id: 2, name: "megane" },
  { id: 3, name: "range" }
];

// Endpoint pour obtenir la liste de toutes les voitures
router.get('/', (req, res) => {
  res.json(voitures);
});

// Endpoint pour obtenir une voiture par son id
router.get('/:id', (req, res) => {
  const voitureId = parseInt(req.params.id);
  const voiture = voitures.find(v => v.id === voitureId);

  if (voiture) {
    res.json(voiture);
  } else {
    res.status(404).json({ message: 'Voiture non trouvée.' });
  }
});

// Endpoint pour ajouter une nouvelle voiture
router.post('/', (req, res) => {
  const { id, name } = req.body;

  if (!id || !name) {
    return res.status(400).json({ error: 'Les champs id et name sont requis.' });
  }

  const nouvelleVoiture = { id, name };
  voitures.push(nouvelleVoiture);

  res.json({ message: 'Voiture ajoutée avec succès.', voiture: nouvelleVoiture });
});

// Endpoint pour modifier une voiture par son id
router.put('/:id', (req, res) => {
  const voitureId = parseInt(req.params.id);
  const index = voitures.findIndex(v => v.id === voitureId);

  if (index !== -1) {
    const { name } = req.body;
    voitures[index].name = name;
    res.json({ message: 'Voiture modifiée avec succès.', voiture: voitures[index] });
  } else {
    res.status(404).json({ message: 'Voiture non trouvée.' });
  }
});

// Endpoint pour supprimer une voiture par son id
router.delete('/:id', (req, res) => {
  const voitureId = parseInt(req.params.id);
  const index = voitures.findIndex(v => v.id === voitureId);

  if (index !== -1) {
    const deletedVoiture = voitures.splice(index, 1);
    res.json({ message: 'Voiture supprimée avec succès.', voiture: deletedVoiture[0] });
  } else {
    res.status(404).json({ message: 'Voiture non trouvée.' });
  }
});

module.exports = router;
