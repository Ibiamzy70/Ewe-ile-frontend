
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BriefcaseIcon } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-12 md:py-20 bg-brand-600">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Advance Your Career?
          </h2>
          <p className="text-xl text-brand-100 mb-8">
            Join thousands of professionals who have already found their dream jobs through CareerSpark Pro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-brand-600 hover:bg-gray-100 w-full sm:w-auto">
                Create Your Profile
              </Button>
            </Link>
            <Link to="/post-job">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-brand-700 w-full sm:w-auto">
                <BriefcaseIcon className="mr-2 h-5 w-5" />
                Post a Job
              </Button>
            </Link>
          </div>
          <p className="text-brand-200 mt-6">
            No credit card required. Get started in minutes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
