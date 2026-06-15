import { Outlet, Link, useLocation } from "react-router";
import { Button } from "../components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Root() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Risk Assessment", path: "/risk-assessment" },
    { name: "Screening", path: "/screening" },
    { name: "Self-Exam", path: "/self-exam" },
    { name: "Image Analysis", path: "/image-analysis" },
    { name: "Resources", path: "/resources" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-pink-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-2 rounded-full">
                <Heart className="size-6 text-white fill-white" />
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-900">Breast Health Awareness</h1>
                <p className="text-xs text-pink-600">Early Detection Saves Lives</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-pink-600 ${
                    location.pathname === item.path
                      ? "text-pink-600"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button size="sm" className="bg-pink-600 hover:bg-pink-700">
                Emergency: 100
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pt-4 border-t border-pink-100 flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-pink-100 text-pink-600"
                      : "text-gray-700 hover:bg-pink-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button size="sm" className="bg-pink-600 hover:bg-pink-700 mt-2">
                Emergency: 100
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-white mb-4">Breast Health Awareness</h3>
              <p className="text-sm">
                Dedicated to providing information and resources for breast cancer
                detection and prevention. Early detection saves lives.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Quick Links</h3>
              <div className="flex flex-col gap-2 text-sm">
                <Link to="/about" className="hover:text-pink-400 transition-colors">
                  About Breast Cancer
                </Link>
                <Link to="/screening" className="hover:text-pink-400 transition-colors">
                  Screening Methods
                </Link>
                <Link to="/self-exam" className="hover:text-pink-400 transition-colors">
                  Self-Examination Guide
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Disclaimer</h3>
              <p className="text-sm">
                This website provides educational information only and is not a
                substitute for professional medical advice. Always consult with
                qualified healthcare providers for diagnosis and treatment.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>© 2026 Breast Health Awareness. For educational purposes only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
