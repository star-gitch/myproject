<template>
  <footer>
    <div class="bg-footer mt-5">
      <div class="container-fluid">
        <div class="row pt-5 pb-5">
          <div class="col-md-4 pb-5">
            <div class="text-center">
              <img src="../assets/img/footer-bg.png" width="180" alt="" />
            </div>
          </div>
          <div class="col-md-2 pb-5">
            <h4><router-link to="/about">About FloShare</router-link></h4>
            <h4><router-link to="/help"> How We Help</router-link></h4>
            <h4><router-link to="/contact-us"> Contact Us</router-link></h4>
          </div>
          <div class="col-md-2 pb-5">
            <h4><a href="#"> login</a></h4>
            <h4><a href="#"> Register</a></h4>
          </div>
          <div class="col-md-4 pb-5">
            <h4>Follow us on:</h4>
            <a href="#" class="icon-fb"><i class="fab fa-facebook"></i></a>
            <a href="#" class="icon-twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" class="icon-invision"
              ><i class="fab fa-invision"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "TheFooter",
};
</script>
<style lang=""></style>
