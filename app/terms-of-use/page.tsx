import React from 'react';
import { Info, FileText, Lock, RefreshCcw, Mail, ShieldCheck } from 'lucide-react';

export default function TermsOfUse() {
  return (
    <div className="bg-white min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
        <div className="bg-[#FF9933] text-white px-6 py-6 rounded-t-xl flex items-center gap-3">
          <FileText size={32} />
          <h1 className="text-3xl font-bold tracking-wide">Terms of Use</h1>
        </div>

        <div className="px-6 py-8 space-y-10 text-gray-800">
          <section>
            <div className="border-l-4 pl-4 border-[#FF9933]">
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#000080]">
                <Info size={20} className="text-[#138808]" />
                Agreement to Terms
              </h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this site.
              </p>
            </div>
          </section>

          <section>
            <div className="border-l-4 pl-4 border-[#FFFFFF]">
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#000080]">
                <FileText size={20} className="text-[#FF9933]" />
                Use License
              </h2>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Prashant Kulkarni's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or proprietary notations</li>
                <li>Transfer the materials or "mirror" them on another server</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="border-l-4 pl-4 border-[#138808]">
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#000080]">
                <Lock size={20} className="text-[#FF9933]" />
                Intellectual Property
              </h2>
              <p>
                The website and its original content, features, and functionality are owned by Prashant Kulkarni and are protected by international intellectual property laws.
              </p>
            </div>
          </section>

          <section>
            <div className="border-l-4 pl-4 border-[#FF9933]">
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#000080]">
                <Info size={20} className="text-[#138808]" />
                User Content
              </h2>
              <p>
                Our website may allow users to post, link, store, and share content. You are responsible for the content you post, including its legality, reliability, and appropriateness.
              </p>
            </div>
          </section>

          <section>
            <div className="border-l-4 pl-4 border-[#FFFFFF]">
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#000080]">
                <ShieldCheck size={20} className="text-[#138808]" />
                Disclaimer
              </h2>
              <p>
                The materials on this website are provided "as is". Prashant Kulkarni makes no warranties and disclaims all other warranties including merchantability, fitness for a particular purpose, or non-infringement.
              </p>
            </div>
          </section>

          <section>
            <div className="border-l-4 pl-4 border-[#138808]">
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#000080]">
                <Lock size={20} className="text-[#FF9933]" />
                Limitations
              </h2>
              <p>
                In no event shall Prashant Kulkarni or its suppliers be liable for damages (including loss of data or profit) arising from the use or inability to use the website materials.
              </p>
            </div>
          </section>

          <section>
            <div className="border-l-4 pl-4 border-[#FF9933]">
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#000080]">
                <RefreshCcw size={20} className="text-[#138808]" />
                Changes to Terms
              </h2>
              <p>
                We may revise these Terms at any time without notice. Continued use of the website means you accept those changes.
              </p>
            </div>
          </section>

          <section>
            <div className="border-l-4 pl-4 border-[#FFFFFF]">
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#000080]">
                <Mail size={20} className="text-[#FF9933]" />
                Contact Us
              </h2>
              <p>
                For any questions regarding these Terms, please email us at:
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
