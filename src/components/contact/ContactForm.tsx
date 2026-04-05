'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle, Loader2 } from 'lucide-react'
import clsx from 'clsx'

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.enum(
    ['Refugee Claim', 'Family Sponsorship', 'Permanent Residency', 'Work Permit', 'Study Permit', 'Visitor Visa', 'Citizenship', 'Appeals & Hearings', 'Other'],
    { errorMap: () => ({ message: 'Please select a subject' }) }
  ),
  message: z.string().min(10, 'Please describe your situation (at least 10 characters)'),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to proceed' }),
  }),
})

type ContactFormData = z.infer<typeof contactSchema>

const inputClasses =
  'w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-800 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-colors text-sm'

const labelClasses = 'block text-sm font-medium text-navy-700 mb-1.5'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(data: ContactFormData) {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmitted(true)
      }
    } catch (err) {
      console.error('Form submission error:', err)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-navy-800 mb-2">
          Message Sent!
        </h3>
        <p className="text-navy-500 max-w-sm">
          Thank you for reaching out. One of our lawyers will be in touch with you
          within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClasses}>
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="Jane Smith"
          className={clsx(inputClasses, errors.name && 'border-red-400 focus:ring-red-400')}
          {...register('name')}
        />
        {errors.name && (
          <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="jane@example.com"
            className={clsx(inputClasses, errors.email && 'border-red-400 focus:ring-red-400')}
            {...register('email')}
          />
          {errors.email && (
            <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone <span className="text-navy-400 font-normal">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+1 (604) 555-0123"
            className={inputClasses}
            {...register('phone')}
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className={labelClasses}>
          Subject <span className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          className={clsx(
            inputClasses,
            errors.subject && 'border-red-400 focus:ring-red-400'
          )}
          defaultValue=""
          {...register('subject')}
        >
          <option value="" disabled>
            Select the area of your inquiry
          </option>
          <option>Refugee Claim</option>
          <option>Family Sponsorship</option>
          <option>Permanent Residency</option>
          <option>Work Permit</option>
          <option>Study Permit</option>
          <option>Visitor Visa</option>
          <option>Citizenship</option>
          <option>Appeals & Hearings</option>
          <option>Other</option>
        </select>
        {errors.subject && (
          <p className="text-red-600 text-xs mt-1">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClasses}>
          How can we help? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Please briefly describe your situation and what you are hoping to achieve..."
          className={clsx(
            inputClasses,
            'resize-none',
            errors.message && 'border-red-400 focus:ring-red-400'
          )}
          {...register('message')}
        />
        {errors.message && (
          <p className="text-red-600 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Consent */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            className="mt-0.5 w-4 h-4 rounded border-navy-300 text-gold-400 focus:ring-gold-400 flex-shrink-0"
            {...register('consent')}
          />
          <span className="text-sm text-navy-600">
            I understand that submitting this form does not create a lawyer-client
            relationship and that the information I provide will be kept confidential.{' '}
            <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.consent && (
          <p className="text-red-600 text-xs mt-1">{errors.consent.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-4 bg-gold-400 text-navy-900 rounded-lg font-semibold text-base hover:bg-gold-300 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  )
}
