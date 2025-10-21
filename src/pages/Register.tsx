
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BriefcaseIcon, ChevronRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountType, setAccountType] = useState<'jobseeker' | 'employer'>('jobseeker');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords don't match",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate registration API call
    setTimeout(() => {
      setLoading(false);
      
      toast({
        title: "Account created!",
        description: "Welcome to CareerSpark Pro. Your account has been created successfully.",
      });
      navigate('/');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 flex items-center justify-center bg-gray-50 py-12">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-brand-100 text-brand-600 mb-4">
              <BriefcaseIcon className="h-6 w-6" />
            </div>
            <h1 className="text-2xl font-bold">Create your account</h1>
            <p className="text-gray-600 mt-2">Start your journey with CareerSpark Pro</p>
          </div>
          
          {/* Account type selector */}
          <div className="flex rounded-md mb-6 bg-gray-50 p-1">
            <button
              type="button"
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
                accountType === 'jobseeker'
                  ? 'bg-white shadow-sm text-brand-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setAccountType('jobseeker')}
            >
              Job Seeker
            </button>
            <button
              type="button"
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
                accountType === 'employer'
                  ? 'bg-white shadow-sm text-brand-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setAccountType('employer')}
            >
              Employer
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p className="text-xs text-gray-500">
                Must be at least 8 characters long with numbers and symbols
              </p>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-brand-600 hover:bg-brand-700 text-white"
              disabled={loading}
            >
              {loading ? 'Creating account...' : 'Create account'}
              {!loading && <ChevronRight className="ml-1 h-4 w-4" />}
            </Button>
            
            <p className="text-xs text-center text-gray-500">
              By clicking "Create account", you agree to our{' '}
              <Link to="/terms" className="text-brand-600 hover:underline">Terms of Service</Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-brand-600 hover:underline">Privacy Policy</Link>.
            </p>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-brand-600 hover:text-brand-800 font-medium">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
