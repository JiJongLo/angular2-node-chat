var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("app.component", ['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.message = {
                        author: 'Пушкин Иван Васильович',
                        content: 'Здорова Бояре'
                    };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div class=\"row\">\n      <section class=\"col-md-8 col-md-offset-2\">\n        <input type=\"text\" [(ngModel)] = \"message.content\">\n      </section>\n    </div>\n    <div class=\"row\">\n      <section class=\"col-md-8 col-md-offset-2\">\n           <article class=\"panel panel-default\">\n              <div class=\"panel-body\">\n                {{message.content}}\n              </div>\n           </article>\n      \n             <footer class=\"panel-footer\">\n                 <div class=\"author\">\n                     {{message.author}}\n                 </div>\n                 <div class=\"config\">\n                    <a href=\"#\">Edit</a>\n                    <a href=\"#\">Delete</a>\n                 </div>\n             </footer>\n        </section>\n     </div>\n       ",
                        styles: [
                            "\n        .author {\n         display : inline-block;\n         font-style : italic;\n         font-size : 12px;\n         width : 80%\n        }\n        .config {\n         display: inline-block;\n         text-align : right;\n         font-size : 12px;\n         width : 19%\n        }\n      "
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBOENBO2dCQUFBO29CQUNDLFlBQU8sR0FBSTt3QkFDUCxNQUFNLEVBQUcsd0JBQXdCO3dCQUNqQyxPQUFPLEVBQUcsZUFBZTtxQkFFNUIsQ0FBQTtnQkFDRixDQUFDO2dCQW5ERDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsMHlCQXlCTjt3QkFDSixNQUFNLEVBQUc7NEJBQ0wsMFNBYUQ7eUJBQ0Y7cUJBQ0osQ0FBQzs7Z0NBQUE7Z0JBT0YsbUJBQUM7WUFBRCxDQU5BLEFBTUMsSUFBQTtZQU5ELHVDQU1DLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDaERELG1CQUFTLENBQUMsNEJBQVksQ0FBQyxDQUFDIiwiZmlsZSI6Ii4uLy4uLy4uL2FuZ3VsYXIvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV0gPSBcIm1lc3NhZ2UuY29udGVudFwiPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgIHt7bWVzc2FnZS5jb250ZW50fX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIFxuICAgICAgICAgICAgIDxmb290ZXIgY2xhc3M9XCJwYW5lbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvclwiPlxuICAgICAgICAgICAgICAgICAgICAge3ttZXNzYWdlLmF1dGhvcn19XG4gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZmlnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+RWRpdDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5EZWxldGU8L2E+XG4gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgIDwvZGl2PlxuICAgICAgIGAsXG4gICAgc3R5bGVzIDogW1xuICAgICAgICBgXG4gICAgICAgIC5hdXRob3Ige1xuICAgICAgICAgZGlzcGxheSA6IGlubGluZS1ibG9jaztcbiAgICAgICAgIGZvbnQtc3R5bGUgOiBpdGFsaWM7XG4gICAgICAgICBmb250LXNpemUgOiAxMnB4O1xuICAgICAgICAgd2lkdGggOiA4MCVcbiAgICAgICAgfVxuICAgICAgICAuY29uZmlnIHtcbiAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgIHRleHQtYWxpZ24gOiByaWdodDtcbiAgICAgICAgIGZvbnQtc2l6ZSA6IDEycHg7XG4gICAgICAgICB3aWR0aCA6IDE5JVxuICAgICAgICB9XG4gICAgICBgXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuIG1lc3NhZ2UgID0ge1xuICAgICBhdXRob3IgOiAn0J/Rg9GI0LrQuNC9INCY0LLQsNC9INCS0LDRgdC40LvRjNC+0LLQuNGHJyxcbiAgICAgY29udGVudCA6ICfQl9C00L7RgNC+0LLQsCDQkdC+0Y/RgNC1J1xuXG4gfVxufSIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyMi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
