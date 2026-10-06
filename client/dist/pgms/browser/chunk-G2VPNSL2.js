import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-TFR4PE7B.js";

// src/app/services/theme.service.ts
var ThemeService = class _ThemeService {
  storageKey = "app-theme";
  darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  themeSource = new BehaviorSubject(this.getInitialTheme());
  theme$ = this.themeSource.asObservable();
  isDarkMode$ = new BehaviorSubject(this.isDarkMode());
  constructor() {
    this.darkThemeMq.addEventListener("change", () => {
      if (this.themeSource.value === "system") {
        this.isDarkMode$.next(this.isDarkMode());
        this.applyTheme();
      }
    });
    this.applyTheme();
  }
  getInitialTheme() {
    return localStorage.getItem(this.storageKey) || "system";
  }
  setTheme(theme) {
    this.themeSource.next(theme);
    localStorage.setItem(this.storageKey, theme);
    this.isDarkMode$.next(this.isDarkMode());
    this.applyTheme();
  }
  isDarkMode() {
    const current = this.themeSource.value;
    return current === "dark" || current === "system" && this.darkThemeMq.matches;
  }
  applyTheme() {
    const isDark = this.isDarkMode();
    const root = document.documentElement;
    root.setAttribute("data-bs-theme", isDark ? "dark" : "light");
    root.classList.toggle("dark", isDark);
    document.body.classList.toggle("dark", isDark);
    document.body.classList.toggle("dark-theme", isDark);
    document.body.classList.toggle("light-theme", !isDark);
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  ThemeService
};
//# sourceMappingURL=chunk-G2VPNSL2.js.map
