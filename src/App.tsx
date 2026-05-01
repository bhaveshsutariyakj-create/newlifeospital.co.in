/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  PhoneCall,
  MessageCircle,
  CalendarClock,
  ShieldCheck,
  Stethoscope,
  Activity,
  HeartPulse,
  Clock,
  Star,
  MapPin,
  Menu,
  X,
  CheckCircle2,
  ChevronRight,
  Quote,
  PlusCircle,
  Syringe,
  Heart,
  TestTube,
  Scale,
  HeartHandshake,
  CreditCard,
  Cross,
  Award,
  Navigation,
} from "lucide-react";

const DOCTOR_NAME = "Dr. Shilpa Sutariya";
const PHONE_NUMBER = "918140038191";
const DISPLAY_PHONE = "+91 8140038191";
const DOCTOR_IMAGE = "/doctor.jpg";

const FEATURED_CERTIFICATE = {
  title: "Post Graduate Diploma at RCP (UK)",
  image: "/certi.jpg",
};

const ACHIEVEMENTS = [
  {
    id: 1,
    title: "Fellowship of Diabetes India",
    image: "/fello.jpg",
  },
  {
    id: 2,
    title: "PGCDM at Indore by Dr Sunil Jain",
    image: "/pgcdm.jpg",
  },
  {
    id: 3,
    title: "CCEDM at Chennai by Dr V Mohan",
    image: "/ccedm.jpg",
  },
  {
    id: 4,
    title: "Awarded Best Doctor in City at Mumbai",
    image: "/mumbai.jpg",
  },
  {
    id: 5,
    title: "Honored by SGCCI",
    image: "/sgcci.jpg",
  },
  {
    id: 6,
    title: "Diabetes India 2026",
    image: "/outstand.jpg",
  },
];

