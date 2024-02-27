"use client";

import SimpleNavbar from "@/components/SimpleNavbar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

const TermsPage = () => {
  const { isSignedIn } = useAuth();
  return (
    <div>
      <SimpleNavbar/>
      <div className="px-[4vw] space-y-12 py-32">
        <h1 className="text-4xl max-md:text-3xl text-zinc-200 underline decoration-amber-500 font-bold text-center">
          Terms of Service
        </h1>
      <div className="flex flex-col gap-12 text-justify bg-zinc-800  p-20 max-md:p-6 rounded-2xl text-zinc-300">
        <div className=" flex flex-col gap-3">
          <h1 className="text-2xl font-bold">1. Introduction</h1>
          <p className="text-sm font-light">
            Welcome to artivoAI, a creative haven for content creators! These
            Terms of Service ("Terms") establish the contractual framework
            between you and artivoAI. By accessing or using our Software as a
            Service (SaaS) platform and its suite of services, you are agreeing
            to comply with and be bound by these Terms. It is crucial to
            carefully read and understand these provisions. If you do not agree
            with any part of these Terms, we kindly request that you refrain
            from using artivoAI.
          </p>
        </div>
        <h1 className="text-2xl font-bold">2. User Responsibilities</h1>
        <div className=" flex flex-col gap-3">
          <h1 className="text-xl font-semibold">2.1 Eligibility:</h1>
          <p className="text-sm font-light">
            You must be at least 18 years old to use artivoAI. By using our
            platform, you confirm that you meet this age requirement.
          </p>
        </div>
        <div className=" flex flex-col gap-3">
          <h1 className="text-xl font-semibold">2.2 Account Security:</h1>
          <p className="text-sm font-light">
            You are responsible for maintaining the confidentiality of your
            account credentials. Notify us immediately of any unauthorized use
            or security breach.
          </p>
        </div>
        <div className=" flex flex-col gap-3">
          <h1 className="text-xl font-semibold">2.3 Prohibited Activities:</h1>
          <p className="text-sm font-light">
            Users must not engage in any activities that violate the law or
            infringe upon the rights of others while using artivoAI.
          </p>
        </div>
        <div className=" flex flex-col gap-3">
          <h1 className="text-xl font-semibold">2.4 Virtual AI Mentor:</h1>
          <p className="text-sm font-light">
            The virtual AI mentor within the Platform provides interactive
            guidance based on AI algorithms. It is not a substitute for
            professional advice, and users are encouraged to exercise
            discretion.
          </p>
        </div>
        <h1 className="text-2xl font-bold">3. Use of AI Tools</h1>
        <div className=" flex flex-col gap-3">
          <h1 className="text-xl font-semibold">3.1 OpenAI API:</h1>
          <p className="text-sm font-light">
            artivoAI utilizes the OpenAI API for generating responses. Users are
            subject to OpenAI's terms of service, and by using our platform, you
            agree to comply with OpenAI's terms.
          </p>
        </div>
        <div className=" flex flex-col gap-3">
          <h1 className="text-xl font-semibold">3.2 Content Ownership:</h1>
          <p className="text-sm font-light">
            We believe in empowering content creators, and you retain ownership
            of the content generated through artivoAI. Nevertheless, to enhance
            and improve our services, artivoAI may use aggregated and anonymized
            data. Rest assured, we prioritize your creative ownership.
          </p>
        </div>
        <h1 className="text-2xl font-bold">4. Disclaimers and Limitations</h1>
        <div className=" flex flex-col gap-3">
          <h1 className="text-xl font-semibold">4.1 No Guarantees:</h1>
          <p className="text-sm font-light">
            While artivoAI endeavors to provide accurate and helpful content
            generation, we do not guarantee the correctness or completeness of
            the materials produced on the platform. Users should exercise their
            judgment and review generated content for suitability.
          </p>
        </div>
        <div className=" flex flex-col gap-3">
          <h1 className="text-xl font-semibold">4.2 Service Changes:</h1>
          <p className="text-sm font-light">
            artivoAI reserves the right to modify or discontinue any part of the
            service without prior notice. We aim to continually enhance our
            platform, and these changes may include updates, feature additions,
            or, in some cases, the removal of certain functionalities.
          </p>
        </div>
        <div className=" flex flex-col gap-3">
          <h1 className="text-2xl font-bold">5. Termination</h1>
          <p className="text-sm font-light">
            artivoAI reserves the right to terminate or suspend your account, at
            its sole discretion, for violations of these Terms. We encourage a
            respectful and collaborative community, and adherence to these Terms
            is essential for maintaining a positive user experience.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TermsPage;
