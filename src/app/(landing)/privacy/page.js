import WritingChex from "@/components/WritingChex";
import Link from "next/link";

function Privacy() {
  return (
    <div className="flex flex-col justify-center items-center md:min-h-[85svh] bg-background font-sans antialiased px-[2rem] py-[3rem]">
      <div className="max-w-[1050px] ">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-[2rem]">Privacy Policy for <WritingChex/></h1>
        <p>
          <strong>Effective Date: 12-14-2023</strong>
        </p>
        <p>
          Thank you for choosing WritingChex.com . This Privacy
          Policy outlines how we collect, use, and safeguard your personal
          information when you use our online service for correcting IELTS
          writing. By using WritingChex.com, you agree to the terms outlined in
          this Privacy Policy.
        </p>
        <h3 className="my-3 text-2xl font-bold">1. Information We Collect</h3>
        <p>
          1.1 Account Information: When you create an account on
          WritingChex.com, we may collect personal information such as your
          name, email address, and password.
        </p>
        <p>
          1.2 Payment Information: To process payments for our services, we
          collect payment details, including credit card information. Please
          note that we use secure third-party payment processors, and we do not
          store your payment information on our servers.
        </p>
        <p>
          1.3 Writing Submissions: Users may submit written content for
          correction. This content may contain personal information, and we
          treat it with the utmost confidentiality.
        </p>
        <h3 className="my-3 text-2xl font-bold">2. How We Use Your Information</h3>
        <p>
          2.1 Service Delivery: We use your information to provide the services
          you request, including correcting IELTS writing submissions.
        </p>
        <p>
          2.2 Account Management: Your account information is used for
          authentication, account management, and communication regarding our
          services.
        </p>
        <p>
          2.3 Payment Processing: We use your payment information to process
          transactions for our services.
        </p>
        <p>
          2.4 Communication: We may use your email address to send important
          service-related announcements, updates, or promotional content. You
          can opt-out of promotional emails at any time.
        </p>
        <h3 className="my-3 text-2xl font-bold">3. Data Security</h3>
        <p>
          We implement industry-standard security measures to protect your
          personal information. However, please be aware that no method of
          transmission over the internet or electronic storage is entirely
          secure, and we cannot guarantee absolute security.
        </p>
        <h3 className="my-3 text-2xl font-bold">4. Sharing of Information</h3>
        <p>
          4.1 Third-Party Service Providers: We may share your information with
          trusted third-party service providers who assist us in delivering our
          services, such as payment processors.
        </p>
        <p>
          4.2 Legal Compliance: We may disclose your information if required by
          law or to protect our rights, property, or safety.
        </p>
        <h3 className="my-3 text-2xl font-bold">5. Your Choices</h3>
        <p>
          You can manage your communication preferences by opting out of
          promotional emails. You can also update or delete your account
          information by contacting us at contact@writingchex.com.
        </p>
        <h3 className="my-3 text-2xl font-bold">6. International Data Transfers</h3>
        <p>
          As WritingChex.com operates in the US and Europe, your information may
          be transferred and stored in these locations. We ensure that adequate
          data protection measures are in place in accordance with applicable
          laws.
        </p>
        <h3 className="my-3 text-2xl font-bold">7. Updates to this Privacy Policy</h3>
        <p>
          We may update this Privacy Policy periodically. Any changes will be
          effective immediately upon posting on the Website.
        </p>
        <h3 className="my-3 text-2xl font-bold">8. Contact Us</h3>
        <p>
          If you have questions or concerns about this Privacy Policy, please
          contact us at contact@writingchex.com.
        </p>
        <p>
          By using WritingChex.com, you agree to the terms of this Privacy
          Policy.
        </p>
        <p>WritingChex.com</p>
        [California] [City, State, ZIP Code] [contact@writingchex.com] [Phone
        Number] Last Updated: 12-14-2023
      </div>
    </div>
  );
}

export default Privacy;
