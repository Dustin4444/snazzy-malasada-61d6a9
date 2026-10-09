import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

type Status = 'idle' | 'sending' | 'done' | 'error'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.currentTarget)
    try {
      // Must post to the static skeleton, not '/', or the SSR handler swallows it
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })
      setStatus(res.ok ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="flex items-center gap-3 border-b border-paper/40 py-4 text-paper" role="status">
        <span className="grid size-7 place-items-center rounded-full bg-signal">
          <Check className="size-4" strokeWidth={3} />
        </span>
        <span>You're on the list. First memo lands the first Tuesday of the month.</span>
      </div>
    )
  }

  return (
    <form name="newsletter" method="POST" onSubmit={handleSubmit} className="w-full">
      <input type="hidden" name="form-name" value="newsletter" />
      <p className="hidden">
        <label>
          Don't fill this out: <input name="bot-field" />
        </label>
      </p>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="group flex items-center border-b border-paper/40 focus-within:border-signal transition-colors">
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="min-w-0 flex-1 bg-transparent py-4 text-lg text-paper placeholder:text-paper/40 outline-none"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="flex items-center gap-2 py-4 pl-4 font-medium text-paper transition-colors hover:text-signal disabled:opacity-50"
        >
          {status === 'sending' ? 'Subscribing…' : 'Subscribe'}
          <ArrowRight className="size-4 transition-transform group-focus-within:translate-x-1" />
        </button>
      </div>
      {status === 'error' && (
        <p className="mt-3 text-sm text-signal" role="alert">
          That didn't go through. Try again in a moment.
        </p>
      )}
    </form>
  )
}
