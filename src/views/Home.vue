<template>
  <div>
    <section class="home">
      <!-- <div class="scene"></div>
      <div class="overlay"></div> -->
      <div class="overlay"></div>
      <div class="home__info">
        <h3>Moitas Cars - Stand automóvel em Vila Nova de Gaia</h3>

        <!-- <hr /> -->

        <p>O seu novo carro é especial.</p>

        <!-- <button>Sobre Nós</button> -->
      </div>
      <!-- <div class="home__scroll_down flex flex-fd-c flex-ai-c">
        <p>Scroll down</p>
        <i class="fas fa-chevron-down"></i>
      </div> -->
    </section>
    <section class="services">
      <SubTitle title="Os nossos serviços" class="hide-for-desktop" />
      <div class="services__grid grid">
        <ServicesCard
          v-for="i in 3"
          :key="i"
          title="Venda de carros"
          content="Vendemos carros há mais de 26 anos."
        />
      </div>
    </section>
    <section class="cars">
      <SubTitle title="Carros à venda" class="light" />
      <div class="cars__grid grid show-above-phone">
        <CarsCard
          v-for="i in 3"
          :key="i"
          :index="i"
          :card_id="`card${i}`"
          url="https://www.hyundai.com/content/hyundai/ww/data/news/data/2021/0000016609/image/newsroom-0112-photo-1-2021elantranline-1120x745.jpg"
          v-bind:price="50000"
          brand="Hyundai"
          model="Elantra"
          date="01/03/2021"
          month="janeiro"
          :year="2018"
          :km="15236"
          :power="123"
          extras="Colunas JBL, nitro e acentos estufados."
        />
      </div>
      <div class="cars__grid__large grid hide-for-phone">
        <CarsCard
          v-for="i in 3"
          :key="i"
          :index="i"
          :card_id="`card${i}`"
          url="https://www.hyundai.com/content/hyundai/ww/data/news/data/2021/0000016609/image/newsroom-0112-photo-1-2021elantranline-1120x745.jpg"
          v-bind:price="50000"
          brand="Hyundai"
          model="Elantra"
          date="01/03/2021"
          month="janeiro"
          :year="2018"
          :km="15236"
          :power="123"
          extras="Colunas JBL, nitro e acentos estufados  nitro e acentos estufados."
        />
      </div>
      <router-link class="cars__button flex flex-jc-c" :to="{ name: 'Cars' }"
        >Ver mais carros
      </router-link>
    </section>
    <section class="testimonials">
      <SubTitle title="O que dizem sobre nós" />
      <vue-glide
        v-if="loadedData"
        :startAt="0"
        :gap="40"
        :breakpoints="{
          450: {
            perView: 1
          },
          768: {
            perView: 2
          },
          1024: {
            perView: 2
          },
          1300: {
            perView: 3
          }
        }"
        :rewind="false"
        :bound="true"
        :infinite="false"
      >
        <vue-glide-slide
          v-for="review in testimonials"
          :key="review.id_testimonial"
        >
          <TestimonialCard
            :content="review.testimonial_text"
            :name="review.person_name"
        /></vue-glide-slide>
        <template slot="control">
          <button data-glide-dir="<">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400.004 400.004"
              class="left__arrow"
            >
              <path
                d="M382.688 182.686H59.116l77.209-77.214c6.764-6.76 6.764-17.726 0-24.485-6.764-6.764-17.73-6.764-24.484 0L5.073 187.757c-6.764 6.76-6.764 17.727 0 24.485l106.768 106.775a17.252 17.252 0 0012.242 5.072c4.43 0 8.861-1.689 12.242-5.072 6.764-6.76 6.764-17.726 0-24.484l-77.209-77.218h323.572c9.562 0 17.316-7.753 17.316-17.315 0-9.562-7.753-17.314-17.316-17.314z"
              ></path>
            </svg>
          </button>
          <button data-glide-dir=">">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 268.832 268.832"
              class="right__arrow"
            >
              <path
                d="M265.171 125.577l-80-80c-4.881-4.881-12.797-4.881-17.678 0-4.882 4.882-4.882 12.796 0 17.678l58.661 58.661H12.5c-6.903 0-12.5 5.597-12.5 12.5 0 6.902 5.597 12.5 12.5 12.5h213.654l-58.659 58.661c-4.882 4.882-4.882 12.796 0 17.678 2.44 2.439 5.64 3.661 8.839 3.661s6.398-1.222 8.839-3.661l79.998-80c4.882-4.882 4.882-12.796 0-17.678z"
              ></path>
            </svg>
          </button>
        </template>
      </vue-glide>
    </section>
    <section class="map">
      <SubTitle title="Onde estamos" class="light" />
      <h3>R. Pádua Correia 46, 4400-238 Vila Nova de Gaia</h3>
      <div id="map"></div>
    </section>
    <section class="contacts">
      <div class="contacts__grid grid">
        <div>
          <SubTitle title="Contactos" />
          <div class="contacts__grid__info grid">
            <div class="contacts__grid__info__phone grid">
              <i class="fas fa-phone"></i>
              <p>(+351) 917 523 009</p>
            </div>
            <div class="contacts__grid__info__location grid">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <p>R. Pádua Correia 46</p>
                <p>4400-238 Vila Nova de Gaia</p>
                <p>Portugal</p>
              </div>
            </div>
            <div class="contacts__grid__info__time grid ">
              <i class="fas fa-clock"></i>
              <div>
                <p>
                  Domingo: Encerrado
                </p>
                <p>
                  Segunda: 09:30 – 19:00
                </p>
                <p>
                  Terça: 09:30 – 19:00
                </p>
                <p>
                  Quarta: 09:30 – 19:00
                </p>
                <p>
                  Quinta: 09:30 – 19:00
                </p>
                <p>
                  Sexta: 09:30 – 19:00
                </p>
                <p>
                  Sábado: 10:00 – 12:30
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SubTitle title="Fale connosco" />
          <form>
            <input type="text" id="nameTxt" placeholder="Nome *" />
            <input type="text" id="lastNameTxt" placeholder="Sobrenome *" />
            <input type="email" id="emailTxt" placeholder="E-mail *" />
            <input type="number" id="phoneTxt" placeholder="Telemóvel *" />
            <textarea
              id="contentTxt"
              cols="30"
              rows="6"
              placeholder="Conteúdo da mensagem *"
            ></textarea>
            <input type="submit" value="Enviar" id="submit" />
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import { background } from "../../js/background";

