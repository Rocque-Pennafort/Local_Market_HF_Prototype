import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipientName: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, recipientName }) => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setMessage('');
      setName('');
      setEmail('');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl p-6 max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#2C2C2C]">Contact {recipientName}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600" aria-label="Close">
            <X size={24} />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">Message Sent!</h3>
            <p className="text-gray-600">We'll notify {recipientName} about your inquiry.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-[#2C2C2C] mb-2">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-[#D4745F] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#2C2C2C] mb-2">Your Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-[#D4745F] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#2C2C2C] mb-2">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-[#D4745F] focus:outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#D4745F] text-white py-3 rounded-xl hover:bg-[#c06550] transition-colors font-semibold flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
