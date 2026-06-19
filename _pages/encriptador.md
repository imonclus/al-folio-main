---
layout: page
title: "🔒 Herramienta de Cifrado"
permalink: /encriptador/
nav: false
sitemap: false
---

Esta es una herramienta local para gestionar las páginas protegidas de tu sitio. Funciona completamente en tu navegador de forma segura.

<!-- Tab Navigation -->
<ul class="nav nav-tabs mb-4" id="tool-tabs" style="border-bottom: 2px solid var(--global-divider-color, #e0e0e0);">
  <li class="nav-item">
    <a class="nav-link active font-weight-bold" id="tab-encrypt" href="javascript:void(0)" onclick="switchTab('encrypt')" style="color: var(--global-theme-color, #2b9348); border-bottom: 3px solid var(--global-theme-color, #2b9348); background: transparent;">🔒 Encriptar</a>
  </li>
  <li class="nav-item">
    <a class="nav-link font-weight-bold" id="tab-decrypt" href="javascript:void(0)" onclick="switchTab('decrypt')" style="color: var(--global-text-color-light, #666); background: transparent; border: none;">🔓 Desencriptar</a>
  </li>
</ul>

<div class="encryptor-container">
  <!-- ENCRYPT SECTION -->
  <div id="section-encrypt">
    <div class="card p-4 shadow-sm border-0 mb-4 encryptor-card">
      <div class="mb-3">
        <label for="plain-content" class="form-label font-weight-bold">1. Contenido en Markdown (Texto Plano)</label>
        <textarea id="plain-content" class="form-control code-font" rows="8" placeholder="Escribe o pega aquí el contenido que deseas proteger con contraseña... (puedes usar cabeceras, enlaces, listas, etc.)"></textarea>
      </div>

      <div class="mb-4">
        <label for="encrypt-password" class="form-label font-weight-bold">2. Contraseña de Encriptación</label>
        <input type="password" id="encrypt-password" class="form-control" placeholder="Introduce una contraseña segura">
      </div>

      <button onclick="generateEncryptedContent()" class="btn btn-theme w-100 py-2 font-weight-bold">Generar Código Encriptado</button>
    </div>

    <div id="output-section" class="card p-4 shadow-sm border-0 encryptor-card" style="display: none;">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <label class="form-label font-weight-bold m-0">3. Código para tu archivo Markdown</label>
        <button onclick="copyToClipboard('output-code', 'btn-copy')" class="btn btn-sm btn-outline-secondary" id="btn-copy">Copiar Código</button>
      </div>
      <p class="small text-muted mb-2">Crea un nuevo archivo en tu carpeta <code>_pages/</code> o edita uno existente, y pega el siguiente bloque completo:</p>
      <textarea id="output-code" class="form-control code-font" rows="8" readonly></textarea>
    </div>

  </div>

  <!-- DECRYPT SECTION -->
  <div id="section-decrypt" style="display: none;">
    <div class="card p-4 shadow-sm border-0 mb-4 encryptor-card">
      <div class="mb-3">
        <label for="cipher-content" class="form-label font-weight-bold">1. Código Encriptado</label>
        <textarea id="cipher-content" class="form-control code-font" rows="6" placeholder="Pega aquí el código encriptado completo o solo el bloque de payload (ej. U2FsdGVkX19...)"></textarea>
      </div>

      <div class="mb-4">
        <label for="decrypt-tool-password" class="form-label font-weight-bold">2. Contraseña de Desencriptación</label>
        <input type="password" id="decrypt-tool-password" class="form-control" placeholder="Introduce la contraseña correspondiente">
      </div>

      <button onclick="generateDecryptedContent()" class="btn btn-theme w-100 py-2 font-weight-bold">Desencriptar Contenido</button>
    </div>

    <div id="decrypt-output-section" class="card p-4 shadow-sm border-0 encryptor-card" style="display: none;">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <label class="form-label font-weight-bold m-0">3. Contenido en Markdown Recuperado</label>
        <button onclick="copyToClipboard('output-plain-code', 'btn-copy-plain')" class="btn btn-sm btn-outline-secondary" id="btn-copy-plain">Copiar Texto</button>
      </div>
      <textarea id="output-plain-code" class="form-control code-font" rows="8" readonly></textarea>
    </div>

  </div>
</div>

