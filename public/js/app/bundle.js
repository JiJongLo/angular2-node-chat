var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("messages/message", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Message;
    return {
        setters:[],
        execute: function() {
            Message = (function () {
                function Message(content, messageId, username, userId) {
                    this.content = content;
                    this.messageId = messageId;
                    this.username = username;
                    this.userId = userId;
                }
                return Message;
            }());
            exports_1("Message", Message);
        }
    }
});
System.register("messages/message.component", ['angular2/core', "messages/message"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_1, message_1;
    var MessageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (message_1_1) {
                message_1 = message_1_1;
            }],
        execute: function() {
            MessageComponent = (function () {
                function MessageComponent() {
                    this.editClicked = new core_1.EventEmitter();
                }
                MessageComponent.prototype.onClick = function () {
                    this.editClicked.emit('Changed');
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', message_1.Message)
                ], MessageComponent.prototype, "message", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MessageComponent.prototype, "editClicked", void 0);
                MessageComponent = __decorate([
                    core_1.Component({
                        selector: 'my-message',
                        styles: [
                            "\n        .author {\n         display : inline-block;\n         font-style : italic;\n         font-size : 12px;\n         width : 80%\n        }\n        .config {\n         display: inline-block;\n         text-align : right;\n         font-size : 12px;\n         width : 19%\n        }\n      "
                        ],
                        template: "\n      <article class=\"panel panel-default\">\n              <div class=\"panel-body\">\n                {{message.content}}\n              </div>         \n      \n             <footer class=\"panel-footer\">\n                 <div class=\"author\">\n                     {{message.username}}\n                 </div>\n                 <div class=\"config\">\n                    <a href=\"#\" (click)=\"onClick()\">Editor</a>\n                    <a href=\"#\">Delete</a>\n                 </div>\n             </footer>\n       </article>\n     "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessageComponent);
                return MessageComponent;
            }());
            exports_2("MessageComponent", MessageComponent);
        }
    }
});
System.register("app.component", ['angular2/core', "messages/message.component", "messages/message"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2, message_component_1, message_2;
    var AppComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (message_component_1_1) {
                message_component_1 = message_component_1_1;
            },
            function (message_2_1) {
                message_2 = message_2_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.message = new message_2.Message('A new message', null, 'Pidor ');
                }
                AppComponent = __decorate([
                    core_2.Component({
                        selector: 'my-app',
                        directives: [message_component_1.MessageComponent],
                        template: "\n    <div class=\"row\">\n      <section class=\"col-md-8 col-md-offset-2\">\n        <input type=\"text\">\n      </section>\n    </div>\n    <div class=\"row\">\n      <section class=\"col-md-8 col-md-offset-2\">\n          <my-message [message] = \"message\" (editClicked) = \"message.content = $event\"></my-message>\n        </section>\n     </div>\n       "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_3("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent);
        }
    }
});
System.register("auth/user", [], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(email, password, firstName, lastName) {
                    this.email = email;
                }
                return User;
            }());
            exports_5("User", User);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UudHMiLCJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIiwiYXV0aC91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQTtnQkFLSSxpQkFBWSxPQUFnQixFQUFFLFNBQW1CLEVBQUUsUUFBaUIsRUFBRSxNQUFnQjtvQkFDbEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztvQkFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0wsY0FBQztZQUFELENBWEEsQUFXQyxJQUFBO1lBWEQsNkJBV0MsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDMkJEO2dCQUFBO29CQUVjLGdCQUFXLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7Z0JBSXZELENBQUM7Z0JBSEcsa0NBQU8sR0FBUDtvQkFDRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFKRDtvQkFBQyxZQUFLLEVBQUU7O2lFQUFBO2dCQUNSO29CQUFDLGFBQU0sRUFBRTs7cUVBQUE7Z0JBdENiO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFHLFlBQVk7d0JBQ3ZCLE1BQU0sRUFBRzs0QkFDTCwwU0FhRDt5QkFDRjt3QkFDRCxRQUFRLEVBQUcsd2lCQWdCVDtxQkFDTCxDQUFDOztvQ0FBQTtnQkFPRix1QkFBQztZQUFELENBTkEsQUFNQyxJQUFBO1lBTkQsK0NBTUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDekJEO2dCQUFBO29CQUNJLFlBQU8sR0FBWSxJQUFJLGlCQUFPLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRyxRQUFRLENBQUMsQ0FBQTtnQkFDcEUsQ0FBQztnQkFsQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsVUFBVSxFQUFHLENBQUMsb0NBQWdCLENBQUM7d0JBQy9CLFFBQVEsRUFBRSw2V0FXTjtxQkFDUCxDQUFDOztnQ0FBQTtnQkFHRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNqQkQsbUJBQVMsQ0FBQyw0QkFBWSxDQUFDLENBQUM7Ozs7Ozs7Ozs7O1lDSnhCO2dCQUNJLGNBQW1CLEtBQWEsRUFBRSxRQUFpQixFQUFFLFNBQWtCLEVBQUUsUUFBZ0I7b0JBQXRFLFVBQUssR0FBTCxLQUFLLENBQVE7Z0JBRWhDLENBQUM7Z0JBQ0wsV0FBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsdUJBSUMsQ0FBQSIsImZpbGUiOiIuLi8uLi8uLi9hbmd1bGFyMi1ub2RlLWNoYXQvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xyXG4gICAgY29udGVudCA6IHN0cmluZztcclxuICAgIHVzZXJuYW1lIDogc3RyaW5nO1xyXG4gICAgbWVzc2FnZUlkIDogc3RyaW5nO1xyXG4gICAgdXNlcklkIDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoY29udGVudCA6IHN0cmluZywgbWVzc2FnZUlkPyA6IHN0cmluZywgdXNlcm5hbWU/OiBzdHJpbmcsIHVzZXJJZD8gOiBzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlSWQgPSBtZXNzYWdlSWQ7XHJcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xyXG4gICAgICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSAnLi9tZXNzYWdlJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvciA6ICdteS1tZXNzYWdlJyxcclxuICAgIHN0eWxlcyA6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgLmF1dGhvciB7XHJcbiAgICAgICAgIGRpc3BsYXkgOiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgIGZvbnQtc3R5bGUgOiBpdGFsaWM7XHJcbiAgICAgICAgIGZvbnQtc2l6ZSA6IDEycHg7XHJcbiAgICAgICAgIHdpZHRoIDogODAlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb25maWcge1xyXG4gICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgIHRleHQtYWxpZ24gOiByaWdodDtcclxuICAgICAgICAgZm9udC1zaXplIDogMTJweDtcclxuICAgICAgICAgd2lkdGggOiAxOSVcclxuICAgICAgICB9XHJcbiAgICAgIGBcclxuICAgIF0sXHJcbiAgICB0ZW1wbGF0ZSA6IGBcclxuICAgICAgPGFydGljbGUgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIHt7bWVzc2FnZS5jb250ZW50fX1cclxuICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICBcclxuICAgICAgXHJcbiAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzPVwicGFuZWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICB7e21lc3NhZ2UudXNlcm5hbWV9fVxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb25maWdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJvbkNsaWNrKClcIj5FZGl0b3I8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5EZWxldGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIG1lc3NhZ2UgOk1lc3NhZ2U7XHJcbiAgICBAT3V0cHV0KCkgZWRpdENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICAgIG9uQ2xpY2soKSB7XHJcbiAgICAgICB0aGlzLmVkaXRDbGlja2VkLmVtaXQoJ0NoYW5nZWQnKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TWVzc2FnZUNvbXBvbmVudH0gZnJvbSAnLi9tZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gJy4vbWVzc2FnZXMvbWVzc2FnZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgZGlyZWN0aXZlcyA6IFtNZXNzYWdlQ29tcG9uZW50XSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgPG15LW1lc3NhZ2UgW21lc3NhZ2VdID0gXCJtZXNzYWdlXCIgKGVkaXRDbGlja2VkKSA9IFwibWVzc2FnZS5jb250ZW50ID0gJGV2ZW50XCI+PC9teS1tZXNzYWdlPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgIDwvZGl2PlxuICAgICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBtZXNzYWdlOiBNZXNzYWdlID0gbmV3IE1lc3NhZ2UoJ0EgbmV3IG1lc3NhZ2UnLCBudWxsICwgJ1BpZG9yICcpXG59IiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCk7IiwiZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkIDogc3RyaW5nLCBmaXJzdE5hbWU/OiBzdHJpbmcsIGxhc3ROYW1lPzpzdHJpbmcpe1xyXG5cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
