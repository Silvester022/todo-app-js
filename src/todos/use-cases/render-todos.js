import { createTodoHTML } from "./create-todo.html";

let element;

/**
 * 
 * @param {string} elementId 
 * @param {Todo} todos 
 */
export const renderTodos = ( elementId, todos = [] ) => {

    if(!element) 
        element = document.querySelector( elementId );

    if(!element) throw new Error(`Element ${ elementId } not found`);

    element.innerHTML = '';

    todos.forEach( todos => {
        
        element.append( createTodoHTML( todos ) );
    });
}