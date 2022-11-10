const express = require('express');
const { getPeople } = require('../controllers/people');
const router = express.Router();
const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../controllers/people')

//1.first flavor

// router.get('/' , getPeople)

// router.post('/' , createPerson )
// router.post('/postman' ,createPersonPostman  )
// router.put('/:id' , updatePerson )
// router.delete('/:id' , deletePerson )


//2.Second flavor
router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)   
router.route('/:id').put(updatePerson).delete(deletePerson)
module.exports = router;