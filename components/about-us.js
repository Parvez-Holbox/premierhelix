'use client';

import { motion } from 'framer-motion';

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
                At Premier Helix Health, our mission is deeply personal: to provide accessible, compassionate, and innovative neurological and psychiatric care to children and adults, especially in underserved communities. As a team of dedicated professionals passionate about healthcare equity, we strive to deliver care that empowers individuals and families to live their fullest lives. Guided by a commitment to understanding and addressing each patient’s unique needs, we are redefining telehealth by combining cutting-edge technology with a human touch.
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
              alt="Our Mission"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
