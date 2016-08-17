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
System.register("messages/message.service", ["messages/message", 'angular2/http', 'angular2/core', 'rxjs/Rx', 'rxjs/Observable'], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var message_1, http_1, core_2, Observable_1;
    var MessageService;
    return {
        setters:[
            function (message_1_1) {
                message_1 = message_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (_1) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            MessageService = (function () {
                function MessageService(_http) {
                    this._http = _http;
                    this.messages = [];
                    this.messageIsEdit = new core_2.EventEmitter();
                }
                MessageService.prototype.addMessage = function (message) {
                    var body = JSON.stringify(message);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
                    return this._http.post('http://localhost:3000/message' + token, body, {
                        headers: headers
                    })
                        .map(function (response) {
                        var data = response.json().obj;
                        var message = new message_1.Message(data.content, data._id, data.user.firstName, data.user._id);
                        return message;
                    })
                        .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
                };
                MessageService.prototype.getMessages = function () {
                    return this._http.get('http://localhost:3000/message')
                        .map(function (response) {
                        var data = response.json().obj;
                        var objs = [];
                        for (var i = 0; i < data.length; i++) {
                            var message = new message_1.Message(data[i].content, data[i]._id, data[i].user.firstName, data[i].user._id);
                            objs.push(message);
                        }
                        return objs;
                    })
                        .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
                };
                MessageService.prototype.editMessage = function (message) {
                    this.messageIsEdit.emit(message);
                };
                MessageService.prototype.updateMessage = function (message) {
                    var body = JSON.stringify(message);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var token = localStorage.getItem('token') ? 'token=' + localStorage.getItem('token') : '';
                    return this._http.patch("http://localhost:3000/message/" + message.messageId + "?" + token, body, {
                        headers: headers
                    })
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
                };
                MessageService.prototype.deleteMessage = function (message) {
                    this.messages.splice(this.messages.indexOf(message), 1);
                    var token = localStorage.getItem('token') ? 'token=' + localStorage.getItem('token') : '';
                    return this._http.delete("http://localhost:3000/message/" + message.messageId + "?" + token)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
                };
                MessageService = __decorate([
                    core_2.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MessageService);
                return MessageService;
            }());
            exports_3("MessageService", MessageService);
        }
    }
});
System.register("messages/message.component", ['angular2/core', "messages/message.service", "messages/message"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_3, message_service_1, message_2;
    var MessageComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
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
                    this.editClicked = new core_3.EventEmitter();
                }
                MessageComponent.prototype.onEdit = function () {
                    this._messageService.editMessage(this.message);
                };
                MessageComponent.prototype.onDelete = function () {
                    this._messageService.deleteMessage(this.message).subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
                };
                MessageComponent.prototype.onBelongToUser = function () {
                    return localStorage.getItem('userId') == this.message.userId;
                };
                __decorate([
                    core_3.Input(), 
                    __metadata('design:type', message_2.Message)
                ], MessageComponent.prototype, "message", void 0);
                __decorate([
                    core_3.Output(), 
                    __metadata('design:type', Object)
                ], MessageComponent.prototype, "editClicked", void 0);
                MessageComponent = __decorate([
                    core_3.Component({
                        selector: 'my-message',
                        styles: [
                            "\n        .author {\n         display : inline-block;\n         font-style : italic;\n         font-size : 12px;\n         width : 80%\n        }\n        .config {\n         display: inline-block;\n         text-align : right;\n         font-size : 12px;\n         width : 19%\n        }\n      "
                        ],
                        template: "\n      <article class=\"panel panel-default\">\n              <div class=\"panel-body\">\n                {{message.content}}\n              </div>         \n      \n             <footer class=\"panel-footer\">\n                 <div class=\"author\">\n                     {{message.username}}\n                 </div>\n                 <div class=\"config\" *ngIf=\"onBelongToUser()\">\n                    <a (click)=\"onEdit()\">Edit</a>\n                    <a (click)=\"onDelete()\">Delete</a>\n                 </div>\n             </footer>\n       </article>\n     "
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
    var core_4, message_component_1, message_service_2;
    var MessageListComponent;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
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
                    var _this = this;
                    this._messageService.getMessages()
                        .subscribe(function (messages) {
                        _this.messages = messages;
                        _this._messageService.messages = messages;
                    });
                };
                MessageListComponent = __decorate([
                    core_4.Component({
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
    var core_5, message_3, message_service_3;
    var MessageInputComponent;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
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
                    this.message = null;
                }
                MessageInputComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    if (this.message) {
                        this.message.content = form.content;
                        this._messageService.updateMessage(this.message).subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
                        this.message = null;
                    }
                    else {
                        var message = new message_3.Message(form.content, null, 'Dummy');
                        this._messageService.addMessage(message)
                            .subscribe(function (data) {
                            _this._messageService.messages.push(data);
                        }, function (error) { return console.log(error); });
                    }
                };
                MessageInputComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._messageService.messageIsEdit.subscribe(function (message) {
                        _this.message = message;
                    });
                };
                MessageInputComponent.prototype.onCancel = function () {
                    this.message = null;
                };
                MessageInputComponent = __decorate([
                    core_5.Component({
                        selector: 'my-message-input',
                        template: "\n     <section class=\"col-md-8 col-md-offset-2\">\n     <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"content\">Content</label>\n        <input type=\"text\" ngControl=\"content\" class=\"form-control\" id=\"content\" #input [ngModel]=\"message?.content\">\n        <button  type=\"submit\" class=\"btn btn-primary\">{{ !message ? 'Send message' : 'Save Message' }}</button>\n         <button class=\"btn btn-danger\" (click)=\"onCancel()\" *ngIf=\"message\">Cancel</button>\n      </div>\n     </form>     \n      </section>\n     "
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
    var core_6, message_list_component_1, message_input_component_1;
    var MessagesComponent;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
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
                    core_6.Component({
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
System.register("auth/user", [], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(email, password, firstName, lastName) {
                    this.email = email;
                    this.password = password;
                    this.firstName = firstName;
                    this.lastName = lastName;
                }
                return User;
            }());
            exports_8("User", User);
        }
    }
});
System.register("auth/auth.service", ['angular2/http', 'angular2/core', 'rxjs/Rx', 'rxjs/Observable'], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var http_2, core_7, Observable_2;
    var AuthService;
    return {
        setters:[
            function (http_2_1) {
                http_2 = http_2_1;
            },
            function (core_7_1) {
                core_7 = core_7_1;
            },
            function (_2) {},
            function (Observable_2_1) {
                Observable_2 = Observable_2_1;
            }],
        execute: function() {
            AuthService = (function () {
                function AuthService(_http) {
                    this._http = _http;
                }
                AuthService.prototype.signup = function (user) {
                    var body = JSON.stringify(user);
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    return this._http.post("http://localhost:3000/user/", body, {
                        headers: headers
                    })
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_2.Observable.throw(error.json()); });
                };
                AuthService.prototype.signin = function (user) {
                    var body = JSON.stringify(user);
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    return this._http.post("http://localhost:3000/user/signin", body, {
                        headers: headers
                    })
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_2.Observable.throw(error.json()); });
                };
                AuthService.prototype.logout = function () {
                    localStorage.clear();
                };
                AuthService.prototype.isLoggedIn = function () {
                    return localStorage.getItem('token') !== null;
                };
                AuthService = __decorate([
                    core_7.Injectable(), 
                    __metadata('design:paramtypes', [http_2.Http])
                ], AuthService);
                return AuthService;
            }());
            exports_9("AuthService", AuthService);
        }
    }
});
System.register("auth/signup.component", ['angular2/core', "angular2/common", "auth/user", "auth/auth.service"], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var core_8, common_1, user_1, auth_service_1;
    var SignUpComponent;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            SignUpComponent = (function () {
                function SignUpComponent(_fb, _authService) {
                    this._fb = _fb;
                    this._authService = _authService;
                }
                SignUpComponent.prototype.onSubmit = function () {
                    var user = new user_1.User(this.myForm.value.email, this.myForm.value.password, this.myForm.value.firstName, this.myForm.value.lastName);
                    this._authService.signup(user).subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
                };
                SignUpComponent.prototype.ngOnInit = function () {
                    this.myForm = this._fb.group({
                        firstName: ['', common_1.Validators.required],
                        lastName: ['', common_1.Validators.required],
                        email: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                this.isMail
                            ])],
                        password: ['', common_1.Validators.required],
                    });
                };
                SignUpComponent.prototype.isMail = function (control) {
                    if (!/[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\./.test(control.value)) {
                        return { invalidMail: true };
                    }
                };
                SignUpComponent = __decorate([
                    core_8.Component({
                        selector: 'signup-component',
                        template: "\n     <section class=\"col-md-8 col-md-offset-2\">\n         <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n           <div class=\"form-group\">\n             <label for=\"firstName\">First Name</label>\n             <input [ngFormControl]=\"myForm.find('firstName')\" type=\"text\" id=\"firstName\" class=\"form-control\">\n           </div>\n             <div class=\"form-group\">\n             <label for=\"lastName\">Last Name</label>\n             <input type=\"text\"  [ngFormControl]=\"myForm.find('lastName')\" id=\"lastName\" class=\"form-control\">\n           </div>\n             <div class=\"form-group\">\n             <label for=\"email\">Mail</label>\n             <input type=\"email\"  [ngFormControl]=\"myForm.find('email')\" id=\"email\" class=\"form-control\">\n           </div>\n             <div class=\"form-group\">\n             <label for=\"password\">Password</label>\n             <input type=\"password\" [ngFormControl]=\"myForm.find('password')\" id=\"password\" class=\"form-control\">\n           </div>\n           <button type=\"submit\" class=\"btn btn-form\" [disabled]=\"!myForm.valid\">Sign Up</button>\n         </form>\n       </section>\n     "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, auth_service_1.AuthService])
                ], SignUpComponent);
                return SignUpComponent;
            }());
            exports_10("SignUpComponent", SignUpComponent);
        }
    }
});
System.register("auth/signin.component", ['angular2/core', 'angular2/router', "angular2/common", "auth/auth.service", "auth/user"], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_9, router_2, common_2, auth_service_2, user_2;
    var SignInComponent;
    return {
        setters:[
            function (core_9_1) {
                core_9 = core_9_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            },
            function (common_2_1) {
                common_2 = common_2_1;
            },
            function (auth_service_2_1) {
                auth_service_2 = auth_service_2_1;
            },
            function (user_2_1) {
                user_2 = user_2_1;
            }],
        execute: function() {
            SignInComponent = (function () {
                function SignInComponent(_fb, _authService, _router) {
                    this._fb = _fb;
                    this._authService = _authService;
                    this._router = _router;
                }
                SignInComponent.prototype.onSubmit = function () {
                    var _this = this;
                    var user = new user_2.User(this.SignIn.value.email, this.SignIn.value.password);
                    this._authService.signin(user)
                        .subscribe(function (data) {
                        localStorage.setItem('token', data.token);
                        localStorage.setItem('userId', data.userId);
                        _this._router.navigateByUrl('/');
                    });
                };
                SignInComponent.prototype.ngOnInit = function () {
                    this.SignIn = this._fb.group({
                        email: ['', common_2.Validators.required],
                        password: ['', common_2.Validators.required],
                    });
                };
                SignInComponent = __decorate([
                    core_9.Component({
                        selector: 'signin-component',
                        template: "\n     <section class=\"col-md-8 col-md-offset-2\">\n        <form [ngFormModel]=\"SignIn\" (ngSubmit)=\"onSubmit()\">          \n             <div class=\"form-group\">\n             <label for=\"email\">Mail</label>\n             <input type=\"email\" [ngFormControl]=\"SignIn.find('email')\" id=\"email\" class=\"form-control\">\n           </div>\n             <div class=\"form-group\">\n             <label for=\"password\">Password</label>\n             <input type=\"password\"  [ngFormControl]=\"SignIn.find('password')\" id=\"password\" class=\"form-control\">\n           </div>\n           <button type=\"submit\" [disabled]=\"!SignIn.valid\" class=\"btn btn-form\">Sign Up</button>\n         </form>\n     </section>\n     "
                    }), 
                    __metadata('design:paramtypes', [common_2.FormBuilder, auth_service_2.AuthService, router_2.Router])
                ], SignInComponent);
                return SignInComponent;
            }());
            exports_11("SignInComponent", SignInComponent);
        }
    }
});
System.register("auth/logout.component", ['angular2/core', "auth/auth.service", 'angular2/router'], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_10, auth_service_3, router_3;
    var LogoutComponent;
    return {
        setters:[
            function (core_10_1) {
                core_10 = core_10_1;
            },
            function (auth_service_3_1) {
                auth_service_3 = auth_service_3_1;
            },
            function (router_3_1) {
                router_3 = router_3_1;
            }],
        execute: function() {
            LogoutComponent = (function () {
                function LogoutComponent(_authService, _router) {
                    this._authService = _authService;
                    this._router = _router;
                }
                LogoutComponent.prototype.onLogout = function () {
                    this._authService.logout();
                    this._router.navigate(['Signin']);
                };
                LogoutComponent = __decorate([
                    core_10.Component({
                        selector: 'logout-component',
                        template: "\n     <section class=\"col-md-8 col-md-offset-2\">\n         <button class=\"btn btn-danger\" (click)=\"onLogout()\">Logout</button>\n       </section>\n     "
                    }), 
                    __metadata('design:paramtypes', [auth_service_3.AuthService, router_3.Router])
                ], LogoutComponent);
                return LogoutComponent;
            }());
            exports_12("LogoutComponent", LogoutComponent);
        }
    }
});
System.register("auth/authentication.component", ['angular2/core', 'angular2/router', "auth/signup.component", "auth/signin.component", "auth/logout.component", "auth/auth.service"], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var core_11, router_4, signup_component_1, signin_component_1, logout_component_1, auth_service_4;
    var AuthenticationComponent;
    return {
        setters:[
            function (core_11_1) {
                core_11 = core_11_1;
            },
            function (router_4_1) {
                router_4 = router_4_1;
            },
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            },
            function (signin_component_1_1) {
                signin_component_1 = signin_component_1_1;
            },
            function (logout_component_1_1) {
                logout_component_1 = logout_component_1_1;
            },
            function (auth_service_4_1) {
                auth_service_4 = auth_service_4_1;
            }],
        execute: function() {
            AuthenticationComponent = (function () {
                function AuthenticationComponent(_authService) {
                    this._authService = _authService;
                }
                AuthenticationComponent.prototype.isLoggedIn = function () {
                    return this._authService.isLoggedIn();
                };
                AuthenticationComponent = __decorate([
                    core_11.Component({
                        selector: 'my-auth',
                        directives: [router_4.ROUTER_DIRECTIVES],
                        styles: ["\n       .router-link-active {\n          color : #555;\n          cursor : default;\n          background-color : #fff;\n          border : 1px solid #ddd;\n          border-bottom-color: transparent\n       }\n    "],
                        template: "\n      <header class=\"row spacing\">\n      <nav class=\"col-md-8 col-md-offset-2\">\n         <ul class=\"nav nav-tabs\">\n             <li><a [routerLink]=\"['Signup']\">Sign up</a></li>\n             <li><a [routerLink]=\"['Signin']\" *ngIf=\"!isLoggedIn()\">Sign in</a></li>\n             <li><a [routerLink]=\"['Logout']\" *ngIf=\"isLoggedIn()\">Logout</a></li>\n         </ul>\n      </nav>\n      </header>\n      <div class=\"row spacing\">\n       <router-outlet></router-outlet>       \n      </div>     \n    "
                    }),
                    router_4.RouteConfig([
                        { path: '/signup', name: 'Signup', component: signup_component_1.SignUpComponent, useAsDefault: true },
                        { path: '/signin', name: 'Signin', component: signin_component_1.SignInComponent },
                        { path: '/logout', name: 'Logout', component: logout_component_1.LogoutComponent },
                    ]), 
                    __metadata('design:paramtypes', [auth_service_4.AuthService])
                ], AuthenticationComponent);
                return AuthenticationComponent;
            }());
            exports_13("AuthenticationComponent", AuthenticationComponent);
        }
    }
});
System.register("app.component", ['angular2/core', 'angular2/router', "header.component", "messages/messages.component", "auth/authentication.component"], function(exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var core_12, router_5, header_component_1, messages_component_1, authentication_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_12_1) {
                core_12 = core_12_1;
            },
            function (router_5_1) {
                router_5 = router_5_1;
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
                    core_12.Component({
                        selector: 'my-app',
                        directives: [header_component_1.HeaderComponent, router_5.ROUTER_DIRECTIVES],
                        template: "\n      <div class=\"container\">\n      <my-header> </my-header>\n      <router-outlet></router-outlet>  \n      </div>       \n       "
                    }),
                    router_5.RouteConfig([
                        { path: '/', name: 'Messages', component: messages_component_1.MessagesComponent, useAsDefault: true },
                        { path: '/auth/...', name: 'Auth', component: authentication_component_1.AuthenticationComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_14("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component", "messages/message.service", "auth/auth.service", "angular2/router", "angular2/core", "angular2/http"], function(exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var browser_1, app_component_1, message_service_4, auth_service_5, router_6, core_13, http_3;
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
            function (auth_service_5_1) {
                auth_service_5 = auth_service_5_1;
            },
            function (router_6_1) {
                router_6 = router_6_1;
            },
            function (core_13_1) {
                core_13 = core_13_1;
            },
            function (http_3_1) {
                http_3 = http_3_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [message_service_4.MessageService, auth_service_5.AuthService, router_6.ROUTER_PROVIDERS, core_13.provide(router_6.LocationStrategy, { useClass: router_6.HashLocationStrategy }), http_3.HTTP_PROVIDERS]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiLCJtZXNzYWdlcy9tZXNzYWdlLnRzIiwibWVzc2FnZXMvbWVzc2FnZS5zZXJ2aWNlLnRzIiwibWVzc2FnZXMvbWVzc2FnZS5jb21wb25lbnQudHMiLCJtZXNzYWdlcy9tZXNzYWdlLWxpc3QuY29tcG9uZW50LnRzIiwibWVzc2FnZXMvbWVzc2FnZS1pbnB1dC5jb21wb25lbnQudHMiLCJtZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQudHMiLCJhdXRoL3VzZXIudHMiLCJhdXRoL2F1dGguc2VydmljZS50cyIsImF1dGgvc2lnbnVwLmNvbXBvbmVudC50cyIsImF1dGgvc2lnbmluLmNvbXBvbmVudC50cyIsImF1dGgvbG9nb3V0LmNvbXBvbmVudC50cyIsImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIiwiYXBwLmNvbXBvbmVudC50cyIsImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkEvQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsUUFBUSxFQUFFLHlVQVNSO3dCQUNGLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3dCQUMvQixNQUFNLEVBQUUsQ0FBQywyTEFZUCxDQUFDO3FCQUNOLENBQUM7O21DQUFBO2dCQUtGLHNCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCw2Q0FFQyxDQUFBOzs7Ozs7Ozs7OztZQ2pDRDtnQkFLSSxpQkFBWSxPQUFnQixFQUFFLFNBQW1CLEVBQUUsUUFBaUIsRUFBRSxNQUFnQjtvQkFDbEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztvQkFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFN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Ozs7OztZQ2ZELG1CQUFTLENBQUMsNEJBQVksRUFBRSxDQUFDLGdDQUFjLEVBQUUsMEJBQVcsRUFBRSx5QkFBZ0IsRUFBRSxlQUFPLENBQUMseUJBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQUUsNkJBQW9CLEVBQUMsQ0FBQyxFQUFFLHFCQUFjLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6Ii4uLy4uLy4uL2FuZ3VsYXIyLW5vZGUtY2hhdC9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1oZWFkZXInLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICA8aGVhZGVyIGNsYXNzPVwicm93XCI+XHJcbiAgICAgICA8bmF2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXBpbGxzXCI+XHJcbiAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdID0gXCJbJ01lc3NhZ2VzJ11cIj5NZXNzYWdlczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXSA9IFwiWydBdXRoJ11cIj5BdXRoZW50aWNhdGlvbjwvYT48L2xpPiAgICAgICAgXHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgPC9uYXY+IFxyXG4gICAgIDwvaGVhZGVyPiBcclxuICAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcclxuICAgIHN0eWxlczogW2BcclxuICAgIGhlYWRlciA6IHtcclxuICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgIH1cclxuICAgICB1bCA6IHtcclxuICAgICAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcclxuICAgICB9XHJcbiAgICAgbGkge1xyXG4gICAgICBmbG9hdCA6IG5vbmU7XHJcbiAgICAgIGRpc3BsYXkgOiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgIGBdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7XHJcblxyXG59IiwiZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xyXG4gICAgY29udGVudCA6IHN0cmluZztcclxuICAgIHVzZXJuYW1lIDogc3RyaW5nO1xyXG4gICAgbWVzc2FnZUlkIDogc3RyaW5nO1xyXG4gICAgdXNlcklkIDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoY29udGVudCA6IHN0cmluZywgbWVzc2FnZUlkPyA6IHN0cmluZywgdXNlcm5hbWU/OiBzdHJpbmcsIHVzZXJJZD8gOiBzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlSWQgPSBtZXNzYWdlSWQ7XHJcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xyXG4gICAgICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtNZXNzYWdlfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQge0luamVjdGFibGUsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgIE1lc3NhZ2VTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgIF9odHRwOkh0dHApIHtcclxuICAgIH1cclxuICAgIG1lc3NhZ2VzIDogTWVzc2FnZVtdID0gW107XHJcbiAgICBtZXNzYWdlSXNFZGl0ID0gbmV3IEV2ZW50RW1pdHRlcjxNZXNzYWdlPigpO1xyXG4gICAgYWRkTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKXtcclxuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZSk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/ICc/dG9rZW49JyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogJyc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL21lc3NhZ2UnKyB0b2tlbiwgYm9keSwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcclxuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gbmV3IE1lc3NhZ2UoZGF0YS5jb250ZW50LCBkYXRhLl9pZCwgZGF0YS51c2VyLmZpcnN0TmFtZSwgZGF0YS51c2VyLl9pZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWVzc2FnZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbWVzc2FnZScpXHJcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5vYmo7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqczphbnlbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBuZXcgTWVzc2FnZShkYXRhW2ldLmNvbnRlbnQsIGRhdGFbaV0uX2lkLCAgZGF0YVtpXS51c2VyLmZpcnN0TmFtZSwgZGF0YVtpXS51c2VyLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2Jqcy5wdXNoKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ianM7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gICAgfVxyXG4gICAgZWRpdE1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUlzRWRpdC5lbWl0KG1lc3NhZ2UpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTWVzc2FnZShtZXNzYWdlOk1lc3NhZ2UpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZSk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/ICd0b2tlbj0nICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJztcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wYXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL21lc3NhZ2UvJHttZXNzYWdlLm1lc3NhZ2VJZH0/JHt0b2tlbn1gLCBib2R5LCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UodGhpcy5tZXNzYWdlcy5pbmRleE9mKG1lc3NhZ2UpLCAxKTtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gJ3Rva2VuPScgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDozMDAwL21lc3NhZ2UvJHttZXNzYWdlLm1lc3NhZ2VJZH0/JHt0b2tlbn1gKVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4vbWVzc2FnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtNZXNzYWdlfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yIDogJ215LW1lc3NhZ2UnLFxyXG4gICAgc3R5bGVzIDogW1xyXG4gICAgICAgIGBcclxuICAgICAgICAuYXV0aG9yIHtcclxuICAgICAgICAgZGlzcGxheSA6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgZm9udC1zdHlsZSA6IGl0YWxpYztcclxuICAgICAgICAgZm9udC1zaXplIDogMTJweDtcclxuICAgICAgICAgd2lkdGggOiA4MCVcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbmZpZyB7XHJcbiAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgdGV4dC1hbGlnbiA6IHJpZ2h0O1xyXG4gICAgICAgICBmb250LXNpemUgOiAxMnB4O1xyXG4gICAgICAgICB3aWR0aCA6IDE5JVxyXG4gICAgICAgIH1cclxuICAgICAgYFxyXG4gICAgXSxcclxuICAgIHRlbXBsYXRlIDogYFxyXG4gICAgICA8YXJ0aWNsZSBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAge3ttZXNzYWdlLmNvbnRlbnR9fVxyXG4gICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgIFxyXG4gICAgICBcclxuICAgICAgICAgICAgIDxmb290ZXIgY2xhc3M9XCJwYW5lbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIHt7bWVzc2FnZS51c2VybmFtZX19XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpZ1wiICpuZ0lmPVwib25CZWxvbmdUb1VzZXIoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJvbkVkaXQoKVwiPkVkaXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cIm9uRGVsZXRlKClcIj5EZWxldGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIG1lc3NhZ2UgOk1lc3NhZ2U7XHJcbiAgICBAT3V0cHV0KCkgZWRpdENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSl7fVxyXG4gICAgb25FZGl0KCkge1xyXG4gICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UuZWRpdE1lc3NhZ2UodGhpcy5tZXNzYWdlKTtcclxuICAgIH1cclxuICAgIG9uRGVsZXRlKCkge1xyXG4gICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmRlbGV0ZU1lc3NhZ2UodGhpcy5tZXNzYWdlKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIG9uQmVsb25nVG9Vc2VyKCl7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSA9PSB0aGlzLm1lc3NhZ2UudXNlcklkXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgIHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSAnLi9tZXNzYWdlJztcclxuaW1wb3J0IHtNZXNzYWdlQ29tcG9uZW50fSBmcm9tICcuL21lc3NhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi9tZXNzYWdlLnNlcnZpY2UnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yIDogJ215LW1lc3NhZ2UtbGlzdCcsXHJcbiAgICBkaXJlY3RpdmVzIDogW01lc3NhZ2VDb21wb25lbnRdLFxyXG4gICAgdGVtcGxhdGUgOiBgXHJcbiAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cclxuICAgICAgICAgIDxteS1tZXNzYWdlICpuZ0Zvcj1cIiNtZXNzYWdlIG9mIG1lc3NhZ2VzXCIgW21lc3NhZ2VdID0gXCJtZXNzYWdlXCIgKGVkaXRDbGlja2VkKSA9IFwibWVzc2FnZS5jb250ZW50ID0gJGV2ZW50XCI+PC9teS1tZXNzYWdlPlxyXG4gICAgICAgPC9zZWN0aW9uPlxyXG4gICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKXt9XHJcbiAgICBtZXNzYWdlczogTWVzc2FnZVtdO1xyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5nZXRNZXNzYWdlcygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcyA9IG1lc3NhZ2VzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VzID0gbWVzc2FnZXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgIHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSAnLi9tZXNzYWdlJztcclxuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi9tZXNzYWdlLnNlcnZpY2UnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yIDogJ215LW1lc3NhZ2UtaW5wdXQnLFxyXG4gICAgdGVtcGxhdGUgOiBgXHJcbiAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cclxuICAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQoZi52YWx1ZSlcIiAjZj1cIm5nRm9ybVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJjb250ZW50XCI+Q29udGVudDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmdDb250cm9sPVwiY29udGVudFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJjb250ZW50XCIgI2lucHV0IFtuZ01vZGVsXT1cIm1lc3NhZ2U/LmNvbnRlbnRcIj5cclxuICAgICAgICA8YnV0dG9uICB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj57eyAhbWVzc2FnZSA/ICdTZW5kIG1lc3NhZ2UnIDogJ1NhdmUgTWVzc2FnZScgfX08L2J1dHRvbj5cclxuICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgKGNsaWNrKT1cIm9uQ2FuY2VsKClcIiAqbmdJZj1cIm1lc3NhZ2VcIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgPC9mb3JtPiAgICAgXHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSl7fVxyXG5cclxuICAgIG1lc3NhZ2U6TWVzc2FnZSA9IG51bGw7XHJcblxyXG4gIG9uU3VibWl0KGZvcm06YW55KXtcclxuXHJcbiAgICAgIGlmICh0aGlzLm1lc3NhZ2UpIHtcclxuICAgICAgICAgIHRoaXMubWVzc2FnZS5jb250ZW50ID0gZm9ybS5jb250ZW50O1xyXG4gICAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UudXBkYXRlTWVzc2FnZSh0aGlzLm1lc3NhZ2UpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxyXG4gICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhpcy5tZXNzYWdlID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2U6TWVzc2FnZSA9IG5ldyBNZXNzYWdlKGZvcm0uY29udGVudCwgbnVsbCwgJ0R1bW15Jyk7XHJcbiAgICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5hZGRNZXNzYWdlKG1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5tZXNzYWdlcy5wdXNoKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5tZXNzYWdlSXNFZGl0LnN1YnNjcmliZShcclxuICAgICAgICAgICAgbWVzc2FnZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gIH1cclxuXHJcbiAgICBvbkNhbmNlbCgpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBudWxsO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge01lc3NhZ2VMaXN0Q29tcG9uZW50fSBmcm9tICcuL21lc3NhZ2UtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge01lc3NhZ2VJbnB1dENvbXBvbmVudH0gZnJvbSAnLi9tZXNzYWdlLWlucHV0LmNvbXBvbmVudCc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1tZXNzYWdlcycsXHJcbiAgICBkaXJlY3RpdmVzOiBbTWVzc2FnZUxpc3RDb21wb25lbnQsIE1lc3NhZ2VJbnB1dENvbXBvbmVudF0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8bXktbWVzc2FnZS1pbnB1dD48L215LW1lc3NhZ2UtaW5wdXQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgIDxteS1tZXNzYWdlLWxpc3Q+PC9teS1tZXNzYWdlLWxpc3Q+XHJcbiAgICAgPC9kaXY+XHJcbiAgICAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlc0NvbXBvbmVudCB7XHJcblxyXG59IiwiZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGVtYWlsOnN0cmluZywgcHVibGljIHBhc3N3b3JkOnN0cmluZywgcHVibGljIGZpcnN0TmFtZT86c3RyaW5nLCBwdWJsaWMgbGFzdE5hbWU/OnN0cmluZykge1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7VXNlcn0gZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0IHtJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgIF9odHRwOkh0dHApIHtcclxuICAgIH1cclxuXHJcbiAgICBzaWdudXAodXNlcjpVc2VyKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHVzZXIpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyL2AsIGJvZHksIHtcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduaW4odXNlcjpVc2VyKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHVzZXIpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyL3NpZ25pbmAsIGJvZHksIHtcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICAgIH1cclxuICAgIGxvZ291dCgpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIGlzTG9nZ2VkSW4oKXtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgIT09IG51bGw7XHJcbiAgICB9XHJcbiAgICBcclxufSIsImltcG9ydCAge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtGb3JtQnVpbGRlciwgQ29udHJvbEdyb3VwLCBWYWxpZGF0b3JzLCBDb250cm9sfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi9hdXRoLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3IgOiAnc2lnbnVwLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZSA6IGBcclxuICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxyXG4gICAgICAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwibXlGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZpcnN0TmFtZVwiPkZpcnN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdmaXJzdE5hbWUnKVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmaXJzdE5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsYXN0TmFtZVwiPkxhc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2xhc3ROYW1lJylcIiBpZD1cImxhc3ROYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5NYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiAgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2VtYWlsJylcIiBpZD1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ3Bhc3N3b3JkJylcIiBpZD1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tZm9ybVwiIFtkaXNhYmxlZF09XCIhbXlGb3JtLnZhbGlkXCI+U2lnbiBVcDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnblVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgbXlGb3JtOiBDb250cm9sR3JvdXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6Rm9ybUJ1aWxkZXIsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlKSB7XHJcbiAgICB9XHJcbiAgICBvblN1Ym1pdCgpe1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcih0aGlzLm15Rm9ybS52YWx1ZS5lbWFpbCwgdGhpcy5teUZvcm0udmFsdWUucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLmZpcnN0TmFtZSwgdGhpcy5teUZvcm0udmFsdWUubGFzdE5hbWUpO1xyXG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnNpZ251cCh1c2VyKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgIGZpcnN0TmFtZSA6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgbGFzdE5hbWUgOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgIHRoaXMuaXNNYWlsXHJcbiAgICAgICAgICAgXSldLFxyXG4gICAgICAgICAgIHBhc3N3b3JkIDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc01haWwoY29udHJvbDpDb250cm9sKTp7W3M6c3RyaW5nXTpib29sZWFufSB7XHJcbiAgICAgICAgaWYgKCEvW2EtejAtOV0oWy1hLXowLTldezAsNjF9W2EtejAtOV0pP1xcLi8udGVzdChjb250cm9sLnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge2ludmFsaWRNYWlsOiB0cnVlfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCAge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0ICB7Um91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBDb250cm9sR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi91c2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzaWduaW4tY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cclxuICAgICAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwiU2lnbkluXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj4gICAgICAgICAgXHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+TWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgW25nRm9ybUNvbnRyb2xdPVwiU2lnbkluLmZpbmQoJ2VtYWlsJylcIiBpZD1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgIFtuZ0Zvcm1Db250cm9sXT1cIlNpZ25Jbi5maW5kKCdwYXNzd29yZCcpXCIgaWQ9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT1cIiFTaWduSW4udmFsaWRcIiBjbGFzcz1cImJ0biBidG4tZm9ybVwiPlNpZ24gVXA8L2J1dHRvbj5cclxuICAgICAgICAgPC9mb3JtPlxyXG4gICAgIDwvc2VjdGlvbj5cclxuICAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWduSW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgU2lnbkluOkNvbnRyb2xHcm91cDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjpGb3JtQnVpbGRlciwgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCgpIHtcclxuICAgICAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIodGhpcy5TaWduSW4udmFsdWUuZW1haWwsIHRoaXMuU2lnbkluLnZhbHVlLnBhc3N3b3JkKTtcclxuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5zaWduaW4odXNlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySWQnLCBkYXRhLnVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuU2lnbkluID0gdGhpcy5fZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSIsImltcG9ydCAge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbG9nb3V0LWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZSA6IGBcclxuICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxyXG4gICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiAoY2xpY2spPVwib25Mb2dvdXQoKVwiPkxvZ291dDwvYnV0dG9uPlxyXG4gICAgICAgPC9zZWN0aW9uPlxyXG4gICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ291dENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoU2VydmljZTpBdXRoU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOlJvdXRlcikge31cclxuICAgIG9uTG9nb3V0KCkge1xyXG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1NpZ25pbiddKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJ1xyXG5pbXBvcnQge1NpZ25VcENvbXBvbmVudH0gZnJvbSAnLi9zaWdudXAuY29tcG9uZW50JztcclxuaW1wb3J0IHtTaWduSW5Db21wb25lbnR9IGZyb20gJy4vc2lnbmluLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TG9nb3V0Q29tcG9uZW50fSBmcm9tICcuL2xvZ291dC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hdXRoJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAucm91dGVyLWxpbmstYWN0aXZlIHtcclxuICAgICAgICAgIGNvbG9yIDogIzU1NTtcclxuICAgICAgICAgIGN1cnNvciA6IGRlZmF1bHQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogI2ZmZjtcclxuICAgICAgICAgIGJvcmRlciA6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnRcclxuICAgICAgIH1cclxuICAgIGBdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgPGhlYWRlciBjbGFzcz1cInJvdyBzcGFjaW5nXCI+XHJcbiAgICAgIDxuYXYgY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cclxuICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCI+XHJcbiAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydTaWdudXAnXVwiPlNpZ24gdXA8L2E+PC9saT5cclxuICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ1NpZ25pbiddXCIgKm5nSWY9XCIhaXNMb2dnZWRJbigpXCI+U2lnbiBpbjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnTG9nb3V0J11cIiAqbmdJZj1cImlzTG9nZ2VkSW4oKVwiPkxvZ291dDwvYT48L2xpPlxyXG4gICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgc3BhY2luZ1wiPlxyXG4gICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PiAgICAgICBcclxuICAgICAgPC9kaXY+ICAgICBcclxuICAgIGBcclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuICAgICAgICB7cGF0aDogJy9zaWdudXAnLCBuYW1lOiAnU2lnbnVwJywgY29tcG9uZW50OiBTaWduVXBDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXHJcbiAgICAgICAge3BhdGg6ICcvc2lnbmluJywgbmFtZTogJ1NpZ25pbicsIGNvbXBvbmVudDogU2lnbkluQ29tcG9uZW50fSxcclxuICAgICAgICB7cGF0aDogJy9sb2dvdXQnLCBuYW1lOiAnTG9nb3V0JywgY29tcG9uZW50OiBMb2dvdXRDb21wb25lbnR9LFxyXG4gICAgXVxyXG4pXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkNvbXBvbmVudCB7XHJcbiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlKSB7fVxyXG4gICAgXHJcbiAgIGlzTG9nZ2VkSW4oKSB7XHJcbiAgICAgICByZXR1cm4gdGhpcy5fYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpXHJcbiAgIH1cclxufSIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tICcuL2hlYWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQge01lc3NhZ2VzQ29tcG9uZW50fSBmcm9tICcuL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QXV0aGVudGljYXRpb25Db21wb25lbnR9IGZyb20gJy4vYXV0aC9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtIZWFkZXJDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTXSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgPG15LWhlYWRlcj4gPC9teS1oZWFkZXI+XHJcbiAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD4gIFxyXG4gICAgICA8L2Rpdj4gICAgICAgXHJcbiAgICAgICBgXHJcbn0pXHJcblxyXG5AUm91dGVDb25maWcoW1xyXG4gICAgICAgIHtwYXRoOiAnLycsIG5hbWU6ICdNZXNzYWdlcycsIGNvbXBvbmVudDogTWVzc2FnZXNDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXHJcbiAgICB7cGF0aDogJy9hdXRoLy4uLicsIG5hbWU6ICdBdXRoJywgY29tcG9uZW50OiBBdXRoZW50aWNhdGlvbkNvbXBvbmVudH1cclxuICAgIF1cclxuKVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICAgXHJcbn0iLCIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XHJcbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcclxuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSBcIi4vbWVzc2FnZXMvbWVzc2FnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Uk9VVEVSX1BST1ZJREVSUywgTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3l9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuaW1wb3J0IHtwcm92aWRlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xyXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbTWVzc2FnZVNlcnZpY2UsIEF1dGhTZXJ2aWNlLCBST1VURVJfUFJPVklERVJTLCBwcm92aWRlKExvY2F0aW9uU3RyYXRlZ3ksIHt1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3l9KSwgSFRUUF9QUk9WSURFUlNdKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
