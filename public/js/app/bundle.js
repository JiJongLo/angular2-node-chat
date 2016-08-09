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
System.register("messages/message-list.component", ['angular2/core', "messages/message", "messages/message.component"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2, message_2, message_component_1;
    var MessageListComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (message_2_1) {
                message_2 = message_2_1;
            },
            function (message_component_1_1) {
                message_component_1 = message_component_1_1;
            }],
        execute: function() {
            MessageListComponent = (function () {
                function MessageListComponent() {
                    this.messages = [
                        new message_2.Message('A new message', null, 'Pidor '),
                        new message_2.Message('Second message', null, 'Fjdslfjlfjaf;ld '),
                        new message_2.Message('Third message', null, 'Bla bla;ld ')
                    ];
                }
                MessageListComponent = __decorate([
                    core_2.Component({
                        selector: 'my-message-list',
                        directives: [message_component_1.MessageComponent],
                        template: "\n     <section class=\"col-md-8 col-md-offset-2\">\n          <my-message *ngFor=\"#message of messages\" [message] = \"message\" (editClicked) = \"message.content = $event\"></my-message>\n       </section>\n     "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessageListComponent);
                return MessageListComponent;
            }());
            exports_3("MessageListComponent", MessageListComponent);
        }
    }
});
System.register("messages/message-input.component", ['angular2/core', "messages/message"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_3, message_3;
    var MessageInputComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (message_3_1) {
                message_3 = message_3_1;
            }],
        execute: function() {
            MessageInputComponent = (function () {
                function MessageInputComponent() {
                }
                MessageInputComponent.prototype.onCreate = function (content) {
                    var message = new message_3.Message(content, null, 'Dummy');
                };
                MessageInputComponent = __decorate([
                    core_3.Component({
                        selector: 'my-message-input',
                        template: "\n     <section class=\"col-md-8 col-md-offset-2\">\n      <div class=\"form-group\">\n        <label for=\"content\">Content</label>\n        <input type=\"text\" #input id=\"content\">\n        <button  type=\"submit\" class=\"btn btn-primary\" (click)=\"onCreate(input.value)\">Send message</button>\n      </div>\n      </section>\n     "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessageInputComponent);
                return MessageInputComponent;
            }());
            exports_4("MessageInputComponent", MessageInputComponent);
        }
    }
});
System.register("app.component", ['angular2/core', "messages/message-list.component", "messages/message-input.component"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_4, message_list_component_1, message_input_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (message_list_component_1_1) {
                message_list_component_1 = message_list_component_1_1;
            },
            function (message_input_component_1_1) {
                message_input_component_1 = message_input_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_4.Component({
                        selector: 'my-app',
                        directives: [message_list_component_1.MessageListComponent, message_input_component_1.MessageInputComponent],
                        template: "\n    <div class=\"row\">\n      <my-message-input></my-message-input>\n    </div>\n    <div class=\"row\">\n       <my-message-list></my-message-list>\n     </div>\n       "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_5("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
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
System.register("auth/user", [], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
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
            exports_7("User", User);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UudHMiLCJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC50cyIsIm1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQudHMiLCJtZXNzYWdlcy9tZXNzYWdlLWlucHV0LmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIiwiYXV0aC91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQTtnQkFLSSxpQkFBWSxPQUFnQixFQUFFLFNBQW1CLEVBQUUsUUFBaUIsRUFBRSxNQUFnQjtvQkFDbEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztvQkFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0wsY0FBQztZQUFELENBWEEsQUFXQyxJQUFBO1lBWEQsNkJBV0MsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDMkJEO2dCQUFBO29CQUVjLGdCQUFXLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7Z0JBSXZELENBQUM7Z0JBSEcsa0NBQU8sR0FBUDtvQkFDRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFKRDtvQkFBQyxZQUFLLEVBQUU7O2lFQUFBO2dCQUNSO29CQUFDLGFBQU0sRUFBRTs7cUVBQUE7Z0JBdENiO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFHLFlBQVk7d0JBQ3ZCLE1BQU0sRUFBRzs0QkFDTCwwU0FhRDt5QkFDRjt3QkFDRCxRQUFRLEVBQUcsd2lCQWdCVDtxQkFDTCxDQUFDOztvQ0FBQTtnQkFPRix1QkFBQztZQUFELENBTkEsQUFNQyxJQUFBO1lBTkQsK0NBTUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDaENEO2dCQUFBO29CQUNJLGFBQVEsR0FBYzt3QkFDbEIsSUFBSSxpQkFBTyxDQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUcsUUFBUSxDQUFDO3dCQUM3QyxJQUFJLGlCQUFPLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFHLGtCQUFrQixDQUFDO3dCQUN4RCxJQUFJLGlCQUFPLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRyxhQUFhLENBQUM7cUJBQ3JELENBQUE7Z0JBQ0wsQ0FBQztnQkFmRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRyxpQkFBaUI7d0JBQzVCLFVBQVUsRUFBRyxDQUFDLG9DQUFnQixDQUFDO3dCQUMvQixRQUFRLEVBQUcseU5BSVQ7cUJBQ0wsQ0FBQzs7d0NBQUE7Z0JBT0YsMkJBQUM7WUFBRCxDQU5BLEFBTUMsSUFBQTtZQU5ELHVEQU1DLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ0pEO2dCQUFBO2dCQUlBLENBQUM7Z0JBSEMsd0NBQVEsR0FBUixVQUFTLE9BQWdCO29CQUNyQixJQUFNLE9BQU8sR0FBYSxJQUFJLGlCQUFPLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRyxPQUFPLENBQUMsQ0FBQTtnQkFDbEUsQ0FBQztnQkFmSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRyxrQkFBa0I7d0JBQzdCLFFBQVEsRUFBRyx1VkFRVDtxQkFDTCxDQUFDOzt5Q0FBQTtnQkFLRiw0QkFBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQseURBSUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDSEQ7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFkRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixVQUFVLEVBQUcsQ0FBQyw2Q0FBb0IsRUFBRywrQ0FBcUIsQ0FBQzt3QkFDM0QsUUFBUSxFQUFFLCtLQU9OO3FCQUNQLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztZQ2JELG1CQUFTLENBQUMsNEJBQVksQ0FBQyxDQUFDOzs7Ozs7Ozs7OztZQ0p4QjtnQkFDSSxjQUFtQixLQUFhLEVBQUUsUUFBaUIsRUFBRSxTQUFrQixFQUFFLFFBQWdCO29CQUF0RSxVQUFLLEdBQUwsS0FBSyxDQUFRO2dCQUVoQyxDQUFDO2dCQUNMLFdBQUM7WUFBRCxDQUpBLEFBSUMsSUFBQTtZQUpELHVCQUlDLENBQUEiLCJmaWxlIjoiLi4vLi4vLi4vYW5ndWxhcjItbm9kZS1jaGF0L2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcclxuICAgIGNvbnRlbnQgOiBzdHJpbmc7XHJcbiAgICB1c2VybmFtZSA6IHN0cmluZztcclxuICAgIG1lc3NhZ2VJZCA6IHN0cmluZztcclxuICAgIHVzZXJJZCA6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRlbnQgOiBzdHJpbmcsIG1lc3NhZ2VJZD8gOiBzdHJpbmcsIHVzZXJuYW1lPzogc3RyaW5nLCB1c2VySWQ/IDogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUlkID0gbWVzc2FnZUlkO1xyXG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcclxuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcclxuICAgIH1cclxufSIsImltcG9ydCAgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge01lc3NhZ2V9IGZyb20gJy4vbWVzc2FnZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3IgOiAnbXktbWVzc2FnZScsXHJcbiAgICBzdHlsZXMgOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIC5hdXRob3Ige1xyXG4gICAgICAgICBkaXNwbGF5IDogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICBmb250LXN0eWxlIDogaXRhbGljO1xyXG4gICAgICAgICBmb250LXNpemUgOiAxMnB4O1xyXG4gICAgICAgICB3aWR0aCA6IDgwJVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY29uZmlnIHtcclxuICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICB0ZXh0LWFsaWduIDogcmlnaHQ7XHJcbiAgICAgICAgIGZvbnQtc2l6ZSA6IDEycHg7XHJcbiAgICAgICAgIHdpZHRoIDogMTklXHJcbiAgICAgICAgfVxyXG4gICAgICBgXHJcbiAgICBdLFxyXG4gICAgdGVtcGxhdGUgOiBgXHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICB7e21lc3NhZ2UuY29udGVudH19XHJcbiAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgPGZvb3RlciBjbGFzcz1cInBhbmVsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdXRob3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAge3ttZXNzYWdlLnVzZXJuYW1lfX1cclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZmlnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiAoY2xpY2spPVwib25DbGljaygpXCI+RWRpdG9yPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+RGVsZXRlPC9hPlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICA8L2FydGljbGU+XHJcbiAgICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZUNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBtZXNzYWdlIDpNZXNzYWdlO1xyXG4gICAgQE91dHB1dCgpIGVkaXRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgICBvbkNsaWNrKCkge1xyXG4gICAgICAgdGhpcy5lZGl0Q2xpY2tlZC5lbWl0KCdDaGFuZ2VkJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgIHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSAnLi9tZXNzYWdlJztcclxuaW1wb3J0IHtNZXNzYWdlQ29tcG9uZW50fSBmcm9tICcuL21lc3NhZ2UuY29tcG9uZW50JztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvciA6ICdteS1tZXNzYWdlLWxpc3QnLFxyXG4gICAgZGlyZWN0aXZlcyA6IFtNZXNzYWdlQ29tcG9uZW50XSxcclxuICAgIHRlbXBsYXRlIDogYFxyXG4gICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XHJcbiAgICAgICAgICA8bXktbWVzc2FnZSAqbmdGb3I9XCIjbWVzc2FnZSBvZiBtZXNzYWdlc1wiIFttZXNzYWdlXSA9IFwibWVzc2FnZVwiIChlZGl0Q2xpY2tlZCkgPSBcIm1lc3NhZ2UuY29udGVudCA9ICRldmVudFwiPjwvbXktbWVzc2FnZT5cclxuICAgICAgIDwvc2VjdGlvbj5cclxuICAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlTGlzdENvbXBvbmVudCB7XHJcbiAgICBtZXNzYWdlczogTWVzc2FnZVtdID0gW1xyXG4gICAgICAgIG5ldyBNZXNzYWdlKCdBIG5ldyBtZXNzYWdlJywgbnVsbCAsICdQaWRvciAnKSxcclxuICAgICAgICBuZXcgTWVzc2FnZSgnU2Vjb25kIG1lc3NhZ2UnLCBudWxsICwgJ0ZqZHNsZmpsZmphZjtsZCAnKSxcclxuICAgICAgICBuZXcgTWVzc2FnZSgnVGhpcmQgbWVzc2FnZScsIG51bGwgLCAnQmxhIGJsYTtsZCAnKVxyXG4gICAgXVxyXG59IiwiaW1wb3J0ICB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge01lc3NhZ2V9IGZyb20gJy4vbWVzc2FnZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3IgOiAnbXktbWVzc2FnZS1pbnB1dCcsXHJcbiAgICB0ZW1wbGF0ZSA6IGBcclxuICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJjb250ZW50XCI+Q29udGVudDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0IGlkPVwiY29udGVudFwiPlxyXG4gICAgICAgIDxidXR0b24gIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJvbkNyZWF0ZShpbnB1dC52YWx1ZSlcIj5TZW5kIG1lc3NhZ2U8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlSW5wdXRDb21wb25lbnQge1xyXG4gIG9uQ3JlYXRlKGNvbnRlbnQgOiBzdHJpbmcpIHtcclxuICAgICAgY29uc3QgbWVzc2FnZSA6IE1lc3NhZ2UgPSBuZXcgTWVzc2FnZShjb250ZW50LCBudWxsICwgJ0R1bW15JylcclxuICB9XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7TWVzc2FnZUxpc3RDb21wb25lbnR9IGZyb20gJy4vbWVzc2FnZXMvbWVzc2FnZS1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TWVzc2FnZUlucHV0Q29tcG9uZW50fSBmcm9tICcuL21lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50JztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICBkaXJlY3RpdmVzIDogW01lc3NhZ2VMaXN0Q29tcG9uZW50ICwgTWVzc2FnZUlucHV0Q29tcG9uZW50XSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgIDxteS1tZXNzYWdlLWlucHV0PjwvbXktbWVzc2FnZS1pbnB1dD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgPG15LW1lc3NhZ2UtbGlzdD48L215LW1lc3NhZ2UtbGlzdD5cclxuICAgICA8L2Rpdj5cclxuICAgICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgIFxyXG59IiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxyXG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XHJcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcblxyXG5ib290c3RyYXAoQXBwQ29tcG9uZW50KTsiLCJleHBvcnQgY2xhc3MgVXNlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZW1haWw6IHN0cmluZywgcGFzc3dvcmQgOiBzdHJpbmcsIGZpcnN0TmFtZT86IHN0cmluZywgbGFzdE5hbWU/OnN0cmluZyl7XHJcblxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
