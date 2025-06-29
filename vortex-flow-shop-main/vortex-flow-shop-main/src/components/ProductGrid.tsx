
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Star } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

const ProductGrid = () => {
  const [products] = useState<Product[]>([
    {
      id: '1',
      name: 'Cyber Gaming Headset',
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=500&h=300&fit=crop',
      category: 'Audio',
      isNew: true,
      isFeatured: true
    },
    {
      id: '2',
      name: 'RGB Mechanical Keyboard',
      price: 199,
      rating: 4.9,
      reviews: 567,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=300&fit=crop',
      category: 'Gaming',
      isFeatured: true
    },
    {
      id: '3',
      name: 'Wireless Gaming Mouse',
      price: 129,
      originalPrice: 159,
      rating: 4.7,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=300&fit=crop',
      category: 'Gaming'
    },
    {
      id: '4',
      name: 'Smart Watch Pro',
      price: 449,
      rating: 4.6,
      reviews: 298,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=300&fit=crop',
      category: 'Wearables',
      isNew: true
    },
    {
      id: '5',
      name: 'Wireless Earbuds',
      price: 179,
      originalPrice: 219,
      rating: 4.5,
      reviews: 445,
      image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&h=300&fit=crop',
      category: 'Audio'
    },
    {
      id: '6',
      name: 'Gaming Monitor 4K',
      price: 599,
      rating: 4.9,
      reviews: 167,
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=300&fit=crop',
      category: 'Displays',
      isFeatured: true
    }
  ]);

  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Products</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Discover our handpicked selection of cutting-edge technology
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group glass-effect p-6 rounded-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 space-y-2">
                  {product.isNew && (
                    <Badge className="bg-vortex-primary text-vortex-bg">NEW</Badge>
                  )}
                  {product.isFeatured && (
                    <Badge className="bg-vortex-purple text-white">FEATURED</Badge>
                  )}
                </div>

                {/* Favorite Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-3 right-3 hover:bg-white/20"
                  onClick={() => toggleFavorite(product.id)}
                >
                  <Heart
                    className={`h-4 w-4 ${
                      favorites.has(product.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-white'
                    }`}
                  />
                </Button>

                {/* Discount Badge */}
                {product.originalPrice && (
                  <Badge className="absolute bottom-3 left-3 bg-vortex-orange text-white">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </Badge>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <div>
                  <Badge variant="outline" className="text-vortex-blue border-vortex-blue mb-2">
                    {product.category}
                  </Badge>
                  <h3 className="text-lg font-semibold text-white group-hover:text-vortex-primary transition-colors">
                    {product.name}
                  </h3>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-white/60">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-vortex-primary">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-white/40 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button className="w-full gradient-primary text-vortex-bg font-semibold hover:opacity-90 transition-opacity">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="glass-effect border-white/30 text-white hover:bg-white/10 px-8"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
