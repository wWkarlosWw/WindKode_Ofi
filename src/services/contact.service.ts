import type { ContactForm } from '@/types/project'

export function sendContactForm(data: ContactForm): Promise<{ success: boolean }> {
  return fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(res => res.json())
}
