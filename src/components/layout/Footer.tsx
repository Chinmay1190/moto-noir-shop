
import { Link } from "react-router-dom";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t w-full py-8 transition-colors duration-300">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-bold">MotoNoir</h3>
          <p className="text-sm text-muted-foreground">
            Premium superbikes for the ultimate riding experience.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/shop" className="text-muted-foreground hover:text-foreground">All Bikes</Link></li>
            <li><Link to="/categories/sport" className="text-muted-foreground hover:text-foreground">Sport Bikes</Link></li>
            <li><Link to="/categories/cruiser" className="text-muted-foreground hover:text-foreground">Cruisers</Link></li>
            <li><Link to="/categories/adventure" className="text-muted-foreground hover:text-foreground">Adventure</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact Us</Link></li>
            <li><Link to="/faq" className="text-muted-foreground hover:text-foreground">FAQ</Link></li>
            <li><Link to="/shipping" className="text-muted-foreground hover:text-foreground">Shipping Policy</Link></li>
            <li><Link to="/returns" className="text-muted-foreground hover:text-foreground">Returns & Exchanges</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider">Newsletter</h4>
          <p className="text-sm text-muted-foreground">Subscribe to receive updates on new models and exclusive offers.</p>
          <form className="flex space-x-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {year} MotoNoir. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
