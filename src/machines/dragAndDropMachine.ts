import { createMachine, interpret, assign } from 'xstate';

type DragAndDropMachineState = | { value: string, context: DragAndDropMachineContext }

interface DragAndDropMachineContext {
    pointerX: number;
    pointerY: number;
    dx: number;
    dy: number;
    id: string;
}

let theDraggables: Array<HTMLElement> = [];

const dragAndDropMachine =
createMachine<DragAndDropMachineContext, MouseEvent, DragAndDropMachineState>({
    id: 'dragndrop',
    initial: 'idle',
    context: {
        pointerX: 0,
        pointerY: 0,
        dx: 0,
        dy: 0,
        id: ''
    },
    states: {
        idle: {
            on: {
                mousedown: {
                    target: 'dragging',
                    actions: assign((context: DragAndDropMachineContext, event: MouseEvent) => {
                        return {
                            ...context,
                            pointerX: event.clientX,
                            pointerY: event.clientY,
                            id: event.target ? (event.target as HTMLElement).id : ''
                        }
                    })
                }
            }
        },
        dragging: {
            on: {
                mousemove: {
                    actions: assign((context: DragAndDropMachineContext, event: MouseEvent) => {
                        return {
                            ...context,
                            dx: event.clientX - context.pointerX,
                            dy: event.clientY - context.pointerY,
                        }
                    })
                },
                mouseup: {
                    target: 'dropped',
                    actions: assign((context: DragAndDropMachineContext, event: MouseEvent) => ({
                        pointerX: 0,
                        pointerY: 0,
                        dx: 0,
                        dy: 0,
                        id: context.id
                    }))
                }
            }
        },
        dropped: {
            after: {
                500: 'idle'
            }
        }
    }
});

const dragAndDropService = interpret(dragAndDropMachine)
    .onTransition(state => {
        if(state.changed) {
            document.body.dataset.state = state.value.toString();
            if(theDraggables && theDraggables.length > 0) {
                const theElement = theDraggables.find(d => d.id === state.context.id)
                if(theElement) {
                    theElement.style.setProperty('--dx', state.context.dx.toString());
                    theElement.style.setProperty('--dy', state.context.dy.toString());
                }
            }
        }
    })
    .start();

const bindDraggable = (element: HTMLElement) => {
    if(element) {
        theDraggables.push(element);
        element.addEventListener('mousedown', (event: MouseEvent) => {
            dragAndDropService.send(event);
        });
    }
}

const bindDocument = () => {
    document.body.addEventListener('mouseup', (event: MouseEvent) => {
        dragAndDropService.send(event);
    });

    document.body.addEventListener('mousemove', (event: MouseEvent) => {
        dragAndDropService.send(event);
    });
}

bindDocument();

export {
    bindDraggable
};

