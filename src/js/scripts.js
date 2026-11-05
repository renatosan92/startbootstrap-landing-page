// ===== CONFIG: cambia estos valores =====
const CONFIG = {
    inicioOferta: '2026-11-06T00:00:00-05:00', // inicio de la promo (zona horaria UTC-5)
    finOferta: '2026-11-30T23:59:59-05:00',    // fin de la promo
    // Enlaces de pago NUEVOS de FastPayDirect con el precio Black Friday.
    // (Los actuales cobran precio completo: 2m .../6ab8508cbaea3cadef54f85b, 12m .../6ab850a0c0e70c7fefb70c7b)
    pagoElite2m: 'https://link.fastpaydirect.com/payment-link/[NUEVO-ENLACE-2M]',
    pagoElite12m: 'https://link.fastpaydirect.com/payment-link/[NUEVO-ENLACE-12M]',
    whatsapp: '573159160952'
};
// ========================================

const wa = msg => 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(msg);
document.getElementById('paylink2m').href = CONFIG.pagoElite2m;
document.getElementById('paylink12m').href = CONFIG.pagoElite12m;
document.getElementById('walink').href = wa('Hola, quiero el descuento Black Friday de Trading en Paz');
document.getElementById('goatlink').href = wa('Hola, quiero agendar la entrevista para el programa GOAT (Black Friday)');
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
