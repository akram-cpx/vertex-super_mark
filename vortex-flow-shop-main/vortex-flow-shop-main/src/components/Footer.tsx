
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const footerLinks = {
    Shop: ['All Products', 'Gaming', 'Audio', 'Wearables', 'Accessories'],
    Support: ['Help Center', 'Contact Us', 'Shipping Info', 'Returns', 'Track Order'],
    Company: ['About Us', 'Careers', 'Press', 'Blog', 'Reviews'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Cookies']
  };

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏' },
    { name: 'Instagram', icon: '📷' },
    { name: 'Discord', icon: '💬' },
    { name: 'YouTube', icon: '📺' }
  ];

  return (
    <footer className="bg-black/50 border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-4">
            Stay in the <span className="text-gradient">Loop</span>
          </h3>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Get early access to new products, exclusive deals, and tech insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-vortex-primary"
            />
            <Button className="gradient-primary text-vortex-bg font-semibold whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>

        <Separator className="mb-16 bg-white/10" />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gradient mb-4">VORTEX</h2>
            <p className="text-white/60 mb-6 leading-relaxed">
              Your gateway to the future of technology. Curated products, cutting-edge innovation, 
              and unmatched quality in every order.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="sm"
                  className="hover:bg-white/10 text-white hover:text-vortex-primary"
                >
                  <span className="text-lg">{social.icon}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-vortex-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-8 bg-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Vortex. All rights reserved.</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-vortex-primary rounded-full animate-pulse"></span>
              <span>Secure payments</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-vortex-blue rounded-full animate-pulse"></span>
              <span>Free shipping over $100</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-vortex-purple rounded-full animate-pulse"></span>
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
