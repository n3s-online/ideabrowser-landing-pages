import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "How is this different from just using Stripe directly?",
      answer: "While Stripe handles payments, we provide the complete billing infrastructure on top of it. This includes subscription management, dunning campaigns, tax compliance, analytics, reporting, and customer portals. Think of us as the missing layer between Stripe and your business needs. You get enterprise-grade billing without the months of development time."
    },
    {
      question: "What if I already have a billing system?",
      answer: "We make migration seamless! Our team will help you migrate your existing data, subscriptions, and customer information. Most migrations are completed within 24-48 hours with zero downtime. We support imports from most major billing platforms including Chargebee, Recurly, and custom solutions."
    },
    {
      question: "Do you handle international tax compliance?",
      answer: "Yes! We automatically handle VAT, GST, and sales tax across 50+ countries. Our system stays updated with the latest tax regulations and automatically applies the correct rates based on your customer's location. You'll never have to worry about tax compliance issues again."
    },
    {
      question: "How long does migration take?",
      answer: "For most SaaS companies, the complete setup takes less than 24 hours. Simple setups can be done in under 2 hours, while complex migrations with custom requirements typically take 1-2 business days. Our team handles the heavy lifting, so you can focus on your business."
    },
    {
      question: "What integrations do you support?",
      answer: "We integrate with 50+ popular tools including Slack, HubSpot, Salesforce, QuickBooks, Zapier, and more. Our API allows for custom integrations, and our team can help build specific integrations you need. All integrations are included in your plan at no extra cost."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We're SOC 2 Type II certified and follow enterprise-grade security practices. All data is encrypted in transit and at rest. We never store payment information - that stays securely with Stripe. Your billing data is backed up daily and we maintain 99.9% uptime SLA."
    },
    {
      question: "Can I customize the customer portal?",
      answer: "Yes! Our Growth and Scale plans include customizable customer portals. You can add your branding, customize the layout, and even white-label the entire experience. Customers can manage their subscriptions, update payment methods, and view invoices through a beautiful, branded interface."
    },
    {
      question: "What happens if I need to cancel?",
      answer: "You can cancel anytime with no penalties. We'll help you export all your data and provide transition support. We also offer a 30-day money-back guarantee if you're not completely satisfied. Most customers see ROI within the first month, but we stand behind our service."
    },
    {
      question: "Do you offer phone support?",
      answer: "Yes! All plans include email support, and Growth/Scale plans include priority phone support. Our average response time is under 2 hours for email and immediate for phone support during business hours. We also provide dedicated account managers for Scale plan customers."
    },
    {
      question: "Can you handle high-volume billing?",
      answer: "Absolutely. Our infrastructure scales automatically and we currently process millions of transactions monthly for our customers. Whether you have 100 or 100,000 customers, our system handles the load seamlessly. Enterprise customers get dedicated infrastructure and custom SLAs."
    }
  ];

  const integrationLogos = [
    { name: "Stripe", icon: "💳" },
    { name: "Slack", icon: "💬" },
    { name: "HubSpot", icon: "🎯" },
    { name: "Salesforce", icon: "☁️" },
    { name: "QuickBooks", icon: "📚" },
    { name: "Zapier", icon: "⚡" },
    { name: "Mailchimp", icon: "📧" },
    { name: "Intercom", icon: "💭" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-6 px-4 py-2 text-sm bg-gray-600">
            Questions & Answers
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked{" "}
            <span className="text-gray-600">Questions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers. Here are the most common questions 
            we get from SaaS founders considering our platform.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-16">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Integration Logos */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Supported Integrations
          </h3>
          
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 max-w-3xl mx-auto">
            {integrationLogos.map((integration, index) => (
              <div key={index} className="text-center opacity-60 hover:opacity-100 transition-opacity">
                <div className="text-3xl mb-2">{integration.icon}</div>
                <div className="text-xs text-gray-500">{integration.name}</div>
              </div>
            ))}
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            + 40 more integrations available
          </p>
        </div>

        {/* Still Have Questions */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <div className="text-4xl mb-4">🤔</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our team is here to help! Schedule a 15-minute call with one of our billing experts 
            to discuss your specific needs and see if we're a good fit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Schedule a Call
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Email Us
            </button>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            Average response time: 2 hours
          </p>
        </div>
      </div>
    </section>
  );
}
