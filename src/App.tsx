import React, { useState } from 'react';
import { ArrowRight, Users, Target, Presentation, BookOpen, TrendingUp, MessageSquare, Ear, Search, Handshake, Award, Play, FileText, Download, Mail, Linkedin, Calendar, CheckCircle } from 'lucide-react';
import { TrainingModule } from './components/TrainingModule';
import { VideoPlayer } from './components/VideoPlayer';
import { SalesPitchScript } from './components/SalesPitchScript';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [showPitchScript, setShowPitchScript] = useState(false);

  const NavButton = ({ page, children, icon: Icon }) => (
    <button
      onClick={() => setCurrentPage(page)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
        currentPage === page
          ? 'bg-blue-600 text-white shadow-lg'
          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
      }`}
    >
      <Icon size={18} />
      {children}
    </button>
  );

  const handleModuleStart = (moduleTitle: string) => {
    setSelectedModule(moduleTitle);
    // In a real app, this would navigate to the module content
    alert(`Loading ${moduleTitle} module...`);
  };

  const ServiceCard = ({ icon: Icon, title, description, features }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="p-4 bg-blue-100 rounded-lg w-fit mb-6">
        <Icon className="text-blue-600" size={32} />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <CheckCircle className="text-green-500" size={18} />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
        Learn More
      </button>
    </div>
  );

  const HomePage = () => (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl">
        <div className="max-w-4xl mx-auto px-6">
          {/* Placeholder for logo */}
          <div className="w-24 h-24 bg-blue-600 rounded-xl mx-auto mb-8 flex items-center justify-center">
            <span className="text-white font-bold text-2xl">WM</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Master Sales Excellence with
            <span className="text-blue-600"> Warrgyizmorsch</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Comprehensive sales training portal designed to transform your team into high-performing sales professionals through AI-powered learning modules and proven methodologies.
          </p>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
            Start Your Training Journey
          </button>
        </div>
      </section>

      {/* Training Modules Overview */}
      <section className="px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">11 Essential Sales Training Modules</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Structured learning path designed to build comprehensive sales expertise from foundation to advanced techniques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TrainingModule
            icon={Handshake}
            title="Rapport Building"
            description="Master the art of creating instant connections and trust with prospects through proven relationship-building techniques."
            level="Beginner"
            duration="2 hours"
            progress={75}
            onStart={() => handleModuleStart('Rapport Building')}
          />
          <TrainingModule
            icon={MessageSquare}
            title="Objection Handling"
            description="Transform objections into opportunities with strategic responses and confidence-building techniques."
            level="Intermediate"
            duration="3 hours"
            progress={30}
            onStart={() => handleModuleStart('Objection Handling')}
          />
          <TrainingModule
            icon={TrendingUp}
            title="Industry Trends"
            description="Stay ahead with current market insights, emerging technologies, and industry best practices."
            level="Beginner"
            duration="1.5 hours"
            isCompleted={true}
            progress={100}
            onStart={() => handleModuleStart('Industry Trends')}
          />
          <TrainingModule
            icon={MessageSquare}
            title="Asking Questions"
            description="Develop powerful questioning strategies to uncover client needs and guide conversations effectively."
            level="Intermediate"
            duration="2.5 hours"
            onStart={() => handleModuleStart('Asking Questions')}
          />
          <TrainingModule
            icon={Users}
            title="Social Media Selling"
            description="Leverage social platforms for modern prospecting, relationship building, and thought leadership."
            level="Intermediate"
            duration="3 hours"
            progress={15}
            onStart={() => handleModuleStart('Social Media Selling')}
          />
          <TrainingModule
            icon={Ear}
            title="Active Listening"
            description="Enhance your listening skills to better understand client needs and build stronger relationships."
            level="Beginner"
            duration="2 hours"
            onStart={() => handleModuleStart('Active Listening')}
          />
          <TrainingModule
            icon={Search}
            title="Lead Identification"
            description="Learn systematic approaches to identify, qualify, and prioritize high-value prospects."
            level="Intermediate"
            duration="2.5 hours"
            onStart={() => handleModuleStart('Lead Identification')}
          />
          <TrainingModule
            icon={Target}
            title="Lead Prioritization"
            description="Master frameworks for scoring and prioritizing leads to maximize conversion rates."
            level="Advanced"
            duration="2 hours"
            onStart={() => handleModuleStart('Lead Prioritization')}
          />
          <TrainingModule
            icon={Presentation}
            title="Sales Pitches"
            description="Craft compelling presentations that resonate with audiences and drive decision-making."
            level="Intermediate"
            duration="4 hours"
            progress={60}
            onStart={() => handleModuleStart('Sales Pitches')}
          />
          <TrainingModule
            icon={Users}
            title="Team Collaboration"
            description="Build effective sales team dynamics and collaborative selling strategies."
            level="Advanced"
            duration="3 hours"
            onStart={() => handleModuleStart('Team Collaboration')}
          />
          <TrainingModule
            icon={Award}
            title="Closing Sales"
            description="Master various closing techniques and overcome final purchase barriers confidently."
            level="Advanced"
            duration="3.5 hours"
            onStart={() => handleModuleStart('Closing Sales')}
          />
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="px-6 py-16 bg-gray-50 rounded-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600">Real results from companies that transformed their sales performance</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">250%</div>
            <div className="text-gray-900 font-semibold mb-2">Revenue Increase</div>
            <div className="text-gray-600">Tech startup achieved 250% revenue growth within 6 months of implementing our training program.</div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
            <div className="text-gray-900 font-semibold mb-2">Conversion Rate</div>
            <div className="text-gray-600">B2B service company improved their lead-to-customer conversion rate to 85%.</div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
            <div className="text-gray-900 font-semibold mb-2">Faster Sales Cycles</div>
            <div className="text-gray-600">Manufacturing client reduced average sales cycle time by 40% through our methodology.</div>
          </div>
        </div>
      </section>
    </div>
  );

  const ServicesPage = () => (
    <div className="space-y-16">
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Comprehensive branding and AI digital marketing solutions designed to elevate your business and drive measurable results. 
          Our services are crafted to help your team understand and confidently explain our value to clients.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">
        <ServiceCard
          icon={Award}
          title="Brand Development"
          description="Complete brand identity creation and refinement to establish strong market presence and customer recognition."
          features={[
            "Logo design and visual identity",
            "Brand strategy and positioning", 
            "Brand guidelines and standards",
            "Market research and analysis",
            "Competitor analysis and differentiation"
          ]}
        />
        
        <ServiceCard
          icon={TrendingUp}
          title="AI Digital Marketing"
          description="Cutting-edge AI-powered marketing strategies that optimize campaigns, predict customer behavior, and maximize ROI."
          features={[
            "AI-driven campaign optimization",
            "Predictive analytics and insights",
            "Automated customer segmentation",
            "Personalized content creation",
            "Performance tracking and reporting"
          ]}
        />

        <ServiceCard
          icon={Users}
          title="Website Development"
          description="Professional, conversion-optimized websites that reflect your brand and drive business growth through superior user experience."
          features={[
            "Responsive web design",
            "E-commerce development",
            "SEO optimization",
            "Content management systems",
            "Performance and security optimization"
          ]}
        />

        <ServiceCard
          icon={Search}
          title="Lead Generation"
          description="Strategic lead generation campaigns that identify, attract, and convert high-quality prospects into loyal customers."
          features={[
            "Multi-channel lead generation",
            "Lead scoring and qualification",
            "CRM integration and automation",
            "Landing page optimization",
            "Conversion funnel development"
          ]}
        />
      </div>

      {/* Service Explanation for Employees */}
      <section className="px-6 py-16 bg-blue-50 rounded-3xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Explain Our Services to Clients</h2>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">The Warrgyizmorsch Approach</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                "We don't just provide services - we provide transformation. Our integrated approach combines traditional branding expertise with cutting-edge AI technology to deliver measurable results."
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1" size={18} />
                  <span><strong>Data-Driven:</strong> Every decision is backed by analytics and AI insights</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1" size={18} />
                  <span><strong>ROI-Focused:</strong> We prioritize strategies that deliver measurable business impact</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1" size={18} />
                  <span><strong>Scalable Solutions:</strong> Our systems grow with your business needs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Key Client Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Immediate Impact</h4>
                  <p className="text-gray-600">See results within the first 30 days through optimized campaigns and improved conversion rates.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Long-term Growth</h4>
                  <p className="text-gray-600">Build sustainable competitive advantages through strong branding and AI-powered insights.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Cost Efficiency</h4>
                  <p className="text-gray-600">Reduce marketing waste and improve ROI through precise targeting and automation.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Competitive Edge</h4>
                  <p className="text-gray-600">Stay ahead of competitors with cutting-edge AI technology and strategic positioning.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const TargetAudiencePage = () => (
    <div className="space-y-16">
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Target Audience & Lead Generation</h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Identify, understand, and connect with your ideal clients through strategic targeting and proven lead generation methodologies.
        </p>
      </section>

      {/* Ideal Client Profiles */}
      <section className="px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Ideal Client Profiles</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-blue-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Growing Startups</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Revenue:</strong> $1M - $10M annually</li>
              <li><strong>Size:</strong> 10-100 employees</li>
              <li><strong>Stage:</strong> Series A/B funding</li>
              <li><strong>Pain Points:</strong> Scaling challenges, brand recognition</li>
              <li><strong>Goals:</strong> Market expansion, lead generation</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Mid-Market Companies</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Revenue:</strong> $10M - $100M annually</li>
              <li><strong>Size:</strong> 100-1000 employees</li>
              <li><strong>Stage:</strong> Established, seeking growth</li>
              <li><strong>Pain Points:</strong> Digital transformation, efficiency</li>
              <li><strong>Goals:</strong> Market leadership, innovation</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-purple-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Enterprise Clients</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Revenue:</strong> $100M+ annually</li>
              <li><strong>Size:</strong> 1000+ employees</li>
              <li><strong>Stage:</strong> Market leaders</li>
              <li><strong>Pain Points:</strong> Innovation, agility</li>
              <li><strong>Goals:</strong> Digital transformation, competitive advantage</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="px-6 py-16 bg-gray-50 rounded-3xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Industries</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-blue-600" size={28} />
            </div>
            <h3 className="font-bold text-gray-900">Technology</h3>
            <p className="text-gray-600 text-sm">SaaS, FinTech, AI/ML</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="text-green-600" size={28} />
            </div>
            <h3 className="font-bold text-gray-900">Healthcare</h3>
            <p className="text-gray-600 text-sm">Digital health, MedTech</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Target className="text-purple-600" size={28} />
            </div>
            <h3 className="font-bold text-gray-900">E-commerce</h3>
            <p className="text-gray-600 text-sm">Retail, D2C brands</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-orange-600" size={28} />
            </div>
            <h3 className="font-bold text-gray-900">Professional Services</h3>
            <p className="text-gray-600 text-sm">Legal, Consulting, Finance</p>
          </div>
        </div>
      </section>

      {/* Lead Generation Strategies */}
      <section className="px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Lead Generation Strategies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <Linkedin className="text-blue-600" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">LinkedIn Outreach</h3>
            </div>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>• Personalized connection requests</li>
              <li>• Value-first messaging approach</li>
              <li>• Content-based relationship building</li>
              <li>• LinkedIn Sales Navigator utilization</li>
              <li>• Thought leadership content strategy</li>
            </ul>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800 font-semibold">Target: 50+ quality connections per week</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <Mail className="text-green-600" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">Cold Email Campaigns</h3>
            </div>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>• Multi-touch sequence strategy</li>
              <li>• Industry-specific value propositions</li>
              <li>• A/B testing for optimization</li>
              <li>• Personalization at scale</li>
              <li>• Follow-up automation systems</li>
            </ul>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-800 font-semibold">Target: 15-25% response rate</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <Calendar className="text-purple-600" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">Industry Events</h3>
            </div>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>• Conference speaking opportunities</li>
              <li>• Strategic networking events</li>
              <li>• Virtual summit participation</li>
              <li>• Workshop hosting</li>
              <li>• Panel discussion participation</li>
            </ul>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-purple-800 font-semibold">Target: 2-3 events per month</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <Search className="text-orange-600" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">Digital Tools</h3>
            </div>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>• CRM and automation platforms</li>
              <li>• Lead scoring and qualification</li>
              <li>• Social media monitoring tools</li>
              <li>• Intent data analysis</li>
              <li>• Competitor analysis tools</li>
            </ul>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-orange-800 font-semibold">ROI: 300-500% increase in qualified leads</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const SalesPitchPage = () => (
    <div className="space-y-16">
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Sales Pitch Hub</h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Comprehensive collection of sales templates, training materials, and resources to help your team deliver compelling presentations and close more deals.
        </p>
        <div className="mt-8">
          <button
            onClick={() => setShowPitchScript(!showPitchScript)}
            className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            {showPitchScript ? 'Hide Custom Pitch Script' : 'Generate Custom Pitch Script'}
          </button>
        </div>
      </section>

      {/* Custom Pitch Script */}
      {showPitchScript && (
        <section className="px-6">
          <SalesPitchScript
            productService="AI Digital Marketing & Branding Services"
            clientType="Mid-Market Technology Company"
            industry="Technology"
          />
        </section>
      )}

      {/* Pitch Templates */}
      <section className="px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pitch Templates</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <FileText className="text-blue-600" size={32} />
              <h3 className="text-xl font-bold text-gray-900">Discovery Call Template</h3>
            </div>
            <p className="text-gray-600 mb-6">Structured approach for initial client conversations to uncover needs and build rapport.</p>
            <ul className="space-y-2 text-gray-700 mb-6 text-sm">
              <li>• Opening questions framework</li>
              <li>• Pain point identification</li>
              <li>• Budget qualification process</li>
              <li>• Next steps establishment</li>
            </ul>
            <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              <Download className="inline mr-2" size={16} />
              Download Template
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <Presentation className="text-green-600" size={32} />
              <h3 className="text-xl font-bold text-gray-900">Solution Presentation</h3>
            </div>
            <p className="text-gray-600 mb-6">Compelling presentation structure that showcases value and addresses client concerns.</p>
            <ul className="space-y-2 text-gray-700 mb-6 text-sm">
              <li>• Problem-solution alignment</li>
              <li>• ROI calculations and examples</li>
              <li>• Case study integration</li>
              <li>• Implementation timeline</li>
            </ul>
            <button className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
              <Download className="inline mr-2" size={16} />
              Download Template
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <Award className="text-purple-600" size={32} />
              <h3 className="text-xl font-bold text-gray-900">Closing Techniques</h3>
            </div>
            <p className="text-gray-600 mb-6">Proven closing strategies and techniques for different client types and situations.</p>
            <ul className="space-y-2 text-gray-700 mb-6 text-sm">
              <li>• Assumptive close method</li>
              <li>• Urgency-based closing</li>
              <li>• Option-based closing</li>
              <li>• Summary close technique</li>
            </ul>
            <button className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold">
              <Download className="inline mr-2" size={16} />
              Download Template
            </button>
          </div>
        </div>
      </section>

      {/* Objection Handling */}
      <section className="px-6 py-16 bg-red-50 rounded-3xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common Objections & Responses</h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-red-600 mb-4">"Your prices are too high"</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Response Strategy:</h4>
                <p className="text-gray-700">"I understand price is a consideration. Let's look at the ROI you'll achieve. Based on similar clients, the average return is 300-500% within the first year. When you factor in the revenue increase and cost savings, the investment pays for itself in 3-4 months."</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Follow-up Questions:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• "What budget range were you considering?"</li>
                  <li>• "What's the cost of not solving this problem?"</li>
                  <li>• "Would you like to see a customized ROI projection?"</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-red-600 mb-4">"We need to think about it"</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Response Strategy:</h4>
                <p className="text-gray-700">"Absolutely, this is an important decision. To help you think through this effectively, what specific aspects would you like to discuss? Is it the implementation timeline, budget, or something else I can clarify?"</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Follow-up Questions:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• "What additional information would be helpful?"</li>
                  <li>• "Who else needs to be involved in this decision?"</li>
                  <li>• "What's your ideal timeline for moving forward?"</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-red-600 mb-4">"We're working with another provider"</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Response Strategy:</h4>
                <p className="text-gray-700">"That's great that you're being thorough. Many of our best clients evaluated multiple options. What prompted you to explore alternatives to your current provider? I'd love to understand what's missing so I can show you how we address those gaps."</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Follow-up Questions:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• "What criteria are you using to evaluate providers?"</li>
                  <li>• "How is your current solution performing?"</li>
                  <li>• "What would need to change for you to consider switching?"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Videos */}
      <section className="px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Training Videos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VideoPlayer
            title="Mastering the Discovery Call"
            description="Learn how to conduct effective discovery calls that uncover client needs and build strong foundations for the sales process."
            duration="18:45"
          />

          <VideoPlayer
            title="Handling Difficult Objections"
            description="Real-world examples and role-playing scenarios to help you confidently address the most challenging client objections."
            duration="22:30"
          />

          <VideoPlayer
            title="The Perfect Pitch Deck"
            description="Step-by-step guide to creating compelling presentations that resonate with prospects and drive decision-making."
            duration="25:15"
          />

          <VideoPlayer
            title="Closing with Confidence"
            description="Advanced closing techniques and strategies to help you confidently ask for the sale and secure commitments."
            duration="19:20"
          />
        </div>
      </section>

      {/* Quick Reference */}
      <section className="px-6 py-16 bg-blue-50 rounded-3xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Reference Guide</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600 mb-6">Essential Sales Tips</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Before the Call</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Research the prospect and their company</li>
                  <li>• Review their website and recent news</li>
                  <li>• Prepare relevant case studies</li>
                  <li>• Set clear call objectives</li>
                  <li>• Test all technology beforehand</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900 mb-4">During the Call</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Listen more than you speak (80/20 rule)</li>
                  <li>• Ask open-ended questions</li>
                  <li>• Take detailed notes</li>
                  <li>• Confirm understanding regularly</li>
                  <li>• Always establish next steps</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900 mb-4">After the Call</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Send follow-up within 24 hours</li>
                  <li>• Summarize key discussion points</li>
                  <li>• Include relevant resources</li>
                  <li>• Set calendar reminders for follow-up</li>
                  <li>• Update CRM with detailed notes</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Key Metrics to Track</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Response rates to outreach</li>
                  <li>• Meeting-to-opportunity conversion</li>
                  <li>• Average deal size and cycle time</li>
                  <li>• Win rate by industry/company size</li>
                  <li>• Customer lifetime value</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'services':
        return <ServicesPage />;
      case 'audience':
        return <TargetAudiencePage />;
      case 'pitch':
        return <SalesPitchPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              {/* Logo placeholder */}
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">WM</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Warrgyizmorsch</h1>
                <p className="text-sm text-gray-600">Branding & AI Digital Marketing</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <NavButton page="home" icon={BookOpen}>Training Portal</NavButton>
              <NavButton page="services" icon={Award}>Services</NavButton>
              <NavButton page="audience" icon={Target}>Target Audience</NavButton>
              <NavButton page="pitch" icon={Presentation}>Sales Pitch Hub</NavButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">WM</span>
                </div>
                <span className="text-xl font-bold">Warrgyizmorsch</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering businesses through comprehensive sales training and AI-powered digital marketing solutions.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Training</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Sales Modules</li>
                <li>Case Studies</li>
                <li>Video Training</li>
                <li>Certification</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Brand Development</li>
                <li>AI Marketing</li>
                <li>Web Development</li>
                <li>Lead Generation</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-3">
                  <Mail size={18} />
                  <span>info@warrgyizmorsch.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Warrgyizmorsch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;