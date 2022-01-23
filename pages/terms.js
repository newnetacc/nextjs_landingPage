import Link from "next/dist/client/link";
import Layout from "../src/layout/Layout";

const terms = () => {
  return (
    <Layout
      btnCustomHover="btn btn-skyblue tra-grey-hover last-link"
      singlePage
    >
      <section
        id="terms-page"
        className="bg-snow wide-70 inner-page-hero terms-section division"
      >
        <div className="container">
          {/* TERMS CONTENT */}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* TERMS TITLE */}
              <div className="terms-title text-center">
                {/* Title */}
                <h2 className="h2-md">Our Terms &amp; Privacy</h2>
                {/* Text */}
                <p className="p-xl grey-color">Last Modified: June 29, 2021</p>
              </div>
              {/* DIVIDER LINE */}
              <hr className="divider" />
              {/* TERMS BOX */}
              <div className="terms-box mt-60">
                {/* Text */}
                <p className="p-lg">
                  Donec sodales, nibh vel (the{" "}
                  <span className="txt-500">{`"Terms"`}</span>) tristique
                  aliquet, nisi libero suscipit diam, sed tempus ante nulla
                  purus. Donec dolor magna, a suscipit in magna dignissim,
                  porttitor an hendrerit diam. Nunc gravida ultrices faucibus.
                  Aliquet lorem purus, quis mollis nisi laoreet at vitae. Mauris
                  consequat tortor duis fermentum a massa
                </p>
                {/* Text */}
                <p className="p-lg">
                  Sagittis congue augue egestas volutpat egestas magna suscipit
                  egestas magna ipsum vitae purus efficitur and ipsum primis in
                  cubilia laoreet augue egestas luctus donec diam. Libero
                  curabitur dapibus quisque tristique neque blandit tristique
                  justo aliquam. Aliquam{" "}
                  <a href="#" className="skyblue-color">
                    molestie nunc sapien justo
                  </a>
                  , aliquet non molestie sed, venenatis nec purus. Aliquam eget
                  lacinia elit. Vestibulum tincidunt tincidunt massa, et
                  porttitor justo suscipit
                </p>
              </div>{" "}
              {/* END TERMS BOX */}
              {/* TERMS BOX */}
              <div className="terms-box">
                {/* Title */}
                <h5 className="h5-xl">Processing of your data</h5>
                {/* Text */}
                <p className="p-lg">
                  Donec sodales, nibh vel tristique aliquet, nisi libero
                  suscipit diam, sed tempus ante nulla ut purus. Donec dolor
                  magna aliquet suscipit in magna dignissim, porttitor
                  hendrerit. Nunc gravida ultrices a felis faucibus. Praesent
                  lorem purus, quis mollis nisi laoreet vitae. Mauris nec
                  consequat tortor
                </p>
                {/* Text */}
                <p className="p-lg">
                  Aliqum mullam blandit tempor sapien gravida donec ipsum, at
                  porta justo. Velna vitae auctor congue magna nihil impedit
                  ligula risus. Mauris donec ociis et magnis sapien sagittis
                  sapien sem congue tempor gravida and donec enim ipsum porta
                  justo integer velna a purus efficitur ipsum primis in cubilia
                  laoreet augue egestas luctus donec purus and blandit sodales
                </p>
                {/* List */}
                <ul className="simple-list">
                  <li className="list-item">
                    <p className="p-md">
                      <span className="txt-500">Email address</span> euismod
                      purus pretium purus pretium ligula rutrum tempor mullam
                      blandit tempor sapien and gravida donec ipsum at justo
                      turpis urna augue, viverra a augue eget
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      <span className="txt-500">Payment data</span> vitae auctor
                      a congue magna tempor sapien gravida laoreet turpis urna
                      augue, viverra a augue eget, dictum tempor diam pulvinar
                      consectetur purus efficitur ipsum primis in cubilia
                      laoreet augue donec, dictum tempor
                    </p>
                  </li>
                </ul>
                {/* Text */}
                <p className="p-lg">
                  Aliqum mullam blandit tempor sapien gravida donec ipsum, at
                  porta justo. Velna vitae auctor congue magna nihil impedit
                  ligula risus. Mauris donec ociis et magnis sapien sagittis
                  sapien sem congue tempor gravida donec enim ipsum porta justo
                  integer odio velna a purus efficitur ipsum primis in cubilia
                  laoreet augue egestas luctus donec purus and blandit sodales
                </p>
              </div>{" "}
              {/* END TERMS BOX */}
              {/* TERMS BOX */}
              <div className="terms-box">
                {/* Title */}
                <h5 className="h5-xl">Collection of information</h5>
                {/* Text */}
                <p className="p-lg">
                  In at mauris vel nisl convallis porta at vitae dui. Nam lacus
                  ligula, vulputate mullam molestie bibendum quis, aliquet massa
                  elementum. Vestibulum ut sagittis massa lorem fusce cursus
                  est. Fusce non nulla vitae massa placerat vulputate vel purus.
                  Aliqum blandit tempor undo sapien pulvinar consectetur nibh,
                  vel imperdiet dui varius viverra.
                </p>
              </div>{" "}
              {/* END TERMS BOX */}
              {/* TERMS BOX #3 */}
              <div className="terms-box">
                {/* Title */}
                <h5 className="h5-xl">
                  Authorized user accounts and account security
                </h5>
                {/* Text */}
                <p className="p-lg">
                  Suscipit in magna dignissim, porttitor hendrerit diam. Nunc
                  gravida ultrices felis eget faucibus. Praesent aliquet lorem
                  purus, quis mollis nisi laoreet vitae.{" "}
                  <a href="#" className="skyblue-color">
                    {" "}
                    Mauris nec consequat tortor.
                  </a>{" "}
                  Duis fermentum a massa in convallis quisque eu interdum augue.
                </p>
                {/* Text */}
                <p className="p-lg">
                  In at mauris vel nisl convallis porta at vitae dui. Nam lacus
                  ligula, vulputate mullam molestie bibendum quis, aliquet massa
                  elementum. Vestibulum ut sagittis massa lorem fusce cursus
                  est. Fusce non nulla vitae massa placerat vulputate vel purus.
                  Aliqum blandit tempor undo
                </p>
              </div>{" "}
              {/* END TERMS BOX */}
              {/* TERMS BOX */}
              <div className="terms-box">
                {/* Title */}
                <h5 className="h5-xl">Prohibited conduct and content</h5>
                {/* Text */}
                <p className="p-lg">
                  Sagittis congue augue egestas volutpat egestas magna suscipit
                  egestas magna ipsum vitae purus efficitur ipsum primis in
                  cubilia laoreet augue egestas luctus donec diam. Curabiturac
                  dapibus libero. Quisque eu tristique neque. Phasellus blandit
                  tristique justo ut aliquam. Aliquam vitae{" "}
                  <a href="#" className="skyblue-color">
                    molestie nunc sapien justo
                  </a>
                  , aliquet non molestie sed, venenatis nec purus. Aliquam eget
                  lacinia elit. Vestibulum tincidunt tincidunt massa, et
                  porttitor justo.
                </p>
                {/* List */}
                <ul className="simple-list">
                  <li className="list-item">
                    <p className="p-lg">
                      <span className="txt-500">
                        Quaerat sodales sapien undo euismod purus blandit velna
                      </span>{" "}
                      vitae auctor a congue magna tempor sapien eget gravida
                      laoreet turpis urna augue, viverra a augue eget, dictum
                      tempor diam pulvinar consectetur purus efficitur ipsum
                      primis in cubilia laoreet augue donec
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      <span className="txt-500">
                        Nemo ipsam egestas volute turpis dolores
                      </span>{" "}
                      ut aliquam quaerat sodales sapien congue augue egestas
                      volutpat egestas magna suscipit egestas magna ipsum vitae
                      purus efficitur ipsum primis in cubilia undo pretium a
                      purus pretium ligula
                    </p>
                  </li>
                </ul>
              </div>{" "}
              {/* END TERMS BOX */}
              {/* TERMS BOX #5 */}
              <div className="terms-box">
                {/* Title */}
                <h5 className="h5-xl">Your responsibilities</h5>
                {/* Text */}
                <p className="p-lg">
                  Aliqum mullam blandit tempor sapien gravida donec ipsum, at
                  porta justo. Velna vitae auctor congue magna nihil impedit
                  ligula risus. Mauris donec ociis et magnis sapien sagittis
                  sapien sem congue tempor gravida donec enim ipsum porta justo
                  integer odio velna a purus efficitur ipsum primis in cubilia
                  laoreet augue egestas luctus donec purus and blandit sodales
                </p>
                {/* List */}
                <ul className="simple-list">
                  <li className="list-item">
                    <p className="p-lg">
                      Donec dolor magna, suscipit in magna dignissim, porttitor
                      hendrerit diam. Nunc gravida ultrices felis eget faucibus.
                      Praesent aliquet tempus, blandit posuere ligula varius
                      congue cursus
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      Aliquam varius neque commodo purus vulputate pharetra
                      bibendum in ante ornare metus
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      Morbi dui lectus, lobortis sit amet felis nec, suscipit
                      imperdiet sapien semper ultrices
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      Nulla tincidunt volutpat tincidunt. Pellentesque habitant
                      morbi tristique senectus et netus and famesa malesuada
                      augue suscipit, luctus neque purus ipsum neque dolor
                      primis
                    </p>
                  </li>
                </ul>
              </div>{" "}
              {/* END TERMS BOX */}
              {/* TERMS BOX */}
              <div className="terms-box">
                {/* Title */}
                <h5 className="h5-xl">Availability of services</h5>
                {/* List */}
                <ul className="simple-list">
                  <li className="list-item">
                    <p className="p-lg">
                      <span className="txt-500">
                        Nemo ipsam egestas volute turpis dolores
                      </span>{" "}
                      ut aliquam quaerat sodales sapien congue augue egestas
                      volutpat egestas magna suscipit egestas magna ipsum vitae
                      purus efficitur ipsum primis in cubilia undo pretium a
                      purus pretium ligula
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      <span className="txt-500">
                        Quaerat sodales sapien undo euismod purus blandit velna
                      </span>{" "}
                      vitae auctor a congue magna tempor sapien eget gravida
                      laoreet turpis urna augue, viverra a augue eget, dictum
                      tempor diam pulvinar consectetur purus efficitur ipsum
                      primis in cubilia laoreet augue donec
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      <span className="txt-500">
                        Fringilla risus nec, luctus mauris orci auctor
                      </span>
                      euismod purus pretium purus pretium ligula rutrum tempor
                      mullam blandit tempor sapien and gravida donec ipsum at
                      justo quis vehicula magna luctus tempor. Quisque laoreet
                      turpis urna augue, viverra a augue eget, dictum tempor
                      diam. Sed pulvinar consectetur and placerat imperdiet dui
                      varius viverra
                    </p>
                  </li>
                </ul>
              </div>{" "}
              {/* END TERMS BOX */}
              {/* TERMS BOX */}
              <div className="terms-box">
                {/* Title */}
                <h5 className="h5-xl">Term for storing personal data</h5>
                {/* Text */}
                <p className="p-lg">
                  Donec sodales, nibh vel tristique aliquet, nisi libero
                  suscipit diam, sed tempus ante nulla purus. Donec dolor magna,
                  suscipit in magna dignissim, porttitor hendrerit diam. Nunc
                  gravida
                </p>
                {/* Text */}
                <p className="p-lg">
                  Aliqum mullam blandit tempor sapien gravida donec ipsum, at
                  porta justo. Velna vitae auctor and congue magna impedit
                  ligula risus. Mauris donec ociis et magnis sapien sagittis
                  sapien sem congue tempor undo donec gravida enim ipsum porta
                  justo integer odio velna a purus efficitur and ipsum primis
                  cubilia laoreet augue egestas luctus donec purus and blandit
                  sodales
                </p>
              </div>{" "}
              {/* END TERMS BOX */}
              {/* TERMS BOX */}
              <div className="terms-box">
                {/* Title */}
                <h5 className="h5-xl">Warranty limitations</h5>
                {/* Text */}
                <p className="p-lg">
                  Ut non mauris libero. Sed consequat posuere nunc, eu porttitor
                  neque dignissim donec bibendum a sodales elit blandit.
                  Suspendisse at finibus metus. Integer nulla quam, pulvinar
                  fermentum a commodo undo pulvinar sed nisi. Sed augue turpis,
                  mollis a vehicula ornare, dapibus
                </p>
                {/* Text */}
                <p className="p-lg">
                  Aliqum mullam blandit tempor sapien gravida donec ipsum, at
                  porta justo. Velna vitae auctor congue magna nihil impedit
                  ligula risus. Mauris donec ociis et magnis sapien sagittis
                  sapien sem congue tempor gravida an donec enim ipsum porta
                  justo integer odio velna a purus efficitur ipsum primis in
                  cubilia laoreet egestas and luctus donec purus and blandit
                  sodales
                </p>
              </div>{" "}
              {/* END TERMS BOX */}
              {/* TERMS BOX #9 */}
              <div className="terms-box">
                {/* Title */}
                <h5 className="h5-xl">Notices</h5>
                {/* Text */}
                <p className="p-lg">
                  Maecenas gravida porttitor nunc, quis vehicula magna luctus
                  tempor. Quisque laoreet turpis urna augue, viverra a augue
                  eget, dictum tempor diam. Sed pulvinar consectetur and
                  placerat imperdiet dui varius viverra. Pellentesque ac massa
                  lorem fusce cursus aliquet elementum
                </p>
                {/* List */}
                <ul className="simple-list">
                  <li className="list-item">
                    <p className="p-lg">
                      <span className="txt-500">
                        Quaerat sodales sapien undo euismod purus blandit velna
                      </span>{" "}
                      vitae auctor a congue magna tempor sapien eget gravida
                      laoreet turpis urna augue, viverra a augue eget, dictum
                      tempor diam pulvinar consectetur purus efficitur ipsum
                      primis in cubilia laoreet augue donec
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      <span className="txt-500">
                        Fringilla risus nec, luctus mauris orci auctor
                      </span>
                      euismod purus pretium purus pretium ligula rutrum tempor
                      mullam blandit tempor sapien and gravida donec ipsum at
                      justo quis vehicula magna luctus tempor. Quisque laoreet
                      turpis urna augue, viverra a augue eget, dictum tempor
                      diam. Sed pulvinar consectetur and placerat imperdiet dui
                      varius viverra
                    </p>
                  </li>
                </ul>
              </div>{" "}
              {/* END TERMS BOX */}
              {/* TERMS BOX */}
              <div className="terms-box">
                {/* Title */}
                <h5 className="h5-xl">Third Party Beneficiary</h5>
                {/* Text */}
                <p className="p-lg">
                  Aliqum mullam blandit tempor sapien gravida donec ipsum, at
                  porta justo. Velna vitae auctor congue magna nihil impedit
                  ligula risus. Mauris donec ociis et magnis sapien sagittis
                  sapien sem congue tempor gravida at donec enim ipsum porta
                  justo integer odio velna a purus ipsum primis in cubilia
                  laoreet undo augue egestas luctus donec purus and blandit
                  sodales
                </p>
                {/* Text */}
                <p className="p-lg">
                  Donec sodales, nibh vel tristique aliquet, nisi libero
                  suscipit diam, sed tempus ante nulla purus. Donec dolor
                  suscipit and magna, in magna dignissim, porttitor hendrerit
                  nunc gravida ultrices felis. Quisque eleifend arcu ac tellus
                  cursus, nec vehicula diam tempus. Nam ut sapien et mi congue
                  tincidunt. Phasellus in exneque.
                </p>
              </div>{" "}
              {/* END TERMS BOX */}
              {/* TERMS BOX */}
              <div className="terms-box">
                {/* Title */}
                <h5 className="h5-xl">Other Terms</h5>
                {/* Text */}
                <p className="p-lg">
                  Aliqum mullam blandit tempor sapien gravida donec ipsum, at
                  porta justo. Velna vitae auctor congue magna nihil impedit
                  ligula risus. Mauris donec ociis et magnis sapien sagittis
                  sapien congue tempor gravida a donec enim ipsum porta justo
                  integer velna a purus efficitur ipsum primis in cubilia
                  laoreet an augue egestas luctus donec purus and blandit
                  sodales
                </p>
                {/* Text */}
                <p className="p-lg">
                  Sagittis congue augue egestas volutpat egestas magna suscipit
                  egestas magna ipsum vitae purus efficitur ipsum primis in
                  cubilia laoreet augue egestas luctus donec diam. Curabitur ac
                  dapibus ibero. Quisque undo tristique neque phasellus blandit
                  non tristique justo ut aliquam. Aliquam vitae{" "}
                  <a href="#" className="skyblue-color">
                    {" "}
                    molestie nunc sapien justo
                  </a>
                  , aliquet molestie sed, venenatis nec purus. Aliquam eget
                  lacinia elit. Vestibulum tincidunt tincidunt
                </p>
                {/* List */}
                <ul className="simple-list">
                  <li className="list-item">
                    <p className="p-lg">
                      Donec dolor magna, suscipit in magna dignissim, porttitor
                      hendrerit diam. Nunc gravida ultrices a faucibus felis.
                      Praesent aliquet tempus, blandit posuere ligula varius
                      congue cursus
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      Aliquam varius neque commodo purus vulputate pharetra
                      bibendum in ante ornare metus
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      Morbi dui lectus, lobortis sit amet felis nec, suscipit
                      imperdiet sapien semper ultrices. Nulla tincidunt purus
                      volutpat at tincidunt. Habitant morbi tristique senectus
                      et netus malesuada famesa augue suscipit a luctus neque
                      purus ipsum neque dolor
                    </p>
                  </li>
                </ul>
                {/* Text */}
                <p className="p-lg">
                  Suscipit in magna dignissim, porttitor hendrerit diam. Nunc
                  gravida ultrices felis eget faucibus. Praesent and aliquet
                  lorem purus, quis mollis nisi laoreet vitae.{" "}
                  <a href="#" className="skyblue-color">
                    {" "}
                    Mauris nec consequat tortor
                  </a>
                </p>
              </div>{" "}
              {/* END TERMS BOX */}
            </div>{" "}
            {/* END TERMS CONTENT */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
      {/* END TERMS & PRIVACY */}
      {/* CALL TO ACTION-1
			============================================= */}
      <section id="cta-1" className="bg-snow cta-section division">
        <div className="container">
          <div className="rel bg-white cta-1-wrapper">
            <div className="row d-flex align-items-center">
              {/* CALL TO ACTION TEXT */}
              <div className="col-lg-8">
                <div className="cta-1-txt">
                  <h4 className="h4-xl">
                    Try OLMO free for 14 days. Start your trial now and pick a
                    plan later
                  </h4>
                </div>
              </div>
              {/* CALL TO ACTION BUTTON */}
              <div className="col-lg-4">
                <div className="text-end">
                  <div className="cta-1-btn text-center">
                    <Link href="/pricing">
                      <a className="btn btn-skyblue tra-grey-hover">
                        Get Started Now
                      </a>
                    </Link>
                    <p>
                      <a href="#">Read The FAQs</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
    </Layout>
  );
};

export default terms;
