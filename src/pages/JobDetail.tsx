
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, Clock, DollarSign, Share2, Bookmark, Building, 
  GlobeIcon, Users, BriefcaseIcon 
} from 'lucide-react';
import { Job, jobs } from '@/data/jobs';

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [saved, setSaved] = useState(false);

  // Get job from mock data
  useEffect(() => {
    // Simulate API call with setTimeout
    const timer = setTimeout(() => {
      const foundJob = jobs.find(job => job.id === id);
      if (foundJob) {
        setJob(foundJob);
      } else {
        setError(true);
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

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

  // Handle share button click
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: job?.title,
        text: `Check out this job: ${job?.title} at ${job?.company}`,
        url: window.location.href,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert('Link copied to clipboard!'))
        .catch(err => console.error('Could not copy text: ', err));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1 bg-gray-50">
          <div className="container py-12">
            <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
              <div className="h-10 bg-gray-200 rounded w-32"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1 bg-gray-50">
          <div className="container py-12">
            <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm text-center">
              <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
              <p className="text-gray-600 mb-6">The job you're looking for doesn't exist or has been removed.</p>
              <Link to="/jobs">
                <Button className="bg-brand-600 hover:bg-brand-700 text-white">
                  Browse All Jobs
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 bg-gray-50">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Job header */}
              <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="h-16 w-16 md:h-20 md:w-20 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <img 
                      src={job.logoUrl} 
                      alt={`${job.company} logo`} 
                      className="h-12 w-12 object-contain"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                      <h1 className="text-2xl md:text-3xl font-bold">{job.title}</h1>
                      
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-9 w-9 rounded-full"
                          onClick={handleShare}
                        >
                          <Share2 className="h-4 w-4" />
                          <span className="sr-only">Share</span>
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon"
                          className={`h-9 w-9 rounded-full ${saved ? 'bg-brand-50 border-brand-200 text-brand-700' : ''}`}
                          onClick={() => setSaved(!saved)}
                        >
                          <Bookmark className="h-4 w-4" fill={saved ? 'currentColor' : 'none'} />
                          <span className="sr-only">Save</span>
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-700 mb-2">
                      <Building className="h-4 w-4" />
                      <span>{job.company}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 md:gap-6 mt-4">
                      <span className="inline-flex items-center text-sm text-gray-500">
                        <MapPin className="mr-1 h-4 w-4 text-gray-400" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center text-sm text-gray-500">
                        <Clock className="mr-1 h-4 w-4 text-gray-400" />
                        Posted {getDaysAgo(job.postedAt)}
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
                      {job.featured && (
                        <Badge className="bg-brand-100 text-brand-800 hover:bg-brand-200">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Job description */}
              <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6 md:p-8">
                <h2 className="text-xl font-bold mb-4">Job Description</h2>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-6">{job.description}</p>
                </div>
                
                <h3 className="text-lg font-bold mt-6 mb-4">Requirements</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link to={`/apply/${job.id}`} className="flex-1">
                    <Button className="w-full bg-brand-600 hover:bg-brand-700 text-white">
                      Apply Now
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    className={`flex-1 ${saved ? 'bg-brand-50 border-brand-200 text-brand-700' : ''}`}
                    onClick={() => setSaved(!saved)}
                  >
                    <Bookmark className="mr-2 h-4 w-4" fill={saved ? 'currentColor' : 'none'} />
                    {saved ? 'Saved' : 'Save Job'}
                  </Button>
                </div>
              </div>
              
              {/* Company info */}
              <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6 md:p-8">
                <h2 className="text-xl font-bold mb-4">About {job.company}</h2>
                <p className="text-gray-700 mb-6">
                  {job.company} is a leading company in the industry, dedicated to innovation and excellence.
                  We are committed to creating a diverse and inclusive workplace where all employees can thrive.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="border border-gray-200 rounded-md p-4 text-center">
                    <GlobeIcon className="h-6 w-6 mx-auto text-brand-600 mb-2" />
                    <div className="text-sm font-medium">Company Size</div>
                    <div className="text-gray-600">500-1000</div>
                  </div>
                  <div className="border border-gray-200 rounded-md p-4 text-center">
                    <Users className="h-6 w-6 mx-auto text-brand-600 mb-2" />
                    <div className="text-sm font-medium">Industry</div>
                    <div className="text-gray-600">Technology</div>
                  </div>
                  <div className="border border-gray-200 rounded-md p-4 text-center">
                    <BriefcaseIcon className="h-6 w-6 mx-auto text-brand-600 mb-2" />
                    <div className="text-sm font-medium">Founded</div>
                    <div className="text-gray-600">2010</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Application summary card */}
              <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
                <h2 className="text-lg font-bold mb-4">Job Summary</h2>
                <dl className="space-y-4">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Job Type</dt>
                    <dd className="font-medium">{job.type}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Location</dt>
                    <dd className="font-medium">{job.location}</dd>
                  </div>
                  {job.salary && (
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Salary</dt>
                      <dd className="font-medium">{job.salary}</dd>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Posted</dt>
                    <dd className="font-medium">{getDaysAgo(job.postedAt)}</dd>
                  </div>
                </dl>
                
                <Link to={`/apply/${job.id}`} className="block mt-6">
                  <Button className="w-full bg-brand-600 hover:bg-brand-700 text-white">
                    Apply Now
                  </Button>
                </Link>
              </div>
              
              {/* Similar jobs card */}
              <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
                <h2 className="text-lg font-bold mb-4">Similar Jobs</h2>
                <div className="space-y-4">
                  {jobs
                    .filter(j => j.id !== job.id)
                    .slice(0, 3)
                    .map((similarJob) => (
                      <Link 
                        key={similarJob.id} 
                        to={`/jobs/${similarJob.id}`}
                        className="block group"
                      >
                        <div className="border border-gray-100 rounded-md p-4 hover:border-brand-200 hover:bg-brand-50 transition-colors">
                          <h3 className="font-medium group-hover:text-brand-600 line-clamp-1">
                            {similarJob.title}
                          </h3>
                          <p className="text-sm text-gray-600">{similarJob.company}</p>
                          <div className="flex items-center mt-2 text-xs text-gray-500">
                            <MapPin className="mr-1 h-3 w-3" />
                            {similarJob.location}
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
                <div className="mt-4">
                  <Link to="/jobs">
                    <Button variant="link" className="w-full text-brand-600 hover:text-brand-700">
                      View all jobs
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobDetail;
