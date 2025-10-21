
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import JobCard from './JobCard';
import { Jobs, featuredJobs } from '@/data/jobs';
import { ArrowRight } from 'lucide-react';

const FeaturedJobs = () => {
  const [displayCount, setDisplayCount] = useState(4);
  
  const showMoreJobs = () => {
    setDisplayCount(prev => Math.min(prev + 4, featuredJobs.length));
  };
  
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Jobs</h2>
            <p className="mt-2 text-gray-600">
              Explore our handpicked selection of top opportunities
            </p>
          </div>
          <Link to="/jobs" className="mt-4 md:mt-0">
            <Button variant="outline" className="border-brand-200 text-brand-700 hover:bg-brand-50">
              View All Jobs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredJobs.slice(0, displayCount).map((job) => (
            <JobCard key={job.id} job={job} featured={true} />
          ))}
        </div>
        
        {displayCount < featuredJobs.length && (
          <div className="mt-10 text-center">
            <Button 
              onClick={showMoreJobs}
              variant="outline" 
              className="border-brand-200 text-brand-700 hover:bg-brand-50"
            >
              Load More Jobs
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedJobs;
