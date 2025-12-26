// App-wide constants

export const COMPANY_NAME = 'Trusty Money';

export const NAVIGATION_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Resources', href: '#resources' },
  { name: 'Career', href: '#Career' },
  { name: 'Join Us', href: '#Join Us' },
];

export const FEATURES = [
  {
    id: 1,
    title: 'Payment Subscription',
    description: 'Simplify client payments with automated recurring requests—no hassle, no follow-ups, just timely payments with TrustyMoney!',
    icon: 'card',
    tags: ['Automation', 'Convenience', 'Reliability'],
    color: 'green',
  },
  {
    id: 2,
    title: 'Creating Invoice - no code required',
    description: 'Create and customize invoices in seconds—no coding needed. With automated features and essential details like RBI, HSN, and SAC codes, TrustyMoney makes invoicing fast, easy, and reliable!',
    icon: 'document',
    tags: ['HSN Code', 'SAC Code', 'Personalization', 'Convenience'],
    color: 'blue',
  },
  {
    id: 3,
    title: 'Instant Access to Your Funds',
    description: 'With TrustyMoney, your funds are available the moment they reach your virtual bank account. Enjoy seamless, automatic transfers to your linked Indian bank account after currency conversion—fast, hassle-free, and always reliable.',
    icon: 'bolt',
    tags: ['Virtual bank account', 'Hassle-free', 'Currency conversion'],
    color: 'purple',
  },
  {
    id: 4,
    title: 'Mail Notification',
    description: 'Stay informed with real-time email alerts - track every transaction and update instantly, keeping you always in the know!',
    icon: 'globe',
    tags: ['Live Notifications', 'Quick Alerts', 'Instant Updates', 'Seamless Tracking'],
    color: 'blue',
  },
  {
    id: 5,
    title: '5 min KYC',
    description: 'Complete KYC in minutes with TrustyMoney\'s secure digital process—onboard clients faster and stay compliant effortlessly!',
    icon: 'checkDouble',
    tags: ['Secure', 'Hassle-Free', 'Instant'],
    color: 'green',
  },
  {
    id: 6,
    title: 'Financial Insights',
    description: 'Get complete financial visibility with TrustyMoney\'s dashboard—track payments, manage overdue bills, and send payment requests, all in real-time',
    icon: 'chart',
    tags: ['Overdue Bill Management', 'Payment Requests', 'Client Payment Reminders', 'Transaction Tracking'],
    color: 'purple',
  },
];

export const COMPETITORS = [
  {
    name: 'Paypal',
    platformFee: '4.40%',
    fxMarkup: '3.00%',
    withdrawalFee: '3.00%',
    totalFee: '7.40%',
    rating: 3.5,
  },
  {
    name: 'Trusty Money',
    platformFee: '0.99%',
    fxMarkup: '0.00%',
    withdrawalFee: '0.00%',
    totalFee: '0.99%',
    rating: 5.0,
    highlight: true,
  },
  {
    name: 'Payoneer',
    platformFee: '0.00%',
    fxMarkup: '0.50%',
    withdrawalFee: '2.00%',
    totalFee: '2.50%',
    rating: 4.0,
  },
];

export const PRICING_TIERS = [
  {
    name: 'Free',
    price: 0,
    description: 'No subscription fees, just pay as you go',
    features: [
      'Zero FX markup',
      '0.99% platform fee for INR',
      'No withdrawal fees',
      'GST invoicing',
      'Real-time analytics',
      'Email support',
    ],
    cta: 'Get Started',
    popular: true,
  },
];

