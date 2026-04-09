//const getAllNotes = (req, res) => {
//    res.status(200).send('This is my frist server API, Thanks')
//};

import Note from '../models/Note.js'


// GET NOTES
export async function getAllNotes (req, res) {
  try{
    const notes = await Note.find().sort({createdAt:-1}); //newest first
    res.status(200).json(notes)
  }
  catch(error){
    console.error("Errpr in getAllNotes controller", error)
    res.status(500).json({message: "internerl server error"})

  }
};

// GET SINGLE NOTE
export async function getNoteByID (req, res){
    try{
        const note = await Note.findById(req.params.id)
        if(!note) return res.status(404).json({message: "Note not found"})
        res.status(200).json(note)
      }
      catch(error){
        console.error("Errpr in getNote controller", error)
        res.status(500).json({message: "internerl server error"})
    
      }
}


// ADD NOTES
export async function createNote (req, res) {
    try{
        const {title,content} = req.body
        const note = new Note({title, content})

        // instead of successful message we get added note
        const savedNote = await note.save()
        res.status(201).json(savedNote)
    }
      catch(error){
        console.error("Errpr in createNotes controller", error)
        res.status(500).json({message: "internerl server error"})
      }
};


// UPDATE NOTE
export async function updateNote (req, res) {
    try{
        const {title,content} = req.body
        const updatedNotes = await Note.findByIdAndUpdate(req.params.id,{title, content},
            {
                new:true
            }
        );
        if(!updatedNotes) return res.status(404).json({message: "Note not found"})

        res.status(200).json({message: "Note updated successfully"})

    }
      catch(error){
        console.error("Error in updateNotes controller", error)
        res.status(500).json({message: "internerl server error"})
      }
};


// DELETE NOTE
export async function deleteNote (req, res) {
    try{
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deleteNote) return res.status(404).json({message: "Note not found"})

        res.status(200).json({message: "Note deleted successfully"})

    }
      catch(error){
        console.error("Error in deleteNotes controller", error)
        res.status(500).json({message: "internerl server error"})
      }
};

