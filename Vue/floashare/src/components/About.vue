<template lang="">
  <div>
    <TheHeader />
    <section>
      <div class="bg-white mt-4 m-3 p-3 border-radius-10">
        <div class="container-fluid">
          <div class="row">
            <!-- about floshare -->
            <div class="col-md-7">
              <h2 class="fw-bold">About FloShare</h2>

              <p class="text-justify">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance.The standard chunk
                of Lorem Ipsum used since the 1500s is reproduced below for
                those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                Bonorum et Malorum" by Cicero are also reproduced in their exact
                original form, accompanied by English versions from the 1914
                translation by H. Rackham.
              </p>
            </div>
            <div class="col-md-5">
              <div class="text-center">
                <img src="../assets/img/about.png" alt="" class="img-w" />
              </div>
            </div>

            <!-- end -->
          </div>
        </div>
      </div>
      <!-- Executive Team -->
      <div class="mt-5">
        <div class="container-fluid">
          <h2 class="text-center fw-bold">Executive Team</h2>
          <p class="bottom-line"></p>
          <div class="row m-team">
            <div class="col-md-4">
              <div class="card">
                <img src="../assets/img/et-1.png" alt="" width="" />
                <div class="card-body">
                  <h4 class="text-center">William</h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img src="../assets/img/et-2.png" alt="" />
                <div class="card-body">
                  <h4 class="text-center">Alexander</h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img src="../assets/img/et-1.png" alt="" />
                <div class="card-body">
                  <h4 class="text-center">Hagay Namir</h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from "./TheHeader";
import TheFooter from "./TheFooter";
export default {
  name: "About",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
<style lang=""></style>
