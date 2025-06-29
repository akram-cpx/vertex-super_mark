
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Trash } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export const CartSheet = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Cyber Gaming Headset',
      price: 299,
      quantity: 1,
      image: '/placeholder.svg'
    },
    {
      id: '2',
      name: 'RGB Mechanical Keyboard',
      price: 199,
      quantity: 2,
      image: '/placeholder.svg'
    }
  ]);

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="hover:bg-white/10 relative">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m4.5-5h6"
            />
          </svg>
          {itemCount > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-vortex-primary text-vortex-bg text-xs">
              {itemCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg bg-vortex-bg border-white/20">
        <SheetHeader>
          <SheetTitle className="text-white">Shopping Cart</SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-white/60">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 glass-effect rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-white">{item.name}</h3>
                    <p className="text-sm text-vortex-primary">${item.price}</p>
                    <div className="flex items-center mt-2 space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-6 w-6 p-0 border-white/20"
                      >
                        -
                      </Button>
                      <span className="text-sm text-white">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-6 w-6 p-0 border-white/20"
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                    className="text-destructive hover:bg-destructive/10"
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-white/20 pt-4 mt-6">
            <div className="flex justify-between text-lg font-semibold text-white mb-4">
              <span>Total</span>
              <span className="text-vortex-primary">${total}</span>
            </div>
            <Button className="w-full gradient-primary text-vortex-bg font-semibold hover:opacity-90">
              Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