import SubTitle from "@/components/SubTitle.vue";
import ServicesCard from "@/components/ServicesCard.vue";
import CarsCard from "@/components/CarsCard.vue";
import TestimonialCard from "@/components/TestimonialCard.vue";
import { mapGetters } from "vuex";
import { Glide, GlideSlide } from "vue-glide-js";
// import { background } from "../../js/background";

export default {
  name: "Home",
  components: {
    SubTitle,
    ServicesCard,
    CarsCard,
    TestimonialCard,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },
  data: () => {
    return {
      testimonials: [],
      reviewsLength: 1,
      loadedData: false
    };
  },
  async created() {
    try {
      await this.$store.dispatch("setTestimonials");

      if (this.getStatus == 200) {
        this.loadedData = true;
        this.testimonials = this.getTestimonials;
      }
    } catch (error) {
      return error;
    }
  },
  // mounted() {
  //   // background();
  //   // this.map = new window.google.maps.Map(document.getElementById("map"), {
  //   //   center: new window.google.maps.LatLng(
  //   //     41.126531701994104,
  //   //     -8.610157358895863
  //   //   ),
  //   //   zoom: 18,
  //   //   mapTypeId: "roadmap"
  //   // });
  //   // new window.google.maps.Marker({
  //   //   position: { lat: 41.126531701994104, lng: -8.610157358895863 },
  //   //   map: this.map
  //   // });
  // },
  computed: {
    ...mapGetters(["getTestimonials", "getStatus"]),
    loaded() {
      let ready = false;

      if (this.getStatus == 200) {
        ready = true;
        // this.loadedData = true;

        console.log(document.querySelector(".glide"));
      }

      console.log(this.getStatus);
      console.log(ready);

      return ready;
    }
  }
};
</script>
