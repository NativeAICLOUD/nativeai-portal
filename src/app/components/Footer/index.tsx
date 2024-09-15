'use client';

import Image from "next/image";
import { Link } from "next-view-transitions";
import { Each } from "../helpers/Each";
import SocialIcons from "../ui/SocialIcons";
import { Constants } from "@/Constants";

import MicrosoftPartner from "../../../../public/img/microsoft.png";
import AWSPartner from "../../../../public/img/aws.png";
import { twMerge } from "tailwind-merge";
import { button } from "../utils/tw-variants";
import Logo from "../ui/Logo";
import Newsletter from "../ui/Newsletter";

const pages = {
  solutions: [
    { url: Constants.PAGES.AZURE_CLOUDIFY, title: 'Azure Cloudify' },
    { url: Constants.PAGES.MANAGED_SERVICES, title: 'Managed Services' },
    { url: Constants.PAGES.CLOUD_NATIVE_SD, title: 'Cloud Native Software Development' },
    { url: Constants.PAGES.DATA_LIFECYCLE_MANAGEMENT, title: 'Data Lifecycle Management' },
    { url: Constants.PAGES.CSP_ENTERPRISE, title: 'CSP Enterprise' },
  ],
  workshops: [
    { url: Constants.PAGES.AZURE_FUNDAMENTALS_FOR_ISVS, title: 'Azure Fundamentals for ISVs' },
    { url: Constants.PAGES.AZURE_COST_MANAGEMENT, title: 'Azure Cost Management' },
    { url: Constants.PAGES.DEVOPS_ON_AZURE, title: 'DevOps on Azure' },
    { url: Constants.PAGES.AZURE_KUBERNETES_SERVICES, title: 'Azure Kubernetes Services (AKS' },
    { url: Constants.PAGES.APPLICATION_INSIGHTS, title: 'Application Insights' },
    { url: Constants.PAGES.WORKSHOP_DATA_AI_SECURITY, title: 'Workshop Data & AI security' },
  ],
  about: [
    { url: Constants.PAGES.KNOWLEDGE_BASE, title: 'Knowledge Base' },
    { url: Constants.PAGES.CERTIFICATIONS, title: 'Certifications' },
  ],
};

type PageLink = typeof pages.solutions[0];

function Footer() {

  return (
    <footer
      className="footer relative bg-[#203d5d] text-white overflow-hidden bg-cover bg-center font-montserrat"
      style={{ backgroundImage: "url('/img/footer-bg2.png')" }}>
      <div className={'partners mt-8 flex justify-center gap-32 items-center'}>
        <Image src={MicrosoftPartner} className="max-w-[270]" alt="Microsoft Azure" />
        <Image src={AWSPartner} className="max-w-[80]" alt="AWS" />
      </div>
      <Image src={'/img/line.png'} width={400} height={10} className="w-full my-8 max-w-8xl mx-auto" alt="AWS" />
      <div className={'content mt-20 max-w-4xl mx-auto'}>
        <div className="content-body flex items-start gap-4">
          <RenderPageItems title="Solutions" pages={pages.solutions} />
          <RenderPageItems title="Workshops" pages={pages.workshops} />
          <div className="last">
            <RenderPageItems title="About Native Cloud" pages={pages.about} />
            <button className={twMerge(`${button({ size: 'md', color: 'primary', icon: 'md' })} mt-4`)}>
              Get in Touch
            </button>
          </div>
        </div>
        <div className="info flex items-center justify-between">
          <div className="newsletter w-full mt-14">
            <h2 className="text-xl font-medium mb-4">Stay up to date by subscribing to our Newsletter!</h2>
            <Newsletter />
          </div>
          <div className="contact flex flex-col gap-5 w-[250px]">
            <Logo isInvert={true} />
            <a href={`tel:${Constants.PHONE}`} className={'text-sm'}>{Constants.PHONE}</a>
            <a href={`mailto:${Constants.MAIL}`} className={'text-sm'}>{Constants.MAIL}</a>
          </div>
        </div>
        <div className="footer-banner flex items-center mt-14 mb-2">
          <span className="font-medium mr-2">Follow us</span>
          <SocialIcons />
          <p className="ml-4 text-sm">NATIVE CLOUD © Copyright {new Date().getFullYear()} | {" "}
            <a className="underline" target="_blank" href="/terms-and-conditions">Terms and Conditions</a> | {" "} 
            <a className="underline" target="_blank" href="/privacy-policy">Privacy statement</a></p>
        </div>
      </div>
    </footer>
  );
}

const RenderPageItems = ({ title, pages }: { title: string; pages: PageLink[] }) => {
  return (
    <div className={'section flex-1 flex flex-col items-start'}>
      <h3 className="text-base mb-4 font-bold">{title}</h3>
      <ul className="list-none p-0 flex flex-col gap-2">
        <Each
          of={pages}
          render={(item: PageLink) => (
            <li className="text-white font-light">
              <Link className="flex text-sm items-center gap-1" href={item.url}>
                {item.title}
              </Link>
            </li>
          )}
        />
      </ul>
    </div>
  );
}

export default Footer;