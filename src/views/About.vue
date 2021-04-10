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
          url=""
          title="Atendimento impecável, com simpatia e atenção."
          desc="Mais de 500 clientes satisfeitos"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SubTitle from "@/components/SubTitle.vue";
import WhyUsCard from "@/components/WhyUsCard.vue";
export default {
  components: {
    SubTitle,
    WhyUsCard
  }
};
</script>
