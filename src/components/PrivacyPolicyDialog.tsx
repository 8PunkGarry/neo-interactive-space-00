
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface PrivacyPolicyDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const PrivacyPolicyDialog: React.FC<PrivacyPolicyDialogProps> = ({ isOpen, onOpenChange }) => {
  const { language } = useLanguage();

  const getContent = () => {
    if (language === 'ru') {
      return {
        title: 'Политика конфиденциальности',
        content: (
          <>
            <h3 className="text-lg font-medium mt-6 mb-2">1. Введение</h3>
            <p className="mb-4 text-teko-white/70">
              Данная Политика конфиденциальности объясняет, как teko.sup собирает, использует и защищает вашу личную информацию при использовании нашего веб-сайта и услуг.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">2. Собираемая информация</h3>
            <p className="mb-2 text-teko-white/70">Мы можем собирать следующие типы информации:</p>
            <ul className="list-disc pl-6 mb-4 text-teko-white/70 space-y-1">
              <li>Информация, которую вы предоставляете при заполнении форм на нашем сайте</li>
              <li>Детали транзакций, совершенных через наш сайт</li>
              <li>Информация о вашем посещении сайта (через cookie-файлы)</li>
              <li>Техническая информация, включая IP-адрес и тип браузера</li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-2">3. Использование информации</h3>
            <p className="mb-2 text-teko-white/70">Мы используем собранную информацию для:</p>
            <ul className="list-disc pl-6 mb-4 text-teko-white/70 space-y-1">
              <li>Предоставления и улучшения наших услуг</li>
              <li>Персонализации вашего опыта на сайте</li>
              <li>Обработки ваших запросов и транзакций</li>
              <li>Отправки административных сообщений</li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-2">4. Защита данных</h3>
            <p className="mb-4 text-teko-white/70">
              Мы принимаем соответствующие меры для защиты вашей личной информации от несанкционированного доступа или раскрытия.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">5. Cookie-файлы</h3>
            <p className="mb-4 text-teko-white/70">
              Наш сайт использует cookie-файлы для улучшения вашего опыта. Вы можете отключить cookie-файлы в настройках вашего браузера.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">6. Изменения политики</h3>
            <p className="mb-4 text-teko-white/70">
              Мы можем обновлять нашу политику конфиденциальности. Пожалуйста, регулярно проверяйте эту страницу для получения обновлений.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">7. Контакты</h3>
            <p className="mb-4 text-teko-white/70">
              Если у вас есть вопросы по поводу нашей политики конфиденциальности, пожалуйста, свяжитесь с нами по адресу info@tekosup.com.
            </p>
          </>
        ),
      };
    } else if (language === 'cs') {
      return {
        title: 'Zásady ochrany osobních údajů',
        content: (
          <>
            <h3 className="text-lg font-medium mt-6 mb-2">1. Úvod</h3>
            <p className="mb-4 text-teko-white/70">
              Tyto Zásady ochrany osobních údajů vysvětlují, jak teko.sup sbírá, používá a chrání vaše osobní údaje při používání našich webových stránek a služeb.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">2. Shromažďované informace</h3>
            <p className="mb-2 text-teko-white/70">Můžeme shromažďovat následující typy informací:</p>
            <ul className="list-disc pl-6 mb-4 text-teko-white/70 space-y-1">
              <li>Informace, které poskytujete při vyplňování formulářů na našem webu</li>
              <li>Podrobnosti o transakcích provedených prostřednictvím našeho webu</li>
              <li>Informace o vaší návštěvě webu (prostřednictvím cookies)</li>
              <li>Technické informace, včetně IP adresy a typu prohlížeče</li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-2">3. Použití informací</h3>
            <p className="mb-2 text-teko-white/70">Shromážděné informace používáme k:</p>
            <ul className="list-disc pl-6 mb-4 text-teko-white/70 space-y-1">
              <li>Poskytování a zlepšování našich služeb</li>
              <li>Personalizaci vašeho zážitku na webu</li>
              <li>Zpracování vašich požadavků a transakcí</li>
              <li>Zasílání administrativních zpráv</li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-2">4. Ochrana dat</h3>
            <p className="mb-4 text-teko-white/70">
              Přijímáme odpovídající opatření k ochraně vašich osobních údajů před neoprávněným přístupem nebo zveřejněním.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">5. Soubory cookie</h3>
            <p className="mb-4 text-teko-white/70">
              Náš web používá soubory cookie ke zlepšení vašeho zážitku. Soubory cookie můžete vypnout v nastavení svého prohlížeče.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">6. Změny zásad</h3>
            <p className="mb-4 text-teko-white/70">
              Naše zásady ochrany osobních údajů můžeme aktualizovat. Prosím, pravidelně tuto stránku kontrolujte, abyste byli informováni o aktualizacích.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">7. Kontakty</h3>
            <p className="mb-4 text-teko-white/70">
              Pokud máte dotazy týkající se našich zásad ochrany osobních údajů, kontaktujte nás prosím na info@tekosup.com.
            </p>
          </>
        ),
      };
    } else {
      return {
        title: 'Privacy Policy',
        content: (
          <>
            <h3 className="text-lg font-medium mt-6 mb-2">1. Introduction</h3>
            <p className="mb-4 text-teko-white/70">
              This Privacy Policy explains how teko.sup collects, uses, and protects your personal information when you use our website and services.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">2. Information We Collect</h3>
            <p className="mb-2 text-teko-white/70">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-4 text-teko-white/70 space-y-1">
              <li>Information you provide when filling out forms on our site</li>
              <li>Details of transactions carried out through our site</li>
              <li>Information about your visit to the site (via cookies)</li>
              <li>Technical information including IP address and browser type</li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-2">3. Use of Information</h3>
            <p className="mb-2 text-teko-white/70">We use the collected information to:</p>
            <ul className="list-disc pl-6 mb-4 text-teko-white/70 space-y-1">
              <li>Provide and improve our services</li>
              <li>Personalize your experience on the site</li>
              <li>Process your requests and transactions</li>
              <li>Send administrative messages</li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-2">4. Data Protection</h3>
            <p className="mb-4 text-teko-white/70">
              We take appropriate measures to protect your personal information from unauthorized access or disclosure.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">5. Cookies</h3>
            <p className="mb-4 text-teko-white/70">
              Our site uses cookies to enhance your experience. You can disable cookies in your browser settings.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">6. Policy Changes</h3>
            <p className="mb-4 text-teko-white/70">
              We may update our privacy policy. Please check this page regularly for updates.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">7. Contact</h3>
            <p className="mb-4 text-teko-white/70">
              If you have questions regarding our privacy policy, please contact us at info@tekosup.com.
            </p>
          </>
        ),
      };
    }
  };

  const content = getContent();

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-teko-black/95 backdrop-blur-xl border border-teko-purple/30 max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold purple-gradient-text">{content.title}</DialogTitle>
          <DialogDescription className="text-teko-white/70">
            {language === 'ru' ? 'Последнее обновление: ' : 
             language === 'cs' ? 'Poslední aktualizace: ' : 'Last updated: '}
            {new Date().toLocaleDateString()}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">{content.content}</div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyDialog;
