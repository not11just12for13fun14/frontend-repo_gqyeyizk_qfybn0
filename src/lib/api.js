const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export async function apiGet(path, params = {}) {
  const url = new URL(`${BASE_URL}${path}`);
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, v);
  });
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error('Request failed');
  return res.json();
}

export async function apiPost(path, body = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error('Request failed');
  return res.json();
}

export const WHATSAPP_NUMBER = '+5215555555555';
export function waLink(text = '') {
  const msg = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${msg}`;
}
