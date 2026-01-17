// Get query parameters from URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        style: params.get('style') || '',
        price: params.get('price') || ''
    };
}

// Populate the form fields on booking page
document.addEventListener('DOMContentLoaded', () => {
    const params = getQueryParams();
    const styleInput = document.getElementById('style');
    const priceInput = document.getElementById('price');

    if (styleInput) styleInput.value = params.style;
    if (priceInput) priceInput.value = params.price;

    // WhatsApp Button
    const whatsappBtn = document.getElementById('whatsappBtn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', () => {
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;

            if (!date || !time) {
                alert('Please select date and time!');
                return;
            }

            const message = `Hello Styled by Sophie,%0AI want to book ${styleInput.value}%0APrice: ₦${priceInput.value}%0ADate: ${date}%0ATime: ${time}`;
            const phone = '2348156647487';
            const url = `https://wa.me/${phone}?text=${message}`;
            window.open(url, '_blank');
        });
    }
});
