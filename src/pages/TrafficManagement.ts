import 'leaflet';

declare global {
  interface Window {
    L: typeof import('leaflet');
  }
}

export function renderTrafficManagement(): void {
  const contentElement = document.getElementById('content');
  if (!contentElement) return;
  
  contentElement.innerHTML = `
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Sistema de Gestão de Tráfego Inteligente</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <div class="lg:col-span-3">
          <div class="card h-full">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Monitoramento em Tempo Real</h3>
              <div class="flex space-x-2">
                <button class="text-xs px-2 py-1 bg-primary text-white rounded">Mapa</button>
                <button class="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">Lista</button>
              </div>
            </div>
            
            <div id="map" class="h-[500px] rounded-lg z-0"></div>
          </div>
        </div>
        
        <div class="lg:col-span-1">
          <div class="card mb-6">
            <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Filtros</h3>
            <div class="space-y-4">
              <div>
                <label for="vehicle-type" class="label">Tipo de Veículo</label>
                <select id="vehicle-type" class="input">
                  <option value="all">Todos</option>
                  <option value="truck">Caminhões</option>
                  <option value="container">Contêineres</option>
                </select>
              </div>
              
              <div>
                <label for="status" class="label">Status</label>
                <select id="status" class="input">
                  <option value="all">Todos</option>
                  <option value="moving">Em movimento</option>
                  <option value="waiting">Em espera</option>
                  <option value="loading">Carregando/Descarregando</option>
                </select>
              </div>
              
              <div>
                <label for="priority" class="label">Prioridade</label>
                <select id="priority" class="input">
                  <option value="all">Todas</option>
                  <option value="high">Alta</option>
                  <option value="medium">Média</option>
                  <option value="low">Baixa</option>
                </select>
              </div>
              
              <div class="pt-2">
                <button class="btn btn-primary w-full">Aplicar Filtros</button>
              </div>
            </div>
          </div>
          
          <div class="card">
            <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Estatísticas</h3>
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-600 dark:text-gray-400">Veículos Ativos</span>
                <span class="text-sm font-medium text-gray-800 dark:text-gray-200">42</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-600 dark:text-gray-400">Tempo Médio de Espera</span>
                <span class="text-sm font-medium text-gray-800 dark:text-gray-200">18 min</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-600 dark:text-gray-400">Docas Disponíveis</span>
                <span class="text-sm font-medium text-gray-800 dark:text-gray-200">7/12</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-600 dark:text-gray-400">Contêineres em Trânsito</span>
                <span class="text-sm font-medium text-gray-800 dark:text-gray-200">24</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <!-- Otimização de Rotas -->
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Otimização de Rotas</h3>
          <div class="space-y-4">
            <div class="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
              <div>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Rota #R123</span>
                <p class="text-xs text-gray-500 dark:text-gray-400">Porta Sul → Doca 4</p>
              </div>
              <div class="flex items-center space-x-2">
                <span class="px-2 py-1 text-xs rounded-full bg-success/10 text-success">Otimizada</span>
                <span class="text-sm font-medium text-success">-12 min</span>
              </div>
            </div>
            
            <div class="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
              <div>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Rota #R124</span>
                <p class="text-xs text-gray-500 dark:text-gray-400">Porta Leste → Doca 2</p>
              </div>
              <div class="flex items-center space-x-2">
                <span class="px-2 py-1 text-xs rounded-full bg-success/10 text-success">Otimizada</span>
                <span class="text-sm font-medium text-success">-8 min</span>
              </div>
            </div>
            
            <div class="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
              <div>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Rota #R125</span>
                <p class="text-xs text-gray-500 dark:text-gray-400">Porta Norte → Doca 8</p>
              </div>
              <div class="flex items-center space-x-2">
                <span class="px-2 py-1 text-xs rounded-full bg-warning/10 text-warning">Ajustando</span>
                <span class="text-sm font-medium text-warning">Calculando...</span>
              </div>
            </div>
            
            <div class="pt-2">
              <button class="btn btn-primary">Recalcular Todas as Rotas</button>
            </div>
          </div>
        </div>
        
        <!-- Agendamento -->
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Agendamento Automático</h3>
          <div class="space-y-4">
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Caminhão #T789</span>
                <span class="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Prioridade Alta</span>
              </div>
              <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Horário Agendado: 14:30</span>
                <span>Doca: 5</span>
              </div>
            </div>
            
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Caminhão #T790</span>
                <span class="px-2 py-1 text-xs rounded-full bg-secondary/10 text-secondary">Prioridade Média</span>
              </div>
              <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Horário Agendado: 15:15</span>
                <span>Doca: 3</span>
              </div>
            </div>
            
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Caminhão #T791</span>
                <span class="px-2 py-1 text-xs rounded-full bg-gray-500/10 text-gray-500">Prioridade Baixa</span>
              </div>
              <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Horário Agendado: 16:00</span>
                <span>Doca: 1</span>
              </div>
            </div>
            
            <div class="pt-2 flex justify-between">
              <button class="btn btn-secondary">Ver Agenda Completa</button>
              <button class="btn btn-primary">Adicionar Agendamento</button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card mb-8">
        <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Alertas de Tráfego</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Tipo</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Localização</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Horário</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="px-4 py-3">
                  <div class="flex items-center">
                    <div class="h-3 w-3 rounded-full bg-danger mr-2"></div>
                    <span class="text-sm text-gray-700 dark:text-gray-300">Congestionamento</span>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Entrada Principal - Zona B</td>
                <td class="px-4 py-3">
                  <span class="px-2 py-1 text-xs rounded-full bg-danger/10 text-danger">Ativo</span>
                </td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">10:23</td>
                <td class="px-4 py-3 text-sm">
                  <button class="text-primary hover:text-primary-dark">Resolver</button>
                </td>
              </tr>
              
              <tr>
                <td class="px-4 py-3">
                  <div class="flex items-center">
                    <div class="h-3 w-3 rounded-full bg-warning mr-2"></div>
                    <span class="text-sm text-gray-700 dark:text-gray-300">Tempo de Espera</span>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Doca 3 - Zona A</td>
                <td class="px-4 py-3">
                  <span class="px-2 py-1 text-xs rounded-full bg-warning/10 text-warning">Monitorando</span>
                </td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">09:45</td>
                <td class="px-4 py-3 text-sm">
                  <button class="text-primary hover:text-primary-dark">Detalhes</button>
                </td>
              </tr>
              
              <tr>
                <td class="px-4 py-3">
                  <div class="flex items-center">
                    <div class="h-3 w-3 rounded-full bg-success mr-2"></div>
                    <span class="text-sm text-gray-700 dark:text-gray-300">Via Liberada</span>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Corredor Sul - Zona C</td>
                <td class="px-4 py-3">
                  <span class="px-2 py-1 text-xs rounded-full bg-success/10 text-success">Resolvido</span>
                </td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">08:15</td>
                <td class="px-4 py-3 text-sm">
                  <button class="text-primary hover:text-primary-dark">Histórico</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
  
  // Inicializar o mapa após renderizar o conteúdo
  initializeMap();
}

function initializeMap(): void {
  const mapElement = document.getElementById('map');
  if (!mapElement || !window.L) return;
  
  // Configuração inicial do mapa
  const map = window.L.map('map').setView([-23.5505, -46.6333], 13);
  
  // Adicionar camada de tile
  window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  // Simulação de dados de veículos e instalações
  const vehicles = [
    { id: 'T001', lat: -23.545, lng: -46.638, type: 'truck', status: 'moving', priority: 'high' },
    { id: 'T002', lat: -23.550, lng: -46.640, type: 'truck', status: 'waiting', priority: 'medium' },
    { id: 'T003', lat: -23.552, lng: -46.634, type: 'truck', status: 'loading', priority: 'low' },
    { id: 'C001', lat: -23.548, lng: -46.629, type: 'container', status: 'moving', priority: 'high' },
    { id: 'C002', lat: -23.558, lng: -46.632, type: 'container', status: 'waiting', priority: 'medium' },
  ];
  
  const facilities = [
    { id: 'DOCK1', lat: -23.553, lng: -46.637, type: 'dock', name: 'Doca 1', status: 'available' },
    { id: 'DOCK2', lat: -23.554, lng: -46.635, type: 'dock', name: 'Doca 2', status: 'occupied' },
    { id: 'DOCK3', lat: -23.555, lng: -46.633, type: 'dock', name: 'Doca 3', status: 'available' },
    { id: 'GATE1', lat: -23.551, lng: -46.641, type: 'gate', name: 'Portão Sul', status: 'open' },
    { id: 'GATE2', lat: -23.547, lng: -46.630, type: 'gate', name: 'Portão Norte', status: 'open' },
  ];
  
  // Adicionar marcadores para veículos
  vehicles.forEach(vehicle => {
    let iconUrl = '';
    let iconSize: [number, number] = [25, 25]; // Tipo de tupla fixa para compatibilidade com Leaflet
    
    if (vehicle.type === 'truck') {
      iconUrl = 'https://cdn0.iconfinder.com/data/icons/transportation-icons-rounded/110/Truck-512.png';
    } else {
      iconUrl = 'https://cdn1.iconfinder.com/data/icons/logistics-transportation-vehicles/202/logistics-transportation-vehicles-11-512.png';
    }
    
    const vehicleIcon = window.L.icon({
      iconUrl,
      iconSize,
      iconAnchor: [12, 12],
      popupAnchor: [0, -12]
    });
    
    const marker = window.L.marker([vehicle.lat, vehicle.lng], { icon: vehicleIcon }).addTo(map);
    
    // Popup com informações do veículo
    marker.bindPopup(`
      <div class="p-2">
        <h3 class="font-semibold">${vehicle.id}</h3>
        <p>Tipo: ${vehicle.type === 'truck' ? 'Caminhão' : 'Contêiner'}</p>
        <p>Status: ${
          vehicle.status === 'moving' ? 'Em movimento' : 
          vehicle.status === 'waiting' ? 'Em espera' : 'Carregando'
        }</p>
        <p>Prioridade: ${
          vehicle.priority === 'high' ? 'Alta' : 
          vehicle.priority === 'medium' ? 'Média' : 'Baixa'
        }</p>
      </div>
    `);
  });
  
  // Adicionar marcadores para instalações
  facilities.forEach(facility => {
    let color = '';
    
    if (facility.status === 'available') {
      color = 'green';
    } else if (facility.status === 'occupied') {
      color = 'red';
    } else {
      color = 'blue';
    }
    
    const marker = window.L.circleMarker([facility.lat, facility.lng], {
      radius: 8,
      fillColor: color,
      color: '#fff',
      weight: 2,
      opacity: 1,
      fillOpacity: 0.8
    }).addTo(map);
    
    // Popup com informações da instalação
    marker.bindPopup(`
      <div class="p-2">
        <h3 class="font-semibold">${facility.name}</h3>
        <p>Tipo: ${facility.type === 'dock' ? 'Doca' : 'Portão'}</p>
        <p>Status: ${
          facility.status === 'available' ? 'Disponível' : 
          facility.status === 'occupied' ? 'Ocupado' : 'Aberto'
        }</p>
      </div>
    `);
  });
} 