"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export function HeroSection() {
  const [email, setEmail] = useState("");

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for joining our waitlist! We'll contact you at ${email} when we launch.`);
      setEmail("");
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Social Proof Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
            Trusted by 200+ SaaS founders
          </Badge>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Deploy Enterprise Billing in{" "}
            <span className="text-blue-600">24 Hours</span>, Not 24 Days
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Stop losing revenue to broken billing systems. Get Stripe-powered subscription management 
            that deploys instantly and reduces billing errors by 80%.
          </p>

          {/* CTA Form */}
          <div className="max-w-md mx-auto mb-8">
            <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 text-lg"
              />
              <Button type="submit" size="lg" className="h-12 px-8 text-lg font-semibold">
                Join the Waitlist - Launch Early 2025
              </Button>
            </form>
          </div>

          {/* Secondary CTA */}
          <Button variant="outline" size="lg" className="mb-12">
            Watch 2-Minute Demo
          </Button>

          {/* Hero Visual */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-2xl p-8 border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Before */}
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-red-600 mb-4">Before: Billing Chaos</h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Manual spreadsheet tracking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Failed payment alerts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Tax compliance nightmares</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Revenue leaks</span>
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-green-600 mb-4">After: Clean Dashboard</h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Real-time MRR tracking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Automated dunning campaigns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Global tax compliance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Revenue optimization</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Metrics */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">$47K</div>
                  <div className="text-sm text-gray-600">MRR</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">2.1%</div>
                  <div className="text-sm text-gray-600">Churn</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">23%</div>
                  <div className="text-sm text-gray-600">Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
