import React from 'react';

const campaignFeatures = [
  { title: "Email Management", desc: "Manage multiple email accounts from one dashboard." },
  { title: "Contact Lists", desc: "Organize and segment contacts efficiently." },
  { title: "Advanced Analytics", desc: "Track performance with detailed insights." },
  { title: "Compliance Ready", desc: "GDPR and CAN‑SPAM compliant by default." }
];

const CampaignCards = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-slate-900">Everything You Need</h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600">
          From simple newsletters to complex automation workflows, it’s covered.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {campaignFeatures.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-xl bg-indigo-50" />
            </div>
            <h3 className="mt-4 text-sm font-semibold text-slate-900">{feature.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default CampaignCards;
