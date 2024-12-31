'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const conditions = [
  {
    title: 'ADHD',
    image: '', // No image provided
    href: '#contact',
  },
  {
    title: 'Anxiety',
    image: '', // No image provided
    href: '#contact',
  },
  {
    title: 'Weight Loss',
    image: '', // No image provided
    href: '#contact',
  },
  {
    title: 'Depression',
    image: '', // No image provided
    href: '#contact',
  },
  {
    title: 'Insomnia',
    image: '', // No image provided
    href: '#contact',
  },
  {
    title: 'OCD',
    image: '', // No image provided
    href: '#contact',
  },
  {
    title: 'Stress',
    image: '', // No image provided
    href: '#contact',
  },
  {
    title: 'Other',
    image: '', // No image provided
    href: '#contact',
  },
];

export default function ConditionsGrid() {
  return (
    <section className="py-16 bg-gray-50" id="conditions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12"
        >
          Discover How We Can Help
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {conditions.map((condition, index) => (
            <motion.div
              key={condition.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={condition.href}
                className="group block bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="aspect-[4/3] relative bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600">Image Unavailable</span>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-black-900">
                    {condition.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-blue-600 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
