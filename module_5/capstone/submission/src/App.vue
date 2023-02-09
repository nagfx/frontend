<template>
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between">
      <p class="text-xl md:text-5xl font-bold text-center py-3 my-4">
        Pokedex Vue App
      </p>
      <input
        type="text"
        class="px-4 py-2 bg-gray-200 rounded"
        v-model="searchTerm"
        placeholder="Search Pokemon"
      />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-3">
      <div class="card" v-for="(pokemon, key) in pokemons" :key="key">
        <img
          :src="`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png?raw=true`"
          alt=""
          class="display-image"
          :style="`border: 8px solid ${getColorFromType(
            pokemon.types[0].type.name
          )}`"
        />
        <p class="text-2xl font-bold text-center my-2 capitalize">
          {{ pokemon.name }}
        </p>
        <p class="text-md font-bold text-left">
          ID:<span class="font-normal"> #{{ pokemon.id }}</span>
        </p>
        <p class="text-md font-bold text-left">
          Type:
          <span class="font-normal capitalize">
            {{ pokemon.types[0].type.name }}</span
          >
        </p>
        <p class="text-md font-bold text-left">
          Height(Meter):
          <span class="font-normal"> {{ pokemon.height / 10 }}</span>
        </p>
        <p class="text-md font-bold text-left">
          Weight(KG):
          <span class="font-normal"> {{ pokemon.weight / 10 }}</span>
        </p>
        <p class="text-md font-bold text-left">
          Abilities:
          <span
            class="font-normal m-1 px-2 ability"
            v-for="(ability, key) in pokemon.abilities"
            :key="key"
            :style="`background: ${getColorFromType(
              pokemon.types[0].type.name
            )}`"
          >
            {{ ability.ability.name }}</span
          >
        </p>
      </div>
    </div>
    <div class="my-3 text-center">
      <button
        @click="loadMorePokemons"
        class="bg-indigo-500 text-white py-2 mt-5 px-4 rounded-full"
      >
        Load More
      </button>
    </div>
  </div>
  <footer class="bg-indigo-100">
    <div class="container mx-auto text-left mt-10 py-3">
      <p class="text-xl">Copyright Naman</p>
    </div>
  </footer>
</template>

<script>
import axios from "axios";
import { colors } from "@/helpers/colors.js";

export default {
  data() {
    return {
      pokemons: [],
      offset: 0,
      limit: 20,
    };
  },
  methods: {
    async fetchData() {
      try {
        let { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/?offset=${this.offset}&limit=${this.limit}`
        );
        data.results.map(async (obj) => {
          let { data } = await axios.get(obj.url);
          this.pokemons.push(data);
        });
      } catch (err) {
        alert(err);
      }
    },
    async loadMorePokemons() {
      this.offset += this.limit;
      this.fetchData();
    },
    getColorFromType(type) {
      return colors[type];
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style>
body {
  background-color: azure;
}
img.display-image {
  width: 180px;
  border-radius: 50%;
  padding: 20px;
  display: block;
  margin: 0 auto;
}

div.card {
  border-radius: 20px;
  background: white;
  height: 480px;
  box-shadow: 1px 2px 15px 4px rgb(164, 164, 164);
  padding: 20px;
}
.ability {
  border-radius: 35px;
  padding: 6px;
  display: inline-block;
}
</style>
