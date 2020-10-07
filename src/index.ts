import { bindDraggable } from './machines/dragAndDropMachine';
import './assets/index.scss';


const file: HTMLElement | null = document.getElementById('file');
const file2: HTMLElement | null = document.getElementById('file2');
if(file && file2) {
    bindDraggable(file);
    bindDraggable(file2);
}