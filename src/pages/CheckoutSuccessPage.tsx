
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear cart on successful checkout
    clearCart();

    // Trigger confetti animation
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    
    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;
    
    const confettiInterval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      
      if (timeLeft <= 0) {
        clearInterval(confettiInterval);
        return;
      }
      
      const particleCount = 50 * (timeLeft / duration);
      
      // Confetti burst
      confetti({
        particleCount,
        startVelocity: 30,
        spread: 100,
        origin: {
          x: randomInRange(0.3, 0.7),
          y: randomInRange(0.3, 0.5),
        },
        colors: ['#ff5e5e', '#5e9fff', '#5eff83', '#fcff5e', '#ff5ee0'],
      });
    }, 200);
    
    return () => clearInterval(confettiInterval);
  }, [clearCart]);

  return (
    <div className="container py-16 flex flex-col items-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mb-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-accent-foreground"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl font-bold mb-4 text-center"
      >
        Thank You For Your Order!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg text-muted-foreground text-center max-w-xl mb-8"
      >
        Your order has been placed successfully. We're preparing your items for shipping.
        You will receive an email confirmation shortly with the order details.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="bg-card border rounded-lg p-8 mb-10 w-full max-w-lg"
      >
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Order ID</span>
            <span className="font-medium">MN{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Date</span>
            <span className="font-medium">{new Date().toLocaleDateString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Payment Method</span>
            <span className="font-medium">Credit Card</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Shipping Method</span>
            <span className="font-medium">Express Delivery</span>
          </div>
          <div className="flex justify-between pt-2 border-t mt-2">
            <span className="font-medium">Estimated Delivery</span>
            <span className="font-medium text-primary">
              {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()}
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Link to="/">
          <Button variant="outline" size="lg">
            Return to Home
          </Button>
        </Link>
        <Link to="/shop">
          <Button size="lg">
            Continue Shopping
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
