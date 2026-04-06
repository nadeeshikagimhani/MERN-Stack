//const getAllNotes = (req, res) => {
//    res.status(200).send('This is my frist server API, Thanks')
//};

export function getAllNotes (req, res) {
  res.status(200).send('This is my frist server API, Thanks')
};

export function createNote (req, res) {
    res.status(201).json({message: 'Note createsd successfully!'})
};

export function updateNote (req, res) {
    res.status(200).json({message: 'Note updated successfully!'})
};

export function deleteNote (req, res) {
    res.status(201).json({message: 'Note deleted successfully!'})
};