import {
  Cloud, Layers, Rocket, Workflow, RefreshCw, Building2,
  Sparkles, Briefcase, Palette, CloudUpload, type LucideIcon,
} from 'lucide-react';
import { Eyebrow } from '@/app/components/partials/services/ServiceUI';

/* Divider-gradient palette — same schema as the delivery-spectrum icons */
const PALETTE = ['#FF9900', '#FF6A3D', '#FF4F8B'];

const services: { title: string; icon: LucideIcon }[] = [
  { title: 'Cloud Solutions & Services',     icon: Cloud },
  { title: 'Platform Development',           icon: Layers },
  { title: 'SaaS App Development',           icon: Rocket },
  { title: 'Cloud & DevOps',                 icon: Workflow },
  { title: 'App Modernization',              icon: RefreshCw },
  { title: 'Enterprise App Development',     icon: Building2 },
  { title: 'Digital Transformation',         icon: Sparkles },
  { title: 'End-to-end Business Solutions',  icon: Briefcase },
  { title: 'UI / UX Design',                 icon: Palette },
  { title: 'Cloud Migrations',               icon: CloudUpload },
];

export default function ServicesScrollSection() {
  return (
    <section className="font-switzer bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">

        {/* Header */}
        <div className="mb-12">
          <div className="mb-4"><Eyebrow>What we deliver</Eyebrow></div>
          <h2 className="m-0 max-w-[620px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
            Every service your business needs — under one roof
          </h2>
        </div>

        {/* Service tabs — icon outside the pill, gradient palette colors */}
        <div className="flex flex-wrap gap-x-8 gap-y-5">
          {services.map(({ title, icon: Icon }, i) => (
            <div key={title} className="group flex items-center gap-3.5">
              <Icon
                className="h-10 w-10 shrink-0 transition-transform duration-200 group-hover:scale-110"
                style={{ color: PALETTE[i % 3] }}
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <span className="inline-flex items-center rounded-full border border-[#e6e6e6] bg-white px-5 py-2.5 transition-[transform,border-color,box-shadow] duration-200 group-hover:-translate-y-0.5 group-hover:border-[#111]/20 group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
                <span className="text-[15px] font-medium text-[#111]">{title}</span>
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
