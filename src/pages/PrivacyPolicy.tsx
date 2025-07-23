import React from "react";
import { ArrowLeft, Mail, Phone, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../assets/logo/logo.png';
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <main className="flex-1">
        {/* Header */}
        <div className="w-full py-8 px-4 sm:px-6 md:px-12 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Vipin Graphics - Your privacy is our priority
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="w-full py-12 px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-base sm:text-lg leading-relaxed">
                <p>
                  We respect your privacy and it is our responsibility to keep
                  your data secure.
                </p>

                <p>
                  When you use our website or services, we collect some personal
                  information.
                </p>

                <p>
                  The information we collect includes: name, mobile number,
                  email ID, and business-related details.
                </p>

                <p>
                  We use this data to provide you with services, answer your
                  queries, and send you offers.
                </p>

                <p>
                  We do not share your personal data with any third party
                  without your permission.
                </p>

                <p>
                  Our website is SSL secured (https://) which keeps your data
                  safe.
                </p>

                <p>
                  Our team keeps client data very secure. We do not take bank
                  details from anyone.
                </p>

                <p>
                  We use third-party tools like Google Ads, Facebook Ads, and
                  WhatsApp — which have their own privacy policies.
                </p>

                <p>
                  You can request to delete or update your data from us, or
                  opt-out of marketing messages if you wish.
                </p>

                <div className="bg-muted/50 rounded-lg p-6 my-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Contact Information
                  </h3>
                  <p className="mb-4">
                    If you need any information related to privacy, you can
                    contact us:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail size={20} className="text-primary" />
                      <a
                        href="mailto:vipingraphics1@gmail.com"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        vipingraphics1@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={20} className="text-primary" />
                      <a
                        href="tel:+918588009505"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        +91 8588009505
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe size={20} className="text-primary" />
                      <a
                        href="https://www.vipingraphics.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        www.vipingraphics.com
                      </a>
                    </div>
                  </div>
                </div>

                <p>
                  By using our website or service, you agree to this privacy
                  policy.
                </p>

                <p>
                  This policy may be updated at any time, and the new policy
                  will be available on this page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full py-12 px-4 sm:px-6 md:px-12 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <div className="md:col-span-2 space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-6 w-6 object-contain rounded-sm"
                  />
                </div>
                <span className="text-lg sm:text-xl font-bold text-foreground">
                  Vipin Graphics
                </span>
              </div>
              <p className="text-muted-foreground max-w-xs text-sm sm:text-base">
                Speacialized in Google Ads, Graphics, Fast Delivery, Lead
                Boosting Designs, and Web Development.
              </p>

              {/* Contact info */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Mail size={16} className="text-primary" />
                  <a
                    href="mailto:vipingraphics1@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base"
                  >
                    vipingraphics1@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Phone size={16} className="text-primary" />
                  <a
                    href="tel:+918588009505"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base"
                  >
                    +91-8588009505
                  </a>
                </div>
              </div>

              {/* Social links */}
              {/* <div className="flex items-center gap-3 sm:gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 9h4v12H2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div> */}
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="font-semibold text-base sm:text-lg text-foreground">
                Services
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <span className="text-muted-foreground text-sm sm:text-base">
                    Google Ads Graphics
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground text-sm sm:text-base">
                    YouTube Thumbnails
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground text-sm sm:text-base">
                    Social Media Ads
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground text-sm sm:text-base">
                    Local Business Promotions
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground text-sm sm:text-base">
                    Web Development
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground text-sm sm:text-base">
                    UI/UX Design
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-muted-foreground text-xs sm:text-sm gap-2 sm:gap-0">
            <div>© 2025 Vipin Graphics. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a
                href="/privacy-policy"
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
