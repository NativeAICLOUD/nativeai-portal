'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { twMerge } from "tailwind-merge";
import { button } from "../utils/tw-variants";
import { Constants } from "@/Constants";

const subjectOptions = [
  'AI Agents & LLMs',
  'Azure Cloud Migration',
  'Managed Services',
  'Cloud Native Development',
  'DevOps on Azure',
  'Data Lifecycle Management',
  'Other',
];

const contactFormValidationSchema = z
  .object({
    firstname: z.string()
      .min(1, { message: "Firstname is required" })
      .refine((value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value), 'Firstname should contain only alphabets.'),
    lastname: z.string()
      .min(1, { message: "Lastname is required" })
      .refine((value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value), 'Lastname should contain only alphabets.'),
    phone: z.string()
      .min(1, { message: "Phone number is required" }),
    email: z.string()
      .min(1, { message: "Email is required." })
      .email({ message: "Must be a valid email" }),
    subject: z.string()
    .min(3, { message: "Subject is required" }),
    message: z.string()
      .min(3, { message: "Message is required" })
  });

type ContactFormValidationSchema = z.infer<typeof contactFormValidationSchema>;

const inputCls = (hasError: boolean) =>
  `w-full min-h-12 sm:min-h-10 rounded-14 border bg-white px-4 outline-none transition-colors ${
    hasError
      ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200'
      : 'border-[#e6e6e6] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20'
  }`;

function ContactUsForm({
  className
}: { className?: string; }) {
  const { register, handleSubmit, reset, formState: { errors, isValid, isSubmitting } } = useForm<ContactFormValidationSchema>({
    resolver: zodResolver(contactFormValidationSchema),
    mode: 'onChange',
  });
  const [status, setStatus] = useState<'idle' | 'submitted' | 'error'>('idle');

  const onSubmitForm = async (data: ContactFormValidationSchema) => {
    if (!isValid) {
      return;
    }
    setStatus('idle');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${data.firstname} ${data.lastname}`.trim(),
          email: data.email,
          phone: data.phone,
          topic: data.subject,
          message: data.message,
        }),
      });
      if (!res.ok) throw new Error('server');
      setStatus('submitted');
      reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form
      className={twMerge("contact-us font-switzer max-w-3xl mx-auto bg-white p-8 sm:p-10 rounded-28", className || '')}
      onSubmit={handleSubmit(onSubmitForm)}
      noValidate
    >
      <h2 className="mb-12 mt-2 text-center text-lg sm:text-2.5xl font-bold uppercase outline-0">
        Let&apos;s Talk
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="form-row flex flex-col gap-1">
          <label htmlFor="firstname" className="text-[13px] font-medium text-[#374151]">First Name</label>
          <input id="firstname"
            className={inputCls(!!errors.firstname)}
            type="text" placeholder="Your Firstname" {...register('firstname')} />
          {errors.firstname && <p className="text-xs text-red-500">{errors.firstname.message}</p>}
        </div>

        <div className="form-row flex flex-col gap-1">
          <label htmlFor="lastname" className="text-[13px] font-medium text-[#374151]">Last Name</label>
          <input id="lastname" className={inputCls(!!errors.lastname)}
            type="text" placeholder="Your Lastname" {...register('lastname')} />
          {errors.lastname && <p className="text-xs text-red-500">{errors.lastname.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="form-row flex flex-col gap-1">
          <label htmlFor="mobilePhone" className="text-[13px] font-medium text-[#374151]">Mobile Phone</label>
          <input id="mobilePhone" className={inputCls(!!errors.phone)}
            type="tel" placeholder="Your Mobile phone number" {...register('phone')} />
          {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
        </div>

        <div className="form-row flex flex-col gap-1">
          <label htmlFor="email" className="text-[13px] font-medium text-[#374151]">Email</label>
          <input id="email" className={inputCls(!!errors.email)}
            type="email" placeholder="Your E-mail" {...register('email')} />
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className="form-row flex flex-col gap-1 mb-6">
        <label htmlFor="subject" className="text-[13px] font-medium text-[#374151]">Subject</label>
        <select id="subject" defaultValue="" className={inputCls(!!errors.subject)} {...register('subject')}>
          <option value="" disabled>Choose a topic…</option>
          {subjectOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        {errors.subject && <p className="text-xs text-red-500">{errors.subject.message}</p>}
      </div>

      <div className="form-row flex flex-col gap-1 mb-6">
        <label htmlFor="message" className="text-[13px] font-medium text-[#374151]">Message</label>
        <textarea id="message" className={twMerge(inputCls(!!errors.message), 'p-2 resize-none')}
          rows={4} placeholder="Message here..." {...register('message')} />
        {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
      </div>

      <div className="flex flex-col items-center gap-3 pt-4 pb-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className={twMerge(`${button({ size: 'md', color: 'primary', icon: 'md' })}`, 'min-w-0 px-6 md:px-10 disabled:opacity-60')}
        >
          {isSubmitting ? 'Sending…' : 'Submit'}
        </button>
        {status === 'submitted' && (
          <p className="text-sm text-[#15803D]">Thanks — we&apos;ll get back to you within one business day.</p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-500">Something went wrong. Please email us directly at {Constants.MAIL}.</p>
        )}
      </div>
    </form>
  );
}

export default ContactUsForm;
