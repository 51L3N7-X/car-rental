import { Card, CardContent } from '@/components/ui/card';
import { Clock, CreditCard, MapPin, Shield } from 'lucide-react';
import React from 'react';

export default function WhyUs() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose RentCar?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience the difference with our premium service and unmatched convenience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-800 dark:text-white">
            <CardContent className="pt-8">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600 dark:text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Fully Insured
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                All our vehicles come with comprehensive insurance coverage for your peace of mind.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-800 dark:text-white">
            <CardContent className="pt-8">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600 dark:text-green-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Round-the-clock customer support to assist you whenever you need help.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-800 dark:text-white">
            <CardContent className="pt-8">
              <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-purple-600 dark:text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Easy Payment
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Secure and flexible payment options including all major credit cards.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-800 dark:text-white">
            <CardContent className="pt-8">
              <div className="bg-orange-100 dark:bg-orange-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-orange-600 dark:text-orange-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Multiple Locations
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Pick up and drop off at any of our 50+ convenient locations nationwide.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
