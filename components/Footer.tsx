import Link from "next/link";
import { Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">

      <div className="max-w-6xl mx-auto px-6">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">
              FINOVA
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Modern finance made simple. Manage, track, and grow your money with confidence.
            </p>
          </div>

          {/* PRODUCT */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="#features" className="hover:text-indigo-600">Features</Link></li>
              <li><Link href="#testimonials" className="hover:text-indigo-600">Testimonials</Link></li>
              <li><Link href="#cta" className="hover:text-indigo-600">Get Started</Link></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="#" className="hover:text-indigo-600">About</Link></li>
              <li><Link href="#" className="hover:text-indigo-600">Careers</Link></li>
              <li><Link href="#" className="hover:text-indigo-600">Contact</Link></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Follow us</h4>
            <div className="flex gap-4 text-slate-500">
              <a href="#" className="hover:text-indigo-600"><Twitter size={20} /></a>
              <a href="#" className="hover:text-indigo-600"><Github size={20} /></a>
              <a href="#" className="hover:text-indigo-600"><Linkedin size={20} /></a>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Finova. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-indigo-600">Privacy Policy</Link>
            <Link href="#" className="hover:text-indigo-600">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}