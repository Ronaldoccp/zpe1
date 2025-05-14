import Chart from 'chart.js/auto';

export function renderDemandForecast(): void {
  const contentElement = document.getElementById('content');
  if (!contentElement) return;

  contentElement.innerHTML = `
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Previsão de Demanda com Machine Learning</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <!-- Card 1 -->
        <div class="card flex flex-col">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Acurácia do Modelo</h3>
              <p class="text-3xl font-bold text-primary">92.4%</p>
            </div>
            <div class="p-2 bg-primary/10 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-400 mt-auto">
            <span class="text-success font-medium">+2.1%</span> desde o último ajuste
          </div>
        </div>
        
        <!-- Card 2 -->
        <div class="card flex flex-col">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Desvio Médio</h3>
              <p class="text-3xl font-bold text-primary">3.8%</p>
            </div>
            <div class="p-2 bg-primary/10 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-400 mt-auto">
            <span class="text-success font-medium">-0.5%</span> em relação ao mês anterior
          </div>
        </div>
        
        <!-- Card 3 -->
        <div class="card flex flex-col">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Dados Processados</h3>
              <p class="text-3xl font-bold text-primary">52.8 GB</p>
            </div>
            <div class="p-2 bg-primary/10 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-400 mt-auto">
            <span class="text-success font-medium">+12.4 GB</span> desde a última atualização
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <!-- Previsão em diferentes prazos -->
        <div class="card">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Previsão de Demanda</h3>
            <div class="flex space-x-2">
              <button id="shortTerm" class="text-xs px-2 py-1 bg-primary text-white rounded">Curto Prazo</button>
              <button id="mediumTerm" class="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">Médio Prazo</button>
              <button id="longTerm" class="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">Longo Prazo</button>
            </div>
          </div>
          <div>
            <canvas id="forecastChart" height="300"></canvas>
          </div>
        </div>
        
        <!-- Impacto de Fatores Externos -->
        <div class="card">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Impacto de Fatores Externos</h3>
            <div class="flex space-x-2">
              <button class="text-xs px-2 py-1 bg-primary text-white rounded">Sazonalidade</button>
              <button class="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">Eventos</button>
              <button class="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">Econômicos</button>
            </div>
          </div>
          <div>
            <canvas id="factorsChart" height="300"></canvas>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <!-- Níveis Ótimos de Estoque -->
        <div class="card col-span-2">
          <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Recomendações de Estoque</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Categoria</th>
                  <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Atual</th>
                  <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Recomendado</th>
                  <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Variação</th>
                  <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Confiança</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300">Produtos Perecíveis</td>
                  <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">450 unidades</td>
                  <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">520 unidades</td>
                  <td class="px-4 py-3 text-sm">
                    <span class="text-success">+15.5%</span>
                  </td>
                  <td class="px-4 py-3 text-sm">
                    <div class="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                      <div class="bg-success h-2 rounded-full" style="width: 94%"></div>
                    </div>
                    <span class="text-xs text-gray-500 dark:text-gray-400">94%</span>
                  </td>
                </tr>
                
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300">Eletrônicos</td>
                  <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">320 unidades</td>
                  <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">280 unidades</td>
                  <td class="px-4 py-3 text-sm">
                    <span class="text-danger">-12.5%</span>
                  </td>
                  <td class="px-4 py-3 text-sm">
                    <div class="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                      <div class="bg-success h-2 rounded-full" style="width: 88%"></div>
                    </div>
                    <span class="text-xs text-gray-500 dark:text-gray-400">88%</span>
                  </td>
                </tr>
                
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300">Material de Construção</td>
                  <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">1,200 toneladas</td>
                  <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">1,350 toneladas</td>
                  <td class="px-4 py-3 text-sm">
                    <span class="text-success">+12.5%</span>
                  </td>
                  <td class="px-4 py-3 text-sm">
                    <div class="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                      <div class="bg-success h-2 rounded-full" style="width: 91%"></div>
                    </div>
                    <span class="text-xs text-gray-500 dark:text-gray-400">91%</span>
                  </td>
                </tr>
                
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300">Produtos Químicos</td>
                  <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">780 litros</td>
                  <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">750 litros</td>
                  <td class="px-4 py-3 text-sm">
                    <span class="text-danger">-3.8%</span>
                  </td>
                  <td class="px-4 py-3 text-sm">
                    <div class="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                      <div class="bg-warning h-2 rounded-full" style="width: 76%"></div>
                    </div>
                    <span class="text-xs text-gray-500 dark:text-gray-400">76%</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <!-- Tendências Emergentes -->
        <div class="card col-span-1">
          <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Tendências Emergentes</h3>
          <div class="space-y-4">
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Produtos Sustentáveis</span>
                <span class="px-2 py-1 text-xs rounded-full bg-success/10 text-success">+28%</span>
              </div>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                Crescimento acelerado na demanda por embalagens ecológicas e produtos com certificação ambiental.
              </p>
            </div>
            
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Entregas Urbanas Rápidas</span>
                <span class="px-2 py-1 text-xs rounded-full bg-success/10 text-success">+42%</span>
              </div>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                Aumento na demanda por entregas no mesmo dia em centros urbanos, exigindo hubs logísticos menores e mais distribuídos.
              </p>
            </div>
            
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Produtos Personalizados</span>
                <span class="px-2 py-1 text-xs rounded-full bg-success/10 text-success">+15%</span>
              </div>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                Crescimento em customização de produtos exige maior flexibilidade nos processos de armazenamento e distribuição.
              </p>
            </div>
            
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Produtos Sazonais</span>
                <span class="px-2 py-1 text-xs rounded-full bg-warning/10 text-warning">Variável</span>
              </div>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                Padrões sazonais estão mudando devido a alterações climáticas e comportamentais pós-pandemia.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card mb-8">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Planejamento de Capacidade</h3>
          <div class="flex space-x-2">
            <button class="btn btn-primary">Exportar Relatório</button>
            <button class="btn btn-secondary">Ajustar Parâmetros</button>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="space-y-2">
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300">Recursos Humanos</h4>
            <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
              <div class="flex justify-between mb-1">
                <span class="text-xs text-gray-500 dark:text-gray-400">Atual</span>
                <span class="text-xs text-gray-500 dark:text-gray-400">120 colaboradores</span>
              </div>
              <div class="flex justify-between mb-1">
                <span class="text-xs text-gray-500 dark:text-gray-400">Recomendado</span>
                <span class="text-xs text-success">135 colaboradores</span>
              </div>
              <div class="flex justify-between">
                <span class="text-xs text-gray-500 dark:text-gray-400">Variação</span>
                <span class="text-xs text-success">+12.5%</span>
              </div>
            </div>
          </div>
          
          <div class="space-y-2">
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300">Espaço de Armazenamento</h4>
            <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
              <div class="flex justify-between mb-1">
                <span class="text-xs text-gray-500 dark:text-gray-400">Atual</span>
                <span class="text-xs text-gray-500 dark:text-gray-400">5,200 m²</span>
              </div>
              <div class="flex justify-between mb-1">
                <span class="text-xs text-gray-500 dark:text-gray-400">Recomendado</span>
                <span class="text-xs text-success">5,800 m²</span>
              </div>
              <div class="flex justify-between">
                <span class="text-xs text-gray-500 dark:text-gray-400">Variação</span>
                <span class="text-xs text-success">+11.5%</span>
              </div>
            </div>
          </div>
          
          <div class="space-y-2">
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300">Equipamentos</h4>
            <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
              <div class="flex justify-between mb-1">
                <span class="text-xs text-gray-500 dark:text-gray-400">Atual</span>
                <span class="text-xs text-gray-500 dark:text-gray-400">28 unidades</span>
              </div>
              <div class="flex justify-between mb-1">
                <span class="text-xs text-gray-500 dark:text-gray-400">Recomendado</span>
                <span class="text-xs text-warning">28 unidades</span>
              </div>
              <div class="flex justify-between">
                <span class="text-xs text-gray-500 dark:text-gray-400">Variação</span>
                <span class="text-xs text-warning">0%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Inicializar gráficos após renderizar o conteúdo
  initializeCharts();
}

function initializeCharts(): void {
  // Gráfico de previsão de demanda
  const forecastCtx = document.getElementById('forecastChart') as HTMLCanvasElement;
  if (forecastCtx) {
    new Chart(forecastCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'],
        datasets: [{
          label: 'Demanda Real',
          data: [120, 135, 142, 150, 162, 170, 180, null],
          borderColor: '#0056b3',
          backgroundColor: 'rgba(0, 86, 179, 0.1)',
          tension: 0.3,
          fill: false,
          pointRadius: 4
        }, {
          label: 'Previsão',
          data: [118, 132, 145, 153, 160, 172, 182, 190],
          borderColor: '#28a745',
          backgroundColor: 'rgba(40, 167, 69, 0.1)',
          borderDash: [5, 5],
          tension: 0.3,
          fill: false,
          pointRadius: 0
        }, {
          label: 'Intervalo de Confiança (95%)',
          data: [null, null, null, null, null, null, 182, 190],
          borderColor: 'rgba(40, 167, 69, 0.3)',
          backgroundColor: 'rgba(40, 167, 69, 0.2)',
          borderWidth: 0,
          tension: 0.3,
          fill: '+1',
        }, {
          label: 'Intervalo Superior',
          data: [null, null, null, null, null, null, 195, 210],
          borderColor: 'rgba(40, 167, 69, 0.3)',
          tension: 0.3,
          fill: false,
          pointRadius: 0
        }, {
          label: 'Intervalo Inferior',
          data: [null, null, null, null, null, null, 170, 175],
          borderColor: 'rgba(40, 167, 69, 0.3)',
          tension: 0.3,
          fill: false,
          pointRadius: 0
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              filter: (item) => {
                return !item.text.includes('Intervalo');
              }
            }
          },
          tooltip: {
            mode: 'index',
            intersect: false,
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            title: {
              display: true,
              text: 'Volume de Demanda'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Mês'
            }
          }
        }
      }
    });
  }
  
  // Gráfico de impacto de fatores externos
  const factorsCtx = document.getElementById('factorsChart') as HTMLCanvasElement;
  if (factorsCtx) {
    new Chart(factorsCtx, {
      type: 'bar',
      data: {
        labels: ['Sazonalidade', 'Eventos Especiais', 'Clima', 'Econômicos', 'Tendências', 'Concorrência'],
        datasets: [{
          label: 'Impacto na Demanda (%)',
          data: [25, 18, 12, 15, 20, 10],
          backgroundColor: [
            'rgba(0, 86, 179, 0.8)',
            'rgba(40, 167, 69, 0.8)',
            'rgba(255, 193, 7, 0.8)',
            'rgba(220, 53, 69, 0.8)',
            'rgba(108, 117, 125, 0.8)',
            'rgba(23, 162, 184, 0.8)'
          ],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `Impacto: ${context.raw}%`;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 30,
            title: {
              display: true,
              text: 'Impacto na Demanda (%)'
            }
          }
        }
      }
    });
  }
  
  // Adicionar evento aos botões de prazo
  const timeFrameButtons = document.querySelectorAll('#shortTerm, #mediumTerm, #longTerm');
  timeFrameButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remover classe ativa de todos os botões
      timeFrameButtons.forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white');
        btn.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
      });
      
      // Adicionar classe ativa ao botão clicado
      button.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
      button.classList.add('bg-primary', 'text-white');
      
      // Aqui seria implementada a lógica para atualizar o gráfico com base no prazo selecionado
    });
  });
} 