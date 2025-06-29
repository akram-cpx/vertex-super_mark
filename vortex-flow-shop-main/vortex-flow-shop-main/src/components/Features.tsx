
import { Badge } from '@/components/ui/badge';

const Features = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Fast Delivery',
      description: 'Lightning-fast shipping worldwide with real-time tracking',
      accent: 'vortex-primary'
    },
    {
      icon: '🔒',
      title: 'Secure Payments',
      description: 'Bank-level security with encrypted payment processing',
      accent: 'vortex-blue'
    },
    {
      icon: '⚡',
      title: 'Premium Quality',
      description: 'Handpicked products from top-tier manufacturers',
      accent: 'vortex-purple'
    },
    {
      icon: '🎯',
      title: '24/7 Support',
      description: 'Round-the-clock customer service and technical support',
      accent: 'vortex-orange'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(43, 253, 190, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-vortex-primary/20 text-vortex-primary border-vortex-primary">
            WHY CHOOSE VORTEX
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience the <span className="text-gradient">Difference</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            We're not just another tech store. We're your gateway to the future.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-8 glass-effect rounded-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-vortex-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>

              {/* Accent Line */}
              <div className={`w-12 h-1 bg-${feature.accent} mx-auto mt-6 rounded-full opacity-60 group-hover:opacity-100 transition-opacity`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="glass-effect p-12 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to step into the future?
            </h3>
            <p className="text-xl text-white/60 mb-8">
              Join thousands of tech enthusiasts who trust Vortex for their cutting-edge needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 gradient-primary text-vortex-bg font-semibold rounded-lg hover:scale-105 transition-transform">
                Start Shopping
              </button>
              <button className="px-8 py-4 glass-effect border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
