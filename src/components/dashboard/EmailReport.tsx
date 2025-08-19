import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';

interface EmailReportProps {
  reportData: {
    title: string;
    content: string;
    htmlContent?: string;
  };
}

export const EmailReport: React.FC<EmailReportProps> = ({ reportData }) => {
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSendEmail = async () => {
    if (!email) {
      toast({
        title: 'Erro',
        description: 'Por favor, insira um endereço de email.',
        variant: 'destructive',
      });
      return;
    }

    setIsSending(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: email,
          subject: reportData.title,
          text: reportData.content,
          html: reportData.htmlContent || `<p>${reportData.content}</p>`,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        toast({
          title: 'Sucesso',
          description: 'Relatório enviado por email com sucesso!',
        });
      } else {
        throw new Error(data.message || 'Erro ao enviar o email');
      }
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Falha ao enviar o email. Tente novamente mais tarde.',
        variant: 'destructive',
      });
      console.error('Error sending email:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="space-y-4 p-4 border rounded-lg">
      <h3 className="text-lg font-medium">Enviar Relatório por Email</h3>
      <div className="space-y-2">
        <Label htmlFor="email">Email do destinatário</Label>
        <div className="flex gap-2">
          <Input
            id="email"
            type="email"
            placeholder="email@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
          />
          <Button 
            onClick={handleSendEmail}
            disabled={isSending}
          >
            {isSending ? 'Enviando...' : 'Enviar'}
          </Button>
        </div>
      </div>
    </div>
  );
};
