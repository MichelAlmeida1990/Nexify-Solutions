import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '@/lib/emailjs-config'

interface EmailData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

interface UseEmailJSReturn {
  sendEmail: (data: EmailData) => Promise<{ success: boolean; message: string }>
  isSending: boolean
  error: string | null
}

export function useEmailJS(): UseEmailJSReturn {
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sendEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
    setIsSending(true)
    setError(null)

    try {
      // Verificar se as credenciais estão configuradas
      if (EMAILJS_CONFIG.USER_ID === 'YOUR_USER_ID') {
        throw new Error('EmailJS não está configurado. Configure as credenciais em src/lib/emailjs-config.ts')
      }

      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
        },
        EMAILJS_CONFIG.USER_ID
      )

      if (result.status === 200) {
        return {
          success: true,
          message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.'
        }
      } else {
        throw new Error('Erro ao enviar mensagem')
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido ao enviar mensagem'
      setError(errorMessage)
      return {
        success: false,
        message: errorMessage
      }
    } finally {
      setIsSending(false)
    }
  }

  return {
    sendEmail,
    isSending,
    error
  }
} 