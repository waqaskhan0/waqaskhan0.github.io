import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MessageSquare, Phone, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Mail, label: 'mwaqaskhan921@gmail.com', href: 'mailto:mwaqaskhan921@gmail.com', color: 'from-red-400 to-pink-400' },
    { icon: Phone, label: '+923201584698', href: 'tel:+923201584698', color: 'from-green-400 to-blue-400' },
    { icon: Github, label: 'GitHub Profile', href: 'https://github.com/waqaskhan0/', color: 'from-gray-400 to-gray-600' },
    { icon: Linkedin, label: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/muhammad-waqas-4692a6329', color: 'from-blue-400 to-blue-600' }
  ];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent md:text-5xl">
            Let's Connect
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Ready to collaborate on the next big AI innovation? Let's build something amazing together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="relative mx-auto mb-5 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-5xl border-2 border-blue-400/30 md:h-36 md:w-36 md:text-6xl"
            aria-hidden="true"
          >
            <span role="img" aria-label="robot">🤖</span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-purple-400/20"
            />
          </motion.div>
          <p className="text-lg text-gray-300">
            "Ready to process your ideas into reality!"
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto w-full max-w-xl lg:mx-0"
          >
            <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700/50 hover:border-blue-400/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <MessageSquare className="text-blue-400" />
                  <span>Send a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400"
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400"
                    required
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400 resize-none"
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600"
                  >
                    <Send className="mr-2" size={16} />
                    Launch Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto w-full max-w-xl lg:mx-0"
          >
            <h3 className="mb-6 text-xl font-bold text-white">Connect With Me</h3>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.03, x: 8 }}
                  viewport={{ once: true }}
                  className="flex min-h-14 items-center space-x-4 rounded-lg border border-gray-700/50 bg-gray-900/50 p-4 transition-all duration-300 group hover:border-blue-400/50"
                >
                  <div className={`rounded-full bg-gradient-to-r ${social.color} bg-opacity-20 p-2`}>
                    <social.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="break-all text-gray-300 transition-colors duration-300 group-hover:text-white">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-gray-700/50 pt-8 text-center"
        >
          <p className="text-gray-500">
            © 2025 Muhammad Waqas. Engineering the future with AI.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
