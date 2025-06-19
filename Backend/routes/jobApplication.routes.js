const express = require('express');
const router = express.Router();
const jobApplicationController = require('../controllers/jobApplication.controller');

// Apply for a job
router.post('/jobs/:jobId/apply', jobApplicationController.createApplication);
// Get all applications (admin, or filter by jobId)
router.get('/applications', jobApplicationController.getApplications);

module.exports = router; 