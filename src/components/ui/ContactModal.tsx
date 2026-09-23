import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, MapPin, Copy, Check, Linkedin, Github } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg rounded-[32px] bg-[#121212] border-2 border-[#D7E2EA]/30 p-6 sm:p-8 text-[#D7E2EA] shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#D7E2EA] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs uppercase font-mono tracking-widest text-[#BBCCD7]">
              Get In Touch
            </span>
            <h3 className="font-kanit font-black text-2xl sm:text-3xl uppercase tracking-tight mt-1 mb-2">
              Contact Anirudh
            </h3>
            <p className="text-sm font-kanit text-[#D7E2EA]/70 mb-6">
              Feel free to reach out for software engineering roles, collaborations, or tech talks.
            </p>

            <div className="space-y-3 font-kanit">
              {/* Email */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#BBCCD7]" />
                  <div>
                    <span className="text-xs text-[#D7E2EA]/50 block">Email</span>
                    <a
                      href="mailto:anirudhkumar2004@gmail.com"
                      className="text-sm font-medium hover:underline text-[#D7E2EA]"
                    >
                      anirudhkumar2004@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('anirudhkumar2004@gmail.com', 'email')}
                  className="p-2 rounded-xl hover:bg-white/10 text-xs transition-colors"
                  title="Copy email"
                >
                  {copied === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                <MapPin className="w-5 h-5 text-[#BBCCD7]" />
                <div>
                  <span className="text-xs text-[#D7E2EA]/50 block">Location</span>
                  <span className="text-sm font-medium text-[#D7E2EA]">New Delhi, India</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/10">
              <a
                href="https://linkedin.com/in/anirudh-chaurasia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-2 text-sm font-medium transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#BBCCD7]" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/ANIRUDH-Main"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-2 text-sm font-medium transition-colors"
              >
                <Github className="w-4 h-4 text-[#BBCCD7]" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
