import { Badge } from "@/components/ui/badge";

export function SocialProofSection() {
  const stats = [
    { number: "24hrs", label: "Setup Time", icon: "⏰" },
    { number: "80%", label: "Error Reduction", icon: "✅" },
    { number: "50+", label: "Countries Supported", icon: "🌍" },
    { number: "99.9%", label: "Uptime SLA", icon: "🚀" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge
            variant="default"
            className="mb-6 px-4 py-2 text-sm bg-blue-600"
          >
            Built for SaaS Founders
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Enterprise Billing{" "}
            <span className="text-blue-600">Made Simple</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Focus on building your product while we handle the complexity of
            subscription billing, tax compliance, and revenue optimization.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why Choose Our Platform?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We've built the billing infrastructure you wish existed. No more
            wrestling with complex integrations, tax calculations, or failed
            payment recovery. Just clean, reliable billing that scales with your
            business.
          </p>
        </div>
      </div>
    </section>
  );
}