const WA_LINK = (text: string) =>
  `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;

const BrandLogo = ({ className = "h-12 w-auto" }: { className?: string }) => (
  <svg
    viewBox="0 0 250 160"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="crossGrid"
        width="6"
        height="6"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M 6 0 L 0 0 0 6"
          fill="none"
          stroke="#E62E2D"
          strokeOpacity={0.4}
          strokeWidth="0.5"
        />
      </pattern>
      <mask id="crossMask">
        <rect width="100%" height="100%" fill="white" />
        <path
          d="M 70 30 L 110 30 L 110 65 L 145 65 L 145 105 L 110 105 L 110 140 L 70 140 L 70 105 L 35 105 L 35 65 L 70 65 Z"
          fill="black"
          stroke="black"
          strokeWidth="8"
          strokeLinejoin="round"
        />
      </mask>
    </defs>

    {/* Anatomical Heart & ECG */}
    <g mask="url(#crossMask)">
      <path
        d="M 110 50 C 110 10 160 5 170 35 C 180 5 230 10 230 50 C 230 100 175 145 170 150 C 165 145 110 100 110 50 Z"
        fill="#E62E2D"
      />
      <path d="M 130 35 L 138 5 L 152 8 L 142 35 Z" fill="#E62E2D" />
      <path d="M 180 20 L 188 0 L 202 5 L 192 25 Z" fill="#E62E2D" />
      <path
        d="M 135 95 L 165 95 L 175 75 L 185 125 L 192 65 L 200 105 L 205 95 L 235 95"
        stroke="white"
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
    </g>

    {/* Medical Cross & Grid */}
    <path
      d="M 70 30 L 110 30 L 110 65 L 145 65 L 145 105 L 110 105 L 110 140 L 70 140 L 70 105 L 35 105 L 35 65 L 70 65 Z"
      fill="url(#crossGrid)"
      stroke="#E62E2D"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />

    <rect x="36" y="72" width="108" height="26" fill="white" />
    <text
      x="90"
      y="91"
      fontFamily="Georgia, 'Times New Roman', serif"
      fontWeight="bold"
      fontSize="21"
      fill="#2087C8"
      textAnchor="middle"
    >
      Newlife
    </text>
  </svg>
);

const PremiumWhatsAppButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const [ripples, setRipples] = useState<
    { x: number; y: number; id: number }[]
  >([]);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 800);

    // Smooth scroll for hash links on the same page
    if (href.startsWith("/#") || href.startsWith("#")) {
      const id = href.split("#")[1];
      if (window.location.pathname === "/" || href.startsWith("#")) {
        const el = document.getElementById(id);
        if (el && window.location.pathname === "/") {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", href);
        }
      }
    }
  };

  return (
    <div className="relative inline-block group">
      {/* Breathing ring - outside of overflow hidden container */}
      <div
        className="absolute inset-0 rounded-[50px] shadow-[0_0_0_4px_rgba(37,211,102,0.4)] pointer-events-none"
        style={{
          animation:
            "pulse-ring 3.5s cubic-bezier(0.215,0.61,0.355,1) infinite",
        }}
      />

      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        whileHover={{ y: -4 }}
        whileTap={{
          scale: 0.96,
          transition: { type: "spring", stiffness: 400, damping: 10 },
        }}
        className="relative overflow-hidden flex justify-center items-center gap-2 px-8 py-4 rounded-[50px] font-semibold text-white transition-all duration-500 ease-out z-10"
        style={{
          background:
            "linear-gradient(135deg, #25D366 0%, #1ebe5d 50%, #25D366 100%)",
          backgroundSize: "200% auto",
          backgroundPosition: isHovered ? "right center" : "left center",
          boxShadow: isHovered
            ? "0 12px 24px rgba(37, 211, 102, 0.4)"
            : "0 4px 12px rgba(37, 211, 102, 0.2)",
        }}
      >
        {/* Shine effect */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {isHovered && (
            <div className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
          )}
        </div>

        {/* Ripple effects */}
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.span
              key={ripple.id}
              initial={{ scale: 0, opacity: 0.6 }}
              animate={{ scale: 4, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 70%)",
                left: ripple.x,
                top: ripple.y,
                width: 100,
                height: 100,
                marginLeft: -50,
                marginTop: -50,
              }}
            />
          ))}
        </AnimatePresence>

        <div className="relative z-10 flex items-center gap-2">
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex items-center justify-center origin-center"
          >
            <MessageCircle size={22} className="stroke-white stroke-[2.5]" />
          </motion.div>
          {children}
        </div>

        {/* Floating particles on hover */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10, x: (i - 1.5) * 30 }}
                animate={{ opacity: [0, 1, 0], y: -40 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                className="absolute top-[60%] left-1/2 w-1.5 h-1.5 bg-white rounded-full blur-[0.5px]"
              />
            ))}
          </div>
        )}
      </motion.a>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { 
      name: "Services", 
      href: "/services",
      dropdown: [
        { name: "All Services", href: "/services" },
        { name: "Our Treatment Philosophy", href: "/treatment-philosophy" }
      ]
    },
    { name: "Awards", href: "/awards" },
    { name: "Reviews", href: "/reviews" },
    { name: "1-Min Health Check", href: "/health-check" },
    { name: "About", href: "/about" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <img src="/logo.png" alt="New Life Hospital Logo" width="160" height="48" className="h-10 md:h-12 w-auto object-contain drop-shadow-sm" />
              <span className="font-semibold text-lg md:text-xl text-gray-900 tracking-tight">
                New Life{" "}
                <span className="text-primary hidden sm:inline">Hospital</span>
              </span>
            </motion.div>
          </Link>

          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {links.map((link, i) => (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.name}
                className={link.dropdown ? "relative group" : ""}
              >
                <Link
                  to={link.href}
                  className="text-gray-600 hover:text-primary transition-colors text-sm font-medium py-6 flex items-center gap-1"
                >
                  {link.name}
                  {link.dropdown && <ChevronRight size={14} className="rotate-90" />}
                </Link>
                
                {link.dropdown && (
                  <div className="absolute top-full left-0 -mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden z-50">
                    <div className="py-2">
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-5 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/#book"
                onClick={(e) => {
                  if (window.location.pathname === "/") {
                    e.preventDefault();
                    document
                      .getElementById("book")
                      ?.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", "/#book");
                  }
                }}
                className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50"
              >
                Book Appointment
              </Link>
            </motion.div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 p-2"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {links.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-base font-semibold text-gray-900 border-b border-gray-100/50">
                        {link.name}
                      </div>
                      <div className="pl-4 space-y-1 mt-1">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={handleNavClick}
                            className="block px-3 py-2.5 rounded-md text-[15px] font-medium text-gray-600 hover:text-primary hover:bg-primary/5"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={handleNavClick}
                      className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/#book"
                onClick={(e) => {
                  handleNavClick();
                  if (window.location.pathname === "/") {
                    e.preventDefault();
                    document
                      .getElementById("book")
                      ?.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", "/#book");
                  }
                }}
                className="block px-3 py-3 rounded-md text-base font-bold text-primary hover:bg-primary/5 mt-4 text-center border border-primary/20"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[80vw] md:w-[60vw] h-[80vw] md:h-[60vw] rounded-full bg-primary/5 blur-[100px]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 250, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] -left-[10%] w-[60vw] md:w-[40vw] h-[60vw] md:h-[40vw] rounded-full bg-blue-200/20 blur-[100px]"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        {/* 1. Top Center Content */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center w-full max-w-4xl mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-100 text-primary font-medium text-sm mb-6 sm:mb-8 mx-auto">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Accepting New Patients
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.25] sm:leading-[1.1] mb-6 tracking-tight px-4 sm:px-0">
            New Life Hospital – <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 relative inline-block mt-1 sm:mt-0">
              Trusted Healthcare You Deserve
              <svg
                className="absolute w-full h-[6px] sm:h-3 -bottom-1 sm:-bottom-2 left-0 text-primary/20"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="transparent"
                />
              </svg>
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto px-6 sm:px-0">
            Consult{" "}
            <strong className="font-bold text-gray-900">{DOCTOR_NAME}</strong>{" "}
            for expert diabetes and general care.
          </p>
        </motion.div>

        {/* 2 & 3. Center Visual Section & Floating Cards */}
        <div className="relative w-full max-w-sm sm:max-w-md mx-auto mb-12 sm:mb-20 h-[300px] sm:h-[400px] flex justify-center items-center">
          {/* Main Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="w-56 h-56 sm:w-80 sm:h-80 rounded-full relative z-10"
          >
            {/* Soft border layers */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-blue-200/40 p-1 sm:p-1.5">
              <div className="w-full h-full rounded-full overflow-hidden bg-white shadow-xl relative">
                <img
                  src={DOCTOR_IMAGE}
                  alt={DOCTOR_NAME}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                  fetchPriority="high"
                  loading="eager"
                  decoding="sync"
                  width="320"
                  height="320"
                />
              </div>
            </div>

            {/* Outer soft glow */}
            <div className="absolute -inset-6 rounded-full bg-primary/5 blur-2xl z-[-1]" />
          </motion.div>

          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0,
            }}
            className="absolute top-0 md:top-4 right-0 sm:-right-8 bg-white/95 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 flex items-center gap-2 sm:gap-3 z-20"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 shrink-0">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            </div>
            <div className="whitespace-nowrap pr-1 sm:pr-2">
              <p className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                10,000+
              </p>
              <p className="text-[10px] sm:text-xs text-gray-500 font-medium">
                Patients Treated
              </p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 7.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-6 sm:bottom-10 -left-2 sm:-left-12 bg-white/95 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 flex items-center gap-2 sm:gap-3 z-20"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-full flex items-center justify-center text-primary shrink-0">
              <Award className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="whitespace-nowrap pr-1 sm:pr-2">
              <p className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                17+ Years
              </p>
              <p className="text-[10px] sm:text-xs text-gray-500 font-medium">
                Experience
              </p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute -bottom-4 sm:-bottom-8 right-6 sm:right-0 bg-white/95 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 flex items-center gap-2 sm:gap-3 z-20"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
              <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="whitespace-nowrap pr-1 sm:pr-2">
              <p className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                Diabetes
              </p>
              <p className="text-[10px] sm:text-xs text-gray-500 font-medium">
                Specialist
              </p>
            </div>
          </motion.div>
        </div>

        {/* 4. Call-To-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center w-full max-w-lg mx-auto z-10 px-4 sm:px-0"
        >
          <a
            href="/#book"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 md:px-10 py-3.5 md:py-4 rounded-2xl md:rounded-full font-bold transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 flex-shrink-0" />
            <span>Book via WhatsApp</span>
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white text-gray-900 border border-gray-200 hover:border-primary/30 hover:bg-gray-50 px-8 md:px-10 py-3.5 md:py-4 rounded-2xl md:rounded-full font-bold transition-all duration-300 shadow-sm hover:shadow hover:-translate-y-0.5"
          >
            <PhoneCall className="w-5 h-5 text-primary flex-shrink-0" />
            <span>Call Now</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const DoctorProfile = () => {
  return (
    <section id="profile" className="py-12 md:py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-background rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8 items-center border border-gray-100 shadow-sm"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-full overflow-hidden shadow-md">
            <img
              src={DOCTOR_IMAGE}
              alt={DOCTOR_NAME}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-md mb-2 md:mb-3">
              M.D (Medicine) Consultant Physician, Diabetologist & Metabolic Disease Specialist.
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {DOCTOR_NAME}
            </h2>
            <p className="text-gray-500 mb-4 font-medium flex items-center justify-center md:justify-start gap-2">
              <MapPin size={16} /> New Life Hospital
            </p>
            <div className="text-gray-600 leading-relaxed mb-6 space-y-4 text-sm md:text-base text-left">
              <p className="font-semibold text-gray-900">
                Consultant Physician, Diabetologist & Metabolic Disease Specialist, Psychosomatic Disease Expert
              </p>
              <p>
                MD (Internist), PG Diploma in Advanced Diabetes Care (UK), Obesity Specialist (SCOPE Certified), FDI (Fellowship of Diabetes India) with 17+ years of clinical excellence in acute and chronic disease management.
              </p>

            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 text-accent" /> Expert
                Diagnosis
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 text-accent" /> Modern
                Treatments
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AchievementsSection = () => {
  // Staggered animation variants
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15 },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs md:text-sm font-bold text-primary tracking-widest uppercase mb-2">
              Awards & Recognitions
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Achievements & Recognitions
            </h3>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed">
              Celebrating milestones in excellence and patient care
            </p>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col gap-12 md:gap-16 items-center"
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Featured Certificate */}
          <motion.div variants={itemVars} className="w-full max-w-4xl mx-auto">
            <div className="group bg-white p-4 sm:p-6 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={FEATURED_CERTIFICATE.image}
                  alt={FEATURED_CERTIFICATE.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              <div className="mt-6 text-center pb-2">
                <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                  {FEATURED_CERTIFICATE.title}
                </h4>
                <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full opacity-50" />
              </div>
            </div>
          </motion.div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            {ACHIEVEMENTS.map((achievement) => (
              <motion.div
                key={achievement.id}
                variants={itemVars}
                className="group bg-white rounded-2xl p-4 shadow-sm border border-gray-100/80 transition-all duration-300 hover:shadow-md hover:-translate-y-1.5"
              >
                <div className="relative w-full aspect-[5/7] overflow-hidden rounded-xl mb-4 bg-gray-100">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="text-center px-2 pb-2">
                  <h5 className="font-semibold text-gray-800 leading-tight text-[15px] sm:text-base">
                    {achievement.title}
                  </h5>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  const servicesList = [
    {
      icon: <HeartPulse />,
      title: "Emergency Care",
      shortDesc: "Immediate and responsive medical attention for urgent health conditions.",
      description: "We provide 24/7 emergency medical support for urgent health conditions. Quick response and proper care ensure patient safety during critical situations."
    },
    {
      icon: <Activity />,
      title: "General Check-ups",
      shortDesc: "Comprehensive health evaluations to maintain and monitor your well-being.",
      description: "Regular health check-ups help detect problems early and keep your body in good condition. We provide complete evaluation and personalized health advice."
    },
    {
      icon: <TestTube />,
      title: "Laboratory Services",
      shortDesc: "Advanced diagnostic testing for accurate and timely medical results.",
      description: "Accurate and reliable lab testing for better diagnosis and treatment planning. All tests are conducted with proper standards to ensure precise results."
    },
    {
      icon: <CreditCard />,
      title: "Cashless Hospitalization",
      shortDesc: "Hassle-free admission processes with partnered insurance networks.",
      description: "Hassle-free cashless treatment facility with insurance support. We assist patients with smooth admission and claim process for stress-free experience."
    },
    {
      icon: <Syringe />,
      title: "Diabetes Treatment",
      shortDesc: "Expert diagnosis and personalized treatment plans for effective diabetes management.",
      description: "Complete diabetes care including sugar control, medication, diet planning, and lifestyle guidance to prevent complications and maintain long-term health."
    },
    {
      icon: <Scale />,
      title: "Obesity Management",
      shortDesc: "Structured weight management programs incorporating diet, exercise, and medical support.",
      description: "Personalized weight management plans with medical support, diet guidance, and lifestyle changes for safe and sustainable results."
    },
    {
      icon: <Activity />,
      title: "Psychosomatic Disease Treatment",
      shortDesc: "Expert care for the intersection of psychosomatic health and metabolic dysfunction.",
      description: "Treatment for health issues caused by stress, anxiety, and emotional factors. We focus on both mental and physical well-being using a holistic approach."
    },
    {
      icon: <HeartPulse />,
      title: "Metabolic Disease Treatment",
      shortDesc: "Pioneering preventative and therapeutic protocols for metabolic syndrome.",
      description: "Specialized care for metabolic conditions like diabetes, obesity, and hormonal imbalance. Early diagnosis and proper treatment help prevent serious complications."
    }
  ];

  return (
    <section
      id="services"
      className="py-12 md:py-20 bg-[#F8FAFC] overflow-hidden relative"
    >
      {/* Soft background glows to match premium style */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Detailed Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4 pb-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight">
            Our Medical Services
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-white/30 skew-x-[-20deg] animate-[float-subtle_2s_infinite]" />
          </div>
          <p className="text-sm md:text-lg text-gray-500 leading-relaxed">
            Comprehensive care tailored to your needs. Click on any service to learn more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: (index % 3) * 0.15,
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
              }}
              onClick={() => setSelectedService(service)}
              className="bg-white rounded-2xl md:rounded-[20px] p-5 md:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center group transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(79,140,255,0.15)] relative overflow-hidden cursor-pointer h-full"
            >
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/10 rounded-2xl md:rounded-[20px] transition-colors duration-500 pointer-events-none" />

              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F5F7FA] rounded-xl md:rounded-2xl flex items-center justify-center text-primary mb-4 md:mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white shadow-sm overflow-hidden relative shrink-0">
                {React.cloneElement(service.icon as React.ReactElement, {
                  className:
                    "w-6 h-6 md:w-8 md:h-8 relative z-10 transition-transform duration-500",
                  strokeWidth: 1.5,
                })}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h4>
              <p className="text-gray-500 leading-relaxed text-[13px] md:text-sm mb-4 md:mb-6 flex-1">
                {service.shortDesc}
              </p>
              
              <div className="mt-auto text-primary text-xs md:text-sm font-semibold flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                View Details <ChevronRight size={14} className="md:w-4 md:h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Modal Popup */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm"
          >
            <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedService(null)} />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0 }}
              className="bg-white rounded-2xl md:rounded-[2rem] p-6 md:p-8 max-w-lg w-full relative z-10 shadow-2xl border border-gray-100"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-400 hover:text-gray-900 transition-colors bg-gray-50 hover:bg-gray-100 p-2 rounded-full cursor-pointer"
              >
                <X size={20} />
              </button>
              
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center text-primary mb-4 md:mb-6 shadow-sm border border-primary/20 shrink-0">
                {React.cloneElement(selectedService.icon as React.ReactElement, {
                  className: "w-6 h-6 md:w-8 md:h-8",
                  strokeWidth: 1.5,
                })}
              </div>
              
              <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-3 md:mb-4">{selectedService.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6 md:mb-8 text-base md:text-lg">
                {selectedService.description}
              </p>
              
              <a 
                href="/#book" 
                onClick={() => setSelectedService(null)}
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 md:py-4 px-6 rounded-lg md:rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-primary/30 flex items-center justify-center gap-2 text-base md:text-lg"
              >
                <CalendarClock size={18} className="md:w-5 md:h-5" />
                Book Consultation
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const LocationSection = () => {
  return (
    <section id="location" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <MapPin className="w-4 h-4" />
            Visit Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Our Location
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find us easily in Surat, Gujarat. We are centrally located to serve
            you better.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100"
        >
          {/* Left: Map */}
          <div className="w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-inner order-1 lg:order-1 relative bg-gray-100">
            <iframe
              title="Hospital Location"
              src="https://maps.google.com/maps?q=New%20Life%20hospital,%204th%20floor,%20Royal%20Arcade,%20opp.%20Sarthana%20Nature%20Park,%20Surat&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>

          {/* Right: Address */}
          <div className="flex flex-col justify-center order-2 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              New Life Hospital
            </h3>

            <div className="flex items-start gap-4 mb-8 sm:mb-10 p-4 sm:p-6 bg-gray-50 rounded-2xl">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                4th floor, Royal Arcade, 428-431,
                <br />
                Opp. Sarthana Nature Park, Marutidham Society,
                <br />
                Sarthana Jakat Naka, Varachha,
                <br />
                Surat, Gujarat 395013
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=New+Life+Hospital,4th+floor,Royal+Arcade,428-431,Opp.+Sarthana+Nature+Park,Varachha,Surat,Gujarat+395013"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-md shadow-green-500/20 hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-1 w-full sm:w-fit text-lg"
            >
              <Navigation className="w-5 h-5 flex-shrink-0" />
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.date || !formData.time) {
      alert("Please fill in all the details to book your appointment.");
      return;
    }

    const timeString = formData.time;
    const [hours, minutes] = timeString.split(":").map(Number);
    if (hours < 11 || hours >= 18 && minutes > 0) {
      alert("Please select a time between 11:00 AM and 6:00 PM.");
      return;
    }

    const text = `Hello Doctor,

