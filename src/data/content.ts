/**
 * Single source of truth for all page copy.
 * Mirrors the Figma source so sections stay declarative & easy to maintain.
 */

export type IconName =
  | 'core'
  | 'digital'
  | 'open'
  | 'origination'
  | 'management';

export interface Solution {
  icon: IconName;
  title: string;
  body: string;
  tag?: string;
}

export const nav = {
  links: [
    { label: 'Solutions', href: '#solutions', hasMenu: true },
    { label: 'Resources', href: '#insights', hasMenu: true },
    { label: 'About Us', href: '#cases', hasMenu: false },
  ],
};

export const hero = {
  title: 'The new foundation of modern banking',
  subtitle:
    'We drive innovation and growth, provide seamless customer experience and operational excellence',
  primary: 'Request Demo',
  secondary: 'Contact Us',
  trustedBy: 'trusted by:',
};

export const solutionsSection = {
  title: 'All of our solutions are tailor-made to your needs',
  cta: 'Request Demo',
  items: [
    {
      icon: 'core',
      title: 'Core Banking CB7',
      body: 'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
    },
    {
      icon: 'digital',
      title: 'Digital Banking N7',
      body: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.',
    },
    {
      icon: 'open',
      title: 'Open Banking',
      body: 'Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.',
    },
    {
      icon: 'origination',
      title: 'Loan Origination System',
      tag: 'NBFC',
      body: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.',
    },
    {
      icon: 'management',
      title: 'Loan Management System',
      tag: 'NBFC',
      body: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.',
    },
  ] satisfies Solution[],
};

export const cloud = {
  title: 'A complete cloud-based core banking.',
  subtitle: 'Faster time to market with our cloud-based core banking services',
  cta: 'Request Demo',
  learnMore: 'learn more',
};

export const efficiency = {
  title: 'Run a more efficient, flexible, and digitally connected corebanking system',
  listTitle: 'What you will get:',
  columns: [
    [
      'Customer-On Boarding',
      'Managing deposits and withdrawals',
      'Transaction management',
      'Interest Calculation',
      'Payments processing (cash, cheques, mandates, NEFT, RTGS etc)',
    ],
    [
      'CRM Activities',
      'Configuring New Banking Products',
      'Loan disbursal and Loan management',
      'Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.',
    ],
  ],
  highlights: [
    'Achieve workload optimization, save time, making system more agile and equipped for work.',
    'Products built with Focus to deliver ambient user experience and a customer-centric approach.',
    'Streamline business processes, automated back-office operations and improve profitability.',
  ],
};

export const paperlessCta = {
  title: 'Take the full advantage of going paper-less now.',
  subtitle:
    'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations',
  secondary: 'Contact Us',
  primary: 'Request Demo',
  watermark: 'CB7',
};

export const ticker = ['N7', 'Say', 'to the new way of banking', 'CB7', 'Say'];

export const digital = {
  title: 'Digital banking out-of-the-box',
  subtitle:
    'N7 helps your financial institution improve the client experience, automate and optimize procedures',
  cta: 'Request Demo',
  learnMore: 'learn more',
  features: [
    {
      title: 'Fully compliant with regulatory requirement',
      body: 'The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank’s operational-risk protocols and procedures.',
      points: [
        'Pre-integrated Security System',
        'Fully Compliant With Regulatory Requirement',
        'Digitally Connected Core',
      ],
    },
    {
      title: 'No legacy IT systems',
      body: 'Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.',
      points: [
        'Adaptive & Intelligent API monetization',
        'Ambient User Experience',
        'Cloud-native With lower TCO',
      ],
    },
    {
      title: 'No traditional branches',
      body: 'Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.',
      points: [
        'Branchless & Paperless Banking',
        'Digital Transformation Capability',
        'Optimized, Adoptable and Scalable',
      ],
    },
  ],
  bottomCta: {
    title: 'Take the full advantage of going paper-less now.',
    subtitle:
      'N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations',
    secondary: 'Contact Us',
    primary: 'Request Demo',
  },
};

export const insights = {
  title: 'Get yourself up-to-speed on all the things happening in fintech',
  cta: 'Insights',
  viewAll: 'read all insights',
  articles: [
    {
      kicker: 'getting started',
      title: 'How to transition from a traditional to a digital bank',
      author: 'David Grohl',
      date: '17/08/24',
      featured: true,
    },
    {
      kicker: 'getting started',
      title: 'How to transition from a traditional to a digital bank',
      author: 'David Grohl',
      date: '17/08/24',
    },
    {
      kicker: 'getting started',
      title: 'How to transition from a traditional to a digital bank',
      author: 'David Grohl',
      date: '17/08/24',
    },
  ],
};

export const caseStudies = {
  title: 'Our Case Studies',
  viewAll: 'view all',
  slides: [
    {
      kicker: 'getting started',
      title: 'How we help brand reach out to more people',
      brand: 'Zoomerr',
    },
    {
      kicker: 'getting started',
      title: 'Scaling a neobank to one million users',
      brand: 'SmartFinder',
    },
    {
      kicker: 'getting started',
      title: 'Launching open banking APIs in 90 days',
      brand: 'ArtVenue',
    },
  ],
};

export const footer = {
  offices: [
    {
      city: 'London',
      address:
        'Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.',
    },
    {
      city: 'Dubai',
      address:
        'Linktia Infosystems Ltd – CB7, Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates',
    },
    {
      city: 'Pune',
      address:
        'Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India',
    },
  ],
  columns: [
    {
      title: 'Solutions',
      links: [
        'Core Banking CB7',
        'Digital Banking N7',
        'Open Banking',
        'Loan Origination System',
        'Loan Management System',
        'Digital Transformation',
      ],
    },
    {
      title: 'N7 Banking',
      links: [
        'About Us',
        'Solutions',
        'Contact',
        'Company',
        'Careers',
        'Insights',
        'Core Team',
        'Brand Center',
      ],
    },
    {
      title: 'Our Socials',
      links: ['LinkedIn', 'X'],
    },
  ],
  copyright:
    'Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]',
};
