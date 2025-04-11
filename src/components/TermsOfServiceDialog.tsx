
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface TermsOfServiceDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const TermsOfServiceDialog: React.FC<TermsOfServiceDialogProps> = ({ isOpen, onOpenChange }) => {
  const { language } = useLanguage();

  const getContent = () => {
    if (language === 'ru') {
      return {
        title: 'Условия использования',
        content: (
          <>
            <h3 className="text-lg font-medium mt-6 mb-2">1. Принятие условий</h3>
            <p className="mb-4 text-teko-white/70">
              Используя веб-сайт teko.sup, вы соглашаетесь с настоящими Условиями использования. Если вы не согласны с какой-либо частью условий, вы не можете использовать наш сайт или услуги.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">2. Изменения условий</h3>
            <p className="mb-4 text-teko-white/70">
              Мы оставляем за собой право изменять эти условия в любое время. Ваше продолжающееся использование веб-сайта после внесения изменений означает ваше принятие новых условий.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">3. Использование сайта</h3>
            <p className="mb-4 text-teko-white/70">
              Вы соглашаетесь использовать сайт только в законных целях и способом, который не нарушает права других или не ограничивает их использование сайта.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">4. Учетные записи пользователей</h3>
            <p className="mb-4 text-teko-white/70">
              Если вы создаете учетную запись, вы несете ответственность за поддержание конфиденциальности своей учетной записи и пароля. Вы соглашаетесь принять ответственность за все действия, которые происходят под вашей учетной записью.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">5. Ограничение ответственности</h3>
            <p className="mb-4 text-teko-white/70">
              teko.sup и его сотрудники не несут ответственности за любые потери или ущерб, возникшие в результате использования или невозможности использования наших услуг.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">6. Интеллектуальная собственность</h3>
            <p className="mb-4 text-teko-white/70">
              Все содержимое на этом сайте, включая текст, графику, логотипы и изображения, является интеллектуальной собственностью teko.sup и защищено законами об авторском праве.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">7. Применимое право</h3>
            <p className="mb-4 text-teko-white/70">
              Настоящие Условия регулируются и толкуются в соответствии с законодательством Российской Федерации.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">8. Контактная информация</h3>
            <p className="mb-4 text-teko-white/70">
              Если у вас есть вопросы по поводу этих Условий, пожалуйста, свяжитесь с нами по адресу info@tekosup.com.
            </p>
          </>
        ),
      };
    } else if (language === 'cs') {
      return {
        title: 'Podmínky služby',
        content: (
          <>
            <h3 className="text-lg font-medium mt-6 mb-2">1. Přijetí podmínek</h3>
            <p className="mb-4 text-teko-white/70">
              Používáním webových stránek teko.sup souhlasíte s těmito Podmínkami služby. Pokud nesouhlasíte s jakoukoliv částí podmínek, nemůžete používat naše stránky nebo služby.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">2. Změny podmínek</h3>
            <p className="mb-4 text-teko-white/70">
              Vyhrazujeme si právo kdykoliv změnit tyto podmínky. Vaše pokračující používání webových stránek po provedení změn znamená váš souhlas s novými podmínkami.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">3. Používání stránek</h3>
            <p className="mb-4 text-teko-white/70">
              Souhlasíte s tím, že budete stránky používat pouze k zákonným účelům a způsobem, který neporušuje práva ostatních ani neomezuje jejich používání stránek.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">4. Uživatelské účty</h3>
            <p className="mb-4 text-teko-white/70">
              Pokud si vytvoříte účet, jste zodpovědní za zachování důvěrnosti svého účtu a hesla. Souhlasíte s tím, že přebíráte odpovědnost za všechny aktivity, které se dějí pod vaším účtem.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">5. Omezení odpovědnosti</h3>
            <p className="mb-4 text-teko-white/70">
              teko.sup a jeho zaměstnanci nenesou odpovědnost za žádné ztráty nebo škody vzniklé v důsledku používání nebo nemožnosti používat naše služby.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">6. Duševní vlastnictví</h3>
            <p className="mb-4 text-teko-white/70">
              Veškerý obsah na těchto stránkách, včetně textu, grafiky, log a obrázků, je duševním vlastnictvím teko.sup a je chráněn autorskými právy.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">7. Rozhodné právo</h3>
            <p className="mb-4 text-teko-white/70">
              Tyto Podmínky se řídí a vykládají v souladu s českým právem.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">8. Kontaktní informace</h3>
            <p className="mb-4 text-teko-white/70">
              Máte-li dotazy týkající se těchto Podmínek, kontaktujte nás prosím na info@tekosup.com.
            </p>
          </>
        ),
      };
    } else {
      return {
        title: 'Terms of Service',
        content: (
          <>
            <h3 className="text-lg font-medium mt-6 mb-2">1. Acceptance of Terms</h3>
            <p className="mb-4 text-teko-white/70">
              By using the teko.sup website, you agree to these Terms of Service. If you do not agree to any part of the terms, you may not use our site or services.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">2. Changes to Terms</h3>
            <p className="mb-4 text-teko-white/70">
              We reserve the right to modify these terms at any time. Your continued use of the website after changes are made constitutes your acceptance of the new terms.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">3. Use of the Site</h3>
            <p className="mb-4 text-teko-white/70">
              You agree to use the site only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the site.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">4. User Accounts</h3>
            <p className="mb-4 text-teko-white/70">
              If you create an account, you are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">5. Limitation of Liability</h3>
            <p className="mb-4 text-teko-white/70">
              teko.sup and its employees will not be liable for any losses or damages arising from your use of, or inability to use, our services.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">6. Intellectual Property</h3>
            <p className="mb-4 text-teko-white/70">
              All content on this site, including text, graphics, logos, and images, is the intellectual property of teko.sup and is protected by copyright laws.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">7. Governing Law</h3>
            <p className="mb-4 text-teko-white/70">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which teko.sup operates.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">8. Contact Information</h3>
            <p className="mb-4 text-teko-white/70">
              If you have any questions about these Terms, please contact us at info@tekosup.com.
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

export default TermsOfServiceDialog;
