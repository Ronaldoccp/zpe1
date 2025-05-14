export function renderIntegration(): void {
  const contentElement = document.getElementById('content');
  if (!contentElement) return;

  contentElement.innerHTML = `
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Integração e Interoperabilidade</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <!-- Card 1 -->
        <div class="card flex flex-col">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Sistemas Integrados</h3>
              <p class="text-3xl font-bold text-primary">8</p>
            </div>
            <div class="p-2 bg-primary/10 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-400 mt-auto">
            <span class="text-success font-medium">+1</span> novo sistema no último mês
          </div>
        </div>
        
        <!-- Card 2 -->
        <div class="card flex flex-col">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Transações Diárias</h3>
              <p class="text-3xl font-bold text-primary">24.8K</p>
            </div>
            <div class="p-2 bg-primary/10 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-400 mt-auto">
            <span class="text-success font-medium">+12%</span> em relação à média mensal
          </div>
        </div>
        
        <!-- Card 3 -->
        <div class="card flex flex-col">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Disponibilidade API</h3>
              <p class="text-3xl font-bold text-primary">99.97%</p>
            </div>
            <div class="p-2 bg-primary/10 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-400 mt-auto">
            <span class="text-success font-medium">+0.1%</span> em relação ao mês anterior
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <!-- Status dos Sistemas Integrados -->
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Status dos Sistemas</h3>
          <div class="space-y-4">
            <div class="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
              <div class="flex items-center">
                <div class="h-2 w-2 rounded-full bg-success mr-2"></div>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">ERP (SAP)</span>
              </div>
              <div class="flex items-center">
                <span class="px-2 py-1 text-xs rounded-full bg-success/10 text-success">Online</span>
                <span class="text-xs text-gray-500 dark:text-gray-400 ml-2">Última sincronização: 5 min atrás</span>
              </div>
            </div>
            
            <div class="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
              <div class="flex items-center">
                <div class="h-2 w-2 rounded-full bg-success mr-2"></div>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">WMS (Warehouse Management)</span>
              </div>
              <div class="flex items-center">
                <span class="px-2 py-1 text-xs rounded-full bg-success/10 text-success">Online</span>
                <span class="text-xs text-gray-500 dark:text-gray-400 ml-2">Última sincronização: 2 min atrás</span>
              </div>
            </div>
            
            <div class="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
              <div class="flex items-center">
                <div class="h-2 w-2 rounded-full bg-warning mr-2"></div>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">TMS (Transportation Management)</span>
              </div>
              <div class="flex items-center">
                <span class="px-2 py-1 text-xs rounded-full bg-warning/10 text-warning">Sincronizando</span>
                <span class="text-xs text-gray-500 dark:text-gray-400 ml-2">Iniciado: 1 min atrás</span>
              </div>
            </div>
            
            <div class="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
              <div class="flex items-center">
                <div class="h-2 w-2 rounded-full bg-success mr-2"></div>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">CRM (Customer Relationship)</span>
              </div>
              <div class="flex items-center">
                <span class="px-2 py-1 text-xs rounded-full bg-success/10 text-success">Online</span>
                <span class="text-xs text-gray-500 dark:text-gray-400 ml-2">Última sincronização: 15 min atrás</span>
              </div>
            </div>
            
            <div class="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
              <div class="flex items-center">
                <div class="h-2 w-2 rounded-full bg-danger mr-2"></div>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">BI (Business Intelligence)</span>
              </div>
              <div class="flex items-center">
                <span class="px-2 py-1 text-xs rounded-full bg-danger/10 text-danger">Erro</span>
                <button class="text-xs text-primary ml-2">Ver detalhes</button>
              </div>
            </div>
            
            <div class="flex justify-between items-center pb-2">
              <div class="flex items-center">
                <div class="h-2 w-2 rounded-full bg-success mr-2"></div>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">SCM (Supply Chain Management)</span>
              </div>
              <div class="flex items-center">
                <span class="px-2 py-1 text-xs rounded-full bg-success/10 text-success">Online</span>
                <span class="text-xs text-gray-500 dark:text-gray-400 ml-2">Última sincronização: 7 min atrás</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- API Endpoints -->
        <div class="card">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">API Endpoints</h3>
            <button class="btn btn-primary text-sm">Documentação API</button>
          </div>
          <div class="space-y-4">
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">/api/traffic</span>
                <span class="px-2 py-1 text-xs rounded-full bg-success/10 text-success">GET</span>
              </div>
              <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">
                Dados em tempo real do sistema de gestão de tráfego.
              </p>
              <div class="flex justify-between items-center text-xs">
                <span class="text-gray-500 dark:text-gray-400">Autenticação: <span class="font-mono">Bearer Token</span></span>
                <span class="text-success">200 OK</span>
              </div>
            </div>
            
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">/api/forecast</span>
                <span class="px-2 py-1 text-xs rounded-full bg-success/10 text-success">GET</span>
              </div>
              <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">
                Previsões de demanda por produto/período.
              </p>
              <div class="flex justify-between items-center text-xs">
                <span class="text-gray-500 dark:text-gray-400">Autenticação: <span class="font-mono">Bearer Token</span></span>
                <span class="text-success">200 OK</span>
              </div>
            </div>
            
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">/api/digital-twins</span>
                <span class="px-2 py-1 text-xs rounded-full bg-success/10 text-success">GET</span>
              </div>
              <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">
                Estado atual dos gêmeos digitais e simulações.
              </p>
              <div class="flex justify-between items-center text-xs">
                <span class="text-gray-500 dark:text-gray-400">Autenticação: <span class="font-mono">Bearer Token</span></span>
                <span class="text-success">200 OK</span>
              </div>
            </div>
            
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">/api/schedule</span>
                <span class="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">POST</span>
              </div>
              <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">
                Agendamento de chegadas e partidas de caminhões.
              </p>
              <div class="flex justify-between items-center text-xs">
                <span class="text-gray-500 dark:text-gray-400">Autenticação: <span class="font-mono">Bearer Token</span></span>
                <span class="text-success">201 Created</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <!-- Integrações com Parceiros -->
        <div class="card col-span-1">
          <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Integrações com Parceiros</h3>
          <div class="space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
              <div class="flex items-center">
                <img src="https://ui-avatars.com/api/?name=ABC+Logistics&background=0056b3&color=fff" alt="ABC Logistics" class="h-8 w-8 rounded-full mr-3" />
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">ABC Logistics</span>
              </div>
              <span class="px-2 py-1 text-xs rounded-full bg-success/10 text-success">Ativo</span>
            </div>
            
            <div class="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
              <div class="flex items-center">
                <img src="https://ui-avatars.com/api/?name=Global+Shipping&background=28a745&color=fff" alt="Global Shipping" class="h-8 w-8 rounded-full mr-3" />
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Global Shipping</span>
              </div>
              <span class="px-2 py-1 text-xs rounded-full bg-success/10 text-success">Ativo</span>
            </div>
            
            <div class="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
              <div class="flex items-center">
                <img src="https://ui-avatars.com/api/?name=Fast+Track&background=ffc107&color=fff" alt="Fast Track" class="h-8 w-8 rounded-full mr-3" />
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Fast Track Couriers</span>
              </div>
              <span class="px-2 py-1 text-xs rounded-full bg-warning/10 text-warning">Parcial</span>
            </div>
            
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img src="https://ui-avatars.com/api/?name=Ocean+Freight&background=dc3545&color=fff" alt="Ocean Freight" class="h-8 w-8 rounded-full mr-3" />
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Ocean Freight Inc.</span>
              </div>
              <span class="px-2 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300">Pendente</span>
            </div>
            
            <div class="pt-2">
              <button class="btn btn-primary w-full text-sm">Adicionar Parceiro</button>
            </div>
          </div>
        </div>
        
        <!-- Dashboard Unificado -->
        <div class="card col-span-2">
          <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Dashboard Unificado</h3>
          <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
            <div class="grid grid-cols-3 gap-4">
              <div>
                <h4 class="text-xs uppercase font-semibold text-gray-500 dark:text-gray-400 mb-2">ERP</h4>
                <div class="flex flex-col space-y-1">
                  <div class="flex justify-between">
                    <span class="text-xs text-gray-600 dark:text-gray-400">Pedidos Abertos</span>
                    <span class="text-xs font-medium">182</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-xs text-gray-600 dark:text-gray-400">Faturamento</span>
                    <span class="text-xs font-medium">R$ 1.25M</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 class="text-xs uppercase font-semibold text-gray-500 dark:text-gray-400 mb-2">WMS</h4>
                <div class="flex flex-col space-y-1">
                  <div class="flex justify-between">
                    <span class="text-xs text-gray-600 dark:text-gray-400">Ocupação</span>
                    <span class="text-xs font-medium">78%</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-xs text-gray-600 dark:text-gray-400">Expedições Pendentes</span>
                    <span class="text-xs font-medium">32</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 class="text-xs uppercase font-semibold text-gray-500 dark:text-gray-400 mb-2">TMS</h4>
                <div class="flex flex-col space-y-1">
                  <div class="flex justify-between">
                    <span class="text-xs text-gray-600 dark:text-gray-400">Veículos Ativos</span>
                    <span class="text-xs font-medium">64</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-xs text-gray-600 dark:text-gray-400">Atrasos</span>
                    <span class="text-xs font-medium text-warning">3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
              <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Alertas de Inventário</h4>
              <div class="space-y-2">
                <div class="flex justify-between items-center">
                  <span class="text-xs text-gray-600 dark:text-gray-400">Produto A23 - Estoque Baixo</span>
                  <span class="px-2 py-0.5 text-xs rounded-full bg-warning/10 text-warning">Urgente</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-xs text-gray-600 dark:text-gray-400">Produto B45 - Próximo do Vencimento</span>
                  <span class="px-2 py-0.5 text-xs rounded-full bg-danger/10 text-danger">Crítico</span>
                </div>
              </div>
            </div>
            
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
              <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Previsão de Demanda</h4>
              <div class="space-y-2">
                <div class="flex justify-between items-center">
                  <span class="text-xs text-gray-600 dark:text-gray-400">Produtos Sazonais</span>
                  <span class="text-xs font-medium text-success">+18%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-xs text-gray-600 dark:text-gray-400">Produtos Regulares</span>
                  <span class="text-xs font-medium text-gray-600 dark:text-gray-400">+3%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="grid grid-cols-1 gap-2">
            <div class="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Caminhão #T123 - Atraso na Rota</span>
              <button class="text-xs text-primary">Ver detalhes</button>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Manutenção Preventiva - Equipamento #E456</span>
              <button class="text-xs text-primary">Ver detalhes</button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card mb-8">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Histórico de Sincronizações</h3>
          <div class="flex space-x-2">
            <button class="btn btn-secondary text-sm">Exportar Logs</button>
            <button class="btn btn-primary text-sm">Forçar Sincronização</button>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">ID</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Sistema</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Horário</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Duração</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Registros</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300">#SYNC-9526</td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">ERP → WMS</td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Hoje, 10:25</td>
                <td class="px-4 py-3">
                  <span class="px-2 py-1 text-xs rounded-full bg-success/10 text-success">Sucesso</span>
                </td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">1.2s</td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">238</td>
              </tr>
              
              <tr>
                <td class="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300">#SYNC-9525</td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">TMS → Parceiros</td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Hoje, 10:15</td>
                <td class="px-4 py-3">
                  <span class="px-2 py-1 text-xs rounded-full bg-success/10 text-success">Sucesso</span>
                </td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">2.5s</td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">57</td>
              </tr>
              
              <tr>
                <td class="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300">#SYNC-9524</td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">BI → Dashboard</td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Hoje, 10:00</td>
                <td class="px-4 py-3">
                  <span class="px-2 py-1 text-xs rounded-full bg-danger/10 text-danger">Falha</span>
                </td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">5.7s</td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">-</td>
              </tr>
              
              <tr>
                <td class="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300">#SYNC-9523</td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">WMS → ERP</td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Hoje, 09:45</td>
                <td class="px-4 py-3">
                  <span class="px-2 py-1 text-xs rounded-full bg-success/10 text-success">Sucesso</span>
                </td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">0.8s</td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">125</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
} 