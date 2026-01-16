import React from "react";
import DocumentIcon from "../../components/svg/DocumentIcon";
import ArrowUpRightIcon from "../../components/svg/ArrowUpRightIcon";
import UsersIcon from "../../components/svg/UsersIcon";
import TrendingUpIcon from "../../components/svg/TrendingUpIcon";
import ArrowDownRightIcon from "../../components/svg/ArrowDownRightIcon";

const InvoiceDashboard = () => {
  // Invoice data
  const invoices = [
    {
      id: "INV-2024-1087",
      client: "Acme Corp Ltd",
      country: "UK",
      tax: "VAT 20%",
      amount: "$12,450.00",
      status: "Paid",
      statusColor: "bg-[#DCFCE7] text-[#016630]",
    },
    {
      id: "INV-2024-1086",
      client: "TechStart GmbH",
      country: "Germany",
      tax: "VAT 19%",
      amount: "€8,900.00",
      status: "Pending",
      statusColor: "bg-[#FEF9C2] text-[#894B00]",
    },
    {
      id: "INV-2024-1085",
      client: "Global Services Inc",
      country: "USA",
      tax: "Sales Tax 8%",
      amount: "$15,200.00",
      status: "Paid",
      statusColor: "bg-[#DCFCE7] text-[#016630]",
    },
    {
      id: "INV-2024-1084",
      client: "Innovation Labs",
      country: "Canada",
      tax: "GST 5%",
      amount: "C$6,750.00",
      status: "Overdue",
      statusColor: "bg-[#FFE2E2] text-[#9F0712]",
    },
  ];

  // Quick actions
  const quickActions = [
    { label: "Generate New Invoice", icon: DocumentIcon },
    { label: "Add New Client", icon: UsersIcon },
    { label: "View Cash Flow Forecast", icon: TrendingUpIcon },
  ];

  // Alerts with specific icon colors from Figma
  const alerts = [
    {
      title: "4 Invoices Due Soon",
      description: "Total value: $18,450",
      color: "bg-gradient-to-b from-[#EBF3FE] to-[#F8FBFD] border-[#BEDBFF]",
      textColor: "text-[#36509C]",
      iconColor: "#D08700",
      Icon: ArrowUpRightIcon,
    },
    {
      title: "FX Rate Alert",
      description: "USD/EUR favorable for conversion",
      color: "bg-gradient-to-r from-[#ECF4FE] to-[#F7FAFD] border-[#BEDBFF]",
      textColor: "text-[#1C398E]",
      iconColor: "#155DFC",
      Icon: TrendingUpIcon,
    },
    {
      title: "Payment Received",
      description: "Acme Corp - $12,450 settled",
      color: "bg-[#F0FDF4] border-[#B9F8CF]",
      textColor: "text-[#0D542B]",
      iconColor: "#00A63E",
      Icon: ArrowDownRightIcon,
    },
  ];

  // Scaled down column widths (approximately 80% of original)
  const columnWidths = [
    "w-[101px]", // Invoice ID (was 126.45px)
    "w-[117px]", // Client (was 145.98px)
    "w-[70px]",  // Country (was 87.68px)
    "w-[87px]",  // Tax Applied (was 108.52px)
    "w-[81px]",  // Amount (was 101.64px)
    "w-[79px]",  // Status (was 98.41px)
  ];

  const columnPadding = "pl-3";

  return (
    <div className="w-full h-full relative">
      {/* Inner card - scaled down to fit */}
      <div className="absolute left-[3px] top-[4px] w-full h-full bg-gradient-to-b from-[#EDF4FE] to-white border border-opacity-10 border-black rounded-[30px] p-4">
        {/* Header section */}
        <div className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-base font-bold text-[#0A0A0A]">
              Recent Invoices
            </h1>
            <p className="text-xs text-[#717182] mt-0.5">
              Latest billing activity across all regions
            </p>
          </div>
          <button className="px-3 py-1.5 bg-[#D0E5FD] border border-opacity-10 border-black rounded-lg text-xs text-[#073F9E]">
            View All
          </button>
        </div>

        {/* Table section - scaled down */}
        <div className="w-full max-w-full overflow-hidden">
          {/* Table Header */}
          <div className="w-full h-[35px] flex border-b border-black border-opacity-10">
            {[
              "Invoice ID",
              "Client",
              "Country",
              "Tax Applied",
              "Amount",
              "Status",
            ].map((header, index) => (
              <div
                key={index}
                className={`${columnWidths[index]} h-[35px] flex items-center ${columnPadding}`}
              >
                <span className="text-xs text-[#717182] font-normal">
                  {header}
                </span>
              </div>
            ))}
          </div>

          {/* Table Body */}
          <div className="w-full">
            {invoices.map((invoice, rowIndex) => (
              <div
                key={rowIndex}
                className="w-full h-[60px] flex items-center border-b border-black border-opacity-10"
              >
                {/* Invoice ID */}
                <div
                  className={`${columnWidths[0]} h-[52px] flex items-center ${columnPadding}`}
                >
                  <span className="text-xs text-[#0A0A0A]">{invoice.id}</span>
                </div>

                {/* Client */}
                <div
                  className={`${columnWidths[1]} h-[52px] flex items-center ${columnPadding}`}
                >
                  <span className="text-xs text-[#0A0A0A] truncate">
                    {invoice.client}
                  </span>
                </div>

                {/* Country */}
                <div
                  className={`${columnWidths[2]} h-[52px] flex items-center ${columnPadding}`}
                >
                  <span className="text-xs text-[#0A0A0A]">
                    {invoice.country}
                  </span>
                </div>

                {/* Tax Applied */}
                <div
                  className={`${columnWidths[3]} h-[52px] flex items-center ${columnPadding}`}
                >
                  <span className="text-xs text-[#717182]">
                    {invoice.tax}
                  </span>
                </div>

                {/* Amount */}
                <div
                  className={`${columnWidths[4]} h-[52px] flex items-center ${columnPadding}`}
                >
                  <span className="text-xs text-[#0A0A0A] font-normal">
                    {invoice.amount}
                  </span>
                </div>

                {/* Status */}
                <div
                  className={`${columnWidths[5]} h-[52px] flex items-center ${columnPadding}`}
                >
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] ${invoice.statusColor} inline-flex items-center justify-center min-w-[35px] h-[16px]`}
                  >
                    {invoice.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section - Quick Actions and Alerts */}
        <div className="mt-8 grid grid-cols-2 gap-6">
          {/* Quick Actions */}
          <div>
            <h2 className="text-base font-bold text-[#0A0A0A] mb-3">
              Quick Actions
            </h2>

            <div className="space-y-2">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <button
                    key={index}
                    className="w-full h-[30px] bg-white border border-[#36509C] rounded-lg flex items-center space-x-2 px-3 hover:bg-gray-50 transition-colors"
                  >
                    <Icon size={14} color="#0A0A0A" />
                    <span className="text-xs text-[#0A0A0A] flex-1 text-left truncate">
                      {action.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Alerts & Notifications */}
          <div>
            <h2 className="text-base font-bold text-[#0A0A0A] mb-3">
              Alerts & Notifications
            </h2>
            <div className="space-y-2">
              {alerts.map((alert, index) => {
                const AlertIcon = alert.Icon;
                return (
                  <div
                    key={index}
                    className={`w-full h-[52px] relative rounded-lg border ${alert.color} ${alert.textColor} p-0`}
                  >
                    {/* Icon */}
                    <div className="absolute w-[16px] h-[16px] left-[10px] top-[12px]">
                      <AlertIcon size={16} color={alert.iconColor} />
                    </div>
                    
                    {/* Text content */}
                    <div className="absolute left-[36px] top-[10px] flex flex-col gap-0.5">
                      <p className="text-xs font-normal leading-4 truncate">
                        {alert.title}
                      </p>
                      <p className="text-[10px] leading-3 opacity-80 truncate">
                        {alert.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black to-transparent opacity-20"></div>
      </div>
    </div>
  );
};

export default InvoiceDashboard;





{/* RIGHT — SCREEN DISPLAY */}
      <div className="w-[34rem] h-[42rem] relative bottom-[22%] right-[-24%]">
        {/* Main container with shadow */}
        <div className="absolute inset-0 bg-[#F6F9FC] rounded-[36px] shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_30px_60px_-30px_rgba(0,0,0,0.3),inset_0px_-2px_6px_rgba(10,37,64,0.35)]"></div>

        {/* Dynamic Screen Container */}
        <div
          ref={screenContainerRef}
          className="absolute left-[1px] top-[1px] w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-[36px] overflow-hidden bg-white"
          style={{ opacity: 1 }}
        >
          <CurrentScreen />
        </div>
      </div>