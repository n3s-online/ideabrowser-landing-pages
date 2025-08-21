import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function DemoSection() {
  const tourHighlights = [
    {
      step: "1",
      title: "Dashboard setup in under 60 seconds",
      description: "Connect your Stripe account and watch your billing system come to life",
      icon: "⚡"
    },
    {
      step: "2", 
      title: "Revenue analytics that tell a story",
      description: "Beautiful charts and insights that help you make data-driven decisions",
      icon: "📊"
    },
    {
      step: "3",
      title: "Dunning campaigns that actually work",
      description: "Smart, personalized payment recovery that customers respond to",
      icon: "💌"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-6 px-4 py-2 text-sm bg-purple-600">
            See It In Action
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            See It In Action:{" "}
            <span className="text-purple-600">2-Minute Product Tour</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just read about it - see exactly how SaaS Billing in a Day transforms 
            your billing operations from chaos to clarity.
          </p>
        </div>

        {/* Video/Demo Container */}
        <div className="bg-white rounded-lg shadow-2xl p-8 mb-16 max-w-5xl mx-auto">
          <div className="relative">
            {/* Mock Video Player */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg aspect-video flex items-center justify-center relative overflow-hidden">
              {/* Play Button */}
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full w-20 h-20 p-0">
                  <div className="text-3xl">▶️</div>
                </Button>
              </div>
              
              {/* Mock Dashboard Preview */}
              <div className="absolute inset-4 bg-white rounded opacity-80">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-semibold text-gray-800">SaaS Billing Dashboard</div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="bg-blue-50 rounded p-2">
                      <div className="text-xs text-gray-600">MRR</div>
                      <div className="text-sm font-bold text-blue-600">$47K</div>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <div className="text-xs text-gray-600">Growth</div>
                      <div className="text-sm font-bold text-green-600">+23%</div>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <div className="text-xs text-gray-600">Churn</div>
                      <div className="text-sm font-bold text-purple-600">2.1%</div>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded h-16 flex items-center justify-center">
                    <div className="text-xs text-gray-500">📈 Revenue Chart</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Video Stats */}
            <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
              👁️ 12,847 views
            </div>
          </div>
          
          <div className="text-center mt-6">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Watch Full Demo (2:15)
            </Button>
            <p className="text-sm text-gray-500 mt-2">
              No signup required • See real customer data
            </p>
          </div>
        </div>

        {/* Tour Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tourHighlights.map((highlight, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full text-xl font-bold mb-4">
                {highlight.step}
              </div>
              <div className="text-3xl mb-3">{highlight.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{highlight.title}</h3>
              <p className="text-gray-600 text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Step-by-Step Screenshots */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Step-by-Step Setup Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4 aspect-square flex items-center justify-center">
                <div className="text-4xl">🔗</div>
              </div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Step 1: Connect Stripe</div>
              <div className="text-xs text-gray-600">One-click integration with your existing Stripe account</div>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4 aspect-square flex items-center justify-center">
                <div className="text-4xl">⚙️</div>
              </div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Step 2: Configure Settings</div>
              <div className="text-xs text-gray-600">Set up your billing rules, tax settings, and preferences</div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4 aspect-square flex items-center justify-center">
                <div className="text-4xl">📊</div>
              </div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Step 3: Import Data</div>
              <div className="text-xs text-gray-600">Automatically sync your existing customer and subscription data</div>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4 aspect-square flex items-center justify-center">
                <div className="text-4xl">🚀</div>
              </div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Step 4: Go Live</div>
              <div className="text-xs text-gray-600">Your enterprise billing system is ready to use!</div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Badge variant="default" className="bg-green-600 text-white px-4 py-2">
              Average setup time: 23 minutes
            </Badge>
          </div>
        </div>

        {/* Interactive Demo CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Try It Yourself?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Get hands-on with our interactive demo. No signup required - 
              see exactly how your billing dashboard would look with your data.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              Start Interactive Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
