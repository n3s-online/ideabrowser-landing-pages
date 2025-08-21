import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PricingSection() {
  const pricingTiers = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for early-stage SaaS",
      customers: "Up to 100 customers",
      popular: false,
      features: [
        "Stripe integration",
        "Basic analytics dashboard",
        "Email dunning campaigns",
        "Tax calculation (US only)",
        "Standard support",
        "Basic reporting"
      ],
      cta: "Start Free Trial"
    },
    {
      name: "Growth",
      price: "$199",
      period: "/month",
      description: "Most popular for scaling SaaS",
      customers: "Up to 500 customers",
      popular: true,
      features: [
        "Everything in Starter",
        "Advanced analytics & forecasting",
        "Smart dunning with A/B testing",
        "Global tax compliance (50+ countries)",
        "Priority support",
        "Custom reporting",
        "Slack/Teams integration",
        "Revenue optimization insights"
      ],
      cta: "Start Free Trial"
    },
    {
      name: "Scale",
      price: "$399",
      period: "/month",
      description: "For established SaaS businesses",
      customers: "Up to 2,000 customers",
      popular: false,
      features: [
        "Everything in Growth",
        "White-labeled customer portal",
        "Advanced dunning automation",
        "Custom integrations",
        "Dedicated account manager",
        "Custom onboarding",
        "SLA guarantee",
        "Advanced security features"
      ],
      cta: "Contact Sales"
    }
  ];

  const valueProps = [
    {
      title: "No setup fees",
      description: "Get started immediately without upfront costs",
      icon: "🚫💰"
    },
    {
      title: "Cancel anytime",
      description: "No long-term contracts or commitments",
      icon: "✅"
    },
    {
      title: "Pays for itself in the first month",
      description: "Average customer recovers costs within 30 days",
      icon: "📈"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-6 px-4 py-2 text-sm bg-blue-600">
            Transparent Pricing
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pricing That{" "}
            <span className="text-blue-600">Scales With Your Success</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your current needs. Upgrade anytime as you grow. 
            All plans include our core billing features and 24/7 support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className={`relative ${tier.popular ? 'border-blue-500 border-2 shadow-lg' : 'border-gray-200'}`}>
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">{tier.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-gray-600">{tier.period}</span>
                </div>
                <p className="text-gray-600 mt-2">{tier.description}</p>
                <p className="text-sm font-semibold text-blue-600 mt-1">{tier.customers}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${tier.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                  variant={tier.popular ? "default" : "outline"}
                  size="lg"
                >
                  {tier.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {valueProps.map((prop, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{prop.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{prop.title}</h3>
              <p className="text-gray-600 text-sm">{prop.description}</p>
            </div>
          ))}
        </div>

        {/* ROI Calculator */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ROI Calculator: See Your Savings
            </h3>
            <p className="text-gray-600">
              Based on average customer data, here's what you could save:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Current Costs */}
            <div className="bg-white rounded-lg p-6">
              <h4 className="text-lg font-semibold text-red-600 mb-4">Current Monthly Costs</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Developer time (40hrs @ $100/hr):</span>
                  <span className="text-red-600">$4,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Billing errors & failed payments:</span>
                  <span className="text-red-600">$2,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax compliance issues:</span>
                  <span className="text-red-600">$1,200</span>
                </div>
                <div className="flex justify-between">
                  <span>Manual reporting & analytics:</span>
                  <span className="text-red-600">$800</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total Monthly Cost:</span>
                  <span className="text-red-600">$8,500</span>
                </div>
              </div>
            </div>

            {/* With Our Solution */}
            <div className="bg-white rounded-lg p-6">
              <h4 className="text-lg font-semibold text-green-600 mb-4">With SaaS Billing in a Day</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Monthly subscription (Growth plan):</span>
                  <span className="text-green-600">$199</span>
                </div>
                <div className="flex justify-between">
                  <span>Reduced billing errors:</span>
                  <span className="text-green-600">$200</span>
                </div>
                <div className="flex justify-between">
                  <span>Automated tax compliance:</span>
                  <span className="text-green-600">$0</span>
                </div>
                <div className="flex justify-between">
                  <span>Built-in reporting:</span>
                  <span className="text-green-600">$0</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total Monthly Cost:</span>
                  <span className="text-green-600">$399</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Badge variant="default" className="bg-green-600 text-white px-6 py-3 text-lg">
              Monthly Savings: $8,101 | Annual Savings: $97,212
            </Badge>
            <p className="text-sm text-gray-600 mt-2">
              ROI: 2,030% in the first year
            </p>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-yellow-50 border border-yellow-200 rounded-lg px-6 py-4">
            <div className="text-2xl">🛡️</div>
            <div>
              <div className="font-semibold text-gray-900">30-Day Money Back Guarantee</div>
              <div className="text-sm text-gray-600">Not satisfied? Get a full refund, no questions asked.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
