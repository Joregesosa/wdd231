const thankyouInfo = document.querySelector('.thankyou-info');

function customerData() {
    const urlParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlParams.entries());
    const { firstName, lastName, email, phone, businessName, membershipLevel, timestamp } = params;
    if (!firstName || !lastName || !email || !phone || !businessName || !membershipLevel || !timestamp) {
        window.location.href = 'join.html';
        return;
    }
    const date = new Date(parseInt(timestamp, 10));
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    const template = document.createElement('template');

    const customerTemplate = `
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mobile Number:</strong> ${phone}</p>
                <p><strong>Business Name:</strong> ${businessName}</p>
                <p><strong>Membership Level:</strong> ${membershipLevel}</p>
                <p><strong>Date:</strong> ${formattedDate}</p>
        `;

    template.innerHTML = customerTemplate;
    const customerData = template.content.cloneNode(true);
    thankyouInfo.appendChild(customerData);
}

onload = () => {
    customerData();
    let countdown = 15;
    const countdownElement = document.getElementById('countdown');
    const redirectUrl = '/chamber/';

    const interval = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;

        if (countdown <= 0) {
            clearInterval(interval);
            window.location.href = redirectUrl;
        }
    }, 1000);
}

