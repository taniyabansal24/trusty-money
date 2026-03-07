import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../../components/svg/Logo";

const SubscriptionCard = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldExit, setShouldExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldExit(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Container animation variants
  const containerVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  // Item animation variants
  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && !shouldExit && (
        <motion.div
          key="subscription-card"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="max-w-[450px] mx-auto relative"
        >
          {/* Main Card Container */}
          <motion.div 
            className="bg-white border border-[#E2E8F0] shadow-md rounded-xl p-5 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {/* Header with Logo */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-between gap-2 mb-4"
            >
              <motion.div 
                className="flex flex-row items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-9 h-9 bg-white shadow-sm rounded-sm flex items-center justify-center p-1"
                >
                  <Logo />
                </motion.div>
                <motion.div 
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm font-semibold text-[#073F9E]"
                >
                  Trusty Money
                </motion.div>
              </motion.div>
              
              {/* Create Subscription */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-base font-semibold text-right mb-3 text-[#1b1b1b]"
              >
                Create <span className="text-[#073F9E]">Subscription</span>
              </motion.div>
            </motion.div>

            <motion.hr 
              variants={itemVariants}
              className="border-[0.5px] border-gray-200 my-3" 
            />

            {/* User Info */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-between mb-4"
            >
              <motion.div 
                className="flex gap-2 items-center"
                whileHover={{ x: 5 }}
              >
                <motion.svg
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.08332 0C8.01352 -4.36023e-06 8.93461 0.183208 9.794 0.539176C10.6534 0.895145 11.4343 1.4169 12.092 2.07465C12.7498 2.73239 13.2715 3.51325 13.6275 4.37264C13.9835 5.23204 14.1667 6.15312 14.1667 7.08332C14.1667 10.9953 10.9953 14.1667 7.08332 14.1667C3.17133 14.1667 0 10.9953 0 7.08332C0 3.17133 3.17133 0 7.08332 0ZM7.79168 7.79168H6.375C4.62138 7.79168 3.11585 8.85375 2.46649 10.3698C3.49393 11.8106 5.17892 12.75 7.08332 12.75C8.98772 12.75 10.6727 11.8106 11.7002 10.3697C11.0508 8.85375 9.5453 7.79168 7.79168 7.79168ZM7.08332 2.125C5.90972 2.125 4.95832 3.0764 4.95832 4.25C4.95832 5.4236 5.90972 6.375 7.08332 6.375C8.25692 6.375 9.20832 5.4236 9.20832 4.25C9.20832 3.0764 8.25695 2.125 7.08332 2.125Z"
                    fill="#073F9E"
                  />
                </motion.svg>
                <div className="text-sm font-semibold text-[#1b1b1b]">
                  Stave Smith
                </div>
              </motion.div>
              
              <motion.div 
                className="flex gap-2 items-center mr-[20px]"
                whileHover={{ x: -5 }}
              >
                <motion.svg
                  initial={{ rotate: 180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  width="15"
                  height="13"
                  viewBox="0 0 15 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.0625 2.48696C0.73674 2.69512 0.468648 2.98197 0.282957 3.32104C0.0972652 3.66012 -4.60411e-05 4.04049 1.63416e-08 4.42708V8.67708C1.63416e-08 10.7312 1.66458 12.3958 3.71875 12.3958H10.0937C10.9083 12.3958 11.6245 11.9722 12.0339 11.3333H3.71875C3.01427 11.3333 2.33864 11.0535 1.8405 10.5553C1.34235 10.0572 1.0625 9.38156 1.0625 8.67708V2.48696ZM1.77083 2.91125V8.32292C1.77079 8.91093 1.99577 9.47667 2.3996 9.90408C2.80343 10.3315 3.35551 10.5882 3.94258 10.6215L4.07292 10.625H12.2187C12.8068 10.625 13.3725 10.4001 13.7999 9.99623C14.2273 9.5924 14.484 9.04032 14.5173 8.45325L14.5208 8.32292V2.91125L8.39375 6.137C8.31733 6.17732 8.23224 6.19839 8.14583 6.19839C8.05943 6.19839 7.97433 6.17732 7.89792 6.137L1.77083 2.91125ZM12.2187 1.04667e-07H4.07292C3.55887 -0.000154849 3.05956 0.171745 2.65455 0.488308C2.24954 0.804871 1.96213 1.24788 1.83812 1.74675L8.14583 5.06671L14.4535 1.74675C14.335 1.2702 14.0672 0.844049 13.6892 0.530551C13.3112 0.217053 12.8429 0.0326386 12.3526 0.00425013L12.2187 1.04667e-07Z"
                    fill="#073F9E"
                  />
                </motion.svg>
                <div className="text-sm font-semibold text-[#1b1b1b]">
                  smith@gmail.com
                </div>
              </motion.div>
            </motion.div>

            {/* Subscription Details */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-between"
            >
              <motion.div 
                className="flex gap-2 items-start"
                whileHover={{ scale: 1.05 }}
              >
                <motion.svg
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  width="17"
                  height="21"
                  viewBox="0 0 17 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4599 3.76466C12.3444 3.91628 12.2939 4.10756 12.3194 4.29644C12.3449 4.48532 12.4444 4.65634 12.596 4.77187C13.7011 5.61344 14.5286 6.76689 14.9717 8.08334C15.4148 9.3998 15.4532 10.8188 15.082 12.1573C14.7107 13.4958 13.9469 14.6924 12.889 15.5925C11.8311 16.4926 10.5277 17.0551 9.14698 17.2072L9.15177 17.2024C8.49534 17.2747 7.83198 17.2538 7.18144 17.1401L6.86231 17.4592C6.74059 17.5809 6.66657 17.7423 6.65374 17.9139C6.6409 18.0856 6.69009 18.2561 6.79235 18.3946L6.86231 18.4751L8.77898 20.3917C8.90739 20.5192 9.07914 20.5935 9.25993 20.5998C9.44072 20.6062 9.61726 20.5442 9.75432 20.4261C9.89138 20.308 9.97888 20.1426 9.99936 19.9629C10.0198 19.7831 9.97177 19.6023 9.86477 19.4564L9.79577 19.3759L9.07702 18.6572C10.7666 18.5172 12.3741 17.8685 13.6875 16.7964C15.0009 15.7243 15.9585 14.2793 16.4339 12.6519C16.9094 11.0245 16.8804 9.29126 16.3507 7.68072C15.8211 6.07018 14.8157 4.65802 13.4671 3.63049C13.3156 3.51489 13.1244 3.46418 12.9356 3.48952C12.7467 3.51486 12.5756 3.61321 12.4599 3.76466ZM6.97827 0.210201C6.84367 0.344967 6.76807 0.527648 6.76807 0.718117C6.76807 0.908587 6.84367 1.09127 6.97827 1.22603L7.69702 1.94478C6.03459 2.08172 4.45078 2.71136 3.14808 3.75319C1.84539 4.79502 0.883014 6.2017 0.384009 7.79337C-0.114996 9.38504 -0.127956 11.0894 0.346787 12.6885C0.82153 14.2875 1.7624 15.7087 3.0491 16.7702C3.12191 16.8304 3.20585 16.8756 3.29613 16.9033C3.38641 16.931 3.48127 16.9407 3.57529 16.9317C3.66931 16.9228 3.76064 16.8954 3.84408 16.8512C3.92752 16.8069 4.00143 16.7467 4.06158 16.6739C4.12174 16.6011 4.16697 16.5171 4.19468 16.4269C4.2224 16.3366 4.23206 16.2417 4.22312 16.1477C4.21417 16.0537 4.1868 15.9623 4.14256 15.8789C4.09832 15.7955 4.03807 15.7216 3.96527 15.6614C2.91179 14.7921 2.13785 13.6316 1.74018 12.3249C1.34251 11.0182 1.33874 9.62333 1.72934 8.31452C2.11993 7.00571 2.88758 5.84104 3.93634 4.96603C4.98511 4.09103 6.26849 3.5445 7.6261 3.39474L7.62035 3.40049C8.27741 3.32797 8.94143 3.34894 9.5926 3.46278L9.91173 3.1427C10.0463 3.00793 10.1219 2.82525 10.1219 2.63478C10.1219 2.44431 10.0463 2.26163 9.91173 2.12687L7.99506 0.210201C7.86029 0.0756024 7.67761 0 7.48714 0C7.29667 0 7.11303 0.0756024 6.97827 0.210201ZM14.137 10.3005C14.137 11.8255 13.5312 13.288 12.4529 14.3664C11.3745 15.4447 9.91201 16.0505 8.38702 16.0505C6.86202 16.0505 5.39949 15.4447 4.32116 14.3664C3.24282 13.288 2.63702 11.8255 2.63702 10.3005C2.63702 8.7755 3.24282 7.31296 4.32116 6.23463C5.39949 5.15629 6.86202 4.55049 8.38702 4.55049C9.91201 4.55049 11.3745 5.15629 12.4529 6.23463C13.5312 7.31296 14.137 8.7755 14.137 10.3005ZM11.2908 8.35507C11.156 8.22048 10.9733 8.14487 10.7829 8.14487C10.5924 8.14487 10.4097 8.22048 10.2749 8.35507L7.42869 11.2013L6.4991 10.2717C6.4333 10.2011 6.35395 10.1445 6.26578 10.1052C6.17762 10.0659 6.08244 10.0448 5.98594 10.0431C5.88943 10.0414 5.79357 10.0591 5.70407 10.0953C5.61457 10.1314 5.53328 10.1852 5.46502 10.2535C5.39677 10.3217 5.34297 10.403 5.30682 10.4925C5.27067 10.582 5.25292 10.6779 5.25462 10.7744C5.25632 10.8709 5.27745 10.9661 5.31673 11.0543C5.35601 11.1424 5.41265 11.2218 5.48327 11.2876L6.92077 12.7251C7.05554 12.8597 7.23822 12.9353 7.42869 12.9353C7.61916 12.9353 7.80184 12.8597 7.9366 12.7251L11.2908 9.37091C11.4254 9.23614 11.501 9.05346 11.501 8.86299C11.501 8.67252 11.4254 8.48984 11.2908 8.35507Z"
                    fill="#073F9E"
                  />
                </motion.svg>

                <div>
                  <h3 className="text-sm font-semibold text-[#1b1b1b]">Progressive</h3>
                  <p className="text-xs">1 Subscription</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex gap-2 items-start mr-[60px]"
                whileHover={{ scale: 1.05 }}
              >
                <motion.svg
                  initial={{ rotate: 180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 12.0417C0 13.2458 0.920833 14.1667 2.125 14.1667H12.0417C13.2458 14.1667 14.1667 13.2458 14.1667 12.0417V6.375H0V12.0417ZM12.0417 1.41667H10.625V0.708333C10.625 0.283333 10.3417 0 9.91667 0C9.49167 0 9.20833 0.283333 9.20833 0.708333V1.41667H4.95833V0.708333C4.95833 0.283333 4.675 0 4.25 0C3.825 0 3.54167 0.283333 3.54167 0.708333V1.41667H2.125C0.920833 1.41667 0 2.3375 0 3.54167V4.95833H14.1667V3.54167C14.1667 2.3375 13.2458 1.41667 12.0417 1.41667Z"
                    fill="#073F9E"
                  />
                </motion.svg>

                <div className="mt-[-2px]">
                  <h3 className="text-sm font-semibold text-[#1b1b1b]">$2.00/unit</h3>
                  <p className="text-xs">Metered usage</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.hr 
              variants={itemVariants}
              className="border-[0.5px] border-gray-200 my-4" 
            />

            {/* Billing Section */}
            <motion.div 
              variants={itemVariants}
              className="mb-3 flex items-center justify-between"
            >
              <div>
                <h3 className="text-sm font-semibold text-[#1b1b1b]">Billing</h3>
              </div>
              
              <motion.div 
                className="flex gap-2 items-start"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="5.5"
                      transform="matrix(1 0 0 -1 0 16)"
                      stroke="#073F9E"
                      strokeWidth="5"
                    />
                  </svg>
                </motion.div>

                <div className="-mt-[2px]">
                  <h3 className="text-sm font-semibold text-[#1b1b1b]">
                    Charge payment method on file
                  </h3>
                  <p className="text-xs">Mastercard ***** 6677</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.hr 
              variants={itemVariants}
              className="border-[0.5px] border-gray-200 my-4" 
            />

            {/* Options Section */}
            <motion.div 
              variants={itemVariants}
              className="mb-4 flex item-center justify-between"
            >
              <div className="text-sm font-semibold mb-2 text-[#1b1b1b]">Options</div>

              <div className="space-y-3 w-[15rem]">
                {/* Coupon Row */}
                <motion.div 
                  className="flex items-center justify-between"
                  whileHover={{ x: -5 }}
                >
                  <span className="text-xs text-gray-600">Coupon</span>
                  <motion.span 
                    className="text-xs font-semibold text-[#073F9E]"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    Add Coupon
                  </motion.span>
                </motion.div>

                {/* Tax Row */}
                <motion.div 
                  className="flex items-center justify-between"
                  whileHover={{ x: -5 }}
                >
                  <span className="text-xs text-gray-600">Tax</span>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: 70 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="w-[70px] h-3 bg-[rgba(7,63,158,0.1)] rounded-full"
                  />
                </motion.div>

                {/* Trial Row */}
                <motion.div 
                  className="flex items-center justify-between"
                  whileHover={{ x: -5 }}
                >
                  <span className="text-xs text-gray-600">Trial</span>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: 50 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="w-[50px] h-3 bg-[rgba(7,63,158,0.1)] rounded-full ml-auto"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-end gap-3 mt-14"
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#d1d9e8" }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-1.5 bg-[#E7ECF6] rounded-lg text-xs text-[#073F9E] shadow-sm"
              >
                Cancel
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#052d73" }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-1.5 bg-[#073F9E] rounded-lg text-xs text-white shadow-md"
              >
                Start Subscription
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubscriptionCard;