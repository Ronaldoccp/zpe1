export function renderHeader(): void {
  const headerElement = document.getElementById('header');
  if (!headerElement) return;
  
  headerElement.innerHTML = `
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <img src="/src/assets/logo.svg" alt="Logo" class="h-10 w-10" />
        <h1 class="text-xl font-bold text-primary dark:text-white">Sistema de Gestão Logística</h1>
      </div>
      
      <div class="flex items-center space-x-4">
        <button id="theme-toggle" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>
        
        <div class="relative">
          <button id="notifications" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
        
        <div class="flex items-center space-x-2">
          <img src="https://ui-avatars.com/api/?name=Admin&background=0056b3&color=fff" alt="User Avatar" class="h-8 w-8 rounded-full" />
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Admin</span>
        </div>
      </div>
    </div>
  `;
  
  // Add event listener for theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
  }
} 