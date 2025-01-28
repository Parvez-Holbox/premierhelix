'use client';

import { motion } from 'framer-motion';

export default function OurStory() {
  return (
    <section className="py-16 bg-gray-50" id="our-story">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black-900 text-center">
            Our <span className="text-blue-600">Story</span>
            </h2>

          <div className="space-y-6 text-gray-600">
            <p>
              Premier Helix Health is more than just a telehealth platform—it’s
              the culmination of a shared vision to transform how neurological
              and psychiatric care is delivered. As a team, we understand the
              barriers many patients face when seeking care, whether due to
              geography, stigma, or limited resources. This understanding drives
              everything we do.
            </p>
            <p>
              We at Premier Helix Health are passionate about bringing
              world-class care to people who need it most. Inspired by years of
              working with children and adults in rural and underserved
              communities, we envisioned a platform that would bridge the gap
              in care—offering hope, healing, and expertise to anyone, anywhere.
            </p>
            <p>
              Our expertise lies in addressing complex neurological and
              psychiatric conditions, ranging from childhood developmental
              disorders to adult migraines and mood disorders. Every patient’s
              story is unique, and so is our approach. Through personalized
              treatment plans, innovative telehealth technology, and a
              compassionate team of experts, we make high-quality care
              accessible without the burden of travel, stigma, or long wait
              times.
            </p>
            <p>
              At Premier Helix Health, care is not just about treatment—it’s
              about connection. It’s about listening to a mother’s concerns
              about her child’s seizures, offering reassurance to someone
              battling anxiety, or helping a patient find clarity amid the chaos
              of mental health challenges. With every consultation, we aim to
              empower our patients and remind them that they are not alone in
              their journey.
            </p>
            <p>
              Today, Premier Helix Health stands as a beacon of hope for
              families across the country. We are proud to be a platform built
              on the principles of understanding, compassion, and innovation.
              Together, we are transforming healthcare delivery, creating a
              future where everyone, no matter their background or location, can
              access the care they need to thrive.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
