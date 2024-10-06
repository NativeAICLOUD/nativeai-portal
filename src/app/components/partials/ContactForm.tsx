'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { twMerge } from "tailwind-merge";
import { button } from "../utils/tw-variants";

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

function ContactUsForm({
  className
}: { className?: string; }) {
  const { register, handleSubmit, reset, formState: { isValid } } = useForm<ContactFormValidationSchema>({
    resolver: zodResolver(contactFormValidationSchema),
    mode: 'onChange',
  });

  const onSubmitForm = (data: ContactFormValidationSchema) => {
    if (!isValid) {
      return;
    }
    // sendMail(data);
    reset();
  }

  return (
    <form className={twMerge("contact-us max-w-3xl mx-auto bg-white p-10 rounded-28", className || '')}
      onSubmit={handleSubmit(onSubmitForm)}>
      <h2 className="mb-12 mt-2 text-center text-lg sm:text-2.5xl font-bold uppercase outline-0">
        Contact Us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="form-row flex flex-col gap-1">
          <label htmlFor="firstname" className="">First Name</label>
          <input id="firstname"
            className="border border-[#3A506B] rounded-14 px-4 w-full min-h-12 sm:min-h-10"
            type="text" placeholder="Your Firstname" {...register('firstname')} />
        </div>

        <div className="form-row flex flex-col gap-1">
          <label htmlFor="lastname" className="">Last Name</label>
          <input id="lastname" className="border border-[#3A506B] rounded-14 px-4 w-full min-h-12 sm:min-h-10"
            type="text" placeholder="Your Lastname" {...register('lastname')} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="form-row flex flex-col gap-1">
          <label htmlFor="mobilePhone" className="">Mobile Phone</label>
          <input id="mobilePhone" className="border border-[#3A506B] rounded-14 px-4 w-full min-h-12 sm:min-h-10"
            type="text" placeholder="Your Mobile phone number" {...register('phone')} />
        </div>

        <div className="form-row flex flex-col gap-1">
          <label htmlFor="email" className="">Email</label>
          <input id="email" className="border border-[#3A506B] rounded-14 px-4 w-full min-h-12 sm:min-h-10"
            type="email" placeholder="Your E-mail" {...register('email')} />
        </div>
      </div>

      <div className="form-row flex flex-col gap-1 mb-6">
        <label htmlFor="subject" className="">Subject</label>
        <input id="subject" className="border border-[#3A506B] rounded-14 px-4 w-full min-h-12 sm:min-h-10"
          type="text" placeholder="Subject here..." {...register('subject')} />
      </div>

      <div className="form-row flex flex-col gap-1 mb-6">
        <label htmlFor="message" className="">Message</label>
        <textarea id="message" className="border border-[#3A506B] p-2 rounded-14 px-4 w-full min-h-12 sm:min-h-10"
          rows={3} placeholder="Message here..." {...register('message')} />
      </div>

      <div className="flex justify-center">
        <button type="submit" className={twMerge(`${button({ size: 'md', color: 'primary', icon: 'md' })}`, 'min-w-0 px-6 md:px-10')}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactUsForm;
