"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

export function UrgencySection() {
  const [email, setEmail] = useState("");
  const [spotsRemaining, setSpotsRemaining] = useState(23);
  const [timeLeft, setTimeLeft] = useState({
    days: 89,
    hours: 14,
    minutes: 32,
    seconds: 45,
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(
        `Welcome to our exclusive early access list! We'll contact you at ${email} with your early access details.`
      );
      setEmail("");
      setSpotsRemaining((prev) => Math.max(0, prev - 1));
    }
  };

  const earlyAccessBenefits = [
    {
      title: "50% off first 6 months",
      description: "Save thousands on your billing infrastructure",
      icon: "💰",
      value: "$1,200+ saved",
    },
    {
      title: "Personal onboarding call",
      description: "1-on-1 setup assistance with our billing experts",
      icon: "👥",
      value: "$500 value",
    },
    {
      title: "Priority feature requests",
      description: "Your feedback shapes our roadmap",
      icon: "🚀",
      value: "Priceless",
    },
    {
      title: "Lifetime grandfathered pricing",
      description: "Lock in early access rates forever",
      icon: "🔒",
      value: "Guaranteed",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-orange-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge
            variant="destructive"
            className="mb-6 px-4 py-2 text-sm animate-pulse"
          >
            Limited Time Offer
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Limited Early Access -{" "}
            <span className="text-red-600">50 Founders Only</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're launching Q1 2026 with exclusive early access for 50
            forward-thinking SaaS founders. Don't miss your chance to transform
            your billing operations.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="bg-white rounded-lg shadow-2xl p-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Early Access Closes In:
            </h3>
            <p className="text-gray-600">
              Secure your spot before it's too late
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-lg p-4 mb-2">
                <div className="text-3xl font-bold">{timeLeft.days}</div>
              </div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-lg p-4 mb-2">
                <div className="text-3xl font-bold">{timeLeft.hours}</div>
              </div>
              <div className="text-sm text-gray-600">Hours</div>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-lg p-4 mb-2">
                <div className="text-3xl font-bold">{timeLeft.minutes}</div>
              </div>
              <div className="text-sm text-gray-600">Minutes</div>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-lg p-4 mb-2">
                <div className="text-3xl font-bold">{timeLeft.seconds}</div>
              </div>
              <div className="text-sm text-gray-600">Seconds</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Early Access Spots</span>
              <span className="text-sm font-semibold text-red-600">
                {spotsRemaining} of 50 remaining
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-red-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${((50 - spotsRemaining) / 50) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Waitlist Form */}
          <form onSubmit={handleWaitlistSubmit} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email for early access"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-14 px-4 text-base border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-0 transition-colors"
              />
              <Button
                type="submit"
                className="h-14 px-8 text-base font-medium bg-red-600 hover:bg-red-700 rounded-xl transition-all duration-200 whitespace-nowrap"
              >
                Reserve My Spot
              </Button>
            </div>
            <p className="text-sm text-gray-500 text-center mt-3">
              Limited early access spots available
            </p>
          </form>
        </div>

        {/* Early Access Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {earlyAccessBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {benefit.description}
              </p>
              <Badge variant="secondary" className="text-xs">
                {benefit.value}
              </Badge>
            </div>
          ))}
        </div>

        {/* Launch Timeline */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Launch Timeline
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full text-2xl font-bold mb-4">
                1
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Early Access
              </h4>
              <p className="text-sm text-gray-600 mb-2">Q1 2025</p>
              <p className="text-xs text-gray-500">
                50 founders get exclusive access with personal onboarding
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full text-2xl font-bold mb-4">
                2
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Beta Launch
              </h4>
              <p className="text-sm text-gray-600 mb-2">Q2 2025</p>
              <p className="text-xs text-gray-500">
                Open to 500 SaaS companies with full feature set
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full text-2xl font-bold mb-4">
                3
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Public Launch
              </h4>
              <p className="text-sm text-gray-600 mb-2">Q3 2025</p>
              <p className="text-xs text-gray-500">
                Full public availability with enterprise features
              </p>
            </div>
          </div>
        </div>

        {/* Final Urgency Push */}
        <div className="text-center mt-12">
          <div className="bg-red-600 text-white rounded-lg p-6 max-w-2xl mx-auto">
            <div className="text-3xl mb-3">⚠️</div>
            <h3 className="text-xl font-bold mb-2">
              Don't Wait - Spots Are Going Fast!
            </h3>
            <p className="text-red-100 text-sm">
              Early access is limited to ensure quality onboarding. Only{" "}
              {spotsRemaining} spots remain for our Q1 2025 launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
