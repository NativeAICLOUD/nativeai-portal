'use client';

import Image from "next/image";
import { Link } from "next-view-transitions";
import { Each } from "../helpers/Each";
import SocialIcons from "../ui/SocialIcons";
import { Constants } from "@/Constants";

function Footer() {
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

  return (
    <footer
      className="footer relative bg-[#203d5d] text-white p-8 overflow-hidden bg-cover bg-center font-montserrat"
      style={{ backgroundImage: "url('/img/footer-bg2.png')" }}>
      <div className={'partners flex justify-around items-center my-8'}>
        <Image src="/img/microsoft.png" alt="Microsoft Azure" width={273} height={39} />
        <Image src="/img/aws.png" alt="AWS" width={81} height={48} />
      </div>
      <hr className={'separator border-none border-t border-[#3A506B] my-4'} />
      <div className={'content flex justify-end text-left mb-8 ml-[250px]'}>
        <div className={'section flex-1 mx-4 flex flex-col items-start'}>
          <h3 className="text-xl mb-4 font-bold">Solutions</h3>
          <ul className="list-none p-0 flex flex-col gap-2">
            <Each
              of={pages.solutions}
              render={(item: any) => (
                <li className="text-white font-light">
                  <Link className="flex items-center gap-1" href={item.url}>
                    {item.title}
                  </Link>
                </li>
              )}
            />
          </ul>
        </div>
        <div className={'section flex-1 mx-4 flex flex-col items-start'}>
          <h3 className="text-xl mb-4 font-bold">Workshops</h3>
          <ul className="list-none p-0 flex flex-col gap-2">
            <Each
              of={pages.workshops}
              render={(item: any) => (
                <li className="text-white font-light">
                  <Link className="flex items-center gap-1" href={item.url}>
                    {item.title}
                  </Link>
                </li>
              )}
            />
          </ul>
        </div>
        <div className={'section flex-1 mx-4 flex flex-col items-start'}>
          <h3 className="text-xl mb-4 font-bold">About Native Cloud</h3>
          <ul className="list-none p-0 flex flex-col gap-2">
            <Each
              of={pages.about}
              render={(item: any) => (
                <li className="text-white font-light">
                  <Link className="flex items-center gap-1" href={item.url}>
                    {item.title}
                  </Link>
                </li>
              )}
            />
          </ul>
          <button className={'bg-[#232f3e] text-white p-2 px-4 rounded-full ml-2 absolute right-[857px] bottom-[60rem]'}>Get in Touch</button>
        </div>
      </div>
      <div className={'newsletter text-center mb-8'}>
        <h3>Stay up to date by subscribing to our Newsletter!</h3>
        <div className={'newsletterForm flex justify-center items-center mb-64'}>
          <input className="p-2 mx-2 border border-[#3A506B] rounded-2xl w-full max-w-[250px]" type="text" placeholder="Your Name" />
          <input className="p-2 mx-2 border border-[#3A506B] rounded-2xl w-full max-w-[250px]" type="email" placeholder="Your Email" />
          <button>Sign Up</button>
        </div>
        <label className="flex items-center justify-center text-sm absolute right-[1059px] bottom-[60rem]">
          <input type="checkbox" className="mr-2" /> Accept native.cloud <a href="#">privacy policy</a>.
        </label>
      </div>
      <div className={'social flex items-center justify-center mb-8 absolute right-[545px] bottom-[-1rem]'}>
        <span className="font-montserrat font-semibold text-lg mr-4">Follow us</span>
        <Image src="/img/icon-instagram.png" alt="Instagram" width={20} height={20} />
        <Image src="/img/icon-facebook.png" alt="Facebook" width={20} height={20} />
        <Image src="/img/icon-linkedin.png" alt="LinkedIn" width={20} height={20} />
      </div>
      <div className={'footerBottom flex justify-between items-center flex-wrap'}>
        <div className={'footerInfo flex-1 text-center text-sm absolute right-[845px] bottom-0'}>
          <p>NATIVE CLOUD © Copyright 2024 | <a href="#">Terms and Conditions</a> | <a href="#">Privacy statement</a></p>
        </div>
        <Image
          src="/logo.svg"
          alt="Native Cloud"
          // className="dark:invert"
          width={200}
          height={103}
        />
        <p className={''}>+389 70 226 432 </p>
        <p className={''}> info@nativecloud.com </p>
      </div>
    </footer>
  );
}

export default Footer;