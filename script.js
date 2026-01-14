// MANEJO DEL FORMULARIO DE PRESUPUESTO
document.getElementById('form-presupuesto').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Recoger datos del formulario
    const nombre = this.querySelector('input[placeholder="Tu nombre"]').value;
    const email = this.querySelector('input[placeholder="Tu correo electrónico"]').value;
    const telefono = this.querySelector('input[placeholder="Tu teléfono"]').value;
    const tipoReforma = this.querySelector('select').value;
    const mensaje = this.querySelector('textarea').value;
    
    // Validación básica
    if (!nombre || !email || !telefono || !tipoReforma) {
        alert('Por favor, completa todos los campos requeridos.');
        return;
    }
    
    // Simular envío (en producción, aquí iría petición al servidor)
    console.log('Presupuesto solicitado:', {
        nombre,
        email,
        telefono,
        tipoReforma,
        mensaje
    });
    
    // Mensaje de confirmación
    alert('¡Gracias! Hemos recibido tu solicitud de presupuesto. Te contactaremos en las próximas 24 horas.');
    
    // Limpiar formulario
    this.reset();
});

// EFECTO DE SCROLL EN HEADER
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    }
});

// ANIMACIÓN AL CARGAR (AOS - Animate On Scroll simulado)
function checkInView() {
    const elements = document.querySelectorAll('.servicio-card, .ventaja-item, .testimonio-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Preparar elementos para animación
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.servicio-card, .ventaja-item, .testimonio-card');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    checkInView();
});

// Verificar elementos en vista durante el scroll
window.addEventListener('scroll', checkInView);

// NAVEGACIÓN SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// EFECTO HOVER EN GALERÍA
document.querySelectorAll('.galeria-item').forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.filter = 'brightness(0.8)';
    });
    
    item.addEventListener('mouseout', function() {
        this.style.filter = 'brightness(1)';
    });
});
