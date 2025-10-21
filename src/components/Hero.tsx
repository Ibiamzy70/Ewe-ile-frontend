
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search, BriefcaseIcon, ChevronRight, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-brand-50 to-white py-12 md:py-20">
      <div className="container flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div>
            <div className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-sm text-brand-800 mb-6">
              <Star className="mr-1 h-3.5 w-3.5" />
              <span>Over 10,000+ jobs available</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Find Your Dream <span className="text-brand-600">Job</span> Today
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Connect with top employers and discover opportunities that match your skills and career goals. Your next career move is just a click away.
            </p>
          </div>

          <div className="relative max-w-xl mx-auto lg:mx-0 w-full">
            <div className="flex gap-2 relative z-10 mt-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  className="pl-10 h-12 w-full"
                />
              </div>
              <Link to="/jobs">
                <Button size="lg" className="h-12 bg-brand-600 hover:bg-brand-700 text-white px-6">
                  Search Jobs
                </Button>
              </Link>
            </div>
            <div className="mt-4 text-sm text-gray-500 flex flex-wrap gap-x-4 gap-y-2 justify-center lg:justify-start">
              <span>Popular: </span>
              <Link to="/jobs?q=developer" className="text-brand-600 hover:underline">Developer</Link>
              <Link to="/jobs?q=designer" className="text-brand-600 hover:underline">Designer</Link>
              <Link to="/jobs?q=marketing" className="text-brand-600 hover:underline">Marketing</Link>
              <Link to="/jobs?q=data-scientist" className="text-brand-600 hover:underline">Data Scientist</Link>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/register" className="inline-flex">
              <Button className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white">
                Create Account
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/post-job" className="inline-flex">
              <Button variant="outline" className="w-full sm:w-auto border-brand-200 text-brand-700 hover:bg-brand-50">
                <BriefcaseIcon className="mr-2 h-4 w-4" />
                Post a Job
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative z-10 bg-white rounded-lg shadow-xl p-6 lg:p-8 border border-gray-100">
            <h3 className="font-semibold text-lg text-gray-900 mb-4">Featured Job Categories</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Technology', count: 1200 },
                { name: 'Marketing', count: 800 },
                { name: 'Design', count: 650 },
                { name: 'Finance', count: 950 },
                { name: 'Healthcare', count: 700 },
                { name: 'Education', count: 550 },
              ].map((category, index) => (
                <Link 
                  key={index} 
                  to={`/jobs?category=${category.name.toLowerCase()}`}
                  className="flex justify-between items-center p-3 rounded-md hover:bg-brand-50 transition-colors"
                >
                  <span className="font-medium">{category.name}</span>
                  <span className="text-sm text-gray-500">{category.count}</span>
                </Link>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <Link to="/jobs">
                <Button variant="link" className="text-brand-600 hover:text-brand-700">
                  View all categories <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-brand-200 rounded-full opacity-20 blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-blue-200 rounded-full opacity-20 blur-3xl -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
