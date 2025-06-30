// EmailJS Configuration
// Você precisará criar uma conta em https://www.emailjs.com/
// e configurar um template de e-mail

export const EMAILJS_CONFIG = {
  // Seu User ID do EmailJS
  USER_ID: 'X7X7EHK5Gj3tLnnJ5', // Public Key fornecido pelo usuário
  
  // ID do template de e-mail criado no EmailJS
  TEMPLATE_ID: 'template_dg9rmim', // ID do template de contato
  
  // ID do serviço (Gmail, Outlook, etc.)
  SERVICE_ID: 'service_b5juyi1', // ID do serviço Outlook
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