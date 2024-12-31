'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  'Innovative solutions for your well-being',
  'Expert providers focused on your success',
  'Personalized care plans tailored to you',
  'Round-the-clock customer support',
  'Swift appointments within 24 hours',
];

export default function AboutUs() {
  return (
    <section className="py-16 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black-900">
              Empowering innovation and wellness at{' '}
              <span className="text-blue-600">PremierHelix LLC</span>
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900">
                  Certified Experts
                </h3>
                <p className="text-gray-600">
                  Our team is dedicated to delivering top-notch care with a focus on your unique journey.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900">
                  Personalized Solutions
                </h3>
                <p className="text-gray-600">
                  We craft individualized plans to help you achieve your goals.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-gray-300 flex items-center justify-center h-[400px] rounded-lg"
          >
            <span className="text-gray-600">Image Unavailable</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
