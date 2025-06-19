import React, { useEffect, useState } from 'react';
import GoldenDustBackground from '../components/GoldenDustBackground';

const initialJob = { title: '', description: '', salary: '', image: '' };

const AdminPanel = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState('create'); // 'create' or 'edit'
  const [currentJob, setCurrentJob] = useState(initialJob);
  const [editId, setEditId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [showApplications, setShowApplications] = useState(false);
  const [applications, setApplications] = useState([]);
  const [applicationsLoading, setApplicationsLoading] = useState(false);
  const [applicationsError, setApplicationsError] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  // Fetch jobs
  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/jobs/jobs');
      const data = await res.json();
      setJobs(data);
    } catch (err) {
      setError('Failed to fetch jobs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Open form for create or edit
  const openForm = (type, job = initialJob, id = null) => {
    setFormType(type);
    setCurrentJob(job);
    setEditId(id);
    setShowForm(true);
  };

  // Handle form input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentJob((prev) => ({ ...prev, [name]: value }));
  };

  // Create or update job
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const method = formType === 'create' ? 'POST' : 'PUT';
      const url = formType === 'create'
        ? 'http://localhost:5000/api/jobs/jobs'
        : `http://localhost:5000/api/jobs/jobs/${editId}`;
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...currentJob,
          salary: Number(currentJob.salary),
        }),
      });
      if (!res.ok) throw new Error('Failed to save job');
      setShowForm(false);
      setCurrentJob(initialJob);
      setEditId(null);
      fetchJobs();
    } catch (err) {
      alert('Error: ' + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  // Delete job
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this job?')) return;
    try {
      const res = await fetch(`http://localhost:5000/api/jobs/jobs/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Failed to delete job');
      fetchJobs();
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  // Fetch applications for a job
  const fetchApplications = async (jobId, jobTitle) => {
    setApplicationsLoading(true);
    setApplicationsError(null);
    setSelectedJob({ id: jobId, title: jobTitle });
    setShowApplications(true);
    try {
      const res = await fetch(`http://localhost:5000/api/applications?jobId=${jobId}`);
      const data = await res.json();
      setApplications(data);
    } catch (err) {
      setApplicationsError('Failed to fetch applications');
    } finally {
      setApplicationsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-x-hidden">
      <GoldenDustBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-blue-950/90 to-black/95 backdrop-blur-2xl z-0" />
      <div className="relative z-10 w-full min-h-screen py-8 sm:py-16 px-1 sm:px-4 md:px-8 flex flex-col gap-8 sm:gap-12 animate-fade-in">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#D4B678] via-blue-400 to-[#D4B678] animate-shimmer">Admin Panel</h1>
        <div className="w-full flex flex-col gap-8 sm:gap-10">
          {/* Jobs Section */}
          <section className="w-full bg-[#181f2a]/90 rounded-2xl shadow-2xl border border-[#D4B678]/20 p-3 sm:p-6 md:p-8 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 border-b border-blue-900/30 pb-3 sm:pb-4 gap-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-300 tracking-wide">Jobs</h2>
              <button
                onClick={() => openForm('create')}
                className="w-full sm:w-auto bg-gradient-to-r from-[#D4B678] to-blue-500 hover:from-blue-500 hover:to-[#D4B678] text-white px-4 sm:px-6 py-2 rounded-lg font-semibold shadow-md transition-all duration-200"
              >
                + Add Job
              </button>
            </div>
            {loading ? (
              <div className="text-center py-8 text-gray-400">Loading jobs...</div>
            ) : error ? (
              <div className="text-center py-8 text-red-400">{error}</div>
            ) : jobs.length === 0 ? (
              <div className="text-center py-8 text-gray-400">No jobs found.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-[600px] w-full text-xs sm:text-sm text-left text-gray-300">
                  <thead>
                    <tr className="bg-blue-900/40">
                      <th className="px-2 sm:px-4 py-2">Image</th>
                      <th className="px-2 sm:px-4 py-2">Title</th>
                      <th className="px-2 sm:px-4 py-2">Salary</th>
                      <th className="px-2 sm:px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((job) => (
                      <tr key={job._id} className="border-b border-blue-900/20 hover:bg-blue-900/10 transition-all duration-200">
                        <td className="px-2 sm:px-4 py-2">
                          <img src={job.image} alt={job.title} className="w-16 h-12 sm:w-20 sm:h-14 object-cover rounded-lg border border-blue-900/30" />
                        </td>
                        <td className="px-2 sm:px-4 py-2 font-semibold max-w-[120px] truncate">{job.title}</td>
                        <td className="px-2 sm:px-4 py-2">₹{job.salary}</td>
                        <td className="px-2 sm:px-4 py-2 flex flex-col sm:flex-row gap-2">
                          <button
                            onClick={() => openForm('edit', job, job._id)}
                            className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-xs font-medium transition-all duration-200"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(job._id)}
                            className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg text-xs font-medium transition-all duration-200"
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => fetchApplications(job._id, job.title)}
                            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xs font-medium transition-all duration-200"
                          >
                            View Applications
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
          {/* Future sections can be added here, each as a <section> */}
        </div>
      </div>
      {/* Job Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 animate-fade-in px-2">
          <form
            onSubmit={handleSubmit}
            className="bg-[#181f2a] rounded-xl shadow-lg border border-blue-900/30 p-4 sm:p-8 w-full max-w-xs sm:max-w-md relative animate-fade-in"
          >
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-400 text-xl"
            >
              &times;
            </button>
            <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-4">{formType === 'create' ? 'Add New Job' : 'Edit Job'}</h3>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Image URL</label>
              <input
                type="text"
                name="image"
                value={currentJob.image}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-blue-900/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={currentJob.title}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-blue-900/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Description</label>
              <textarea
                name="description"
                value={currentJob.description}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-blue-900/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
                rows={4}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 mb-1">Salary (₹)</label>
              <input
                type="number"
                name="salary"
                value={currentJob.salary}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-blue-900/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
                required
                min={0}
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-gradient-to-r from-blue-500 to-[#D4B678] hover:from-[#D4B678] hover:to-blue-500 text-white py-2 rounded-lg font-semibold transition-all duration-200 disabled:opacity-60 text-xs sm:text-base"
            >
              {submitting ? 'Saving...' : (formType === 'create' ? 'Add Job' : 'Update Job')}
            </button>
          </form>
        </div>
      )}
      {/* Applications Modal */}
      {showApplications && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 animate-fade-in px-2">
          <div className="bg-[#181f2a] rounded-xl shadow-lg border border-blue-900/30 p-4 sm:p-8 w-full max-w-xs sm:max-w-2xl relative animate-fade-in overflow-y-auto max-h-[90vh]">
            <button
              type="button"
              onClick={() => setShowApplications(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-400 text-xl"
            >
              &times;
            </button>
            <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-4">Applications for {selectedJob?.title}</h3>
            {applicationsLoading ? (
              <div className="text-center py-8 text-gray-400">Loading applications...</div>
            ) : applicationsError ? (
              <div className="text-center py-8 text-red-400">{applicationsError}</div>
            ) : applications.length === 0 ? (
              <div className="text-center py-8 text-gray-400">No applications found.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-[600px] w-full text-xs sm:text-sm text-left text-gray-300">
                  <thead>
                    <tr className="bg-blue-900/40">
                      <th className="px-2 sm:px-4 py-2">Name</th>
                      <th className="px-2 sm:px-4 py-2">Email</th>
                      <th className="px-2 sm:px-4 py-2">Phone</th>
                      <th className="px-2 sm:px-4 py-2">Resume</th>
                      <th className="px-2 sm:px-4 py-2">Cover Letter</th>
                      <th className="px-2 sm:px-4 py-2">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((app) => (
                      <tr key={app._id} className="border-b border-blue-900/20 hover:bg-blue-900/10 transition-all duration-200">
                        <td className="px-2 sm:px-4 py-2 font-semibold max-w-[100px] truncate">{app.name}</td>
                        <td className="px-2 sm:px-4 py-2 max-w-[120px] truncate">{app.email}</td>
                        <td className="px-2 sm:px-4 py-2">{app.phone}</td>
                        <td className="px-2 sm:px-4 py-2">
                          <a href={app.resumeLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Resume</a>
                        </td>
                        <td className="px-2 sm:px-4 py-2 max-w-[120px] truncate" title={app.coverLetter}>{app.coverLetter}</td>
                        <td className="px-2 sm:px-4 py-2">{new Date(app.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
      <style>{`
        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 2.5s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .animate-fade-in {
          animation: fadeIn 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
};

export default AdminPanel; 