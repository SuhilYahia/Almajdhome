/**
 * عنوان الموقع المستخدم في روابط واتساب وغيرها.
 * عند النشر على استضافة، ضع في .env:
 * VITE_SITE_URL=https://yourdomain.com
 */
export function getSiteBaseUrl() {
  const envUrl = import.meta.env.VITE_SITE_URL
  if (envUrl && typeof envUrl === 'string') {
    return envUrl.replace(/\/$/, '')
  }
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  return ''
}
