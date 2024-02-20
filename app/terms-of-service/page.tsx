"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

const TermsPage = () => {
    const { isSignedIn } = useAuth();
  return (
    <div className="p-20 max-md:p-6 flex flex-col gap-14">
      <div className="flex max-md:flex-col max-md:gap-6 items-center justify-between pl-20 pr-20">
        <div className="text-center text-zinc-200 font-extrabold text-4xl">
          Terms of Service
        </div>
        <div className="flex gap-4">
          <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
            <Button variant={"ghost"} className="rounded-2xl">
              Dashboard
            </Button>
          </Link>
          <Link href={"/"}>
            <Button variant={"ghost"} className="rounded-2xl">
              Exit
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-12 text-justify bg-zinc-900  p-20 max-md:p-6 rounded-2xl text-zinc-400">
        <div className=" flex flex-col gap-3">
          <h1 className="text-xl font-semibold">Acceptance of Terms:</h1>
          <p className="text-sm font-light">
            By accessing or using the ArtivoAI platform ("Platform"), you affirm
            your understanding and agreement to abide by these Terms of Service.
          </p>
        </div>
        <div className=" flex flex-col gap-3">
          <h1 className="text-xl font-semibold">User Accounts:</h1>
          <p className="text-sm font-light">
            Users are required to create an account for certain Platform
            features. Account holders are responsible for maintaining the
            confidentiality of their account information and assume full
            responsibility for all activities conducted under their account.
          </p>
        </div>
        <div className=" flex flex-col gap-3">
          <h1 className="text-xl font-semibold">Use of AI Tools:</h1>
          <p className="text-sm font-light">
            ArtivoAI's AI tools, encompassing script generation, title
            generation, content ideas generation, music generation, description
            generation, tags generator, and channel name generator, leverage the
            OpenAI API. Utilization of these tools is subject to compliance with
            OpenAI's terms of service.
          </p>
        </div>
        <div className=" flex flex-col gap-3">
          <h1 className="text-xl font-semibold">Intellectual Property:</h1>
          <p className="text-sm font-light">
            Content generated by ArtivoAI's AI tools remains the property of the
            respective user. However, ArtivoAI retains the right to utilize
            aggregated and anonymized data for research and enhancement
            purposes.
          </p>
        </div>
        <div className=" flex flex-col gap-3">
          <h1 className="text-xl font-semibold">Virtual AI Mentor:</h1>
          <p className="text-sm font-light">
            The virtual AI mentor within the Platform provides interactive
            guidance based on AI algorithms. It is not a substitute for
            professional advice, and users are encouraged to exercise
            discretion.
          </p>
        </div>
        <div className=" flex flex-col gap-3">
          <h1 className="text-xl font-semibold">Prohibited Conduct:</h1>
          <p className="text-sm font-light">
            Users are expressly prohibited from engaging in unlawful or
            detrimental activities on the Platform. This encompasses any
            attempts to disrupt functionality, unauthorized account access, and
            misuse of generated content.
          </p>
        </div>
        <div className=" flex flex-col gap-3">
          <h1 className="text-xl font-semibold">Privacy Policy:</h1>
          <p className="text-sm font-light">
            ArtivoAI prioritizes user privacy. Our Privacy Policy elucidates the
            collection, use, and safeguarding of user information. Utilization
            of the Platform implies consent to the terms outlined in our Privacy
            Policy.
          </p>
        </div>
        <div className=" flex flex-col gap-3">
          <h1 className="text-xl font-semibold">Disclaimer of Warranties:</h1>
          <p className="text-sm font-light">
            The Platform is provided "as is," and ArtivoAI disclaims all
            warranties, whether express or implied, regarding the accuracy,
            reliability, or suitability of AI-generated content. Users engage
            with the Platform at their own discretion and risk.
          </p>
        </div>
        <div className=" flex flex-col gap-3">
          <h1 className="text-xl font-semibold">Limitation of Liability:</h1>
          <p className="text-sm font-light">
            ArtivoAI and its affiliates bear no liability for indirect,
            incidental, special, consequential, or punitive damages arising from
            or connected to the use of the Platform.
          </p>
        </div>
        <div className=" flex flex-col gap-3">
          <h1 className="text-xl font-semibold">Termination:</h1>
          <p className="text-sm font-light">
            ArtivoAI reserves the right to terminate or suspend user access to
            the Platform at its discretion, particularly in cases of
            non-compliance with these Terms of Service or applicable laws.
          </p>
        </div>
        <div className=" flex flex-col gap-3">
          <h1 className="text-xl font-semibold">Changes to Terms:</h1>
          <p className="text-sm font-light">
            ArtivoAI may update these Terms of Service periodically. Users are
            responsible for reviewing these terms regularly. Continued use of
            the Platform following modifications constitutes acceptance of the
            updated terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
