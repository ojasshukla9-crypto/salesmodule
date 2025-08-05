import React, { useState } from 'react';
import { Copy, Download, Edit, CheckCircle, Clock, Target } from 'lucide-react';

interface PitchSection {
  title: string;
  content: string;
  duration: string;
  tips: string[];
}

interface SalesPitchScriptProps {
  productService: string;
  clientType: string;
  industry: string;
}

export const SalesPitchScript: React.FC<SalesPitchScriptProps> = ({
  productService = "AI Digital Marketing Services",
  clientType = "Mid-Market Company",
  industry = "Technology"
}) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const pitchSections: PitchSection[] = [
    {
      title: "Opening & Rapport Building",
      duration: "2-3 minutes",
      content: `Hi [Client Name], thank you for taking the time to meet with me today. I know how valuable your time is, especially in the ${industry.toLowerCase()} industry where things move so quickly.

Before we dive in, I'd love to learn a bit more about your current marketing challenges. What's been keeping you up at night when it comes to reaching your target customers?

[Listen actively and take notes]

That's exactly why I wanted to speak with you today. We've helped several ${clientType.toLowerCase()}s in the ${industry.toLowerCase()} space overcome similar challenges.`,
      tips: [
        "Use their name frequently",
        "Reference their industry specifically",
        "Ask open-ended questions",
        "Show genuine interest in their responses"
      ]
    },
    {
      title: "Problem Identification",
      duration: "3-4 minutes",
      content: `Based on what you've shared and our experience with similar companies, I'm hearing three main challenges:

1. **Lead Quality**: You're getting leads, but they're not converting at the rate you need
2. **Marketing ROI**: It's difficult to track which marketing efforts are actually driving revenue
3. **Scalability**: Your current approach works, but it's hard to scale without proportionally increasing costs

Does that align with what you're experiencing? 

[Pause for confirmation]

Here's what's interesting - 73% of companies your size face these exact same challenges. The difference between those who thrive and those who struggle isn't the size of their marketing budget - it's how intelligently they deploy their resources.`,
      tips: [
        "Use specific statistics",
        "Relate to their industry",
        "Confirm understanding before proceeding",
        "Create urgency without pressure"
      ]
    },
    {
      title: "Solution Presentation",
      duration: "5-7 minutes",
      content: `This is where our ${productService} comes in. We've developed a comprehensive approach that addresses each of these challenges:

**For Lead Quality**: Our AI-powered targeting system analyzes over 200 data points to identify prospects who match your ideal customer profile. We're not just casting a wide net - we're using precision targeting.

**For Marketing ROI**: Every campaign comes with real-time analytics and attribution modeling. You'll know exactly which channels, messages, and audiences are driving revenue - not just clicks or impressions.

**For Scalability**: Our automated systems handle the heavy lifting while maintaining personalization. As your business grows, our platform scales with you without requiring proportional increases in your team or budget.

Let me show you a quick example of how this worked for [Similar Company Name], a ${industry.toLowerCase()} company similar to yours...

[Share specific case study with metrics]`,
      tips: [
        "Address each pain point specifically",
        "Use relevant case studies",
        "Include specific metrics and results",
        "Keep technical details simple"
      ]
    },
    {
      title: "Value Proposition & ROI",
      duration: "3-4 minutes",
      content: `Here's what this means for your business specifically:

**Conservative Projections** (based on companies similar to yours):
- 40-60% improvement in lead quality within 90 days
- 25-35% increase in marketing ROI within 6 months  
- 50-70% reduction in cost per acquisition

**Investment**: Our comprehensive package is $X per month, which typically represents 15-20% of what companies your size spend on marketing.

**ROI Timeline**: Most clients see positive ROI within 3-4 months, with full ROI typically achieved by month 6.

To put this in perspective - if we help you achieve just a 30% improvement in lead conversion (which is conservative based on our track record), that would represent approximately $X in additional revenue annually.

The question isn't whether you can afford to invest in this - it's whether you can afford not to.`,
      tips: [
        "Use conservative projections",
        "Relate investment to their current spending",
        "Provide clear ROI timeline",
        "Frame as opportunity cost"
      ]
    },
    {
      title: "Objection Handling",
      duration: "2-3 minutes",
      content: `I imagine you might have some questions or concerns. The most common ones I hear are:

**"The investment seems high"**: I understand. When you break it down, it's about $X per day - less than most companies spend on coffee for their team. And unlike coffee, this investment generates measurable returns.

**"We need to think about it"**: Absolutely, this is an important decision. What specific aspects would help you feel more confident moving forward? Is it the implementation process, the timeline, or something else?

**"We're already working with another provider"**: That's great that you're investing in marketing. What prompted you to take this meeting? Often, companies find that while their current solution handles some aspects well, there are gaps in [specific area based on their pain points].

What questions do you have for me?`,
      tips: [
        "Address objections proactively",
        "Reframe price as investment",
        "Ask clarifying questions",
        "Stay consultative, not pushy"
      ]
    },
    {
      title: "Closing & Next Steps",
      duration: "2-3 minutes",
      content: `Based on our conversation, I believe we can help you achieve the growth you're looking for. Here's what I'd recommend as next steps:

**Option 1 - Full Implementation**: We start with a comprehensive audit of your current marketing efforts, then implement our full system. This gives you the fastest path to results.

**Option 2 - Pilot Program**: We begin with a focused 90-day pilot targeting your highest-value customer segment. This lets you see results before making a larger commitment.

Which approach feels right for your situation?

[Based on their response]

Perfect. I'll send you a detailed proposal by [specific date] that outlines exactly what we discussed today, including timeline, investment, and projected outcomes.

I'd also like to schedule a follow-up call for [specific date] to review the proposal and answer any additional questions. Does [day/time] work for you?

Thank you again for your time today. I'm excited about the possibility of helping [Company Name] achieve its growth goals.`,
      tips: [
        "Offer clear options",
        "Assume the sale",
        "Set specific next steps",
        "End on a positive, forward-looking note"
      ]
    }
  ];

  const copyToClipboard = (content: string, section: string) => {
    navigator.clipboard.writeText(content);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const downloadScript = () => {
    const fullScript = pitchSections.map(section => 
      `${section.title}\n${'='.repeat(section.title.length)}\nDuration: ${section.duration}\n\n${section.content}\n\nKey Tips:\n${section.tips.map(tip => `• ${tip}`).join('\n')}\n\n`
    ).join('\n');
    
    const blob = new Blob([fullScript], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sales-pitch-script-${productService.toLowerCase().replace(/\s+/g, '-')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Custom Sales Pitch Script</h2>
            <p className="text-gray-600">
              Tailored for: <span className="font-semibold text-blue-600">{productService}</span> | 
              Client Type: <span className="font-semibold text-blue-600">{clientType}</span> | 
              Industry: <span className="font-semibold text-blue-600">{industry}</span>
            </p>
          </div>
          <button
            onClick={downloadScript}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download size={18} />
            Download Script
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
            <Clock className="text-blue-600" size={24} />
            <div>
              <div className="font-semibold text-gray-900">Total Duration</div>
              <div className="text-gray-600">17-24 minutes</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
            <Target className="text-green-600" size={24} />
            <div>
              <div className="font-semibold text-gray-900">Success Rate</div>
              <div className="text-gray-600">65-75%</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
            <CheckCircle className="text-purple-600" size={24} />
            <div>
              <div className="font-semibold text-gray-900">Sections</div>
              <div className="text-gray-600">{pitchSections.length} parts</div>
            </div>
          </div>
        </div>
      </div>

      {/* Pitch Sections */}
      {pitchSections.map((section, index) => (
        <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                <p className="text-gray-600">{section.duration}</p>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(section.content, section.title)}
              className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {copiedSection === section.title ? (
                <>
                  <CheckCircle className="text-green-600" size={16} />
                  Copied!
                </>
              ) : (
                <>
                  <Copy size={16} />
                  Copy
                </>
              )}
            </button>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <pre className="whitespace-pre-wrap text-gray-800 leading-relaxed font-sans">
              {section.content}
            </pre>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Key Tips for This Section:</h4>
            <ul className="space-y-2">
              {section.tips.map((tip, tipIndex) => (
                <li key={tipIndex} className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-0.5" size={16} />
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* Quick Reference */}
      <div className="bg-blue-50 p-8 rounded-xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Reference Reminders</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-gray-900 mb-3">Do's</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Listen more than you speak (80/20 rule)</li>
              <li>• Use their company name and industry</li>
              <li>• Ask for confirmation before moving forward</li>
              <li>• Share specific, relevant examples</li>
              <li>• Always establish clear next steps</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-3">Don'ts</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Rush through sections</li>
              <li>• Use generic examples</li>
              <li>• Ignore objections or concerns</li>
              <li>• Oversell or be pushy</li>
              <li>• End without clear next steps</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};