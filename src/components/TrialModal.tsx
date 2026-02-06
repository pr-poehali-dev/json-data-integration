import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

interface TrialModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function TrialModal({ open, onOpenChange }: TrialModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consent: false,
  });
  const [nameError, setNameError] = useState('');

  const validateFullName = (name: string): boolean => {
    const trimmedName = name.trim();
    const cyrillicPattern = /^[А-ЯЁа-яё\s-]+$/;
    const words = trimmedName.split(/\s+/).filter(word => word.length > 0);
    
    if (!cyrillicPattern.test(trimmedName)) {
      setNameError('Введите ФИО на русском языке');
      return false;
    }
    
    if (words.length < 2) {
      setNameError('Введите свое полное ФИО');
      return false;
    }
    
    setNameError('');
    return true;
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({ ...formData, name: value });
    if (value.trim()) {
      validateFullName(value);
    } else {
      setNameError('');
    }
  };

  const isFormValid = formData.name.trim() !== '' && 
                      formData.email.trim() !== '' && 
                      formData.phone.trim() !== '' && 
                      formData.consent &&
                      nameError === '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateFullName(formData.name)) {
      return;
    }
    
    if (!formData.consent) {
      alert('Необходимо согласие на обработку персональных данных');
      return;
    }
    console.log('Form submitted:', formData);
    window.open('https://t.me/razblok_bot', '_blank');
    onOpenChange(false);
    setFormData({ name: '', email: '', phone: '', consent: false });
    setNameError('');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Попробовать бесплатно</DialogTitle>
          <DialogDescription>
            Оставьте свои контакты, и мы свяжемся с вами для активации пробного периода
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Полное ФИО *</Label>
            <Input
              id="name"
              placeholder="Иванов Иван Петрович"
              value={formData.name}
              onChange={handleNameChange}
              required
              className={nameError ? 'border-red-500' : ''}
            />
            {nameError && (
              <p className="text-sm text-red-600 font-medium">{nameError}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@mail.ru"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Телефон *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+7 (999) 123-45-67"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, consent: checked as boolean })
              }
              required
            />
            <Label
              htmlFor="consent"
              className="text-sm leading-tight cursor-pointer"
            >
              Я согласен на обработку персональных данных в соответствии с Федеральным законом №152-ФЗ «О персональных данных»
            </Label>
          </div>
          <Button 
            type="submit" 
            className="w-full" 
            size="lg"
            disabled={!isFormValid}
          >
            <Icon name="Send" size={20} className="mr-2" />
            Перейти в Telegram
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}