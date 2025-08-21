import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function SolutionSection() {
  const features = [
    {
      title: "24-hour deployment with zero code",
      description: "Connect your Stripe account and we'll have your billing system running by tomorrow",
      icon: "🚀",
      stat: "< 24hrs"
    },
    {
      title: "80% fewer billing errors than manual systems",
      description: "Automated calculations, validation, and error handling eliminate human mistakes",
      icon: "✅",
      stat: "80% fewer errors"
    },
    {
      title: "Global tax compliance built-in",
      description: "VAT, GST, sales tax across 50+ jurisdictions handled automatically",
      icon: "🌍",
      stat: "50+ countries"
    },
    {
      title: "Smart dunning that recovers 40% more revenue",
      description: "AI-powered payment recovery campaigns with personalized messaging",
      icon: "💰",
      stat: "40% more recovery"
    },
    {
      title: "Beautiful dashboards your team will actually use",
      description: "Real-time analytics, forecasting, and insights that drive business decisions",
      icon: "📊",
      stat: "Real-time data"
    }
  ];

  const integrations = [
    { name: "Stripe", logo: "💳" },
    { name: "Slack", logo: "💬" },
    { name: "Zapier", logo: "⚡" },
    { name: "HubSpot", logo: "🎯" },
    { name: "Salesforce", logo: "☁️" },
    { name: "QuickBooks", logo: "📚" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-6 px-4 py-2 text-sm bg-blue-600">
            The Solution You've Been Waiting For
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            One-Click Billing That{" "}
            <span className="text-blue-600">Just Works</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stop building billing infrastructure from scratch. Get enterprise-grade subscription 
            management that deploys in hours, not months.
          </p>

          <Button size="lg" className="mb-12">
            See How It Works
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{feature.icon}</div>
                <Badge variant="secondary" className="text-xs">
                  {feature.stat}
                </Badge>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Product Tour Preview */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interactive Product Tour
            </h3>
            <p className="text-gray-600">
              See how easy it is to set up enterprise billing in under 60 seconds
            </p>
          </div>

          {/* Mock Dashboard */}
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-lg font-semibold">SaaS Billing Dashboard</h4>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Monthly Recurring Revenue</div>
                <div className="text-2xl font-bold text-blue-600">$47,234</div>
                <div className="text-sm text-green-600">↗ +12.3% from last month</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Active Subscriptions</div>
                <div className="text-2xl font-bold text-green-600">1,247</div>
                <div className="text-sm text-green-600">↗ +8.7% from last month</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Churn Rate</div>
                <div className="text-2xl font-bold text-purple-600">2.1%</div>
                <div className="text-sm text-red-600">↘ -0.3% from last month</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-4xl mb-2">📈</div>
              <div className="text-sm text-gray-600">Revenue Analytics Chart</div>
            </div>
          </div>

          <div className="text-center mt-6">
            <Button variant="outline" size="lg">
              Start Interactive Demo
            </Button>
          </div>
        </div>

        {/* Integrations */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Integrates with your existing stack
          </h3>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-2xl mx-auto">
            {integrations.map((integration, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{integration.logo}</div>
                <div className="text-sm text-gray-600">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
