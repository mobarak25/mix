<template>
    <!--Start Modal -->
    <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered modal-xl companies-modal" role="document">
            <div class="modal-content">
                <div v-for="company in companies" :key="company.id" class="companies">
                    <div class="menu-close d-flex" data-dismiss="modal" aria-label="Close">
                        <a href="javascript:;">close</a>
                        <span class="line-1"></span>
                        <span class="line-2"></span>
                    </div>
                    <div class="companies-logo d-flex justify-content-center">
                        <a href="#">
                            <img :src="company.logo" alt="logo" />
                        </a>
                    </div>
                    <div class="companies-desc" v-html="company.desc"></div>

                    <div class="companies-project-box">
                        <div
                            v-for="project in company.projects"
                            :key="project.id"
                            class="companies-project-wrap"
                        >
                            <div class="companies-project">
                                <div class="companies-project-img">
                                    <img :src="project.img" alt="images" />
                                </div>
                                <div class="companies-project-info">
                                    <h3 v-text="project.title"></h3>
                                    <p v-text="project.desc"></p>
                                    <a :href="project.link">More view website</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="companies-btm d-flex flex-wrap justify-content-lg-between">
                        <a href="#">
                            <i class="icofont-bubble-left"></i>Back Home
                        </a>
                        <a href="#">
                            More view website
                            <i class="icofont-bubble-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            companies: [
                {
                    id: "1",
                    logo: "images/company-logo-1.png",
                    desc:
                        "<p>The Ceramics industry is a growing manufacturing sector in Bangladesh. The industry started during the late 1950s when the first ceramic industrial plants were established. Past 2 decades of economic growth in the country, resulted in growing demand for housing and infrastructures. Index seized the opportunity and expanded its wing to the Ceramics Tiles sector and incorporated it in 2008 with a vision to produce word class Italian Ceramics Tiles. A successful joint venture with Majorca, Italy, the benchmark of Italian tiles has helped the company to scale new heights. Majorca are true innovators of Italian tiles, their tiles reflect the Italian socio cultural heritage, emotion and passion. The dream was to excel in its field and provide best quality products that will gain popularity and trust of customers. The company lived up to that dream and today can boast to be one of the largest porcelain and ceramic tiles manufacturing company in Bangladesh.</p> <p> Under the umbrella of ‘X-Ceramics Limited’ three premium Tile brands in terms of both design and quality, are manufactured in state of the art plant.</p>",
                    projects: [
                        {
                            id: "1",
                            img: "images/project-1.png",
                            title: "Monica Ceramics",
                            desc:
                                "The VENUS range of exquisite tiles hail aristocracy, quality and innovation. Venus is a world class ceramics tiles, upholding porcelain philosophy and state-of-the-art research & design facilities.",
                            link: "www.x-ceramix.com",
                        },
                        {
                            id: "2",
                            img: "images/project-2.png",
                            title: "Monalisa Ceramics",
                            desc:
                                "X Monica is one of the premium tile brand in Bangladesh. The brand is known as a trend setter within the tile industry of BD. Since the inception in the year 2009, our motto of success has been continuous ‘Innovation, Product Quality and Service’.",
                            link: "www.x-ceramix.com",
                        },
                        {
                            id: "3",
                            img: "images/project-3.png",
                            title: "Alexander Ceramics",
                            desc:
                                "Alexander, the name which inspires through it’s style and elegance. Its a special brand of “X Ceramics”, which is part of the “X Index” Companies, a well known conglomerate of Bangladesh with high repute, existing from the year 1977.",
                            link: "www.x-ceramix.com",
                        },
                        {
                            id: "4",
                            img: "images/project-4.png",
                            title: "Venus Ceramics",
                            desc:
                                "X Monica is one of the premium tile brand in Bangladesh. The brand is known as a trend setter within the tile industry of BD. Since the inception in the year 2009, our motto of success has been continuous ‘Innovation, Product Quality and Service’.",
                            link: "www.x-ceramix.com",
                        },
                        {
                            id: "5",
                            img: "images/project-1.png",
                            title: "Stone Shield",
                            desc:
                                "Nunc ut libero vitae sapien feugiat congue quis ut nunc. Curabitur blandit efficitur mauris eu tempus. Duis metus nisl, dictum quis tellus sit amet, sollicitudin bibendum metus.Duis metus nisl, dictum quis tellus sit amet, sollicitudin bibendum metus.",
                            link: "www.x-ceramix.com",
                        },
                    ],
                },
            ],
        };
    },
};
</script>