I would like to book an appointment.

Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
Date: ${formData.date}
Time: ${formData.time}
Preferred Appointment Time: 11 AM – 6 PM (Non-Emergency)

Kindly confirm my appointment.

Thank you.`;

    window.open(WA_LINK(text), "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="book" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
            <svg
              className="absolute -top-24 -right-24 w-96 h-96 text-white opacity-10 blur-3xl transform rotate-45"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.7,-18,97.2,-2.4C97.6,13.2,92.5,28.8,83.4,42C74.3,55.2,61.2,66,46.6,74.5C32,83,16,89.1,0.5,88.3C-15,87.6,-30,80,-44.6,71.6C-59.2,63.2,-73.4,54,-82.1,40.8C-90.8,27.6,-94,10.4,-92,-5.7C-89.9,-21.8,-82.6,-36.8,-71.8,-48.6C-61.1,-60.4,-46.9,-69,-32.4,-75.4C-17.9,-81.8,-3.1,-86,11.3,-82.9C25.7,-79.8,30.6,-83.6,44.7,-76.4Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          <div className="grid lg:grid-cols-2 relative z-10">
            <div className="p-8 md:p-10 lg:p-16 text-white flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                Book Your Visit Today
              </h3>
              <p className="text-primary-100 text-base md:text-lg mb-8 text-white/80">
                Skip the waiting room. Reserve your preferred slot online and we
                will confirm instantly via WhatsApp.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Clinic Timings</h4>
                    <p className="text-white/90 text-sm mt-1">
                      By Appointment Only: <strong className="font-semibold text-white">11:00 AM – 6:00 PM</strong>
                    </p>
                    <p className="text-[#39ff14] text-sm font-bold tracking-wide drop-shadow-[0_0_8px_rgba(57,255,20,0.8)] mt-0.5">
                      Available 24/7 for Emergency Cases
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Emergency Contact</h4>
                    <p className="text-white/70">{DISPLAY_PHONE}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-6 lg:p-12">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                  Appointment Details
                </h4>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700">
                      Full Name
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      name="name"
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-background/50 placeholder:text-gray-400"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      required
                      type="tel"
                      name="phone"
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-background/50 placeholder:text-gray-400"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="date" className="text-sm font-semibold text-gray-700">
                        Date
                      </label>
                      <input
                        id="date"
                        required
                        type="date"
                        name="date"
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-background/50 min-h-[50px]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="time" className="text-sm font-semibold text-gray-700">
                        Time (11:00 AM - 6:00 PM)
                      </label>
                      <input
                        id="time"
                        type="time"
                        required
                        name="time"
                        min="11:00"
                        max="18:00"
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-background/50 min-h-[50px]"
                      />
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 mt-4 transition-colors"
                  >
                    Confirm via WhatsApp
                    <ChevronRight size={18} />
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutPage = () => {
  useEffect(() => {
    document.title =
      "About Dr. Shilpa Sutariya | Best Diabetes Specialist in Surat";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn about Dr. Shilpa Sutariya, MD (Medicine), a trusted Consultant Physician & best Diabetes Doctor specializing in diabetes care and heart health in Surat.",
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Learn about Dr. Shilpa Sutariya, MD (Medicine), a trusted Consultant Physician & best Diabetes Doctor specializing in diabetes care and heart health in Surat.";
      document.head.appendChild(meta);
    }
  }, []);

  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-gray-50/30">
      {/* 1. Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              <Stethoscope size={16} />
              <span>Consultant Physician & Diabetes Specialist</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-12">
              About Dr. Shilpa Sutariya –{" "}
              <span className="text-primary">Trusted Diabetes Specialist</span>
            </h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto"
            >
              {/* Image in circle */}
              <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white bg-gray-100 relative z-10">
                <img
                  src={DOCTOR_IMAGE}
                  alt="Dr. Shilpa Sutariya - Diabetes Doctor"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Left Tag: 5000+ Patients Treated */}
              <div className="absolute top-1/2 -left-12 sm:-left-32 -translate-y-1/2 bg-white p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-float border border-gray-100 z-20">
                <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center shrink-0">
                  <Heart size={20} />
                </div>
                <div className="text-left hidden sm:block">
                  <p className="font-extrabold text-lg text-gray-900">10,000+</p>
                  <p className="text-xs text-gray-500 font-medium whitespace-nowrap">
                    Patients Treated
                  </p>
                </div>
              </div>

              {/* Right Tag: 15+ Years Experience */}
              <div className="absolute top-3/4 -right-8 sm:-right-24 -translate-y-1/2 bg-white p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-float delay-150 border border-gray-100 z-20">
                <div className="w-10 h-10 bg-blue-50 text-primary rounded-full flex items-center justify-center shrink-0">
                  <Award size={20} />
                </div>
                <div className="text-left hidden sm:block">
                  <p className="font-extrabold text-lg text-gray-900">
                    17+ Years
                  </p>
                  <p className="text-xs text-gray-500 font-medium whitespace-nowrap">
                    Experience
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Introduction & 4. Experience & Expertise */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={containerVars}
            >
              <motion.h2
                variants={itemVars}
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6"
              >
                Compassionate Care & <br className="hidden sm:block" /> Clinical
                Excellence
              </motion.h2>
              <motion.div
                variants={itemVars}
                className="text-gray-600 mb-8 leading-relaxed"
              >
                <p className="mb-4 font-medium text-gray-800">
                  Consultant Physician, Diabetologist & Metabolic Disease Specialist, Psychosomatic Disease Expert<br/>
                  MD (Internist), PG Diploma in Advanced Diabetes Care (UK), Obesity Specialist (SCOPE Certified), FDI (Fellowship of Diabetes India) with 20+ years of clinical excellence in acute and chronic disease management.
                </p>
                <ul className="space-y-2 list-disc pl-5 text-gray-600">
                  <li>Expert in the metabolic syndrome continuum, including Diabetes, MASLD, and Obesity.</li>
                  <li>Specialized in the intersection of psychosomatic health and metabolic dysfunction.</li>
                  <li>Proven track record in clinical intervention for complex dyslipidemia and hypertension.</li>
                  <li>Currently dedicated to pioneering preventative metabolic protocols for teenagers and young adults.</li>
                  <li>Managing psychosomatic and lifestyle diseases using a holistic approach to reduce or reverse disease dependency on medications.</li>
                </ul>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Activity,
                    title: "Diabetes Management",
                    desc: "Expert care for Type 1, Type 2, & Gestational Diabetes",
                  },
                  {
                    icon: HeartPulse,
                    title: "Heart Health",
                    desc: "Hypertension and cardiovascular risk prevention",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Preventive Care",
                    desc: "Comprehensive full body checkups and wellness",
                  },
                  {
                    icon: Stethoscope,
                    title: "General Medicine",
                    desc: "Accurate diagnosis for complex medical conditions",
                  },
                ].map((area, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVars}
                    className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 transition-all hover:shadow-md hover:-translate-y-1"
                  >
                    <div className="bg-blue-50 text-primary p-2.5 rounded-xl shrink-0">
                      <area.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">
                        {area.title}
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {area.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 3. Qualifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg border border-gray-100 lg:sticky lg:top-24"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Award size={20} />
                </span>
                Qualifications & Certifications
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "MD (Medicine)",
                    sub: "Specialized in Internal Medicine",
                  },
                  {
                    title: "Fellowship of Diabetes India",
                    sub: "Advanced Diabetes Care",
                  },
                  { title: "PGCDM", sub: "At Indore by Dr Sunil Jain" },
                  { title: "CCEDM", sub: "At Chennai by Dr V Mohan" },
                  {
                    title: "Post Graduate Diploma",
                    sub: "Royal College of Physicians (UK)",
                  },
                ].map((qual, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="relative flex flex-col items-center">
                      <div className="w-3.5 h-3.5 rounded-full bg-primary/30 border-2 border-primary z-10 group-hover:scale-125 transition-transform duration-300" />
                      {idx !== 4 && (
                        <div className="w-0.5 h-full bg-gray-100 absolute top-3" />
                      )}
                    </div>
                    <div className="pb-6 w-full">
                      <h4 className="font-bold text-gray-900 text-base group-hover:text-primary transition-colors">
                        {qual.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">{qual.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose & 7. Patient-Centered Approach */}
      <section className="py-16 md:py-24 bg-primary text-white overflow-hidden relative">
        {/* Abstract Background patterns */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-32" />
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={containerVars}
            >
              <motion.h2
                variants={itemVars}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                A Patient-Centered Approach
              </motion.h2>
              <motion.p
                variants={itemVars}
                className="text-blue-100 text-lg mb-8 leading-relaxed"
              >
                We believe that trust and strong doctor-patient communication
                are the foundation of effective healing. Dr. Shilpa Sutariya
                takes the time to listen, understand, and address every concern
                carefully.
              </motion.p>

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                {[
                  "Personalized treatment plans",
                  "Modern medical approach",
                  "Patient-focused care",
                  "Accurate diagnosis",
                ].map((point, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVars}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      className="text-blue-300 shrink-0"
                      size={20}
                    />
                    <span className="font-medium text-blue-50">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white text-gray-900 p-8 sm:p-10 rounded-3xl shadow-2xl relative"
            >
              <Quote className="text-primary/10 absolute top-6 right-6 w-16 h-16" />
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <p className="text-gray-600 mb-8 leading-relaxed relative z-10">
                Finding the right Diabetes Specialist in your city means finding
                someone who treats you as an individual, not just a condition.
                With years of recognized medical excellence, we aim to reverse
                risks and promote lifelong wellness.
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 bg-gray-100 rounded-full overflow-hidden shrink-0 border border-gray-200">
                  <img
                    src={DOCTOR_IMAGE}
                    alt="Dr. Shilpa Sutariya"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    Dr. Shilpa Sutariya
                  </h4>
                  <p className="text-sm text-gray-500">
                    Your Trusted Partner in Health
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. Call-To-Action */}
      <section className="py-16 md:py-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Take the first step towards better health today
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule your consultation with Dr. Shilpa Sutariya to discuss
              your health goals and receive a specialized care plan tailored
              just for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/#book"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg"
              >
                <CalendarClock size={20} />
                Book Appointment
              </Link>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-gray-800 border-[1.5px] border-gray-200 hover:border-primary hover:text-primary px-8 py-4 rounded-xl font-bold transition-all text-lg"
              >
                <PhoneCall size={20} />
                Call Clinic
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const ReviewCard: React.FC<{ review: any }> = ({ review }) => (
  <div className="w-[280px] sm:w-[350px] md:w-[400px] flex-shrink-0 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col whitespace-normal">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
        {review.author.charAt(0)}
      </div>
      <div>
        <span className="font-bold text-gray-900 block">
          {review.author}
        </span>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[...Array(review.rating)].map((_, j) => (
              <Star
                key={j}
                className="w-3 h-3 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          {review.date && (
            <span className="text-gray-500 text-sm">{review.date}</span>
          )}
        </div>
      </div>
      <div className="ml-auto">
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
      </div>
    </div>
    <p className="text-gray-600 leading-relaxed text-sm flex-grow">
      "{review.text}"
    </p>
  </div>
);

const Testimonials = () => {
  const reviews1 = [
    { text: "My wife had her IUD procedure done at Newlife Hospital, and our experience was excellent. The process was quick, smooth, and very comfortable. The doctor was highly professional and explained everything clearly, which really helped us feel at ease. The staff were incredibly supportive, kind, and attentive throughout the entire visit.", author: "Ricky Patel", rating: 5, date: "a month ago" },
    { text: "My experience at New Life Hospital was excellent. Dr. Shilpa Sutariya is highly professional, caring, and truly dedicated to patient well-being. She listens carefully and provides clear and helpful guidance, which builds great trust and confidence.", author: "Bhautik Malaviya", rating: 5, date: "2 months ago" },
    { text: "Best work And best Hospital staff Must visit", author: "Satish Vaghasiya", rating: 5, date: "2 months ago" },
    { text: "Excellent service-caring doctors and supportive staff", author: "HARESH KANJARIYA", rating: 5, date: "2 months ago" },
    { text: "It's a very good hospital. And the doctor here gives very good treatment.", author: "Prashant Singh", rating: 5, date: "4 months ago" },
    { text: "Dr Shilpa ma'am is so good nature. So good in cardio-diabeto. Staff is also so helpful and kind. Nice infrastructure and facilities.", author: "ankit vaghani", rating: 5, date: "3 years ago" },
  ];

  const reviews2 = [
    { text: "I would like to express my heartfelt gratitude to Dr. Mayur Kevadiya and the entire hospital staff for the exceptional care they provided during my wife's emergency pregnancy admission.", author: "Bhavin Patel", rating: 5, date: "a year ago" },
    { text: "Very good experience for treatment, hospital cleanness good, staff behaviour and service also very nice.", author: "Yogesh Ahir", rating: 5, date: "3 years ago" },
    { text: "I recently had the pleasure of being treated by Dr. Shilpa B. Sutariya at the hospital, and I must say it was a wonderful experience. The hospital was impeccably clean, and the staff was courteous and helpful.", author: "Uday Devani", rating: 5, date: "2 years ago" },
    { text: "Dr. Shilpa mam did a great job with my first ever exam. Also she is lovely to speak with at every appointment. She was also kind and friendly. Great medical office wonderful and warm experience.", author: "Kinjal Chhayani", rating: 5, date: "3 years ago" },
    { text: "Very much potential hospital and staff was also very supportive…", author: "Prashant Rajput", rating: 5, date: "3 years ago" },
    { text: "Ms. Shilpa Sutariya (MD) and all the staff are doing good service and good behavior to the patient. Their experience is very good and accurate.", author: "Pritesh Desai", rating: 5, date: "7 years ago" },
  ];

  const reviews3 = [
    { text: "Very consciously treat patients even staff behaviour is also good.", author: "Mukesh Vaja", rating: 5, date: "a year ago" },
    { text: "Dr. Shilpa mam did a great job with my first ever exam. Also she is lovely to speak with at every appointment. She was also kind and friendly.", author: "Asis Singh", rating: 5, date: "3 years ago" },
    { text: "One of the best Dr in varachha with good and humble nature must visit if you have any medical condition. Hospital is very clean and very positive atmosphere.", author: "Kathiriya Jignesh", rating: 5, date: "3 years ago" },
    { text: "Good doctor and hospital very clean good staff service", author: "bipin sojitara", rating: 5, date: "3 years ago" },
    { text: "This hospital provides all facilities for mankind and all staff are well behaviour and I work with Dr. Shilpa Sutariya, she is very good doctor and treat her patient like their own family member...", author: "Mansi Kayada", rating: 5, date: "6 years ago" },
    { text: "Very good hospital staff and doctor", author: "Vipul Italiya", rating: 5, date: "a year ago" },
  ];

  const reviews4 = [
    { text: "This place is well organized & well behavior of all staff. Shilpa mam is well known experienced Physician in Surat. I will recommend this hospital in any kind of emergency.", author: "HemantKumar Shah", rating: 5, date: "3 years ago" },
    { text: "The service that I recieved from new life hospital is very excellent and the Drs. And staff are friendly and good management.", author: "Priyansi Shiroya", rating: 5, date: "2 years ago" },
    { text: "I and my family personally satisfied with the hospital or Dr.shilpa sutariya good behavior and nice caring and friendly staff", author: "Rushali Mangukiya", rating: 5, date: "3 years ago" },
    { text: "Very good hospital for diabitic and blood pressure patient and staff are also supportive and behaviour are also very nice,go there.", author: "Bhavanbhai Bavishi", rating: 5, date: "3 years ago" },
    { text: "Very Good", author: "Akshay khunt", rating: 5, date: "4 months ago" },
    { text: "Shilpa madam is wonderful work.. Blood pressure and sugar too high after 4 month total good.. Thank u madam..", author: "Sandip Desai", rating: 5, date: "3 years ago" },
  ];

  return (
    <section
      id="reviews"
      className="py-16 md:py-24 bg-background overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between mb-12 md:mb-16">
          <div className="text-center md:text-left">
            <h2 className="text-xs md:text-sm font-bold text-primary tracking-widest uppercase mb-2">
              Google Reviews
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              What Our Patients Say
            </h3>
            <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3">
              <strong className="text-xl md:text-2xl text-gray-900">4.9</strong>
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-gray-500 font-medium hover:underline cursor-pointer transition-all">
                (450 reviews)
              </span>
            </div>
          </div>
          <a
            href="https://www.google.com/search?q=New+Life+Hospital"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all border border-gray-100"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Write a review
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-6 whitespace-nowrap mask-image-linear-edges pb-10 overflow-hidden">
        {/* Row 1 */}
        <div
          className="flex gap-6 px-3 animate-scroll-left w-max"
          style={{ "--scroll-duration": "100s" } as React.CSSProperties}
        >
          {/* Double the items for infinite seamless scroll */}
          {[...reviews1, ...reviews1, ...reviews1].map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>

        {/* Row 2 */}
        <div
          className="flex gap-6 px-3 animate-scroll-right w-max ml-[-20%]"
          style={{ "--scroll-duration": "110s" } as React.CSSProperties}
        >
          {[...reviews2, ...reviews2, ...reviews2].map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>

        {/* Row 3 */}
        <div
          className="flex gap-6 px-3 animate-scroll-left w-max ml-[-10%]"
          style={{ "--scroll-duration": "105s" } as React.CSSProperties}
        >
          {[...reviews3, ...reviews3, ...reviews3].map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>

        {/* Row 4 */}
        <div
          className="flex gap-6 px-3 animate-scroll-right w-max ml-[-30%]"
          style={{ "--scroll-duration": "115s" } as React.CSSProperties}
        >
          {[...reviews4, ...reviews4, ...reviews4].map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 md:pt-20 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-12 md:mb-16 border-b border-white/10 pb-12 md:pb-16">
          <div>
            <div className="flex items-center gap-3 mb-4 md:mb-6 -ml-2">
              <img src="/logo.png" alt="New Life Hospital Logo" className="h-10 md:h-12 w-auto bg-white rounded-lg p-1 shadow-sm object-contain" />
              <span className="font-semibold text-lg md:text-xl tracking-tight">
                New Life{" "}
                <span className="text-primary hidden sm:inline">Hospital</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
              Providing premium, patient-centered healthcare services with a
              focus on holistic well-being and modern medical practices.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Profile", href: "/#profile" },
                { name: "Services", href: "/services" },
                { name: "Reviews", href: "/reviews" },
                { name: "Book Appointment", href: "/#book" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Contact Info</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="leading-tight">
                  4th floor, Royal Arcade, 428-431, opp. Sarthana Nature Park,
                  Marutidham Society, Sarthana Jakat Naka, Mani Nagar Society,
                  Surat, Gujarat 395006
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-primary shrink-0" />
                <span>{DISPLAY_PHONE}</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-accent shrink-0" />
                <span>WhatsApp Available</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {DOCTOR_NAME} Clinic. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const HEALTH_QUESTIONS = [
  "Do you feel tired even after taking proper rest?",
  "Is it difficult for you to control your weight?",
  "Do you often feel stressed or worried?",
  "Do you feel heaviness or discomfort after eating food?",
  "Do you feel like eating sweets or junk food frequently?",
  "Do you have trouble sleeping properly at night?",
  "Do you find it hard to focus or concentrate?",
  "Do you do very little physical activity during the day?",
  "Do you get tired quickly while doing simple work?",
  "Do you often have headaches or body pain?",
];

const HealthCheck = () => {
  const [step, setStep] = useState<"intro" | "quiz" | "result">("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  const handleStart = () => {
    setFade(false);
    setTimeout(() => {
      setStep("quiz");
      setCurrentQuestion(0);
      setScore(0);
      setFade(true);
    }, 300);
  };

  const handleAnswer = (value: number) => {
    setFade(false);
    setTimeout(() => {
      setScore(score + value);
      if (currentQuestion < HEALTH_QUESTIONS.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setFade(true);
      } else {
        setStep("result");
        setFade(true);
      }
    }, 300);
  };

  const getResult = () => {
    if (score >= 80) return { 
      title: "Excellent Health", 
      message: "Your health condition is very good. Keep maintaining your lifestyle.",
      color: "text-green-600", bg: "bg-green-50" 
    };
    if (score >= 60) return { 
      title: "Good Health", 
      message: "Your health is stable, but small improvements can help.",
      color: "text-blue-600", bg: "bg-blue-50" 
    };
    if (score >= 40) return { 
      title: "Moderate Risk", 
      message: "There are some warning signs. Consider consulting a doctor.",
      color: "text-yellow-600", bg: "bg-yellow-50" 
    };
    return { 
      title: "Needs Attention", 
      message: "Your health needs immediate attention. Consultation is recommended.",
      color: "text-red-600", bg: "bg-red-50" 
    };
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 min-h-[80vh] flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto px-4 sm:px-6">
        <div className={`bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 sm:p-12 transition-opacity duration-300 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}>
          
          {step === "intro" && (
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Activity size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Check Your Health in 1 Minute</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg mx-auto">
                Answer a few simple questions to understand your current health condition. This is not a diagnosis.
              </p>
              <button
                onClick={handleStart}
                className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-full transition-transform duration-200 hover:scale-105 shadow-lg shadow-primary/30"
              >
                Start Assessment
              </button>
            </div>
          )}

          {step === "quiz" && (
            <div>
              <div className="flex justify-between text-sm font-semibold text-gray-500 mb-4">
                <span>Question {currentQuestion + 1} of 10</span>
                <span>{Math.round(((currentQuestion) / 10) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5 mb-8 overflow-hidden">
                <div 
                  className="bg-primary h-2.5 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${((currentQuestion) / 10) * 100}%` }}
                ></div>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 min-h-[80px]">
                {HEALTH_QUESTIONS[currentQuestion]}
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {[
                  { label: "Never", value: 10 },
                  { label: "Sometimes", value: 7 },
                  { label: "Often", value: 5 },
                  { label: "Always", value: 3 },
                ].map((option) => (
                  <button
                    key={option.label}
                    onClick={() => handleAnswer(option.value)}
                    className="w-full text-left px-6 py-4 rounded-xl border border-gray-200 font-medium text-gray-700 hover:border-primary hover:bg-primary/5 hover:text-primary transition-all duration-200 hover:scale-[1.02] shadow-sm"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === "result" && (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Health Insight</h2>
              <div className="inline-block px-6 py-2 rounded-full bg-gray-100 text-gray-700 font-semibold mb-8">
                Your Score: {score} / 100
              </div>
              
              <div className={`p-8 rounded-2xl ${getResult().bg} mb-8`}>
                <h3 className={`text-3xl font-extrabold ${getResult().color} mb-3`}>
                  {getResult().title}
                </h3>
                <p className="text-gray-700 font-medium max-w-md mx-auto mb-6">
                  {getResult().message}
                </p>
                <p className="text-gray-500 max-w-md mx-auto text-sm">
                  This is not a medical diagnosis. Please consult a doctor for proper evaluation.
                </p>
              </div>

              <a
                href="/#book"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-full transition-transform duration-200 hover:scale-105 shadow-lg shadow-primary/30"
              >
                <CalendarClock size={20} />
                Book My Consultation
              </a>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
const TreatmentPhilosophy = () => {
  return (
    <div className="bg-gray-50/50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
              Our Treatment Philosophy
            </h1>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-xl md:text-2xl text-primary font-medium tracking-wide">
              Root Cause Healing. Personalized Care. Long-Term Health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] border border-gray-100"
          >
            <div className="prose prose-lg md:prose-xl text-gray-600 leading-relaxed space-y-6">
              <p>
                At <span className="font-semibold text-gray-900">New Life Hospital</span>, our goal is not just to treat symptoms, but to address the root cause of the disease. We believe in long-term healing rather than temporary relief.
              </p>
              <p>
                Under the expert care of <span className="font-semibold text-gray-900">Dr. Shilpa Sutariya</span> — Consultant Physician, Diabetologist & Metabolic Disease Specialist, Psychosomatic Disease Expert — with 17+ years of clinical experience, every patient is treated with a deep understanding of their overall health.
              </p>
              <p>
                We focus on evaluating the complete health profile of each patient, including physical condition, stress levels, emotional well-being, lifestyle habits, and metabolic balance.
              </p>

              <ul className="space-y-4 my-8 list-none pl-0">
                <li className="flex gap-3 text-lg md:text-xl text-gray-700">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span><strong className="text-gray-900 font-semibold">Root Cause Treatment</strong> — Targeting the origin, not just the symptoms.</span>
                </li>
                <li className="flex gap-3 text-lg md:text-xl text-gray-700">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span><strong className="text-gray-900 font-semibold">17+ Years Clinical Experience</strong> — Trusted, evidence-based medical care.</span>
                </li>
                <li className="flex gap-3 text-lg md:text-xl text-gray-700">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span><strong className="text-gray-900 font-semibold">Personalized Health Assessment</strong> — Every body is different, and so is our treatment.</span>
                </li>
                <li className="flex gap-3 text-lg md:text-xl text-gray-700">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span><strong className="text-gray-900 font-semibold">Minimal & Necessary Medication</strong> — Focus on reducing long-term medicine dependency.</span>
                </li>
                <li className="flex gap-3 text-lg md:text-xl text-gray-700">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span><strong className="text-gray-900 font-semibold">Holistic & Preventive Approach</strong> — Integrating mind, body, and lifestyle for sustained recovery.</span>
                </li>
              </ul>

              <div className="bg-primary/5 p-6 md:p-8 rounded-2xl border border-primary/10 my-8 shadow-sm">
                <p className="text-gray-800 italic font-medium m-0 text-xl leading-relaxed">
                  "Instead of prescribing unnecessary medications, every treatment plan is carefully designed based on a detailed assessment of the patient’s condition."
                </p>
              </div>
              <p>
                Our approach integrates modern medical science with a holistic understanding of the body, helping patients achieve sustainable and long-term health improvements.
              </p>
              <p className="font-medium text-primary">
                We strongly believe in minimizing medicine dependency wherever possible and guiding patients towards natural recovery and lifestyle correction.
              </p>
            </div>
          </motion.div>

          {/* Section: What Makes Us Different */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] border border-gray-100 mt-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              What Makes New Life Hospital Different
            </h2>
            <div className="prose prose-lg md:prose-xl text-gray-600 leading-relaxed">
              <p>
                At New Life Hospital, we go beyond traditional treatment methods. Our approach is focused on understanding the complete health condition of every patient rather than just treating visible symptoms.
              </p>
              <ul className="space-y-3 my-6 list-none pl-0">
                {[
                  "We focus on root cause treatment, not temporary relief",
                  "Every patient gets a personalized treatment plan",
                  "We combine modern medicine with holistic care",
                  "Strong emphasis on lifestyle correction and prevention",
                  "Treatment decisions are based on deep patient evaluation, not assumptions",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-lg md:text-xl text-gray-700">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Section: Our Community */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] border border-gray-100 mt-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Our Community
            </h2>
            <div className="prose prose-lg md:prose-xl text-gray-600 leading-relaxed">
              <p>
                We believe healthcare is not just about treatment, but about building a healthier community. Our goal is to guide and support patients in their long-term health journey.
              </p>
              <ul className="space-y-3 my-6 list-none pl-0">
                {[
                  "Educating patients about healthy lifestyle choices",
                  "Promoting awareness about diabetes, obesity, and metabolic diseases",
                  "Encouraging preventive healthcare practices",
                  "Supporting patients in achieving long-term wellness",
                  "Building a trust-based doctor-patient relationship",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-lg md:text-xl text-gray-700">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Section: Our Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] border border-gray-100 mt-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <div className="prose prose-lg md:prose-xl text-gray-600 leading-relaxed">
              <p>
                Our core values define how we treat every patient and make every medical decision.
              </p>
              <ul className="space-y-3 my-6 list-none pl-0">
                {[
                  "Patient-first approach in every situation",
                  "Commitment to ethical and transparent treatment",
                  "Focus on minimal and necessary medication",
                  "Respect for patient’s lifestyle and mental well-being",
                  "Dedication to continuous improvement and learning",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-lg md:text-xl text-gray-700">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Section: Our Strength */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] border border-gray-100 mt-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Our Strength
            </h2>
            <div className="prose prose-lg md:prose-xl text-gray-600 leading-relaxed">
              <p>
                Our strength lies in experience, knowledge, and a unique approach to treatment.
              </p>
              <ul className="space-y-3 my-6 list-none pl-0">
                {[
                  "17+ years of clinical experience in treating complex conditions",
                  "Expertise in diabetes, metabolic, and psychosomatic diseases",
                  "Ability to manage both acute and chronic conditions effectively",
                  "Strong focus on holistic and long-term healing",
                  "Proven track record of improving patient health outcomes",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-lg md:text-xl text-gray-700">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Trust Building & CTA */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-12">
              Thousands of patients have benefited from our personalized and holistic treatment approach.
            </h2>
            <Link
              to="/#book"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_8px_25px_-5px_rgba(79,140,255,0.4)] text-lg"
            >
              <CalendarClock size={20} />
              Book Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      let attempts = 0;
      let scrollTimeout: NodeJS.Timeout;

      const tryScroll = () => {
        const element = document.getElementById(id);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: "smooth" });
        } else if (attempts < 20) {
          attempts++;
          scrollTimeout = setTimeout(tryScroll, 100);
        }
      };

      scrollTimeout = setTimeout(tryScroll, 100);
      return () => clearTimeout(scrollTimeout);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background font-sans flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <DoctorProfile />
                  <LocationSection />
                  <BookingSection />
                </>
              }
            />
            <Route
              path="/awards"
              element={
                <div className="pt-16 md:pt-20">
                  <AchievementsSection />
                </div>
              }
            />
            <Route
              path="/services"
              element={
                <div className="pt-16 md:pt-20">
                  <Services />
                </div>
              }
            />
            <Route
              path="/about"
              element={
                <div className="pt-16 md:pt-20">
                  <AboutPage />
                </div>
              }
            />
            <Route
              path="/reviews"
              element={
                <div className="pt-16 md:pt-20">
                  <Testimonials />
                </div>
              }
            />
            <Route
              path="/book"
              element={
                <div className="pt-16 md:pt-20">
                  <BookingSection />
                </div>
              }
            />
            <Route
              path="/health-check"
              element={
                <div className="pt-16 md:pt-20">
                  <HealthCheck />
                </div>
              }
            />
            <Route
              path="/treatment-philosophy"
              element={
                <div className="pt-16 md:pt-20">
                  <TreatmentPhilosophy />
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
