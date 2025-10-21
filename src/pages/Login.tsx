
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BriefcaseIcon } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate login API call
    setTimeout(() => {
      setLoading(false);
      
      // For demo: accept any non-empty values
      if (email && password) {
        toast({
          title: "Success!",
          description: "You have successfully logged in.",
        });
        navigate('/');
      } else {
        toast({
          title: "Error",
          description: "Please enter both email and password.",
          variant: "destructive",
        });
      }
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
            <h1 className="text-2xl font-bold">Log in to CareerSpark Pro</h1>
            <p className="text-gray-600 mt-2">Welcome back! Please enter your details.</p>
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
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Link to="/forgot-password" className="text-sm text-brand-600 hover:text-brand-800">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-brand-600 hover:bg-brand-700 text-white"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Log in'}
            </Button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-brand-600 hover:text-brand-800 font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
