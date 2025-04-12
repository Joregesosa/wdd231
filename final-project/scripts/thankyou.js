const thankyouInfo = document.querySelector('.thankyou-info'); 

function customerData() {
    const urlParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlParams.entries());
 
    const { name, email, phone, message } = params;
    if (!name || !email || !phone || !message) {
            window.location.href = "hire-me.html";
    } 

    const template = document.createElement('template'); 
    const customerTemplate = `
                <p><strong>Full Name</strong>: ${name}</p> 
                <p><strong>Email Address</strong>: ${email}</p>
                <p><strong>Phone Number</strong>: ${phone}</p>
                <p><strong>Message</strong>: ${message}</p>  
        `;

    template.innerHTML = customerTemplate;
    const customerData = template.content.cloneNode(true);
    thankyouInfo.appendChild(customerData);
}

customerData();

 