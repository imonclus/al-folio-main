---
layout: page
title: Recursos EDU
permalink: /recursos-tac/
nav: true
nav_order: 6
---

<!-- Contenedor principal del Dashboard de Recursos TAC -->
<div class="recursos-dashboard">
  
  <!-- Barra de búsqueda superior -->
  <div class="search-container">
    <div class="search-wrapper">
      <i class="fa-solid fa-magnifying-glass search-icon"></i>
      <input type="text" id="search-input" class="search-input" placeholder="Cerca recursos, programari o enllaços..." aria-label="Cercar recursos">
      <button id="clear-search" class="clear-search-btn" style="display: none;" title="Netejar cerca">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
    <div id="search-status" class="search-status"></div>
  </div>

  <!-- Contenedor del contenido (Layout dos columnas) -->
  <div class="dashboard-layout">
    
    <!-- Barra lateral de categorías -->
    <aside class="sidebar-categories">
      <h3 class="sidebar-title">Categories</h3>
      <ul id="categories-list" class="categories-list">
        <!-- Generado dinámicamente -->
      </ul>
    </aside>

    <!-- Área principal de contenido -->
    <main class="main-content">
      <h2 id="active-category-title" class="active-title">Carregant recursos...</h2>

      <!-- Contenido de la categoría (HTML original limpio) -->
      <div id="category-content-container" class="category-content-container">
        <!-- Generado dinámicamente -->
      </div>

      <!-- Resultados de búsqueda (Formato Cards) -->
      <div id="search-results-container" class="search-results-container" style="display: none;">
        <div id="cards-grid" class="cards-grid">
          <!-- Generado dinámicamente -->
        </div>
      </div>
    </main>

  </div>
</div>

