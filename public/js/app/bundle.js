var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("header.component", ['angular2/core', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent() {
                }
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'my-header',
                        template: "\n     <header class=\"row\">\n       <nav class=\"col-md-8 col-md-offset-2\">\n          <ul class=\"nav nav-pills\">\n             <li><a [routerLink] = \"['Messages']\">Messages</a></li>\n             <li><a [routerLink] = \"['Auth']\">Authentication</a></li>        \n          </ul>\n       </nav> \n     </header> \n     ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        styles: ["\n    header : {\n     margin-bottom: 20px;\n     }\n     ul : {\n      text-align : center;\n     }\n     li {\n      float : none;\n      display : inline-block;\n     }\n     \n     "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
System.register("messages/message", [], function(exports_2, context_2) {
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
System.register("messages/message.service", ["messages/message"], function(exports_3, context_3) {
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
System.register("messages/message.component", ['angular2/core', "messages/message.service", "messages/message"], function(exports_4, context_4) {
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
System.register("messages/message-list.component", ['angular2/core', "messages/message.component", "messages/message.service"], function(exports_5, context_5) {
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
System.register("messages/message-input.component", ['angular2/core', "messages/message", "messages/message.service"], function(exports_6, context_6) {
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
System.register("messages/messages.component", ['angular2/core', "messages/message-list.component", "messages/message-input.component"], function(exports_7, context_7) {
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
System.register("auth/signup.component", ['angular2/core', "angular2/common"], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_6, common_1;
    var SignUpComponent;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            SignUpComponent = (function () {
                function SignUpComponent(_fb) {
                    this._fb = _fb;
                }
                SignUpComponent.prototype.onSubmit = function () {
                    console.log(this.myForm.value);
                };
                SignUpComponent.prototype.ngOnInit = function () {
                    this.myForm = this._fb.group({
                        firstName: ['', common_1.Validators.required],
                        lastName: ['', common_1.Validators.required],
                        email: ['', common_1.Validators.required],
                        password: ['', common_1.Validators.required],
                    });
                };
                SignUpComponent = __decorate([
                    core_6.Component({
                        selector: 'signup-component',
                        template: "\n     <section class=\"col-md-8 col-md-offset-2\">\n         <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n           <div class=\"form-group\">\n             <label for=\"firstName\">first Name</label>\n             <input [ngFormControl]=\"myForm.find('firstName')\" type=\"text\" id=\"firstName\" class=\"form-control\">\n           </div>\n             <div class=\"form-group\">\n             <label for=\"lastName\">\"last Name</label>\n             <input type=\"text\"  [ngFormControl]=\"myForm.find('lastName')\" id=\"lastName\" class=\"form-control\">\n           </div>\n             <div class=\"form-group\">\n             <label for=\"email\">Email</label>\n             <input type=\"email\"  [ngFormControl]=\"myForm.find('email')\" id=\"email\" class=\"form-control\">\n           </div>\n             <div class=\"form-group\">\n             <label for=\"password\">Password</label>\n             <input type=\"password\" [ngFormControl]=\"myForm.find('password')\" id=\"password\" class=\"form-control\">\n           </div>\n           <button type=\"submit\" class=\"btn btn-form\" [disabled]=\"!myForm.valid\">Sign Up</button>\n         </form>\n       </section>\n     "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], SignUpComponent);
                return SignUpComponent;
            }());
            exports_8("SignUpComponent", SignUpComponent);
        }
    }
});
System.register("auth/authentication.component", ['angular2/core', "auth/signup.component"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_7, signup_component_1;
    var AuthenticationComponent;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
            },
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            }],
        execute: function() {
            AuthenticationComponent = (function () {
                function AuthenticationComponent() {
                }
                AuthenticationComponent = __decorate([
                    core_7.Component({
                        selector: 'my-auth',
                        directives: [signup_component_1.SignUpComponent],
                        template: "\n      <h1>Auth</h1>\n      <signup-component></signup-component>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AuthenticationComponent);
                return AuthenticationComponent;
            }());
            exports_9("AuthenticationComponent", AuthenticationComponent);
        }
    }
});
System.register("app.component", ['angular2/core', 'angular2/router', "header.component", "messages/messages.component", "auth/authentication.component"], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var core_8, router_2, header_component_1, messages_component_1, authentication_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
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
            function (authentication_component_1_1) {
                authentication_component_1 = authentication_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_8.Component({
                        selector: 'my-app',
                        directives: [header_component_1.HeaderComponent, router_2.ROUTER_DIRECTIVES],
                        template: "\n      <div class=\"container\">\n      <my-header> </my-header>\n      <router-outlet></router-outlet>  \n      </div>       \n       "
                    }),
                    router_2.RouteConfig([
                        { path: '/', name: 'Messages', component: messages_component_1.MessagesComponent, useAsDefault: true },
                        { path: '/auth', name: 'Auth', component: authentication_component_1.AuthenticationComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_10("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component", "messages/message.service", "./angular2/router", "angular2/core"], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var browser_1, app_component_1, message_service_4, router_3, core_9;
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
            },
            function (core_9_1) {
                core_9 = core_9_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [message_service_4.MessageService, router_3.ROUTER_PROVIDERS, core_9.provide(router_3.LocationStrategy, { useClass: router_3.HashLocationStrategy })]);
        }
    }
});
System.register("auth/logout.component", ['angular2/core'], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_10;
    var LogoutForm;
    return {
        setters:[
            function (core_10_1) {
                core_10 = core_10_1;
            }],
        execute: function() {
            LogoutForm = (function () {
                function LogoutForm() {
                }
                LogoutForm.prototype.onLogout = function () {
                };
                LogoutForm = __decorate([
                    core_10.Component({
                        selector: 'logout-form',
                        template: "\n     <section class=\"col-md-8 col-md-offset-2\">\n         <button class=\"btn btn-danger\" (click)=\"onLogout()\">Logout</button>\n       </section>\n     "
                    }), 
                    __metadata('design:paramtypes', [])
                ], LogoutForm);
                return LogoutForm;
            }());
            exports_12("LogoutForm", LogoutForm);
        }
    }
});
System.register("auth/user", [], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
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
            exports_13("User", User);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiLCJtZXNzYWdlcy9tZXNzYWdlLnRzIiwibWVzc2FnZXMvbWVzc2FnZS5zZXJ2aWNlLnRzIiwibWVzc2FnZXMvbWVzc2FnZS5jb21wb25lbnQudHMiLCJtZXNzYWdlcy9tZXNzYWdlLWxpc3QuY29tcG9uZW50LnRzIiwibWVzc2FnZXMvbWVzc2FnZS1pbnB1dC5jb21wb25lbnQudHMiLCJtZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQudHMiLCJhdXRoL3NpZ251cC5jb21wb25lbnQudHMiLCJhdXRoL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIiwiYXV0aC9sb2dvdXQuY29tcG9uZW50LnRzIiwiYXV0aC91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBK0JBO2dCQUFBO2dCQUVBLENBQUM7Z0JBL0JEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRSx5VUFTUjt3QkFDRixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDL0IsTUFBTSxFQUFFLENBQUMsMkxBWVAsQ0FBQztxQkFDTixDQUFDOzttQ0FBQTtnQkFLRixzQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsNkNBRUMsQ0FBQTs7Ozs7Ozs7Ozs7WUNqQ0Q7Z0JBS0ksaUJBQVksT0FBZ0IsRUFBRSxTQUFtQixFQUFFLFFBQWlCLEVBQUUsTUFBZ0I7b0JBQ2xGLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO29CQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUN6QixDQUFDO2dCQUNMLGNBQUM7WUFBRCxDQVhBLEFBV0MsSUFBQTtZ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RUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBb0IsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7WUNJekg7Z0JBQUE7Z0JBSUEsQ0FBQztnQkFIRyw2QkFBUSxHQUFSO2dCQUVBLENBQUM7Z0JBWEw7b0JBQUMsaUJBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUcsYUFBYTt3QkFDeEIsUUFBUSxFQUFHLGlLQUlUO3FCQUNMLENBQUM7OzhCQUFBO2dCQUtGLGlCQUFDO1lBQUQsQ0FKQSxBQUlDLElBQUE7WUFKRCxvQ0FJQyxDQUFBOzs7Ozs7Ozs7OztZQ2REO2dCQUNJLGNBQW1CLEtBQWEsRUFBRSxRQUFpQixFQUFFLFNBQWtCLEVBQUUsUUFBZ0I7b0JBQXRFLFVBQUssR0FBTCxLQUFLLENBQVE7Z0JBRWhDLENBQUM7Z0JBQ0wsV0FBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsd0JBSUMsQ0FBQSIsImZpbGUiOiIuLi8uLi8uLi9hbmd1bGFyMi1ub2RlLWNoYXQvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktaGVhZGVyJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgPGhlYWRlciBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgPG5hdiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi1waWxsc1wiPlxyXG4gICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXSA9IFwiWydNZXNzYWdlcyddXCI+TWVzc2FnZXM8L2E+PC9saT5cclxuICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua10gPSBcIlsnQXV0aCddXCI+QXV0aGVudGljYXRpb248L2E+PC9saT4gICAgICAgIFxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgIDwvbmF2PiBcclxuICAgICA8L2hlYWRlcj4gXHJcbiAgICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICBoZWFkZXIgOiB7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICB9XHJcbiAgICAgdWwgOiB7XHJcbiAgICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbiAgICAgfVxyXG4gICAgIGxpIHtcclxuICAgICAgZmxvYXQgOiBub25lO1xyXG4gICAgICBkaXNwbGF5IDogaW5saW5lLWJsb2NrO1xyXG4gICAgIH1cclxuICAgICBcclxuICAgICBgXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xyXG5cclxufSIsImV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcclxuICAgIGNvbnRlbnQgOiBzdHJpbmc7XHJcbiAgICB1c2VybmFtZSA6IHN0cmluZztcclxuICAgIG1lc3NhZ2VJZCA6IHN0cmluZztcclxuICAgIHVzZXJJZCA6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRlbnQgOiBzdHJpbmcsIG1lc3NhZ2VJZD8gOiBzdHJpbmcsIHVzZXJuYW1lPzogc3RyaW5nLCB1c2VySWQ/IDogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUlkID0gbWVzc2FnZUlkO1xyXG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcclxuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcclxuICAgIH1cclxufSIsImltcG9ydCB7TWVzc2FnZX0gZnJvbSAnLi9tZXNzYWdlJ1xyXG5leHBvcnQgY2xhc3MgIE1lc3NhZ2VTZXJ2aWNlIHtcclxuICAgIG1lc3NhZ2VzIDogTWVzc2FnZVtdID0gW107XHJcblxyXG4gICAgYWRkTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKXtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tZXNzYWdlcylcclxuICAgIH1cclxuXHJcbiAgICBnZXRNZXNzYWdlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlcztcclxuICAgIH1cclxuICAgIGVkaXRNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzW3RoaXMubWVzc2FnZXMuaW5kZXhPZihtZXNzYWdlKV0gPSBuZXcgTWVzc2FnZSgnRWRpdGVkICcsIG51bGwgLCAnRHVtbXknKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBkZWxldGVNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZSh0aGlzLm1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSksIDEpO1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCAgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuL21lc3NhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSAnLi9tZXNzYWdlJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvciA6ICdteS1tZXNzYWdlJyxcclxuICAgIHN0eWxlcyA6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgLmF1dGhvciB7XHJcbiAgICAgICAgIGRpc3BsYXkgOiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgIGZvbnQtc3R5bGUgOiBpdGFsaWM7XHJcbiAgICAgICAgIGZvbnQtc2l6ZSA6IDEycHg7XHJcbiAgICAgICAgIHdpZHRoIDogODAlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb25maWcge1xyXG4gICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgIHRleHQtYWxpZ24gOiByaWdodDtcclxuICAgICAgICAgZm9udC1zaXplIDogMTJweDtcclxuICAgICAgICAgd2lkdGggOiAxOSVcclxuICAgICAgICB9XHJcbiAgICAgIGBcclxuICAgIF0sXHJcbiAgICB0ZW1wbGF0ZSA6IGBcclxuICAgICAgPGFydGljbGUgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIHt7bWVzc2FnZS5jb250ZW50fX1cclxuICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICBcclxuICAgICAgXHJcbiAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzPVwicGFuZWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICB7e21lc3NhZ2UudXNlcm5hbWV9fVxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb25maWdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJvbkVkaXQoKVwiPkVkaXRvcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJvbkRlbGV0ZSgpXCI+RGVsZXRlPC9hPlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICA8L2FydGljbGU+XHJcbiAgICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZUNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBtZXNzYWdlIDpNZXNzYWdlO1xyXG4gICAgQE91dHB1dCgpIGVkaXRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2Upe31cclxuICAgIG9uRWRpdCgpIHtcclxuICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmVkaXRNZXNzYWdlKHRoaXMubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBvbkRlbGV0ZSgpIHtcclxuICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5kZWxldGVNZXNzYWdlKHRoaXMubWVzc2FnZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgIHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSAnLi9tZXNzYWdlJztcclxuaW1wb3J0IHtNZXNzYWdlQ29tcG9uZW50fSBmcm9tICcuL21lc3NhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi9tZXNzYWdlLnNlcnZpY2UnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yIDogJ215LW1lc3NhZ2UtbGlzdCcsXHJcbiAgICBkaXJlY3RpdmVzIDogW01lc3NhZ2VDb21wb25lbnRdLFxyXG4gICAgdGVtcGxhdGUgOiBgXHJcbiAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cclxuICAgICAgICAgIDxteS1tZXNzYWdlICpuZ0Zvcj1cIiNtZXNzYWdlIG9mIG1lc3NhZ2VzXCIgW21lc3NhZ2VdID0gXCJtZXNzYWdlXCIgKGVkaXRDbGlja2VkKSA9IFwibWVzc2FnZS5jb250ZW50ID0gJGV2ZW50XCI+PC9teS1tZXNzYWdlPlxyXG4gICAgICAgPC9zZWN0aW9uPlxyXG4gICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKXt9XHJcbiAgICBtZXNzYWdlczogTWVzc2FnZVtdO1xyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgdGhpcy5tZXNzYWdlcyA9IHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmdldE1lc3NhZ2VzKClcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgIHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSAnLi9tZXNzYWdlJztcclxuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi9tZXNzYWdlLnNlcnZpY2UnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yIDogJ215LW1lc3NhZ2UtaW5wdXQnLFxyXG4gICAgdGVtcGxhdGUgOiBgXHJcbiAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cclxuICAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQoZi52YWx1ZSlcIiAjZj1cIm5nRm9ybVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJjb250ZW50XCI+Q29udGVudDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmdDb250cm9sPVwiY29udGVudFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJjb250ZW50XCIgI2lucHV0PlxyXG4gICAgICAgIDxidXR0b24gIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJvbkNyZWF0ZShpbnB1dC52YWx1ZSlcIj5TZW5kIG1lc3NhZ2U8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgPC9mb3JtPiAgICAgXHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlSW5wdXRDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSl7fVxyXG4gIG9uU3VibWl0KGZvcm06YW55KXtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKGZvcm0uY29udGVudCwgbnVsbCAsICdEdW1teScpXHJcbiAgfVxyXG4gIG9uQ3JlYXRlKGNvbnRlbnQgOiBzdHJpbmcpIHtcclxuICAgICAgY29uc3QgbWVzc2FnZSA6IE1lc3NhZ2UgPSBuZXcgTWVzc2FnZShjb250ZW50LCBudWxsICwgJ0R1bW15Jyk7XHJcbiAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmFkZE1lc3NhZ2UobWVzc2FnZSlcclxuICB9XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7TWVzc2FnZUxpc3RDb21wb25lbnR9IGZyb20gJy4vbWVzc2FnZS1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TWVzc2FnZUlucHV0Q29tcG9uZW50fSBmcm9tICcuL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50JztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LW1lc3NhZ2VzJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtNZXNzYWdlTGlzdENvbXBvbmVudCwgTWVzc2FnZUlucHV0Q29tcG9uZW50XSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgIDxteS1tZXNzYWdlLWlucHV0PjwvbXktbWVzc2FnZS1pbnB1dD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgPG15LW1lc3NhZ2UtbGlzdD48L215LW1lc3NhZ2UtbGlzdD5cclxuICAgICA8L2Rpdj5cclxuICAgICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VzQ29tcG9uZW50IHtcclxuXHJcbn0iLCJpbXBvcnQgIHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIENvbnRyb2xHcm91cCwgVmFsaWRhdG9yc30gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvciA6ICdzaWdudXAtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlIDogYFxyXG4gICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XHJcbiAgICAgICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJteUZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmlyc3ROYW1lXCI+Zmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICA8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2ZpcnN0TmFtZScpXCIgdHlwZT1cInRleHRcIiBpZD1cImZpcnN0TmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxhc3ROYW1lXCI+XCJsYXN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgIFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdsYXN0TmFtZScpXCIgaWQ9XCJsYXN0TmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiICBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnZW1haWwnKVwiIGlkPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgncGFzc3dvcmQnKVwiIGlkPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1mb3JtXCIgW2Rpc2FibGVkXT1cIiFteUZvcm0udmFsaWRcIj5TaWduIFVwPC9idXR0b24+XHJcbiAgICAgICAgIDwvZm9ybT5cclxuICAgICAgIDwvc2VjdGlvbj5cclxuICAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWduVXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBteUZvcm06IENvbnRyb2xHcm91cDtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiIDogRm9ybUJ1aWxkZXIpe31cclxuICAgIG9uU3VibWl0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5teUZvcm0udmFsdWUpXHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XHJcbiAgICAgICAgICAgZmlyc3ROYW1lIDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICBsYXN0TmFtZSA6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgZW1haWwgOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgIHBhc3N3b3JkIDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7U2lnblVwQ29tcG9uZW50fSBmcm9tICcuL3NpZ251cC5jb21wb25lbnQnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXV0aCcsXHJcbiAgICBkaXJlY3RpdmVzIDogW1NpZ25VcENvbXBvbmVudF0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8aDE+QXV0aDwvaDE+XHJcbiAgICAgIDxzaWdudXAtY29tcG9uZW50Pjwvc2lnbnVwLWNvbXBvbmVudD5cclxuICAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkNvbXBvbmVudCB7XHJcblxyXG59IiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtIZWFkZXJDb21wb25lbnR9IGZyb20gJy4vaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TWVzc2FnZXNDb21wb25lbnR9IGZyb20gJy4vbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHtBdXRoZW50aWNhdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9hdXRoL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudCc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgZGlyZWN0aXZlczogW0hlYWRlckNvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8bXktaGVhZGVyPiA8L215LWhlYWRlcj5cclxuICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PiAgXHJcbiAgICAgIDwvZGl2PiAgICAgICBcclxuICAgICAgIGBcclxufSlcclxuXHJcbkBSb3V0ZUNvbmZpZyhbXHJcbiAgICAgICAge3BhdGg6ICcvJywgbmFtZTogJ01lc3NhZ2VzJywgY29tcG9uZW50OiBNZXNzYWdlc0NvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlfSxcclxuICAgICAgICB7cGF0aDogJy9hdXRoJywgbmFtZTogJ0F1dGgnLCBjb21wb25lbnQ6IEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50fVxyXG4gICAgXVxyXG4pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gICBcclxufSIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyMi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cclxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xyXG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi9tZXNzYWdlcy9tZXNzYWdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtST1VURVJfUFJPVklERVJTLCBMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneX0gZnJvbSBcIi4vYW5ndWxhcjIvcm91dGVyXCI7XHJcbmltcG9ydCB7cHJvdmlkZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW01lc3NhZ2VTZXJ2aWNlLCBST1VURVJfUFJPVklERVJTLCBwcm92aWRlKExvY2F0aW9uU3RyYXRlZ3ksIHt1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3l9KV0pOyIsImltcG9ydCAge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yIDogJ2xvZ291dC1mb3JtJyxcclxuICAgIHRlbXBsYXRlIDogYFxyXG4gICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XHJcbiAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIChjbGljayk9XCJvbkxvZ291dCgpXCI+TG9nb3V0PC9idXR0b24+XHJcbiAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9nb3V0Rm9ybSB7XHJcbiAgICBvbkxvZ291dCgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBVc2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbWFpbDogc3RyaW5nLCBwYXNzd29yZCA6IHN0cmluZywgZmlyc3ROYW1lPzogc3RyaW5nLCBsYXN0TmFtZT86c3RyaW5nKXtcclxuXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
