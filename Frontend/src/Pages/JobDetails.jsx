import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import GoldenDustBackground from '../components/GoldenDustBackground';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showApply, setShowApply] = useState(false);
  const [appForm, setAppForm] = useState({ name: '', email: '', phone: '', resumeLink: '', coverLetter: '' });
  const [appSubmitting, setAppSubmitting] = useState(false);
  const [appMessage, setAppMessage] = useState('');

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/jobs/jobs/${id}`);
        if (!res.ok) throw new Error('Job not found');
        const data = await res.json();
        setJob(data);
      } catch (err) {
        setError('Failed to fetch job details');
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  const handleAppChange = (e) => {
    const { name, value } = e.target;
    setAppForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAppSubmit = async (e) => {
    e.preventDefault();
    setAppSubmitting(true);
    setAppMessage('');
    try {
      const res = await fetch(`http://localhost:5000/api/jobs/${id}/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appForm),
      });
      if (!res.ok) throw new Error('Failed to submit application');
      setAppMessage('Application submitted successfully!');
      setAppForm({ name: '', email: '', phone: '', resumeLink: '', coverLetter: '' });
      setTimeout(() => setShowApply(false), 1500);
    } catch (err) {
      setAppMessage('Error: ' + err.message);
    } finally {
      setAppSubmitting(false);
    }
  };

  if (loading) return <div className="text-center py-10">Loading job details...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;
  if (!job) return null;

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-x-hidden">
      <GoldenDustBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-blue-950/90 to-black/95 backdrop-blur-2xl z-0" />
      {/* Back Button */}
      <div className="relative z-20 w-full max-w-6xl mx-auto mt-10 px-4 flex justify-start">
        <Link to="/careers" className="text-blue-400 hover:underline flex items-center gap-2 text-base mt-8 md:mt-0 font-semibold bg-blue-900/30 px-4 py-2 rounded-full shadow-md backdrop-blur-md">
          <span className="text-xl">&larr;</span> Back to Jobs
        </Link>
      </div>
      <div className="relative mt-6 z-10 w-full max-w-6xl py-10 sm:py-16 px-1 sm:px-4 md:px-8 flex flex-col items-center animate-fade-in">
        <div className="w-full flex flex-col lg:flex-row gap-10 items-start justify-center bg-[#181f2a]/80 rounded-3xl shadow-2xl border border-blue-900/30 p-6 sm:p-10">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 flex flex-col items-center mb-8 lg:mb-0">
            <img src={job.image} alt={job.title} className="w-full max-h-[400px] object-cover rounded-2xl shadow-lg border border-blue-900/30" />
          </div>
          {/* Details Side */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 items-center lg:items-start">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#D4B678] via-blue-400 to-[#D4B678] animate-shimmer w-full text-center lg:text-left">
              {job.title}
            </h2>
            <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start mb-4 w-full">
              <span className="text-blue-300 font-bold bg-blue-900/30 px-4 py-1 rounded-full text-base">Salary: ₹{job.salary}</span>
              <span className="text-gray-400 text-sm">Posted on: {new Date(job.createdAt).toLocaleDateString()}</span>
            </div>
            <p className="text-gray-300 text-lg mb-6 whitespace-pre-line w-full max-w-2xl text-center lg:text-left">{job.description}</p>
            <button
              onClick={() => setShowApply(true)}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-[#D4B678] hover:from-[#D4B678] hover:to-blue-500 text-white px-10 py-4 rounded-xl font-bold shadow-md transition-all duration-200 mt-2 text-xl mx-auto lg:mx-0"
            >
              Apply for this Job
            </button>
          </div>
        </div>
      </div>
      {/* Application Modal */}
      {showApply && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fade-in px-2">
          <form
            onSubmit={handleAppSubmit}
            className="bg-[#181f2a] rounded-2xl shadow-2xl border border-blue-900/40 p-4 sm:p-8 w-full max-w-xs sm:max-w-md relative animate-fade-in flex flex-col"
          >
            <button
              type="button"
              onClick={() => setShowApply(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-400 text-2xl font-bold focus:outline-none"
              aria-label="Close application form"
            >
              &times;
            </button>
            <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-4 text-center">Apply for {job.title}</h3>
            <div className="mb-3">
              <label className="block text-gray-300 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={appForm.name}
                onChange={handleAppChange}
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-blue-900/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
                required
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={appForm.email}
                onChange={handleAppChange}
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-blue-900/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
                required
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-300 mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={appForm.phone}
                onChange={handleAppChange}
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-blue-900/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
                required
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-300 mb-1">Resume Link (Google Drive, etc.)</label>
              <input
                type="url"
                name="resumeLink"
                value={appForm.resumeLink}
                onChange={handleAppChange}
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-blue-900/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-300 mb-1">Cover Letter</label>
              <textarea
                name="coverLetter"
                value={appForm.coverLetter}
                onChange={handleAppChange}
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-blue-900/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
                rows={4}
                required
              />
            </div>
            {appMessage && <div className={`mb-3 text-center ${appMessage.startsWith('Error') ? 'text-red-400' : 'text-green-400'}`}>{appMessage}</div>}
            <button
              type="submit"
              disabled={appSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-[#D4B678] hover:from-[#D4B678] hover:to-blue-500 text-white py-2 rounded-lg font-semibold transition-all duration-200 disabled:opacity-60 text-xs sm:text-base mt-2"
            >
              {appSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
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

export default JobDetails; 