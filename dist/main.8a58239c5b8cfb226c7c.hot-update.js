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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hY2hpbmVzL2RyYWdBbmREcm9wTWFjaGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw0SEFBOEQ7QUFDOUQsMEVBQTZCO0FBRzdCLElBQU0sSUFBSSxHQUF1QixRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pFLElBQU0sS0FBSyxHQUF1QixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ25FLElBQUcsSUFBSSxJQUFJLEtBQUssRUFBRTtJQUNkLGtDQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsa0NBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEQsc0ZBQTBEO0FBWTFELElBQUksYUFBYSxHQUF1QixFQUFFLENBQUM7QUFFM0MsSUFBTSxrQkFBa0IsR0FDeEIsc0JBQWEsQ0FBaUU7SUFDMUUsRUFBRSxFQUFFLFdBQVc7SUFDZixPQUFPLEVBQUUsTUFBTTtJQUNmLE9BQU8sRUFBRTtRQUNMLFFBQVEsRUFBRSxDQUFDO1FBQ1gsUUFBUSxFQUFFLENBQUM7UUFDWCxFQUFFLEVBQUUsQ0FBQztRQUNMLEVBQUUsRUFBRSxDQUFDO1FBQ0wsRUFBRSxFQUFFLEVBQUU7S0FDVDtJQUNELE1BQU0sRUFBRTtRQUNKLElBQUksRUFBRTtZQUNGLEVBQUUsRUFBRTtnQkFDQSxTQUFTLEVBQUU7b0JBQ1AsTUFBTSxFQUFFLFVBQVU7b0JBQ2xCLE9BQU8sRUFBRSxlQUFNLENBQUMsVUFBQyxPQUFrQyxFQUFFLEtBQWlCO3dCQUNsRSw2QkFDTyxPQUFPLEtBQ1YsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQ3ZCLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUN2QixFQUFFLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUUsS0FBSyxDQUFDLE1BQXNCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQzNEO29CQUNMLENBQUMsQ0FBQztpQkFDTDthQUNKO1NBQ0o7UUFDRCxRQUFRLEVBQUU7WUFDTixFQUFFLEVBQUU7Z0JBQ0EsU0FBUyxFQUFFO29CQUNQLE9BQU8sRUFBRSxlQUFNLENBQUMsVUFBQyxPQUFrQyxFQUFFLEtBQWlCO3dCQUNsRSw2QkFDTyxPQUFPLEtBQ1YsRUFBRSxFQUFFLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFDcEMsRUFBRSxFQUFFLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFDdkM7b0JBQ0wsQ0FBQyxDQUFDO2lCQUNMO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxNQUFNLEVBQUUsU0FBUztvQkFDakIsT0FBTyxFQUFFLGVBQU0sQ0FBQyxVQUFDLE9BQWtDLEVBQUUsS0FBaUIsSUFBSyxRQUFDO3dCQUN4RSxRQUFRLEVBQUUsQ0FBQzt3QkFDWCxRQUFRLEVBQUUsQ0FBQzt3QkFDWCxFQUFFLEVBQUUsQ0FBQzt3QkFDTCxFQUFFLEVBQUUsQ0FBQzt3QkFDTCxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUU7cUJBQ2pCLENBQUMsRUFOeUUsQ0FNekU7aUJBQ0w7YUFDSjtTQUNKO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsS0FBSyxFQUFFO2dCQUNILEdBQUcsRUFBRSxNQUFNO2FBQ2Q7U0FDSjtLQUNKO0NBQ0osQ0FBQyxDQUFDO0FBRUgsSUFBTSxrQkFBa0IsR0FBRyxrQkFBUyxDQUFDLGtCQUFrQixDQUFDO0tBQ25ELFlBQVksQ0FBQyxlQUFLO0lBQ2YsSUFBRyxLQUFLLENBQUMsT0FBTyxFQUFFO1FBQ2QsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckQsSUFBRyxhQUFhLElBQUksYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDMUMsSUFBTSxVQUFVLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBekIsQ0FBeUIsQ0FBQztZQUNyRSxJQUFHLFVBQVUsRUFBRTtnQkFDWCxVQUFVLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDbEUsVUFBVSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDckU7U0FDSjtLQUNKO0FBQ0wsQ0FBQyxDQUFDO0tBQ0QsS0FBSyxFQUFFLENBQUM7QUFFYixJQUFNLGFBQWEsR0FBRyxVQUFDLE9BQW9CO0lBQ3ZDLElBQUcsT0FBTyxFQUFFO1FBQ1IsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixPQUFPLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBaUI7WUFDcEQsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0tBQ047QUFDTCxDQUFDO0FBZUcsc0NBQWE7QUFiakIsSUFBTSxZQUFZLEdBQUc7SUFDakIsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBQyxLQUFpQjtRQUN4RCxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxVQUFDLEtBQWlCO1FBQzFELGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFRCxZQUFZLEVBQUUsQ0FBQyIsImZpbGUiOiJtYWluLjhhNTgyMzljNWI4Y2ZiMjI2YzdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kRHJhZ2dhYmxlIH0gZnJvbSAnLi9tYWNoaW5lcy9kcmFnQW5kRHJvcE1hY2hpbmUnO1xuaW1wb3J0ICcuL2Fzc2V0cy9pbmRleC5zY3NzJztcblxuXG5jb25zdCBmaWxlOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpO1xuY29uc3QgZmlsZTI6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlMicpO1xuaWYoZmlsZSAmJiBmaWxlMikge1xuICAgIGJpbmREcmFnZ2FibGUoZmlsZSk7XG4gICAgYmluZERyYWdnYWJsZShmaWxlMik7XG59IiwiaW1wb3J0IHsgY3JlYXRlTWFjaGluZSwgaW50ZXJwcmV0LCBhc3NpZ24gfSBmcm9tICd4c3RhdGUnO1xuXG50eXBlIERyYWdBbmREcm9wTWFjaGluZVN0YXRlID0gfCB7IHZhbHVlOiBzdHJpbmcsIGNvbnRleHQ6IERyYWdBbmREcm9wTWFjaGluZUNvbnRleHQgfVxuXG5pbnRlcmZhY2UgRHJhZ0FuZERyb3BNYWNoaW5lQ29udGV4dCB7XG4gICAgcG9pbnRlclg6IG51bWJlcjtcbiAgICBwb2ludGVyWTogbnVtYmVyO1xuICAgIGR4OiBudW1iZXI7XG4gICAgZHk6IG51bWJlcjtcbiAgICBpZDogc3RyaW5nO1xufVxuXG5sZXQgdGhlRHJhZ2dhYmxlczogQXJyYXk8SFRNTEVsZW1lbnQ+ID0gW107XG5cbmNvbnN0IGRyYWdBbmREcm9wTWFjaGluZSA9XG5jcmVhdGVNYWNoaW5lPERyYWdBbmREcm9wTWFjaGluZUNvbnRleHQsIE1vdXNlRXZlbnQsIERyYWdBbmREcm9wTWFjaGluZVN0YXRlPih7XG4gICAgaWQ6ICdkcmFnbmRyb3AnLFxuICAgIGluaXRpYWw6ICdpZGxlJyxcbiAgICBjb250ZXh0OiB7XG4gICAgICAgIHBvaW50ZXJYOiAwLFxuICAgICAgICBwb2ludGVyWTogMCxcbiAgICAgICAgZHg6IDAsXG4gICAgICAgIGR5OiAwLFxuICAgICAgICBpZDogJydcbiAgICB9LFxuICAgIHN0YXRlczoge1xuICAgICAgICBpZGxlOiB7XG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIG1vdXNlZG93bjoge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6ICdkcmFnZ2luZycsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IGFzc2lnbigoY29udGV4dDogRHJhZ0FuZERyb3BNYWNoaW5lQ29udGV4dCwgZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyWDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyWTogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogZXZlbnQudGFyZ2V0ID8gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuaWQgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZHJhZ2dpbmc6IHtcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgbW91c2Vtb3ZlOiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IGFzc2lnbigoY29udGV4dDogRHJhZ0FuZERyb3BNYWNoaW5lQ29udGV4dCwgZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkeDogZXZlbnQuY2xpZW50WCAtIGNvbnRleHQucG9pbnRlclgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHk6IGV2ZW50LmNsaWVudFkgLSBjb250ZXh0LnBvaW50ZXJZLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW91c2V1cDoge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6ICdkcm9wcGVkJyxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogYXNzaWduKChjb250ZXh0OiBEcmFnQW5kRHJvcE1hY2hpbmVDb250ZXh0LCBldmVudDogTW91c2VFdmVudCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXJYOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlclk6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR5OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGNvbnRleHQuaWRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRyb3BwZWQ6IHtcbiAgICAgICAgICAgIGFmdGVyOiB7XG4gICAgICAgICAgICAgICAgNTAwOiAnaWRsZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5jb25zdCBkcmFnQW5kRHJvcFNlcnZpY2UgPSBpbnRlcnByZXQoZHJhZ0FuZERyb3BNYWNoaW5lKVxuICAgIC5vblRyYW5zaXRpb24oc3RhdGUgPT4ge1xuICAgICAgICBpZihzdGF0ZS5jaGFuZ2VkKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmRhdGFzZXQuc3RhdGUgPSBzdGF0ZS52YWx1ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYodGhlRHJhZ2dhYmxlcyAmJiB0aGVEcmFnZ2FibGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aGVFbGVtZW50ID0gdGhlRHJhZ2dhYmxlcy5maW5kKGQgPT4gZC5pZCA9PT0gc3RhdGUuY29udGV4dC5pZClcbiAgICAgICAgICAgICAgICBpZih0aGVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tZHgnLCBzdGF0ZS5jb250ZXh0LmR4LnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWR5Jywgc3RhdGUuY29udGV4dC5keS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuICAgIC5zdGFydCgpO1xuXG5jb25zdCBiaW5kRHJhZ2dhYmxlID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgaWYoZWxlbWVudCkge1xuICAgICAgICB0aGVEcmFnZ2FibGVzLnB1c2goZWxlbWVudCk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkcmFnQW5kRHJvcFNlcnZpY2Uuc2VuZChldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY29uc3QgYmluZERvY3VtZW50ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBkcmFnQW5kRHJvcFNlcnZpY2Uuc2VuZChldmVudCk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBkcmFnQW5kRHJvcFNlcnZpY2Uuc2VuZChldmVudCk7XG4gICAgfSk7XG59XG5cbmJpbmREb2N1bWVudCgpO1xuXG5leHBvcnQge1xuICAgIGJpbmREcmFnZ2FibGVcbn07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=