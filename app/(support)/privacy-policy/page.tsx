"use client";

import SimpleNavbar from "@/components/SimpleNavbar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

const PrivacyPage = () => {
  const { isSignedIn } = useAuth();
  return (
    <div>
      <SimpleNavbar />
      <div className="px-[4vw] space-y-12 py-32">
        <h1 className="text-4xl max-md:text-3xl text-zinc-200 underline decoration-green-500 font-bold text-center">
          Privacy Policy
        </h1>
        <div className="flex flex-col gap-12 text-justify bg-zinc-800  p-20 max-md:p-6 rounded-2xl text-zinc-300">
          <div className=" flex flex-col gap-3">
            <h1 className="text-2xl font-bold">1. Introduction</h1>
            <p className="text-sm font-light">
              Welcome to artivoAI's Privacy Policy. This document outlines how
              we collect, use, and safeguard your information when you use our
              SaaS platform and its services. Your privacy is of utmost
              importance to us, and we are committed to ensuring the security
              and confidentiality of your personal data.
            </p>
          </div>
          <h1 className="text-2xl font-bold">2. Information Collection</h1>
          <div className=" flex flex-col gap-3">
            <h1 className="text-xl font-semibold">2.1 User Data:</h1>
            <p className="text-sm font-light">
              In the course of providing our services, ArtivoAI may collect
              information, including but not limited to, account information,
              usage data, and content generated by users. This data is essential
              for delivering a personalized and effective user experience.
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <h1 className="text-xl font-semibold">2.2 Cookies:</h1>
            <p className="text-sm font-light">
              artivoAI uses cookies to enhance user experience. These small text
              files are stored on your device to collect information about how
              you interact with our platform. Cookies help us improve our
              services and provide a seamless user experience.
            </p>
          </div>
          <h1 className="text-2xl font-bold">3. Data Security</h1>
          <div className=" flex flex-col gap-3">
            <h1 className="text-xl font-semibold">3.1 Security Measures:</h1>
            <p className="text-sm font-light">
              artivoAI employs industry-standard security measures to protect
              your data from unauthorized access, disclosure, alteration, and
              destruction. We regularly review and enhance our security
              practices to maintain the integrity of your information.
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <h1 className="text-xl font-semibold">3.2 Third-Party Services:</h1>
            <p className="text-sm font-light">
              To enhance our platform, artivoAI may integrate third-party
              services. These services have their own privacy policies, and we
              recommend reviewing them to understand how your data is handled by
              these providers.
            </p>
          </div>
          <h1 className="text-2xl font-bold">4. Data Sharing</h1>
          <div className=" flex flex-col gap-3">
            <h1 className="text-xl font-semibold">4.1 Aggregated Data:</h1>
            <p className="text-sm font-light">
              artivoAI may use aggregated and anonymized data for research,
              analytics, and service improvement purposes. This data does not
              personally identify individual users.
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <h1 className="text-2xl font-bold">5. Your Choices</h1>
            <p className="text-sm font-light">
              artivoAI provides you with choices regarding the collection and
              use of your information. You can manage cookie preferences through
              your browser settings and can control certain aspects of data
              sharing through your ArtivoAI account settings.
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <h1 className="text-2xl font-bold">
              6. Changes to the Privacy Policy
            </h1>
            <p className="text-sm font-light">
              artivoAI reserves the right to update and modify this Privacy
              Policy. We will notify users of any material changes, and it is
              recommended to review this policy periodically.
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <h1 className="text-2xl font-bold">7. Contact Us</h1>
            <p className="text-sm font-light">
              If you have any questions or concerns regarding this Privacy
              Policy, please contact us at{" "}
              <span className="underline decoration-amber-500 font-bold">
                artivo.ai@gmail.com
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;