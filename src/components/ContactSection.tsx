'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';

export default function ContactSection() {
  const t = useTranslations('contact');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email'),
    phone: z.string().min(9, 'Invalid phone'),
    subject: z.string().min(5, 'Subject must be at least 5 characters'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactFormData) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      reset();
    } catch {
      // Form submission failed
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-28 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <CheckCircle className="h-14 w-14 text-accent-light mx-auto mb-6" />
            <h2 className="font-serif text-3xl text-white mb-4">{t('form.success.title')}</h2>
            <p className="text-stone-400 mb-8">
              {t('form.success.description')}
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-white border border-stone-600 px-8 py-3 text-sm tracking-wide hover:border-white transition-colors"
            >
              {t('form.success.sendAnother')}
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative">
      {/* Seamless transition gradient */}
      <div className="h-24 bg-gradient-to-b from-warm-white to-stone-100"></div>

      <div className="bg-stone-100 pb-20 sm:pb-28 lg:pb-36">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 mb-6 leading-[1.1]">
                {t('title')}
              </h2>
              <div className="w-12 h-px bg-accent mb-8"></div>
              <p className="text-base text-stone-600 mb-4 leading-relaxed">
                {t('description1')}
              </p>
              <p className="text-base text-stone-500 mb-4 leading-relaxed">
                {t('description2')}
              </p>
              <p className="text-base text-stone-500 mb-10 leading-relaxed">
                {t('description3')}
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-accent-dark" />
                  </div>
                  <div>
                    <h3 className="text-sm text-stone-900">{t('info.location')}</h3>
                    <p className="text-stone-500 text-sm">{t('info.locationValue')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-accent-dark" />
                  </div>
                  <div>
                    <h3 className="text-sm text-stone-900">{t('info.email')}</h3>
                    <p className="text-stone-500 text-sm">{t('info.emailValue')}</p>
                  </div>
                </div>
              </div>

              {/* Team Contacts */}
              <div className="mt-12 pt-8 border-t border-stone-200">
                <h3 className="font-serif text-xl text-stone-900 mb-8">{t('info.team.title')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm text-stone-900">{t('info.team.andres.name')}</h4>
                      <p className="text-xs text-stone-400">{t('info.team.andres.role')}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 text-stone-400" />
                      <span className="text-stone-500 text-sm">{t('info.team.andres.phone')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5 text-stone-400" />
                      <span className="text-stone-500 text-sm">{t('info.team.andres.email')}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm text-stone-900">{t('info.team.lain.name')}</h4>
                      <p className="text-xs text-stone-400">{t('info.team.lain.role')}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 text-stone-400" />
                      <span className="text-stone-500 text-sm">{t('info.team.lain.phone')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5 text-stone-400" />
                      <span className="text-stone-500 text-sm">{t('info.team.lain.email')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 sm:p-10 border border-stone-200"
            >
              <h3 className="font-serif text-xl text-stone-900 mb-8">{t('form.title')}</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-[13px] sm:text-xs text-stone-500 tracking-wide uppercase mb-2">
                    {t('form.name')} *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors text-sm text-stone-900 outline-none"
                    placeholder={t('form.placeholders.name')}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-[13px] sm:text-xs text-stone-500 tracking-wide uppercase mb-2">
                    {t('form.email')} *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors text-sm text-stone-900 outline-none"
                    placeholder={t('form.placeholders.email')}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[13px] sm:text-xs text-stone-500 tracking-wide uppercase mb-2">
                    {t('form.phone')} *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors text-sm text-stone-900 outline-none"
                    placeholder={t('form.placeholders.phone')}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[13px] sm:text-xs text-stone-500 tracking-wide uppercase mb-2">
                    {t('form.subject')} *
                  </label>
                  <input
                    {...register('subject')}
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors text-sm text-stone-900 outline-none"
                    placeholder={t('form.placeholders.subject')}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-[13px] sm:text-xs text-stone-500 tracking-wide uppercase mb-2">
                    {t('form.message')} *
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors text-sm text-stone-900 resize-none outline-none"
                    placeholder={t('form.placeholders.message')}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-stone-900 text-white px-8 py-4 text-sm tracking-wide hover:bg-stone-800 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      {t('form.sending')}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      {t('form.submit')}
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
