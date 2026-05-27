const properties = [
    {
        id: 1,
        title: "Villa de Lujo en Casablanca",
        location: "Casablanca, Marruecos",
        pais: "marruecos",
        tipo: "villa",
        precio: 850000,
        habitaciones: 5,
        banos: 4,
        metros: 450,
        destacado: true,
        imagen: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
        galeria: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8c25118c?w=800&q=80"
        ],
        descripcion: "Espectacular villa de lujo en una de las zonas más exclusivas de Casablanca. Piscina privada, jardín de 2,000m², garaje para 3 coches.",
        caracteristicas: ["Piscina privada", "Jardín 2,000m²", "Garaje 3 coches", "Seguridad 24h", "Vistas al mar"],
        fecha: "2024-01-15"
    },
    {
        id: 2,
        title: "Ático en Madrid Centro",
        location: "Madrid, España",
        pais: "espana",
        tipo: "apartamento",
        precio: 620000,
        habitaciones: 3,
        banos: 2,
        metros: 180,
        destacado: true,
        imagen: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
        galeria: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8c25118c?w=800&q=80",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
        ],
        descripcion: "Magnífico ático en el corazón de Madrid. Terraza de 80m² con vistas panorámicas, acabados de lujo, cocina equipada.",
        caracteristicas: ["Terraza 80m²", "Vistas panorámicas", "Cocina equipada", "Aire acondicionado", "Parking"],
        fecha: "2024-02-20"
    },
    {
        id: 3,
        title: "Casa Tradicional en Marrakech",
        location: "Marrakech, Marruecos",
        pais: "marruecos",
        tipo: "casa",
        precio: 320000,
        habitaciones: 4,
        banos: 3,
        metros: 280,
        destacado: true,
        imagen: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
        galeria: [
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"
        ],
        descripcion: "Encantadora casa tradicional marroquí (Riad) completamente renovada. Patio interior, azotea con vistas a la Medina.",
        caracteristicas: ["Patio interior", "Azotea", "Renovada", "Cerca de la Medina", "Chimenea"],
        fecha: "2024-01-10"
    },
    {
        id: 4,
        title: "Apartamento en Barcelona",
        location: "Barcelona, España",
        pais: "espana",
        tipo: "apartamento",
        precio: 480000,
        habitaciones: 2,
        banos: 2,
        metros: 120,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
        galeria: [
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
            "https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?w=800&q=80",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
        ],
        descripcion: "Moderno apartamento en zona exclusiva de Barcelona. Diseño contemporáneo, mucha luz natural, cerca de transporte público.",
        caracteristicas: ["Diseño contemporáneo", "Luz natural", "Cerca metro", "Ascensor", "Trastero"],
        fecha: "2024-03-05"
    },
    {
        id: 5,
        title: "Villa en Tánger",
        location: "Tánger, Marruecos",
        pais: "marruecos",
        tipo: "villa",
        precio: 550000,
        habitaciones: 4,
        banos: 3,
        metros: 350,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
        galeria: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80"
        ],
        descripcion: "Villa moderna con vistas al Estrecho de Gibraltar. Jardín privado, piscina infinity, acabados premium.",
        caracteristicas: ["Vistas al Estrecho", "Piscina infinity", "Jardín privado", "Acabados premium", "Gimnasio"],
        fecha: "2024-02-15"
    },
    {
        id: 6,
        title: "Casa en Valencia",
        location: "Valencia, España",
        pais: "espana",
        tipo: "casa",
        precio: 390000,
        habitaciones: 3,
        banos: 2,
        metros: 200,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
        galeria: [
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
            "https://images.unsplash.com/photo-1600573472592-ee6c563aaec9?w=800&q=80"
        ],
        descripcion: "Casa familiar en zona residencial de Valencia. Jardín privado, barbacoa, cerca de colegios y parques.",
        caracteristicas: ["Jardín privado", "Barbacoa", "Cerca colegios", "Zona tranquila", "Garaje"],
        fecha: "2024-03-10"
    },
    {
        id: 7,
        title: "Terreno en Rabat",
        location: "Rabat, Marruecos",
        pais: "marruecos",
        tipo: "terreno",
        precio: 180000,
        habitaciones: 0,
        banos: 0,
        metros: 800,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        galeria: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
        ],
        descripcion: "Excelente terreno en zona en desarrollo de Rabat. Ideal para construcción residencial. Todos los servicios disponibles.",
        caracteristicas: ["800m²", "Zona en desarrollo", "Servicios disponibles", "Acceso pavimentado", "Vistas"],
        fecha: "2024-01-20"
    },
    {
        id: 8,
        title: "Piso en Málaga",
        location: "Málaga, España",
        pais: "espana",
        tipo: "apartamento",
        precio: 280000,
        habitaciones: 2,
        banos: 1,
        metros: 95,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
        galeria: [
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80"
        ],
        descripcion: "Piso reformado a 5 minutos de la playa. Cocina abierta, terraza, perfecto para inversión o residencia.",
        caracteristicas: ["Cerca playa", "Reformado", "Terraza", "Cocina abierta", "Ideal inversión"],
        fecha: "2024-03-15"
    }
];

function formatPrice(price) {
    return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0
    }).format(price);
}

function createPropertyCard(property) {
    return `
        <article class="property-card" data-id="${property.id}">
            <div class="property-image">
                <img src="${property.imagen}" alt="${property.title}" loading="lazy">
                ${property.destacado ? '<span class="property-badge">Destacado</span>' : ''}
                <span class="property-type">${property.tipo.charAt(0).toUpperCase() + property.tipo.slice(1)}</span>
                <div class="property-overlay">
                    <a href="propiedad.html?id=${property.id}" class="btn-view">Ver detalles</a>
                </div>
            </div>
            <div class="property-content">
                <div class="property-header">
                    <h3 class="property-title">${property.title}</h3>
                    <p class="property-location">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        ${property.location}
                    </p>
                </div>
                <div class="property-features">
                    <span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                            <polyline points="9 22 9 12 15 12 15 22"/>
                        </svg>
                        ${property.habitaciones} hab
                    </span>
                    <span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        ${property.banos} baños
                    </span>
                    <span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                            <line x1="3" y1="9" x2="21" y2="9"/>
                            <line x1="9" y1="21" x2="9" y2="9"/>
                        </svg>
                        ${property.metros}m²
                    </span>
                </div>
                <div class="property-footer">
                    <span class="property-price">${formatPrice(property.precio)}</span>
                    <a href="propiedad.html?id=${property.id}" class="property-link">
                        Ver más
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </a>
                </div>
            </div>
        </article>
    `;
}

function getFeaturedProperties(limit = 3) {
    return properties.filter(p => p.destacado).slice(0, limit);
}

function getPropertyById(id) {
    return properties.find(p => p.id === parseInt(id));
}
