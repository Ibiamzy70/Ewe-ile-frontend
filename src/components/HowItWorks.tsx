
import { CheckCircle, Search, Upload, BriefcaseIcon } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="h-10 w-10 text-brand-600" />,
      title: "Create an Account",
      description: "Sign up for free and complete your profile with your skills and experience."
    },
    {
      icon: <Search className="h-10 w-10 text-brand-600" />,
      title: "Search for Jobs",
      description: "Browse through thousands of jobs that match your skills and preferences."
    },
    {
      icon: <BriefcaseIcon className="h-10 w-10 text-brand-600" />,
      title: "Apply with Ease",
      description: "Send your application with just a few clicks and track your progress."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-brand-600" />,
      title: "Land Your Dream Job",
      description: "Interview with employers and receive offers for your perfect role."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-xl text-gray-600">
            Finding your perfect job or hiring great talent has never been easier
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 -z-10" style={{ width: 'calc(100% - 3rem)', left: '3rem' }} />
              )}
              
              <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm h-full flex flex-col items-center text-center">
                <div className="rounded-full bg-brand-50 p-3 mb-4">
                  {step.icon}
                </div>
                <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center font-medium text-sm">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
