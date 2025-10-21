
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    content: "CareerSpark Pro helped me land my dream job as a senior developer within just two weeks. The platform's intuitive interface and job matching algorithms made my job search incredibly efficient.",
    author: "Sarah Johnson",
    position: "Frontend Developer at TechCorp",
    image: "/placeholder.svg"
  },
  {
    content: "As an employer, I've found exceptional talent through CareerSpark Pro. The quality of candidates and the platform's filtering tools saved our HR team countless hours in the hiring process.",
    author: "Michael Chen",
    position: "HR Director at DataFlow Systems",
    image: "/placeholder.svg"
  },
  {
    content: "After being laid off during the pandemic, I was worried about finding a new position. CareerSpark Pro not only helped me find a job, but one that paid better and offered more growth opportunities!",
    author: "James Wilson",
    position: "Product Manager at CreativeMinds",
    image: "/placeholder.svg"
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
          <p className="mt-4 text-xl text-gray-600">
            Hear from professionals who found success with CareerSpark Pro
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gradient-to-br from-brand-50 to-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden border-2 border-brand-100">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author} 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              
              <div>
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 inline-block text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl font-medium text-gray-800 mb-6">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                <cite className="not-italic">
                  <div className="font-semibold text-gray-900">{testimonials[currentIndex].author}</div>
                  <div className="text-gray-600">{testimonials[currentIndex].position}</div>
                </cite>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={previous}
              className="rounded-full h-10 w-10"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            
            {testimonials.map((_, i) => (
              <Button
                key={i}
                variant="outline"
                size="icon"
                onClick={() => setCurrentIndex(i)}
                className={`rounded-full h-3 w-3 p-0 ${
                  i === currentIndex 
                    ? 'bg-brand-600 border-brand-600' 
                    : 'bg-transparent border-gray-300'
                }`}
              >
                <span className="sr-only">Go to slide {i + 1}</span>
              </Button>
            ))}
            
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full h-10 w-10"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
