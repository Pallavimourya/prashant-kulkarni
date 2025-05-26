import React from 'react';
import { Info, User, Lock, RefreshCcw, Mail, ShieldCheck } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
        <div className="bg-[#FF9933] text-white px-6 py-6 rounded-t-xl flex items-center gap-3">
          <ShieldCheck size={32} />
          <h1 className="text-3xl font-bold tracking-wide">Privacy Policy</h1>
        </div>

        <div className="px-6 py-8 space-y-10 text-gray-800">

          {/* Section Template */}
          <section>
            <div className="border-l-4 pl-4 border-[#FF9933]">
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#000080]">
                <Info size={20} className="text-[#138808]" />
                Introduction
              </h2>
              <p>
                At Prashant Kulkarni's website, we take your privacy seriously. This policy explains how we collect, use, and protect your information. If you disagree with this policy, please do not use the site.
              </p>
            </div>
          </section>

          <section>
            <div className="border-l-4 pl-4 border-[#FFFFFF]">
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#000080]">
                <User size={20} className="text-[#FF9933]" />
                Information We Collect
              </h2>
              <p>We may collect:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>Personal Data:</strong> Name, email, phone number</li>
                <li><strong>Usage Data:</strong> Browsing actions on our site</li>
                <li><strong>Cookies:</strong> To improve user experience</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="border-l-4 pl-4 border-[#138808]">
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#000080]">
                <RefreshCcw size={20} className="text-[#FF9933]" />
                How We Use Your Information
              </h2>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Maintain and operate the site</li>
                <li>Improve and personalize user experience</li>
                <li>Respond to inquiries</li>
                <li>Send updates and offers</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="border-l-4 pl-4 border-[#FF9933]">
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#000080]">
                <Lock size={20} className="text-[#138808]" />
                Data Security
              </h2>
              <p>
                We implement robust security practices, but no system is impenetrable. Always use strong passwords and keep your information safe.
              </p>
            </div>
          </section>

          <section>
            <div className="border-l-4 pl-4 border-[#FFFFFF]">
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#000080]">
                <User size={20} className="text-[#138808]" />
                Your Rights
              </h2>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Access your data</li>
                <li>Correct inaccurate information</li>
                <li>Request data deletion</li>
                <li>Withdraw consent</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="border-l-4 pl-4 border-[#138808]">
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#000080]">
                <Mail size={20} className="text-[#FF9933]" />
                Contact Us
              </h2>
              <p>
                For questions or concerns regarding this policy, email us at:
                <br />
                <span className="font-semibold text-[#138808]">zuperprashant@gmail.com</span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
