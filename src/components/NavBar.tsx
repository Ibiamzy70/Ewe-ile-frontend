
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X, BriefcaseIcon, Search, User } from 'lucide-react';

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <BriefcaseIcon className="h-6 w-6 text-brand-600" />
            <span className="text-xl font-bold text-brand-600">CareerSpark Pro</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/70 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/jobs" className="text-foreground/70 hover:text-foreground transition-colors">
            Find Jobs
          </Link>
          <Link to="/post-job" className="text-foreground/70 hover:text-foreground transition-colors">
            Post Job
          </Link>
          <Link to="/about" className="text-foreground/70 hover:text-foreground transition-colors">
            About
          </Link>
        </nav>

        {/* Desktop auth buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline" size="sm" className="border-brand-200 text-brand-700 hover:bg-brand-50">
              Log in
            </Button>
          </Link>
          <Link to="/register">
            <Button size="sm" className="bg-brand-600 hover:bg-brand-700 text-white">
              Sign up
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-foreground" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-5 border-t">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="flex items-center gap-2 px-2 py-1 hover:bg-brand-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/jobs" 
              className="flex items-center gap-2 px-2 py-1 hover:bg-brand-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Search className="h-4 w-4" /> Find Jobs
            </Link>
            <Link 
              to="/post-job" 
              className="flex items-center gap-2 px-2 py-1 hover:bg-brand-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              <BriefcaseIcon className="h-4 w-4" /> Post Job
            </Link>
            <Link 
              to="/about" 
              className="flex items-center gap-2 px-2 py-1 hover:bg-brand-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/login" 
              className="flex items-center gap-2 px-2 py-1 hover:bg-brand-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              <User className="h-4 w-4" /> Log in
            </Link>
            <div className="pt-2">
              <Link 
                to="/register" 
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="w-full bg-brand-600 hover:bg-brand-700 text-white">
                  Sign up
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
