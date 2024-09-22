const categorySchema = require('../Model/Category');

// get
const getAll = async (req, res) => {
    try {
        const data = await categorySchema.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


// post 
const createCategory = async (req, res) => {

    try {
        const newData = await categorySchema(req.body);
        const saveData = newData.save();
        if (saveData) {
            res.status(200).json({ message: 'created successfully', newData });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

// update 
const updateCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedata = await categorySchema.findByIdAndUpdate(
            { _id: id },
            { $set: req.body }
        )
        if (updatedata) {
            res.status(200).json("updated successfully")
        }
    } catch (error) {
        res.json(error);
    }
}


// delete 
const deleteCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedata = await categorySchema.findByIdAndDelete(id);
        if (deletedata) {
            res.status(200).json('Deleted successfully...')
        }
    } catch (error) {
        res.json(error.message);
    }
}

// single update
const singleData = async (req, res) => {
    try {
        const data = await categorySchema.find(
            { _id: req.params.id }
        )
        if (data)
            res.status(200).json(data);

    } catch (error) {
      res.status(500).json(error);
    }
}


module.exports = {
    getAll,
    createCategory,
    updateCategory,
    deleteCategory,
    singleData
}