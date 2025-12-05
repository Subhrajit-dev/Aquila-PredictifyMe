import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("quarterly"); // 'quarterly' | 'yearly'
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();

  const plans = [
    {
      name: "Basic Plan",
      level: "Lvl 1",
      price: billingCycle === "quarterly" ? "₹189" : "₹549",
      period: billingCycle === "quarterly" ? "/3 months" : "/yearly",
      description: "Essential tracking for self-awareness.",
      features: [
        "Daily prediction score (stress, focus, energy)",
        "Basic behavior tracking (screen time, sleep estimate, app usage)",
        "6-7 early-warning alerts per week",
        "Weekly trend summary",
        "Light improvement tips",
        "Basic customization (choose alert types)",
      ],
      highlight: false,
      color: "blue",
    },
    {
      name: "Pro Plan",
      level: "Lvl 2",
      price: billingCycle === "quarterly" ? "₹279" : "₹899",
      period: billingCycle === "quarterly" ? "/3 months" : "/yearly",
      description: "Deep insights & AI coaching for peak performance.",
      features: [
        "All Basic features lvl 1",
        "Unlimited early warnings (real-time)",
        "7–14 day future prediction timeline",
        "Deep insights (message rhythm, social withdrawal, app-switching)",
        "Personalized action plans (daily + weekly)",
        "Calendar overload warnings",
        "Mood-shift detection",
        "AI Coach Mode (chat-based guidance)",
        "Monthly health & productivity report",
      ],
      highlight: true,
      color: "purple",
      extra: "Mini games for discount option",
    },
  ];

  const handleGetStarted = (plan, isTrial = false) => {
    // Save subscription info to localStorage
    const subscriptionData = {
      plan: plan.name,
      price: isTrial ? '₹0' : plan.price,
      period: isTrial ? '/3 months (Free Trial)' : plan.period,
      billingCycle: isTrial ? 'trial' : billingCycle,
      isTrial: isTrial
    };

    localStorage.setItem('pendingSubscription', JSON.stringify(subscriptionData));

    if (isSignedIn) {
      // User is logged in, redirect to payment/confirmation
      // For now, we'll just navigate to dashboard
      navigate('/dashboard');
    } else {
      // User not logged in, redirect to sign in
      navigate('/signin');
    }
  };

  return (
    <section id="pricing" className="py-24 relative z-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold glow-text mb-6 font-orbitron pb-2"
          >
            Plans & Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Invest in your future self. Choose the level of insight you need.
          </motion.p>

          {/* Welcome Message for New Users */}
          {isSignedIn && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 p-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl max-w-2xl mx-auto"
            >
              <p className="text-purple-200 text-center text-sm sm:text-base">
                🎉 <strong>Welcome to PredictifyMe!</strong> Select a plan below to get started with your personalized predictions.
              </p>
            </motion.div>
          )}

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center mt-8 gap-4"
          >
            <span className={`text-sm font-medium transition-colors ${billingCycle === "quarterly" ? "text-white" : "text-gray-500"}`}>
              Quarterly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "quarterly" ? "yearly" : "quarterly")}
              className="w-14 h-8 bg-gray-800 rounded-full p-1 relative transition-colors duration-300 focus:outline-none border border-gray-700"
            >
              <motion.div
                className="w-6 h-6 rounded-full shadow-md bg-gradient-to-br from-purple-400 to-purple-600"
                animate={{
                  x: billingCycle === "quarterly" ? 0 : 24,
                  backgroundColor: billingCycle === "quarterly" ? "#9ca3af" : "#a855f7"
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm font-medium transition-colors ${billingCycle === "yearly" ? "text-white" : "text-gray-500"}`}>
              Yearly <span className="text-xs text-green-400 ml-1">(Save ~20%)</span>
            </span>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${plan.highlight
                ? "bg-purple-900/10 border-purple-500/50 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30"
                : "bg-gray-900/40 border-gray-800 hover:border-gray-700"
                }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <div className="text-sm font-bold tracking-wider text-gray-500 mb-2 uppercase">{plan.level}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-4 h-10">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={plan.price}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="text-4xl font-bold text-white"
                    >
                      {plan.price}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-gray-400 mb-1">{plan.period}</span>
                </div>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.05) }}
                    className="flex items-start gap-3 text-gray-300 text-sm"
                  >
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? "text-purple-400" : "text-blue-400"}`} />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {plan.extra && (
                <div className="mb-6 p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-yellow-400 shrink-0" />
                  <span className="text-sm text-gray-200 font-medium">{plan.extra}</span>
                </div>
              )}

              <button
                onClick={() => handleGetStarted(plan, false)}
                className={`w-full py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center ${plan.highlight
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-lg shadow-purple-600/25"
                  : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                  }`}
              >
                Get Started
              </button>

              {/* Free Trial Button - Only for Basic Plan on Quarterly */}
              {!plan.highlight && billingCycle === "quarterly" && (
                <div className="mt-4">
                  <button
                    onClick={() => handleGetStarted(plan, true)}
                    className="w-full py-3 rounded-xl font-bold transition-all duration-300 flex flex-col items-center justify-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-lg shadow-green-600/25"
                  >
                    <span>Try Free for 3 Months at ₹0</span>
                    <span className="text-xs font-normal mt-1 opacity-90">₹189/quarter afterwards</span>
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-2">
                    Cancel subscription anytime before the 3 months of free trial is over.
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
