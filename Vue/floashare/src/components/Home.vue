<template>
  <div>
    <TheHeader />
    <section>
      <div class="index-bg">
        <div class="container-fluid">
          <div class="row pt-5 pb-5">
            <div class="col-md-4">
              <div class="pt-5 ms-4">
                <h2 class="fw-bold">What is FloShare ?</h2>
                <p class="text-justify">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <button type="submit" class="btn btn-greenligth btn-p-l-r-2">
                  Free Trial
                </button>
              </div>
            </div>
            <div class="col-md-8">
              <div class="text-center">
                <img src="../assets/img/bg-d.png" class="bg-d" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white mt-5 home-m-5 p-3">
        <div class="container-fluid">
          <div class="row">
            <!-- Better For Managers -->
            <div class="col-md-6">
              <h2 class="text-center fw-bold">Better For Managers</h2>
              <p class="bottom-line"></p>
              <p class="text-justify">
                By measuring and analyzing how your team spends its time, you’ll
                be able to be more engaged on each project offering
                encouragement and stepping in when necessary. Plus our insight
                will help you recognize strong performers building morale across
                the organization.
              </p>
              <div class="text-center">
                <button type="submit" class="btn readmore-btn btn-p-l-r-2">
                  Read More
                </button>
                <button
                  type="submit"
                  class="btn request-demo-btn btn-p-l-r-2"
                  data-bs-toggle="modal"
                  data-bs-target="#requestdemo"
                >
                  Request Demo
                </button>
              </div>
            </div>
            <div class="col-md-6">
              <div class="text-center">
                <img src="../assets/img/bfm.png" alt="" class="img-w" />
              </div>
            </div>
            <p class="border-bottom-line"></p>
            <!-- end -->
            <!--Better For Employees  -->
            <div class="col-md-6">
              <div class="text-center">
                <img src="../assets/img/bfe.png" alt="" class="img-w" />
              </div>
            </div>
            <div class="col-md-6">
              <h2 class="text-center fw-bold">Better For Employees</h2>
              <p class="bottom-line"></p>
              <p class="text-justify">
                When your employees see how tracking their time gives them
                valuable knowledge about their strengths and weaknesses, when
                they are overwhelmed and when they are underutilized you’ll be
                amazed at how productive, accountable and self directed they
                become.
              </p>
              <div class="text-center">
                <button type="submit" class="btn readmore-btn btn-p-l-r-2">
                  Read More
                </button>
                <button
                  type="submit"
                  class="btn request-demo-btn btn-p-l-r-2"
                  data-bs-toggle="modal"
                  data-bs-target="#requestdemo"
                >
                  Request Demo
                </button>
              </div>
            </div>
            <!-- end -->
            <p class="border-bottom-line"></p>
            <!-- Better For The Organization -->
            <div class="col-md-6">
              <h2 class="text-center fw-bold">Better For The Organization</h2>
              <p class="bottom-line"></p>
              <p class="text-justify">
                Happy employees are productive employees so Time Doctor
                facilitates their happiness by enabling a “work from anywhere
                world” with full transparency and accountability. Whether at
                home, in-office or on the road, they’ll work the way that works
                best for both you and them.
              </p>
              <div class="text-center">
                <button type="submit" class="btn readmore-btn btn-p-l-r-2">
                  Read More
                </button>
                <button
                  type="submit"
                  class="btn request-demo-btn btn-p-l-r-2"
                  data-bs-toggle="modal"
                  data-bs-target="#requestdemo"
                >
                  Request Demo
                </button>
              </div>
            </div>
            <div class="col-md-6">
              <div class="text-center">
                <img
                  src="../assets/img/bfto.png"
                  alt="Better For The Organization"
                  class="img-w"
                />
              </div>
            </div>
            <!-- end -->
          </div>
        </div>
      </div>
      <div class="bg-ligthgray mt-5 pt-5 pb-4">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <div class="card mb-2">
                <div class="card-body text-center text-justify">
                  <h3>Mitigate Risk</h3>
                  <p class="text-justify pt-4 pb-4">
                    Ensure inspection readiness at all times through our fully
                    compliant platform, pre-validated according to GAMP5.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card mb-2">
                <div class="card-body text-center text-justify">
                  <h3>Turbocharge Performance</h3>
                  <p class="text-justify pt-3 pb-4">
                    Maintain total control over processes and documents,
                    customize workflows to perfection, and automate where
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card mb-2">
                <div class="card-body text-center text-justify">
                  <h3>Unite processes With Ease</h3>
                  <p class="text-justify pt-3 pb-4">
                    Enjoy uninterrupted workflows and full traceability through
                    seamlessly connected and integrated modules.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card mb-2">
                <div class="card-body text-center text-justify">
                  <h3>Count On Us To Support You</h3>
                  <p class="text-justify pt-3 pb-4">
                    Our dedicated team is ready to answer your questions at any
                    time. Only a first-class Scilife experience will do!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- model Request demo -->
      <!-- Modal -->
      <div
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
              <label class="text-lable">Name</label>
              <input type="text" placeholder="Name" class="form-control" />
              <label class="text-lable">Email</label>
              <input type="email" placeholder="Email" class="form-control" />
              <label class="text-lable">Phone Number</label>
              <input
                type="text"
                placeholder="Phone Number"
                class="form-control"
              />
              <label class="text-lable">Number Of User/s</label>
              <input
                type="text"
                placeholder="Number Of User/s"
                class="form-control"
              />
              <label class="text-lable">Description</label>
              <textarea
                name=""
                class="form-control border-d"
                placeholder="Description"
                id=""
                cols="30"
                rows="3"
              ></textarea>
              <div class="text-center">
                <button type="submit" class="btn btn-greenligth btn-p-l-r">
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
  name: "Home",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
