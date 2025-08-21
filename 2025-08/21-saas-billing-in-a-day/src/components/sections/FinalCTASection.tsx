"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export function FinalCTASection() {
  const [formData, setFormData] = useState({
    email: "",
    company: "",
    mrr: "",
    challenge: "",
  });

  const mrrRanges = [
    "< $1K",
    "$1K - $10K",
    "$10K - $50K",
    "$50K - $100K",
    "$100K+",
  ];

  const challenges = [
    "Manual billing errors",
    "Failed payment recovery",
    "Tax compliance issues",
    "Lack of analytics",
    "Integration complexity",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email) {
      alert(`Thank you for joining our waitlist! 
      
Email: ${formData.email}
Company: ${formData.company || "Not provided"}
MRR Range: ${formData.mrr || "Not provided"}
Biggest Challenge: ${formData.challenge || "Not provided"}

We'll be in touch soon with your early access details and a personalized demo based on your needs.`);

      setFormData({
        email: "",
        company: "",
        mrr: "",
        challenge: "",
      });
    }
  };

  const securityBadges = [
    { name: "SSL Secured", icon: "🔒" },
    { name: "Privacy Protected", icon: "🛡️" },
    { name: "GDPR Compliant", icon: "✅" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-2 text-sm bg-white text-blue-600"
          >
            Final Call to Action
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Stop Fighting With Billing.
            <br />
            <span className="text-yellow-300">
              Start Building Your Business.
            </span>
          </h2>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join the waitlist and get enterprise billing that deploys in 24
            hours. Transform your billing operations from chaos to clarity.
          </p>
        </div>

        {/* Main CTA Form */}
        <Card className="bg-white text-gray-900 shadow-2xl mb-12">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Reserve Your Spot - Free Early Access
              </h3>
              <p className="text-gray-600">
                Get priority access and 50% off your first 6 months
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Email Address *
                </label>
                <Input
                  type="email"
                  placeholder="founder@yourcompany.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="h-14 px-4 text-base border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors"
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Company Name (Optional)
                </label>
                <Input
                  type="text"
                  placeholder="Your SaaS Company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="h-14 px-4 text-base border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* MRR Range */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Current MRR Range (Optional)
                  </label>
                  <select
                    value={formData.mrr}
                    onChange={(e) =>
                      setFormData({ ...formData, mrr: e.target.value })
                    }
                    className="w-full h-14 px-4 text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors bg-white"
                  >
                    <option value="">Select range...</option>
                    {mrrRanges.map((range, index) => (
                      <option key={index} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Biggest Challenge */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Biggest Billing Challenge (Optional)
                  </label>
                  <select
                    value={formData.challenge}
                    onChange={(e) =>
                      setFormData({ ...formData, challenge: e.target.value })
                    }
                    className="w-full h-14 px-4 text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors bg-white"
                  >
                    <option value="">Select challenge...</option>
                    {challenges.map((challenge, index) => (
                      <option key={index} value={challenge}>
                        {challenge}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-16 text-lg font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Reserve Your Spot - Free Early Access
              </Button>
            </form>

            {/* Risk Reversal */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">
                <span className="font-semibold">No commitment.</span>{" "}
                Unsubscribe anytime. We respect your privacy and will never spam
                you.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Founder Personal Touch */}
        <div className="bg-white bg-opacity-10 rounded-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-6xl">👨‍💼</div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">
                A Personal Note from Our Founder
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                "I've been where you are - spending weeks building billing
                systems instead of features. That's why I created SaaS Billing
                in a Day. Let us handle the billing complexity so you can focus
                on what matters: growing your business."
              </p>
              <p className="text-blue-200 text-sm mt-2 font-semibold">
                - Alex Johnson, Founder & CEO
              </p>
            </div>
          </div>
        </div>

        {/* Security Badges */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {securityBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-blue-100"
              >
                <span className="text-2xl">{badge.icon}</span>
                <span className="text-sm font-semibold">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Final Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-yellow-300 mb-2">
              24 Hours
            </div>
            <div className="text-blue-100 text-sm">Average Setup Time</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-300 mb-2">80%</div>
            <div className="text-blue-100 text-sm">Fewer Billing Errors</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-300 mb-2">$97K</div>
            <div className="text-blue-100 text-sm">Average Annual Savings</div>
          </div>
        </div>

        {/* Last Chance Message */}
        <div className="text-center mt-12">
          <div className="bg-red-600 bg-opacity-20 border border-red-400 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-red-100 text-sm">
              ⚠️ <strong>Limited Time:</strong> Early access pricing ends when
              we reach 50 founders. Don't miss your chance to save $1,200+ and
              get personal onboarding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
