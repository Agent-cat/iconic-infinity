import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GoldenDustBackground from '../components/GoldenDustBackground';

const Contact = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
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
    fetchJobs();
  }, []);

  if (loading) return <div className="text-center py-10">Loading jobs...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-x-hidden">
      <GoldenDustBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-blue-950/90 to-black/95 backdrop-blur-2xl z-0" />
      <div className="relative z-10 w-full min-h-screen py-16 px-1 sm:px-4 md:px-8 flex flex-col items-center animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#D4B678] via-blue-400 to-[#D4B678] animate-shimmer text-center w-full">Job Openings</h2>
        <p className="text-blue-200 text-center mb-10 text-base sm:text-lg max-w-2xl w-full">Explore exciting career opportunities at ICONIC Infinity Group. Click on a job to see more details and apply!</p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {jobs.map(job => (
            <Link to={`/jobs/${job._id}`} key={job._id} className="group block bg-[#181f2a]/90 rounded-2xl shadow-xl border border-[#D4B678]/20 hover:border-blue-500/50 hover:shadow-blue-500/30 transition-all duration-300 overflow-hidden relative">
              <div className="overflow-hidden h-48 rounded-t-2xl">
                <img src={job.image} alt={job.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-blue-400 mb-1 group-hover:text-[#D4B678] transition-colors duration-300">{job.title}</h3>
                <p className="text-gray-300 text-sm mb-2 line-clamp-2">{job.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-blue-300 font-bold bg-blue-900/30 px-3 py-1 rounded-full text-xs">Salary: ₹{job.salary}</span>
                  <span className="inline-block bg-gradient-to-r from-[#D4B678]/20 to-blue-500/20 text-[#D4B678] text-xs font-semibold px-3 py-1 rounded-full ml-2">Apply Now</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
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

export default Contact;