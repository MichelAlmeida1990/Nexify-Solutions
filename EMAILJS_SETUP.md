# Configuração do EmailJS

Este guia explica como configurar o EmailJS para envio real de e-mails através do formulário de contato.

## Passo 1: Criar conta no EmailJS

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clique em "Sign Up" e crie uma conta gratuita
3. Faça login na sua conta

## Passo 2: Configurar um serviço de e-mail

1. No dashboard do EmailJS, vá para "Email Services"
2. Clique em "Add New Service"
3. Escolha seu provedor de e-mail (Gmail, Outlook, etc.)
4. Siga as instruções para conectar sua conta
5. Anote o **Service ID** gerado

## Passo 3: Criar um template de e-mail

1. Vá para "Email Templates"
2. Clique em "Create New Template"
3. Use o seguinte template:

```html
Olá Michel,

Você recebeu uma nova mensagem de contato do seu portfólio:

Nome: {{name}}
Email: {{email}}
Telefone: {{phone}}
Assunto: {{subject}}

Mensagem:
{{message}}

---
Enviado através do formulário de contato do portfólio.
```

4. Salve o template e anote o **Template ID**

## Passo 4: Obter o User ID

1. Vá para "Account" > "API Keys"
2. Copie o **Public Key** (User ID)

## Passo 5: Configurar no projeto

1. Abra o arquivo `src/lib/emailjs-config.ts`
2. Substitua os valores pelos seus IDs:

```typescript
export const EMAILJS_CONFIG = {
  USER_ID: 'seu_user_id_aqui',
  TEMPLATE_ID: 'seu_template_id_aqui',
  SERVICE_ID: 'seu_service_id_aqui',
}
```

## Passo 6: Testar

1. Execute `npm run dev`
2. Acesse o formulário de contato
3. Preencha e envie uma mensagem de teste
4. Verifique se o e-mail foi recebido

## Limites gratuitos

- **200 e-mails por mês** no plano gratuito
- **2 templates** de e-mail
- **1 serviço** de e-mail

## Solução de problemas

### Erro: "EmailJS não está configurado"
- Verifique se os IDs estão corretos em `emailjs-config.ts`

### Erro: "Service not found"
- Verifique se o Service ID está correto
- Certifique-se de que o serviço está ativo

### Erro: "Template not found"
- Verifique se o Template ID está correto
- Certifique-se de que o template está publicado

### E-mails não chegam
- Verifique a pasta de spam
- Confirme se o serviço de e-mail está configurado corretamente
- Teste com um e-mail diferente

## Alternativas

Se preferir outras opções:

1. **Resend** - Mais profissional, 100 e-mails/dia gratuitos
2. **Nodemailer** - Via API route, mais controle
3. **Formspree** - Alternativa ao EmailJS

## Segurança

- Nunca commite as credenciais reais no Git
- Use variáveis de ambiente em produção
- Considere rate limiting para evitar spam 