import * as U from "./utils";

test("telegram", () => {
  expect(U.toTelegram("myusername")).toEqual("https://t.me/myusername");
});

test("whatsapp", () => {
  expect(U.toWhatsapp("+ 41 78 123 45 67")).toEqual(
    "https://wa.me/+41781234567"
  );
});
