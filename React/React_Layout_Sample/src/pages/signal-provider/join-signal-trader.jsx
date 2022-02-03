const JoinSignalProviderPage = () => {
  return (
    <div className="container-fluid p-0">
      <div className="card mb-0 d-xl-block d-none">
        <div className="card-body">
          <a href="#0" className="text-dull">
            TradePro &gt;{" "}
          </a>
          <a href="#0" className="theme-color font-bold">
            Copy Traders View
          </a>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-xl-12 col-lg-12 col-12">
          <div className="alert alert-primary p-4" role="alert">
            <ul className="alert-ul ul-basic">
              <li>
                <img src="img/info.svg" alt="" className="img-fluid me-2" />
                To Join as a Copy Trader, please submit your information.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card mb-0">
        <div className="card-body mob-pad-0">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-12">
              <h1 className="font-18 font-bold mb-0">Join as a Copy Trader</h1>
            </div>
            <div className="col-xl-4 col-lg-4 col-12 text-end mob-text-left">
              <p className="mb-0 mob-mt-3">
                Current Status: <span id="dataPresent"> </span>
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xl-12 col-lg-12 col-12">
              <ul
                className="nav nav-tabs join-tabs-ul"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="frontend-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#frontend"
                    type="button"
                    role="tab"
                    aria-controls="frontend"
                    aria-selected="true"
                  >
                    Profile
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="backend-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#backend"
                    type="button"
                    role="tab"
                    aria-controls="backend"
                    aria-selected="false"
                  >
                    Upload Documents
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="database-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#database"
                    type="button"
                    role="tab"
                    aria-controls="database"
                    aria-selected="false"
                  >
                    FAQs
                  </button>
                </li>
              </ul>
              <div className="tab-content mt-4" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="frontend"
                  role="tabpanel"
                  aria-labelledby="frontend-tab"
                >
                  <div className="row">
                    <div className="col-xl-12">
                      <form
                        enctype="multipart/form-data"
                        onsubmit="copyTraderClk(event)"
                      >
                        <div className="row">
                          <div className="col-xl-3 col-lg-3 col-12">
                            <label className="form-label">
                              Profile Picture
                            </label>
                            <div className="input-group">
                              <input
                                id="file-selector"
                                type="file"
                                className="form-control"
                                aria-label="Upload"
                              />
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-12">
                            <label className="form-label">User Name *</label>
                            <input
                              name="username"
                              type="text"
                              className="form-control"
                              placeholder="Enter username"
                            />
                          </div>
                          <div className="col-xl-3 col-lg-3 col-12">
                            <label className="form-label">
                              Email Address *
                            </label>
                            <input
                              name="email"
                              type="email"
                              className="form-control"
                              placeholder="Enter Email Address"
                            />
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-xl-3 col-lg-3 col-12">
                            <label className="form-label">First Name *</label>
                            <input
                              name="firstname"
                              type="text"
                              className="form-control"
                              placeholder="First Name"
                            />
                          </div>
                          <div className="col-xl-3 col-lg-3 col-12">
                            <label className="form-label">Middle Name</label>
                            <input
                              name="middlename"
                              type="text"
                              className="form-control"
                              placeholder="Middle Name"
                            />
                          </div>
                          <div className="col-xl-3 col-lg-3 col-12">
                            <label className="form-label">Last Name *</label>
                            <input
                              name="lastname"
                              type="text"
                              className="form-control"
                              placeholder="Last Name"
                            />
                          </div>
                          <div className="col-xl-3 col-lg-3 col-12">
                            <label className="form-label">Gender *</label>
                            <select
                              name="gender"
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected="">Select a Gender</option>
                              <option value="1">Male</option>
                              <option value="2">Female</option>
                            </select>
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-xl-3 col-lg-3 col-12">
                            <label className="form-label">
                              Date of Birth *
                            </label>
                            <input
                              name="dob"
                              type="date"
                              className="form-control"
                              placeholder="Date of Birth"
                            />
                          </div>
                          <div className="col-xl-3 col-lg-3 col-12">
                            <label className="form-label">
                              Country of Residence *
                            </label>
                            <input
                              name="countryofresidence"
                              type="text"
                              className="form-control"
                              placeholder="Country of Residence"
                            />

                            <select
                              placeholder="Country of Residence"
                              id="countryofresidence"
                              name="countryofresidence"
                              className="form-control ptr"
                            >
                              <option>Select Country</option>
                              <option value="AF">Afghanistan</option>
                              <option value="AX">Aland Islands</option>
                              <option value="AL">Albania</option>
                              <option value="DZ">Algeria</option>
                              <option value="AS">American Samoa</option>
                              <option value="AD">Andorra</option>
                              <option value="AO">Angola</option>
                              <option value="AI">Anguilla</option>
                              <option value="AQ">Antarctica</option>
                              <option value="AG">Antigua and Barbuda</option>
                              <option value="AR">Argentina</option>
                              <option value="AM">Armenia</option>
                              <option value="AW">Aruba</option>
                              <option value="AU">Australia</option>
                              <option value="AT">Austria</option>
                              <option value="AZ">Azerbaijan</option>
                              <option value="BS">Bahamas</option>
                              <option value="BH">Bahrain</option>
                              <option value="BD">Bangladesh</option>
                              <option value="BB">Barbados</option>
                              <option value="BY">Belarus</option>
                              <option value="BE">Belgium</option>
                              <option value="BZ">Belize</option>
                              <option value="BJ">Benin</option>
                              <option value="BM">Bermuda</option>
                              <option value="BT">Bhutan</option>
                              <option value="BO">Bolivia</option>
                              <option value="BQ">
                                Bonaire, Sint Eustatius and Saba
                              </option>
                              <option value="BA">Bosnia and Herzegovina</option>
                              <option value="BW">Botswana</option>
                              <option value="BV">Bouvet Island</option>
                              <option value="BR">Brazil</option>
                              <option value="IO">
                                British Indian Ocean Territory
                              </option>
                              <option value="BN">Brunei Darussalam</option>
                              <option value="BG">Bulgaria</option>
                              <option value="BF">Burkina Faso</option>
                              <option value="BI">Burundi</option>
                              <option value="KH">Cambodia</option>
                              <option value="CM">Cameroon</option>
                              <option value="CA">Canada</option>
                              <option value="CV">Cape Verde</option>
                              <option value="KY">Cayman Islands</option>
                              <option value="CF">
                                Central African Republic
                              </option>
                              <option value="TD">Chad</option>
                              <option value="CL">Chile</option>
                              <option value="CN">China</option>
                              <option value="CX">Christmas Island</option>
                              <option value="CC">
                                Cocos (Keeling) Islands
                              </option>
                              <option value="CO">Colombia</option>
                              <option value="KM">Comoros</option>
                              <option value="CG">Congo</option>
                              <option value="CD">
                                Congo, Democratic Republic of the Congo
                              </option>
                              <option value="CK">Cook Islands</option>
                              <option value="CR">Costa Rica</option>
                              <option value="CI">Cote D'Ivoire</option>
                              <option value="HR">Croatia</option>
                              <option value="CU">Cuba</option>
                              <option value="CW">Curacao</option>
                              <option value="CY">Cyprus</option>
                              <option value="CZ">Czech Republic</option>
                              <option value="DK">Denmark</option>
                              <option value="DJ">Djibouti</option>
                              <option value="DM">Dominica</option>
                              <option value="DO">Dominican Republic</option>
                              <option value="EC">Ecuador</option>
                              <option value="EG">Egypt</option>
                              <option value="SV">El Salvador</option>
                              <option value="GQ">Equatorial Guinea</option>
                              <option value="ER">Eritrea</option>
                              <option value="EE">Estonia</option>
                              <option value="ET">Ethiopia</option>
                              <option value="FK">
                                Falkland Islands (Malvinas)
                              </option>
                              <option value="FO">Faroe Islands</option>
                              <option value="FJ">Fiji</option>
                              <option value="FI">Finland</option>
                              <option value="FR">France</option>
                              <option value="GF">French Guiana</option>
                              <option value="PF">French Polynesia</option>
                              <option value="TF">
                                French Southern Territories
                              </option>
                              <option value="GA">Gabon</option>
                              <option value="GM">Gambia</option>
                              <option value="GE">Georgia</option>
                              <option value="DE">Germany</option>
                              <option value="GH">Ghana</option>
                              <option value="GI">Gibraltar</option>
                              <option value="GR">Greece</option>
                              <option value="GL">Greenland</option>
                              <option value="GD">Grenada</option>
                              <option value="GP">Guadeloupe</option>
                              <option value="GU">Guam</option>
                              <option value="GT">Guatemala</option>
                              <option value="GG">Guernsey</option>
                              <option value="GN">Guinea</option>
                              <option value="GW">Guinea-Bissau</option>
                              <option value="GY">Guyana</option>
                              <option value="HT">Haiti</option>
                              <option value="HM">
                                Heard Island and Mcdonald Islands
                              </option>
                              <option value="VA">
                                Holy See (Vatican City State)
                              </option>
                              <option value="HN">Honduras</option>
                              <option value="HK">Hong Kong</option>
                              <option value="HU">Hungary</option>
                              <option value="IS">Iceland</option>
                              <option value="IN">India</option>
                              <option value="ID">Indonesia</option>
                              <option value="IR">
                                Iran, Islamic Republic of
                              </option>
                              <option value="IQ">Iraq</option>
                              <option value="IE">Ireland</option>
                              <option value="IM">Isle of Man</option>
                              <option value="IL">Israel</option>
                              <option value="IT">Italy</option>
                              <option value="JM">Jamaica</option>
                              <option value="JP">Japan</option>
                              <option value="JE">Jersey</option>
                              <option value="JO">Jordan</option>
                              <option value="KZ">Kazakhstan</option>
                              <option value="KE">Kenya</option>
                              <option value="KI">Kiribati</option>
                              <option value="KP">
                                Korea, Democratic People's Republic of
                              </option>
                              <option value="KR">Korea, Republic of</option>
                              <option value="XK">Kosovo</option>
                              <option value="KW">Kuwait</option>
                              <option value="KG">Kyrgyzstan</option>
                              <option value="LA">
                                Lao People's Democratic Republic
                              </option>
                              <option value="LV">Latvia</option>
                              <option value="LB">Lebanon</option>
                              <option value="LS">Lesotho</option>
                              <option value="LR">Liberia</option>
                              <option value="LY">Libyan Arab Jamahiriya</option>
                              <option value="LI">Liechtenstein</option>
                              <option value="LT">Lithuania</option>
                              <option value="LU">Luxembourg</option>
                              <option value="MO">Macao</option>
                              <option value="MK">
                                Macedonia, the Former Yugoslav Republic of
                              </option>
                              <option value="MG">Madagascar</option>
                              <option value="MW">Malawi</option>
                              <option value="MY">Malaysia</option>
                              <option value="MV">Maldives</option>
                              <option value="ML">Mali</option>
                              <option value="MT">Malta</option>
                              <option value="MH">Marshall Islands</option>
                              <option value="MQ">Martinique</option>
                              <option value="MR">Mauritania</option>
                              <option value="MU">Mauritius</option>
                              <option value="YT">Mayotte</option>
                              <option value="MX">Mexico</option>
                              <option value="FM">
                                Micronesia, Federated States of
                              </option>
                              <option value="MD">Moldova, Republic of</option>
                              <option value="MC">Monaco</option>
                              <option value="MN">Mongolia</option>
                              <option value="ME">Montenegro</option>
                              <option value="MS">Montserrat</option>
                              <option value="MA">Morocco</option>
                              <option value="MZ">Mozambique</option>
                              <option value="MM">Myanmar</option>
                              <option value="NA">Namibia</option>
                              <option value="NR">Nauru</option>
                              <option value="NP">Nepal</option>
                              <option value="NL">Netherlands</option>
                              <option value="AN">Netherlands Antilles</option>
                              <option value="NC">New Caledonia</option>
                              <option value="NZ">New Zealand</option>
                              <option value="NI">Nicaragua</option>
                              <option value="NE">Niger</option>
                              <option value="NG">Nigeria</option>
                              <option value="NU">Niue</option>
                              <option value="NF">Norfolk Island</option>
                              <option value="MP">
                                Northern Mariana Islands
                              </option>
                              <option value="NO">Norway</option>
                              <option value="OM">Oman</option>
                              <option value="PK">Pakistan</option>
                              <option value="PW">Palau</option>
                              <option value="PS">
                                Palestinian Territory, Occupied
                              </option>
                              <option value="PA">Panama</option>
                              <option value="PG">Papua New Guinea</option>
                              <option value="PY">Paraguay</option>
                              <option value="PE">Peru</option>
                              <option value="PH">Philippines</option>
                              <option value="PN">Pitcairn</option>
                              <option value="PL">Poland</option>
                              <option value="PT">Portugal</option>
                              <option value="PR">Puerto Rico</option>
                              <option value="QA">Qatar</option>
                              <option value="RE">Reunion</option>
                              <option value="RO">Romania</option>
                              <option value="RU">Russian Federation</option>
                              <option value="RW">Rwanda</option>
                              <option value="BL">Saint Barthelemy</option>
                              <option value="SH">Saint Helena</option>
                              <option value="KN">Saint Kitts and Nevis</option>
                              <option value="LC">Saint Lucia</option>
                              <option value="MF">Saint Martin</option>
                              <option value="PM">
                                Saint Pierre and Miquelon
                              </option>
                              <option value="VC">
                                Saint Vincent and the Grenadines
                              </option>
                              <option value="WS">Samoa</option>
                              <option value="SM">San Marino</option>
                              <option value="ST">Sao Tome and Principe</option>
                              <option value="SA">Saudi Arabia</option>
                              <option value="SN">Senegal</option>
                              <option value="RS">Serbia</option>
                              <option value="CS">Serbia and Montenegro</option>
                              <option value="SC">Seychelles</option>
                              <option value="SL">Sierra Leone</option>
                              <option value="SG">Singapore</option>
                              <option value="SX">Sint Maarten</option>
                              <option value="SK">Slovakia</option>
                              <option value="SI">Slovenia</option>
                              <option value="SB">Solomon Islands</option>
                              <option value="SO">Somalia</option>
                              <option value="ZA">South Africa</option>
                              <option value="GS">
                                South Georgia and the South Sandwich Islands
                              </option>
                              <option value="SS">South Sudan</option>
                              <option value="ES">Spain</option>
                              <option value="LK">Sri Lanka</option>
                              <option value="SD">Sudan</option>
                              <option value="SR">Suriname</option>
                              <option value="SJ">Svalbard and Jan Mayen</option>
                              <option value="SZ">Swaziland</option>
                              <option value="SE">Sweden</option>
                              <option value="CH">Switzerland</option>
                              <option value="SY">Syrian Arab Republic</option>
                              <option value="TW">
                                Taiwan, Province of China
                              </option>
                              <option value="TJ">Tajikistan</option>
                              <option value="TZ">
                                Tanzania, United Republic of
                              </option>
                              <option value="TH">Thailand</option>
                              <option value="TL">Timor-Leste</option>
                              <option value="TG">Togo</option>
                              <option value="TK">Tokelau</option>
                              <option value="TO">Tonga</option>
                              <option value="TT">Trinidad and Tobago</option>
                              <option value="TN">Tunisia</option>
                              <option value="TR">Turkey</option>
                              <option value="TM">Turkmenistan</option>
                              <option value="TC">
                                Turks and Caicos Islands
                              </option>
                              <option value="TV">Tuvalu</option>
                              <option value="UG">Uganda</option>
                              <option value="UA">Ukraine</option>
                              <option value="AE">United Arab Emirates</option>
                              <option value="GB">United Kingdom</option>
                              <option value="US">United States</option>
                              <option value="UM">
                                United States Minor Outlying Islands
                              </option>
                              <option value="UY">Uruguay</option>
                              <option value="UZ">Uzbekistan</option>
                              <option value="VU">Vanuatu</option>
                              <option value="VE">Venezuela</option>
                              <option value="VN">Viet Nam</option>
                              <option value="VG">
                                Virgin Islands, British
                              </option>
                              <option value="VI">Virgin Islands, U.s.</option>
                              <option value="WF">Wallis and Futuna</option>
                              <option value="EH">Western Sahara</option>
                              <option value="YE">Yemen</option>
                              <option value="ZM">Zambia</option>
                              <option value="ZW">Zimbabwe</option>
                            </select>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-12">
                            <label className="form-label">State *</label>
                            <input
                              name="state"
                              type="text"
                              className="form-control"
                              placeholder="State"
                            />
                          </div>
                          <div className="col-xl-3 col-lg-3 col-12">
                            <label className="form-label">City *</label>
                            <input
                              name="city"
                              type="text"
                              className="form-control"
                              placeholder="City"
                            />
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-xl-3 col-lg-4 col-12">
                            <label className="form-label">Zip Code *</label>
                            <input
                              name="zipcode"
                              type="text"
                              className="form-control"
                              placeholder="Zip Code"
                            />
                          </div>
                          <div className="col-xl-6 col-lg-4 col-12">
                            <label className="form-label">Address *</label>
                            <input
                              name="address"
                              type="text"
                              className="form-control"
                              placeholder="Address"
                            />
                          </div>
                          <div className="col-xl-3 col-lg-4 col-12">
                            <label className="form-label">
                              Subscription Price
                            </label>
                            <input
                              name="subscriptionprice"
                              type="text"
                              className="form-control"
                              placeholder="free"
                              disabled=""
                            />
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-xl-6 col-lg-6 col-12">
                            <label className="form-label">Details</label>
                            <textarea
                              name="details"
                              className="form-control"
                              rows="5"
                              placeholder="Write your details"
                            ></textarea>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-12">
                            <label className="form-label">Strategy</label>
                            <textarea
                              name="strategy"
                              className="form-control"
                              rows="5"
                              placeholder="Write your strategy"
                            ></textarea>
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-xl-12 col-lg-12 col-12">
                            <button
                              type="submit"
                              className="btn btn-primary mob-mt-3"
                            >
                              Join as a Copy Trader
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="backend"
                  role="tabpanel"
                  aria-labelledby="backend-tab"
                >
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <h1 className="font-16 font-bold mob-mt-3">
                        Upload Documents for KYC
                      </h1>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-xl-4 col-lg-4 col-12">
                      <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Passport"
                      />
                      <img
                        src="img/passport.svg"
                        alt=""
                        className="img-fluid upload-img"
                      />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-12 mob-mt-3">
                      <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Aadhaar Card / National ID"
                      />
                      <img
                        src="img/aadhaar.svg"
                        alt=""
                        className="img-fluid upload-img"
                      />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-12 mob-mt-3">
                      <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Driving License"
                      />
                      <img
                        src="img/license.svg"
                        alt=""
                        className="img-fluid upload-img"
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <button
                        type="submit"
                        className="btn btn-primary mob-mt-3"
                      >
                        Upload Document
                      </button>
                    </div>
                  </div>
                  <hr className="mt-5" />
                  <div className="row mt-5">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <h1 className="font-16 mb-4 font-bold">
                        Documents Uploaded
                      </h1>
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead className="bg-white">
                            <tr>
                              <th scope="col">
                                Document Name
                                <img
                                  src="img/table-arrow.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </th>
                              <th scope="col" className="text-center">
                                Upload Date
                                <img
                                  src="img/table-arrow.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </th>
                              <th scope="col" className="text-center">
                                Upload Time
                                <img
                                  src="img/table-arrow.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </th>
                              <th scope="col" className="text-center">
                                Verification Status
                                <img
                                  src="img/table-arrow.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </th>
                              <th scope="col" className="text-center">
                                Action
                                <img
                                  src="img/table-arrow.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Passport</td>
                              <td className="text-center">31-10-2021</td>
                              <td className="text-center">10:26 pm</td>
                              <td className="text-center">Submitted</td>
                              <td className="text-center">
                                <img
                                  src="img/dustbin.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Passport</td>
                              <td className="text-center">31-10-2021</td>
                              <td className="text-center">10:26 pm</td>
                              <td className="text-center text-green">
                                Verified
                              </td>
                              <td className="text-center"></td>
                            </tr>
                            <tr>
                              <td>Passport</td>
                              <td className="text-center">31-10-2021</td>
                              <td className="text-center">10:26 pm</td>
                              <td className="text-center">Submitted</td>
                              <td className="text-center">
                                <img
                                  src="img/dustbin.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="database"
                  role="tabpanel"
                  aria-labelledby="database-tab"
                >
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <h1 className="font-18 font-bold mob-mt-3">
                        Frequently Asked Questions
                      </h1>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <form>
                        <div className="row">
                          <div className="col-xl-3 col-lg-3 col-12">
                            <label className="form-label">Question</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Write Question"
                            />
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-xl-12 col-lg-12 col-12">
                            <label className="form-label">Answer</label>
                            <textarea
                              className="form-control"
                              rows="10"
                              placeholder="Write answer"
                            ></textarea>
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-xl-12 col-lg-12 col-12">
                            <button className="btn btn-primary mob-mt-3">
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <hr className="mt-4" />
                  <div className="row mt-5">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <h1 className="font-18 font-bold">
                        Frequently Asked Questions
                      </h1>
                    </div>
                  </div>
                  <div className="row mt-4 mb-4">
                    <div className="col-xl-4 col-lg-4 col-12">
                      <div
                        className="accordion border p-2"
                        id="accordionExample"
                      >
                        <div className="accordion-item">
                          <h1 className="accordion-header mb-0" id="headingOne">
                            <button
                              className="btn accordion-button px-0 font-16 font-bold theme-color w-100 text-start collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="false"
                              aria-controls="collapseOne"
                            >
                              <a href="#0">
                                <img
                                  src="img/edit.svg"
                                  alt=""
                                  className="img-fluid me-2"
                                />
                              </a>
                              FAQ
                              <span className="float-end">
                                <img
                                  src="img/uploads/arrow-down-performance.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </span>
                            </button>
                          </h1>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <hr />
                              <div className="row mt-3">
                                <div className="col-xl-12 col-lg-12 col-12">
                                  <p className="mb-0">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not only five centuries,
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-12">
                      <div
                        className="accordion border p-2"
                        id="accordionExample1"
                      >
                        <div className="accordion-item">
                          <h1 className="accordion-header mb-0" id="headingTwo">
                            <button
                              className="btn accordion-button px-0 font-16 font-bold theme-color w-100 text-start collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              <a href="#0">
                                <img
                                  src="img/edit.svg"
                                  alt=""
                                  className="img-fluid me-2"
                                />
                              </a>
                              FAQ
                              <span className="float-end">
                                <img
                                  src="img/uploads/arrow-down-performance.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </span>
                            </button>
                          </h1>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample1"
                          >
                            <div className="accordion-body">
                              <hr />
                              <div className="row mt-3">
                                <div className="col-xl-12 col-lg-12 col-12">
                                  <p className="mb-0">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not only five centuries,
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-12">
                      <div
                        className="accordion border p-2"
                        id="accordionExample2"
                      >
                        <div className="accordion-item">
                          <h1
                            className="accordion-header mb-0"
                            id="headingThree"
                          >
                            <button
                              className="btn accordion-button px-0 font-16 font-bold theme-color w-100 text-start collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              <a href="#0">
                                <img
                                  src="img/edit.svg"
                                  alt=""
                                  className="img-fluid me-2"
                                />
                              </a>
                              FAQ
                              <span className="float-end">
                                <img
                                  src="img/uploads/arrow-down-performance.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </span>
                            </button>
                          </h1>
                          <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample2"
                          >
                            <div className="accordion-body">
                              <hr />
                              <div className="row mt-3">
                                <div className="col-xl-12 col-lg-12 col-12">
                                  <p className="mb-0">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not only five centuries,
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinSignalProviderPage;
