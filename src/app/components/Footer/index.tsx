'use client';

import Image from "next/image";
import { Link } from 'react-transition-progress/next';
import { Each } from "../helpers/Each";
import SocialIcons from "../ui/SocialIcons";
import { Constants } from "@/Constants";

import MicrosoftPartner from "../../../../public/img/microsoft.png";
import AWSPartner from "../../../../public/img/aws.png";
import { twMerge } from "tailwind-merge";
import { button } from "../utils/tw-variants";
import Logo from "../ui/Logo";
import Newsletter from "../ui/Newsletter";
import CoomingSoon from "../ui/CoomingSoon";

const pages = {
  solutions: [
    { url: Constants.PAGES.AZURE_CLOUDIFY, title: 'Azure Cloudify', soon: true },
    { url: Constants.PAGES.MANAGED_SERVICES, title: 'Managed Services', soon: true },
    { url: Constants.PAGES.CLOUD_NATIVE_SD, title: 'Cloud Native Software Development', soon: true },
    { url: Constants.PAGES.DATA_LIFECYCLE_MANAGEMENT, title: 'Data Lifecycle Management', soon: true }
  ],
  workshops: [
    { url: Constants.PAGES.AZURE_FUNDAMENTALS_FOR_ISVS, title: 'Azure Fundamentals for ISVs', soon: true },
    { url: Constants.PAGES.AZURE_COST_MANAGEMENT, title: 'Azure Cost Management', soon: true },
    { url: Constants.PAGES.DEVOPS_ON_AZURE, title: 'DevOps on Azure', soon: true },
    { url: Constants.PAGES.AZURE_KUBERNETES_SERVICES, title: 'Azure Kubernetes Services (AKS', soon: true },
    { url: Constants.PAGES.APPLICATION_INSIGHTS, title: 'Application Insights', soon: true },
    { url: Constants.PAGES.WORKSHOP_DATA_AI_SECURITY, title: 'Workshop Data & AI security', soon: true },
  ],
  about: [
    { url: Constants.PAGES.KNOWLEDGE_BASE, title: 'Knowledge Base', soon: true },
    { url: Constants.PAGES.CERTIFICATIONS, title: 'Certifications', soon: true },
  ],
};

type PageLink = typeof pages.solutions[0];

function Footer() {

  return (
    <footer
      className="footer relative bg-footer text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/img/footer-bg2.png')" }}>
      <div className={'partners mt-8 flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 md:gap-32 items-center'}>
        <Image src={MicrosoftPartner} className="max-w-[270]" alt="Microsoft Azure" />
        <Image src={AWSPartner} className="max-w-[80]" alt="AWS" />
      </div>
      <Image src={'/img/line.png'} width={400} height={10} className="w-full my-8 max-w-8xl mx-auto" alt="Line" />
      <div className={'content mt-8 sm:mt-20 max-w-2xl lg:max-w-4xl mx-auto px-4 lg:px-0'}>
        <div className="content-body grid grid-cols-1 sm:grid-cols-2 lg:flex items-start gap-x-4 gap-y-8 lg:gap-4">
          <RenderPageItems title="Solutions" pages={pages.solutions} />
          <RenderPageItems title="Workshops" pages={pages.workshops} />
          <div className="last text-center sm:text-left">
            <RenderPageItems title="About Native Cloud" pages={pages.about} />
            <CoomingSoon>
              <button className={twMerge(`${button({ size: 'md', color: 'primary', icon: 'md' })} mt-4`)}>
                Get in Touch
              </button>
            </CoomingSoon>
            <SocialCol className="hidden sm:flex lg:hidden mt-4" />
          </div>
          <InfoAbout className="hidden sm:flex lg:hidden" />
        </div>
        <div className="info flex items-center justify-between">
          <div className="newsletter w-full mt-14">
            <h2 className="text-xl font-medium mb-4 text-center sm:text-left px-6 sm:px-0">Stay up to date by subscribing to our Newsletter!</h2>
            <Newsletter />
          </div>
          <InfoAbout className="lg:flex hidden" />
        </div>
        <InfoAbout className="flex justify-center items-center w-full mt-10 mb-6 sm:hidden" />
        <SocialCol className="flex justify-center sm:hidden zoom-[1.4]" />
        <div className="footer-banner text-center sm:text-left pb-10 sm:pb-0 px-14 sm:px-0 flex flex-col lg:flex-row lg:items-center mt-14 mb-2">
          <SocialCol className="hidden lg:flex" />
          <span className="col opacity-70">
            <p className="lg:ml-4 text-sm !leading-loose">NATIVE CLOUD © Copyright {new Date().getFullYear()} | {" "}
              <a className="underline" target="_blank" href="/terms-and-conditions">Terms and Conditions</a> | {" "}
              <a className="underline" target="_blank" href="/privacy-policy">Privacy statement</a></p>
          </span>
        </div>
      </div>
    </footer>
  );
}

const RenderPageItems = ({ title, pages }: { title: string; pages: PageLink[] }) => {
  return (
    <div className={'section flex-1 flex flex-col items-center sm:items-start'}>
      <h3 className="text-base mb-4 font-bold">{title}</h3>
      <ul className="list-none p-0 flex flex-col items-center sm:items-start gap-2">
        <Each
          of={pages}
          render={(item: PageLink) => {
            return (
              <>
                {item.soon ? (
                  <CoomingSoon>
                    <li className="text-white font-light">
                      <Link className="flex text-sm text-center sm:text-left items-center gap-1" href={''}>
                        {item.title}
                      </Link>
                    </li>
                  </CoomingSoon>
                ) : (
                  <li className="text-white font-light">
                    <Link className="flex text-sm text-center sm:text-left items-center gap-1" href={item.url}>
                      {item.title}
                    </Link>
                  </li>
                )}
              </>
            );
          }}
        />
      </ul>
    </div>
  );
}

const InfoAbout = ({ className }: { className?: string }) => {
  return (
    <div className={twMerge('contact flex flex-col gap-5 w-[250px]', className || '')}>
      <Logo isInvert={true} />
      <a href={`tel:${Constants.PHONE}`} className={'text-sm'}>{Constants.PHONE}</a>
      <a href={`mailto:${Constants.MAIL}`} className={'text-sm'}>{Constants.MAIL}</a>
    </div>
  )
}

const SocialCol = ({ className }: { className?: string }) => {
  return (
    <span className={twMerge('col flex items-center', className || '')}>
      <span className="font-medium mr-2 hidden sm:block">Follow us</span>
      <SocialIcons />
    </span>
  )
}

export default Footer;