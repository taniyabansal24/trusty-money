import React from "react";
import { Container } from "../ui";
import { COMPANY_NAME } from "../../constants";
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Navigation: [
      { name: "About", href: "/about" },
      { name: "Products", href: "/products" },
      { name: "Resources", href: "/resources" },
      { name: "Join Us", href: "/join-us" },
    ],
    Products: [
      { name: "Live FX Conversion", href: "#pricing" },
      { name: "Invoice", href: "#" },
      { name: "Dashboard", href: "#analytics" },
      { name: "Payment Gateway", href: "#" },
    ],
    Resources: [
      { name: "Blog", href: "#" },
      { name: "FAQ", href: "#faq" },
      { name: "Customer stories", href: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Conditions", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Contact us", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
  ];

  return (
    // Remove the gradient background class
    <footer>
      <Container className="py-12 lg:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-4 text-[#0B43A0]">
              {COMPANY_NAME}
            </h3>

            <p className="mb-4 max-w-sm text-body">
              One platform for global payments, zero FX markup, GST invoicing &
              instant settlements. Built for SMEs.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-[#425466] hover:text-[#0B43A0] transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-sm font-semibold text-[#0B43A0] uppercase tracking-wide">
                {category}
              </h4>

              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-[#425466] hover:text-[#0B43A0] transition-colors"
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
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-200">
          <p className="text-muted mb-4 md:mb-0 ">
            Copyright © {currentYear} Tushti Technologies Pvt. Ltd.
          </p>

          <a
            href="mailto:support@trustymoney.in"
            className="text-sm text-[#0B43A0] hover:underline"
          >
            support@trustymoney.in
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
