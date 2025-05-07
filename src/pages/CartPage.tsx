
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/data/products";
import { Input } from "@/components/ui/input";
import { ChevronLeft, Trash2, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const { toast } = useToast();
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity >= 1) {
      updateQuantity(id, quantity);
    }
  };

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === "MOTO20") {
      setPromoApplied(true);
      toast({
        title: "Promo code applied",
        description: "You received a 20% discount!",
      });
    } else {
      toast({
        title: "Invalid promo code",
        description: "Please try again with a valid code.",
        variant: "destructive",
      });
    }
  };

  const calculateDiscount = () => {
    return promoApplied ? cart.totalAmount * 0.2 : 0;
  };

  const calculateTax = () => {
    return (cart.totalAmount - calculateDiscount()) * 0.18; // 18% GST
  };

  const calculateTotal = () => {
    return cart.totalAmount - calculateDiscount() + calculateTax() + 999; // Adding ₹999 shipping
  };

  const handleCheckout = () => {
    toast({
      title: "Proceeding to checkout",
      description: "Redirecting to payment gateway...",
    });
    // In a real implementation, this would redirect to a checkout page or payment gateway
    setTimeout(() => {
      window.location.href = "/checkout-success";
    }, 2000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="container py-8">
      <div className="mb-8">
        <Link
          to="/shop"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4 mr-1" /> Continue Shopping
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

      {cart.items.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 border rounded-lg"
        >
          <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link to="/shop">
            <Button>Start Shopping</Button>
          </Link>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <motion.div 
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-muted px-6 py-3 grid grid-cols-12 gap-4 text-sm font-medium">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              {cart.items.map((item) => (
                <motion.div 
                  key={item.product.id}
                  variants={itemVariants}
                  className="grid grid-cols-12 gap-4 items-center px-6 py-4 border-t"
                >
                  <div className="col-span-6 flex items-center space-x-4">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden bg-muted">
                      <img
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">
                        <Link to={`/product/${item.product.id}`} className="hover:underline">
                          {item.product.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.product.brand}
                      </p>
                    </div>
                  </div>

                  <div className="col-span-2 text-center">
                    {item.product.onSale && item.product.salePrice
                      ? formatPrice(item.product.salePrice)
                      : formatPrice(item.product.price)}
                  </div>

                  <div className="col-span-2 text-center">
                    <div className="inline-flex border rounded-md">
                      <button
                        onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="px-2 py-1 border-r text-sm"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 text-sm">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                        className="px-2 py-1 border-l text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="col-span-2 flex items-center justify-end space-x-2">
                    <span className="font-medium">
                      {formatPrice(
                        (item.product.onSale && item.product.salePrice
                          ? item.product.salePrice
                          : item.product.price) * item.quantity
                      )}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}

              <div className="px-6 py-4 border-t flex justify-between items-center">
                <Button variant="ghost" size="sm" onClick={clearCart}>
                  Clear Cart
                </Button>
                <div className="font-medium">
                  Subtotal: {formatPrice(cart.totalAmount)}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border rounded-lg p-6"
          >
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatPrice(cart.totalAmount)}</span>
              </div>
              
              {promoApplied && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Discount (20%)</span>
                  <span className="text-secondary">
                    -{formatPrice(calculateDiscount())}
                  </span>
                </div>
              )}
              
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax (18% GST)</span>
                <span>{formatPrice(calculateTax())}</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span>₹999.00</span>
              </div>
              
              <div className="pt-4 border-t">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>{formatPrice(calculateTotal())}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Including GST and shipping fees
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex space-x-2">
                <Input 
                  type="text"
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  variant="outline" 
                  onClick={handleApplyPromo}
                  disabled={promoApplied}
                >
                  Apply
                </Button>
              </div>
              
              <Button 
                className="w-full" 
                size="lg"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                By proceeding, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
