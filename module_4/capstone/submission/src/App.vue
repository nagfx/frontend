<template>
  <h1>Currency converter powered by ExchangeRate.host</h1>
  <div class="container">
    <div>
      <div class="controls">
        <select name="" id="" v-model="left.option" @change="changeCurrency">
          <option :value="key" v-for="(rate, key) in rates" :key="key">
            {{ key }}
          </option>
        </select>
        <input type="text" v-model="left.value" />
      </div>
      <div class="controls">
        <select name="" id="" v-model="right.option">
          <option :value="key" v-for="(rate, key) in rates" :key="key">
            {{ key }}
          </option>
        </select>
        <input type="text" v-model="convertedValue" />
      </div>
      <button @click="swapCurrency">Swap currencies</button>

      <button @click="convertValue">Convert</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      rates: {},
      left: {
        value: "",
        option: "USD",
      },
      right: {
        value: "",
        option: "MYR",
      },
      convertedValue: null,
    };
  },
  methods: {
    fetchData() {
      axios
        .get("https://api.exchangerate.host/latest?base=USD")
        .then((res) => (this.rates = res.data.rates));
    },
    swapCurrency() {
      let leftValueHolder = this.left.option;
      let rightValueHolder = this.right.option;
      this.left.option = rightValueHolder;
      this.right.option = leftValueHolder;
      axios
        .get(`https://api.exchangerate.host/latest?base=${this.left.option}`)
        .then((res) => (this.rates = res.data.rates));
    },
    changeCurrency() {
      axios
        .get(`https://api.exchangerate.host/latest?base=${this.left.option}`)
        .then((res) => (this.rates = res.data.rates));
    },
    convertValue() {
      this.convertedValue =
        Number(this.left.value) * Number(this.rates[this.right.option]);
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style>
h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20vh;
  color: aliceblue;
  font-size: xx-large;
  font-weight: bold;
  padding-left: 10px;
}
body {
  background-color: cornflowerblue;
}
.container {
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: auto;
  background-color: rgb(107, 186, 251);
}

.controls {
  margin: 0 15px;
}
input {
  margin-left: 5px;
}
select {
  display: inline;
  margin-bottom: 10px;
}
button {
  display: block;
  margin: 0 auto;
  margin-top: 25px;
}
</style>
