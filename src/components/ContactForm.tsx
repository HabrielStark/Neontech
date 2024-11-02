import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="peer w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-transparent"
            placeholder="Name"
            required
          />
          <label
            htmlFor="name"
            className="absolute left-2 -top-2.5 bg-black px-2 text-sm text-gray-400 transition-all duration-200
              peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-4
              peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-blue-500"
          >
            Name
          </label>
        </div>

        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="peer w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-transparent"
            placeholder="Email"
            required
          />
          <label
            htmlFor="email"
            className="absolute left-2 -top-2.5 bg-black px-2 text-sm text-gray-400 transition-all duration-200
              peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-4
              peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-blue-500"
          >
            Email
          </label>
        </div>

        <div className="relative">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="peer w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none placeholder-transparent"
            placeholder="Message"
            required
          />
          <label
            htmlFor="message"
            className="absolute left-2 -top-2.5 bg-black px-2 text-sm text-gray-400 transition-all duration-200
              peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-4
              peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-blue-500"
          >
            Message
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg
          hover:from-blue-600 hover:to-purple-600 transition-all duration-200
          flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed
          ${submitStatus === 'success' ? 'bg-green-500' : ''}
          ${submitStatus === 'error' ? 'bg-red-500' : ''}`}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            {submitStatus === 'success' ? 'Message Sent!' : 'Send Message'}
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

      {submitStatus === 'error' && (
        <p className="text-red-500 text-sm text-center">
          An error occurred. Please try again.
        </p>
      )}
    </form>
  );
}