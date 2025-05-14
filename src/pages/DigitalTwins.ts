import * as THREE from 'three';

export function renderDigitalTwins(): void {
  const contentElement = document.getElementById('content');
  if (!contentElement) return;

  contentElement.innerHTML = `
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Digital Twins (Gêmeos Digitais)</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <div class="lg:col-span-3">
          <div class="card h-full">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Visualização 3D</h3>
              <div class="flex space-x-2">
                <button id="view3d" class="text-xs px-2 py-1 bg-primary text-white rounded">3D</button>
                <button id="view2d" class="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">2D</button>
                <button id="viewHeatmap" class="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">Heatmap</button>
              </div>
            </div>
            
            <div id="scene-container" class="h-[500px] rounded-lg relative overflow-hidden">
              <!-- Renderização 3D será feita aqui -->
              <div class="absolute inset-0 flex items-center justify-center" id="loader">
                <div class="flex flex-col items-center">
                  <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                  <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Carregando modelo 3D...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="lg:col-span-1">
          <div class="card mb-6">
            <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Controles</h3>
            <div class="space-y-4">
              <div>
                <label for="area-selector" class="label">Área de Visualização</label>
                <select id="area-selector" class="input">
                  <option value="all">Instalação Completa</option>
                  <option value="warehouse">Armazém</option>
                  <option value="docks">Área de Docas</option>
                  <option value="sorting">Centro de Triagem</option>
                  <option value="storage">Estoque</option>
                </select>
              </div>
              
              <div>
                <label for="simulation-time" class="label">Tempo de Simulação</label>
                <div class="flex items-center space-x-2">
                  <button id="playSim" class="p-2 rounded bg-primary text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  <button id="pauseSim" class="p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  <input type="range" id="timeSlider" min="0" max="100" value="0" class="flex-grow h-2 rounded-lg appearance-none cursor-pointer bg-gray-300 dark:bg-gray-600">
                  <span id="timeValue" class="text-sm font-mono text-gray-700 dark:text-gray-300 min-w-[60px] text-right">00:00</span>
                </div>
              </div>
              
              <div>
                <label for="simulation-speed" class="label">Velocidade da Simulação</label>
                <select id="simulation-speed" class="input">
                  <option value="0.5">0.5x</option>
                  <option value="1" selected>1x (Normal)</option>
                  <option value="2">2x</option>
                  <option value="5">5x</option>
                  <option value="10">10x</option>
                </select>
              </div>
              
              <div class="pt-2">
                <button id="reset-view" class="btn btn-secondary w-full">Resetar Visualização</button>
              </div>
            </div>
          </div>
          
          <div class="card">
            <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Métricas em Tempo Real</h3>
            <div class="space-y-3">
              <div>
                <label class="text-xs text-gray-500 dark:text-gray-400">Utilização de Espaço</label>
                <div class="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-1">
                  <div class="bg-primary h-2 rounded-full" style="width: 75%"></div>
                </div>
                <div class="flex justify-between text-xs mt-1">
                  <span>75%</span>
                  <span class="text-gray-500 dark:text-gray-400">20,500 m² / 27,000 m²</span>
                </div>
              </div>
              
              <div>
                <label class="text-xs text-gray-500 dark:text-gray-400">Fluxo de Tráfego</label>
                <div class="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-1">
                  <div class="bg-success h-2 rounded-full" style="width: 62%"></div>
                </div>
                <div class="flex justify-between text-xs mt-1">
                  <span>62%</span>
                  <span class="text-gray-500 dark:text-gray-400">Ótimo</span>
                </div>
              </div>
              
              <div>
                <label class="text-xs text-gray-500 dark:text-gray-400">Utilização de Equipamentos</label>
                <div class="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-1">
                  <div class="bg-warning h-2 rounded-full" style="width: 89%"></div>
                </div>
                <div class="flex justify-between text-xs mt-1">
                  <span>89%</span>
                  <span class="text-warning">Alto</span>
                </div>
              </div>
              
              <div>
                <label class="text-xs text-gray-500 dark:text-gray-400">Tempo Médio de Processamento</label>
                <div class="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-1">
                  <div class="bg-primary h-2 rounded-full" style="width: 45%"></div>
                </div>
                <div class="flex justify-between text-xs mt-1">
                  <span>45%</span>
                  <span class="text-gray-500 dark:text-gray-400">27 min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <!-- Simulação de Cenários -->
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Simulação de Cenários</h3>
          <div class="space-y-4">
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Cenário #1: Aumento de 30% no Volume</span>
                <span class="px-2 py-1 text-xs rounded-full bg-warning/10 text-warning">Em Análise</span>
              </div>
              <p class="text-xs text-gray-500 dark:text-gray-400 mb-3">
                Simulação de aumento de 30% no volume de operações durante período de pico sazonal.
              </p>
              <div class="flex justify-between items-center text-xs">
                <button class="text-primary hover:text-primary-dark">Ver Detalhes</button>
                <span class="text-gray-500 dark:text-gray-400">Criado: 15/04/2023</span>
              </div>
            </div>
            
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Cenário #2: Novo Layout de Estoque</span>
                <span class="px-2 py-1 text-xs rounded-full bg-success/10 text-success">Concluído</span>
              </div>
              <p class="text-xs text-gray-500 dark:text-gray-400 mb-3">
                Reorganização do layout de estoque para otimizar o fluxo de produtos de alta rotatividade.
              </p>
              <div class="flex justify-between items-center text-xs">
                <button class="text-primary hover:text-primary-dark">Ver Resultados</button>
                <span class="text-gray-500 dark:text-gray-400">Ganho de Eficiência: +15%</span>
              </div>
            </div>
            
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Cenário #3: Falha em Equipamento Crítico</span>
                <span class="px-2 py-1 text-xs rounded-full bg-secondary/10 text-secondary">Pendente</span>
              </div>
              <p class="text-xs text-gray-500 dark:text-gray-400 mb-3">
                Simulação de contingência para caso de falha no sistema principal de classificação de produtos.
              </p>
              <div class="flex justify-between items-center text-xs">
                <button class="text-primary hover:text-primary-dark">Iniciar Simulação</button>
                <span class="text-gray-500 dark:text-gray-400">Prioridade: Alta</span>
              </div>
            </div>
            
            <div class="pt-2">
              <button class="btn btn-primary">Criar Novo Cenário</button>
            </div>
          </div>
        </div>
        
        <!-- Análise de Gargalos -->
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Identificação de Gargalos</h3>
          <div class="space-y-4">
            <div class="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
              <div>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Área de Triagem Principal</span>
                <p class="text-xs text-gray-500 dark:text-gray-400">Capacidade insuficiente em horários de pico</p>
              </div>
              <div class="flex items-center space-x-2">
                <span class="px-2 py-1 text-xs rounded-full bg-danger/10 text-danger">Crítico</span>
                <button class="text-primary text-sm hover:text-primary-dark">Resolver</button>
              </div>
            </div>
            
            <div class="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
              <div>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Corredor B-12</span>
                <p class="text-xs text-gray-500 dark:text-gray-400">Congestionamento frequente de empilhadeiras</p>
              </div>
              <div class="flex items-center space-x-2">
                <span class="px-2 py-1 text-xs rounded-full bg-warning/10 text-warning">Moderado</span>
                <button class="text-primary text-sm hover:text-primary-dark">Analisar</button>
              </div>
            </div>
            
            <div class="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
              <div>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Doca 4</span>
                <p class="text-xs text-gray-500 dark:text-gray-400">Tempo de carga/descarga acima da média</p>
              </div>
              <div class="flex items-center space-x-2">
                <span class="px-2 py-1 text-xs rounded-full bg-warning/10 text-warning">Moderado</span>
                <button class="text-primary text-sm hover:text-primary-dark">Analisar</button>
              </div>
            </div>
            
            <div class="flex justify-between items-center pb-2">
              <div>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Estação de Embalagem C</span>
                <p class="text-xs text-gray-500 dark:text-gray-400">Baixa eficiência operacional</p>
              </div>
              <div class="flex items-center space-x-2">
                <span class="px-2 py-1 text-xs rounded-full bg-info/10 text-info">Baixo</span>
                <button class="text-primary text-sm hover:text-primary-dark">Analisar</button>
              </div>
            </div>
            
            <div class="pt-2 flex justify-between">
              <button class="btn btn-secondary">Exportar Relatório</button>
              <button class="btn btn-primary">Análise Automática</button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card mb-8">
        <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Histórico de Simulações</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">ID</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Descrição</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Data</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Resultado</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300">SIM-0123</td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Otimização de Rotas Internas</td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">03/04/2023</td>
                <td class="px-4 py-3">
                  <span class="px-2 py-1 text-xs rounded-full bg-success/10 text-success">+18% Eficiência</span>
                </td>
                <td class="px-4 py-3 text-sm">
                  <button class="text-primary hover:text-primary-dark mr-2">Ver</button>
                  <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">Comparar</button>
                </td>
              </tr>
              
              <tr>
                <td class="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300">SIM-0122</td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Expansão da Área de Armazenamento</td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">28/03/2023</td>
                <td class="px-4 py-3">
                  <span class="px-2 py-1 text-xs rounded-full bg-success/10 text-success">+25% Capacidade</span>
                </td>
                <td class="px-4 py-3 text-sm">
                  <button class="text-primary hover:text-primary-dark mr-2">Ver</button>
                  <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">Comparar</button>
                </td>
              </tr>
              
              <tr>
                <td class="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300">SIM-0121</td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Teste de Contingência - Falha de Energia</td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">15/03/2023</td>
                <td class="px-4 py-3">
                  <span class="px-2 py-1 text-xs rounded-full bg-warning/10 text-warning">Parcial</span>
                </td>
                <td class="px-4 py-3 text-sm">
                  <button class="text-primary hover:text-primary-dark mr-2">Ver</button>
                  <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">Comparar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
  
  // Inicializar a cena 3D após renderizar o conteúdo
  initializeScene();
}

function initializeScene(): void {
  const container = document.getElementById('scene-container');
  if (!container) return;
  
  // Criar cena, câmera e renderizador
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf0f0f0);
  
  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 10;
  camera.position.y = 5;
  camera.lookAt(0, 0, 0);
  
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.shadowMap.enabled = true;
  
  // Remover o loader e adicionar o renderizador
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.display = 'none';
  }
  container.appendChild(renderer.domElement);
  
  // Adicionar iluminação
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 10, 7.5);
  directionalLight.castShadow = true;
  scene.add(directionalLight);
  
  // Criar um exemplo simples de um layout de armazém
  createWarehouseLayout(scene);
  
  // Função de animação
  function animate(): void {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  
  // Iniciar animação
  animate();
  
  // Lidar com redimensionamento da janela
  window.addEventListener('resize', () => {
    if (!container) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
  
  // Adicionar eventos aos botões de visualização
  const buttons = document.querySelectorAll('#view3d, #view2d, #viewHeatmap');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Remover classe ativa de todos os botões
      buttons.forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white');
        btn.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
      });
      
      // Adicionar classe ativa ao botão clicado
      button.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
      button.classList.add('bg-primary', 'text-white');
      
      // Implementar a lógica de mudança de visualização aqui
    });
  });
}

function createWarehouseLayout(scene: THREE.Scene): void {
  // Criar o piso
  const floorGeometry = new THREE.PlaneGeometry(30, 30);
  const floorMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xcccccc, 
    roughness: 0.8 
  });
  const floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);
  
  // Adicionar linhas de grade no piso
  const gridHelper = new THREE.GridHelper(30, 30);
  scene.add(gridHelper);
  
  // Adicionar prateleiras/estantes
  for (let i = -10; i <= 10; i += 5) {
    for (let j = -10; j <= 10; j += 5) {
      // Pular o centro para criar um corredor
      if (i !== 0) {
        createShelf(scene, i, 0, j);
      }
    }
  }
  
  // Adicionar docas na extremidade
  for (let i = -10; i <= 10; i += 5) {
    if (i !== 0) {
      createDock(scene, i, 0, -15);
    }
  }
  
  // Adicionar caminhões e equipamentos de movimentação
  createTruck(scene, 0, 0, -15);
  createForklift(scene, 5, 0, 0);
  createForklift(scene, -5, 0, 5);
}

function createShelf(scene: THREE.Scene, x: number, y: number, z: number): void {
  // Base da prateleira
  const baseGeometry = new THREE.BoxGeometry(4, 0.2, 3);
  const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x555555 });
  const base = new THREE.Mesh(baseGeometry, baseMaterial);
  base.position.set(x, y, z);
  base.receiveShadow = true;
  base.castShadow = true;
  scene.add(base);
  
  // Prateleiras (níveis)
  for (let level = 1; level <= 3; level++) {
    const shelfGeometry = new THREE.BoxGeometry(4, 0.1, 3);
    const shelfMaterial = new THREE.MeshStandardMaterial({ color: 0x777777 });
    const shelf = new THREE.Mesh(shelfGeometry, shelfMaterial);
    shelf.position.set(x, level, z);
    shelf.receiveShadow = true;
    shelf.castShadow = true;
    scene.add(shelf);
    
    // Adicionar apoios/pilares
    const pillarGeometry = new THREE.BoxGeometry(0.2, level, 0.2);
    const pillarMaterial = new THREE.MeshStandardMaterial({ color: 0x444444 });
    
    // Quatro pilares, um em cada canto
    for (let i = -1; i <= 1; i += 2) {
      for (let j = -1; j <= 1; j += 2) {
        const pillar = new THREE.Mesh(pillarGeometry, pillarMaterial);
        pillar.position.set(x + (i * 1.9), level / 2, z + (j * 1.4));
        pillar.receiveShadow = true;
        pillar.castShadow = true;
        scene.add(pillar);
      }
    }
    
    // Adicionar caixas nas prateleiras
    if (Math.random() > 0.3) {
      const boxGeometry = new THREE.BoxGeometry(0.9, 0.9, 0.9);
      const boxMaterial = new THREE.MeshStandardMaterial({ 
        color: Math.random() > 0.5 ? 0x8B4513 : 0xD2B48C
      });
      const box = new THREE.Mesh(boxGeometry, boxMaterial);
      box.position.set(x + (Math.random() - 0.5) * 3, level + 0.5, z + (Math.random() - 0.5) * 2);
      box.receiveShadow = true;
      box.castShadow = true;
      scene.add(box);
    }
  }
}

function createDock(scene: THREE.Scene, x: number, y: number, z: number): void {
  // Plataforma da doca
  const platformGeometry = new THREE.BoxGeometry(4, 0.5, 3);
  const platformMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 });
  const platform = new THREE.Mesh(platformGeometry, platformMaterial);
  platform.position.set(x, y - 0.25, z);
  platform.receiveShadow = true;
  platform.castShadow = true;
  scene.add(platform);
  
  // Rampa da doca
  const rampGeometry = new THREE.BoxGeometry(3, 0.2, 2);
  const rampMaterial = new THREE.MeshStandardMaterial({ color: 0x777777 });
  const ramp = new THREE.Mesh(rampGeometry, rampMaterial);
  ramp.position.set(x, y - 0.4, z - 2.5);
  ramp.rotation.x = -Math.PI / 12; // Leve inclinação
  ramp.receiveShadow = true;
  ramp.castShadow = true;
  scene.add(ramp);
}

function createTruck(scene: THREE.Scene, x: number, y: number, z: number): void {
  // Cabine do caminhão
  const cabGeometry = new THREE.BoxGeometry(2.5, 2, 2);
  const cabMaterial = new THREE.MeshStandardMaterial({ color: 0x3366cc });
  const cab = new THREE.Mesh(cabGeometry, cabMaterial);
  cab.position.set(x, y + 1, z);
  cab.receiveShadow = true;
  cab.castShadow = true;
  scene.add(cab);
  
  // Carroceria/trailer do caminhão
  const trailerGeometry = new THREE.BoxGeometry(2.5, 2.5, 6);
  const trailerMaterial = new THREE.MeshStandardMaterial({ color: 0xdddddd });
  const trailer = new THREE.Mesh(trailerGeometry, trailerMaterial);
  trailer.position.set(x, y + 1.25, z - 4);
  trailer.receiveShadow = true;
  trailer.castShadow = true;
  scene.add(trailer);
  
  // Rodas
  const wheelGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.3, 16);
  const wheelMaterial = new THREE.MeshStandardMaterial({ color: 0x222222 });
  
  // Posicionar as rodas
  const wheelPositions = [
    [x - 1.25, y + 0.5, z + 0.7], // Dianteira esquerda
    [x + 1.25, y + 0.5, z + 0.7], // Dianteira direita
    [x - 1.25, y + 0.5, z - 2],    // Traseira esquerda (cabine)
    [x + 1.25, y + 0.5, z - 2],    // Traseira direita (cabine)
    [x - 1.25, y + 0.5, z - 6],    // Traseira esquerda (trailer)
    [x + 1.25, y + 0.5, z - 6]     // Traseira direita (trailer)
  ];
  
  wheelPositions.forEach(position => {
    const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
    wheel.position.set(position[0], position[1], position[2]);
    wheel.rotation.z = Math.PI / 2;
    wheel.receiveShadow = true;
    wheel.castShadow = true;
    scene.add(wheel);
  });
}

function createForklift(scene: THREE.Scene, x: number, y: number, z: number): void {
  // Corpo da empilhadeira
  const bodyGeometry = new THREE.BoxGeometry(1.8, 1.2, 2.5);
  const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0xffcc00 });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  body.position.set(x, y + 0.6, z);
  body.receiveShadow = true;
  body.castShadow = true;
  scene.add(body);
  
  // Garfos
  const forkGeometry = new THREE.BoxGeometry(0.1, 0.1, 1.5);
  const forkMaterial = new THREE.MeshStandardMaterial({ color: 0x999999 });
  
  const leftFork = new THREE.Mesh(forkGeometry, forkMaterial);
  leftFork.position.set(x - 0.4, y + 0.05, z + 2);
  leftFork.receiveShadow = true;
  leftFork.castShadow = true;
  scene.add(leftFork);
  
  const rightFork = new THREE.Mesh(forkGeometry, forkMaterial);
  rightFork.position.set(x + 0.4, y + 0.05, z + 2);
  rightFork.receiveShadow = true;
  rightFork.castShadow = true;
  scene.add(rightFork);
  
  // Mastro (estrutura vertical)
  const mastGeometry = new THREE.BoxGeometry(1, 2, 0.2);
  const mastMaterial = new THREE.MeshStandardMaterial({ color: 0x777777 });
  const mast = new THREE.Mesh(mastGeometry, mastMaterial);
  mast.position.set(x, y + 1.2, z + 1.25);
  mast.receiveShadow = true;
  mast.castShadow = true;
  scene.add(mast);
  
  // Rodas
  const wheelGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 16);
  const wheelMaterial = new THREE.MeshStandardMaterial({ color: 0x222222 });
  
  const frontLeftWheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
  frontLeftWheel.position.set(x - 0.9, y + 0.4, z + 0.8);
  frontLeftWheel.rotation.z = Math.PI / 2;
  frontLeftWheel.receiveShadow = true;
  frontLeftWheel.castShadow = true;
  scene.add(frontLeftWheel);
  
  const frontRightWheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
  frontRightWheel.position.set(x + 0.9, y + 0.4, z + 0.8);
  frontRightWheel.rotation.z = Math.PI / 2;
  frontRightWheel.receiveShadow = true;
  frontRightWheel.castShadow = true;
  scene.add(frontRightWheel);
  
  const backLeftWheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
  backLeftWheel.position.set(x - 0.9, y + 0.4, z - 0.8);
  backLeftWheel.rotation.z = Math.PI / 2;
  backLeftWheel.receiveShadow = true;
  backLeftWheel.castShadow = true;
  scene.add(backLeftWheel);
  
  const backRightWheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
  backRightWheel.position.set(x + 0.9, y + 0.4, z - 0.8);
  backRightWheel.rotation.z = Math.PI / 2;
  backRightWheel.receiveShadow = true;
  backRightWheel.castShadow = true;
  scene.add(backRightWheel);
} 