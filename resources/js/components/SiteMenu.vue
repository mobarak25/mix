<template>
    <!-- Start Site Mega Menu -->
    <section class="site-menu">
        <div class="menu-top d-flex justify-content-between">
            <a href="index.html"><img src="images/logo.png" alt="Logo"></a>

            <div class="menu-close js-menu-close d-flex position-relative">
                <a href="javascript:;">close</a>
                <span class="line-1"></span>
                <span class="line-2"></span>
            </div>
        </div>

        <div class="menu-mid d-flex flex-wrap justify-content-between">
            <div class="menu-links order-2">
                <ul>
                    <li v-for="nav in navs" :key="nav.id" :class="{ 'has-child js-has-child': nav.hasChild}">
                        <a href="#">{{nav.name}} <i v-if="nav.hasChild" class="icofont-rounded-down"></i></a>
                        <ul v-if="nav.hasChild">
                            <li v-for="child in nav.childs" :key="child.id"><a href="">{{child.name}}</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="menu-contact order-1">
                <h3>Contact Info</h3>
                <div class="menu-contact-box">
                    <i class="icofont-home"></i>
                    <h4>Head Office</h4>
                    <address>MF Tower, Plot-ga-95/c, Pragati Sarani<br>
                        Gulshan 1 Link Road, Dhaka-1212, Bangladesh</address>
                </div>
                <div class="menu-contact-box">
                    <i class="icofont-phone"></i>
                    <h4>Call us</h4>
                    <a href="tel:+8802 9840 726">+8802 9840 726</a><br>
                    <a href="tel:+8802 5881 7175">+8802 5881 7175</a>
                </div>
                <div class="menu-contact-box">
                    <i class="icofont-paper-plane"></i>
                    <h4>Email Us</h4>
                    <a href="mailto:info@index-companies.com">info@index-companies.com</a>
                </div>
                <div class="send-query">
                    <a href="#" class="site-btn">Send Query
                        <i class="long-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>

        <div class="menu-btm">
            <div class="menu-btm-top text-center">
                <span>Companies<i class="icofont-rounded-down"></i></span>

            </div>

            <div class="menu-slider js-menu-slider">
                <div v-for="item in slider_items" :key="item.id" class="menu-slider-box" data-toggle="modal" data-target="#exampleModalCenter">
                    <div class="slideIn">
                        <img :src="img_url + '/' + item.url" alt="Item-1">
                        <div class="cover">
                            <i>&nbsp;</i>
                            <h3>{{item.title}}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="menu-social d-flex flex-wrap flex-column text-center">
            <div class="site-social">
                <a href="#"><i class="icofont-facebook"></i></a>
                <a href="#"><i class="icofont-youtube"></i></a>
                <a href="#"><i class="icofont-twitter"></i></a>
            </div>
            <span>Follow us</span>
        </div>


    </section>
</template>

<script>
    export default {

        data(){
            return {
                img_url:'images',
                navs: [
                    {id:1, name:'Home', hasChild:false},
                    {id:2, name:'About Us', hasChild:false},
                    {id:3, name:'Board Of Directors', hasChild:false},
                    {id:4, name:'Companies', hasChild:true,
                        childs:[
                            {id:1, name:'X Monica'},
                            {id:2, name:'X Monalisa'},
                            {id:3, name:'X Alexander'},
                            {id:4, name:'X Monica'},
                            {id:5, name:'X Monalisa'},
                            {id:6, name:'X Alexander'}
                        ]
                    },
                    {id:5, name:'Publications', hasChild:false},
                    {id:6, name:'Career', hasChild:false},
                    {id:7, name:'Contact us', hasChild:false},
                ],
                
                slider_items:[
                    {id:1, title:'Hospitality',url:'slider-1.jpg'},
                    {id:2, title:'Hospitality',url:'slider-2.jpg'},
                    {id:3, title:'Hospitality',url:'slider-3.jpg'},
                    {id:4, title:'Hospitality',url:'slider-4.jpg'},
                    {id:5, title:'Hospitality',url:'slider-5.jpg'},
                    {id:6, title:'Hospitality',url:'slider-6.jpg'},
                    {id:7, title:'Hospitality',url:'slider-2.jpg'},
                    {id:8, title:'Hospitality',url:'slider-5.jpg'},
                    {id:9, title:'Hospitality',url:'slider-6.jpg'},
                ],
            }
        }
    }
</script>