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
      alert(
        `Thank you for joining our waitlist! We'll contact you at ${email} when we launch.`
      );
      setEmail("");
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Product Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
            Coming Early 2025
          </Badge>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Deploy Enterprise Billing in{" "}
            <span className="text-blue-600">24 Hours</span>, Not 24 Days
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Stop losing revenue to broken billing systems. Get Stripe-powered
            subscription management that deploys instantly and reduces billing
            errors by 80%.
          </p>

          {/* CTA Form */}
          <div className="max-w-lg mx-auto mb-12">
            <form
              onSubmit={handleWaitlistSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-14 px-4 text-base border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors"
              />
              <Button
                type="submit"
                className="h-14 px-8 text-base font-medium bg-blue-600 hover:bg-blue-700 rounded-xl transition-all duration-200 whitespace-nowrap"
              >
                Join Waitlist
              </Button>
            </form>
            <p className="text-sm text-gray-500 text-center mt-3">
              Get early access • No spam, unsubscribe anytime
            </p>
          </div>

          {/* Hero Visual */}
          <div className="relative max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Before */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 text-lg">😤</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Before: Billing Chaos
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Manual spreadsheet tracking",
                      "Failed payment alerts",
                      "Tax compliance nightmares",
                      "Revenue leaks",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-red-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* After */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-lg">😌</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      After: Clean Dashboard
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Real-time MRR tracking",
                      "Automated dunning campaigns",
                      "Global tax compliance",
                      "Revenue optimization",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Metrics Dashboard Preview */}
              <div className="mt-12 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">
                  Your Dashboard Preview
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      $47K
                    </div>
                    <div className="text-sm font-medium text-gray-600">
                      Monthly Recurring Revenue
                    </div>
                    <div className="text-xs text-green-600 mt-1">
                      ↗ +12% this month
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      2.1%
                    </div>
                    <div className="text-sm font-medium text-gray-600">
                      Churn Rate
                    </div>
                    <div className="text-xs text-green-600 mt-1">
                      ↘ -0.3% improvement
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      23%
                    </div>
                    <div className="text-sm font-medium text-gray-600">
                      Growth Rate
                    </div>
                    <div className="text-xs text-green-600 mt-1">
                      ↗ +5% vs last quarter
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
