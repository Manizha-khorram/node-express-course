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

/*If I want to use put() method :
1.add it's configuration like update() method to task.js controller and export it.
2.add it to route folder like other methods require it, then put it in router.route code and cjain it put(editTask).
3. the difference between put and update is that put replace the objects and delete all other objects which isnot mentioned.
the completed: {
        type : Boolean,
        default : false, => this one should be deleted when using put
*/