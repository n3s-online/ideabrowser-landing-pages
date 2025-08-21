import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function SolutionSection() {
  const features = [
    {
      title: "24-hour deployment with zero code",
      description:
        "Connect your Stripe account and we'll have your billing system running by tomorrow",
      icon: "🚀",
      stat: "< 24hrs",
    },
    {
      title: "80% fewer billing errors than manual systems",
      description:
        "Automated calculations, validation, and error handling eliminate human mistakes",
      icon: "✅",
      stat: "80% fewer errors",
    },
    {
      title: "Global tax compliance built-in",
      description:
        "VAT, GST, sales tax across 50+ jurisdictions handled automatically",
      icon: "🌍",
      stat: "50+ countries",
    },
    {
      title: "Smart dunning that recovers 40% more revenue",
      description:
        "AI-powered payment recovery campaigns with personalized messaging",
      icon: "💰",
      stat: "40% more recovery",
    },
    {
      title: "Beautiful dashboards your team will actually use",
      description:
        "Real-time analytics, forecasting, and insights that drive business decisions",
      icon: "📊",
      stat: "Real-time data",
    },
  ];

  const integrations = [
    { name: "Stripe", logo: "💳" },
    { name: "Slack", logo: "💬" },
    { name: "Zapier", logo: "⚡" },
    { name: "HubSpot", logo: "🎯" },
    { name: "Salesforce", logo: "☁️" },
    { name: "QuickBooks", logo: "📚" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge
            variant="default"
            className="mb-6 px-4 py-2 text-sm bg-blue-600"
          >
            The Solution You've Been Waiting For
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            One-Click Billing That{" "}
            <span className="text-blue-600">Just Works</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            Stop building billing infrastructure from scratch. Get
            enterprise-grade subscription management that deploys in hours, not
            months.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl">
                  {feature.icon}
                </div>
                <Badge
                  variant="secondary"
                  className="text-xs font-medium bg-blue-50 text-blue-700 border-blue-200"
                >
                  {feature.stat}
                </Badge>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Integrations */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Integrates with your existing stack
          </h3>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Connect seamlessly with the tools you already use. No complex setup
            required.
          </p>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-4xl mx-auto">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="text-3xl mb-3 p-3 bg-gray-50 rounded-xl">
                  {integration.logo}
                </div>
                <div className="text-sm font-medium text-gray-700">
                  {integration.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
