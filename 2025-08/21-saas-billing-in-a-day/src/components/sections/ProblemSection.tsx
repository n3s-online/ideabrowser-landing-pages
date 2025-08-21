import { Badge } from "@/components/ui/badge";

export function ProblemSection() {
  const painPoints = [
    {
      title: "Manual billing errors cost you $10K+ annually",
      description: "Spreadsheet mistakes, missed payments, and calculation errors drain your revenue",
      icon: "💸"
    },
    {
      title: "Stripe integration takes weeks of dev time",
      description: "Complex webhooks, subscription logic, and edge cases consume precious development resources",
      icon: "⏰"
    },
    {
      title: "Tax compliance nightmares across 50+ jurisdictions",
      description: "VAT, GST, sales tax - staying compliant while scaling globally is a full-time job",
      icon: "📋"
    },
    {
      title: "Dunning campaigns that customers ignore",
      description: "Generic payment failure emails with poor recovery rates hurt your bottom line",
      icon: "📧"
    },
    {
      title: "Revenue leaks you can't even track",
      description: "Without proper analytics, you're flying blind on churn, upgrades, and optimization opportunities",
      icon: "🕳️"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="destructive" className="mb-6 px-4 py-2 text-sm">
            The Hidden Cost of DIY Billing
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            SaaS Founders Waste{" "}
            <span className="text-red-600">3+ Weeks</span> on Billing
            <br />
            (And Still Lose Revenue)
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While you're wrestling with billing complexity, your competitors are building features 
            and acquiring customers. Every day spent on billing is a day not spent growing your business.
          </p>
        </div>

        {/* Split Screen Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Frustrated Founder */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-red-500">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">😤</div>
              <h3 className="text-xl font-semibold text-red-600">Frustrated Founder</h3>
              <p className="text-gray-600">Stuck in billing hell</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-red-600">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-sm">3 AM debugging webhook failures</span>
              </div>
              <div className="flex items-center gap-3 text-red-600">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-sm">Manually calculating taxes</span>
              </div>
              <div className="flex items-center gap-3 text-red-600">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-sm">Chasing failed payments</span>
              </div>
              <div className="flex items-center gap-3 text-red-600">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-sm">Building reports in Excel</span>
              </div>
            </div>
          </div>

          {/* Calm Founder */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-500">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">😌</div>
              <h3 className="text-xl font-semibold text-green-600">Calm Founder</h3>
              <p className="text-gray-600">Billing runs itself</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Automated revenue recovery</span>
              </div>
              <div className="flex items-center gap-3 text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Global tax compliance built-in</span>
              </div>
              <div className="flex items-center gap-3 text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Smart dunning campaigns</span>
              </div>
              <div className="flex items-center gap-3 text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Real-time analytics dashboard</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{point.title}</h3>
              <p className="text-gray-600 text-sm">{point.description}</p>
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
              That's 120-240 hours you could spend building features, talking to customers, 
              or growing your business instead of fighting with billing systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
