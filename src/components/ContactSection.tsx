
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20 bg-portfolio-dark-bg">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-white">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-[#1E2235] rounded-xl shadow-md p-6 border border-[#2A2F42]">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  required
                  className="w-full bg-[#2A2F42] border-[#3D4258] text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full bg-[#2A2F42] border-[#3D4258] text-white"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can I help you?"
                  required
                  className="w-full bg-[#2A2F42] border-[#3D4258] text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={5}
                  required
                  className="w-full resize-none bg-[#2A2F42] border-[#3D4258] text-white"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8 text-white">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#2A2F42] p-2 rounded-full">
                    <Mail className="text-[#9b87f5] h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Email</h4>
                    <a href="mailto:john.doe@example.com" className="hover:text-[#9b87f5] transition-colors">
                      john.doe@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#2A2F42] p-2 rounded-full">
                    <Phone className="text-[#9b87f5] h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Phone</h4>
                    <a href="tel:+1234567890" className="hover:text-[#9b87f5] transition-colors">
                      (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#2A2F42] p-2 rounded-full">
                    <MapPin className="text-[#9b87f5] h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Location</h4>
                    <p>San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Social Profiles</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#2A2F42] p-3 rounded-full hover:bg-[#9b87f5] hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#2A2F42] p-3 rounded-full hover:bg-[#9b87f5] hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#2A2F42] p-3 rounded-full hover:bg-[#9b87f5] hover:text-white transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#9b87f5] to-[#7E69AB] text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">Available for Opportunities</h3>
              <p className="mb-4">
                I'm currently looking for internship and freelance opportunities.
                Feel free to reach out if you have a project that matches my skills.
              </p>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#9b87f5]"
                onClick={() => window.open('mailto:john.doe@example.com')}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
