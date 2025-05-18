
lucide.createIcons();


const signals = [
    {
        pair: "XAU/USD",
        position: "Short",
        entryPrice: "2892",
        takeProfit: "2882",
        stopLoss: "2900",
        status: "closed"
    },
    {
        pair: "XAU/USD",
        position: "Long",
        entryPrice: "2900",
        takeProfit: "2910",
        stopLoss: "2890",
        status: "closed"
    },
    {
        pair: "XAU/USD",
        position: "Short",
        entryPrice: "2882",
        takeProfit: "2978",
        stopLoss: "2890",
        status: "Lost"
    }
];


const testimonials = [
    {
        name: "Alex Thompson",
        role: "Professional Trader",
        quote: "The accuracy of these signals is incredible. I've been trading for years, and this is the best service I've used."
    },
    {
        name: "Sarah Chen",
        role: "Crypto Investor",
        quote: "The AI-powered analysis gives me confidence in my trading decisions. The mobile alerts are a game-changer."
    },
    {
        name: "Michael Rodriguez",
        role: "Day Trader",
        quote: "The real-time signals and professional analysis have significantly improved my trading performance."
    }
];


function createSignalCard(signal) {
    const statusIcon = signal.status === 'closed' ? 'activity' : 'clock';
    const statusClass = signal.status === 'closed' ? 'closed' : '';
    
    
    return `
        <div class="signal-card animate-float">
            <div class="signal-header">
                <div>
                    <h3>${signal.pair}</h3>
                    <p>${signal.position}</p>
                </div>
                <span class="status ${statusClass}">
                    <i data-lucide="${statusIcon}"></i>
                    ${signal.status.charAt(0).toUpperCase() + signal.status.slice(1)}
                </span>
            </div>
            <div class="signal-details">
                <div class="detail">
                    <span>Entry Price</span>
                    <span>$${signal.entryPrice}</span>
                </div>
                <div class="detail">
                    <span>Take Profit</span>
                    <span class="profit">$${signal.takeProfit}</span>
                </div>
                <div class="detail">
                    <span>Stop Loss</span>
                    <span class="loss">$${signal.stopLoss}</span>
                </div>
            </div>
        </div>
    `;
}


function createTestimonialCard(testimonial) {
    return `
        <div class="cyber-card animate-float">
            <div class="testimonial-header">
                <div class="testimonial-avatar">
                    <i data-lucide="user" class="avatar-icon"></i>
                </div>
                <div class="testimonial-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}</p>
                </div>
            </div>
            <div class="testimonial-quote">
                <i data-lucide="quote" class="quote-icon"></i>
                <p>${testimonial.quote}</p>
            </div>
        </div>
    `;
}


function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 80, 
            behavior: 'smooth'
        });
    }
}


function handleButtonClick(e) {
    const button = e.currentTarget;
    

    button.style.transform = 'scale(0.98)';
    setTimeout(() => {
        button.style.transform = '';
    }, 100);


    if (button.classList.contains('get-started-btn')) {
        smoothScroll('#pricing');
    } else if (button.classList.contains('view-demo-btn')) {
        smoothScroll('#signals');
    }
}


function initializePage() {

    lucide.createIcons();


    const signalsGrid = document.querySelector('.signals-grid');
    if (signalsGrid) {
        signalsGrid.innerHTML = signals.map(signal => createSignalCard(signal)).join('');
    }


    const testimonialsGrid = document.querySelector('.testimonials-grid');
    if (testimonialsGrid) {
        testimonialsGrid.innerHTML = testimonials.map(testimonial => createTestimonialCard(testimonial)).join('');
    }


    document.querySelectorAll('.cyber-button').forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    lucide.createIcons();
}


document.addEventListener('DOMContentLoaded', initializePage);


function openVideoModal() {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = 'https://www.youtube.com/embed/k_g6ZpXvHE0?autoplay=1&rel=0&modestbranding=1';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = '';
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}


document.getElementById('videoModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeVideoModal();
    }
}); 
