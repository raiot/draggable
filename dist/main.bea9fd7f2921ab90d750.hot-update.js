webpackHotUpdate("main",{

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dragAndDropMachine_1 = __webpack_require__(/*! ./machines/dragAndDropMachine */ "./src/machines/dragAndDropMachine.ts");
__webpack_require__(/*! ./assets/index.scss */ "./src/assets/index.scss");
var file = document.getElementById('file');
var file2 = document.getElementById('file2');
if (file && file2) {
    dragAndDropMachine_1.bindDraggable(file);
    dragAndDropMachine_1.bindDraggable(file2);
}


/***/ }),

/***/ "./src/machines/dragAndDropMachine.ts":
/*!********************************************!*\
  !*** ./src/machines/dragAndDropMachine.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindDraggable = void 0;
var xstate_1 = __webpack_require__(/*! xstate */ "./node_modules/xstate/es/index.js");
var theDraggables = [];
var dragAndDropMachine = xstate_1.createMachine({
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
                    actions: xstate_1.assign(function (context, event) {
                        return __assign(__assign({}, context), { pointerX: event.clientX, pointerY: event.clientY, id: event.target ? event.target.id : '' });
                    })
                }
            }
        },
        dragging: {
            on: {
                mousemove: {
                    actions: xstate_1.assign(function (context, event) {
                        return __assign(__assign({}, context), { dx: event.clientX - context.pointerX, dy: event.clientY - context.pointerY });
                    })
                },
                mouseup: {
                    target: 'dropped',
                    actions: xstate_1.assign(function (context, event) { return ({
                        pointerX: 0,
                        pointerY: 0,
                        dx: 0,
                        dy: 0,
                        id: context.id
                    }); })
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
var dragAndDropService = xstate_1.interpret(dragAndDropMachine)
    .onTransition(function (state) {
    if (state.changed) {
        document.body.dataset.state = state.value.toString();
        if (theDraggables && theDraggables.length > 0) {
            var theElement = theDraggables.find(function (d) { return d.id === state.context.id; });
            if (theElement) {
                theElement.style.setProperty('--dx', state.context.dx.toString());
                theElement.style.setProperty('--dy', state.context.dy.toString());
            }
        }
    }
})
    .start();
var bindDraggable = function (element) {
    if (element) {
        theDraggables.push(element);
        element.addEventListener('mousedown', function (event) {
            dragAndDropService.send(event);
        });
    }
};
exports.bindDraggable = bindDraggable;
var bindDocument = function () {
    document.body.addEventListener('mouseup', function (event) {
        dragAndDropService.send(event);
    });
    document.body.addEventListener('mousemove', function (event) {
        dragAndDropService.send(event);
    });
};
bindDocument();


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hY2hpbmVzL2RyYWdBbmREcm9wTWFjaGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw0SEFBOEQ7QUFDOUQsMEVBQTZCO0FBRzdCLElBQU0sSUFBSSxHQUF1QixRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pFLElBQU0sS0FBSyxHQUF1QixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ25FLElBQUcsSUFBSSxJQUFJLEtBQUssRUFBRTtJQUNkLGtDQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsa0NBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEQsc0ZBQTBEO0FBWTFELElBQUksYUFBYSxHQUF1QixFQUFFLENBQUM7QUFFM0MsSUFBTSxrQkFBa0IsR0FDeEIsc0JBQWEsQ0FBaUU7SUFDMUUsRUFBRSxFQUFFLFdBQVc7SUFDZixPQUFPLEVBQUUsTUFBTTtJQUNmLE9BQU8sRUFBRTtRQUNMLFFBQVEsRUFBRSxDQUFDO1FBQ1gsUUFBUSxFQUFFLENBQUM7UUFDWCxFQUFFLEVBQUUsQ0FBQztRQUNMLEVBQUUsRUFBRSxDQUFDO1FBQ0wsRUFBRSxFQUFFLEVBQUU7S0FDVDtJQUNELE1BQU0sRUFBRTtRQUNKLElBQUksRUFBRTtZQUNGLEVBQUUsRUFBRTtnQkFDQSxTQUFTLEVBQUU7b0JBQ1AsTUFBTSxFQUFFLFVBQVU7b0JBQ2xCLE9BQU8sRUFBRSxlQUFNLENBQUMsVUFBQyxPQUFrQyxFQUFFLEtBQWlCO3dCQUNsRSw2QkFDTyxPQUFPLEtBQ1YsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQ3ZCLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUN2QixFQUFFLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUUs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ZSI6Im1haW4uYmVhOWZkN2YyOTIxYWI5MGQ3NTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmREcmFnZ2FibGUgfSBmcm9tICcuL21hY2hpbmVzL2RyYWdBbmREcm9wTWFjaGluZSc7XG5pbXBvcnQgJy4vYXNzZXRzL2luZGV4LnNjc3MnO1xuXG5cbmNvbnN0IGZpbGU6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlJyk7XG5jb25zdCBmaWxlMjogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUyJyk7XG5pZihmaWxlICYmIGZpbGUyKSB7XG4gICAgYmluZERyYWdnYWJsZShmaWxlKTtcbiAgICBiaW5kRHJhZ2dhYmxlKGZpbGUyKTtcbn0iLCJpbXBvcnQgeyBjcmVhdGVNYWNoaW5lLCBpbnRlcnByZXQsIGFzc2lnbiB9IGZyb20gJ3hzdGF0ZSc7XG5cbnR5cGUgRHJhZ0FuZERyb3BNYWNoaW5lU3RhdGUgPSB8IHsgdmFsdWU6IHN0cmluZywgY29udGV4dDogRHJhZ0FuZERyb3BNYWNoaW5lQ29udGV4dCB9XG5cbmludGVyZmFjZSBEcmFnQW5kRHJvcE1hY2hpbmVDb250ZXh0IHtcbiAgICBwb2ludGVyWDogbnVtYmVyO1xuICAgIHBvaW50ZXJZOiBudW1iZXI7XG4gICAgZHg6IG51bWJlcjtcbiAgICBkeTogbnVtYmVyO1xuICAgIGlkOiBzdHJpbmc7XG59XG5cbmxldCB0aGVEcmFnZ2FibGVzOiBBcnJheTxIVE1MRWxlbWVudD4gPSBbXTtcblxuY29uc3QgZHJhZ0FuZERyb3BNYWNoaW5lID1cbmNyZWF0ZU1hY2hpbmU8RHJhZ0FuZERyb3BNYWNoaW5lQ29udGV4dCwgTW91c2VFdmVudCwgRHJhZ0FuZERyb3BNYWNoaW5lU3RhdGU+KHtcbiAgICBpZDogJ2RyYWduZHJvcCcsXG4gICAgaW5pdGlhbDogJ2lkbGUnLFxuICAgIGNvbnRleHQ6IHtcbiAgICAgICAgcG9pbnRlclg6IDAsXG4gICAgICAgIHBvaW50ZXJZOiAwLFxuICAgICAgICBkeDogMCxcbiAgICAgICAgZHk6IDAsXG4gICAgICAgIGlkOiAnJ1xuICAgIH0sXG4gICAgc3RhdGVzOiB7XG4gICAgICAgIGlkbGU6IHtcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgbW91c2Vkb3duOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogJ2RyYWdnaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogYXNzaWduKChjb250ZXh0OiBEcmFnQW5kRHJvcE1hY2hpbmVDb250ZXh0LCBldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXJYOiBldmVudC5jbGllbnRYLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXJZOiBldmVudC5jbGllbnRZLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBldmVudC50YXJnZXQgPyAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5pZCA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkcmFnZ2luZzoge1xuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBtb3VzZW1vdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogYXNzaWduKChjb250ZXh0OiBEcmFnQW5kRHJvcE1hY2hpbmVDb250ZXh0LCBldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR4OiBldmVudC5jbGllbnRYIC0gY29udGV4dC5wb2ludGVyWCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkeTogZXZlbnQuY2xpZW50WSAtIGNvbnRleHQucG9pbnRlclksXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb3VzZXVwOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogJ2Ryb3BwZWQnLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zOiBhc3NpZ24oKGNvbnRleHQ6IERyYWdBbmREcm9wTWFjaGluZUNvbnRleHQsIGV2ZW50OiBNb3VzZUV2ZW50KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlclg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyWTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHk6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogY29udGV4dC5pZFxuICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRyb3BwZWQ6IHtcbiAgICAgICAgICAgIGFmdGVyOiB7XG4gICAgICAgICAgICAgICAgNTAwOiAnaWRsZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5jb25zdCBkcmFnQW5kRHJvcFNlcnZpY2UgPSBpbnRlcnByZXQoZHJhZ0FuZERyb3BNYWNoaW5lKVxuICAgIC5vblRyYW5zaXRpb24oc3RhdGUgPT4ge1xuICAgICAgICBpZihzdGF0ZS5jaGFuZ2VkKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmRhdGFzZXQuc3RhdGUgPSBzdGF0ZS52YWx1ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYodGhlRHJhZ2dhYmxlcyAmJiB0aGVEcmFnZ2FibGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aGVFbGVtZW50ID0gdGhlRHJhZ2dhYmxlcy5maW5kKGQgPT4gZC5pZCA9PT0gc3RhdGUuY29udGV4dC5pZClcbiAgICAgICAgICAgICAgICBpZih0aGVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tZHgnLCBzdGF0ZS5jb250ZXh0LmR4LnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWR5Jywgc3RhdGUuY29udGV4dC5keS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5zdGFydCgpO1xuXG5jb25zdCBiaW5kRHJhZ2dhYmxlID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgaWYoZWxlbWVudCkge1xuICAgICAgICB0aGVEcmFnZ2FibGVzLnB1c2goZWxlbWVudCk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkcmFnQW5kRHJvcFNlcnZpY2Uuc2VuZChldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY29uc3QgYmluZERvY3VtZW50ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBkcmFnQW5kRHJvcFNlcnZpY2Uuc2VuZChldmVudCk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBkcmFnQW5kRHJvcFNlcnZpY2Uuc2VuZChldmVudCk7XG4gICAgfSk7XG59XG5cbmJpbmREb2N1bWVudCgpO1xuXG5leHBvcnQge1xuICAgIGJpbmREcmFnZ2FibGVcbn07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=