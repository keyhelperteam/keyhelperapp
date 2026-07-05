import Link from 'next/link';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const CTABanner = () => {
  return (
    <div className='py-24 bg-gradient-to-b from-white to-green-50' data-aos="fade-up">
      <div className='w-[80%] max-w-4xl mx-auto text-center'>
        <div className='bg-gradient-to-br from-green-600 to-emerald-600 rounded-[2.5rem] p-10 md:p-16 shadow-xl shadow-green-200 relative overflow-hidden'>
          <div className='absolute inset-0 bg-[length:20px_20px] opacity-10' style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Ccircle cx='2' cy='2' r='1' fill='white'/%3E%3C/svg%3E")`,
          }} />
          <div className='relative'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Ready to Simplify Your Life?
            </h2>
            <p className='text-green-100 text-lg max-w-xl mx-auto mb-10 leading-relaxed'>
              Join thousands of users who&apos;ve replaced a dozen apps with one. Download KeyHelper today.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <div className='relative inline-block'>
                <Link href="/android-beta">
                  <img src={`${basePath}/images/google_play_app.png`} alt="Get on Google Play" width={160} height={54} className='cursor-pointer hover:opacity-90 transition-opacity' />
                </Link>
                <span className='absolute -top-2 -right-2 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full'>Beta</span>
              </div>
              <a href="https://apps.apple.com/us/app/keyhelper/id1672467977" target="_blank" rel="noopener noreferrer">
                <img src={`${basePath}/images/apple_store_app.png`} alt="Download on App Store" width={160} height={54} className='cursor-pointer hover:opacity-90 transition-opacity' />
              </a>
            </div>
            <p className='text-green-200 text-sm mt-6'>
              Available on iOS. Android beta now open for sign-ups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;