<!-- Estilos CSS del Dashboard -->
<style>
  :root {
    --dashboard-primary: var(--global-theme-color);
    --dashboard-bg: var(--global-bg-color);
    --dashboard-card-bg: var(--global-card-bg-color);
    --dashboard-text: var(--global-text-color);
    --dashboard-text-muted: var(--global-text-color-light);
    --dashboard-divider: var(--global-divider-color);
  }

  .recursos-dashboard {
    margin-top: 25px;
    font-family: inherit;
  }

  /* Barra de búsqueda */
  .search-container {
    margin-bottom: 30px;
  }

  .search-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
  }

  .search-icon {
    position: absolute;
    left: 15px;
    color: var(--dashboard-text-muted);
    font-size: 16px;
    pointer-events: none;
  }

  .search-input {
    width: 100%;
    padding: 12px 40px 12px 42px;
    font-size: 16px;
    border: 2px solid var(--dashboard-divider);
    border-radius: 10px;
    background-color: var(--dashboard-card-bg);
    color: var(--dashboard-text);
    outline: none;
    transition: all 0.25s ease-in-out;
  }

  .search-input:focus {
    border-color: var(--dashboard-primary);
    box-shadow: 0 0 0 3px rgba(140, 36, 37, 0.1);
  }

  /* Si el tema es dark, cambiamos el color de sombra en foco */
  html[data-theme="dark"] .search-input:focus {
    box-shadow: 0 0 0 3px rgba(0, 139, 139, 0.15);
  }

  .clear-search-btn {
    position: absolute;
    right: 12px;
    background: none;
    border: none;
    color: var(--dashboard-text-muted);
    font-size: 16px;
    cursor: pointer;
    padding: 5px;
    transition: color 0.15s ease-in-out;
  }

  .clear-search-btn:hover {
    color: var(--dashboard-primary);
  }

  .search-status {
    font-size: 14px;
    color: var(--dashboard-text-muted);
    margin-top: 8px;
    min-height: 20px;
  }

  /* Layout del Dashboard */
  .dashboard-layout {
    display: grid;
    grid-template-columns: 260px 1fr;
    gap: 30px;
    align-items: start;
  }

  /* Barra lateral de categorías */
  .sidebar-categories {
    position: sticky;
    top: 80px;
    background-color: var(--dashboard-card-bg);
    border: 1px solid var(--dashboard-divider);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
  }

  .sidebar-title {
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 0;
    margin-bottom: 15px;
    color: var(--dashboard-text);
    border-bottom: 2px solid var(--dashboard-primary);
    padding-bottom: 8px;
  }

  .categories-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
    max-height: 70vh;
    overflow-y: auto;
  }

  /* Estilización de scrollbar para lista de categorías */
  .categories-list::-webkit-scrollbar {
    width: 4px;
  }
  .categories-list::-webkit-scrollbar-thumb {
    background-color: var(--dashboard-divider);
    border-radius: 10px;
  }

  .category-item-btn {
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    padding: 8px 12px;
    font-size: 14px;
    font-weight: 500;
    color: var(--dashboard-text);
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .category-item-btn:hover {
    background-color: var(--global-code-bg-color);
    color: var(--dashboard-primary);
    padding-left: 16px;
  }

  .category-item-btn.active {
    background-color: var(--dashboard-primary);
    color: var(--global-hover-text-color) !important;
    font-weight: 600;
  }

  /* Área principal */
  .main-content {
    background-color: var(--dashboard-card-bg);
    border: 1px solid var(--dashboard-divider);
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
    min-height: 450px;
  }

  .active-title {
    font-size: 24px;
    font-weight: 700;
    color: var(--dashboard-text);
    margin-top: 0;
    margin-bottom: 20px;
    border-bottom: 1px solid var(--dashboard-divider);
    padding-bottom: 10px;
  }

  /* Estilos específicos para limpiar/modernizar el HTML de Google Sites importado */
  .category-content-container {
    color: var(--dashboard-text);
    line-height: 1.65;
    text-align: justify;
  }

  .category-content-container p {
    margin-bottom: 15px;
  }

  .category-content-container hr {
    border: 0;
    border-top: 1px solid var(--dashboard-divider);
    margin: 25px 0;
  }

  .category-content-container a {
    color: var(--dashboard-primary);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.15s ease-in-out;
  }

  .category-content-container a:hover {
    color: var(--global-hover-color);
    text-decoration: underline;
  }

  .category-content-container blockquote {
    border-left: 4px solid var(--dashboard-primary);
    padding: 10px 20px;
    margin: 15px 0;
    background-color: var(--global-code-bg-color);
    border-radius: 0 8px 8px 0;
  }

  .category-content-container img {
    max-width: 100%;
    height: auto !important;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    margin: 20px auto;
    display: block;
  }

  /* Eliminación de las tablas de maquetación clásicas pero manteniendo su contenido legible */
  .category-content-container table {
    width: 100% !important;
    border-collapse: collapse;
    margin: 20px 0;
  }

  /* Estilos para tablas de datos reales (que contienen headers) */
  .category-content-container table:has(th) th {
    padding: 12px 15px;
    border-bottom: 2px solid var(--dashboard-primary) !important;
    text-align: left;
    font-weight: 700;
    background-color: var(--global-code-bg-color);
  }

  .category-content-container table:has(th) td {
    padding: 12px 15px;
    border-bottom: 1px solid var(--dashboard-divider) !important;
    vertical-align: top;
  }

  /* Para tablas de maquetación heredadas (sin headers), mantenemos la eliminación de estilos */
  .category-content-container table:not(:has(th)) td {
    padding: 0;
    border: none !important;
  }

  /* Lista de recursos */
  .category-content-container ul, .category-content-container ol {
    margin-left: 20px;
    margin-bottom: 15px;
  }

  .category-content-container li {
    margin-bottom: 5px;
  }

  /* Grid de Resultados de Búsqueda (Cards) */
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }

  .resource-card {
    background-color: var(--dashboard-card-bg);
    border: 1px solid var(--dashboard-divider);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
    transition: all 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
  }

  .resource-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
    border-color: var(--dashboard-primary);
  }

  .resource-card-category {
    font-size: 11px;
    font-weight: 700;
    color: var(--dashboard-primary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 10px;
  }

  .resource-card-body {
    flex-grow: 1;
    font-size: 14px;
    line-height: 1.5;
    text-align: justify;
  }

  .resource-card-body p {
    margin-bottom: 10px;
  }

  .resource-card-body p:last-child {
    margin-bottom: 0;
  }

  .resource-card-body a {
    color: var(--dashboard-primary);
    text-decoration: none;
    font-weight: 600;
  }

  .resource-card-body a:hover {
    text-decoration: underline;
  }

  .resource-card-body img {
    max-width: 100%;
    height: auto !important;
    border-radius: 6px;
    margin: 10px auto;
    display: block;
  }

  .resource-card-body hr {
    display: none; /* Ocultar los separadores de bloque en formato de tarjetas */
  }

  /* Responsivo para móviles */
  @media (max-width: 768px) {
    .dashboard-layout {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .sidebar-categories {
      position: sticky;
      top: 50px;
      z-index: 100;
      padding: 10px 15px;
      border-radius: 8px;
    }

    .sidebar-title {
      display: none; /* Ocultar el título de la barra lateral en móviles */
    }

    .categories-list {
      flex-direction: row;
      overflow-x: auto;
      white-space: nowrap;
      gap: 10px;
      max-height: none;
      padding-bottom: 5px;
    }

    .category-item-btn {
      padding: 6px 12px;
      font-size: 13px;
      border: 1px solid var(--dashboard-divider);
    }
    
    .category-item-btn.active {
      border-color: var(--dashboard-primary);
    }

    .main-content {
      padding: 20px;
      min-height: auto;
    }
  }
</style>

<!-- Lógica JavaScript de la página -->
<script>
  document.addEventListener("DOMContentLoaded", function() {
    let resourcesData = [];
    const searchInput = document.getElementById("search-input");
    const clearSearchBtn = document.getElementById("clear-search");
    const searchStatus = document.getElementById("search-status");
    const categoriesList = document.getElementById("categories-list");
    const activeCategoryTitle = document.getElementById("active-category-title");
    const categoryContentContainer = document.getElementById("category-content-container");
    const searchResultsContainer = document.getElementById("search-results-container");
    const cardsGrid = document.getElementById("cards-grid");

    // 1. Cargar datos del JSON generado
    fetch('{{ "/assets/json/recursos-tac.json" | relative_url }}')
      .then(response => {
        if (!response.ok) {
          throw new Error("No s'ha pogut carregar el fitxer de dades.");
        }
        return response.json();
      })
      .then(data => {
        resourcesData = data;
        renderSidebarCategories();
        handleRouting(); // Manejar la categoría inicial basada en el hash de la URL
      })
      .catch(error => {
        console.error("Error al carregar les dades:", error);
        activeCategoryTitle.textContent = "Error al carregar els recursos";
        categoryContentContainer.innerHTML = "<p>Ho sentim, hi ha hagut un problema en accedir als enllaços dels recursos. Si us plau, torna-ho a provar més tard.</p>";
      });

    // 2. Renderizar categorías en la barra lateral
    function renderSidebarCategories() {
      categoriesList.innerHTML = "";
      resourcesData.forEach(item => {
        // Ignoramos la página home en la barra lateral para mantenerla limpia (o la añadimos como Inicio)
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.className = "category-item-btn";
        btn.dataset.id = item.id;
        
        btn.textContent = item.title;
        
        btn.addEventListener("click", () => {
          window.location.hash = item.id;
        });
        
        li.appendChild(btn);
        categoriesList.appendChild(li);
      });
    }

    // 3. Activar una categoría en la vista principal
    function selectCategory(categoryId) {
      // Limpiar barra de búsqueda
      if (searchInput.value) {
        searchInput.value = "";
        clearSearchBtn.style.display = "none";
        searchStatus.textContent = "";
      }

      const activeItem = resourcesData.find(item => item.id === categoryId);
      if (!activeItem) return;

      // Actualizar UI activa en sidebar
      document.querySelectorAll(".category-item-btn").forEach(btn => {
        if (btn.dataset.id === categoryId) {
          btn.classList.add("active");
          // Desplazar la barra lateral en móvil si es necesario
          btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          btn.classList.remove("active");
        }
      });

      // Renderizar contenido
      activeCategoryTitle.textContent = activeItem.title;
      categoryContentContainer.innerHTML = activeItem.content;
      categoryContentContainer.style.display = "block";
      searchResultsContainer.style.display = "none";

      // Interceptar los enlaces internos (hashes) y forzar que los enlaces externos se abran en otra pestaña
      categoryContentContainer.querySelectorAll("a").forEach(link => {
        const href = link.getAttribute("href");
        if (href) {
          if (href.startsWith("#")) {
            link.addEventListener("click", function(e) {
              e.preventDefault();
              window.location.hash = href;
            });
          } else if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("//")) {
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noopener noreferrer");
          }
        }
      });
    }

    // 4. Manejador de rutas (hash en URL)
    function handleRouting() {
      const hash = window.location.hash.substring(1);
      const categoryIds = resourcesData.map(item => item.id);
      
      if (hash && categoryIds.includes(hash)) {
        selectCategory(hash);
      } else {
        // Por defecto mostramos la primera categoría disponible
        if (categoryIds.length > 0) {
          selectCategory(categoryIds[0]);
        }
      }
    }

    // Escuchamos el cambio de hash en la ventana
    window.addEventListener("hashchange", handleRouting);

    // 5. Motor de Búsqueda
    searchInput.addEventListener("input", function() {
      const query = searchInput.value.trim().toLowerCase();
      
      if (!query) {
        clearSearchBtn.style.display = "none";
        searchStatus.textContent = "";
        handleRouting(); // Volvemos a la categoría del hash activo
        return;
      }

      clearSearchBtn.style.display = "block";
      performSearch(query);
    });

    clearSearchBtn.addEventListener("click", function() {
      searchInput.value = "";
      clearSearchBtn.style.display = "none";
      searchStatus.textContent = "";
      handleRouting();
      searchInput.focus();
    });

    function performSearch(query) {
      // Ocultar la visualización clásica y mostrar los resultados de búsqueda
      categoryContentContainer.style.display = "none";
      searchResultsContainer.style.display = "block";
      activeCategoryTitle.textContent = "Resultats de la cerca";
      
      // Deseleccionar botones activos en la barra lateral
      document.querySelectorAll(".category-item-btn").forEach(btn => btn.classList.remove("active"));

      const matchedCards = [];

      resourcesData.forEach(category => {
        // Dividimos el contenido de la categoría en recursos individuales (bloques separados por <hr>)
        const blocks = category.content.split(/<hr[^>]*>/i);
        
        blocks.forEach(block => {
          if (!block.trim()) return;

          // Creamos un elemento temporal para poder buscar sobre el texto plano, evitando etiquetas HTML
          const tempEl = document.createElement("div");
          tempEl.innerHTML = block;
          const textContent = tempEl.textContent.toLowerCase();

          // Buscamos si la consulta coincide con el texto del bloque o con el título de la categoría
          if (textContent.includes(query) || category.title.toLowerCase().includes(query)) {
            // Limpiamos espacios y elementos vacíos del bloque para que no quede raro
            const blockHtml = block.trim();
            if (blockHtml) {
              matchedCards.push({
                categoryTitle: category.title,
                categoryId: category.id,
                html: blockHtml
              });
            }
          }
        });
      });

      // Mostrar número de resultados
      if (matchedCards.length === 1) {
        searchStatus.textContent = "S'ha trobat 1 recurs coincident.";
      } else {
        searchStatus.textContent = `S'han trobat ${matchedCards.length} recursos coincidents.`;
      }

      renderSearchResults(matchedCards);
    }

    function renderSearchResults(results) {
      cardsGrid.innerHTML = "";
      
      if (results.length === 0) {
        cardsGrid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--dashboard-text-muted);">
          <i class="fa-solid fa-face-frown" style="font-size: 36px; margin-bottom: 15px; display: block;"></i>
          No s'han trobat recursos que coincideixin amb la cerca.
        </div>`;
        return;
      }

      results.forEach(result => {
        const card = document.createElement("div");
        card.className = "resource-card";
        
        // Header de la tarjeta indicando de qué categoría proviene (hace de enlace también)
        const catHeader = document.createElement("div");
        catHeader.className = "resource-card-category";
        
        const catLink = document.createElement("a");
        catLink.href = `#${result.categoryId}`;
        catLink.textContent = result.categoryId === "home" ? "Inici" : result.categoryTitle;
        catLink.style.color = "inherit";
        catLink.style.textDecoration = "none";
        
        catHeader.appendChild(catLink);
        
        // Cuerpo de la tarjeta con el contenido original del recurso
        const body = document.createElement("div");
        body.className = "resource-card-body";
        body.innerHTML = result.html;

        // Aseguramos que los enlaces internos cambien de hash, y los externos se abran en nueva pestaña
        body.querySelectorAll("a").forEach(link => {
          const href = link.getAttribute("href");
          if (href) {
            if (href.startsWith("#")) {
              link.addEventListener("click", function(e) {
                e.preventDefault();
                window.location.hash = href;
              });
            } else if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("//")) {
              link.setAttribute("target", "_blank");
              link.setAttribute("rel", "noopener noreferrer");
            }
          }
        });

        card.appendChild(catHeader);
        card.appendChild(body);
        cardsGrid.appendChild(card);
      });
    }

  });
</script>
