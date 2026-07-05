import React from "react";
import logoPng from "@assets/7CF8B355-954C-4ECF-A39D-224B035880FC_(1)_1783258628670.png";

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <img src={logoPng} alt="House of Yokshi" className="h-28 md:h-32 w-auto mb-6 -ml-2" />
            <p className="text-muted-foreground text-sm max-w-sm font-sans">
              Curated for Your Everyday Style. <br />
              House of Yokshi brings boutique atelier quality directly to you. Accessible luxury jewelry designed to be lived in.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg text-primary mb-6">Shop</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-sans">
              <li><a href="#" className="hover:text-primary transition-colors">All Jewelry</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Rings</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Necklaces</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Earrings</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Bracelets</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-primary mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-sans">
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Jewelry Care</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground font-sans">
          <p>&copy; {new Date().getFullYear()} House of Yokshi. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
