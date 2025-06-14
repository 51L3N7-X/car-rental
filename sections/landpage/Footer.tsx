import { Button } from "@/components/ui/button";
import {
  Car,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white dark:bg-white dark:text-gray-900 py-16 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Car className="h-8 w-8 text-blue-400 dark:text-blue-600" />
              <span className="text-2xl font-bold">RentCar</span>
            </div>
            <p className="text-gray-400 dark:text-gray-600 mb-6">
              Your trusted partner for premium car rental services. Experience
              the freedom of the road with our extensive fleet.
            </p>
            <div className="flex space-x-4">
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black p-2"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black p-2"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black p-2"
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors"
                >
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors"
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 dark:text-blue-600" />
                <span className="text-gray-400 dark:text-gray-600">
                  +967 77 777 777
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 dark:text-blue-600" />
                <span className="text-gray-400 dark:text-gray-600">
                  info@rentcar.com
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 dark:text-blue-600 mt-1" />
                <span className="text-gray-400 dark:text-gray-600">
                  Al Jazaer Street
                  <br />
                  Sana&apos;a, Yemen
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-600">
            © {new Date().getFullYear()} 51l3n7. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
