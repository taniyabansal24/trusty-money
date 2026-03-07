import {
  FileText,
  Globe,
  CreditCard,
  Wallet
} from "lucide-react";
import DocumentIcon from "../components/svg/DocumentIcon";
import ReceivablesAutomation from "../components/svg/ReceivablesAutomation";
import TaxIcon03 from "../components/svg/TaxIcon03";
import UserCardIcon from "../components/svg/UserCardIcon";

export const PRODUCT_LINKS = [
  {
    name: "Billing",
    description: "Create invoices and manage billing workflows with automated reminders",
    icon: DocumentIcon,
    href: "/products/billing",
  },
  {
    name: "Receivables & Automation",
    description: "Automate receivables, cash collection, and reconciliation",
    icon: ReceivablesAutomation,
    href: "/products/receivables-automation",
  },
  {
    name: "Global Tax Compliance",
    description: "Stay compliant with international tax rules and regulations",
    icon: TaxIcon03,
    href: "/products/tax-compliance",
  },
  {
    name: "Payments & Collections",
    description: "Accept payments globally and streamline collections",
    icon: UserCardIcon,
    href: "/products/payments",
  },
  {
    name: "Treasury & Working Capital",
    description: "Optimize liquidity, manage cash flow, and maximize returns",
    icon: Wallet,
    href: "/products/treasury",
  },
];

export const NAVIGATION_LINKS = [
  { name: "About", href: "/about-us" },
  { name: "Resources", href: "#resources" },
  { name: "Join Us", href: "/about-us" },
];

export const COMPANY_NAME = "Trusty Money";