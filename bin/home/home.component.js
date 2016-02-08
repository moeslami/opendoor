System.register(['angular2/core', '../shared/topnav.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, topnav_component_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (topnav_component_1_1) {
                topnav_component_1 = topnav_component_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                    this.loginTitle = 'Welcome Mohammad!!!';
                    this.hero = {
                        id: 1,
                        name: 'Windstorm'
                    };
                }
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        template: "\n      <top-nav></top-nav>\n\n      <!-- Header Carousel -->\n      \t\t<header id=\"home\" class=\"carousel slide\">\n      \t\t\t<ul class=\"cb-slideshow\">\n      \t\t\t\t<li><span>image1</span>\n      \t\t\t\t\t<div class=\"container\">\n      \t\t\t\t\t\t<div class=\"row\">\n      \t\t\t\t\t\t\t<div class=\"col-lg-12\">\n      \t\t\t\t\t\t\t\t<div class=\"text-center\"><h3>SMART BUSINESS SOLUTIONS!</h3></div>\n      \t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t</div>\n      \t\t\t\t\t\t<h4>PATROS \u2013 Free HTML5/CSS3 Responsive Website Template.</h4>\n      \t\t\t\t\t</div>\n      \t\t\t\t</li>\n      \t\t\t\t<li><span>image2</span>\n      \t\t\t\t\t<div class=\"container\">\n      \t\t\t\t\t\t<div class=\"row\">\n      \t\t\t\t\t\t\t<div class=\"col-lg-12\">\n      \t\t\t\t\t\t\t\t<div class=\"text-center\"><h3>PREMIUM CREATIVE CONTENT!</h3></div>\n      \t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t</div>\n      \t\t\t\t\t\t<h4>Lorem Ipsum is simply dummy text of typesetting industry.</h4>\n      \t\t\t\t\t</div>\n      \t\t\t\t</li>\n      \t\t\t\t<li><span>image3</span>\n      \t\t\t\t\t<div class=\"container\">\n      \t\t\t\t\t\t<div class=\"row\">\n      \t\t\t\t\t\t\t<div class=\"col-lg-12\">\n      \t\t\t\t\t\t\t\t<div class=\"text-center\"><h3>UNIQUE DESIGN!</h3></div>\n      \t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t</div>\n      \t\t\t\t\t\t<h4>Lorem Ipsum is simply dummy text of typesetting industry.</h4>\n      \t\t\t\t\t</div>\n      \t\t\t\t</li>\n      \t\t\t\t<li><span>Image 04</span>\n      \t\t\t\t\t<div class=\"container\">\n      \t\t\t\t\t\t<div class=\"row\">\n      \t\t\t\t\t\t\t<div class=\"col-lg-12\">\n      \t\t\t\t\t\t\t\t<div class=\"text-center\"><h3>WEB AND GRAPHICS DESIGN</h3></div>\n      \t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t</div>\n      \t\t\t\t\t\t<h4>Lorem Ipsum is simply dummy text of typesetting industry.</h4>\n      \t\t\t\t\t</div>\n      \t\t\t\t</li>\n      \t\t\t\t<li><span>Image 05</span>\n      \t\t\t\t\t<div class=\"container\">\n      \t\t\t\t\t\t<div class=\"row\">\n      \t\t\t\t\t\t\t<div class=\"col-lg-12\">\n      \t\t\t\t\t\t\t\t<div class=\"text-center\"><h3>DIGITAL MARKETING SOLUTIONS</h3></div>\n      \t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t</div>\n      \t\t\t\t\t\t<h4>Lorem Ipsum is simply dummy text of typesetting industry.</h4>\n      \t\t\t\t\t</div>\n      \t\t\t\t</li>\n      \t\t\t\t<li><span>Image 06</span>\n      \t\t\t\t\t<div class=\"container\">\n      \t\t\t\t\t\t<div class=\"row\">\n      \t\t\t\t\t\t\t<div class=\"col-lg-12\">\n      \t\t\t\t\t\t\t\t<div class=\"text-center\"><h3>SEARCH ENGINE OPTIMIZATION!</h3></div>\n      \t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t</div>\n      \t\t\t\t\t\t<h4>Lorem Ipsum is simply dummy text of typesetting industry.</h4>\n      \t\t\t\t\t</div>\n      \t\t\t\t</li>\n      \t\t\t</ul>\n      \t\t\t<div class=\"intro-scroller\">\n      \t\t\t\t<a class=\"inner-link\" href=\"#about\">\n      \t\t\t\t\t<div class=\"mouse-icon\" style=\"opacity: 1;\">\n      \t\t\t\t\t\t<div class=\"wheel\"></div>\n      \t\t\t\t\t</div>\n      \t\t\t\t</a> \n      \t\t\t</div>          \n      \t\t</header>\n\t\t\t\t\n      \t\t<!-- Page Content -->\n      \t\t<section id=\"about\">\n      \t\t\t<div class=\"container\">\n      \t\t\t\t<div class=\"row\">\n      \t\t\t\t\t<div class=\"col-md-offset-1 col-md-10\">\n      \t\t\t\t\t\t<div class=\"text-center\">\n      \t\t\t\t\t\t\t<h2>About Us</h2>\n      \t\t\t\t\t\t\t<img class=\"img-responsive displayed\" src=\"images/short.png\" alt=\"Company about\"/>\n      \t\t\t\t\t\t\t<div class=\"row\">\n      \t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n      \t\t\t\t\t\t\t\t\t<p>\n      \t\t\t\t\t\t\t\t\tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. It has survived not only five centuries, but also the leap into electronic typesetting, remaining <span class=\"color-elements\">essentially unchanged.</span>\n      \t\t\t\t\t\t\t\t\t</p>\n      \t\t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t</div>\n      \t\t\t\t\t</div>\n      \t\t\t\t</div>\n      \t\t\t</div>\n      \t\t</section>\n\n      \t\t<section id=\"services\">\n      \t\t\t<div class=\"orangeback\">\n      \t\t\t\t<div class=\"container\">\n      \t\t\t\t\t<div class=\"text-center homeport2\"><h2>Services</h2></div>\n      \t\t\t\t\t<div class=\"row\">\n      \t\t\t\t\t\t<div class=\"col-md-12 homeservices1\">\n      \t\t\t\t\t\t\t<div class=\"col-md-3 portfolio-item\">\n      \t\t\t\t\t\t\t\t<div class=\"text-center\">\n      \t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\">\n      \t\t\t\t\t\t\t\t\t<span class=\"fa-stack fa-lg\">\n      \t\t\t\t\t\t\t\t\t  <i class=\"fa fa-circle fa-stack-2x\"></i>\n      \t\t\t\t\t\t\t\t\t  <i class=\"fa fa-line-chart fa-stack-1x\"></i>\n      \t\t\t\t\t\t\t\t\t</span>\n      \t\t\t\t\t\t\t\t\t</a>\n      \t\t\t\t\t\t\t\t\t<h3><a href=\"#\">Strategy</a></h3>\n      \t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      \t\t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t<div class=\"col-md-3 portfolio-item\">\n      \t\t\t\t\t\t\t\t<div class=\"text-center\">\n      \t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\">\n      \t\t\t\t\t\t\t\t\t<span class=\"fa-stack fa-lg\">\n      \t\t\t\t\t\t\t\t\t  <i class=\"fa fa-circle fa-stack-2x\"></i>\n      \t\t\t\t\t\t\t\t\t  <i class=\"fa fa-users fa-stack-1x\"></i>\n      \t\t\t\t\t\t\t\t\t</span>\n      \t\t\t\t\t\t\t\t\t</a>\n      \t\t\t\t\t\t\t\t\t<h3><a href=\"#\">User Friendly</a></h3>\n      \t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      \t\t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t<div class=\"col-md-3 portfolio-item\">\n      \t\t\t\t\t\t\t\t<div class=\"text-center\">\n      \t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\">\n      \t\t\t\t\t\t\t\t\t<span class=\"fa-stack fa-lg\">\n      \t\t\t\t\t\t\t\t\t  <i class=\"fa fa-circle fa-stack-2x\"></i>\n      \t\t\t\t\t\t\t\t\t  <i class=\"fa fa-code fa-stack-1x\"></i>\n      \t\t\t\t\t\t\t\t\t</span>\n      \t\t\t\t\t\t\t\t\t</a>\n      \t\t\t\t\t\t\t\t\t<h3><a href=\"#\">Clean Code</a></h3>\n      \t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      \t\t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t<div class=\"col-md-3 portfolio-item\">\n      \t\t\t\t\t\t\t\t<div class=\"text-center\">\n      \t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\">\n      \t\t\t\t\t\t\t\t\t<span class=\"fa-stack fa-lg\">\n      \t\t\t\t\t\t\t\t\t  <i class=\"fa fa-circle fa-stack-2x\"></i>\n      \t\t\t\t\t\t\t\t\t  <i class=\"fa fa-cogs fa-stack-1x\"></i>\n      \t\t\t\t\t\t\t\t\t</span>\n      \t\t\t\t\t\t\t\t\t</a>\n      \t\t\t\t\t\t\t\t\t<h3><a href=\"#\">Flexibility</a></h3>\n      \t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      \t\t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t</div>\n      \t\t\t\t\t</div>\n      \t\t\t\t</div>\n      \t\t\t</div>\n      \t\t</section>\n\n      \t\t<section id=\"bloghome\">\n      \t\t\t<div class=\"container\">\n      \t\t\t\t<div class=\"text-center\"><h2>Latest Blog Posts</h2>\n      \t\t\t\t\t<img class=\"img-responsive displayed\" src=\"images/short.png\" alt=\"about\">\n      \t\t\t\t</div>\n      \t\t\t\t<div class=\"row\">\n      \t\t\t\t\t<div class=\"col-md-12 homeport1\">\n      \t\t\t\t\t\t<div class=\"col-md-4 col-sm-12 col-xs-12 portfolio-item\">\n      \t\t\t\t\t\t\t<figure class=\"effect-oscar\">\n      \t\t\t\t\t\t\t\t<img src=\"images/blog1.jpg\" alt=\"img09\" class=\"img-responsive\" />\n      \t\t\t\t\t\t\t\t<figcaption>\n      \t\t\t\t\t\t\t\t\t<h2>Blog Post Long Title</h2>\n      \t\t\t\t\t\t\t\t\t<a href=\"#\">View more</a>\n      \t\t\t\t\t\t\t\t</figcaption>           \n      \t\t\t\t\t\t\t</figure>\n      \t\t\t\t\t\t\t<p class=\"text-center\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet.</p>\n      \t\t\t\t\t\t\t<div class=\"text-center\"><a class=\"btn btn-primary btn-noborder-radius hvr-bounce-to-bottom\">Read More</a></div>\n      \t\t\t\t\t\t</div>\n      \t\t\t\t\t\t<div class=\"col-md-4 col-sm-12 col-xs-12 portfolio-item\">\n      \t\t\t\t\t\t\t<figure class=\"effect-oscar\">\n      \t\t\t\t\t\t\t\t<img src=\"images/blog2.jpg\" alt=\"img09\" class=\"img-responsive\"/>\n      \t\t\t\t\t\t\t\t<figcaption>\n      \t\t\t\t\t\t\t\t\t<h2>Blog Post Long Title</h2>\n      \t\t\t\t\t\t\t\t\t<a href=\"#\">View more</a>\n      \t\t\t\t\t\t\t\t</figcaption>           \n      \t\t\t\t\t\t\t</figure>\n      \t\t\t\t\t\t\t<p class=\"text-center\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet.</p>\n      \t\t\t\t\t\t\t<div class=\"text-center\"><a class=\"btn btn-primary btn-noborder-radius hvr-bounce-to-bottom\">Read More</a></div>\n      \t\t\t\t\t\t</div>\n      \t\t\t\t\t\t<div class=\"col-md-4 col-sm-12 col-xs-12 portfolio-item\">\n      \t\t\t\t\t\t\t<figure class=\"effect-oscar\">\n      \t\t\t\t\t\t\t\t<img src=\"images/blog3.jpg\" alt=\"img09\" class=\"img-responsive\"/>\n      \t\t\t\t\t\t\t\t<figcaption>\n      \t\t\t\t\t\t\t\t\t<h2>Blog Post Long Title</h2>\n      \t\t\t\t\t\t\t\t\t<a href=\"#\">View more</a>\n      \t\t\t\t\t\t\t\t</figcaption>           \n      \t\t\t\t\t\t\t</figure>\n      \t\t\t\t\t\t\t<p class=\"text-center\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet.</p>\n      \t\t\t\t\t\t\t<div class=\"text-center\"><a class=\"btn btn-primary btn-noborder-radius hvr-bounce-to-bottom\">Read More</a></div>\n      \t\t\t\t\t\t</div>\n      \t\t\t\t\t</div>\n      \t\t\t\t</div>\n      \t\t\t</div>\n      \t\t</section>\n\n      \t\t<section id=\"meet-team\">\n      \t\t\t<div class=\"container\">\n      \t\t\t\t<div class=\"text-center\">\n      \t\t\t\t<h2>Team Members</h2>\n      \t\t\t\t<img class=\"img-responsive displayed\" src=\"images/short.png\" alt=\"about\">\n      \t\t\t\t</div>\n      \t\t\t\t<div class=\"row teamspace\">\n      \t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-3\">\n      \t\t\t\t\t\t<div class=\"team-member\">\n      \t\t\t\t\t\t\t<div class=\"team-img\">\n      \t\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"images/person1.jpg\" alt=\"\">\n      \t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t<div class=\"team-info\">\n      \t\t\t\t\t\t\t\t<h3>Christian Peri</h3>\n      \t\t\t\t\t\t\t\t<span>Co-Founder</span>\n      \t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t<p>Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater</p>\n      \t\t\t\t\t\t\t<ul class=\"social-icons\">\n      \t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n      \t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n      \t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n      \t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n      \t\t\t\t\t\t\t</ul>\n      \t\t\t\t\t\t</div>\n      \t\t\t\t\t</div>\n      \t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-3\">\n      \t\t\t\t\t\t<div class=\"team-member\">\n      \t\t\t\t\t\t\t<div class=\"team-img\">\n      \t\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"images/person1.jpg\" alt=\"\">\n      \t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t<div class=\"team-info\">\n      \t\t\t\t\t\t\t\t<h3>Jane Manz</h3>\n      \t\t\t\t\t\t\t\t<span>Project Manager</span>\n      \t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t<p>Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater</p>\n      \t\t\t\t\t\t\t<ul class=\"social-icons\">\n      \t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n      \t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n      \t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n      \t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n      \t\t\t\t\t\t\t</ul>\n      \t\t\t\t\t\t</div>\n      \t\t\t\t\t</div>\n      \t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-3\">\n      \t\t\t\t\t\t<div class=\"team-member\">\n      \t\t\t\t\t\t\t<div class=\"team-img\">\n      \t\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"images/person1.jpg\" alt=\"\">\n      \t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t<div class=\"team-info\">\n      \t\t\t\t\t\t\t\t<h3>Paulinho Rubos</h3>\n      \t\t\t\t\t\t\t\t<span>Designer</span>\n      \t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t<p>Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater</p>\n      \t\t\t\t\t\t\t<ul class=\"social-icons\">\n      \t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n      \t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n      \t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n      \t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n      \t\t\t\t\t\t\t</ul>\n      \t\t\t\t\t\t</div>\n      \t\t\t\t\t</div>\n      \t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-3\">\n      \t\t\t\t\t\t<div class=\"team-member\">\n      \t\t\t\t\t\t\t<div class=\"team-img\">\n      \t\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"images/person1.jpg\" alt=\"\">\n      \t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t<div class=\"team-info\">\n      \t\t\t\t\t\t\t\t<h3>Loreto Andas</h3>\n      \t\t\t\t\t\t\t\t<span>Developer</span>\n      \t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t<p>Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater</p>\n      \t\t\t\t\t\t\t<ul class=\"social-icons\">\n      \t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n      \t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n      \t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n      \t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n      \t\t\t\t\t\t\t</ul>\n      \t\t\t\t\t\t</div>\n      \t\t\t\t\t</div>\n      \t\t\t\t</div>\n      \t\t\t</div>\n      \t\t</section>\n\n\n      \t\t<section id=\"portfolio1\">\n      \t\t<div class=\"container\">\n      \t\t<div class=\"row\">\n      \t\t\t<div class=\"text-center\">\n      \t\t\t<h2>Portfolio</h2>\n      \t\t\t<img class=\"img-responsive displayed\" src=\"images/short.png\" alt=\"about\">\n      \t\t\t</div>\n\n      \t\t\t<ul class=\"filter nav nav-pills\">\n      \t\t\t  <li data-value=\"all\" ><a class=\"active\" href=\"#\">All</a></li>\n      \t\t\t  <li data-value=\"development\"><a href=\"#\">Development</a></li>\n      \t\t\t  <li data-value=\"webdesign\"><a href=\"#\">Web Design</a></li>\n      \t\t\t  <li data-value=\"mobileapps\"><a href=\"#\">Mobile Apps</a></li>\n      \t\t\t</ul>\n \n      \t\t\t<ul class=\"port2\">\n      \t\t\t  <li data-type=\"development\" data-id=\"id-1\" class=\"port3\">\n      \t\t\t\t<a href=\"#\" id=\"development1\"><img src=\"images/port1.jpg\" alt=\"\"></a></li>\n      \t\t\t  <li data-type=\"webdesign\" data-id=\"id-2\" class=\"port3\">\n      \t\t\t\t<a href=\"#\" id=\"webdesign1\"><img src=\"images/port2.jpg\" alt=\"\"></a>\n      \t\t\t  </li>\n      \t\t\t  <li data-type=\"mobileapps\" data-id=\"id-3\" class=\"port3\">\n      \t\t\t\t<a href=\"#\" id=\"mobileapps1\"><img src=\"images/port3.jpg\" alt=\"\"></a>\n      \t\t\t  </li>\n      \t\t\t\t<li data-type=\"development\" data-id=\"id-4\" class=\"port3\">\n      \t\t\t\t<a href=\"#\" id=\"development2\"><img src=\"images/port4.jpg\" alt=\"\"></a>\n      \t\t\t  </li>\n      \t\t\t  <li data-type=\"webdesign\" data-id=\"id-5\" class=\"port3\">\n      \t\t\t\t<a href=\"#\" id=\"webdesign2\"><img src=\"images/port5.jpg\" alt=\"\"></a>\n      \t\t\t  </li>\n      \t\t\t  <li data-type=\"mobileapps\" data-id=\"id-6\" class=\"port3\">\n      \t\t\t\t<a href=\"#\" id=\"mobileapps2\"><img src=\"images/port6.jpg\" alt=\"\"></a>\n      \t\t\t  </li>\n      \t\t\t</ul>\n      \t\t  </div> \n      \t\t</div>\n      \t\t</section>\n\n      \t\t<div id=\"location\">\n      \t\t\t<div class=\"row prodmap\">\n      \t\t\t\t<div id=\"map-canvas-holder\" class=\"map_holder\" style=\"height: 400px;\"></div>\n      \t\t\t</div>\n      \t\t</div>\n\n      \t\t<section id=\"contact\">\n      \t\t\t<div class=\"container\"> \n      \t\t\t\t<div class=\"row\">\n      \t\t\t\t\t<div class=\"col-md-12\">\n      \t\t\t\t\t\t<div class=\"col-lg-12\">\n      \t\t\t\t\t\t\t<div class=\"text-center color-elements\">\n      \t\t\t\t\t\t\t<h2>Contact Us</h2>\n      \t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t</div>\n      \t\t\t\t\t\t<div class=\"col-lg-6 col-md-8\">\n      \t\t\t\t\t\t\t<form class=\"inline\" id=\"contactForm\" method=\"post\" >\n      \t\t\t\t\t\t\t\t<div class=\"row\">\n      \t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 height-contact-element\">\n      \t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n      \t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"first_name\" class=\"form-control custom-labels\" id=\"name\" placeholder=\"FULL NAME\" required data-validation-required-message=\"Please write your name!\"/>\n      \t\t\t\t\t\t\t\t\t\t\t<p class=\"help-block text-danger\"></p>\n      \t\t\t\t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 height-contact-element\">\n      \t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n      \t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" name=\"email\" class=\"form-control custom-labels\" id=\"email\" placeholder=\"EMAIL\" required data-validation-required-message=\"Please write your email!\"/>\n      \t\t\t\t\t\t\t\t\t\t\t<p class=\"help-block text-danger\"></p>\n      \t\t\t\t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 height-contact-element\">\n      \t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n      \t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"message\" class=\"form-control custom-labels\" id=\"message\" placeholder=\"WHAT'S ON YOUR MIND\" required data-validation-required-message=\"Please write a message!\"/>\n      \t\t\t\t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t\t\t<div class=\"col-sm-3 col-xs-6 height-contact-element\">\n      \t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n      \t\t\t\t\t\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-md btn-custom btn-noborder-radius\" value=\"Send It\"/>\n      \t\t\t\t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t\t\t<div class=\"col-sm-3 col-xs-6 height-contact-element\">\n      \t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n      \t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-md btn-noborder-radius btn-custom\" name=\"reset\">RESET\n      \t\t\t\t\t\t\t\t\t\t\t</button>\n      \t\t\t\t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t\t\t<div class=\"col-sm-3 col-xs-6 height-contact-element\">\n      \t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n      \t\t\t\t\t\t\t\t\t\t\t<div id=\"response_holder\"></div>\n      \t\t\t\t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 contact-msg\">\n      \t\t\t\t\t\t\t\t\t<div id=\"success\"></div>\n      \t\t\t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t</form>\n      \t\t\t\t\t\t</div>\n      \t\t\t\t\t\t<div class=\"col-lg-5 col-md-3 col-lg-offset-1 col-md-offset-1\">\n      \t\t\t\t\t\t\t<div class=\"row\">\n      \t\t\t\t\t\t\t\t<div class=\"col-md-12 height-contact-element\">\n      \t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n      \t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-2x fa-map-marker\"></i>\n      \t\t\t\t\t\t\t\t\t\t<span class=\"text\">LOCATION</span>\n      \t\t\t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t\t<div class=\"col-md-12 height-contact-element\">\n      \t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n      \t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-2x fa-phone\"></i>\n      \t\t\t\t\t\t\t\t\t\t<span class=\"text\">0051 768622115</span>\n      \t\t\t\t\t\t\t\t\t </div>\n      \t\t\t\t\t\t\t\t </div>\n      \t\t\t\t\t\t\t\t<div class=\"col-md-12 height-contact-element\">    \n      \t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n      \t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-2x fa-envelope\"></i>\n      \t\t\t\t\t\t\t\t\t\t<span class=\"text\">info@company.com</span>\n      \t\t\t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t</div>\n      \t\t\t\t\t\t</div>\n      \t\t\t\t\t</div>\n      \t\t\t\t</div>\n      \t\t\t</div>\n      \t\t</section>\n\n      \t\t<section id=\"follow-us\">\n      \t\t\t<div class=\"container\"> \n      \t\t\t\t<div class=\"text-center height-contact-element\">\n      \t\t\t\t\t<h2>FOLLOW US</h2>\n      \t\t\t\t</div>\n      \t\t\t\t<img class=\"img-responsive displayed\" src=\"images/short.png\" alt=\"short\" />\n      \t\t\t\t<div class=\"text-center height-contact-element\">\n      \t\t\t\t\t<ul class=\"list-unstyled list-inline list-social-icons\">\n      \t\t\t\t\t\t<li class=\"active\"><a href=\"#\"><i class=\"fa fa-facebook social-icons\"></i></a></li>\n      \t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-twitter social-icons\"></i></a></li>\n      \t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-google-plus social-icons\"></i></a></li>\n      \t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-linkedin social-icons\"></i></a></li>\n      \t\t\t\t\t</ul>\n      \t\t\t\t</div>\n      \t\t\t</div>\n      \t\t</section>\n\n      \t\t<footer id=\"footer\">\n      \t\t\t<div class=\"container\">\n      \t\t\t\t<div class=\"row myfooter\">\n      \t\t\t\t\t<div class=\"col-sm-6\"><div class=\"pull-left\">\n      \t\t\t\t\t\u00A9 Copyright Company 2015 | <a href=\"#\">Privacy Policy</a> | <a href=\"#\">Terms of Use</a>\n      \t\t\t\t\t</div></div>\n      \t\t\t\t\t<div class=\"col-sm-6\">\n      \t\t\t\t\t\t<div class=\"pull-right\">Designed by <a href=\"http://www.atis.al\">ATIS</a></div>\n      \t\t\t\t\t</div>\n      \t\t\t\t</div>\n      \t\t\t</div>\n      \t\t</footer>\n    ",
                        directives: [topnav_component_1.TopNavComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            })();
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
