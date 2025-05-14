import './style.css';

// Inicializa o tema
function initializeTheme(): void {
  // Verifica se há tema salvo no localStorage
  const savedTheme = localStorage.getItem('theme');
  
  // Se o usuário definiu uma preferência ou prefere o tema escuro
  if (savedTheme === 'dark' || 
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

// Define interfaces para estruturar a renderização das páginas
interface Route {
  path: string;
  render: () => void;
}

// Função para renderizar a página de Dashboard
function renderDashboard(): void {
  const contentElement = document.getElementById('content');
  if (!contentElement) return;
  
  contentElement.innerHTML = `
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Carregando Dashboard...</h2>
      <p class="text-gray-600 dark:text-gray-400">O dashboard está sendo carregado. Por favor, aguarde.</p>
    </div>
  `;
  
  // Dinâmicamente importa o componente
  import('./pages/Dashboard').then(module => {
    module.renderDashboard();
  }).catch(error => {
    console.error('Erro ao carregar o Dashboard:', error);
  });
}

// Função para renderizar a página de Gestão de Tráfego
function renderTrafficManagement(): void {
  const contentElement = document.getElementById('content');
  if (!contentElement) return;
  
  contentElement.innerHTML = `
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Carregando Gestão de Tráfego...</h2>
      <p class="text-gray-600 dark:text-gray-400">O sistema de gestão de tráfego está sendo carregado. Por favor, aguarde.</p>
    </div>
  `;
  
  // Dinâmicamente importa o componente
  import('./pages/TrafficManagement').then(module => {
    module.renderTrafficManagement();
  }).catch(error => {
    console.error('Erro ao carregar o Gestão de Tráfego:', error);
  });
}

// Função para renderizar a página de Previsão de Demanda
function renderDemandForecast(): void {
  const contentElement = document.getElementById('content');
  if (!contentElement) return;
  
  contentElement.innerHTML = `
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Carregando Previsão de Demanda...</h2>
      <p class="text-gray-600 dark:text-gray-400">O sistema de previsão de demanda está sendo carregado. Por favor, aguarde.</p>
    </div>
  `;
  
  // Dinâmicamente importa o componente
  import('./pages/DemandForecast').then(module => {
    module.renderDemandForecast();
  }).catch(error => {
    console.error('Erro ao carregar a Previsão de Demanda:', error);
  });
}

// Função para renderizar a página de Gêmeos Digitais
function renderDigitalTwins(): void {
  const contentElement = document.getElementById('content');
  if (!contentElement) return;
  
  contentElement.innerHTML = `
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Carregando Gêmeos Digitais...</h2>
      <p class="text-gray-600 dark:text-gray-400">O sistema de gêmeos digitais está sendo carregado. Por favor, aguarde.</p>
    </div>
  `;
  
  // Dinâmicamente importa o componente
  import('./pages/DigitalTwins').then(module => {
    module.renderDigitalTwins();
  }).catch(error => {
    console.error('Erro ao carregar os Gêmeos Digitais:', error);
  });
}

// Função para renderizar a página de Integração
function renderIntegration(): void {
  const contentElement = document.getElementById('content');
  if (!contentElement) return;
  
  contentElement.innerHTML = `
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Carregando Integração...</h2>
      <p class="text-gray-600 dark:text-gray-400">O sistema de integração está sendo carregado. Por favor, aguarde.</p>
    </div>
  `;
  
  // Dinâmicamente importa o componente
  import('./pages/Integration').then(module => {
    module.renderIntegration();
  }).catch(error => {
    console.error('Erro ao carregar a Integração:', error);
  });
}

// Define as rotas da aplicação
const routes: Record<string, Route> = {
  '/': { path: '/', render: renderDashboard },
  '/trafego': { path: '/trafego', render: renderTrafficManagement },
  '/previsao': { path: '/previsao', render: renderDemandForecast },
  '/gemeos-digitais': { path: '/gemeos-digitais', render: renderDigitalTwins },
  '/integracao': { path: '/integracao', render: renderIntegration },
};

// Função para navegar entre páginas
function navigate(path: string): void {
  window.history.pushState({}, '', path);
  renderContent();
}

// Função para renderizar o conteúdo baseado na rota atual
function renderContent(): void {
  const path = window.location.pathname;
  const route = routes[path] || routes['/'];
  
  const contentElement = document.getElementById('content');
  if (contentElement) {
    contentElement.innerHTML = '';
    route.render();
  }
}

// Função para renderizar o cabeçalho
function renderHeader(): void {
  const headerElement = document.getElementById('header');
  if (!headerElement) return;
  
  // Dinâmicamente importa o componente
  import('./components/Header').then(module => {
    module.renderHeader();
  }).catch(error => {
    console.error('Erro ao carregar o Header:', error);
  });
}

// Função para renderizar a barra lateral
function renderSidebar(): void {
  const sidebarElement = document.getElementById('sidebar');
  if (!sidebarElement) return;
  
  // Dinâmicamente importa o componente
  import('./components/Sidebar').then(module => {
    module.renderSidebar();
  }).catch(error => {
    console.error('Erro ao carregar o Sidebar:', error);
  });
}

// Função para inicializar a aplicação
function initializeApp(): void {
  const appElement = document.getElementById('app');
  if (!appElement) return;
  
  // Inicializa o tema
  initializeTheme();
  
  // Cria a estrutura básica da aplicação
  appElement.innerHTML = `
    <div class="min-h-screen flex flex-col">
      <header id="header" class="bg-white dark:bg-gray-800 shadow-sm"></header>
      <div class="flex flex-1">
        <aside id="sidebar" class="w-64 bg-white dark:bg-gray-800 shadow-md"></aside>
        <main id="content" class="flex-1 p-6 bg-gray-50 dark:bg-gray-900"></main>
      </div>
    </div>
  `;
  
  renderHeader();
  renderSidebar();
  renderContent();
  
  // Adiciona evento de clique para navegação
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const navLink = target.closest('a[data-nav]');
    
    if (navLink) {
      e.preventDefault();
      const path = navLink.getAttribute('href') || '/';
      navigate(path);
    }
  });
  
  // Adiciona evento para botão voltar/avançar do navegador
  window.addEventListener('popstate', renderContent);
}

// Inicializa a aplicação quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initializeApp);

// Expõe a função de navegação globalmente para uso em componentes
(window as any).navigate = navigate; 