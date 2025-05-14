export function renderSidebar(): void {
  const sidebarElement = document.getElementById('sidebar');
  if (!sidebarElement) return;
  
  sidebarElement.innerHTML = `
    <nav class="py-4 px-4 h-full">
      <ul class="space-y-2">
        <li>
          <a 
            href="/" 
            data-nav
            class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-primary rounded-md transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Dashboard</span>
          </a>
        </li>
        
        <li>
          <a 
            href="/trafego" 
            data-nav
            class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-primary rounded-md transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span>Gestão de Tráfego</span>
          </a>
        </li>
        
        <li>
          <a 
            href="/previsao" 
            data-nav
            class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-primary rounded-md transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span>Previsão de Demanda</span>
          </a>
        </li>
        
        <li>
          <a 
            href="/gemeos-digitais" 
            data-nav
            class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-primary rounded-md transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
            <span>Gêmeos Digitais</span>
          </a>
        </li>
        
        <li>
          <a 
            href="/integracao" 
            data-nav
            class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-primary rounded-md transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
            <span>Integração</span>
          </a>
        </li>
      </ul>
      
      <div class="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div class="px-4 py-2">
          <h3 class="text-xs uppercase font-semibold text-gray-500 dark:text-gray-400">Informações do Sistema</h3>
          <div class="mt-2 text-xs text-gray-600 dark:text-gray-400">
            <p>Versão: 1.0.0</p>
            <p>Última atualização: ${new Date().toLocaleDateString('pt-BR')}</p>
          </div>
        </div>
      </div>
    </nav>
  `;

  // Highlight current page in sidebar
  const path = window.location.pathname;
  const currentNavLink = sidebarElement.querySelector(`a[href="${path}"]`);
  if (currentNavLink) {
    currentNavLink.classList.add('bg-primary', 'text-white');
    currentNavLink.classList.remove('text-gray-700', 'dark:text-gray-300');
  }
} 