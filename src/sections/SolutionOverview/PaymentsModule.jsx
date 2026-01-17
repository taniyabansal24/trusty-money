import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { Container } from "../../components/ui";
import { FeatureBlock } from '../../sections/SolutionOverview/BillingModule';
import usFlag from "../../assets/usflag.jpg";
import ukFlag from "../../assets/ukflag.png";
import canadaFlag from "../../assets/canadaflag.webp";
import worldFlag from "../../assets/euflag.webp";

import LocationIcon from "../../components/svg/LocationIcon";
import BankIcon from "../../components/svg/BankIcon";
import CardIcon from "../../components/svg/CardIcon";
import DuplicateIcon from "../../components/svg/DuplicateIcon";
import FilterIcon from "../../components/svg/FilterIcon";

export function PaymentsModule() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    if (!accounts.length) return;

    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % accounts.length);
    }, 3500);

    return () => clearInterval(id);
  }, [isVisible]);

  const accounts = [
    {
      country: "United States",
      currency: "USD",
      flag: "🇺🇸",
      accountNumber: "0334178142",
      bankName: "Community Federal Savings Bank",
      bankAddress: "810 Seventh Avenue, New York, NY 10019, US",
      bankCountry: "US",
      routingCodeType: "ach_routing_number",
      routingCode: "026073150",
      balance: "3,412.00",
    },
    {
      country: "Canada",
      currency: "CAD",
      flag: "🇨🇦",
      accountNumber: "879583369",
      bankName: "Digital Commerce Bank",
      bankAddress: "736 Meridian Road N.E, Calgary, Alberta, CA",
      bankCountry: "CA",
      routingCodeType: "routing_code",
      routingCode: "034512345",
      balance: "8,950.00",
    },
    {
      country: "United Kingdom",
      currency: "GBP",
      flag: "🇬🇧",
      accountNumber: "53912152",
      bankName: "The Currency Cloud Limited",
      bankAddress:
        "12 Steward Street, The Steward Building, London, E1 6FQ, GB",
      bankCountry: "GB",
      routingCodeType: "sort_code",
      routingCode: "123456",
      balance: "539,121.52",
    },
    {
      country: "Eurozone (Euro)",
      currency: "EUR",
      flag: "🇪🇺",
      accountNumber: "GB01TCCL86063304234590",
      bankName: "The Currency Cloud Limited",
      bankAddress:
        "12 Steward Street, The Steward Building, London, E1 6FQ, GB",
      bankCountry: "GB",
      routingCodeType: "bic_swift",
      routingCode: "TCCLGB31",
      balance: "1,234,560.00",
    },
  ];

  const features = [
    {
      title: "Multi-Currency Accounts",
      description:
        "Hold and manage funds across 15+ currencies with local account details.",
    },
    {
      title: "Zero Markup FX",
      description:
        "Convert currencies at interbank rates with full transparency and no hidden fees.",
    },
    {
      title: "Universal Payment Rails",
      description:
        "Accept global bank transfers, cards, and local payment methods through one gateway.",
    },
  ];

  const activeCard = accounts[activeIndex % accounts.length];

  const escapeRegExp = (s) => String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const getFlagAsset = (card) => {
    if (!card) return { src: worldFlag, alt: "Flag" };
    if (card.currency === "EUR" || String(card.country).toLowerCase().includes("eurozone")) {
      return { src: worldFlag, alt: "Eurozone" };
    }
    switch (card.bankCountry) {
      case "US":
        return { src: usFlag, alt: "United States" };
      case "CA":
        return { src: canadaFlag, alt: "Canada" };
      case "GB":
        return { src: ukFlag, alt: "United Kingdom" };
      default:
        return { src: worldFlag, alt: "Flag" };
    }
  };

  const renderAddressWithFlag = (address, countryCode, card) => {
    if (!address || !countryCode) return address;
    const { src, alt } = getFlagAsset(card);
    const re = new RegExp(`\\b${escapeRegExp(countryCode)}\\b\\s*$`);
    const addr = String(address);
    if (!re.test(addr)) return addr;
    const text = addr.replace(re, "").replace(/[\s,]+$/, "");
    return (
      <span className="inline-flex flex-wrap items-center gap-2">
        <span>{text},</span>
        <img
          src={src}
          alt={alt}
          className="h-4 w-4 rounded-full object-cover border border-slate-200"
          loading="lazy"
          decoding="async"
        />
      </span>
    );
  };

  const withCountryFlagInAddress = (address, countryCode, flag) => {
    if (!address || !countryCode || !flag) return address;
    const re = new RegExp(`\\b${escapeRegExp(countryCode)}\\b\\s*$`);
    return String(address).replace(re, flag);
  };

  return (
    <div
      ref={sectionRef}
      className="relative border-t border-violet-100  py-20 md:py-24 overflow-hidden isolate"
    >
      <div
        className="absolute inset-0 z-[1] pointer-events-none hero-grid opacity-30"
        aria-hidden="true"
      />

      <Container className="relative z-10 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-gradient-to-r from-[#0F1615]/10 via-white/80 to-blue-50/60 backdrop-blur-sm px-3 py-1 shadow-sm"
          >
            <div className="flex h-2 w-2 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#0B43A0]" />
            <span className="text-xs font-medium tracking-wide text-[#0A2540]">
              Payment Infrastructure
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-4 text-3xl font-bold text-[#0A2540]"
          >
            Payments and Collections
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 text-lg leading-relaxed text-[#425466]"
          >
            Flexible payment infrastructure for global businesses. Accept payments worldwide with multi-currency accounts, transparent pricing, and seamless integration across all payment methods.
          </motion.p>

          {/* Feature Blocks with Custom Bullets */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <FeatureBlock key={index} title={feature.title} index={index}>
                {feature.description}
              </FeatureBlock>
            ))}
          </div>
        </div>

        {/* Visual - Interactive Card */}
        <motion.div className="relative">
          <div className="relative">
            <motion.div
  initial={{ opacity: 0, rotateY: -90, scale: 0.8 }}
  animate={{ opacity: 1, rotateY: 0, scale: 1 }}
  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  className="relative"
>
  <div
    className="group relative"
    style={{ perspective: "1000px" }}
  >
    <AnimatePresence mode="wait">
      <motion.div
        key={`${activeCard.currency}-${activeCard.accountNumber}`}
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        exit={{ rotateY: -90, opacity: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Main container - smaller dimensions */}
        <div
          className="relative overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-200"
          style={{
            width: "580px",
            height: "400px",
          }}
        >
          {/* Background blur effects - scaled down - REMOVED GRADIENTS */}
          <div className="absolute w-[220px] h-[220px] left-[420px] top-[-80px] bg-blue-50 opacity-37 blur-[50px] rounded-full" />
          <div className="absolute w-[220px] h-[220px] left-[-70px] top-[250px] bg-blue-50 opacity-46 blur-[50px] rounded-full" />
          
          {/* Main Content Container */}
          <div className="relative w-full h-full p-6">
            {/* Header Container */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <img
                  src={getFlagAsset(activeCard).src}
                  alt={getFlagAsset(activeCard).alt}
                  className="w-7 h-6 rounded-md object-cover border border-slate-200 shadow-sm"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <div className="text-xs text-[#45556C] leading-[18px]">
                    Bank Account
                  </div>
                  <div className="font-bold text-base text-[#0F172B] leading-[24px]">
                    {activeCard.country}
                  </div>
                </div>
              </div>

              {/* Active Badge */}
              <div className="px-2.5 py-1.5 bg-green-50 border border-green-200 rounded-full">
                <span className="text-xs font-normal text-[#009966] leading-[14px]">
                  Active
                </span>
              </div>
            </div>

            {/* Account Number Section */}
            <div className="mb-5">
              <div className="text-xs font-normal text-[#62748E] tracking-[0.5px] uppercase leading-[14px] mb-2">
                Account Number
              </div>
              <div className="w-full h-14 bg-blue-50 border border-blue-100 rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Credit Card Icon */}
                  <CardIcon className="w-5 h-4 text-[#073F9E]" />

                  <div className="text-xl font-normal text-[#0F172B] tracking-[1px] leading-[28px]">
                    {activeCard.accountNumber}
                  </div>
                </div>
                
                {/* Copy Button */}
                <DuplicateIcon className="w-10 h-10 text-[#073F9E]" />

              </div>
            </div>

            {/* Bank Info Grid */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {/* Bank Name Card */}
              <div className="h-16 bg-blue-50 border border-blue-100 rounded-xl p-3">
                <div className="flex items-center gap-2 mb-1">
                  {/* Bank Icon */}
                  <BankIcon className="w-4 h-4 text-[#073F9E]" />
                  <div className="text-xs font-normal text-[#62748E] tracking-[0.5px] uppercase leading-[14px]">
                    Bank Name
                  </div>
                </div>
                <div className="text-sm font-normal text-[#0F172B] leading-[18px] truncate">
                  {activeCard.bankName}
                </div>
              </div>

              {/* Routing Code Card */}
              <div className="h-16 bg-blue-50 border border-blue-100 rounded-xl p-3">
                <div className="flex items-center gap-2 mb-1">
                  {/* ACH Icon */}
                  <FilterIcon className="w-4 h-4 text-[#073F9E]" />

                  <div className="text-xs font-normal text-[#62748E] tracking-[0.5px] uppercase leading-[14px]">
                    {activeCard.routingCodeType}
                  </div>
                </div>
               <div className="flex items-center justify-between relative -top-1">
  <div className="text-sm font-normal text-[#0F172B] leading-[18px]">
    {activeCard.routingCode}
  </div>
    <DuplicateIcon className="w-10 h-10 text-[#073F9E] relative -top-3" />
</div>
              </div>
            </div>

            {/* Bank Address Card */}
            <div className="h-16 bg-blue-50 border border-blue-100 rounded-xl p-3 mb-5">
              <div className="flex items-center gap-2 mb-1">
                {/* Location Icon */}
               <LocationIcon className="w-4 h-4 text-[#073F9E]" />

                <div className="text-xs font-normal text-[#62748E] tracking-[0.5px] uppercase leading-[14px]">
                  Bank Address
                </div>
              </div>
              <div className="text-sm font-normal text-[#0F172B] leading-[18px] truncate">
                {activeCard.bankAddress}
              </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-6 left-6 right-6 border-t border-gray-300 pt-3">
              <div className="flex items-center justify-between">
                {/* Dots - REMOVED GRADIENT */}
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 bg-[#073F9E] rounded-full" />
                  <div className="w-1.5 h-1.5 bg-[#073F9E] rounded-full opacity-70" />
                  <div className="w-1.5 h-1.5 bg-[#073F9E] rounded-full opacity-40" />
                </div>

                {/* Secured Connection */}
                <div className="text-xs font-normal text-[#90A1B9] leading-[14px]">
                  Secured Connection
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
</motion.div>

            {/* Balance Display Below Card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`balance-${activeCard.currency}-${activeCard.accountNumber}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <div className="text-sm text-slate-600">
                      Available Balance
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-emerald-100 px-2 py-1 text-xs text-emerald-700">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                      Active
                    </div>
                  </div>
                  <div className="text-3xl text-slate-900">
                    {activeCard.currency} {activeCard.balance}
                  </div>
                  <div className="mt-2 text-xs text-slate-500">
                    Last transaction: 2 hours ago
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Click Hint */}
            {/* <motion.div
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 1, duration: 0.4 }}
                className="mt-4 text-center"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-500 shadow-sm">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  Click card to switch currency
                </div>
              </motion.div> */}
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
