
import { Users, Briefcase, Building, Globe } from 'lucide-react';

const stats = [
  {
    icon: <Users className="h-8 w-8 text-brand-600" />,
    value: '500K+',
    label: 'Active Job Seekers',
  },
  {
    icon: <Briefcase className="h-8 w-8 text-brand-600" />,
    value: '100K+',
    label: 'Jobs Available',
  },
  {
    icon: <Building className="h-8 w-8 text-brand-600" />,
    value: '50K+',
    label: 'Companies',
  },
  {
    icon: <Globe className="h-8 w-8 text-brand-600" />,
    value: '80+',
    label: 'Countries',
  },
];

const StatsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white border-y border-gray-100">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-brand-50 p-4 mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
