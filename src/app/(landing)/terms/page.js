import WritingChex from "@/components/WritingChex";
import Link from "next/link";

function Terms() {
  return (
    <div className="flex flex-col justify-center items-center md:min-h-[85svh] bg-background font-sans antialiased px-[2rem] py-[3rem]">
      <div className="max-w-[1050px] ">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-[2rem]">Terms and Conditions for <WritingChex/></h1>
        <h3 className="my-3 text-2xl font-bold">1. Acceptance of Terms</h3>
        <p>
          By using WritingChex.com, you agree to comply with and be bound by the
          following terms and conditions. If you do not agree with any part of
          these terms, please do not use the Website.
        </p>
        <h3 className="my-3 text-2xl font-bold">2. Description of Service</h3>
        <p>
          WritingChex.com offers online IELTS writing correction services,
          provided by our team of experts. The service is designed to assist
          users in improving their IELTS writing skills.
        </p>
        <h3 className="my-3 text-2xl font-bold">3. User Registration</h3>
        <p>
          To use certain features of the Website, you may be required to
          register for an account. You are responsible for maintaining the
          confidentiality of your account information and for all activities
          that occur under your account.
        </p>
        <h3 className="my-3 text-2xl font-bold">4. Service Details</h3>
        <p>
          Our IELTS writing correction service includes detailed feedback on
          grammar, vocabulary, coherence, and overall writing structure.
          However, WritingChex.com does not guarantee specific outcomes or
          scores on the IELTS exam.
        </p>
        <h3 className="my-3 text-2xl font-bold">5. Payment and Refund Policy</h3>
        <p>
          Payment for our services is required in advance. Refunds may be
          provided in accordance with our refund policy.
        </p>
        <h3 className="my-3 text-2xl font-bold">6. User Responsibilities</h3>
        <p>
          Users agree to submit only their own original work for correction.
          WritingChex.com reserves the right to refuse service for any content
          that violates intellectual property rights or is deemed inappropriate.
        </p>
        <h3 className="my-3 text-2xl font-bold">7. Intellectual Property</h3>
        <p>
          All content and materials on the Website, including corrections
          provided to users, are the property of WritingChex.com and may not be
          reproduced or redistributed without permission.
        </p>
        <h3 className="my-3 text-2xl font-bold">8. Privacy Policy</h3>
        <p>
          Your use of the Website is also governed by our Privacy Policy, which
          can be found at{" "}
          <Link href="/privacy" className="text-green-500">
            WritingChex Privacy Policy
          </Link>
          . By using the Website, you consent to the terms of the Privacy
          Policy.
        </p>
        <h3 className="my-3 text-2xl font-bold">9. Limitation of Liability</h3>
        <p>
          WritingChex.com shall not be liable for any indirect, incidental,
          special, consequential, or punitive damages, or any loss of profits or
          revenues.
        </p>
        <h3 className="my-3 text-2xl font-bold">10. Termination of Service</h3>
        <p>
          WritingChex.com reserves the right to terminate or suspend access to
          the Website at any time, with or without cause, and with or without
          notice.
        </p>
        <h3 className="my-3 text-2xl font-bold">11. Changes to Terms</h3>
        <p>
          WritingChex.com reserves the right to modify these terms and
          conditions at any time. Changes will be effective immediately upon
          posting on the Website. Continued use of the Website after any such
          changes shall constitute your consent to such changes.
        </p>
        <h3 className="my-3 text-2xl font-bold">12. Governing Law</h3>
        <p>
          These terms and conditions shall be governed by and construed in
          accordance with the laws of [your chosen jurisdiction within Europe].
        </p>
        <p>
          By using WritingChex.com, you agree to these terms and conditions. If
          you do not agree, please discontinue use of the Website.
        </p>
      </div>
    </div>
  );
}

export default Terms;
