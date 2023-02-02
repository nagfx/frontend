<template>
  <ProductForm @message="receiveEmitAgain" />
</template>

<script>
import ProductForm from "@/components/ProductForm.vue";
export default {
  components: { ProductForm },
  methods: {
    receiveEmitAgain(value) {
      console.log(value);
    },
  },
};
</script>
