import { FaWhatsapp } from 'react-icons/fa'

function normalizeSaudiPhoneToE164Digits(rawPhone, countryCode = '966') {
  const digitsOnly = String(rawPhone ?? '').replace(/\D/g, '')

  if (!digitsOnly) return ''

  // If user already provided full international (e.g., 9665xxxxxxxx)
  if (digitsOnly.startsWith(countryCode)) return digitsOnly

  // Common KSA local mobile format: 05xxxxxxxx -> 9665xxxxxxxx
  if (digitsOnly.startsWith('0') && digitsOnly.length === 10) {
    return `${countryCode}${digitsOnly.slice(1)}`
  }

  // Fallback: return digits as-is (wa.me requires digits only)
  return digitsOnly
}

export default function WhatsAppButton({
  phoneNumber = '0558177119',
  countryCode = '966',
  message = 'مرحباً، أريد الاستفسار عن المنتجات.',
}) {
  const waDigits = normalizeSaudiPhoneToE164Digits(phoneNumber, countryCode)
  const waHref = waDigits
    ? `https://wa.me/${waDigits}${message ? `?text=${encodeURIComponent(message)}` : ''}`
    : '#'

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      <a
        href={waHref}
        target="_blank"
        rel="noreferrer"
        aria-label="تواصل عبر واتساب"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg shadow-black/20 transition hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        style={{ backgroundColor: 'rgb(96 65 56)' }}
      >
        <FaWhatsapp className="h-7 w-7" />
      </a>
    </div>
  )
}
