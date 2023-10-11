const musique = require('../models/musiqueModel');

// get
exports.listAllmusiques = async(req, res) => {
   try {
    const musiques = await musique.find({musique_id: req.params.id_musique});
    res.status(200).json(musiques);
   } 
   catch (error) {
    res.status(500);
    console.log(error);
    res.json({message: 'Erreur serveur'})
   }
}

// post
exports.createAMusique = async (req,res) => {

  try {
    await musique.findById(req.params.id_musique);
    const newmusique = new musique({...req.body, musique_id: req.params.id_musique});
        
    try {
      const musiques = await newmusique.save();
      res.status(201);
      res.json({message: 'Musique ajoutée'});
    } 
    catch (error) {
      res.status(500);
      console.log(error);
      res.json({message: 'Erreur serveur(db)'});
    }
  } 
  catch (error) {
    res.status(500);
    console.log(error);
    res.json({message: 'Erreur serveur (musique inexistante)'});
  }
}


// put
exports.updateAMusique = async (req, res) => {
  try {
    const musique = await musique.findByIdAndUpdate(req.params.id_musique, req.body, {new: true});
    res.status(200);
    res.json(musique);
    
  } catch (error) {
    res.status(500);
    console.log(error);
    res.status(500)
    res.json({ message: 'Erreur serveur' })
  }
}



// delete
exports.deleteAMusique = async (req, res) => {
    try {
        const existingmusique = await musique.findById(req.params.id_musique);
        if (!existingmusique) {
            res.status(500);
            res.json({ message: 'musique not found' });
        } else {
       
            await musique.findByIdAndDelete(req.params.id_musique);
            res.status(200);
            res.json({message: `musique supprimé`});
        }
    } catch (error) {
        res.status(500);
        console.error(error);
        res.json({ message: 'Cannot delete', error: error.message });
    }
}


//  get A musique
exports.getAMusique = async (req, res) => {

   try {
const existingmusique = await musique.findById(req.params.id_musique);
if (!exisitingmusique) {
  res.status(500);
  res.json({message: `la musique n'existe pas`})
}
else {
    await musique.findByIdAndDelete(req.params.id_musique);
  res.status(200);
  res.json(req.params.id_musique)
}
  }
  catch (error) {
    res.status(500);
    console.log(error);
    res.json({message: `La musique n'existe plus`})
   }
}

exports.listAllMusicVote = async(req, res) => {

   try {
    const musiques = await musique.find({musique_id: req.params.id_musique});
    const votes = await vote.find({vote_id: req.params.id_vote});
    res.status(200).json(musiques);
   } 
   catch (error) {
    res.status(500);
    console.log(error);
    res.json({message: 'Erreur serveur'})
   }
}