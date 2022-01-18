<template lang="">
  <div>
    <TheHeader />
    <section>
      <div class="mt-4">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8">
              <div class="bg-main">
                <div class="main-contant">
                  <h2>Get In Touch</h2>
                  <p class="text-color-contact">
                    feel free to drop us a line below!
                  </p>
                  <input
                    type="text"
                    class="form-control index-form-contact"
                    placeholder="Name"
                    v-model="firstname"
                  />
                  <input
                    type="email"
                    class="form-control index-form-contact"
                    placeholder="Email"
                    v-model="email"
                  />
                  <textarea
                    class="form-control mt-4"
                    name="tpye your massge"
                    placeholder="Tpye Your Massge"
                    id=""
                    cols="30"
                    rows="5"
                    v-model="message"
                  ></textarea>

                  <button
                    type="submit"
                    class="btn btn-greenligth btn-p-l-r-2"
                    v-on:click="send"
                  >
                    Send
                  </button>
                </div>
              </div>
              <div class="bg-contact">
                <div class="card-body">
                  <h2 class="text-center text-white fw-bold">Contact Us</h2>

                  <h4 class="text-white">
                    <i class="fas fa-map-marker-alt"></i>
                    23 avenvde paris 75012 paris
                  </h4>
                  <h4 class="text-white">
                    <i class="fas fa-mobile-alt"></i>
                    +144 266 300 32
                  </h4>
                  <h4 class="text-white">
                    <i class="far fa-envelope"></i>
                    flo@share.com
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid mt-5">
          <div class="row m-contact">
            <div class="col-md-6">
              <div class="card border-radius-10">
                <div class="card-body text-center">
                  <i class="fas fa-phone-alt phone-icon"></i>
                  <h3 class="fw-bold">Talk to Sales</h3>
                  <p>
                    Interested in HubSpot's marketing software? Just pick up the
                    phone to chat with a member of our sales team.
                  </p>
                  <h6>+1 877 929 0687</h6>
                  <button type="submit" class="btn btn-greenligth btn-p-l-r-2">
                    View All Global Numbers
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card border-radius-10">
                <div class="card-body text-center">
                  <img src="../assets/img/support.svg" alt="" width="70" />
                  <h3 class="fw-bold">Contact Customer Support</h3>
                  <p>
                    Sometimes you need a little help from your friends. Ora
                    HubSpot support rep. Don't worry... we're here for you.
                  </p>
                  <h6>+1 877 929 0687</h6>
                  <button type="submit" class="btn btn-greenligth btn-p-l-r-2">
                    Contact Support
                  </button>
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
// import axios from "axios";
export default {
  name: "ContactUs",
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      firstname: "",
      email: "",
      message: "",
    };
  },
  methods: {
    send: function () {
      if (!this.firstname) {
        this.$toast.show("Please enter name.", {
          type: "error",
          position: "top-right",
          duration: 3000,
        });
        return;
      }
      if (!this.email) {
        this.$toast.show("Please enter email.", {
          type: "error",
          position: "top-right",
          duration: 3000,
        });
        return;
      }
      if (!this.message) {
        this.$toast.show("Please enter message.", {
          type: "error",
          position: "top-right",
          duration: 3000,
        });
        return;
      }

      const contact = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.firstname,
          email: this.email,
          message: this.message,
        }),
      };
      fetch(
        "https://floshare.microlent.com/contact-us/create-or-update",
        contact
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.statusCode === 200) {
            this.$toast.show("Success.", {
              type: "success",
              position: "top-right",
              duration: 3000,
            });
            return;
          }
          if (data.statusCode === 400) {
            this.$toast.show(data.errors[0], {
              type: "error",
              position: "top-right",
              duration: 3000,
            });
            return;
          }
        });
    },
  },
};
</script>
<style lang=""></style>
