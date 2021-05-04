import React from "react";

// replace all but digits or `+`
const sanitize = (p: string) => p.replace(/[^0-9+]/g, "");

const toHref = (phone: string) => `tel:${sanitize(phone)}`;

/**
 *
 * https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat/
 */
const toWhatsapp = (phone: string) => `https://wa.me/${sanitize(phone)}`;

export const Phone = ({ phone }: { phone: string }) => {
  return (
    <>
      <a href={toHref(phone)}>{phone}</a>&nbsp;
      <a href={toWhatsapp(phone)}>
        <i className={"fab fa-whatsapp"}></i>
      </a>
    </>
  );
};

export default Phone;
