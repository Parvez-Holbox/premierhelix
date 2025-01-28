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
              <span className="text-blue-600">Premier Helix Health</span>
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  Premier Helix Health provides accessible, compassionate, and
                  innovative neurological and psychiatric care to children and
                  adults, with a focus on underserved communities. By combining
                  cutting-edge technology with a personal touch, we empower
                  families to thrive through equitable and tailored care.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900">
                  Our Story
                </h3>
                <p className="text-gray-600">
                  Premier Helix Health was founded to transform how neurological
                  and psychiatric care is delivered. With a deep understanding
                  of the barriers faced by patients—whether geography, stigma,
                  or limited resources—we aim to bridge these gaps. Our approach
                  prioritizes connection, offering hope, expertise, and
                  personalized care plans that address complex conditions.
                  Through innovation and compassion, we strive to make
                  high-quality care accessible to everyone, anywhere.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <img
              src="/images/services/about-us.jpg" // Replace with your image path
              alt="About Us"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
