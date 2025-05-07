// Перечисление для приоритетов
export enum Priority {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high'
  }
  
  // Перечисление для статусов
  export enum Status {
    ACTIVE = 'active',
    INACTIVE = 'inactive'
  }
  
  // Интерфейс для задачи
  export type Todo = {
    todo: string;
    priority: Priority;
  }
  
  // Интерфейс для пользователя
  export type User = {
    name: string;
    status: Status;
    todos: Todo[];
    changeStatus: (newStatus: Status) => void;
    addTodo: (todo: string, priority?: Priority) => void;
    displayTodos: () => void;
    displayActiveTodos: () => void;
  }