<template>
  <div class="about">
    <div class="about__info grid">
      <img src="../../assets/Bullit.jpg" alt="" />
      <p>
        Desde 1994 ligado ao sector automóvel com uma vasta experiência. Duas
        décadas ligado às marcas <i>Ford</i> e <i>Citroen</i> como responsável
        do sector de usados, semi novos e novos. Sempre me pautei pela
        honestidade e qualidade prestada aos meus clientes tanto nas vendas como
        no pós venda e oferecendo sempre os melhores os melhores negócios. Até
        ao momento na Moitas Car contamos com
        <b>++ de 100 viaturas vendidas</b>, privilegiando um bom atendimento
        assim como a satisfação dos nossos clientes.
      </p>
    </div>
    <div class="about__reasons grid">
      <SubTitle title="Porquê nós" class="light" />

      <div class="about__reasons__grid grid">
        <WhyUsCard
          url="https://res.cloudinary.com/dijkykn1j/image/upload/v1618089084/charity_cpxalb.svg"
          title="Atendimento impecável, com simpatia e atenção."
          desc="Mais de 500 clientes satisfeitos"
        />
        <WhyUsCard
          url="https://res.cloudinary.com/dijkykn1j/image/upload/v1618521803/wrench_klylgs.svg"
          title="Atendimento impecável, com simpatia e atenção."
          desc="Mais de 500 clientes satisfeitos"
        />
        <WhyUsCard
          url="https://res.cloudinary.com/dijkykn1j/image/upload/v1618521882/money_oamiw7.svg"
          title="Atendimento impecável, com simpatia e atenção."
          desc="Mais de 500 clientes satisfeitos"
        />
      </div>
    </div>
    <section class="testimonials">
      <SubTitle title="O que dizem sobre nós" />
      <vue-glide
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
        <vue-glide-slide>
          <TestimonialCard
            content="Honestidade e qualidade de serviço aliado a preços e condições muito competitivos."
            name="Neca Long"
            date="07/06/2019"
        /></vue-glide-slide>
        <vue-glide-slide>
          <TestimonialCard
            content="Atendimento personalizado e boa avaliação do valor do veículo antigo. Facilidade na burocracia. Um ano de garantia. Recomendo."
            name="Neca Long"
            date="07/06/2019"
        /></vue-glide-slide>
        <vue-glide-slide>
          <TestimonialCard
            content="Simpatia, confiança e prontidão na solução. Obrigada"
            name="Neca Long"
            date="07/06/2019"
        /></vue-glide-slide>
        <vue-glide-slide>
          <TestimonialCard
            content="Excelente atendimento e prestação de serviços 👌"
            name="Neca Long"
            date="07/06/2019"
        /></vue-glide-slide>
        <vue-glide-slide>
          <TestimonialCard
            content="Atendimento, simpatia, transparência nos negócios."
            name="Neca Long"
            date="07/06/2019"
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
  </div>
</template>

<script>
import SubTitle from "@/components/SubTitle.vue";
import WhyUsCard from "@/components/WhyUsCard.vue";
import TestimonialCard from "@/components/TestimonialCard.vue";

export default {
  components: {
    SubTitle,
    WhyUsCard,
    TestimonialCard
  }
};
</script>
