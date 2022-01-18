<template lang="">
  <div>
    <nav
      class="offcanvas offcanvas-start show"
      tabindex="-1"
      id="offcanvas"
      data-bs-keyboard="false"
      data-bs-backdrop="true"
      data-bs-scroll="true"
    >
      <div class="p-2 mt-3 text-center">
        <a href="/" class="offcanvas-title">
          <img src="../assets/img/logo.png" alt="logo" width="110" />
        </a>
      </div>
      <div class="offcanvas-body px-0">
        <ul class="list-unstyled ps-0">
          <li class="mb-3">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control form-b-b"
                placeholder="www.floshare"
              />
              <span class="input-group-text">
                <i class="bi bi-search"></i>
              </span>
            </div>
          </li>
          <li class="mb-3 mt-5 active-li">
            <a href="#">jeff block</a>
          </li>

          <li class="mb-3">
            <a href="#">New flo</a>
          </li>
          <li class="mb-3">
            <a href="Dashboard-manager-view.html">Dashboard</a>
          </li>
          <li class="mb-3">
            <a href="Template-list.html">Templates</a>
          </li>
          <li class="mb-3">
            <a href="Companies.html">companies</a>
          </li>
          <li class="mb-3">
            <a href="contacts.html">contacts</a>
          </li>
        </ul>
      </div>
    </nav>
    <main class="container-fluid">
      <div class="row">
        <div class="col p-4">
          <!-- toggler -->
          <button
            id="sidebarCollapse"
            class="float-end"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas"
            role="button"
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <!-- main -->
        <div class="container row" style="padding-right: 0">
          <div class="header-main">
            <img src="../assets/img/abc-removebg-preview.png" class="" />

            <div class="dropdown">
              <div
                class="user-icon"
                id="userdropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa fa-user-circle"></i>
              </div>

              <ul class="dropdown-menu" aria-labelledby="userdropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    <img src="../assets/img/account.svg" alt="Account" />
                    Account</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    ><img
                      src="../assets/img/support.svg"
                      alt="contact support"
                    />
                    Contact Support</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    ><img src="../assets/img/signout.svg" alt="Sign Out" /> Sign
                    Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row mt-2 mp-c">
            <div class="bg-white p-3 border-radius-10">
              <div class="m-2">
                <!-- header -->
                <div class="header-main m-0 header-chage border-bottom-2">
                  <h3>Contacts</h3>
                  <div class="row">
                    <div class="input-group mb-3 col-md-4">
                      <input
                        type="text"
                        class="form-control form-b-b"
                        placeholder=""
                      />
                      <span class="input-group-text">
                        <i class="bi bi-search"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <!-- end header -->
                <div class="scroll-bar">
                  <table class="table text-center">
                    <thead>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Contact Id</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Robert</td>
                        <td>Robert@fastco.com</td>

                        <td>03</td>
                      </tr>
                      <tr>
                        <td>Aaftab</td>
                        <td>Aaftab@fastco.com</td>

                        <td>03</td>
                      </tr>

                      <tr>
                        <td>Bob Porporato</td>
                        <td>Bob.Porporato@fastco.com</td>

                        <td>03</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- new button -->
                <div>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#forgetpassword"
                  >
                    <i class="fas fa-plus-circle fa-3x plus-icon-color"></i
                  ></a>
                </div>
                <!--New Company  Modal -->
                <div
                  class="modal fade"
                  id="forgetpassword"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog model-top">
                    <div class="modal-content">
                      <div class="modal-header bg-cblue">
                        <h5 class="modal-title">NEW company</h5>
                        <!-- <button type="button" class="btn-close" ></button> -->
                        <a href="" data-bs-dismiss="modal" aria-label="Close"
                          ><i class="bi bi-x-circle-fill close-icon"></i
                        ></a>
                      </div>
                      <div class="modal-body">
                        <label class="text-lable">Name</label>
                        <input
                          type="text"
                          placeholder="Name"
                          class="form-control"
                        />
                        <div class="file-upload">
                          <label class="text-lable">Image</label>
                          <div class="image-upload-wrap">
                            <input
                              class="file-upload-input"
                              type="file"
                              accept="image/*"
                            />
                            <div class="drag-text">
                              <i class="far fa-image"></i>
                              <h3>
                                Click to browse or drag and drop your logo
                              </h3>
                            </div>
                          </div>
                          <div class="file-upload-content">
                            <img
                              class="file-upload-image"
                              src="#"
                              alt="your image"
                            />
                          </div>
                        </div>
                        <div class="text-center">
                          <button
                            type="submit"
                            class="btn btn-greenligth btn-p-l-r"
                          >
                            SAVE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- end  -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/style.css";
import "@/assets/css/navbartab.css";
export default {
  name: "ContactSupport",
};
</script>
<style scoped>
nav {
    visibility: visible
}
</style>
