/*!
* Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2026 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// ===== CONFIG: cambia estos valores =====
const CONFIG = {
    inicioOferta: '2026-11-06T00:00:00-05:00', // inicio de la promo (zona horaria UTC-5)
    finOferta: '2026-11-30T23:59:59-05:00',    // fin de la promo
    enlacePago: 'https://[TU-ENLACE-DE-PAGO]',  // Hotmart, Stripe, PayPal...
    whatsapp: '[NUMERO SIN +, ej. 573001234567]'
};
// ========================================

document.getElementById('paylink').href = CONFIG.enlacePago;
document.getElementById('walink').href =
    'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent('Hola, tengo una duda sobre la oferta de Black Friday');
document.getElementById('year').textContent = new Date().getFullYear();

const end = new Date(CONFIG.finOferta).getTime();
const pad = n => String(n).padStart(2, '0');
const set = (id, v) => { document.getElementById(id).textContent = v; };

function tick() {
    const diff = end - Date.now();
    if (diff <= 0) {
        ['d', 'h', 'm', 's'].forEach(id => set(id, '00'));
        set('cdnote', 'La oferta de Black Friday ha terminado.');
        set('topbar', 'LA OFERTA DE BLACK FRIDAY HA TERMINADO');
        document.body.classList.add('ended');
        return;
    }
    set('d', pad(Math.floor(diff / 864e5)));
    set('h', pad(Math.floor(diff / 36e5) % 24));
    set('m', pad(Math.floor(diff / 6e4) % 60));
    set('s', pad(Math.floor(diff / 1e3) % 60));
    setTimeout(tick, 1000);
}
tick();
