import React from "react";

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Rent a car in 3 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Choose Your Car
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Browse our extensive fleet and select the perfect vehicle for your
              needs.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Book & Pay
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Complete your reservation with our secure payment system in just
              minutes.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Pick Up & Drive
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Collect your car from any of our locations and start your journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
