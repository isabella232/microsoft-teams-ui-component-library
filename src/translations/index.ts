export type TLocale = "en-US" | "fa";
export type TTextObject = string | { [locale: string]: string };

export const getText = (
  currentLocale: TLocale,
  textObject: TTextObject
): string => {
  if (typeof textObject === "string") return textObject;
  else if (textObject.hasOwnProperty(currentLocale))
    return textObject[currentLocale];
  else return textObject[Object.keys(textObject)[0]];
};

export type TTranslations = {
  locale: TLocale;
  [stringKey: string]: string;
};

export default {
  "en-US": {
    locale: "en-US",
    hello: "Hello",
    "add lane": "Add lane",
    "add board item": "Add item to board",
    "board lane": "Board lane",
    "board item": "Board item",
    "name lane": "Name this lane…",
    "lane pending": "New lane",
    "move lane left": "Move left",
    "move lane right": "Move right",
    delete: "Delete",
    "lane options": "Lane options",
  },
  fa: {
    locale: "fa",
    hello: "سلام",
    "add lane": "خط اضافه کنید",
    "add board item": "مورد را به تخته اضافه کنید",
    "board lane": "خط تخته",
    "board item": "مورد هیئت مدیره",
    "name lane": "این خط را نامگذاری کنید…",
    "lane pending": "خط جدید",
    "move lane left": "به سمت چپ حرکت کنید",
    "move lane right": "حرکت به سمت راست",
    delete: "حذف",
    "lane options": "گزینه های خط",
  },
};
