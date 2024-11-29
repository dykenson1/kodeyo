import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* Header */}
        <header className="mb-4 flex items-center justify-between py-4 md:py-8">
          {/* Logo */}
          <Link href="/" aria-label="logo" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl">
            <svg
              width="95"
              height="94"
              viewBox="0 0 95 94"
              className="h-auto w-6 text-indigo-500"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg>
            Flowrift
          </Link>
          {/* Navigation */}
          <nav className="hidden gap-12 lg:flex">
            <Link href="#" className="text-lg font-semibold text-indigo-500">
              Home
            </Link>
            <Link href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
              Features
            </Link>
            <Link href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
              Pricing
            </Link>
            <Link href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
              About
            </Link>
          </nav>
          {/* Buttons */}
          <Link
            href="#"
            className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
          >
            Contact Sales
          </Link>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Menu
          </button>
        </header>

        {/* Hero Section */}
        <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
          {/* Background Image */}
          {/* <Image
            src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500"
            alt="Photo by Fakurian Design"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="absolute inset-0"
          /> */}
          {/* Overlay */}
          <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>
          {/* Text */}
          <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
            <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">
              Very proud to introduce
            </p>
            <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
              Revolutionary way to build the web
            </h1>
            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
              <Link
                href="#"
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Start now
              </Link>
              <Link
                href="#"
                className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
              >
                Take tour
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
