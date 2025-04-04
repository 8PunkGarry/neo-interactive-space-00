import React from 'react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { useAuth } from '@/hooks/useAuth';
import { Button } from './ui/button';
import { User, LogOut, Settings, ChevronDown } from 'lucide-react';

const UserMenu = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { user, signOut } = useAuth();
  
  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Button 
          size="sm" 
          variant="ghost"
          onClick={() => navigate('/login')}
          className="text-teko-white hover:bg-teko-purple/10"
        >
          {t('auth.login')}
        </Button>
        
        <Button 
          size="sm" 
          onClick={() => navigate('/signup')}
          className="bg-teko-purple hover:bg-teko-purple-dark text-white"
        >
          {t('auth.signup')}
        </Button>
      </div>
    );
  }
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className=" gap-2 px-3 text-teko-white hover:bg-teko-purple/10">
          <User className="h-4 w-4 mr-1" />
          {user.email}
          <ChevronDown className="h-4 w-4 ml-1 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem onClick={() => navigate('/profile')}>
          <User className="h-4 w-4 mr-2" />
          {t('profile.title')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigate('/settings')}>
          <Settings className="h-4 w-4 mr-2" />
          {t('auth.settings')}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="h-4 w-4 mr-2" />
          {t('auth.logout')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
