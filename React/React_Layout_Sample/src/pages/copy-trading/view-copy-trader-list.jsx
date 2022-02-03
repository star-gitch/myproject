export const ViewCopyTraderListPage = () => {
  return (
    <div class="container-fluid p-0">
      <div class="card mb-0 d-xl-block d-none">
        <div class="card-body">
          <a href="#0" class="text-dull">
            TradePro &gt;{" "}
          </a>
          <a href="#0" class="theme-color font-bold">
            Copy Traders View
          </a>
        </div>
      </div>
      <div class="card grey-card mb-0">
        <div class="card-body">
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-7">
              <div class="form-group has-search">
                <span class="fa fa-search form-control-feedback">
                  <img
                    src="img/uploads/search-icon.svg"
                    alt=""
                    class="img-fluid"
                  />
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search..."
                />
              </div>
            </div>
            <div class="col-xl-9 col-lg-9 col-5 text-end">
              <div class="dropdown d-xl-inline d-none">
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#0">
                      PDF
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#0">
                      XLS
                    </a>
                  </li>
                </ul>
              </div>
              <a href="viewcopy-trader-list.html">
                <img
                  src="img/uploads/list-view.svg"
                  alt=""
                  class="img-fluid px-2"
                />
              </a>
              <a href="viewcopy-trader-grid.html">
                <img src="img/uploads/grid-view.svg" alt="" class="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-0 card-light-grey">
        <div id="myData"></div>
        <script type="text/javascript"></script>

        <div class="card-body mob-pad-0">
          <div class="table-responsive">
            <table class="table table-striped">
              <thead class="bg-white">
                <tr class="header">
                  <th scope="col">
                    Name
                    <img src="img/table-arrow.svg" alt="" class="img-fluid" />
                  </th>
                  <th scope="col" class="text-center">
                    Subscribers
                    <img src="img/table-arrow.svg" alt="" class="img-fluid" />
                  </th>
                  <th scope="col" class="text-center">
                    Membership
                    <img src="img/table-arrow.svg" alt="" class="img-fluid" />
                  </th>
                  <th scope="col" class="text-center">
                    Signals Sent
                    <img src="img/table-arrow.svg" alt="" class="img-fluid" />
                  </th>
                  <th scope="col" class="text-center">
                    Profit
                    <img src="img/table-arrow.svg" alt="" class="img-fluid" />
                  </th>
                  <th scope="col" class="text-center">
                    Action
                    <img src="img/table-arrow.svg" alt="" class="img-fluid" />
                  </th>
                  <th scope="col" class="text-center">
                    Configure
                    <img src="img/table-arrow.svg" alt="" class="img-fluid" />
                  </th>
                </tr>
              </thead>
              <tbody id="myTabledata">
                <tr>
                  <td>
                    <div class="d-flex">
                      <div>
                        <img
                          src="img/user-icon/user-1.svg"
                          alt=""
                          class="img-fluid table-pic"
                        />
                        <span class="fw-bold">Richard Stroud</span>
                      </div>
                      <div>
                        <a href="#0" class="flex-column">
                          <span class="font-12" id="myDataUsername"></span>
                          <div class="divider"></div>
                          <span
                            class="font-bold font-13"
                            id="myDataUsername"
                          ></span>
                        </a>
                      </div>
                    </div>
                  </td>
                  <td class="text-center">0</td>
                  <td class="cubscriber">Free</td>
                  <td class="text-center">12</td>
                  <td class="text-center">
                    <img
                      src="img/uploads/profit-up.svg"
                      alt=""
                      class="img-fluid"
                    />
                    <span class="text-green">59.28% </span>
                  </td>
                  <td class="text-center">
                    <button
                      onclick="alert('Susbscribed')"
                      class="btn btn-primary"
                    >
                      Subscribe
                    </button>
                  </td>
                  <td class="text-center">
                    <a href="trade-configuration.html">
                      <button
                        onclick="goConfigure(this)"
                        class="btn btn-success"
                      >
                        Configure
                      </button>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="row mt-4">
            <div class="col-xl-3 col-lg-3 col-12 my-auto">
              <p class="mb-0 d-none d-sm-block">
                Showing <span id="dataCount"></span> entries
              </p>
            </div>
            <div class="col-xl-9 col-lg-9 col-12 text-end mob-mt-3">
              <div class="btn-group">
                <a href="#0" class="btn btn-light">
                  Previous
                </a>
                <a href="#0" class="btn btn-light active">
                  1
                </a>
                <a href="#0" class="btn btn-light">
                  2
                </a>
                <a href="#0" class="btn btn-light">
                  3
                </a>
                <a href="#0" class="btn btn-light">
                  4
                </a>
                <a href="#0" class="btn btn-light">
                  5
                </a>
                <a href="#0" class="btn btn-light">
                  Next
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
