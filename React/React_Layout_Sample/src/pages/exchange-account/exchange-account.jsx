export const ExchangeAccountPage = () => {
  return (
    <div className="container-fluid p-0">
      <div className="card mb-0 d-none d-lg-block">
        <div className="card-body">
          <a href="#0" className="text-dull">
            TradePro &gt;{" "}
          </a>
          <a href="#0" className="theme-color font-bold">
            Exchange Account
          </a>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-xl-12 col-lg-12 col-12">
          <div className="alert alert-primary p-4" role="alert">
            <ul className="alert-ul pl-0">
              <li>
                <img src="img/info.svg" alt="" className="img-fluid me-2" />
                API Key is required to execute all your Trades on Exchange.
              </li>
              <li>
                <img src="img/info.svg" alt="" className="img-fluid me-2" />
                Please keep ‘Withdrawal’ as disabled on Exchange for respective
                API.
              </li>
              <li>
                <img src="img/info.svg" alt="" className="img-fluid me-2" />
                Any API or Secret Key here are Encrypted before storing in
                Database
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-xl-12 col-lg-12 col-12">
          <div className="card mb-0 card-same-height">
            <div className="card-body">
              <div className="row mob-mt-3">
                <div className="col-xl-12 col-lg-12 col-12">
                  <h1 className="font-24 theme-color font-bold">
                    Set Exchange API
                  </h1>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-xl-9 col-lg-9 col-7 my-auto">
                  <p className="font-16 theme-color mb-0">Exchange</p>
                </div>
                <div className="col-xl-3 col-lg-3 col-5 text-end">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected="" value="binance">
                      Binance
                    </option>
                    <option selected="" value="ftx">
                      FTX
                    </option>
                  </select>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-xl-6 col-lg-6 col-12">
                  <label className="form-label mb-3">API Key *</label>
                  <div className="input-group mb-3">
                    <input
                      name="apikey"
                      id="apikey"
                      type="text"
                      className="form-control"
                      placeholder="API Key"
                      aria-label="API Key"
                      aria-describedby="api-key"
                    />
                    <button className="input-group-text" id="api-key">
                      <img
                        src="img/uploads/eye-hidden.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </button>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-12">
                  <label className="form-label mb-3">Secret Key *</label>
                  <div className="input-group mb-3">
                    <input
                      name="secretkey"
                      id="secretkey"
                      type="text"
                      className="form-control"
                      placeholder="Secret Key"
                      aria-label="Secret Key"
                      aria-describedby="secret-key"
                    />
                    <button
                      href="#0"
                      className="input-group-text"
                      id="secret-key"
                    >
                      <img
                        src="img/uploads/eye-hidden.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="row mt-4 mb-2">
                <div className="col-xl-12 col-lg-12 col-12">
                  <button
                    onclick="updateSettings()"
                    className="btn btn-primary btn-50"
                  >
                    Update Account Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
