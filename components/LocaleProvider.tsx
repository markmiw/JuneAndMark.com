
"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { Locale, t } from "@/lib/translations";

const LocaleContext = createContext<{ locale: Locale; tr: typeof t.en }>({
  locale: "en",
  tr: t.en,
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const lang = navigator.language || "";
    if (lang.toLowerCase().startsWith("ko")) setLocale("ko");
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, tr: t[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
