
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '@/context/AuthContext';
import { useLanguage } from '@/context/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogOut, User, Settings, MessageCircle } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';
import { Avatar, AvatarFallback } from './ui/avatar';
import { useToast } from '@/hooks/use-toast';

const UserMenu = () => {
  const { user, signOut } = useAuthContext();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    const result = await signOut();
    if (result.success) {
      navigate('/');
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error || "Failed to sign out"
      });
    }
  };

  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Link to="/login">
          <Button variant="ghost" className="text-teko-white/80 hover:text-teko-white hover:bg-teko-purple/10">
            {t('auth.login')}
          </Button>
        </Link>
        <Link to="/signup">
          <Button className="bg-teko-purple hover:bg-teko-purple-dark text-white">
            {t('auth.signup')}
          </Button>
        </Link>
      </div>
    );
  }

  const getInitials = () => {
    const fullName = user.user_metadata.full_name || '';
    return fullName
      .split(' ')
      .map(name => name.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="relative h-9 w-9 rounded-full overflow-hidden bg-teko-purple/20 hover:bg-teko-purple/30 cursor-pointer"
        >
          <Avatar>
            <AvatarFallback className="bg-teko-purple/80 text-teko-white">
              {getInitials()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-teko-black/90 backdrop-blur-xl border-teko-purple/20 text-teko-white" align="end">
        <DropdownMenuLabel className="flex items-center gap-2 py-3">
          <AnimatedLogo size={20} variant="minimal" />
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium text-teko-white">{user.user_metadata.full_name || 'User'}</p>
            <p className="text-xs text-teko-white/60 truncate">{user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-teko-purple/20" />
        <DropdownMenuItem className="cursor-pointer hover:bg-teko-purple/20 focus:bg-teko-purple/20">
          <Link to="/profile" className="flex items-center w-full">
            <User className="mr-2 h-4 w-4 text-teko-white/60" />
            <span>{t('auth.profile')}</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-teko-purple/20 focus:bg-teko-purple/20">
          <Link to="/chat" className="flex items-center w-full">
            <MessageCircle className="mr-2 h-4 w-4 text-teko-white/60" />
            <span>{t('navbar.chat')}</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-teko-purple/20 focus:bg-teko-purple/20">
          <Link to="/settings" className="flex items-center w-full">
            <Settings className="mr-2 h-4 w-4 text-teko-white/60" />
            <span>{t('auth.settings')}</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-teko-purple/20" />
        <DropdownMenuItem 
          className="text-red-400 hover:text-red-300 cursor-pointer hover:bg-red-900/20 focus:bg-red-900/20"
          onClick={handleSignOut}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>{t('auth.logout')}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
