import Chart from 'chart.js/auto';

export function renderDashboard(): void {
  const contentElement = document.getElementById('content');
  if (!contentElement) return;
  
  contentElement.innerHTML = `
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Dashboard</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <!-- Card 1 -->
        <div class="card flex flex-col">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Caminhões Ativos</h3>
              <p class="text-3xl font-bold text-primary">247</p>
            </div>
            <div class="p-2 bg-primary/10 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
            </div>
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-400 mt-auto">
            <span class="text-success font-medium">+12%</span> desde o último mês
          </div>
        </div>
        
        <!-- Card 2 -->
        <div class="card flex flex-col">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Contêineres</h3>
              <p class="text-3xl font-bold text-primary">1,842</p>
            </div>
            <div class="p-2 bg-primary/10 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-400 mt-auto">
            <span class="text-success font-medium">+5%</span> desde o último mês
          </div>
        </div>
        
        <!-- Card 3 -->
        <div class="card flex flex-col">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Tempo Médio de Espera</h3>
              <p class="text-3xl font-bold text-primary">42 min</p>
            </div>
            <div class="p-2 bg-primary/10 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-400 mt-auto">
            <span class="text-danger font-medium">+8%</span> desde a última semana
          </div>
        </div>
        
        <!-- Card 4 -->
        <div class="card flex flex-col">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Eficiência Operacional</h3>
              <p class="text-3xl font-bold text-primary">86%</p>
            </div>
            <div class="p-2 bg-primary/10 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-400 mt-auto">
            <span class="text-success font-medium">+2%</span> desde o último mês
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <!-- Gráfico de Tráfego Diário -->
        <div class="card">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Tráfego Diário</h3>
            <div class="flex space-x-2">
              <button class="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">Dia</button>
              <button class="text-xs px-2 py-1 bg-primary text-white rounded">Semana</button>
              <button class="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">Mês</button>
            </div>
          </div>
          <div>
            <canvas id="trafficChart" height="250"></canvas>
          </div>
        </div>
        
        <!-- Gráfico de Previsão de Demanda -->
        <div class="card">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Previsão de Demanda</h3>
            <div class="flex space-x-2">
              <button class="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">Curto Prazo</button>
              <button class="text-xs px-2 py-1 bg-primary text-white rounded">Médio Prazo</button>
              <button class="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">Longo Prazo</button>
            </div>
          </div>
          <div>
            <canvas id="demandChart" height="250"></canvas>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <!-- Alertas e Notificações -->
        <div class="card col-span-1">
          <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Alertas Recentes</h3>
          <div class="space-y-4">
            <div class="flex items-start space-x-3 p-3 bg-danger/10 rounded-md">
              <div class="text-danger mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-700 dark:text-gray-300">Congestionamento na Doca 3</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">Há 10 minutos</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-3 p-3 bg-warning/10 rounded-md">
              <div class="text-warning mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-700 dark:text-gray-300">Previsão de atraso na entrega #5432</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">Há 25 minutos</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-3 p-3 bg-success/10 rounded-md">
              <div class="text-success mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-700 dark:text-gray-300">Manutenção do sistema concluída</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">Há 1 hora</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- KPIs de integrações -->
        <div class="card col-span-2">
          <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Visão Geral da Operação</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Sistema</th>
                  <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                  <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Última Sincronização</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Sistema de Gestão de Tráfego</td>
                  <td class="px-4 py-3">
                    <span class="px-2 py-1 text-xs rounded-full bg-success/10 text-success">Online</span>
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Agora mesmo</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Previsão de Demanda ML</td>
                  <td class="px-4 py-3">
                    <span class="px-2 py-1 text-xs rounded-full bg-success/10 text-success">Online</span>
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Há 5 minutos</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Digital Twins 3D</td>
                  <td class="px-4 py-3">
                    <span class="px-2 py-1 text-xs rounded-full bg-warning/10 text-warning">Atualização</span>
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Há 2 horas</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Integração com ERP</td>
                  <td class="px-4 py-3">
                    <span class="px-2 py-1 text-xs rounded-full bg-success/10 text-success">Online</span>
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Há 20 minutos</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Inicializar gráficos após renderizar o conteúdo
  initializeCharts();
}

function initializeCharts(): void {
  // Gráfico de tráfego
  const trafficCtx = document.getElementById('trafficChart') as HTMLCanvasElement;
  if (trafficCtx) {
    new Chart(trafficCtx, {
      type: 'line',
      data: {
        labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        datasets: [{
          label: 'Caminhões',
          data: [65, 78, 90, 81, 86, 95, 70],
          borderColor: '#0056b3',
          backgroundColor: 'rgba(0, 86, 179, 0.1)',
          tension: 0.3,
          fill: true
        }, {
          label: 'Contêineres',
          data: [42, 58, 65, 70, 75, 80, 62],
          borderColor: '#28a745',
          backgroundColor: 'rgba(40, 167, 69, 0.1)',
          tension: 0.3,
          fill: true
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
  // Gráfico de previsão de demanda
  const demandCtx = document.getElementById('demandChart') as HTMLCanvasElement;
  if (demandCtx) {
    new Chart(demandCtx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
          label: 'Demanda Real',
          data: [150, 160, 170, 175, 190, 205],
          backgroundColor: '#0056b3',
        }, {
          label: 'Previsão',
          data: [155, 165, 175, 180, 195, 210],
          backgroundColor: '#6c757d',
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
} 