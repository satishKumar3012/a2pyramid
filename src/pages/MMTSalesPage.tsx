import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Target, TrendingUp, Phone, 
  CheckCircle, Download, ArrowRight, Star, Shield,
  FileText, Award, Globe, Briefcase, Heart
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MMTSalesPage: React.FC = () => {
  const salesRoles = [
    {
      id: 'sales-executive',
      title: 'Sales Executive',
      summary: 'Drive teacher onboarding and platform growth',
      responsibilities: ['Teacher acquisition', 'Platform demos', 'Relationship building'],
      customers: 'Individual Teachers',
      experience: '0-2 years',
      location: 'Field/Hybrid'
    },
    {
      id: 'bde',
      title: 'Business Development Executive',
      summary: 'Expand market reach and build partnerships',
      responsibilities: ['Market expansion', 'Lead generation', 'Partnership development'],
      customers: 'Teachers & Small Institutes',
      experience: '1-3 years',
      location: 'Field/Remote'
    },
    {
      id: 'area-manager',
      title: 'Area Sales Manager',
      summary: 'Lead regional sales operations and team',
      responsibilities: ['Team leadership', 'Regional strategy', 'Performance management'],
      customers: 'Schools & Coaching Centers',
      experience: '3-5 years',
      location: 'Field'
    },
    {
      id: 'partnership-manager',
      title: 'Partnership Manager',
      summary: 'Build institutional partnerships and B2B relationships',
      responsibilities: ['Institutional sales', 'Contract negotiations', 'Strategic partnerships'],
      customers: 'Schools & Educational Institutes',
      experience: '4-6 years',
      location: 'Hybrid'
    },
    {
      id: 'inside-sales',
      title: 'Inside Sales Specialist',
      summary: 'Drive online conversions and remote sales',
      responsibilities: ['Tele-sales', 'CRM management', 'Online demos'],
      customers: 'Teachers & Parents',
      experience: '1-2 years',
      location: 'Remote'
    }
  ];

  const benefits = [
    { icon: <TrendingUp />, title: 'High-Growth Environment', desc: 'Be part of India\'s fastest-growing EdTech platform' },
    { icon: <Target />, title: 'Performance Incentives', desc: 'Uncapped earning potential with transparent rewards' },
    { icon: <Award />, title: 'Career Growth', desc: 'Clear promotion path and leadership opportunities' },
    { icon: <Heart />, title: 'Impact Education', desc: 'Directly contribute to transforming education in India' }
  ];

  const documents = [
    { stage: 'Application', docs: ['Updated Resume/CV', 'Government ID', 'Passport-size Photo'] },
    { stage: 'Onboarding', docs: ['Address Proof', 'PAN Card', 'Bank Details', 'Experience Certificates', 'Signed Offer & NDA'] }
  ];

  const faqs = [
    { q: 'Is this field sales or remote?', a: 'We offer field, remote, and hybrid positions based on role requirements.' },
    { q: 'Are incentives capped?', a: 'No, our performance incentives are uncapped with transparent calculation.' },
    { q: 'Is prior EdTech experience mandatory?', a: 'Preferred but not mandatory. We provide comprehensive training.' },
    { q: 'What regions will I handle?', a: 'Depends on role - from local areas to pan-India coverage.' },
    { q: 'Is there training provided?', a: 'Yes, complete product training and sales methodology coaching.' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Join the Growth Team at <span className="text-primary-600">Map My Teacher</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Help educators grow, empower students, and scale education globally
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4" onClick={() => window.open('https://mmt.a2pyramid.com/growth-partner/register', '_blank')}>
                Apply for Sales Role <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4" onClick={() => window.open('https://drive.google.com/file/d/1H9J4yaCxJjS5gKiXWxVQFQIe8UwgxmHR/view?usp=sharing', '_blank')}>
                <Download className="mr-2" /> Download Job Overview
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Map My Teacher */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About Map My Teacher
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                India's most trusted teacher discovery platform, connecting students with verified educators through location-based and online discovery. We're revolutionizing how education happens.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" />
                  <span>50,000+ Teachers Connected</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" />
                  <span>1M+ Students Benefited</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" />
                  <span>500+ Cities Covered</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Education Technology"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Our Sales Team */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Join Our Sales Team?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-600">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Roles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Sales Roles We Are Hiring For
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {salesRoles.map((role) => (
              <Card key={role.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl">{role.title}</CardTitle>
                  <p className="text-gray-600 dark:text-gray-300">{role.summary}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold">Target: </span>
                      <span className="text-sm">{role.customers}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Experience: </span>
                      <span className="text-sm">{role.experience}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Location: </span>
                      <span className="text-sm">{role.location}</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4" onClick={() => window.open('https://mmt.a2pyramid.com/growth-partner/register', '_blank')}>
                      Apply for this Role
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Key Responsibilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Users />, title: 'Teacher Onboarding', desc: 'Build relationships with educators and guide platform adoption' },
              { icon: <Briefcase />, title: 'Institute Partnerships', desc: 'Develop strategic partnerships with schools and coaching centers' },
              { icon: <Target />, title: 'Revenue Growth', desc: 'Meet and exceed monthly/quarterly sales targets' },
              { icon: <Globe />, title: 'Market Expansion', desc: 'Identify new markets and growth opportunities' },
              { icon: <FileText />, title: 'CRM Management', desc: 'Maintain accurate records and sales pipeline' },
              { icon: <Star />, title: 'Customer Success', desc: 'Ensure long-term satisfaction and retention' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-primary-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Documents Required
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {documents.map((stage, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="text-primary-600" />
                    {stage.stage} Stage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {stage.docs.map((doc, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg inline-block">
              <Shield className="text-blue-600 mx-auto mb-2" />
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Your data is securely stored and used strictly for verification and onboarding purposes only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Application Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
              {[
                { step: 1, title: 'Online Application', desc: 'Submit your application' },
                { step: 2, title: 'HR Screening', desc: 'Initial phone/video call' },
                { step: 3, title: 'Sales Interview', desc: 'Technical and behavioral assessment' },
                { step: 4, title: 'Verification', desc: 'Document verification' },
                { step: 5, title: 'Onboarding', desc: 'Welcome to the team!' }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {process.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{process.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.q}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Be part of India's most trusted teacher discovery platform
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of educators and students who trust Map My Teacher
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4" onClick={() => window.open('https://mmt.a2pyramid.com/growth-partner/register', '_blank')}>
              Apply Now <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary-600" onClick={() => window.open('https://wa.me/919074303904?text=Hi, I am interested in the Sales position at Map My Teacher', '_blank')}>
              <Phone className="mr-2" /> Talk to HR
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MMTSalesPage;