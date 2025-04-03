import React, { useState, useEffect, useRef } from 'react';
import { Send, Loader2, UserCheck, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuthContext } from '@/context/AuthContext';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { useSupabase } from '@/context/SupabaseContext';

interface Message {
  id: string;
  content: string;
  sender_id: string;
  recipient_id: string | null;
  created_at: string;
  is_read: boolean | null;
  senderName?: string;
  isAdmin?: boolean;
}

interface Profile {
  id: string;
  full_name: string | null;
  user_type: string;
}

const ChatInterface = () => {
  const { user } = useAuthContext();
  const { language } = useLanguage();
  const { toast } = useToast();
  const supabase = useSupabase();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [adminUsers, setAdminUsers] = useState<Profile[]>([]);
  const [selectedAdmin, setSelectedAdmin] = useState<string | null>(null);
  const [isUserAdmin, setIsUserAdmin] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [userProfiles, setUserProfiles] = useState<Record<string, Profile>>({});

  const getText = () => {
    if (language === 'ru') {
      return {
        title: 'Чат с поддержкой 24/7',
        placeholder: 'Введите ваше сообщение...',
        send: 'Отправить',
        loading: 'Загрузка сообщений...',
        empty: 'У вас пока нет сообщений. Начните общение прямо сейчас!',
        selectAdmin: 'Выберите администратора для общения',
        today: 'Сегодня',
        yesterday: 'Вчера',
        typing: 'печатает...',
        noAdmins: 'Администраторы недоступны',
        switchTo: 'Переключиться на',
        allMessages: 'Все сообщения',
        you: 'Вы',
        adminLabel: 'Админ',
        clientLabel: 'Клиент',
      };
    } else if (language === 'cs') {
      return {
        title: 'Chat s podporou 24/7',
        placeholder: 'Zadejte svou zprávu...',
        send: 'Poslat',
        loading: 'Načítání zpráv...',
        empty: 'Zatím nemáte žádné zprávy. Začněte konverzaci nyní!',
        selectAdmin: 'Vyberte administrátora pro komunikaci',
        today: 'Dnes',
        yesterday: 'Včera',
        typing: 'píše...',
        noAdmins: 'Administrátoři nejsou k dispozici',
        switchTo: 'Přepnout na',
        allMessages: 'Všechny zprávy',
        you: 'Vy',
        adminLabel: 'Admin',
        clientLabel: 'Klient',
      };
    } else {
      return {
        title: 'Chat with 24/7 Support',
        placeholder: 'Type your message...',
        send: 'Send',
        loading: 'Loading messages...',
        empty: 'You have no messages yet. Start a conversation now!',
        selectAdmin: 'Select an admin to chat with',
        today: 'Today',
        yesterday: 'Yesterday',
        typing: 'typing...',
        noAdmins: 'No admins available',
        switchTo: 'Switch to',
        allMessages: 'All messages',
        you: 'You',
        adminLabel: 'Admin',
        clientLabel: 'Client',
      };
    }
  };

  const text = getText();

  useEffect(() => {
    if (!user) return;

    const checkUserType = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('user_type')
        .eq('id', user.id)
        .single();

      if (!error && data) {
        setIsUserAdmin(data.user_type === 'admin');
      }
    };

    checkUserType();
  }, [user, supabase]);

  useEffect(() => {
    if (!user) return;

    const fetchAdmins = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('id, full_name, user_type')
        .eq('user_type', 'admin');

      if (!error && data) {
        setAdminUsers(data);
        
        if (!isUserAdmin && data.length > 0) {
          setSelectedAdmin(data[0].id);
        }
      }
    };

    fetchAdmins();
  }, [user, isUserAdmin, supabase]);

  const fetchProfiles = async (userIds: string[]) => {
    if (userIds.length === 0) return;
    
    const uniqueIds = [...new Set(userIds)];
    const { data, error } = await supabase
      .from('profiles')
      .select('id, full_name, user_type')
      .in('id', uniqueIds);
      
    if (!error && data) {
      const profilesMap: Record<string, Profile> = {};
      data.forEach(profile => {
        profilesMap[profile.id] = profile;
      });
      setUserProfiles(prev => ({ ...prev, ...profilesMap }));
    }
  };

  useEffect(() => {
    if (!user) return;

    const fetchMessages = async () => {
      setIsLoading(true);
      let query = supabase
        .from('chat_messages')
        .select(`
          id,
          content,
          sender_id,
          recipient_id,
          created_at,
          is_read
        `)
        .order('created_at', { ascending: true });

      if (isUserAdmin) {
        if (selectedAdmin) {
          query = query.or(`sender_id.eq.${selectedAdmin},recipient_id.eq.${selectedAdmin}`);
        }
      } else {
        query = query.or(`sender_id.eq.${user.id},recipient_id.eq.${user.id}`);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching messages:', error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load chat messages."
        });
      } else if (data) {
        const userIds = new Set<string>();
        data.forEach(msg => {
          if (msg.sender_id) userIds.add(msg.sender_id);
          if (msg.recipient_id) userIds.add(msg.recipient_id);
        });
        
        await fetchProfiles(Array.from(userIds));
        
        const formattedMessages = data.map(msg => {
          const senderProfile = userProfiles[msg.sender_id];
          return {
            ...msg,
            senderName: senderProfile?.full_name || 'Unknown User',
            isAdmin: senderProfile?.user_type === 'admin'
          };
        });
        
        setMessages(formattedMessages);
      }
      setIsLoading(false);
    };

    fetchMessages();

    const subscription = supabase
      .channel('chat_changes')
      .on('postgres_changes', 
        { 
          event: 'INSERT', 
          schema: 'public', 
          table: 'chat_messages' 
        }, 
        async payload => {
          const newMsg = payload.new as Message;
          
          if (newMsg.sender_id && !userProfiles[newMsg.sender_id]) {
            await fetchProfiles([newMsg.sender_id]);
          }
          
          const senderProfile = userProfiles[newMsg.sender_id];
          
          const formattedMsg = {
            ...newMsg,
            senderName: senderProfile?.full_name || 'Unknown User',
            isAdmin: senderProfile?.user_type === 'admin'
          };
          
          let isRelevant = false;
          if (isUserAdmin) {
            if (!selectedAdmin) {
              isRelevant = true;
            } else {
              isRelevant = newMsg.sender_id === selectedAdmin || newMsg.recipient_id === selectedAdmin;
            }
          } else {
            isRelevant = newMsg.sender_id === user.id || newMsg.recipient_id === user.id;
          }
          
          if (isRelevant) {
            setMessages(prev => [...prev, formattedMsg]);
          }
        })
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, [user, isUserAdmin, selectedAdmin, toast, supabase, userProfiles]);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    if (!user || messages.length === 0) return;

    const markAsRead = async () => {
      const unreadMessages = messages.filter(
        msg => msg.recipient_id === user.id && !msg.is_read
      );

      if (unreadMessages.length > 0) {
        const { error } = await supabase
          .from('chat_messages')
          .update({ is_read: true })
          .in('id', unreadMessages.map(msg => msg.id));

        if (error) {
          console.error('Error marking messages as read:', error);
        }
      }
    };

    markAsRead();
  }, [messages, user, supabase]);

  const simulateTyping = () => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    
    setIsTyping(true);
    
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
    }, 3000);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !newMessage.trim() || isSending) return;

    setIsSending(true);
    
    try {
      let recipientId = null;
      
      if (!isUserAdmin) {
        recipientId = selectedAdmin || (adminUsers.length > 0 ? adminUsers[0].id : null);
      } 
      else if (selectedAdmin) {
        recipientId = selectedAdmin;
      }

      if (!isUserAdmin && !recipientId) {
        toast({
          variant: "destructive",
          title: language === 'ru' ? 'Ошибка' : language === 'cs' ? 'Chyba' : 'Error',
          description: language === 'ru' ? 'Нет доступных администраторов' : 
                      language === 'cs' ? 'Žádní administrátoři nejsou k dispozici' : 
                      'No administrators available'
        });
        setIsSending(false);
        return;
      }

      const { error } = await supabase
        .from('chat_messages')
        .insert({
          sender_id: user.id,
          recipient_id: recipientId,
          content: newMessage,
        });

      if (error) {
        console.error('Error sending message:', error);
        toast({
          variant: "destructive",
          title: language === 'ru' ? 'Ошибка' : language === 'cs' ? 'Chyba' : 'Error',
          description: language === 'ru' ? 'Не удалось отправить сообщение' : 
                      language === 'cs' ? 'Nepodařilo se odeslat zprávu' : 
                      'Failed to send message'
        });
      } else {
        setNewMessage('');
        simulateTyping();
      }
    } catch (error) {
      console.error('Error in sending message:', error);
    } finally {
      setIsSending(false);
    }
  };

  const formatMessageDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    const isToday = date.toDateString() === today.toDateString();
    const isYesterday = date.toDateString() === yesterday.toDateString();
    
    if (isToday) {
      return `${text.today}, ${date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}`;
    } else if (isYesterday) {
      return `${text.yesterday}, ${date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}`;
    } else {
      return `${date.toLocaleDateString()} ${date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}`;
    }
  };

  const groupMessagesByDate = () => {
    const groups: { date: string; messages: Message[] }[] = [];
    let currentDate = '';
    let currentGroup: Message[] = [];

    messages.forEach(message => {
      const messageDate = new Date(message.created_at).toDateString();
      
      if (messageDate !== currentDate) {
        if (currentGroup.length > 0) {
          groups.push({ date: currentDate, messages: currentGroup });
        }
        currentDate = messageDate;
        currentGroup = [message];
      } else {
        currentGroup.push(message);
      }
    });

    if (currentGroup.length > 0) {
      groups.push({ date: currentDate, messages: currentGroup });
    }

    return groups;
  };

  const messageGroups = groupMessagesByDate();

  const handleAdminChange = (adminId: string | null) => {
    setSelectedAdmin(adminId);
  };

  if (!user) {
    return null;
  }

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] md:h-[600px] bg-teko-black/20 backdrop-blur-sm border border-teko-purple/20 rounded-xl overflow-hidden">
      <div className="bg-teko-purple/20 backdrop-blur-md p-4 border-b border-teko-purple/30">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-teko-white flex items-center">
            <UserCheck className="mr-2 h-5 w-5 text-teko-purple" />
            {text.title}
          </h2>
          
          {isUserAdmin && (
            <div className="flex items-center">
              <span className="text-sm text-teko-white/70 mr-2">{text.switchTo}:</span>
              <select 
                className="bg-teko-black/30 border border-teko-purple/30 rounded-md text-teko-white text-sm p-1"
                value={selectedAdmin || ''}
                onChange={(e) => handleAdminChange(e.target.value || null)}
              >
                <option value="">{text.allMessages}</option>
                {adminUsers.map(admin => (
                  <option key={admin.id} value={admin.id}>
                    {admin.full_name}
                  </option>
                ))}
              </select>
            </div>
          )}
          
          {!isUserAdmin && adminUsers.length > 0 && (
            <div className="flex items-center">
              <span className="text-sm text-teko-white/70 mr-2">{text.selectAdmin}:</span>
              <select 
                className="bg-teko-black/30 border border-teko-purple/30 rounded-md text-teko-white text-sm p-1"
                value={selectedAdmin || ''}
                onChange={(e) => handleAdminChange(e.target.value)}
              >
                {adminUsers.map(admin => (
                  <option key={admin.id} value={admin.id}>
                    {admin.full_name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        {isLoading ? (
          <div className="h-full flex items-center justify-center">
            <Loader2 className="h-8 w-8 text-teko-purple animate-spin" />
            <span className="ml-2 text-teko-white/70">{text.loading}</span>
          </div>
        ) : messages.length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <p className="text-teko-white/70 text-center">{text.empty}</p>
          </div>
        ) : (
          <div className="space-y-6">
            {messageGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="space-y-3">
                <div className="relative flex items-center py-2">
                  <div className="flex-grow border-t border-teko-purple/20"></div>
                  <span className="flex-shrink mx-4 text-xs text-teko-white/50">
                    {new Date(group.date).toLocaleDateString(undefined, { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                  <div className="flex-grow border-t border-teko-purple/20"></div>
                </div>
                
                {group.messages.map((message) => {
                  const isCurrentUser = message.sender_id === user.id;
                  
                  return (
                    <div key={message.id} className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
                      <div className={`flex max-w-[80%] ${isCurrentUser ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`flex-shrink-0 ${isCurrentUser ? 'ml-3' : 'mr-3'}`}>
                          <Avatar className={`h-8 w-8 ${message.isAdmin ? 'border-2 border-teko-purple/70' : ''}`}>
                            <AvatarFallback 
                              className={`
                                ${message.isAdmin ? 'bg-teko-purple text-white' : 'bg-teko-dark-gray text-teko-white'}
                              `}
                            >
                              {message.senderName?.substring(0, 2).toUpperCase() || 'U'}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        
                        <div className={`
                          rounded-lg p-3 
                          ${isCurrentUser 
                            ? 'bg-teko-purple/30 border border-teko-purple/50' 
                            : message.isAdmin 
                              ? 'bg-teko-purple/20 border border-teko-purple/40' 
                              : 'bg-teko-dark-gray/50 border border-teko-white/10'
                          }
                        `}>
                          <div className="flex items-center mb-1">
                            <p className={`text-xs font-medium ${isCurrentUser ? 'text-teko-white/90' : 'text-teko-white/80'}`}>
                              {isCurrentUser ? text.you : message.senderName}
                            </p>
                            {message.isAdmin && (
                              <span className="ml-2 px-1.5 py-0.5 bg-teko-purple/30 rounded-sm text-[10px] text-teko-white/80">
                                {text.adminLabel}
                              </span>
                            )}
                            {!message.isAdmin && !isCurrentUser && (
                              <span className="ml-2 px-1.5 py-0.5 bg-teko-white/10 rounded-sm text-[10px] text-teko-white/70">
                                {text.clientLabel}
                              </span>
                            )}
                          </div>
                          
                          <p className="text-teko-white whitespace-pre-wrap break-words text-sm">
                            {message.content}
                          </p>
                          
                          <p className="text-right text-xs text-teko-white/50 mt-1">
                            {formatMessageDate(message.created_at)}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
            
            <AnimatePresence>
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="flex items-center text-teko-white/50 text-xs"
                >
                  <div className="flex space-x-1 mr-2">
                    <div className="w-2 h-2 bg-teko-purple/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-teko-purple/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-teko-purple/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                  <span>{text.typing}</span>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div ref={endOfMessagesRef} />
          </div>
        )}
      </ScrollArea>
      
      <form onSubmit={handleSendMessage} className="border-t border-teko-purple/20 p-3">
        <div className="flex items-end gap-2">
          <Textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder={text.placeholder}
            className="resize-none bg-teko-black/30 border-teko-purple/30 text-teko-white min-h-[60px]"
            disabled={isSending || (!isUserAdmin && adminUsers.length === 0)}
          />
          <Button 
            type="submit" 
            className="bg-teko-purple hover:bg-teko-purple-dark text-white px-4 h-10"
            disabled={isSending || !newMessage.trim() || (!isUserAdmin && adminUsers.length === 0)}
          >
            {isSending ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
        {!isUserAdmin && adminUsers.length === 0 && (
          <p className="text-red-400 text-xs mt-2">{text.noAdmins}</p>
        )}
      </form>
    </div>
  );
};

export default ChatInterface;
