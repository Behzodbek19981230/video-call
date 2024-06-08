import React from "react";

const SignInPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <div className="cl-rootBox cl-signIn-root 🔒️ cl-internal-phfxlr">
        <div className="cl-cardBox cl-signIn-start 🔒️ cl-internal-wlex0v">
          <div className="cl-card cl-signIn-start 🔒️ cl-internal-2cr4gg">
            <div className="cl-header 🔒️ cl-internal-qo3qk7">
              <div className="cl-logoBox 🔒️ cl-internal-vgl83l">
                <a className="cl-internal-cpbpoe" href="http://localhost:3000/">
                  <img
                    crossOrigin="anonymous"
                    src="/icons/yoom-logo.svg"
                    className="cl-logoImage 🔒️ cl-internal-uumn80"
                    alt="video_conf"
                  />
                </a>
              </div>
              <div className="cl-internal-1pr5xvn">
                <h1
                  className="cl-headerTitle 🔒️ cl-internal-17wmim4"
                  data-localization-key="signIn.start.title"
                >
                  Sign in to video_conf
                </h1>
                <p
                  className="cl-headerSubtitle 🔒️ cl-internal-r26unt"
                  data-localization-key="signIn.start.subtitle"
                >
                  Welcome back! Please sign in to continue
                </p>
              </div>
            </div>
            <div className="cl-main 🔒️ cl-internal-qo3qk7">
              <div className="cl-internal-11m7oop">
                <div className="cl-socialButtons 🔒️ cl-internal-fo33lg">
                  <button
                    className="cl-socialButtonsIconButton cl-button cl-socialButtonsIconButton__google cl-button__google 🔒️ cl-internal-2im6sq"
                    data-variant="outline"
                    data-color="neutral"
                  >
                    <img
                      crossOrigin="anonymous"
                      srcSet="https://img.clerk.com/static/google.svg?width=80 1x,https://img.clerk.com/static/google.svg?width=160 2x"
                      src="https://img.clerk.com/static/google.svg?width=160"
                      className="cl-socialButtonsProviderIcon cl-providerIcon cl-socialButtonsProviderIcon__google cl-providerIcon__google 🔒️ cl-internal-2gzuzc"
                      alt="Sign in with Google"
                    />
                  </button>
                </div>
              </div>
              <div className="cl-dividerRow 🔒️ cl-internal-ovdovs">
                <div className="cl-dividerLine 🔒️ cl-internal-1ftpdtb"></div>
                <p
                  className="cl-dividerText 🔒️ cl-internal-oqzvix"
                  data-localization-key="dividerText"
                >
                  or
                </p>
                <div className="cl-dividerLine 🔒️ cl-internal-1ftpdtb"></div>
              </div>
              <form className="cl-form 🔒️ cl-internal-tgducu">
                <button
                  type="submit"
                  aria-hidden="true"
                  style={{ visibility: "hidden", position: "absolute" }}
                ></button>
                <div className="cl-internal-w8uam1">
                  <div className="cl-formFieldRow cl-formFieldRow__identifier 🔒️ cl-internal-1yma7i9">
                    <div className="cl-formField cl-formField__identifier 🔒️ cl-internal-10rdw13">
                      <div className="cl-internal-11m7oop">
                        <div className="cl-formFieldLabelRow cl-formFieldLabelRow__identifier 🔒️ cl-internal-66mzqw">
                          <label
                            className="cl-formFieldLabel cl-formFieldLabel__identifier-field cl-required 🔒️ cl-internal-1sbbqks"
                            data-localization-key="formFieldLabel__emailAddress"
                            htmlFor="identifier-field"
                          >
                            Email address
                          </label>
                        </div>
                        <input
                          className="cl-formFieldInput cl-input cl-formFieldInput__identifier cl-input__identifier cl-required 🔒️ cl-internal-vsyo1i"
                          id="identifier-field"
                          name="identifier"
                          placeholder=""
                          type="text"
                          pattern="^.*@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$"
                          required
                          aria-invalid="false"
                          aria-required="true"
                          aria-disabled="false"
                          data-feedback="info"
                          data-variant="default"
                          value="behzodrasulov432@gmail.com"
                        />
                      </div>
                      <div
                        className="cl-internal-ct77wn"
                        style={{ height: "0px", position: "relative" }}
                      ></div>
                    </div>
                  </div>
                  <div className="cl-formFieldRow cl-formFieldRow__password 🔒️ cl-internal-1yma7i9">
                    <div className="cl-formField cl-formField__password 🔒️ cl-internal-10rdw13">
                      <div className="cl-internal-11m7oop">
                        <div className="cl-formFieldLabelRow cl-formFieldLabelRow__password 🔒️ cl-internal-66mzqw">
                          <label
                            className="cl-formFieldLabel cl-formFieldLabel__password-field 🔒️ cl-internal-1sbbqks"
                            data-localization-key="formFieldLabel__password"
                            htmlFor="password-field"
                          >
                            Password
                          </label>
                        </div>
                        <div className="cl-formFieldInputGroup 🔒️ cl-internal-i1u4p8">
                          <input
                            className="cl-formFieldInput cl-input cl-formFieldInput__password cl-input__password 🔒️ cl-internal-1f20wsg"
                            name="password"
                            placeholder=""
                            type="password"
                            id="password-field"
                            aria-invalid="false"
                            aria-required="false"
                            aria-disabled="false"
                            data-feedback="info"
                            data-variant="default"
                            value="123456"
                          />
                          <button
                            className="cl-formFieldInputShowPasswordButton cl-button 🔒️ cl-internal-1n6yo8n"
                            aria-label="Show password"
                            tabIndex={-1}
                            data-variant="ghost"
                            data-color="primary"
                          >
                            <svg
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 16 16"
                              className="cl-formFieldInputShowPasswordIcon 🔒️ cl-internal-oaq42g"
                            >
                              <path d="M8 9.607c.421 0 .825-.17 1.123-.47a1.617 1.617 0 0 0 0-2.273 1.578 1.578 0 0 0-2.246 0 1.617 1.617 0 0 0 0 2.272c.298.302.702.471 1.123.471Z"></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.07 8.38a1.073 1.073 0 0 1 0-.763 6.42 6.42 0 0 1 2.334-2.99A6.302 6.302 0 0 1 8 3.5c2.704 0 5.014 1.71 5.93 4.12.094.246.093.518 0 .763a6.418 6.418 0 0 1-2.334 2.99A6.301 6.301 0 0 1 8 12.5c-2.704 0-5.013-1.71-5.93-4.12ZM10.54 8c0 .682-.267 1.336-.743 1.818A2.526 2.526 0 0 1 8 10.571c-.674 0-1.32-.27-1.796-.753A2.587 2.587 0 0 1 5.459 8c0-.682.268-1.336.745-1.818A2.525 2.525 0 0 1 8 5.429c.674 0 1.32.27 1.797.753.476.482.744 1.136.744 1.818Z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div
                        className="cl-internal-ct77wn"
                        style={{ height: "0px", position: "relative" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <button
                  className="cl-formButtonPrimary cl-button 🔒️ cl-internal-b6u84v"
                  data-localization-key="formButtonPrimary"
                  data-variant="solid"
                  data-color="primary"
                >
                  <span className="cl-internal-2iusy0">
                    Continue
                    <svg className="cl-buttonArrowIcon 🔒️ cl-internal-1c4ikgf">
                      <path
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="m7.25 5-3.5-2.25v4.5L7.25 5Z"
                      ></path>
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
          <div className="cl-footer 🔒️ cl-internal-13ipea7">
            <div className="cl-footerAction cl-footerAction__signIn 🔒️ cl-internal-1rpdi70">
              <span
                className="cl-footerActionText 🔒️ cl-internal-laksia"
                data-localization-key="signIn.start.actionText"
              >
                Don’t have an account?
              </span>
              <a
                className="cl-footerActionLink 🔒️ cl-internal-hrrh4y"
                data-localization-key="signIn.start.actionLink"
                href="http://localhost:3000/sign-up#/?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F"
              >
                Sign up
              </a>
            </div>
            <div className="cl-internal-180wb59">
              <div className="cl-internal-16rjnjd">
                <p className="cl-internal-wf8x4b">Secured by</p>
                <a
                  aria-label="Clerk logo"
                  className="cl-internal-1fcj7sw"
                  href="https://www.clerk.com?utm_source=clerk&amp;utm_medium=components"
                  target="_blank"
                  rel="noopener"
                >
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 14"
                    className="cl-internal-5ghyhf"
                  >
                    <ellipse
                      cx="7.889"
                      cy="7"
                      rx="2.187"
                      ry="2.188"
                      fill="currentColor"
                    ></ellipse>
                    <path
                      d="M11.83 12.18a.415.415 0 0 1-.05.64A6.967 6.967 0 0 1 7.888 14a6.967 6.967 0 0 1-3.891-1.18.415.415 0 0 1-.051-.64l1.598-1.6a.473.473 0 0 1 .55-.074 3.92 3.92 0 0 0 1.794.431 3.92 3.92 0 0 0 1.792-.43.473.473 0 0 1 .551.074l1.599 1.598Z"
                      fill="currentColor"
                    ></path>
                    <path
                      opacity="0.5"
                      d="M11.78 1.18a.415.415 0 0 1 .05.64l-1.598 1.6a.473.473 0 0 1-.55.073 3.937 3.937 0 0 0-5.3 5.3.473.473 0 0 1-.074.55L2.71 10.942a.415.415 0 0 1-.641-.051 7 7 0 0 1 9.71-9.71Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.748 1.422c0-.06.05-.11.11-.11h1.64c.06 0 .11.05.11.11v11.156a.11.11 0 0 1-.11.11h-1.64a.11.11 0 0 1-.11-.11V1.422Zm-2.315 8.9a.112.112 0 0 0-.15.004 2.88 2.88 0 0 1-.884.569c-.36.148-.747.222-1.137.219-.33.01-.658-.047-.965-.166a2.422 2.422 0 0 1-.817-.527c-.424-.432-.668-1.05-.668-1.785 0-1.473.98-2.48 2.45-2.48.394-.005.785.074 1.144.234.325.144.617.35.86.607.04.044.11.049.155.01l1.108-.959a.107.107 0 0 0 .01-.152c-.832-.93-2.138-1.412-3.379-1.412-2.499 0-4.27 1.686-4.27 4.166 0 1.227.44 2.26 1.182 2.99.743.728 1.801 1.157 3.022 1.157 1.53 0 2.763-.587 3.485-1.34a.107.107 0 0 0-.009-.155l-1.137-.98Zm13.212-1.14a.108.108 0 0 1-.107.096H28.79a.106.106 0 0 0-.104.132c.286 1.06 1.138 1.701 2.302 1.701a2.59 2.59 0 0 0 1.136-.236 2.55 2.55 0 0 0 .862-.645.08.08 0 0 1 .112-.01l1.155 1.006c.044.039.05.105.013.15-.698.823-1.828 1.42-3.38 1.42-2.386 0-4.185-1.651-4.185-4.162 0-1.232.424-2.264 1.13-2.994.373-.375.82-.67 1.314-.87a3.968 3.968 0 0 1 1.557-.285c2.419 0 3.983 1.701 3.983 4.05a6.737 6.737 0 0 1-.04.647Zm-5.924-1.524a.104.104 0 0 0 .103.133h3.821c.07 0 .123-.066.103-.134-.26-.901-.921-1.503-1.947-1.503a2.13 2.13 0 0 0-.88.16 2.1 2.1 0 0 0-.733.507 2.242 2.242 0 0 0-.467.837Zm11.651-3.172c.061-.001.11.048.11.109v1.837a.11.11 0 0 1-.117.109 7.17 7.17 0 0 0-.455-.024c-1.43 0-2.27 1.007-2.27 2.329v3.732a.11.11 0 0 1-.11.11h-1.64a.11.11 0 0 1-.11-.11v-7.87c0-.06.049-.109.11-.109h1.64c.06 0 .11.05.11.11v1.104a.011.011 0 0 0 .02.007c.64-.857 1.587-1.333 2.587-1.333l.125-.001Zm4.444 4.81a.035.035 0 0 1 .056.006l2.075 3.334a.11.11 0 0 0 .093.052h1.865a.11.11 0 0 0 .093-.168L46.152 7.93a.11.11 0 0 1 .012-.131l2.742-3.026a.11.11 0 0 0-.081-.183h-1.946a.11.11 0 0 0-.08.036l-3.173 3.458a.11.11 0 0 1-.19-.074V1.422a.11.11 0 0 0-.11-.11h-1.64a.11.11 0 0 0-.11.11v11.156c0 .06.05.11.11.11h1.64a.11.11 0 0 0 .11-.11v-1.755a.11.11 0 0 1 .03-.075l1.35-1.452Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignInPage;
