// Get query parameters from URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        style: params.get('style') || '',
        price: params.get('price') || ''
    };
}

document.addEventListener('DOMContentLoaded', () => {
    const params = getQueryParams();

    const styleInput = document.getElementById('style');
    const priceInput = document.getElementById('price');
    const whatsappBtn = document.getElementById('whatsappBtn');

    // Populate fields
    if (styleInput) styleInput.value = params.style;

    if (priceInput && params.price) {
        priceInput.value = `₦${Number(params.price).toLocaleString()}`;
    }

    // WhatsApp booking
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', () => {
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;

            if (!date || !time) {
                alert('Please select date and time!');
                return;
            }

            const message = `
Hello Styled by Sophie 👋
I would like to book:

💇 Hairstyle: ${styleInput.value}
💰 Price: ₦${Number(params.price).toLocaleString()}
📅 Date: ${date}
⏰ Time: ${time}
            `.trim();

            const phone = '2348156647487';
            const encodedMessage = encodeURIComponent(message);

            const url = `https://wa.me/${phone}?text=${encodedMessage}`;
            window.open(url, '_blank');
        });
    }
});
