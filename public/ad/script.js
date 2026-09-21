document.addEventListener('DOMContentLoaded', () => {
    // --- 1. i18n Logic ---
    const langToggleBtn = document.getElementById('lang-toggle');
    const langEnSpan = document.querySelector('.lang-en');
    const langTeSpan = document.querySelector('.lang-te');

    // Check local storage for language preference, default to 'en'
    let currentLang = localStorage.getItem('pref-lang') || 'en';
    applyTranslations(currentLang);

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'te' : 'en';
        localStorage.setItem('pref-lang', currentLang);
        applyTranslations(currentLang);
    });

    function applyTranslations(lang) {
        // Update toggle UI
        if (lang === 'en') {
            langEnSpan.classList.add('active');
            langTeSpan.classList.remove('active');
        } else {
            langTeSpan.classList.add('active');
            langEnSpan.classList.remove('active');
        }

        // Apply text content
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'INPUT' && el.type === 'submit') {
                    el.value = translations[lang][key];
                } else if (el.tagName === 'OPTION') {
                    el.textContent = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });
    }

    // --- 2. UTM Tracking ---
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source') || '';
    const utmMedium = urlParams.get('utm_medium') || '';
    const utmCampaign = urlParams.get('utm_campaign') || '';

    document.getElementById('utm_source').value = utmSource;
    document.getElementById('utm_medium').value = utmMedium;
    document.getElementById('utm_campaign').value = utmCampaign;

    // --- 3. Form Submission ---
    const leadForm = document.getElementById('lead-form');
    const formSuccessMsg = document.getElementById('form-success-msg');

    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitBtn = leadForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;

        const formData = new FormData(leadForm);
        const data = Object.fromEntries(formData.entries());

        // --- Google Sheets Integration ---
        // REPLACE THIS URL with your deployed Google Apps Script Web App URL
        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyBpgGGiiHAx6uICK1VhViiQomaFGmy7VtgIPAwJa4jgOQksbb5XryJJaJMXto8574AVA/exec';

        console.log('Tracking Event: Form Submitted', data);
        if (typeof gtag === 'function') {
            gtag('event', 'generate_lead', {
                'event_category': 'ad_campaign',
                'event_label': 'free_medical_camp_registration',
                'value': 1
            });
        }

        fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Prevents CORS errors on the frontend
            body: new URLSearchParams(formData)
        })
            .then(() => {
                // Because of 'no-cors', we can't read the exact success response.
                // We assume it succeeded if the network request completed.
                leadForm.style.display = 'none';
                formSuccessMsg.classList.remove('hidden');
                
                // Show an explicit popup message on the screen
                alert("Thank you! Your registration is successful. We will contact you soon.");
            })
            .catch(error => {
                console.error('Error!', error.message);
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
                alert('There was an error submitting the form. Please try again or call us directly.');
            });
    }); // End of leadForm.addEventListener('submit')

    // --- 4. Smooth Scrolling & Form Highlight ---
    const scrollButtons = document.querySelectorAll('.scroll-to-form');
    const formSection = document.getElementById('main-form-section');
    const formCard = document.querySelector('.form-card');

    scrollButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Scroll to form
            formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Apply highlight animation
            setTimeout(() => {
                formCard.classList.add('highlight');
                // Optional: Focus first field
                document.getElementById('fullName').focus({ preventScroll: true });

                setTimeout(() => {
                    formCard.classList.remove('highlight');
                }, 800);
            }, 500); // Wait for scroll to mostly finish
        });
    });

    // --- 5. Intersection Observer for Sticky Mobile CTA ---
    const stickyCta = document.getElementById('sticky-cta');

    // Only apply logic if screen is mobile-sized initially
    if (window.innerWidth <= 768) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Form is visible, hide sticky CTA
                    stickyCta.classList.remove('visible');
                } else {
                    // Form is not visible, show sticky CTA
                    stickyCta.classList.add('visible');
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% of form is visible

        observer.observe(formSection);
    }

    // --- 6. Event Tracking ---
    const trackElements = document.querySelectorAll('[data-track]');
    trackElements.forEach(el => {
        el.addEventListener('click', (e) => {
            const trackName = el.getAttribute('data-track');
            console.log(`Tracking Event: Clicked [${trackName}]`);
            if (typeof gtag === 'function') {
                gtag('event', trackName, {
                    'event_category': 'ad_campaign_interaction'
                });
            }
        });
    });
});
