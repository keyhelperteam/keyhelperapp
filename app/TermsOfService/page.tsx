import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'KeyHelper terms of service — understand the terms for using our all-in-one lifestyle companion app.',
};

export default function TermsOfServicePage() {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] bg-white min-h-screen'>
      <div className='text-center text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading=[3rem] lg:leading-[3.5rem]'>
        Terms of Service
      </div>

      <div className='w-[80%] sm:w-[80%] mx-auto text-left text-gray-700 leading-relaxed space-y-6 pb-20'>
        <p className='text-sm text-gray-500'>Last updated: 05 July 2026</p>

        <section>
          <p>
            Welcome to KeyHelper. These Terms of Service (&quot;Terms&quot;) govern your use of the KeyHelper mobile
            application and website (collectively, the &quot;Services&quot;). By installing, accessing, or using our
            Services, you agree to be bound by these Terms. If you do not agree, please do not use the Services.
          </p>
          <p>
            <strong>No Access to Emergency Services:</strong> KeyHelper does not provide access to emergency services or public safety
            answering points. You should ensure you can contact emergency services through your mobile phone or other means.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-bold text-gray-900'>1. About Our Services</h2>

          <div className='space-y-2'>
            <p><strong>1.1 What We Offer:</strong> KeyHelper is a multi-feature lifestyle application that includes, but is not limited to:</p>
            <ul className='list-disc pl-8 space-y-1'>
              <li>Social notes with location tagging (public, friends-only, and private visibility)</li>
              <li>On-device AI agent powered by Google Gemma 4 (chat, image captioning, translation, calorie estimation, receipt scanning, travel planning, financial analysis)</li>
              <li>Follow system with push notifications and approval workflow</li>
              <li>Real-time chat messaging</li>
              <li>Todo and task management with reminders</li>
              <li>Travel planning with AI-assisted itinerary generation</li>
              <li>Finance tracker with AI-powered insights</li>
              <li>Countdown tracker and Pomodoro timer</li>
              <li>Workout timer and exercise plans with animated guidance</li>
              <li>Location-based nearby note discovery and navigation</li>
            </ul>

            <p><strong>1.2 Registration:</strong> You must create an account using accurate information. You are required to provide your email address, first name, last name, username, and profile photo. You agree to receive emails from us for account-related purposes.</p>

            <p><strong>1.3 Account Ownership:</strong> Your account is personal to you. You may not gift, lend, transfer, or otherwise permit any other person to access or use your account. KeyHelper reserves the right to disable, reclaim, or reuse account identifiers upon termination or deactivation.</p>

            <p><strong>1.4 Account Security:</strong> You are responsible for safeguarding your account credentials and for all activities under your account. You must notify us immediately at keyhelperteam@gmail.com if you suspect unauthorized access.</p>

            <p><strong>1.5 Age Requirement:</strong> You must be at least 18 years old to use our Services. By creating an account, you represent that you are at least 18 years of age.</p>

            <p><strong>1.6 Devices and Software:</strong> You are responsible for providing the devices, software, and internet connection needed to use the Services. You consent to downloading and installing updates, including automatic updates.</p>

            <p><strong>1.7 Fees:</strong> KeyHelper is currently free to use. You are responsible for any data charges or fees from your mobile carrier or internet provider. We reserve the right to introduce paid features or subscription tiers in the future with advance notice.</p>
          </div>
        </section>

        <section>
          <h2 className='text-xl font-bold text-gray-900'>2. Privacy and Your Data</h2>
          <p>
            Your privacy is important to us. Our Privacy Policy explains how we collect, use, and share your
            information. By using the Services, you agree to our data practices as described in the Privacy Policy.
            Our AI features run on-device; your content is not sent to external AI servers.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-bold text-gray-900'>3. User Content and Conduct</h2>

          <p><strong>3.1 Your Content:</strong> You retain ownership of the content you create on KeyHelper (notes, photos, travel plans, chat messages, etc.). By posting content, you grant KeyHelper a worldwide, royalty-free, non-exclusive license to use, host, store, display, and distribute your content solely as necessary to provide the Services to you and other users as you direct.</p>

          <p><strong>3.2 Content Visibility:</strong> Content you designate as &quot;public&quot; is visible to all KeyHelper users. Content designated as &quot;friends&quot; is visible to your approved followers. Content designated as &quot;private&quot; is visible only to you. You control the visibility of each piece of content you create.</p>

          <p><strong>3.3 Acceptable Use:</strong> You agree not to:</p>
          <ul className='list-disc pl-8 space-y-1'>
            <li>Post content that is illegal, defamatory, harassing, hateful, sexually explicit, fraudulent, or spam</li>
            <li>Impersonate others or misrepresent your identity</li>
            <li>Violate the intellectual property, privacy, or other rights of others</li>
            <li>Send bulk or automated messages</li>
            <li>Interfere with or disrupt the Services or its infrastructure</li>
            <li>Attempt to gain unauthorized access to the Services or other users&apos; accounts</li>
            <li>Use the Services for any illegal purpose</li>
          </ul>

          <p><strong>3.4 Content Moderation:</strong> We do not actively monitor user content. However, users can report inappropriate content through the in-app reporting feature. We review reported content and may remove it or terminate accounts that violate these Terms at our sole discretion.</p>

          <p><strong>3.5 Blocking:</strong> You can block other users to prevent them from interacting with you or viewing your content. You can also block individual notes from appearing in your feed.</p>
        </section>

        <section>
          <h2 className='text-xl font-bold text-gray-900'>4. On-Device AI Features</h2>
          <p>
            KeyHelper includes AI features powered by models downloaded to your device. These features process
            your data locally on your device. AI-generated content (travel plans, captions, financial insights,
            etc.) is for informational purposes only. You are responsible for verifying AI-generated content
            before relying on it. We make no guarantees about the accuracy or appropriateness of AI outputs.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-bold text-gray-900'>5. Third-Party Services</h2>
          <p>
            The Services may integrate with or link to third-party services, including Google Maps, Google Sign-In,
            and Apple Sign-In. Your use of these third-party services is governed by their respective terms and
            privacy policies. We are not responsible for the content or practices of third-party services.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-bold text-gray-900'>6. Intellectual Property</h2>
          <p>
            KeyHelper and its original content, features, and functionality are owned by KeyHelper and are
            protected by international copyright, trademark, and other intellectual property laws. You may not
            copy, modify, distribute, sell, or lease any part of the Services without our prior written consent.
          </p>
          <p>
            If you believe your intellectual property rights have been infringed by content on our Services,
            please email us at keyhelperteam@gmail.com with a detailed description of the alleged infringement.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-bold text-gray-900'>7. Disclaimers</h2>
          <p>
            THE SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT ANY WARRANTIES,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, NON-INFRINGEMENT, OR FREEDOM FROM ERRORS OR HARMFUL CODE.
          </p>
          <p>
            We do not warrant that the Services will be uninterrupted, secure, or error-free, or that any
            defects will be corrected. We are not responsible for the content or conduct of any user or
            third party.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-bold text-gray-900'>8. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, KEYHELPER AND ITS AFFILIATES SHALL NOT BE
            LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING
            BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR IN CONNECTION
            WITH YOUR USE OF THE SERVICES.
          </p>
          <p>
            In no event shall our aggregate liability exceed one hundred U.S. dollars (USD 100). Some
            jurisdictions do not allow the exclusion or limitation of certain damages, so some of the above
            may not apply to you.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-bold text-gray-900'>9. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless KeyHelper and its affiliates from and against
            any claims, damages, costs, and expenses (including reasonable legal fees) arising from your
            use of the Services, your violation of these Terms, or your violation of any third-party rights.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-bold text-gray-900'>10. Account Termination</h2>
          <p>
            You may terminate your account at any time through the app (Profile → Settings → Delete Account).
            Account deletion is permanent and will remove your profile, content, images, and social
            relationships from our servers.
          </p>
          <p>
            We may suspend or terminate your account at any time if you violate these Terms or if your
            conduct could cause legal liability or harm to KeyHelper or other users. Upon termination,
            your right to use the Services immediately ceases.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-bold text-gray-900'>11. Dispute Resolution</h2>
          <p>
            Any dispute arising out of or relating to these Terms or the Services shall be governed by the
            laws of Malaysia, without regard to conflict of law principles. You agree to submit to the
            exclusive jurisdiction of the courts of Malaysia. Before initiating formal proceedings, we
            encourage you to contact us at keyhelperteam@gmail.com to attempt an amicable resolution.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-bold text-gray-900'>12. Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify you of material changes
            within the app and update the &quot;Last updated&quot; date. Your continued use of the Services after
            changes are effective constitutes acceptance of the updated Terms. If you do not agree to the
            changes, you must stop using the Services.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-bold text-gray-900'>13. General</h2>
          <ul className='list-disc pl-8 space-y-1'>
            <li>These Terms constitute the entire agreement between you and KeyHelper regarding the Services.</li>
            <li>Our failure to enforce any provision of these Terms shall not constitute a waiver of that provision.</li>
            <li>If any provision is found unenforceable, the remaining provisions remain in full effect.</li>
            <li>We may assign our rights under these Terms without restriction. You may not assign your rights.</li>
            <li>These Terms do not create any third-party beneficiary rights.</li>
          </ul>
        </section>

        <section>
          <h2 className='text-xl font-bold text-gray-900'>14. Contact</h2>
          <p>
            For questions about these Terms, please contact us at:
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href='mailto:keyhelperteam@gmail.com' className='text-green-600 hover:underline'>
              keyhelperteam@gmail.com
            </a>
          </p>
          <p>
            <strong>Website:</strong>{' '}
            <a href='https://keyhelperteam.github.io/keyhelperapp' className='text-green-600 hover:underline'>
              keyhelperteam.github.io/keyhelperapp
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
