const musique = require('../models/musiqueModel');


//  get
exports.listAllMusiques = async(req, res) => {

   try {
    const musiques = await musique.find({});
    res.status(200);
    res.json(musiques);
   } catch (error) {
    res.status(500);
    console.log(error);
    res.json({message: 'Erreur serveur'})
   }
}

// post
exports.createAMusique = async (req,res) => {
const newMusique = new musique(req.body);

    try {
    const musiques = await newMusique.save();
    res.status(201);
    res.json(musique);
   } catch (error) {
    res.status(500);
    console.log(error);
    res.json({message: 'Erreur serveur'})
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
   await musique.findByIdAndDelete(req.params.id_musique);
    res.status(200);
    res.json({message: 'Article Supprimé'});
   } catch (error) {
    res.status(500);
    console.log(error);
    res.json({message: 'Cannot delete'})
   }
}

// get A musique
exports.getAMusique = async (req, res) => {

   try {
   await musique.findById(req.params.id_musique);
    res.status(200);
    res.json({message: 'saved'});
   } catch (error) {
    res.status(500);
    console.log(error);
    res.json({message: 'Cannot save'})
   }
}
