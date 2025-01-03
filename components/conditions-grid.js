'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const conditions = [
  {
    title: 'Epilepsy Management',
    description: [
      'Comprehensive medication reviews to ensure effective seizure control.',
      'Guidance on lifestyle modifications to reduce seizure triggers.',
      'Support with treatment adjustments based on your individual needs.',
    ],
    image: '/images/services/epilepsy.jpg',
    href: '#contact',
  },
  {
    title: 'Stroke Medication Management',
    description: [
      'Expert monitoring of anticoagulant and antiplatelet medications to prevent future strokes.',
      'Blood pressure and cholesterol management for improved vascular health.',
      'Ongoing support for cognitive and physical rehabilitation.',
    ],
    image: '/images/services/stroke.jpg',
    href: '#contact',
  },
  {
    title: 'Headache Treatment',
    description: [
      'Accurate diagnosis of migraines, cluster headaches, and tension headaches.',
      'Development of personalized treatment plans, including preventive and abortive medications.',
      'Strategies for managing chronic headaches and reducing frequency.',
    ],
    image: '/images/services/headache.jpg',
    href: '#contact',
  },
  {
    title: 'Movement Disorders',
    description: [
      'Specialized care for Parkinson’s disease, essential tremor, and dystonia.',
      'Medication management to improve motor symptoms and quality of life.',
      'Guidance on integrating physical therapy and lifestyle changes into your care plan.',
    ],
    image: '/images/services/movement.jpg',
    href: '#contact',
  },
  {
    title: 'Dementia Care',
    description: [
      'Early diagnosis and intervention to slow cognitive decline.',
      'Medication management to address symptoms like memory loss and confusion.',
      'Support for caregivers with resources and practical advice for daily challenges.',
    ],
    image: '/images/services/dementia.jpg',
    href: '#contact',
  },
  {
    title: 'Migraines and Other Headache Disorders',
    description: [
      'Diagnosis often depends on patient history and symptoms.',
      'Imaging like MRI or CT may rule out structural issues.',
      'Routine physical exams are minimal unless other symptoms emerge.',
    ],
    image: '/images/services/ocd.jpg',
    href: '#contact',
  },
  {
    title: 'Amyotrophic Lateral Sclerosis (ALS)',
    description: [
      'Diagnosis involves EMG, nerve conduction studies, and patient-reported symptoms.',
      'Routine physical exams are less emphasized compared to other diagnostic tools.',
    ],
    image: '/images/services/stress.jpg',
    href: '#contact',
  },
  {
    title: 'Multiple Sclerosis (MS)',
    description: [
      'MRI is the primary diagnostic tool to detect lesions in the CNS.',
      'Routine check-ups focus more on symptom management rather than physical exams.',
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
