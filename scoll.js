// scroll-mejorado.js - Scroll suave optimizado para móvil y PC
(function() {
    'use strict';
    
    let isScrolling = false; // Prevenir múltiples scrolls simultáneos
    
    // Configuración optimizada para velocidad
    const config = {
        duration: 100,          // Duración mucho más rápida
        easing: 'easeOutQuart', // Easing rápido pero suave
        offset: 0,              // Offset adicional si necesitas espacio extra
        mobileOffset: 70        // Offset extra para móviles (para navbars fijos)
    };
    
    // Detectar si es móvil
    function isMobile() {
        return window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    
    // Funciones de easing mejoradas
    const easingFunctions = {
        easeInOutCubic: function(t) {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        },
        easeOutQuart: function(t) {
            return 1 - (--t) * t * t * t;
        },
        easeInOutQuart: function(t) {
            return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
        }
    };
    
    // Función principal de scroll suave
    function smoothScroll(target, customDuration = null) {
        // Prevenir scroll si ya hay uno en progreso
        if (isScrolling) return;
        
        const targetElement = typeof target === 'string' 
            ? document.querySelector(target) 
            : target;
        
        if (!targetElement) {
            console.warn('Elemento no encontrado:', target);
            return;
        }
        
        isScrolling = true;
        
        // Calcular posiciones
        const startPosition = window.pageYOffset;
        const targetRect = targetElement.getBoundingClientRect();
        const offset = isMobile() ? config.mobileOffset : config.offset;
        const targetPosition = targetRect.top + startPosition - offset;
        const distance = targetPosition - startPosition;
        const duration = customDuration || config.duration;
        
        // Si la distancia es muy pequeña, hacer scroll directo
        if (Math.abs(distance) < 50) {
            window.scrollTo(0, targetPosition);
            isScrolling = false;
            return;
        }
        
        let startTime = null;
        const easingFunction = easingFunctions[config.easing];
        
        // Función de animación optimizada
        function animate(currentTime) {
            if (startTime === null) startTime = currentTime;
            
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const easedProgress = easingFunction(progress);
            
            const currentPosition = startPosition + (distance * easedProgress);
            window.scrollTo(0, currentPosition);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                // Asegurar posición final exacta
                window.scrollTo(0, targetPosition);
                isScrolling = false;
                
                // Disparar evento personalizado cuando termine
                targetElement.dispatchEvent(new CustomEvent('scrollComplete'));
            }
        }
        
        // Cancelar cualquier scroll automático del navegador
        window.addEventListener('wheel', cancelScroll, { passive: false });
        window.addEventListener('touchmove', cancelScroll, { passive: false });
        window.addEventListener('keydown', cancelScrollOnKey);
        
        // Iniciar animación
        requestAnimationFrame(animate);
        
        // Función para cancelar scroll si el usuario interactúa
        function cancelScroll(e) {
            if (isScrolling) {
                isScrolling = false;
                cleanupListeners();
            }
        }
        
        function cancelScrollOnKey(e) {
            // Cancelar en teclas de navegación
            if ([32, 33, 34, 35, 36, 37, 38, 39, 40].includes(e.keyCode)) {
                cancelScroll(e);
            }
        }
        
        function cleanupListeners() {
            window.removeEventListener('wheel', cancelScroll);
            window.removeEventListener('touchmove', cancelScroll);
            window.removeEventListener('keydown', cancelScrollOnKey);
        }
        
        // Limpiar listeners después de la animación
        setTimeout(cleanupListeners, duration + 50);
    }
    
    // Inicialización cuando el DOM esté listo
    function init() {
        // Aplicar a todos los enlaces internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const href = this.getAttribute('href');
                if (href && href !== '#' && href !== '#!') {
                    smoothScroll(href);
                }
            });
        });
        
        // Aplicar a elementos con clase .smooth-scroll
        document.querySelectorAll('.smooth-scroll').forEach(element => {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const target = this.getAttribute('data-target') || 
                              this.getAttribute('href') || 
                              this.dataset.scroll;
                              
                if (target) {
                    smoothScroll(target);
                }
            });
        });
        
        // Manejar URLs con hash al cargar la página
        if (window.location.hash) {
            setTimeout(() => {
                smoothScroll(window.location.hash);
            }, 50);
        }
        
        console.log('✅ Scroll suave mejorado activado');
    }
    
    // Función pública para scroll programático rápido
    window.scrollToSection = function(sectionId, duration = 50) {
        if (typeof sectionId === 'string' && !sectionId.startsWith('#')) {
            sectionId = '#' + sectionId;
        }
        smoothScroll(sectionId, duration);
    };
    
    // Función para configurar opciones
    window.setSmoothScrollConfig = function(newConfig) {
        Object.assign(config, newConfig);
    };
    
    // Función para scroll con offset personalizado
    window.scrollToSectionWithOffset = function(sectionId, offset) {
        const originalOffset = config.offset;
        config.offset = offset;
        smoothScroll(sectionId);
        config.offset = originalOffset;
    };
    
    // Inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Reinicializar en cambios de orientación móvil
    window.addEventListener('orientationchange', function() {
        setTimeout(init, 100);
    });
    
})();
