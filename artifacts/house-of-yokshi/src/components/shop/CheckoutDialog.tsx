import React, { useState } from "react";
import { useShop } from "@/hooks/use-shop";
import { X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CheckoutDialog() {
  const { isCheckoutOpen, setIsCheckoutOpen, cartTotal, clearCart } = useShop();
  const [step, setStep] = useState<"shipping" | "payment" | "success">("shipping");

  if (!isCheckoutOpen) return null;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === "shipping") setStep("payment");
    else if (step === "payment") {
      setStep("success");
      clearCart();
    }
  };

  const close = () => {
    setIsCheckoutOpen(false);
    setTimeout(() => setStep("shipping"), 300);
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity"
        onClick={step === "success" ? close : undefined}
      />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-lg bg-card border border-border shadow-2xl z-50 p-8 rounded-sm animate-in zoom-in-95 duration-200">
        {step !== "success" && (
          <button 
            onClick={close}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          >
            <X size={20} />
          </button>
        )}

        {step === "shipping" && (
          <form onSubmit={handleNext} className="space-y-6">
            <h2 className="font-serif text-2xl text-primary mb-6">Shipping Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">First Name</label>
                <Input required className="bg-background border-border rounded-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Last Name</label>
                <Input required className="bg-background border-border rounded-none" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Address</label>
              <Input required className="bg-background border-border rounded-none" />
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground rounded-none h-12 uppercase tracking-widest">
              Continue to Payment
            </Button>
          </form>
        )}

        {step === "payment" && (
          <form onSubmit={handleNext} className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <button 
                type="button"
                onClick={() => setStep("shipping")}
                className="text-muted-foreground hover:text-primary text-sm underline underline-offset-4"
              >
                Back
              </button>
              <h2 className="font-serif text-2xl text-primary">Payment</h2>
            </div>
            
            <div className="bg-background border border-border p-4 mb-6 text-center">
              <p className="text-muted-foreground text-sm">Total to Pay</p>
              <p className="font-serif text-3xl text-foreground mt-1">${cartTotal.toLocaleString()}</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Card Number</label>
                <Input required placeholder="0000 0000 0000 0000" className="bg-background border-border rounded-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Expiry</label>
                  <Input required placeholder="MM/YY" className="bg-background border-border rounded-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">CVC</label>
                  <Input required placeholder="123" className="bg-background border-border rounded-none" />
                </div>
              </div>
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground rounded-none h-12 uppercase tracking-widest">
              Complete Purchase
            </Button>
          </form>
        )}

        {step === "success" && (
          <div className="text-center py-8 space-y-6 animate-in slide-in-from-bottom-4">
            <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="font-serif text-3xl text-primary">Order Confirmed</h2>
            <p className="text-muted-foreground font-sans max-w-xs mx-auto">
              Thank you for shopping with House of Yokshi. Your elegant pieces are being prepared for delivery.
            </p>
            <Button 
              onClick={close}
              className="w-full bg-primary text-primary-foreground rounded-none h-12 uppercase tracking-widest mt-8"
            >
              Return to Shop
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
