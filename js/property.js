// Property detail page

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('propertyDetail');
    if (!container) return;
    
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = urlParams.get('id');
    
    if (!propertyId || !getPropertyById) {
        container.innerHTML = `
            <div style="padding: 100px 24px; text-align: center;">
                <h2>Propiedad no encontrada</h2>
                <p>La propiedad que buscas no existe.</p>
                <a href="propiedades.html" class="btn btn-primary">Ver todas las propiedades</a>
            </div>
        `;
        return;
    }
    
    const property = getPropertyById(propertyId);
    
    if (!property) {
        container.innerHTML = `
            <div style="padding: 100px 24px; text-align: center;">
                <h2>Propiedad no encontrada</h2>
                <p>La propiedad que buscas no existe.</p>
                <a href="propiedades.html" class="btn btn-primary">Ver todas las propiedades</a>
            </div>
        `;
        return;
    }
    
    container.innerHTML = `
        <section class="property-detail">
            <div class="container">
                <div class="property-gallery">
                    <div class="property-gallery-main">
                        <img src="${property.imagen}" alt="${property.title}" id="mainImage">
                    </div>
                    <div class="property-gallery-thumbs">
                        ${property.galeria.map((img, i) => `
                            <img src="${img}" alt="${property.title} ${i + 1}" 
                                 class="${i === 0 ? 'active' : ''}" 
                                 onclick="changeMainImage('${img}', this)">
                        `).join('')}
                    </div>
                </div>
                
                <div class="property-detail-grid">
                    <div class="property-detail-info">
                        <h1>${property.title}</h1>
                        <p class="property-detail-location">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                            ${property.location}
                        </p>
                        <p class="property-detail-price">${formatPrice(property.precio)}</p>
                        
                        <div class="property-detail-features">
                            <div class="detail-feature">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                                    <polyline points="9 22 9 12 15 12 15 22"/>
                                </svg>
                                <span>Habitaciones</span>
                                <strong>${property.habitaciones}</strong>
                            </div>
                            <div class="detail-feature">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                                <span>Baños</span>
                                <strong>${property.banos}</strong>
                            </div>
                            <div class="detail-feature">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                    <line x1="3" y1="9" x2="21" y2="9"/>
                                    <line x1="9" y1="21" x2="9" y2="9"/>
                                </svg>
                                <span>Metros</span>
                                <strong>${property.metros}m²</strong>
                            </div>
                        </div>
                        
                        <div class="property-description">
                            <h3>Descripción</h3>
                            <p>${property.descripcion}</p>
                        </div>
                        
                        <div class="property-caracteristicas">
                            <h3>Características</h3>
                            <ul class="caracteristicas-list">
                                ${property.caracteristicas.map(c => `<li>${c}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    
                    <div class="property-sidebar">
                        <div class="contact-card">
                            <h3>¿Te interesa esta propiedad?</h3>
                            <p>Contacta con nosotros y te daremos toda la información que necesitas.</p>
                            <a href="https://wa.me/212663218527?text=Hola! Me interesa la propiedad: ${encodeURIComponent(property.title)}" 
                               target="_blank" class="btn btn-primary btn-full">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                                WhatsApp
                            </a>
                        </div>
                        
                        <div class="contact-card">
                            <h3>Otras opciones</h3>
                            <a href="contacto.html" class="btn btn-secondary btn-full" style="margin-bottom: 12px;">
                                Formulario de contacto
                            </a>
                            <a href="propiedades.html" class="btn btn-outline btn-full" style="border-color: var(--color-gray-300); color: var(--color-gray-700);">
                                Ver más propiedades
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
});

window.changeMainImage = function(src, thumb) {
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.style.opacity = '0';
        setTimeout(() => {
            mainImage.src = src;
            mainImage.style.opacity = '1';
        }, 200);
    }
    
    document.querySelectorAll('.property-gallery-thumbs img').forEach(t => t.classList.remove('active'));
    if (thumb) thumb.classList.add('active');
};
