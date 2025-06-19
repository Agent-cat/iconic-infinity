const JobApplication = require('../models/jobApplication.model');

// Create a new job application
exports.createApplication = async (req, res) => {
  try {
    const { name, email, phone, resumeLink, coverLetter } = req.body;
    const { jobId } = req.params;
    const application = new JobApplication({
      jobId,
      name,
      email,
      phone,
      resumeLink,
      coverLetter,
    });
    await application.save();
    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all applications (optionally filter by jobId)
exports.getApplications = async (req, res) => {
  try {
    const { jobId } = req.query;
    const filter = jobId ? { jobId } : {};
    const applications = await JobApplication.find(filter).sort({ createdAt: -1 }).populate('jobId', 'title');
    res.json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 