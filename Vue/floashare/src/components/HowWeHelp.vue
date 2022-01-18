<template lang="">
  <div>
    <TheHeader />
    <section>
      <div class="bg-white mt-4 m-3 p-3 border-radius-10">
        <div class="container-fluid">
          <div class="row">
            <!-- Better for managers -->
            <div class="col-md-7">
              <h2 class="fw-bold">Better For Managers</h2>

              <p class="text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <button
                type="submit"
                class="btn request-demo-btn btn-p-l-r-2"
                data-bs-toggle="modal"
                data-bs-target="#requestdemo"
              >
                Request Demo
              </button>
            </div>
            <div class="col-md-5">
              <div class="text-center">
                <img src="../assets/img/bfm.png" alt="" class="img-w" />
              </div>
            </div>
            <p class="border-bottom-line"></p>
            <div class="col-md-12">
              <h2 class="fw-bold">Why Do We Use It?</h2>
              <p class="text-justify">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Praesent sollicitudin elit eu turpis malesuada, vitae vehicula
                  purus dictum.
                </li>
                <li>Cras hendrerit libero sit amet ultrices ornare.</li>
                <li>
                  Sed aliquet est in urna imperdiet, at vulputate nunc ornare.
                </li>
                <li>Cras volutpat massa vitae varius suscipit.</li>
                <li>Vestibulum varius augue et mi interdum sagittis.</li>
                <li>
                  Pellentesque ultrices lectus sed massa convallis congue.
                </li>
                <li>
                  Nunc rutrum lorem sed libero ultricies, quis malesuada augue
                  rutrum.
                </li>
                <li>
                  Quisque lacinia diam eu ligula fringilla, vitae ornare est
                  tincidunt.
                </li>
                <li>
                  Donec in augue sagittis, congue erat eget, volutpat purus.
                </li>
              </ul>
            </div>
            <p class="border-bottom-line"></p>
            <div class="col-md-5">
              <div class="text-center">
                <img src="../assets/img/bfm.png" alt="" class="img-w" />
              </div>
            </div>
            <div class="col-md-6">
              <h2 class="fw-bold">Where Can I Get Some?</h2>

              <p class="text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <button
                type="submit"
                data-bs-toggle="modal"
                data-bs-target="#requestdemo"
                class="btn request-demo-btn btn-p-l-r-2"
              >
                Request Demo
              </button>
            </div>
            <!-- end -->
          </div>
        </div>
      </div>

      <!-- model Request demo -->
      <!-- Modal -->
      <div
        v-if="isModalVisible"
        class="modal fade"
        id="requestdemo"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header bg-cblue">
              <h5 class="modal-title">Request Demo</h5>
              <!-- <button type="button" class="btn-close" ></button> -->
              <a href="" data-bs-dismiss="modal" aria-label="Close"
                ><i class="bi bi-x-circle-fill close-icon"></i
              ></a>
            </div>
            <div class="modal-body">
              <label class="text-lable"
                >Name <span style="color:red;">*</span>
              </label>
              <input
                type="text"
                v-model="name"
                placeholder="Name"
                class="form-control"
              />
              <label class="text-lable"
                >Email <span style="color:red;">*</span></label
              >
              <input
                type="email"
                v-model="email"
                placeholder="Email"
                class="form-control"
              />
              <label class="text-lable"
                >Phone Number <span style="color:red;">*</span></label
              >
              <input
                type="text"
                placeholder="Phone Number"
                v-model="mobileNumber"
                class="form-control"
              />
              <label class="text-lable"
                >Number Of User/s <span style="color:red;">*</span></label
              >
              <input
                type="number"
                placeholder="Number Of User/s"
                class="form-control"
                v-model="noOfUsers"
              />
              <label class="text-lable"
                >Description <span style="color:red;">*</span></label
              >
              <textarea
                name=""
                class="form-control border-d"
                placeholder="Description"
                id=""
                cols="30"
                rows="3"
                v-model="description"
              ></textarea>
              <div class="text-center">
                <button
                  type="submit"
                  class="btn btn-greenligth btn-p-l-r"
                  v-on:click="send"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- end -->
    </section>
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from "./TheHeader";
import TheFooter from "./TheFooter";
export default {
  name: "HowWeHelp",
  components: {
    TheHeader,
    TheFooter,
  },

  data() {
    return {
      name: "",
      email: "",
      mobileNumber: "",
      noOfUsers: "",
      description: "",
      isModalVisible: true,
    };
  },
  methods: {
    send: function () {
      if (!this.name) {
        this.$toast.show("Please enter name.", {
          type: "success",
          position: "top-right",
          duration: 3000,
        });
        return;
      }
      if (!this.email) {
        this.$toast.show("Please enter email.", {
          type: "success",
          position: "top-right",
          duration: 3000,
        });
        return;
      }
      if (!this.description) {
        this.$toast.show("Please enter description.", {
          type: "success",
          position: "top-right",
          duration: 3000,
        });
        return;
      }
      if (!this.mobileNumber) {
        this.$toast.show("Please enter phone number.", {
          type: "success",
          position: "top-right",
          duration: 3000,
        });
        return;
      }
      if (!this.noOfUsers) {
        this.$toast.show("Please enter no Of Users.", {
          type: "success",
          position: "top-right",
          duration: 3000,
        });
        return;
      }

      const contact = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          mobileNumber: this.mobileNumber,
          noOfUsers: this.noOfUsers,
          description: this.description,
        }),
      };
      fetch(
        "https://floshare.microlent.com/request-demo/create-and-update",
        contact
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("dd=", data);
          if (data.statusCode === 200) {
            this.$toast.show(data.message, {
              type: "success",
              position: "top-right",
              duration: 3000,
            });
            this.isModalVisible = false;
            return;
          }
          if (data.statusCode === 400) {
            this.$toast.show("Please check field again", {
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
