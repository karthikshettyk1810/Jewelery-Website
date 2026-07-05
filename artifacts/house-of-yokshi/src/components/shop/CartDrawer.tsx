import React, { useState } from "react";
import { products } from "@/data/products";
import { useShop, Product } from "@/hooks/use-shop";
import { X, Plus, Minus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cart, updateQuantity, removeFromCart, cartTotal, setIsCheckoutOpen } = useShop();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-card border-l border-border shadow-2xl z-50 flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-2xl text-primary">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
                <X size={32} />
              </div>
              <p className="text-muted-foreground font-sans">Your cart is currently empty.</p>
              <Button 
                variant="outline" 
                className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => setIsCartOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.product.id} className="flex gap-4">
                <div className="w-24 h-24 bg-secondary rounded-md overflow-hidden flex-shrink-0">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow flex flex-col justify-between py-1">
                  <div>
                    <h3 className="font-sans font-medium text-foreground">{item.product.name}</h3>
                    <p className="text-muted-foreground text-sm">${item.product.price.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-border rounded-sm">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 text-muted-foreground hover:text-primary"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm font-sans">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 text-muted-foreground hover:text-primary"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-xs text-muted-foreground hover:text-destructive underline underline-offset-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-border bg-background">
            <div className="flex justify-between items-center mb-6">
              <span className="font-sans text-muted-foreground">Subtotal</span>
              <span className="font-serif text-xl">${cartTotal.toLocaleString()}</span>
            </div>
            <Button 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-12 uppercase tracking-widest text-sm flex items-center justify-center gap-2"
              onClick={() => {
                setIsCartOpen(false);
                setIsCheckoutOpen(true);
              }}
            >
              Checkout <ArrowRight size={16} />
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
