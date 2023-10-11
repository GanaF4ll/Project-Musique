const vote = require('../models/voteModel');
const musique = require('../models/musiqueModel');

// get
exports.listAllVotes = async(req, res) => {

   try {
    const votes = await vote.find({musique_id: req.params.id_musique});
    res.status(200).json(votes);
   } 
   catch (error) {
    res.status(500);
    console.log(error);
    res.json({message: 'Erreur serveur'})
   }
}

// // post
// exports.createAvote = async (req,res) => {

//   try {
//     await musique.findById(req.params.id_musique);
//     const newvote = new vote({...req.body, musique_id: req.params.id_musique});
        
//     try {
//       const votes = await newvote.save();
//       res.status(201);
//       res.json({message: 'Message crée'});
//     } 
//     catch (error) {
//       res.status(500);
//       console.log(error);
//       res.json({message: 'Erreur serveur(db)'});
//     }
//   } 
//   catch (error) {
//     res.status(500);
//     console.log(error);
//     res.json({message: 'Erreur serveur (musique inexistant)'});
//   }
// }


// // put
// exports.updateAvote = async (req, res) => {
//   try {
//     const vote = await vote.findByIdAndUpdate(req.params.id_vote, req.body, {new: true});
//     res.status(200);
//     res.json(vote);
    
//   } catch (error) {
//     res.status(500);
//     console.log(error);
//     res.status(500)
//     res.json({ message: 'Erreur serveur' })
//   }
// }



// // delete
// exports.deleteAvote = async (req, res) => {
//     try {
//         const existingvote = await vote.findById(req.params.id_vote);
//         if (!existingvote) {
//             res.status(500);
//             res.json({ message: 'vote not found' });
//         } else {
       
//             await vote.findByIdAndDelete(req.params.id_vote);
//             res.status(200);
//             res.json({message: `message supprimé`});
//         }
//     } catch (error) {
//         res.status(500);
//         console.error(error);
//         res.json({ message: 'Cannot delete', error: error.message });
//     }
// }


// //  get A vote
// exports.getAvote = async (req, res) => {

//    try {
// const existingvote = await vote.findById(req.params.id_vote);
// if (!exisitingvote) {
//   res.status(500);
//   res.json({message: `le voteaire n'existe pas`})
// }
// else {
//     await vote.findByIdAndDelete(req.params.id_vote);
//   res.status(200);
//   res.json(req.params.id_vote)
// }
//   }
//   catch (error) {
//     res.status(500);
//     console.log(error);
//     res.json({message: `Le voteaire n'existe plus`})
//    }
// }
