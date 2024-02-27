"use client";

import SimpleNavbar from "@/components/SimpleNavbar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

const TermsPage = () => {
  const { isSignedIn } = useAuth();
  return (
    <div>
      <SimpleNavbar />
      <div className="px-[4vw] space-y-12 py-32">
        <h1 className="text-4xl max-md:text-3xl text-zinc-200 underline decoration-blue-500 font-bold text-center">
          Cancellation & Refund Policy
        </h1>
        <div className="flex flex-col gap-12 text-justify bg-zinc-800  p-20 max-md:p-6 rounded-2xl text-zinc-300">
          <div className=" flex flex-col gap-3">
            <h1 className="text-2xl font-bold">1. Subscription Plans</h1>
            <p className="text-sm font-light">
              artivoAI offers subscription plans that grant users access to our
              premium features. To ensure clarity on our cancellation and refund
              policies, please read the following information.
            </p>
          </div>

          <div className=" flex flex-col gap-3">
            <h1 className="text-2xl font-bold">2. Cancellation</h1>
            <p className="text-sm font-light">
              Users have the flexibility to cancel their subscription at any
              time. The cancellation becomes effective immediately, and access
              to premium features will continue until the end of the current
              billing cycle.
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <h1 className="text-2xl font-bold">3. Refunds</h1>
            <p className="text-sm font-light">
              artivoAI does not provide refunds for partially used subscription
              periods. If you choose to cancel your subscription, you will
              retain access to premium features until the end of the paid
              period.
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <h1 className="text-2xl font-bold">4. Service Discontinuation</h1>
            <p className="text-sm font-light">
              In the event that artivoAI decides to modify or discontinue the
              service, users with active subscriptions will be notified in
              advance. In such cases: If the service is discontinued before the
              end of your subscription period, artivoAI will provide prorated
              refunds for the remaining unused portion of your subscription.
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <h1 className="text-2xl font-bold">
              5. Changes to the Cancellation & Refund Policy
            </h1>
            <p className="text-sm font-light">
              artivoAI reserves the right to update and modify this Cancellation
              & Refund Policy. Users will be notified of any material changes,
              and it is recommended to review this policy periodically.
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <h1 className="text-2xl font-bold">6. Contact Us</h1>
            <p className="text-sm font-light">
              If you have any questions or concerns regarding this Cancellation
              & Refund Policy, please contact us at{" "}
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

export default TermsPage;
