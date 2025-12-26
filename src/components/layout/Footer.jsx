import React from 'react';
import { Container, Icon } from '../ui';
import { COMPANY_NAME, NAVIGATION_LINKS } from '../../constants';
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: 'Why Trusty', href: '#' },
      { name: 'Products', href: '#products' },
    ],
    Products: [
      { name: 'Live FX Conversion', href: '#pricing' },
      { name: 'Invoice', href: '#' },
      { name: 'Dashboard', href: '#analytics' },
      { name: 'Payment Gateway', href: '#' },
      { name: 'Subscription', href: '#' },
      { name: 'Insights', href: '#' },
    ],
    Resources: [
      { name: 'Blog', href: '#' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Careers', href: '#' },
      { name: 'Customer stories', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Conditions', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Contact us', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaYoutube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container className="py-12 lg:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">{COMPANY_NAME}</h3>
            <p className="text-gray-400 mb-4 max-w-sm">
              One platform for global payments, zero FX markup, GST invoicing & instant settlements. Built for SMEs.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            Copyright © {currentYear} Tushti Technologies Pvt. Ltd.
          </p>
          <div className="flex items-center space-x-4 text-sm">
            <a href="mailto:support@trustymoney.in" className="text-gray-400 hover:text-white transition-colors">
              support@trustymoney.in
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
