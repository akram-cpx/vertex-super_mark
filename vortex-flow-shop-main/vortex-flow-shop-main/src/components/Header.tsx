
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, User, Heart } from 'lucide-react';
import { CartSheet } from './CartSheet';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-effect">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gradient tracking-wider">
              VORTEX
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium hover:text-vortex-primary transition-colors">
              Products
            </a>
            <a href="#" className="text-sm font-medium hover:text-vortex-primary transition-colors">
              Collections
            </a>
            <a href="#" className="text-sm font-medium hover:text-vortex-primary transition-colors">
              About
            </a>
            <a href="#" className="text-sm font-medium hover:text-vortex-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:bg-white/10"
            >
              <Search className="h-4 w-4" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="sm" className="hover:bg-white/10 relative">
              <Heart className="h-4 w-4" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-vortex-primary text-vortex-bg text-xs">
                3
              </Badge>
            </Button>

            {/* User Account */}
            <Button variant="ghost" size="sm" className="hover:bg-white/10">
              <User className="h-4 w-4" />
            </Button>

            {/* Cart */}
            <CartSheet />
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4 animate-fade-in-up">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:border-vortex-primary"
                autoFocus
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-white/60" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
