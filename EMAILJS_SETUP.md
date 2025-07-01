# 📧 Configuração do EmailJS

## Status Atual
✅ **Hook implementado** - `useEmailJS` está funcionando  
✅ **Formulário integrado** - Campo de telefone adicionado  
❌ **Credenciais pendentes** - Precisa configurar EmailJS  

## 🚀 Como Configurar o EmailJS

### 1. Criar Conta no EmailJS
1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crie uma conta gratuita
3. Faça login no dashboard

### 2. Configurar Serviço de Email
1. No dashboard, vá em **"Email Services"**
2. Clique em **"Add New Service"**
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Configure a autenticação
5. Anote o **Service ID** gerado

### 3. Criar Template de Email
1. Vá em **"Email Templates"**
2. Clique em **"Create New Template"**
3. Use este template:

```html
<h2>Nova Mensagem de Contato - Nexify Solutions</h2>

<p><strong>Nome:</strong> {{name}}</p>
<p><strong>Email:</strong> {{email}}</p>
<p><strong>Telefone:</strong> {{phone}}</p>
<p><strong>Assunto:</strong> {{subject}}</p>

<h3>Mensagem:</h3>
<p>{{message}}</p>

<hr>
<p><em>Enviado através do formulário de contato do portfólio Nexify Solutions.</em></p>
```

4. Anote o **Template ID** gerado

### 4. Obter User ID
1. Vá em **"Account"** → **"API Keys"**
2. Copie o **Public Key**

### 5. Configurar no Projeto
Edite o arquivo `src/lib/emailjs-config.ts`:

```typescript
export const EMAILJS_CONFIG = {
  USER_ID: 'SEU_PUBLIC_KEY_AQUI',
  SERVICE_ID: 'SEU_SERVICE_ID_AQUI', 
  TEMPLATE_ID: 'SEU_TEMPLATE_ID_AQUI',
} as const
```

### 6. Testar
1. Execute `npm run dev`
2. Acesse a seção de contato
3. Preencha e envie um formulário de teste
4. Verifique se o email foi recebido

## 🔧 Variáveis do Template
- `{{name}}` - Nome do remetente
- `{{email}}` - Email do remetente  
- `{{phone}}` - Telefone do remetente
- `{{subject}}` - Assunto da mensagem
- `{{message}}` - Conteúdo da mensagem

## 📊 Limites Gratuitos
- **200 emails/mês** no plano gratuito
- **2 templates** simultâneos
- **1 serviço de email**

## 🚨 Troubleshooting
- **Erro 400**: Verifique se as credenciais estão corretas
- **Erro 403**: Verifique se o template existe e está ativo
- **Email não chega**: Verifique spam e configurações do provedor

## ✅ Checklist de Configuração
- [ ] Conta EmailJS criada
- [ ] Serviço de email configurado
- [ ] Template criado com variáveis corretas
- [ ] Credenciais atualizadas no `emailjs-config.ts`
- [ ] Teste de envio realizado
- [ ] Email recebido com sucesso

## Alternativas

Se preferir outras opções:

1. **Resend** - Mais profissional, 100 e-mails/dia gratuitos
2. **Nodemailer** - Via API route, mais controle
3. **Formspree** - Alternativa ao EmailJS

## Segurança

- Nunca commite as credenciais reais no Git
- Use variáveis de ambiente em produção
- Considere rate limiting para evitar spam 