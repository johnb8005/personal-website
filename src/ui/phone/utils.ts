// replace all but digits or `+`
const sanitize = (p: string) => p.replace(/[^0-9+]/g, "");

export const toHref = (phone: string) => `tel:${sanitize(phone)}`;

/**
 *
 * https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat/
 */
export const toWhatsapp = (phone: string) => `https://wa.me/${sanitize(phone)}`;

export const toTelegram = (telegramUsername: string) =>
  `https://t.me/${telegramUsername}`;
