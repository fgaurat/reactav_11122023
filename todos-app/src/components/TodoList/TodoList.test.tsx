import { beforeEach, describe, expect, test } from "vitest";
import TodoList from "./TodoList";
import { render } from "@testing-library/react";



describe('Testing TodoList',()=>{
    let todos:Todo[] =[] 

    beforeEach(()=>{
        todos=[
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
        ]
    })

    test("Todolist ok",()=>{
        render(<TodoList todos={todos} isLoading={false} doDelete={()=>{}}/>)
    })

    test("Todolist must have 3 todos",()=>{
        const r = render(<TodoList todos={todos} isLoading={false} doDelete={()=>{}}/>)
        const tr = r.container.querySelectorAll('tbody>tr')
        expect(tr.length).toBe(3)
    })


})