<style>
  .encryptor-container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .encryptor-card {
    background-color: var(--global-card-bg-color, var(--global-bg-color, #ffffff));
    border: 1px solid var(--global-divider-color, #e0e0e0) !important;
    border-radius: 12px;
  }

  html[data-theme='dark'] .encryptor-card {
    background-color: var(--global-card-bg-color, var(--global-bg-color, #1e1e1e));
    border-color: #3e3e3e !important;
  }

  .form-label {
    color: var(--global-text-color, #333);
  }

  .code-font {
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .btn-theme {
    background-color: var(--global-theme-color, #2b9348);
    color: #fff !important;
    transition: background-color 0.2s ease;
  }

  .btn-theme:hover {
    background-color: var(--global-theme-color-hover, #1e7034);
  }

  .form-control {
    background-color: var(--global-bg-color, #fff);
    color: var(--global-text-color, #333);
    border: 1px solid var(--global-divider-color, #ccc);
  }

  html[data-theme='dark'] .form-control {
    background-color: #2c2c2c;
    color: #fff;
    border-color: #444;
  }

  html[data-theme='dark'] .form-control:focus {
    background-color: #2c2c2c;
    color: #fff;
    border-color: var(--global-theme-color, #2b9348);
  }

  .form-control:focus {
    border-color: var(--global-theme-color, #2b9348);
    box-shadow: none;
  }

  .nav-tabs .nav-link {
    border: none;
    border-radius: 0;
    padding: 0.75rem 1.5rem;
    transition: all 0.2s ease;
  }
</style>

<!-- Load CryptoJS from CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js" integrity="sha512-a+SUDuwNzXDvz4XrIcXHuCf089/iJAoN4lmrXJg18XnduKK6YlDHNRalv4yd1N40OKI80tFidF+rqTFKGPoWFQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script>
  function switchTab(tab) {
    const tabEncrypt = document.getElementById('tab-encrypt');
    const tabDecrypt = document.getElementById('tab-decrypt');
    const secEncrypt = document.getElementById('section-encrypt');
    const secDecrypt = document.getElementById('section-decrypt');
    
    if (tab === 'encrypt') {
      tabEncrypt.style.color = 'var(--global-theme-color, #2b9348)';
      tabEncrypt.style.borderBottom = '3px solid var(--global-theme-color, #2b9348)';
      tabDecrypt.style.color = 'var(--global-text-color-light, #666)';
      tabDecrypt.style.borderBottom = 'none';
      
      secEncrypt.style.display = 'block';
      secDecrypt.style.display = 'none';
    } else {
      tabDecrypt.style.color = 'var(--global-theme-color, #2b9348)';
      tabDecrypt.style.borderBottom = '3px solid var(--global-theme-color, #2b9348)';
      tabEncrypt.style.color = 'var(--global-text-color-light, #666)';
      tabEncrypt.style.borderBottom = 'none';
      
      secEncrypt.style.display = 'none';
      secDecrypt.style.display = 'block';
    }
  }

  function generateEncryptedContent() {
    const plainText = document.getElementById('plain-content').value.trim();
    const password = document.getElementById('encrypt-password').value.trim();
    
    if (!plainText) {
      alert("Por favor, introduce el contenido en Markdown.");
      return;
    }
    
    if (!password) {
      alert("Por favor, introduce una contraseña para encriptar.");
      return;
    }
    
    // Encrypt content using CryptoJS AES
    const encrypted = CryptoJS.AES.encrypt(plainText, password).toString();
    
    const startTag = "{" + "%";
    const endTag = "%" + "}";

    // Generate the snippet code
    const snippet = `---
layout: page
title: "Título de la Página"
description: "Página protegida con contraseña"
nav: true
nav_order: 10
---

` + startTag + ` include encrypted.html payload="${encrypted}" ` + endTag;
    
    document.getElementById('output-code').value = snippet;
    document.getElementById('output-section').style.display = 'block';
    
    // Reset copy button status
    const copyBtn = document.getElementById('btn-copy');
    copyBtn.innerText = 'Copiar Código';
    copyBtn.classList.remove('btn-success');
    copyBtn.classList.add('btn-outline-secondary');
  }

  function generateDecryptedContent() {
    let encryptedPayload = document.getElementById('cipher-content').value.trim();
    const password = document.getElementById('decrypt-tool-password').value.trim();
    
    if (!encryptedPayload) {
      alert("Por favor, introduce el texto encriptado.");
      return;
    }
    
    if (!password) {
      alert("Por favor, introduce la contraseña.");
      return;
    }
    
    // Auto-extract payload if full include tag is pasted
    const regex = /payload=["']([^"']+)["']/;
    const match = encryptedPayload.match(regex);
    if (match && match[1]) {
      encryptedPayload = match[1];
    }
    
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedPayload, password);
      const plaintext = bytes.toString(CryptoJS.enc.Utf8);
      
      if (plaintext && plaintext.length > 0) {
        document.getElementById('output-plain-code').value = plaintext;
        document.getElementById('decrypt-output-section').style.display = 'block';
        
        // Reset copy button status
        const copyBtn = document.getElementById('btn-copy-plain');
        copyBtn.innerText = 'Copiar Texto';
        copyBtn.classList.remove('btn-success');
        copyBtn.classList.add('btn-outline-secondary');
      } else {
        alert("Contraseña incorrecta o datos cifrados corruptos.");
      }
    } catch (e) {
      alert("Error al desencriptar. Verifica la contraseña y los datos.");
    }
  }

  function copyToClipboard(textareaId, buttonId) {
    const copyText = document.getElementById(textareaId);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    
    navigator.clipboard.writeText(copyText.value).then(() => {
      const copyBtn = document.getElementById(buttonId);
      copyBtn.innerText = '¡Copiado!';
      copyBtn.classList.remove('btn-outline-secondary');
      copyBtn.classList.add('btn-success');
    }).catch(err => {
      console.error('Error al copiar: ', err);
    });
  }
</script>
