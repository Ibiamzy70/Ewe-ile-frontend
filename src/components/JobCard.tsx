
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, DollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Job } from '@/data/jobs';

interface JobCardProps {
  job: Job;
  featured?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({ job, featured = false }) => {
  // Calculate days ago for the job posting
  const getDaysAgo = (dateString: string) => {
    const postedDate = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - postedDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    return `${diffDays} days ago`;
  };

  return (
    <Card className={`job-card overflow-hidden ${featured ? 'border-l-4 border-l-brand-600' : ''}`}>
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                <img 
                  src={job.logoUrl} 
                  alt={`${job.company} logo`} 
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{job.title}</h3>
                <p className="text-gray-600">{job.company}</p>
              </div>
            </div>

            {job.featured && (
              <Badge className="bg-brand-100 text-brand-800 hover:bg-brand-200">
                Featured
              </Badge>
            )}
          </div>
          
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="inline-flex items-center text-sm text-gray-500">
              <MapPin className="mr-1 h-4 w-4 text-gray-400" />
              {job.location}
            </span>
            <span className="inline-flex items-center text-sm text-gray-500">
              <Clock className="mr-1 h-4 w-4 text-gray-400" />
              {getDaysAgo(job.postedAt)}
            </span>
            {job.salary && (
              <span className="inline-flex items-center text-sm text-gray-500">
                <DollarSign className="mr-1 h-4 w-4 text-gray-400" />
                {job.salary}
              </span>
            )}
          </div>
          
          <div className="mt-4">
            <Badge variant="secondary" className="mr-2">
              {job.type}
            </Badge>
          </div>
          
          <div className="mt-4 line-clamp-2 text-gray-600 text-sm">
            {job.description}
          </div>
          
          <div className="mt-6 flex justify-between items-center">
            <Link to={`/jobs/${job.id}`}>
              <Button variant="outline" className="border-brand-200 text-brand-700 hover:bg-brand-50">
                View Details
              </Button>
            </Link>
            <Link to={`/apply/${job.id}`}>
              <Button className="bg-brand-600 hover:bg-brand-700 text-white">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
