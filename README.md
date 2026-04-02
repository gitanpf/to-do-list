📝 To-Do List | React + Redux Toolkit
Este é um gerenciador de tarefas profissional desenvolvido para praticar o gerenciamento de estado complexo com Redux Toolkit e a tipagem estática com TypeScript. O projeto permite organizar o cotidiano com filtros de prioridade e status de conclusão.


🚀 Funcionalidades
Gerenciamento de Estado: Utiliza Redux Toolkit para um fluxo de dados previsível.


Sistema de Prioridades: Cada tarefa é classificada com tags coloridas:
🔴 Urgente
🟡 Importante
⚪ Normal


Status Dinâmico: Ao marcar o checkbox, a tarefa recebe a tag Concluída.
🟢 Concluída


Enquanto não marcada, a tarefa exibe a tag Pendente.
⚪ Pendente


Filtros Inteligentes: Visualize suas tarefas com base na prioridade ou no status.


🛠️ Tecnologias Utilizadas
• React (Hooks e Componentes Funcionais)
• Redux Toolkit (Slices e Store)
• TypeScript (Interfaces e Tipagem de Estado)
• Styled Components (ou SASS/CSS, dependendo do seu projeto)
• Prettier & ESLint (Padronização de código)


📦 Como rodar o projeto
Clone o repositório:

PowerShell
git clone https://github.com/gitanpf/to-do-list
Instale as dependências:

PowerShell
npm install


Inicie o servidor de desenvolvimento:
PowerShell
npm start


📂 Estrutura de Pastas (Redux)
A lógica do Redux está organizada para ser escalável:
src/
 ├── store/             # Configuração da Store
 ├── containers/        # Componentes que se conectam ao Redux
 ├── components/        # Componentes visuais (Dumb Components)
 └── models/            # Tipagens e Interfaces TypeScript

 
✨ Preview das Tags
[!TIP]
O sistema de cores ajuda na identificação visual rápida das tarefas que exigem atenção imediata!


Contato
Desenvolvido por Anelise - Estudante de Engenharia Front-End.
