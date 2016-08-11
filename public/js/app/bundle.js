var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("header.component", ['angular2/core', 'angular2/router'], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1;
    var HeaderComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function () {
            HeaderComponent = (function () {
                function HeaderComponent() {
                }

                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'my-header',
                        template: "\n     <header class=\"row\">\n       <nav class=\"col-md-8 col-md-offset-2\">\n          <ul class=\"nav nav-pills\">\n             <li><a [routerLink] = \"['Messages']\">Messages</a></li>\n             <li><a [routerLink] = \"['Auth']\">Authentication</a></li>        \n          </ul>\n       </nav> \n     </header> \n     ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        styles: ["\n    header : {\n     margin-bottom: 20px;\n     }\n     ul : {\n      text-align : center;\n     }\n     li {\n      float : none;\n      display : inline-block;\n     }\n     "]
                    }),
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
System.register("messages/message", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
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
            exports_2("Message", Message);
        }
    }
});
System.register("messages/message.service", ["messages/message"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var message_1;
    var MessageService;
    return {
        setters:[
            function (message_1_1) {
                message_1 = message_1_1;
            }],
        execute: function() {
            MessageService = (function () {
                function MessageService() {
                    this.messages = [];
                }
                MessageService.prototype.addMessage = function (message) {
                    this.messages.push(message);
                    console.log(this.messages);
                };
                MessageService.prototype.getMessages = function () {
                    return this.messages;
                };
                MessageService.prototype.editMessage = function (message) {
                    this.messages[this.messages.indexOf(message)] = new message_1.Message('Edited ', null, 'Dummy');
                };
                MessageService.prototype.deleteMessage = function (message) {
                    this.messages.splice(this.messages.indexOf(message), 1);
                };
                return MessageService;
            }());
            exports_3("MessageService", MessageService);
        }
    }
});
System.register("messages/message.component", ['angular2/core', "messages/message.service", "messages/message"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_2, message_service_1, message_2;
    var MessageComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (message_service_1_1) {
                message_service_1 = message_service_1_1;
            },
            function (message_2_1) {
                message_2 = message_2_1;
            }],
        execute: function() {
            MessageComponent = (function () {
                function MessageComponent(_messageService) {
                    this._messageService = _messageService;
                    this.editClicked = new core_2.EventEmitter();
                }
                MessageComponent.prototype.onEdit = function () {
                    this._messageService.editMessage(this.message);
                };
                MessageComponent.prototype.onDelete = function () {
                    this._messageService.deleteMessage(this.message);
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', message_2.Message)
                ], MessageComponent.prototype, "message", void 0);
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', Object)
                ], MessageComponent.prototype, "editClicked", void 0);
                MessageComponent = __decorate([
                    core_2.Component({
                        selector: 'my-message',
                        styles: [
                            "\n        .author {\n         display : inline-block;\n         font-style : italic;\n         font-size : 12px;\n         width : 80%\n        }\n        .config {\n         display: inline-block;\n         text-align : right;\n         font-size : 12px;\n         width : 19%\n        }\n      "
                        ],
                        template: "\n      <article class=\"panel panel-default\">\n              <div class=\"panel-body\">\n                {{message.content}}\n              </div>         \n      \n             <footer class=\"panel-footer\">\n                 <div class=\"author\">\n                     {{message.username}}\n                 </div>\n                 <div class=\"config\">\n                    <a href=\"#\" (click)=\"onEdit()\">Editor</a>\n                    <a href=\"#\" (click)=\"onDelete()\">Delete</a>\n                 </div>\n             </footer>\n       </article>\n     "
                    }), 
                    __metadata('design:paramtypes', [message_service_1.MessageService])
                ], MessageComponent);
                return MessageComponent;
            }());
            exports_4("MessageComponent", MessageComponent);
        }
    }
});
System.register("messages/message-list.component", ['angular2/core', "messages/message.component", "messages/message.service"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_3, message_component_1, message_service_2;
    var MessageListComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (message_component_1_1) {
                message_component_1 = message_component_1_1;
            },
            function (message_service_2_1) {
                message_service_2 = message_service_2_1;
            }],
        execute: function() {
            MessageListComponent = (function () {
                function MessageListComponent(_messageService) {
                    this._messageService = _messageService;
                }
                MessageListComponent.prototype.ngOnInit = function () {
                    this.messages = this._messageService.getMessages();
                };
                MessageListComponent = __decorate([
                    core_3.Component({
                        selector: 'my-message-list',
                        directives: [message_component_1.MessageComponent],
                        template: "\n     <section class=\"col-md-8 col-md-offset-2\">\n          <my-message *ngFor=\"#message of messages\" [message] = \"message\" (editClicked) = \"message.content = $event\"></my-message>\n       </section>\n     "
                    }), 
                    __metadata('design:paramtypes', [message_service_2.MessageService])
                ], MessageListComponent);
                return MessageListComponent;
            }());
            exports_5("MessageListComponent", MessageListComponent);
        }
    }
});
System.register("messages/message-input.component", ['angular2/core', "messages/message", "messages/message.service"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_4, message_3, message_service_3;
    var MessageInputComponent;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (message_3_1) {
                message_3 = message_3_1;
            },
            function (message_service_3_1) {
                message_service_3 = message_service_3_1;
            }],
        execute: function() {
            MessageInputComponent = (function () {
                function MessageInputComponent(_messageService) {
                    this._messageService = _messageService;
                }
                MessageInputComponent.prototype.onSubmit = function (form) {
                    var message = new message_3.Message(form.content, null, 'Dummy');
                };
                MessageInputComponent.prototype.onCreate = function (content) {
                    var message = new message_3.Message(content, null, 'Dummy');
                    this._messageService.addMessage(message);
                };
                MessageInputComponent = __decorate([
                    core_4.Component({
                        selector: 'my-message-input',
                        template: "\n     <section class=\"col-md-8 col-md-offset-2\">\n     <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"content\">Content</label>\n        <input type=\"text\" ngControl=\"content\" class=\"form-control\" id=\"content\" #input>\n        <button  type=\"submit\" class=\"btn btn-primary\" (click)=\"onCreate(input.value)\">Send message</button>\n      </div>\n     </form>     \n      </section>\n     "
                    }), 
                    __metadata('design:paramtypes', [message_service_3.MessageService])
                ], MessageInputComponent);
                return MessageInputComponent;
            }());
            exports_6("MessageInputComponent", MessageInputComponent);
        }
    }
});
System.register("messages/messages.component", ['angular2/core', "messages/message-list.component", "messages/message-input.component"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_5, message_list_component_1, message_input_component_1;
    var MessagesComponent;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (message_list_component_1_1) {
                message_list_component_1 = message_list_component_1_1;
            },
            function (message_input_component_1_1) {
                message_input_component_1 = message_input_component_1_1;
            }],
        execute: function() {
            MessagesComponent = (function () {
                function MessagesComponent() {
                }

                MessagesComponent = __decorate([
                    core_5.Component({
                        selector: 'my-messages',
                        directives: [message_list_component_1.MessageListComponent, message_input_component_1.MessageInputComponent],
                        template: "\n    <div class=\"row\">\n      <my-message-input></my-message-input>\n    </div>\n    <div class=\"row\">\n       <my-message-list></my-message-list>\n     </div>\n       "
                    }),
                    __metadata('design:paramtypes', [])
                ], MessagesComponent);
                return MessagesComponent;
            }());
            exports_7("MessagesComponent", MessagesComponent);
        }
    }
});
System.register("auth/autontication.component", ['angular2/core'], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_6;
    var AuthenticationComponent;
    return {
        setters: [
            function (core_6_1) {
                core_6 = core_6_1;
            }],
        execute: function () {
            AuthenticationComponent = (function () {
                function AuthenticationComponent() {
                }

                AuthenticationComponent = __decorate([
                    core_6.Component({
                        selector: 'my-auth',
                        template: "\n      <h1>Auth</h1>\n    "
                    }),
                    __metadata('design:paramtypes', [])
                ], AuthenticationComponent);
                return AuthenticationComponent;
            }());
            exports_8("AuthenticationComponent", AuthenticationComponent);
        }
    }
});
System.register("app.component", ['angular2/core', 'angular2/router', "header.component", "messages/messages.component", "auth/autontication.component"], function (exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_7, router_2, header_component_1, messages_component_1, autontication_component_1;
    var AppComponent;
    return {
        setters: [
            function (core_7_1) {
                core_7 = core_7_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (messages_component_1_1) {
                messages_component_1 = messages_component_1_1;
            },
            function (autontication_component_1_1) {
                autontication_component_1 = autontication_component_1_1;
            }],
        execute: function () {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_7.Component({
                        selector: 'my-app',
                        directives: [header_component_1.HeaderComponent, router_2.ROUTER_DIRECTIVES],
                        template: "\n      <div class=\"container\">\n      <my-header> </my-header>\n      <router-outlet></router-outlet>  \n      </div>       \n       "
                    }),
                    router_2.RouteConfig([
                        {
                            path: '/',
                            name: 'Messages',
                            component: messages_component_1.MessagesComponent,
                            useAsDefault: true
                        },
                        {path: '/auth', name: 'Auth', component: autontication_component_1.AuthenticationComponent}
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_9("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component", "messages/message.service", "./angular2/router"], function (exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var browser_1, app_component_1, message_service_4, router_3;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (message_service_4_1) {
                message_service_4 = message_service_4_1;
            },
            function (router_3_1) {
                router_3 = router_3_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [message_service_4.MessageService, router_3.ROUTER_PROVIDERS]);
        }
    }
});
System.register("auth/user", [], function (exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
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
            exports_11("User", User);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiLCJtZXNzYWdlcy9tZXNzYWdlLnRzIiwibWVzc2FnZXMvbWVzc2FnZS5zZXJ2aWNlLnRzIiwibWVzc2FnZXMvbWVzc2FnZS5jb21wb25lbnQudHMiLCJtZXNzYWdlcy9tZXNzYWdlLWxpc3QuY29tcG9uZW50LnRzIiwibWVzc2FnZXMvbWVzc2FnZS1pbnB1dC5jb21wb25lbnQudHMiLCJtZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQudHMiLCJhdXRoL2F1dG9udGljYXRpb24uY29tcG9uZW50LnRzIiwiYXBwLmNvbXBvbmVudC50cyIsImJvb3QudHMiLCJhdXRoL3VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4QkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkE5QkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUcsV0FBVzt3QkFDdEIsUUFBUSxFQUFHLHlVQVNUO3dCQUNGLFVBQVUsRUFBRyxDQUFDLDBCQUFpQixDQUFDO3dCQUNoQyxNQUFNLEVBQUcsQ0FBQyxvTEFXUixDQUFDO3FCQUNOLENBQUM7O21DQUFBO2dCQUtGLHNCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCw2Q0FFQyxDQUFBOzs7Ozs7Ozs7OztZQ2hDRDtnQkFLSSxpQkFBWSxPQUFnQixFQUFFLFNBQW1CLEVBQUUsUUFBaUIsRUFBRSxNQUFnQjtvQkFDbEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztvQkFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0wsY0FBQztZQUFELENBWEEsQUFXQyxJQUFBO1lBWEQsNkJBV0MsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7O1lDVkQ7Z0JBQUE7b0JBQ0ksYUFBUSxHQUFl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U0FBUyxFQUFHLGlEQUF1QixFQUFDO3FCQUN2RSxDQUNEOztnQ0FBQTtnQkFHRCxtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNsQkQsbUJBQVMsQ0FBQyw0QkFBWSxFQUFFLENBQUMsZ0NBQWMsRUFBRSx5QkFBZ0IsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7O1lDTDVEO2dCQUNJLGNBQW1CLEtBQWEsRUFBRSxRQUFpQixFQUFFLFNBQWtCLEVBQUUsUUFBZ0I7b0JBQXRFLFVBQUssR0FBTCxLQUFLLENBQVE7Z0JBRWhDLENBQUM7Z0JBQ0wsV0FBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsd0JBSUMsQ0FBQSIsImZpbGUiOiIuLi8uLi8uLi9hbmd1bGFyMi1ub2RlLWNoYXQvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvciA6ICdteS1oZWFkZXInLFxyXG4gICAgdGVtcGxhdGUgOiBgXHJcbiAgICAgPGhlYWRlciBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgPG5hdiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi1waWxsc1wiPlxyXG4gICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXSA9IFwiWydNZXNzYWdlcyddXCI+TWVzc2FnZXM8L2E+PC9saT5cclxuICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua10gPSBcIlsnQXV0aCddXCI+QXV0aGVudGljYXRpb248L2E+PC9saT4gICAgICAgIFxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgIDwvbmF2PiBcclxuICAgICA8L2hlYWRlcj4gXHJcbiAgICAgYCxcclxuICAgIGRpcmVjdGl2ZXMgOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gICAgc3R5bGVzIDogW2BcclxuICAgIGhlYWRlciA6IHtcclxuICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgIH1cclxuICAgICB1bCA6IHtcclxuICAgICAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcclxuICAgICB9XHJcbiAgICAgbGkge1xyXG4gICAgICBmbG9hdCA6IG5vbmU7XHJcbiAgICAgIGRpc3BsYXkgOiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgfVxyXG4gICAgIGBdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7XHJcblxyXG59IiwiZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xyXG4gICAgY29udGVudCA6IHN0cmluZztcclxuICAgIHVzZXJuYW1lIDogc3RyaW5nO1xyXG4gICAgbWVzc2FnZUlkIDogc3RyaW5nO1xyXG4gICAgdXNlcklkIDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoY29udGVudCA6IHN0cmluZywgbWVzc2FnZUlkPyA6IHN0cmluZywgdXNlcm5hbWU/OiBzdHJpbmcsIHVzZXJJZD8gOiBzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlSWQgPSBtZXNzYWdlSWQ7XHJcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xyXG4gICAgICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtNZXNzYWdlfSBmcm9tICcuL21lc3NhZ2UnXG5leHBvcnQgY2xhc3MgIE1lc3NhZ2VTZXJ2aWNlIHtcbiAgICBtZXNzYWdlcyA6IE1lc3NhZ2VbXSA9IFtdO1xuXG4gICAgYWRkTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKXtcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2VzKVxuICAgIH1cblxuICAgIGdldE1lc3NhZ2VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlcztcbiAgICB9XG4gICAgZWRpdE1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VzW3RoaXMubWVzc2FnZXMuaW5kZXhPZihtZXNzYWdlKV0gPSBuZXcgTWVzc2FnZSgnRWRpdGVkICcsIG51bGwgLCAnRHVtbXknKVxuICAgIH1cblxuXG4gICAgZGVsZXRlTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKHRoaXMubWVzc2FnZXMuaW5kZXhPZihtZXNzYWdlKSwgMSk7XG5cbiAgICB9XG59IiwiaW1wb3J0ICB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gJy4vbWVzc2FnZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdteS1tZXNzYWdlJyxcbiAgICBzdHlsZXMgOiBbXG4gICAgICAgIGBcbiAgICAgICAgLmF1dGhvciB7XG4gICAgICAgICBkaXNwbGF5IDogaW5saW5lLWJsb2NrO1xuICAgICAgICAgZm9udC1zdHlsZSA6IGl0YWxpYztcbiAgICAgICAgIGZvbnQtc2l6ZSA6IDEycHg7XG4gICAgICAgICB3aWR0aCA6IDgwJVxuICAgICAgICB9XG4gICAgICAgIC5jb25maWcge1xuICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgdGV4dC1hbGlnbiA6IHJpZ2h0O1xuICAgICAgICAgZm9udC1zaXplIDogMTJweDtcbiAgICAgICAgIHdpZHRoIDogMTklXG4gICAgICAgIH1cbiAgICAgIGBcbiAgICBdLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgPGFydGljbGUgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAge3ttZXNzYWdlLmNvbnRlbnR9fVxuICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICBcbiAgICAgIFxuICAgICAgICAgICAgIDxmb290ZXIgY2xhc3M9XCJwYW5lbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvclwiPlxuICAgICAgICAgICAgICAgICAgICAge3ttZXNzYWdlLnVzZXJuYW1lfX1cbiAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb25maWdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiAoY2xpY2spPVwib25FZGl0KClcIj5FZGl0b3I8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgKGNsaWNrKT1cIm9uRGVsZXRlKClcIj5EZWxldGU8L2E+XG4gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgYFxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBtZXNzYWdlIDpNZXNzYWdlO1xuICAgIEBPdXRwdXQoKSBlZGl0Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSl7fVxuICAgIG9uRWRpdCgpIHtcbiAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5lZGl0TWVzc2FnZSh0aGlzLm1lc3NhZ2UpO1xuICAgIH1cbiAgICBvbkRlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UuZGVsZXRlTWVzc2FnZSh0aGlzLm1lc3NhZ2UpO1xuICAgIH1cbn0iLCJpbXBvcnQgIHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gJy4vbWVzc2FnZSc7XG5pbXBvcnQge01lc3NhZ2VDb21wb25lbnR9IGZyb20gJy4vbWVzc2FnZS5jb21wb25lbnQnO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi9tZXNzYWdlLnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnbXktbWVzc2FnZS1saXN0JyxcbiAgICBkaXJlY3RpdmVzIDogW01lc3NhZ2VDb21wb25lbnRdLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgIDxteS1tZXNzYWdlICpuZ0Zvcj1cIiNtZXNzYWdlIG9mIG1lc3NhZ2VzXCIgW21lc3NhZ2VdID0gXCJtZXNzYWdlXCIgKGVkaXRDbGlja2VkKSA9IFwibWVzc2FnZS5jb250ZW50ID0gJGV2ZW50XCI+PC9teS1tZXNzYWdlPlxuICAgICAgIDwvc2VjdGlvbj5cbiAgICAgYFxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2Upe31cbiAgICBtZXNzYWdlczogTWVzc2FnZVtdO1xuICAgIG5nT25Jbml0KCl7XG4gICAgICB0aGlzLm1lc3NhZ2VzID0gdGhpcy5fbWVzc2FnZVNlcnZpY2UuZ2V0TWVzc2FnZXMoKVxuICAgIH1cblxufSIsImltcG9ydCAgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSAnLi9tZXNzYWdlJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4vbWVzc2FnZS5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ215LW1lc3NhZ2UtaW5wdXQnLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQoZi52YWx1ZSlcIiAjZj1cIm5nRm9ybVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImNvbnRlbnRcIj5Db250ZW50PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmdDb250cm9sPVwiY29udGVudFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJjb250ZW50XCIgI2lucHV0PlxuICAgICAgICA8YnV0dG9uICB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwib25DcmVhdGUoaW5wdXQudmFsdWUpXCI+U2VuZCBtZXNzYWdlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgPC9mb3JtPiAgICAgXG4gICAgICA8L3NlY3Rpb24+XG4gICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZUlucHV0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKXt9XG4gIG9uU3VibWl0KGZvcm06YW55KXtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgTWVzc2FnZShmb3JtLmNvbnRlbnQsIG51bGwgLCAnRHVtbXknKVxuICB9XG4gIG9uQ3JlYXRlKGNvbnRlbnQgOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgOiBNZXNzYWdlID0gbmV3IE1lc3NhZ2UoY29udGVudCwgbnVsbCAsICdEdW1teScpO1xuICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UuYWRkTWVzc2FnZShtZXNzYWdlKVxuICB9XG59IiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge01lc3NhZ2VMaXN0Q29tcG9uZW50fSBmcm9tICcuL21lc3NhZ2UtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge01lc3NhZ2VJbnB1dENvbXBvbmVudH0gZnJvbSAnLi9tZXNzYWdlLWlucHV0LmNvbXBvbmVudCc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1tZXNzYWdlcycsXHJcbiAgICBkaXJlY3RpdmVzIDogW01lc3NhZ2VMaXN0Q29tcG9uZW50ICwgTWVzc2FnZUlucHV0Q29tcG9uZW50XSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgIDxteS1tZXNzYWdlLWlucHV0PjwvbXktbWVzc2FnZS1pbnB1dD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgPG15LW1lc3NhZ2UtbGlzdD48L215LW1lc3NhZ2UtbGlzdD5cclxuICAgICA8L2Rpdj5cclxuICAgICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VzQ29tcG9uZW50IHtcclxuXHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yIDogJ215LWF1dGgnLFxyXG4gICAgdGVtcGxhdGUgOiBgXHJcbiAgICAgIDxoMT5BdXRoPC9oMT5cclxuICAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkNvbXBvbmVudCB7XHJcblxyXG59IiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSAnLi9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7TWVzc2FnZXNDb21wb25lbnR9IGZyb20gJy4vbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50JztcbmltcG9ydCB7QXV0aGVudGljYXRpb25Db21wb25lbnR9IGZyb20gJy4vYXV0aC9hdXRvbnRpY2F0aW9uLmNvbXBvbmVudCc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgZGlyZWN0aXZlcyA6IFtIZWFkZXJDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgPG15LWhlYWRlcj4gPC9teS1oZWFkZXI+XG4gICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+ICBcbiAgICAgIDwvZGl2PiAgICAgICBcbiAgICAgICBgXG59KVxuXG5AUm91dGVDb25maWcoW1xuICAgIHsgcGF0aCA6ICcvJywgbmFtZTogJ01lc3NhZ2VzJyAsIGNvbXBvbmVudCA6IE1lc3NhZ2VzQ29tcG9uZW50LCB1c2VBc0RlZmF1bHQgOiB0cnVlIH0sXG4gICAgeyBwYXRoIDogJy9hdXRoJywgbmFtZTogJ0F1dGgnICwgY29tcG9uZW50IDogQXV0aGVudGljYXRpb25Db21wb25lbnR9XG4gXVxuKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICBcbn0iLCIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSBcIi4vbWVzc2FnZXMvbWVzc2FnZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1JPVVRFUl9QUk9WSURFUlN9IGZyb20gXCIuL2FuZ3VsYXIyL3JvdXRlclwiO1xuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW01lc3NhZ2VTZXJ2aWNlLCBST1VURVJfUFJPVklERVJTXSk7IiwiZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkIDogc3RyaW5nLCBmaXJzdE5hbWU/OiBzdHJpbmcsIGxhc3ROYW1lPzpzdHJpbmcpe1xyXG5cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
