<template lang="">
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><img src="../assets/img/logo-home.png" alt="" width="200"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/about" class="nav-link"
                >About FloShare</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/help" class="nav-link">How We Help</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact-us" class="nav-link"
                >Contact Us</router-link
              >
            </li>

            <li class="nav-item ml-6">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control index-form-search"
                  aria-label="Dollar amount (with dot and two decimal places)"
                />

                <span class="input-group-text"
                  ><i class="fas fa-search"></i
                ></span>
              </div>
            </li>
            <li class="nav-item">
              <button class="btn btn-outline-success" type="submit">
                Login
              </button>
            </li>

            <!-- end header -->
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/style.css";
import "@/assets/css/navbartab.css";
export default {
  name: "TheHeader",
};
</script>
<style lang=""></style>
