
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '../components/ui/hover-card';
import { Separator } from '../components/ui/separator';
import { useNavigate } from 'react-router-dom';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';

const About = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Form setup
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  // Animation on scroll logic
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.85) {
          element.classList.add('visible');
        }
      });
    };
    
    // Initial check on page load
    animateOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Clean up
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  const handleBriefClick = () => {
    navigate('/brief');
  };
  
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Contact form submitted with data:', data);
      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const teamMembers = [
    {
      name: t('about.team.member1.name'),
      role: t('about.team.member1.role'),
      bio: t('about.team.member1.bio'),
      image: '/team-member-1.png'
    },
    {
      name: t('about.team.member2.name'),
      role: t('about.team.member2.role'),
      bio: t('about.team.member2.bio'),
      image: '/team-member-2.png'
    },
    {
      name: t('about.team.member3.name'),
      role: t('about.team.member3.role'),
      bio: t('about.team.member3.bio'),
      image: '/team-member-3.png'
    },
    {
      name: t('about.team.member4.name'),
      role: t('about.team.member4.role'),
      bio: t('about.team.member4.bio'),
      image: '/team-member-4.png'
    }
  ];

  return (
    <div className="min-h-screen bg-teko-black">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {t('about.title')}
            </h1>
            <p className="text-teko-white/70 max-w-3xl mx-auto">
              {t('about.description')}
            </p>
          </div>
          
          {/* Who We Are Section */}
          <div className="animate-on-scroll glass-card p-8 rounded-xl mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6 text-teko-purple-light">
              {t('about.whoWeAre.title')}
            </h2>
            <p className="text-teko-white/80 mb-4">
              {t('about.whoWeAre.description1')}
            </p>
            <p className="text-teko-white/80 mb-4">
              {t('about.whoWeAre.description2')}
            </p>
            <p className="text-teko-white/80">
              {t('about.whoWeAre.description3')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20">
            <div className="animate-on-scroll glass-card p-8 rounded-xl" style={{ transitionDelay: '0.1s' }}>
              <h2 className="text-2xl font-display font-bold mb-4 text-teko-purple-light flex items-center">
                <span className="mr-2">🎯</span> {t('about.mission.title')}
              </h2>
              <p className="text-teko-white/80 mb-6 italic">
                "{t('about.mission.quote')}"
              </p>
              <p className="text-teko-white/80 mb-6">
                {t('about.mission.description')}
              </p>
              <div className="mt-4 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-teko-purple"></div>
                  <p className="text-teko-white/80">{t('about.mission.point1')}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-teko-purple"></div>
                  <p className="text-teko-white/80">{t('about.mission.point2')}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-teko-purple"></div>
                  <p className="text-teko-white/80">{t('about.mission.point3')}</p>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll glass-card p-8 rounded-xl" style={{ transitionDelay: '0.2s' }}>
              <h2 className="text-2xl font-display font-bold mb-4 text-teko-purple-light">
                {t('about.values.title')}
              </h2>
              <div className="mt-4 flex flex-col gap-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">🔹</div>
                  <div>
                    <h3 className="font-bold text-teko-white">{t('about.values.value1.title')}</h3>
                    <p className="text-teko-white/80">{t('about.values.value1.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">🔹</div>
                  <div>
                    <h3 className="font-bold text-teko-white">{t('about.values.value2.title')}</h3>
                    <p className="text-teko-white/80">{t('about.values.value2.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">🔹</div>
                  <div>
                    <h3 className="font-bold text-teko-white">{t('about.values.value3.title')}</h3>
                    <p className="text-teko-white/80">{t('about.values.value3.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">🔹</div>
                  <div>
                    <h3 className="font-bold text-teko-white">{t('about.values.value4.title')}</h3>
                    <p className="text-teko-white/80">{t('about.values.value4.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20 mb-20">
            <h2 className="text-3xl font-display font-bold mb-12 text-center animate-on-scroll">
              {t('about.team.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, i) => (
                <HoverCard key={i}>
                  <HoverCardTrigger asChild>
                    <div 
                      className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center text-center animate-on-scroll hover:bg-white/10 transition-all duration-300 hover:border-teko-purple/50 cursor-pointer"
                      style={{ transitionDelay: `${0.1 * i}s` }}
                    >
                      <Avatar className="w-24 h-24 mb-4 bg-teko-purple/20 border-2 border-teko-purple/30">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback className="bg-teko-purple/20 text-xl font-bold text-teko-white">
                          {member.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-display font-bold mb-1">
                        {member.name}
                      </h3>
                      <p className="text-teko-purple-light text-sm mb-3">
                        {member.role}
                      </p>
                      <p className="text-teko-white/70 text-sm">
                        "{member.bio}"
                      </p>
                      <div className="mt-4 flex gap-4">
                        <a href="#" className="text-teko-white/60 hover:text-teko-purple transition-colors">
                          <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M22 5.92a8.5 8.5 0 0 1-2.36.64 4.1 4.1 0 0 0 1.82-2.29c-.8.48-1.68.82-2.63 1a4.1 4.1 0 0 0-7.07 3.74 11.64 11.64 0 0 1-8.46-4.29 4.1 4.1 0 0 0 1.27 5.48 4.1 4.1 0 0 1-1.86-.52v.05a4.1 4.1 0 0 0 3.3 4.02 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.24 8.24 0 0 1 2 18.34a11.61 11.61 0 0 0 6.29 1.84c7.54 0 11.67-6.25 11.67-11.67 0-.18 0-.35-.01-.52A8.3 8.3 0 0 0 22 5.92Z"></path>
                          </svg>
                        </a>
                        <a href="#" className="text-teko-white/60 hover:text-teko-purple transition-colors">
                          <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-teko-black/95 border border-teko-purple/30 text-teko-white p-4">
                    <div className="flex justify-between space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={member.image} />
                        <AvatarFallback className="bg-teko-purple/20">{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">{member.name}</h4>
                        <p className="text-sm text-teko-purple-light">{member.role}</p>
                        <div className="flex items-center pt-2">
                          <span className="text-xs text-teko-white/70">
                            {t('about.team.experience')}: 5+ {t('about.team.years')}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Separator className="my-3 bg-teko-purple/20" />
                    <div className="text-xs text-teko-white/80 mt-2">
                      <p>{t('about.team.skills')}: React, TypeScript, Node.js, UI/UX, Figma</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="mt-20 max-w-5xl mx-auto animate-on-scroll">
            <h2 className="text-3xl font-display font-bold mb-6 text-center">
              {t('about.contact.title')} 📩
            </h2>
            <p className="text-teko-white/70 text-center mb-12">
              {t('about.contact.description')}
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white/5 border-white/10 text-teko-white hover:bg-white/10 transition-all duration-300">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="w-12 h-12 rounded-full bg-teko-purple/20 flex items-center justify-center mb-4">
                    <MapPin className="text-teko-purple-light" />
                  </div>
                  <h3 className="font-bold mb-2">{t('about.contact.office')}</h3>
                  <p className="text-teko-white/70 text-center">Prague, Czech Republic</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border-white/10 text-teko-white hover:bg-white/10 transition-all duration-300">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="w-12 h-12 rounded-full bg-teko-purple/20 flex items-center justify-center mb-4">
                    <Mail className="text-teko-purple-light" />
                  </div>
                  <h3 className="font-bold mb-2">{t('about.contact.email')}</h3>
                  <a href="mailto:hello@teko.sup" className="text-teko-purple-light hover:text-teko-purple hover:underline transition-colors">
                    hello@teko.sup
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border-white/10 text-teko-white hover:bg-white/10 transition-all duration-300">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="w-12 h-12 rounded-full bg-teko-purple/20 flex items-center justify-center mb-4">
                    <Phone className="text-teko-purple-light" />
                  </div>
                  <h3 className="font-bold mb-2">{t('about.contact.phone')}</h3>
                  <a href="tel:+420123456789" className="text-teko-purple-light hover:text-teko-purple hover:underline transition-colors">
                    +420 123 456 789
                  </a>
                </CardContent>
              </Card>
            </div>
            
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-xl font-display font-bold mb-6">
                {t('about.contact.form.title')}
              </h3>
              
              {submitted ? (
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-teko-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teko-purple-light">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h4 className="text-xl font-display font-bold mb-2 text-teko-purple-light">
                    {t('about.contact.form.success.title')}
                  </h4>
                  <p className="text-teko-white/70 mb-6">{t('about.contact.form.success.message')}</p>
                  <Button 
                    className="bg-teko-purple hover:bg-teko-purple/80 transition-colors"
                    onClick={() => setSubmitted(false)}
                  >
                    {t('about.contact.form.success.newMessage')}
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-teko-white">{t('about.contact.form.name')}</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder={t('about.contact.form.namePlaceholder')} 
                                className="bg-white/5 border-white/20 text-teko-white focus-visible:ring-teko-purple" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-teko-white">{t('about.contact.form.email')}</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder={t('about.contact.form.emailPlaceholder')} 
                                className="bg-white/5 border-white/20 text-teko-white focus-visible:ring-teko-purple" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-teko-white">{t('about.contact.form.message')}</FormLabel>
                          <FormControl>
                            <textarea 
                              className="w-full min-h-[120px] rounded-md p-3 bg-white/5 border border-white/20 text-teko-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teko-purple" 
                              placeholder={t('about.contact.form.messagePlaceholder')}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex justify-between items-center">
                      <Button 
                        type="submit" 
                        className="bg-teko-purple hover:bg-teko-purple/80 transition-colors" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? t('about.contact.form.sending') : t('about.contact.form.send')}
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </Form>
              )}
            </div>
            
            <div className="text-center mt-16">
              <h3 className="text-2xl font-display font-bold mb-4">
                🚀 {t('about.ready')}
              </h3>
              <Button 
                onClick={handleBriefClick}
                className="bg-teko-purple hover:bg-teko-purple/80 text-white px-6 py-6 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-teko-purple/30"
              >
                {t('about.fillBrief')} →
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
