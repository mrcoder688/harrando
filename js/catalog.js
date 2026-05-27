// Catalog page functionality

document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('propertiesGrid');
    const pagination = document.getElementById('pagination');
    const resultsCount = document.getElementById('resultsCount');
    
    // Filters
    const filterPais = document.getElementById('filterPais');
    const filterTipo = document.getElementById('filterTipo');
    const filterPrecio = document.getElementById('filterPrecio');
    const precioValue = document.getElementById('precioValue');
    const filterHabitaciones = document.getElementById('filterHabitaciones');
    const sortBy = document.getElementById('sortBy');
    const resetBtn = document.getElementById('resetFilters');
    
    let currentPage = 1;
    const itemsPerPage = 6;
    let activeFilters = {
        pais: '',
        tipo: '',
        precioMax: 2000000,
        habitaciones: ''
    };
    let activeSort = 'destacado';
    
    // Check URL params for filters
    const urlParams = new URLSearchParams(window.location.search);
    const paisParam = urlParams.get('pais');
    if (paisParam && filterPais) {
        filterPais.value = paisParam;
        activeFilters.pais = paisParam;
    }
    
    // Price slider
    if (filterPrecio && precioValue) {
        filterPrecio.addEventListener('input', () => {
            const val = parseInt(filterPrecio.value);
            precioValue.textContent = '€' + val.toLocaleString();
            activeFilters.precioMax = val;
            currentPage = 1;
            renderProperties();
        });
    }
    
    // Filter change handlers
    if (filterPais) {
        filterPais.addEventListener('change', () => {
            activeFilters.pais = filterPais.value;
            currentPage = 1;
            renderProperties();
        });
    }
    
    if (filterTipo) {
        filterTipo.addEventListener('change', () => {
            activeFilters.tipo = filterTipo.value;
            currentPage = 1;
            renderProperties();
        });
    }
    
    // Habitaciones chips
    if (filterHabitaciones) {
        const chips = filterHabitaciones.querySelectorAll('button');
        chips.forEach(chip => {
            chip.addEventListener('click', () => {
                chips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                activeFilters.habitaciones = chip.dataset.value;
                currentPage = 1;
                renderProperties();
            });
        });
    }
    
    // Sort
    if (sortBy) {
        sortBy.addEventListener('change', () => {
            activeSort = sortBy.value;
            renderProperties();
        });
    }
    
    // Reset
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (filterPais) filterPais.value = '';
            if (filterTipo) filterTipo.value = '';
            if (filterPrecio) {
                filterPrecio.value = 2000000;
                precioValue.textContent = '€2,000,000';
            }
            if (filterHabitaciones) {
                filterHabitaciones.querySelectorAll('button').forEach(c => c.classList.remove('active'));
                filterHabitaciones.querySelector('button').classList.add('active');
            }
            activeFilters = { pais: '', tipo: '', precioMax: 2000000, habitaciones: '' };
            activeSort = 'destacado';
            if (sortBy) sortBy.value = 'destacado';
            currentPage = 1;
            renderProperties();
        });
    }
    
    function filterProperties() {
        let filtered = [...properties];
        
        if (activeFilters.pais) {
            filtered = filtered.filter(p => p.pais === activeFilters.pais);
        }
        
        if (activeFilters.tipo) {
            filtered = filtered.filter(p => p.tipo === activeFilters.tipo);
        }
        
        filtered = filtered.filter(p => p.precio <= activeFilters.precioMax);
        
        if (activeFilters.habitaciones) {
            const minHab = parseInt(activeFilters.habitaciones);
            filtered = filtered.filter(p => p.habitaciones >= minHab);
        }
        
        // Sort
        switch (activeSort) {
            case 'precio-asc':
                filtered.sort((a, b) => a.precio - b.precio);
                break;
            case 'precio-desc':
                filtered.sort((a, b) => b.precio - a.precio);
                break;
            case 'reciente':
                filtered.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
                break;
            default:
                filtered.sort((a, b) => (b.destacado ? 1 : 0) - (a.destacado ? 1 : 0));
        }
        
        return filtered;
    }
    
    function renderProperties() {
        const filtered = filterProperties();
        const total = filtered.length;
        const totalPages = Math.ceil(total / itemsPerPage);
        const start = (currentPage - 1) * itemsPerPage;
        const pageItems = filtered.slice(start, start + itemsPerPage);
        
        if (resultsCount) {
            resultsCount.textContent = `${total} propiedad${total !== 1 ? 'es' : ''} encontrada${total !== 1 ? 's' : ''}`;
        }
        
        if (grid) {
            if (pageItems.length === 0) {
                grid.innerHTML = `
                    <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                        <p style="font-size: 1.125rem; color: var(--color-gray-500); margin-bottom: 16px;">
                            No se encontraron propiedades con estos filtros
                        </p>
                        <button onclick="document.getElementById('resetFilters').click()" class="btn btn-primary">
                            Limpiar filtros
                        </button>
                    </div>
                `;
            } else {
                grid.innerHTML = pageItems.map(p => createPropertyCard(p)).join('');
            }
        }
        
        // Render pagination
        if (pagination && totalPages > 1) {
            let html = '';
            
            // Prev
            html += `<button ${currentPage === 1 ? 'disabled' : ''} onclick="goToPage(${currentPage - 1})">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>`;
            
            // Pages
            for (let i = 1; i <= totalPages; i++) {
                if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
                    html += `<button class="${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
                } else if (i === currentPage - 2 || i === currentPage + 2) {
                    html += `<span style="padding: 8px;">...</span>`;
                }
            }
            
            // Next
            html += `<button ${currentPage === totalPages ? 'disabled' : ''} onclick="goToPage(${currentPage + 1})">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>`;
            
            pagination.innerHTML = html;
        } else if (pagination) {
            pagination.innerHTML = '';
        }
    }
    
    window.goToPage = function(page) {
        currentPage = page;
        renderProperties();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    // Initial render
    renderProperties();
});
