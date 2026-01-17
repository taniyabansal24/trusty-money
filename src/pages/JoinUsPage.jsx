import React from 'react';
import { 
  Check, 
  ArrowRight, 
  Briefcase, 
  Users, 
  TrendingUp, 
  Globe,
  Clock,
  DollarSign,
  Heart
} from 'lucide-react';
import { Navbar } from '../components/layout';

const JoinUsPage = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      experience: "5+ years",
      posted: "2 days ago",
      description: "Build intuitive user interfaces and collaborate with cross-functional teams."
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      type: "Full-time",
      location: "San Francisco, CA",
      experience: "4+ years",
      posted: "1 week ago",
      description: "Drive product strategy and own the product development lifecycle."
    },
    {
      id: 3,
      title: "UX/UI Designer",
      department: "Design",
      type: "Full-time",
      location: "New York, NY",
      experience: "3+ years",
      posted: "3 days ago",
      description: "Create beautiful and functional user experiences across our platform."
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      experience: "4+ years",
      posted: "5 days ago",
      description: "Build and maintain our cloud infrastructure and deployment pipelines."
    },
    {
      id: 5,
      title: "Sales Executive",
      department: "Sales",
      type: "Full-time",
      location: "Chicago, IL",
      experience: "3+ years",
      posted: "1 week ago",
      description: "Drive revenue growth and build relationships with enterprise clients."
    },
    {
      id: 6,
      title: "Data Scientist",
      department: "Data",
      type: "Full-time",
      location: "Remote",
      experience: "4+ years",
      posted: "2 days ago",
      description: "Analyze complex datasets and build predictive models for business insights."
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Competitive Salary",
      description: "Industry-leading compensation packages with equity options"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Remote First",
      description: "Work from anywhere with flexible working hours"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Unlimited PTO",
      description: "Take time off when you need it to recharge"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision coverage"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Career Growth",
      description: "Regular promotions and learning & development budget"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Culture",
      description: "Collaborative environment with regular team events"
    }
  ];

  const stats = [
    { value: "50+", label: "Team Members" },
    { value: "15+", label: "Countries" },
    { value: "4.8", label: "Team Happiness" },
    { value: "100%", label: "Remote" }
  ];

  return (
    <>
    
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <Navbar/>
      {/* Hero Section */}
      <section className="relative overflow-hidden space-y-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#0A2540' }}>
              Build Your Career With Us
            </h1>
            <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: '#425466' }}>
              Join a team of innovators working on cutting-edge solutions that transform industries. 
              We're looking for passionate individuals to help shape the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-4 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#0B43A0' }}
              >
                View Open Positions
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </button>
              <button className="px-8 py-4 rounded-lg font-semibold border-2 hover:bg-gray-50 transition-colors"
                style={{ borderColor: '#0A2540', color: '#0A2540' }}>
                Learn About Our Culture
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#0A2540' }}>
                Open Positions
              </h2>
              <p className="text-lg" style={{ color: '#425466' }}>
                {jobOpenings.length} roles across {Array.from(new Set(jobOpenings.map(job => job.department))).length} departments
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              <button className="px-4 py-2 rounded-full font-medium text-white"
                style={{ backgroundColor: '#101111' }}>
                All Roles
              </button>
              <button className="px-4 py-2 rounded-full font-medium border hover:bg-gray-50"
                style={{ borderColor: '#0A2540', color: '#0A2540' }}>
                Engineering
              </button>
              <button className="px-4 py-2 rounded-full font-medium border hover:bg-gray-50"
                style={{ borderColor: '#0A2540', color: '#0A2540' }}>
                Design
              </button>
              <button className="px-4 py-2 rounded-full font-medium border hover:bg-gray-50"
                style={{ borderColor: '#0A2540', color: '#0A2540' }}>
                Product
              </button>
            </div>
          </div>

          <div className="grid gap-6">
            {jobOpenings.map((job) => (
              <div 
                key={job.id}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 cursor-pointer group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold group-hover:underline" style={{ color: '#0A2540' }}>
                        {job.title}
                      </h3>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {job.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-3">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" style={{ color: '#425466' }} />
                        <span style={{ color: '#425466' }}>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4" style={{ color: '#425466' }} />
                        <span style={{ color: '#425466' }}>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" style={{ color: '#425466' }} />
                        <span style={{ color: '#425466' }}>{job.experience}</span>
                      </div>
                    </div>
                    <p className="mt-4 max-w-2xl" style={{ color: '#425466' }}>
                      {job.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-sm mb-3" style={{ color: '#425466' }}>
                      Posted {job.posted}
                    </div>
                    <button 
                      className="px-6 py-3 rounded-lg font-semibold text-white flex items-center gap-2 hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: '#073f9e' }}
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Box */}
          <div className="mt-20 p-8 rounded-2xl text-center relative overflow-hidden"
            style={{ backgroundColor: '#3b82f6' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90"></div>
            <div className="relative z-10 text-white max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                Not Seeing a Perfect Role?
              </h3>
              <p className="text-lg mb-8 opacity-90">
                We're always looking for talented people. Send us your resume and we'll reach out when we have a matching opportunity.
              </p>
              <button className="px-8 py-4 rounded-lg font-semibold bg-white hover:bg-gray-100 transition-colors"
                style={{ color: '#0A2540' }}>
                Submit General Application
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#0A2540' }}>
            Ready to Join Our Team?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: '#425466' }}>
            Take the next step in your career journey. Apply today and help us build something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#0B43A0' }}
            >
              View All Positions
            </button>
            <button className="px-8 py-4 rounded-lg font-semibold border-2 hover:bg-white transition-colors"
              style={{ borderColor: '#0A2540', color: '#0A2540' }}>
              Contact Recruiting
            </button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default JoinUsPage;