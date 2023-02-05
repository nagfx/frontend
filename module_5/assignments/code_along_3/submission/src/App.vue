<script setup></script>

<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#"></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto container">
          <router-link to="/">
            <li class="nav-item active">
              <a class="nav-link" href="#"
                >Home <span class="sr-only"></span
              ></a>
            </li>
          </router-link>
          <router-link to="/product">
            <li class="nav-item">
              <a class="nav-link" href="#">Product</a>
            </li>
          </router-link>
          <router-link to="/about">
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
          </router-link>
          <router-link to="/settings">
            <li class="nav-item">
              <a class="nav-link" href="#">Settings</a>
            </li>
          </router-link>
        </ul>
      </div>
    </nav>
    <!-- <p>
      <router-link to="/">Go to Home</router-link> <br />
      <router-link to="/about">Go to About</router-link>
    </p> -->
    <div class="container"><router-view></router-view></div>
  </div>
</template>
