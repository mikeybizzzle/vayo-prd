export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function calculateSavings(publicRate: number, memberRate: number): number {
  return Math.round(((publicRate - memberRate) / publicRate) * 100);
}

export function getAffiliateFromUrl(): string | null {
  if (typeof window === 'undefined') return null;
  
  const params = new URLSearchParams(window.location.search);
  return params.get('aid') || params.get('affiliate') || params.get('ref');
}

export function storeAffiliate(affiliateId: string) {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('vayo_affiliate', affiliateId);
  sessionStorage.setItem('vayo_affiliate', affiliateId);
  
  const expires = new Date();
  expires.setDate(expires.getDate() + 30);
  document.cookie = `vayo_affiliate=${affiliateId}; expires=${expires.toUTCString()}; path=/`;
}

export function getStoredAffiliate(): string | null {
  if (typeof window === 'undefined') return null;
  
  return (
    localStorage.getItem('vayo_affiliate') ||
    sessionStorage.getItem('vayo_affiliate') ||
    getCookie('vayo_affiliate')
  );
}

function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}