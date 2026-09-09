import type { Metadata } from "next";
import MigrateContent from "./MigrateContent";

export const metadata: Metadata = {
  title: "Migrate to Azure",
  description:
    "We migrate your workloads, databases, and infrastructure to Azure — on time, on budget, and with zero unplanned downtime. Every stage handled end-to-end.",
};

export default function MigrateToAzurePage() {
  return <MigrateContent />;
}