export const SECURITY_FEATURES = [
  {
    title: 'Bank-Level Encryption',
    description: '256-bit SSL encryption for all transactions',
    icon: 'lock',
  },
  {
    title: 'AI Fraud Detection',
    description: 'Real-time monitoring and anomaly detection',
    icon: 'robot',
  },
  {
    title: 'RBI Compliant',
    description: 'Fully compliant with Indian regulations',
    icon: 'checkmark',
  },
  {
    title: '24/7 Monitoring',
    description: 'Round-the-clock security surveillance',
    icon: 'eye',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'What is Trusty Money and what services do they provide?',
    answer: 'Trusty Money is a fintech platform that provides secure global payment solutions including zero FX markup transfers, GST-compliant invoicing, payment gateways, subscription management, and real-time financial analytics.',
  },
  {
    question: 'Who can use Trusty Money\'s services?',
    answer: 'Trusty Money is designed for SMEs, freelancers, exporters, SaaS companies, agencies, and global service providers who need efficient international payment solutions.',
  },
  {
    question: 'How much does Trusty Money cost?',
    answer: 'Trusty Money has no subscription fees. We charge a simple 0.99% platform fee for INR transactions with zero FX markup and no withdrawal fees.',
  },
  {
    question: 'Which currencies do you support?',
    answer: 'We support multiple currencies including USD, GBP, EUR, INR, and currencies from 8+ countries including USA, Canada, Europe, Singapore, Japan, China, and more.',
  },
  {
    question: 'What documents are required to open a business account?',
    answer: 'You can complete KYC in just 5 minutes with our secure digital process. Required documents typically include business registration, PAN, address proof, and bank details.',
  },
  {
    question: 'How secure is Trusty Money?',
    answer: 'Trusty Money uses AI-powered fraud detection, multi-layer verification, bank-level encryption, and 24/7 monitoring. We are RBI compliant and PCI DSS certified.',
  },
  {
    question: 'How do exchange rates work?',
    answer: 'We provide real-time exchange rates with zero FX markup. You get the live mid-market rate with complete transparency and no hidden charges.',
  },
  {
    question: 'Can I use Trusty Money for invoicing?',
    answer: 'Yes! Generate GST-compliant invoices in minutes without code. We support automated receivables collection, HSN/SAC codes, and subscription management.',
  },
  {
    question: 'Can I set up recurring payments?',
    answer: 'Absolutely! Our payment subscription feature allows you to automate recurring payment requests with no hassle and no follow-ups.',
  },
  {
    question: 'How do I track my payments?',
    answer: 'Our real-time dashboard provides complete financial visibility. Track payments, manage overdue bills, receive live email notifications, and access detailed transaction analytics.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Sophia Martinez',
    role: 'Graphic Designer',
    image: null,
    content: 'Who is most likely to buy your product? Which brands do key target groups know best? How can you increase perception in the most efficient way? Latana enables you drill down into key segments to optimize your marketing planning.',
    rating: 5,
  },
  {
    name: 'Ethan Brooks',
    role: 'Financial Analyst',
    image: null,
    content: 'Trusty has revolutionized our financial analysis process. The insights we gain are invaluable for our decision-making.',
    rating: 5,
  },
  {
    name: 'Sophia Martinez',
    role: 'Graphic Designer',
    image: null,
    content: 'Who is most likely to buy your product? Which brands do key target groups know best? How can you increase perception in the most efficient way? Latana enables you drill down into key segments to optimize your marketing planning.',
    rating: 5,
  },
];

export const STATS = [
  { value: '8+', label: 'Countries Supported' },
  { value: 'Zero', label: 'FX Markup' },
  { value: '0.99%', label: 'Platform Fee' },
  { value: '24/7', label: 'Customer Support' },
];

export const SUPPORTED_COUNTRIES = [
  'India', 'USA', 'Canada', 'China', 'Europe', 'GBP', 'Japan', 'Singapore'
];

export const PRODUCT_SECTIONS = [
  {
    id: 'analytics',
    title: 'Analytics',
    subtitle: 'Advanced analytics tools helps you stay informed and ahead',
    features: ['Top Clients', 'Client Behavior', 'Geographic Concentration'],
    icon: 'chart',
  },
  {
    id: 'payments',
    title: 'Payments',
    subtitle: 'Reliable payment gateway platform with multiple payment methods to grow your business globally.',
    features: ['Fast Integration', 'Global Scalability', 'Multiple Payment Options', 'Real-time Notification'],
    icon: 'card',
  },
  {
    id: 'invoicing',
    title: 'Invoicing',
    subtitle: 'Generate GST invoices in minutes without code, automate receivables collection and reconciliation',
    features: ['Automated Receivables Collection', 'Invoice Generation', 'Subscription Management'],
    icon: 'document',
  },
];
