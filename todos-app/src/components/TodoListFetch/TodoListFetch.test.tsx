import { afterAll, afterEach, beforeAll, describe, expect, test } from "vitest";
import TodoListFetch from "./TodoListFetch";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { Todo } from "../../core/Todo";
import { render, waitFor } from "@testing-library/react";

const todos: Todo[] = [
  {
    userId: 1,
    id: 18,
    title: "dolorum est consequatur ea mollitia in culpa",
    completed: false,
  },
  {
    userId: 1,
    id: 19,
    title: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
    completed: true,
  },
  {
    userId: 1,
    id: 20,
    title: "ullam nobis libero sapiente ad optio sint",
    completed: true,
  },
];

const server = setupServer(
  http.get(import.meta.env.VITE_TODOS_URL, () => {
    return HttpResponse.json(todos);
  })
);

describe("Testing TodoListFetch", () => {
  beforeAll(() => {
    // Start the interception.
    server.listen();
  });

  afterEach(() => {
    // Remove any handlers you may have added
    // in individual tests (runtime handlers).
    server.resetHandlers()
  })


  afterAll(() => {
    // Disable request interception and clean up.
    server.close()
  })

  test('TodoListFetch must have 3 todos',async ()=>{
    const r = render(<TodoListFetch/>)
    await waitFor(()=>{
        const tr = r.container.querySelectorAll('tbody>tr')
        expect(tr.length).toBe(3)
    })

  })


});
