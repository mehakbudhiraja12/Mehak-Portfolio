import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, ExternalLink, Loader2 } from 'lucide-react';
import { personalInfo } from '../data/socialLinks';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Functional mailto delivery fallback
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      window.open(mailtoUrl, '_blank');
      // Reset after a moment
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  const openDirectEmail = () => {
    window.location.href = `mailto:${personalInfo.email}?subject=Opportunity%20or%20Project%20Discussion`;
  };

  return (
    <div className="bg-dark-900/80 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-zinc-100">Send a Direct Message</h3>
          <p className="text-xs text-zinc-400 mt-1">
            Fill in your details or open your mail app directly.
          </p>
        </div>
        <button
          type="button"
          onClick={openDirectEmail}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
          title="Open default email application"
        >
          <Mail className="w-3.5 h-3.5 text-violet-400" />
          <span>Open Mail App</span>
        </button>
      </div>

      {submitSuccess && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Message prepared!</p>
            <p className="text-xs text-emerald-400/90 mt-0.5">
              Your message was compiled and redirected to your default email client for secure sending to {personalInfo.email}.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Name and Email row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-mono font-medium text-zinc-300 mb-1.5">
              Your Name <span className="text-violet-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Jane Doe"
              className={`w-full px-3.5 py-2.5 rounded-lg bg-dark-950/70 border text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all ${
                errors.name ? 'border-rose-500/80' : 'border-zinc-800 hover:border-zinc-700'
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-mono font-medium text-zinc-300 mb-1.5">
              Email Address <span className="text-violet-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="jane@example.com"
              className={`w-full px-3.5 py-2.5 rounded-lg bg-dark-950/70 border text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all ${
                errors.email ? 'border-rose-500/80' : 'border-zinc-800 hover:border-zinc-700'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-xs font-mono font-medium text-zinc-300 mb-1.5">
            Subject <span className="text-violet-400">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. Software Development Opportunity / Project Discussion"
            className={`w-full px-3.5 py-2.5 rounded-lg bg-dark-950/70 border text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all ${
              errors.subject ? 'border-rose-500/80' : 'border-zinc-800 hover:border-zinc-700'
            }`}
          />
          {errors.subject && (
            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.subject}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-mono font-medium text-zinc-300 mb-1.5">
            Message <span className="text-violet-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Hi Mehak, I came across your portfolio and would like to discuss..."
            className={`w-full px-3.5 py-2.5 rounded-lg bg-dark-950/70 border text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all resize-y ${
              errors.message ? 'border-rose-500/80' : 'border-zinc-800 hover:border-zinc-700'
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-violet-600 hover:bg-violet-500 disabled:bg-violet-600/50 text-white shadow-lg shadow-violet-600/20 active:scale-[0.99] transition-all focus:outline-none focus:ring-2 focus:ring-violet-400"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Preparing Message...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
