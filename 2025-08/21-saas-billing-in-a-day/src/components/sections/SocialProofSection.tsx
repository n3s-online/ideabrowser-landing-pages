import { Badge } from "@/components/ui/badge";

export function SocialProofSection() {
  const testimonials = [
    {
      quote: "Saved me 3 weeks of dev time and $15K in billing errors. The ROI was immediate.",
      author: "Sarah K.",
      title: "Founder",
      company: "FinTech SaaS",
      avatar: "👩‍💼",
      metrics: "3 weeks saved"
    },
    {
      quote: "Finally, billing that doesn't break at 2 AM. My sleep schedule thanks you.",
      author: "Mike R.",
      title: "CTO",
      company: "B2B Platform",
      avatar: "👨‍💻",
      metrics: "Zero downtime"
    },
    {
      quote: "Went from manual tax calculations to automated compliance in 24 hours. Game changer.",
      author: "Alex Chen",
      title: "CEO",
      company: "EdTech Startup",
      avatar: "👨‍🎓",
      metrics: "50+ countries"
    },
    {
      quote: "Revenue recovery improved by 40% with their smart dunning campaigns.",
      author: "Lisa M.",
      title: "Head of Finance",
      company: "SaaS Analytics",
      avatar: "👩‍💼",
      metrics: "40% more recovery"
    }
  ];

  const customerLogos = [
    { name: "TechFlow", logo: "🚀" },
    { name: "DataSync", logo: "📊" },
    { name: "CloudBase", logo: "☁️" },
    { name: "DevTools", logo: "🛠️" },
    { name: "AnalyticsPro", logo: "📈" },
    { name: "ScaleUp", logo: "⚡" }
  ];

  const stats = [
    { number: "200+", label: "SaaS Founders", icon: "👥" },
    { number: "$2.3M", label: "Revenue Recovered", icon: "💰" },
    { number: "80%", label: "Error Reduction", icon: "✅" },
    { number: "24hrs", label: "Average Setup", icon: "⏰" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-6 px-4 py-2 text-sm bg-green-600">
            Trusted by Industry Leaders
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Join{" "}
            <span className="text-green-600">200+ SaaS Founders</span>
            <br />
            Who Got Their Time Back
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what founders are saying about 
            how we've transformed their billing operations.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.metrics}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    {testimonial.title} at {testimonial.company}
                  </p>
                </div>
              </div>
              
              <blockquote className="text-gray-700 italic mb-4">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Before/After Revenue Chart */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Real Results from Real Customers
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-red-600 mb-4">Before: Manual Billing</h4>
              <div className="bg-red-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-red-600 mb-2">$38K</div>
                <div className="text-sm text-gray-600 mb-4">Monthly Revenue</div>
                <div className="space-y-2 text-sm text-left">
                  <div className="flex justify-between">
                    <span>Billing Errors:</span>
                    <span className="text-red-600">-$3.2K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Failed Recoveries:</span>
                    <span className="text-red-600">-$2.8K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax Issues:</span>
                    <span className="text-red-600">-$1.5K</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between font-semibold">
                    <span>Net Revenue:</span>
                    <span className="text-red-600">$30.5K</span>
                  </div>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-green-600 mb-4">After: SaaS Billing in a Day</h4>
              <div className="bg-green-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">$47K</div>
                <div className="text-sm text-gray-600 mb-4">Monthly Revenue</div>
                <div className="space-y-2 text-sm text-left">
                  <div className="flex justify-between">
                    <span>Billing Errors:</span>
                    <span className="text-green-600">-$0.2K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Smart Recovery:</span>
                    <span className="text-green-600">+$4.1K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax Optimization:</span>
                    <span className="text-green-600">+$0.8K</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between font-semibold">
                    <span>Net Revenue:</span>
                    <span className="text-green-600">$51.7K</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <Badge variant="default" className="bg-green-600 text-white px-4 py-2">
              +$21.2K Additional Annual Revenue
            </Badge>
          </div>
        </div>

        {/* Customer Logos */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-8">
            Trusted by innovative SaaS companies
          </h3>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-3xl mx-auto opacity-60">
            {customerLogos.map((logo, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{logo.logo}</div>
                <div className="text-xs text-gray-500">{logo.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
