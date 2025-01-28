'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const conditions = [
  {
    title: 'A Pioneering Focus on Child Neurology',
    description: [
      'Premier Helix Health specializes in pediatric neurology, addressing conditions like autism, developmental delays, epilepsy, and chronic pain syndromes.',
      'We provide tailored, compassionate care that empowers families and supports children in reaching developmental milestones.',
    ],
    image: '/images/services/Child Neurology.jpg',
    href: '#contact',
  },
  {
    title: 'Addressing a Critical Gap',
    description: [
      'Premier Helix Health bridges care gaps by reducing long wait times and eliminating geographical barriers.',
      'Through advanced telehealth, we ensure timely diagnoses and interventions that transform outcomes and improve quality of life.',
    ],
    image: '/images/services/stroke.jpg',
    href: '#contact',
  },
  {
    title: 'Empowering Families, Transforming Lives',
    description: [
      'We empower caregivers with education, advocacy, and emotional support to navigate their child’s health journey with confidence.',
      'Our focus extends beyond treatment to improve the overall well-being of families.',
    ],
    image: '/images/services/Empowering Families.jpg',
    href: '#contact',
  },
  {
    title: 'Movement Disorders',
    description: [
      'Specialized care for conditions like Parkinson’s disease and dystonia, focusing on improving motor symptoms and quality of life.',
      'We provide medication management and guidance for integrating physical therapy and lifestyle changes.',
    ],
    image: '/images/services/movement.jpg',
    href: '#contact',
  },
  {
    title: 'Innovation Meets Compassion',
    description: [
      'Combining cutting-edge technology with empathy, we ensure high-quality care for underserved and remote communities.',
      'We prioritize patient connection and address barriers to access for marginalized populations.',
    ],
    image: '/images/services/dementia.jpg',
    href: '#contact',
  },
  {
    title: 'Migraines and Other Headache Disorders',
    description: [
      'Accurate diagnosis and personalized treatment plans for managing chronic migraines and tension headaches.',
      'Strategies include preventive medications and solutions tailored to reduce headache frequency.',
    ],
    image: '/images/services/ocd.jpg',
    href: '#contact',
  },
  {
    title: 'Amyotrophic Lateral Sclerosis (ALS)',
    description: [
      'Comprehensive diagnosis and care for ALS using advanced diagnostic tools like EMG and nerve conduction studies.',
      'Focus on managing symptoms and improving quality of life for patients and families.',
    ],
    image: '/images/services/Amyotrophic Lateral Sclerosis.jpg',
    href: '#contact',
  },
  {
    title: 'A Mission-Driven Approach to the Future',
    description: [
      'Premier Helix Health is transforming telehealth by addressing the intersection of child neurology, adult neurology, and psychiatry.',
      'Our mission is to deliver equitable, accessible, and specialized care to underserved communities.',
    ],
    image: '/images/services/other.jpg',
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
              className="group relative"
            >
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden h-[300px] w-full transition-transform transform group-hover:scale-105 duration-300">
                <div className="relative h-4/6">
                  {condition.image ? (
                    <img
                      src={condition.image}
                      alt={condition.title}
                      className="object-cover h-full w-full"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-gray-300">
                      <span className="text-gray-600">Image Unavailable</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-black-900">
                    {condition.title}
                  </h3>
                </div>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-98 p-4 rounded-2xl shadow-md scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10">
                <h3 className="text-xl font-bold text-black mb-4 text-center">
                  {condition.title}
                </h3>
                <ul className="list-disc list-inside text-sm text-gray-700 text-left">
                  {condition.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
