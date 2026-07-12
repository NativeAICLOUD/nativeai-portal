import type { Metadata } from "next";
import IndustriesSection from "@/app/components/partials/industries/IndustriesSection";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "We understand that to help transform your business with AI, we need to complement our cutting-edge data, cloud and AI expertise with a deep understanding of your industry.",
};

export default function IndustriesPage() {
  return <IndustriesSection />;
}
