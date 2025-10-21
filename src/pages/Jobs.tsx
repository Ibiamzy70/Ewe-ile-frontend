
import { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import JobCard from '@/components/JobCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, X, MapPin } from 'lucide-react';
import { jobs, Job } from '@/data/jobs';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState<string[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
  const [showFilters, setShowFilters] = useState(false);

  // Job types for filtering
  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Remote', 'Internship'];

  // Handle job type filter toggle
  const toggleJobType = (type: string) => {
    if (jobType.includes(type)) {
      setJobType(jobType.filter(t => t !== type));
    } else {
      setJobType([...jobType, type]);
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setLocation('');
    setJobType([]);
  };

  // Filter jobs based on search term, location and job type
  useEffect(() => {
    let results = jobs;
    
    if (searchTerm) {
      results = results.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (location) {
      results = results.filter(job => 
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    }
    
    if (jobType.length > 0) {
      results = results.filter(job => 
        jobType.includes(job.type)
      );
    }
    
    setFilteredJobs(results);
  }, [searchTerm, location, jobType]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 bg-gray-50">
        <div className="bg-brand-600 py-10">
          <div className="container">
            <h1 className="text-3xl font-bold text-white">Find Your Perfect Job</h1>
            <p className="text-brand-100 mt-2">Browse through thousands of job listings</p>
            
            <div className="mt-6 bg-white p-4 rounded-lg shadow-sm flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  type="text" 
                  placeholder="Job title, keywords, or company" 
                  className="pl-10 h-12"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  type="text" 
                  placeholder="Location (city, state, or remote)" 
                  className="pl-10 h-12"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <Button className="h-12 bg-brand-600 hover:bg-brand-700 text-white px-6">
                Search
              </Button>
            </div>
          </div>
        </div>
        
        <div className="container py-10">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Mobile filter button */}
            <div className="lg:hidden mb-4">
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </Button>
            </div>
            
            {/* Filters sidebar */}
            <div className={`
              lg:w-64 space-y-6 flex-shrink-0
              ${showFilters ? 'block' : 'hidden'} lg:block
            `}>
              <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold text-lg">Filters</h2>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearFilters}
                    className="h-8 text-sm text-brand-600"
                  >
                    Clear all
                  </Button>
                </div>
                
                <div className="space-y-5">
                  <div>
                    <h3 className="font-medium mb-3">Job Type</h3>
                    <div className="space-y-2">
                      {jobTypes.map((type) => (
                        <div key={type} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`type-${type}`}
                            checked={jobType.includes(type)}
                            onChange={() => toggleJobType(type)}
                            className="h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-600"
                          />
                          <label htmlFor={`type-${type}`} className="ml-2 text-gray-700">
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Job listings */}
            <div className="flex-1">
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-gray-600">
                  Showing <span className="font-medium">{filteredJobs.length}</span> jobs
                </p>
                <div className="flex items-center gap-2">
                  {(searchTerm || location || jobType.length > 0) && (
                    <div className="flex flex-wrap gap-2">
                      {searchTerm && (
                        <div className="bg-gray-100 text-gray-800 rounded-full px-3 py-1 text-sm flex items-center">
                          "{searchTerm}"
                          <button 
                            onClick={() => setSearchTerm('')}
                            className="ml-1 text-gray-500 hover:text-gray-700"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      )}
                      
                      {location && (
                        <div className="bg-gray-100 text-gray-800 rounded-full px-3 py-1 text-sm flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {location}
                          <button 
                            onClick={() => setLocation('')}
                            className="ml-1 text-gray-500 hover:text-gray-700"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      )}
                      
                      {jobType.map(type => (
                        <div 
                          key={type} 
                          className="bg-gray-100 text-gray-800 rounded-full px-3 py-1 text-sm flex items-center"
                        >
                          {type}
                          <button 
                            onClick={() => toggleJobType(type)}
                            className="ml-1 text-gray-500 hover:text-gray-700"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {filteredJobs.length > 0 ? (
                <div className="space-y-6">
                  {filteredJobs.map(job => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium">No jobs found</h3>
                  <p className="text-gray-500 mt-2">
                    Try adjusting your search or filter criteria
                  </p>
                  <Button 
                    onClick={clearFilters}
                    className="mt-4 bg-brand-600 hover:bg-brand-700 text-white"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;
