
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-vortex-bg via-vortex-bg to-black">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vortex-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-vortex-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-vortex-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(43, 253, 190, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(43, 253, 190, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
            ENTER THE
            <span className="block text-gradient glow-text">VORTEX</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover the future of technology. Curated products that push the boundaries of innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="gradient-primary text-vortex-bg font-semibold px-8 py-4 text-lg hover:scale-105 transition-transform animate-glow-pulse"
            >
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-effect border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
            >
              Explore New
            </Button>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="glass-effect p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-vortex-primary">1000+</div>
            <div className="text-white/60 text-sm">Products</div>
          </div>
          <div className="glass-effect p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-vortex-blue">50K+</div>
            <div className="text-white/60 text-sm">Customers</div>
          </div>
          <div className="glass-effect p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-vortex-lime">99%</div>
            <div className="text-white/60 text-sm">Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-vortex-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
