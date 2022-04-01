const router = require('express').Router()
const { Patient, Appointments, MedicalHistory, Diagnose } = require('../model')

// get all patients
router.get('/patients', async (req, res) => {
  try {
    let patients = await Patient.findAll({ include: [{ model: Appointments }, { model: MedicalHistory }]
})
    console.log(patients)
    res.json(patients)
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong, please try again.', error: err})
  }
})

// get one patient
router.get('/patients/:id', async ({ params: { id } }, res) => {
  try {
    let patient = await Patient.findOne({ where: { id }, include: [{ model: Appointments }, { model: MedicalHistory }] })
    console.log(patient)
    res.json(patient)
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong, please try again.' })
  }
})

// create a patient
router.post('/patients', async ({ body }, res) => {
  try {
    const patient = await Patient.create(body)
    res.status(200).json(patient);
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong, please try again.' });
  }
});

//delete a patient
router.delete('/patients/:id', async ({ body, params: { id } }, res) => {
  try {
    const patient = await Patient.destroy({
      where: { id }
    });
    
    if (!patient) {
      res.status(404).json({ message: 'No patient found with this id.' });
      return;
    }

    res.status(200).json({ message: 'Patient has been deleted!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;