const express = require ('express')
const router = express.Router();

const {
    getAllTasks ,
    createTask , 
    getTask , 
    updateTask, 
    deleteTask} = require('../controllers/tasks')

// root route +  a get request where I mannually pass on to controller.
// router.route('/').get((req, res) =>{
//     res.send('all items')
// })

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


module.exports = router ;