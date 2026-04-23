"use client";

import Image from 'next/image';
import { Each } from '../../helpers/Each';

const services = [
  {
    title: 'Generative AI',
    desc: 'We build and fine-tune LLMs, AI Agents, and RAG systems that plug into your real-world operations — automating decisions, answering from your own data, and unlocking capabilities your competitors don\'t have yet.',
    icon: '/img/icon-genai.svg',
    tag: 'AI & LLMs',
  },
  {
    title: 'DevOps',
    desc: 'Ship faster, break less. We implement CI/CD pipelines, infrastructure as code, and automated testing on Azure and AWS — so your teams release with confidence, not fear.',
    icon: '/img/icon-devops.svg',
    tag: 'Automation',
  },
  {
    title: '.NET',
    desc: 'We build robust, scalable .NET solutions tailored to your business — from APIs and microservices to full enterprise platforms — delivered on time and built to last.',
    icon: '/img/icon-net.svg',
    tag: 'Custom Dev',
  },
  {
    title: 'Azure & AWS',
    desc: 'Architecture, migration, and managed operations on Azure and AWS. We design cloud environments that are secure by default, cost-optimised from day one, and ready to scale with your ambitions.',
    icon: '/img/icon-azure-aws.svg',
    tag: 'Cloud',
  },
];

type IServices = typeof services[0];

const HomeLowerSection = () => {
  return (
    <section className="relative px-6 sm:px-12 xl:px-16 py-16 sm:py-24 bg-white">
      <div className="max-w-9xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
              <p className="text-xs uppercase tracking-wider text-[#6b6b6b] font-medium">What we specialise in</p>
            </div>
            <h2 className="text-2xl sm:text-3.5xl lg:text-4xl font-bold text-[#0a0e1a] leading-tight">
              Four areas. One team. Full delivery.
            </h2>
          </div>
          <p className="text-[#6b6b6b] text-sm max-w-xs text-left sm:text-right">
            From AI to cloud to code — we cover the full stack so you don't have to manage multiple vendors.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Each
            of={services}
            render={(item: IServices, index: number) => (
              <div className="group relative flex flex-col sm:flex-row gap-6 items-start p-8 rounded-2xl border border-gray-100 hover:border-sky-200 hover:shadow-lg bg-white hover:bg-sky-50/30 transition-all duration-300 overflow-hidden">

                {/* Subtle number watermark */}
                <span className="absolute bottom-4 right-6 text-7xl font-black text-gray-100 group-hover:text-sky-100 transition-colors select-none leading-none">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div className="shrink-0 w-16 h-16 rounded-xl bg-slate-100 group-hover:bg-sky-100 flex items-center justify-center transition-colors duration-300">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 relative z-10">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-[#162435]">{item.title}</h3>
                    <span className="text-xs font-semibold text-sky-600 bg-sky-50 border border-sky-100 px-2.5 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeLowerSection;
