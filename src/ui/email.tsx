import React from "react";

const sanitize = (e: string) => e.replace(/@/g, " [@] ");

const toHref = (e: string) => `mailto:${e}`;

export const Email = ({ email }: { email: string }) => (
  <a href={toHref(email)}>{sanitize(email)}</a>
);

export default Email;
