
interface Locale { locale: string, direction: 'rtl' | 'ltr' };

const directions: { [key: string]: any } = {
    'ar': 'rtl'
};

export const locale = new Proxy<Locale>({ locale: 'en', direction: 'ltr' }, {
    set: function (target: Locale, property: PropertyKey, value: string) {
        if (property === 'locale') {
            target.locale = value;
            target.direction = directions[value] || 'ltr';
            if (localStorage) {
                localStorage.setItem('locale', value);
            }
            updateHtml(target);
        } else {
            return false;
        }
        return true;
    },
});

const updateHtml = (newLocale: Locale) => {
    if (document && document.documentElement) {
        document.documentElement.setAttribute('lang', newLocale.locale);
        document.documentElement.setAttribute('dir', newLocale.direction);
    }
};

if (localStorage) {
    //@ts-ignore
    let l = localStorage.getItem('locale') || window.navigator.userLanguage || window.navigator.language || 'en';
    l = l.split('-').pop();

    locale.locale = l;
}