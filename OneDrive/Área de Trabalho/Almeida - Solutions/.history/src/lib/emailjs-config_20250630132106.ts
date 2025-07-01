// EmailJS Configuration
// Você precisará criar uma conta em https://www.emailjs.com/
// e configurar um template de e-mail

export const EMAILJS_CONFIG = {
  // Seu User ID do EmailJS
  USER_ID: 'YOUR_USER_ID', // Substitua pelo seu User ID
  
  // ID do template de e-mail criado no EmailJS
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Substitua pelo ID do seu template
  
  // ID do serviço (Gmail, Outlook, etc.)
  SERVICE_ID: 'YOUR_SERVICE_ID', // Substitua pelo ID do seu serviço
}

// Template de e-mail sugerido para o EmailJS:
/*
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
*/ 