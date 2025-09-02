import React from "react";
import Navbar from "../components/Navbar";
import CampaignCards from "../components/CampaignCard";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="hero-section">
        <section className="mx-auto max-w-6xl px-4 pt-14 pb-12 text-center">
          <p className="text-sm font-semibold tracking-wide text-indigo-600">
            Email Marketing
          </p>
          <h1 className="mt-2 text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
            Made Simple
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-600">
            Powerful email marketing platform that helps create, send, and track
            campaigns that drive results.
          </p>
          <div className="mt-7 flex items-center justify-center gap-3">
            <button className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200/60 hover:bg-indigo-500">
              Start Free Trial
            </button>
            <button className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                10M+
              </div>
              <div className="text-xs text-slate-500">Emails Sent</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                50K+
              </div>
              <div className="text-xs text-slate-500">Active Users</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                99.9%
              </div>
              <div className="text-xs text-slate-500">Uptime</div>
            </div>
          </div>
        </section>
      </div>
      
         <CampaignCards />
    </div>
  );
};

export default LandingPage;
