import type { Meta, StoryObj } from '@storybook/react';
import TodoList from './TodoList';
import "../../index.css"
const meta = {
    title: 'TodoApp/TodoList',
    component: TodoList,
    tags: ['autodocs'],
    argTypes: {
        doDelete: { action: 'clicked' }
    },
  } satisfies Meta<typeof TodoList>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Primary: Story = {
    args: {
        todos: [
            {
                "userId": 1,
                "id": 18,
                "title": "dolorum est consequatur ea mollitia in culpa",
                "completed": false
              },
              {
                "userId": 1,
                "id": 19,
                "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
                "completed": true
              },
              {
                "userId": 1,
                "id": 20,
                "title": "ullam nobis libero sapiente ad optio sint",
                "completed": true
              },            
        ],
      isLoading: false,
    },
  };