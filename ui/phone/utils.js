const sanitize = (p) => p.replace(/[^0-9+]/g, "");
export const toHref = (phone) => `tel:${sanitize(phone)}`;
export const toWhatsapp = (phone) => `https://wa.me/${sanitize(phone)}`;
export const toTelegram = (telegramUsername) => `https://t.me/${telegramUsername}`;
