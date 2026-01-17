import React from 'react';
import { Container } from '../ui';
import { COMPANY_NAME } from '../../constants';
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: 'Why Trusty', href: '#' },
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
    <footer className="bg-gradient-to-b from-slate-50 via-blue-50/40 to-indigo-100/60 border-t border-slate-200/60">
      <Container className="py-12 lg:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">

          {/* Brand */}
          <div className="col-span-2">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: '#0B43A0' }}
            >
              {COMPANY_NAME}
            </h3>

            <p
              className="mb-4 max-w-sm"
              style={{ color: '#425466' }}
            >
              One platform for global payments, zero FX markup, GST invoicing & instant settlements. Built for SMEs.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{ color: '#425466' }}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="font-semibold mb-4"
                style={{ color: '#0B43A0' }}
              >
                {category}
              </h4>

              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      style={{ color: '#425466' }}
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
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center"
          style={{ borderTop: '1px solid #e5e7eb' }}
        >
          <p
            className="text-sm mb-4 md:mb-0"
            style={{ color: '#425466' }}
          >
            Copyright © {currentYear} Tushti Technologies Pvt. Ltd.
          </p>

          <a
            href="mailto:support@trustymoney.in"
            className="text-sm"
            style={{ color: '#0B43A0' }}
          >
            support@trustymoney.in
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
