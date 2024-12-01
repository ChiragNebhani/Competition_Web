import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-[#070B13] py-12 text-[#D0D5DD]">
            <div className="container mx-auto px-6 lg:px-10">
                {/* Top Section */}
                <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-start">
                    {/* About Section */}
                    <div className="text-center lg:text-left lg:max-w-[40%]">
                        <h2 className="text-2xl font-semibold mb-4">Stay Connected</h2>
                        <p className="text-sm text-[#9CA3AF]">
                            Join our community to stay updated with the latest trends and events in robotics and AI.
                        </p>
                    </div>

                    {/* Newsletter Signup */}
                    <form
                        className="mt-8 flex w-full max-w-md flex-col gap-4 lg:mt-0 lg:w-auto lg:flex-row"
                        aria-label="Subscribe to our newsletter"
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-md border border-[#344054] bg-[#1A1F2B] px-4 py-3 text-sm placeholder-[#667085] focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <button
                            className="w-full rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 lg:w-auto"
                            type="submit"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Divider */}
                <div className="my-8 h-[1px] w-full bg-[#344054]" />

                {/* Social Links & Footer Bottom */}
                <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Twitter"
                            className="text-[#667085] hover:text-blue-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                width="28"
                                height="28"
                            >
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 2a9 9 0 0 1-2.84 1.08A4.48 4.48 0 0 0 16.29 2a4.5 4.5 0 0 0-4.5 4.5c0 .35.04.69.11 1A12.84 12.84 0 0 1 3 3s-4 9 5 13a13.38 13.38 0 0 1-7 2c9 5.5 20 0 20-11.5a4.48 4.48 0 0 0-.08-.82A10.55 10.55 0 0 0 23 3z" />
                            </svg>
                        </a>
                        <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit LinkedIn"
                            className="text-[#667085] hover:text-blue-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                width="28"
                                height="28"
                            >
                                <path d="M4.98 3.5A2.5 2.5 0 1 1 2.5 6a2.5 2.5 0 0 1 2.48-2.5zM3 8h3.93v12H3zm7.07 0h3.72v1.71c.52-.93 1.76-1.92 3.63-1.92 3.88 0 4.58 2.55 4.58 5.87v6.34h-3.93v-5.63c0-1.35-.03-3.09-1.88-3.09-1.89 0-2.18 1.47-2.18 2.99v5.73H10z" />
                            </svg>
                        </a>
                        <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Telegram"
                            className="text-[#667085] hover:text-blue-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                width="28"
                                height="28"
                            >
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.07 8.61l-1.26 5.97c-.16.69-.52.86-1.07.53l-2.94-2.17-1.42 1.37c-.15.15-.28.28-.58.28l.21-3.02 5.5-4.95c.24-.21-.05-.34-.38-.13l-6.77 4.27-2.92-.91c-.63-.2-.64-.63.13-.93l11.41-4.4c.52-.21.98.12.81.88z" />
                            </svg>
                        </a>
                    </div>

                    {/* Footer Text */}
                    <div className="text-sm text-center text-[#667085]">
                        &copy; {new Date().getFullYear()} LERA team. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};
