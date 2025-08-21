import { Badge } from "@/components/ui/badge";

export function ProblemSection() {
  const painPoints = [
    {
      title: "Manual billing errors cost you $10K+ annually",
      description:
        "Spreadsheet mistakes, missed payments, and calculation errors drain your revenue",
      icon: "💸",
    },
    {
      title: "Stripe integration takes weeks of dev time",
      description:
        "Complex webhooks, subscription logic, and edge cases consume precious development resources",
      icon: "⏰",
    },
    {
      title: "Tax compliance nightmares across 50+ jurisdictions",
      description:
        "VAT, GST, sales tax - staying compliant while scaling globally is a full-time job",
      icon: "📋",
    },
    {
      title: "Dunning campaigns that customers ignore",
      description:
        "Generic payment failure emails with poor recovery rates hurt your bottom line",
      icon: "📧",
    },
    {
      title: "Revenue leaks you can't even track",
      description:
        "Without proper analytics, you're flying blind on churn, upgrades, and optimization opportunities",
      icon: "🕳️",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="destructive" className="mb-6 px-4 py-2 text-sm">
            The Hidden Cost of DIY Billing
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            SaaS Founders Waste <span className="text-red-600">3+ Weeks</span>{" "}
            on Billing
            <br />
            (And Still Lose Revenue)
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While you're wrestling with billing complexity, your competitors are
            building features and acquiring customers. Every day spent on
            billing is a day not spent growing your business.
          </p>
        </div>

        {/* Split Screen Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Frustrated Founder */}
          <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto">
                😤
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Frustrated Founder
              </h3>
              <p className="text-gray-600">Stuck in billing hell</p>
            </div>

            <div className="space-y-4">
              {[
                "3 AM debugging webhook failures",
                "Manually calculating taxes",
                "Chasing failed payments",
                "Building reports in Excel",
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

          {/* Calm Founder */}
          <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto">
                😌
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Calm Founder
              </h3>
              <p className="text-gray-600">Billing runs itself</p>
            </div>

            <div className="space-y-4">
              {[
                "Automated revenue recovery",
                "Global tax compliance built-in",
                "Smart dunning campaigns",
                "Real-time analytics dashboard",
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

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:border-red-200 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-2xl mb-6">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Time Wasted Visual */}
        <div className="mt-16 text-center">
          <div className="bg-red-50 rounded-lg p-8 border border-red-200">
            <div className="text-6xl mb-4">⏰</div>
            <h3 className="text-2xl font-bold text-red-600 mb-2">
              Average Time Wasted: 3-6 Weeks
            </h3>
            <p className="text-gray-600">
              That's 120-240 hours you could spend building features, talking to
              customers, or growing your business instead of fighting with
              billing systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
