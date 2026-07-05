import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy & Policy',
  description:
    'KeyHelper privacy policy — learn how we collect, use, and protect your data across our all-in-one lifestyle app.',
};

export default function PrivacyAndPolicyPage() {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] bg-white min-h-screen'>
      <div className='text-center text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading=[3rem] lg:leading-[3.5rem]'>
        Privacy &amp; Policy
      </div>

      <div className='w-[80%] sm:w-[80%] mx-auto text-left text-gray-700 leading-relaxed space-y-6 pb-20'>
        <p className='text-sm text-gray-500'>Last updated: 05 July 2026</p>

        <section>
          <h2 className='text-xl font-bold text-gray-900'>Introduction</h2>
          <p>
            KeyHelper (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application
            and website (collectively, the &quot;Services&quot;). By using KeyHelper, you agree to the collection and use of
            information in accordance with this policy.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-bold text-gray-900'>1. Information We Collect</h2>

          <h3 className='font-semibold mt-4'>1.1 Information You Provide</h3>
          <ul className='list-disc pl-8 space-y-1'>
            <li><strong>Account Information:</strong> When you register, you provide your email address, first name, last name, username, and profile photo. You may also add a bio and background photo.</li>
            <li><strong>Content You Create:</strong> Notes (text, photos, geolocation), travel plans, to-do lists, countdowns, finance entries, saved posts, and chat messages. You choose the visibility of each note: public, friends-only, or private.</li>
            <li><strong>Images:</strong> Photos you upload for your profile, background, or notes are stored securely.</li>
            <li><strong>Communications:</strong> When you contact us for support or report content, we receive your message and associated details.</li>
          </ul>

          <h3 className='font-semibold mt-4'>1.2 Information Collected Automatically</h3>
          <ul className='list-disc pl-8 space-y-1'>
            <li><strong>Device Information:</strong> Hardware model, operating system version, app version, and device identifiers.</li>
            <li><strong>Location Data:</strong> With your permission, we collect precise GPS location to enable location-based features such as nearby note discovery, geotagging notes, and navigation. You may disable location access in your device settings at any time.</li>
            <li><strong>Usage Data:</strong> Firebase Analytics automatically collects anonymized app usage data, including screens viewed and interaction patterns, to help us improve the Services.</li>
            <li><strong>Push Notification Token:</strong> A device token used to send you push notifications about social activity (likes, follows, new notes from people you follow). You may manage notification preferences in-app.</li>
          </ul>

          <h3 className='font-semibold mt-4'>1.3 Information from Third Parties</h3>
          <ul className='list-disc pl-8 space-y-1'>
            <li><strong>Authentication Providers:</strong> If you sign in with Google or Apple, we receive your email address and name from those providers.</li>
          </ul>
        </section>

        <section>
          <h2 className='text-xl font-bold text-gray-900'>2. How We Use Your Information</h2>
          <ul className='list-disc pl-8 space-y-1'>
            <li><strong>To Provide the Services:</strong> Authenticate your account, store and display your content, enable social features (follows, likes, chat), and deliver location-based functionality.</li>
            <li><strong>To Send Notifications:</strong> Push notifications for social activity, reminders for tasks/countdowns/travel plans, and service updates. You can disable notifications at any time.</li>
            <li><strong>To Improve Our Services:</strong> Analyze usage patterns to fix bugs, improve performance, and develop new features.</li>
            <li><strong>To Communicate With You:</strong> Respond to support requests, notify you of policy changes, and send administrative messages.</li>
            <li><strong>For Safety and Security:</strong> Investigate suspicious activity, enforce our Terms of Service, and prevent abuse.</li>
          </ul>
        </section>

        <section>
          <h2 className='text-xl font-bold text-gray-900'>3. Third-Party Services</h2>
          <p>We use the following third-party services to power KeyHelper. These providers have their own privacy policies governing their handling of your data:</p>
          <ul className='list-disc pl-8 space-y-1'>
            <li><strong>Google Firebase (Auth, Firestore, Storage, Cloud Messaging, Cloud Functions):</strong> User authentication, database storage, file storage, push notifications, and serverless backend functions. Data is stored in Google Cloud infrastructure.</li>
            <li><strong>Google Maps SDK:</strong> For interactive maps, location search, and navigation within the app.</li>
            <li><strong>Google Sign-In:</strong> OAuth 2.0 authentication for users who sign in with their Google account.</li>
            <li><strong>Apple Sign-In:</strong> OAuth 2.0 authentication for users who sign in with their Apple ID.</li>
            <li><strong>Hugging Face:</strong> On-device AI models (Gemma) are downloaded from Hugging Face. The AI runs entirely on your device; no data is sent to external servers for AI processing.</li>
          </ul>
        </section>

        <section>
          <h2 className='text-xl font-bold text-gray-900'>4. On-Device AI</h2>
          <p>
            KeyHelper includes on-device AI features powered by Google Gemma 4. These models run entirely on your device.
            Your data (notes, finance entries, travel plans, images) is processed locally and is never sent to external
            AI servers. You choose which AI features to use.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-bold text-gray-900'>5. Data Storage and Retention</h2>
          <ul className='list-disc pl-8 space-y-1'>
            <li><strong>Server Storage:</strong> Your account information, content, and social data are stored in Firebase (Google Cloud).</li>
            <li><strong>Local Storage:</strong> App preferences, cached profile data, and AI models are stored locally on your device.</li>
            <li><strong>Activity Data:</strong> Social activity records (likes, follows, note views) are automatically deleted after 30 days.</li>
            <li><strong>Chat Messages:</strong> Chat messages are retained for the lifetime of your account unless you request deletion.</li>
            <li><strong>Account Deletion:</strong> When you delete your account, we permanently remove your profile, notes, travel plans, saved posts, images, and social relationships from our servers. See Section 7 for details.</li>
          </ul>
        </section>

        <section>
          <h2 className='text-xl font-bold text-gray-900'>6. How We Share Your Information</h2>
          <ul className='list-disc pl-8 space-y-1'>
            <li><strong>Public Content:</strong> Content you mark as &quot;public&quot; (notes, profile information) is visible to all KeyHelper users.</li>
            <li><strong>Friends-Only Content:</strong> Content marked as &quot;friends&quot; is visible only to users you have approved as followers.</li>
            <li><strong>With Service Providers:</strong> We share data with Firebase/Google as necessary to provide the Services. We require providers to use your data only per our instructions.</li>
            <li><strong>Legal Compliance:</strong> We may disclose information if required by law or to protect the rights, property, or safety of KeyHelper, our users, or others.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your information may be transferred.</li>
          </ul>
        </section>

        <section>
          <h2 className='text-xl font-bold text-gray-900'>7. Your Privacy Rights</h2>
          <ul className='list-disc pl-8 space-y-1'>
            <li><strong>Access and Update:</strong> You can view and edit your profile information at any time in the app settings.</li>
            <li><strong>Delete Content:</strong> You can delete your notes, travel plans, and other content individually through the app.</li>
            <li><strong>Block Users:</strong> You can block other users to prevent them from seeing your content or interacting with you.</li>
            <li><strong>Private Profile:</strong> You can set your profile to private, limiting who can follow you and see your content.</li>
            <li><strong>Notification Control:</strong> You can manage which push notifications you receive in the app settings.</li>
            <li><strong>Location Control:</strong> You can disable location access in your device settings. Note that location-based features will not function without it.</li>
            <li><strong>Account Deletion:</strong> You can permanently delete your entire account and all associated data from within the app (Profile → Settings → Delete Account). This removes your profile, notes, travel plans, saved posts, images, social relationships, and authentication account. Account deletion is irreversible.</li>
          </ul>
        </section>

        <section>
          <h2 className='text-xl font-bold text-gray-900'>8. App Permissions</h2>
          <p>KeyHelper may request the following device permissions:</p>
          <ul className='list-disc pl-8 space-y-1'>
            <li><strong>Camera:</strong> To take photos for notes and AI features (image captioning, calorie estimation, receipt scanning).</li>
            <li><strong>Photo Library:</strong> To select images from your device for notes and profile.</li>
            <li><strong>Location:</strong> For geotagging notes, nearby note discovery, and navigation. Used only when the app is in use or with your explicit permission.</li>
            <li><strong>Microphone:</strong> For voice-to-text input.</li>
            <li><strong>Notifications:</strong> For push notifications about social activity and reminders.</li>
          </ul>
          <p className='text-sm text-gray-500'>You can manage or revoke these permissions at any time in your device settings.</p>
        </section>

        <section>
          <h2 className='text-xl font-bold text-gray-900'>9. Children&apos;s Privacy</h2>
            <p>
              Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal
              information from anyone under 18. If you become aware that someone under 18 has provided us with personal
              information, please contact us so we can take appropriate action.
            </p>
        </section>

        <section>
          <h2 className='text-xl font-bold text-gray-900'>10. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information.
            Data is transmitted over HTTPS and stored in Firebase/Google Cloud with industry-standard security
            practices. However, no method of electronic storage or transmission is 100% secure — we cannot
            guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-bold text-gray-900'>11. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries outside your own. Firebase/Google
            Cloud infrastructure may be located in various regions globally. By using our Services, you consent
            to such transfers. We take steps to ensure your data receives an adequate level of protection.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-bold text-gray-900'>12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of material changes within the
            app and update the &quot;Last updated&quot; date. Your continued use of the Services after changes are posted
            constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-bold text-gray-900'>13. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or wish to exercise your privacy rights, contact us at:
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
