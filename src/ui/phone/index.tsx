import React from "react";

import * as U from "./utils";

export const Phone = ({
  phone,
  telegram,
}: {
  phone: string;
  telegram?: string;
}) => {
  return (
    <>
      <a href={U.toHref(phone)}>{phone}</a>&nbsp;
      <a href={U.toWhatsapp(phone)}>
        <i className={"fab fa-whatsapp"}></i>
      </a>
      &nbsp;
      {telegram && (
        <a href={U.toTelegram(telegram)}>
          <i className={"fab fa-telegram"}></i>
        </a>
      )}
    </>
  );
};

export default Phone;
