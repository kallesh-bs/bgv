import React from "react";
import "./contactModal.css";
import PropTypes from "prop-types";

const ContactModal = ({ closeModal }) => {
  const [dragActive, setDragActive] = React.useState(false);
  const inputRef = React.useRef(null);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // handleFiles(e.target.files);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="fixed z-50 top-[0px] left-0 b-0 w-full h-full flex
      flex-col items-center justify-center p-7 pb-14 bg-[#01223770]
      overflow-y-scroll scrollbar-hide text-black"
    >
      <div className="bg-white w-[726px] h-auto mt-10 shadow-[0_1px_4px_0px_rgba(0,0,0,0.3)]
        rounded flex flex-col justify-center items-center">
        <div className="flex justify-between items-center w-[100%] bg-[#F4F6FC] pt-[14px] pr-9 pb-[14px] pl-[50px]">
          <div>
            <h2 className="text-[#031B59] text-[24px] font-bold ml-[20px]">
              Apply to Deeporion
            </h2>
          </div>
          <div className="mr-[35px] text-[40px]">
            <button onClick={closeModal}> &times;</button>
          </div>
        </div>
        <div className="w-[600px]">
          <div className="flex justify-between"></div>
          <div>
            <h2 className="text-lg font-medium my-6">Contact info</h2>
            <div className="flex mb-6">
              <div className="flex flex-col mr-6">
                <label className="text-[#686868]">First name</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Mahi"
                  className="py-3 pr-[221px] pl-4 rounded-xl w-72 border border-[#DBDBDB]"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-[#686868]">Last name</label>

                <input
                  type="text"
                  placeholder="Jhon"
                  className="py-3 pr-[221px] pl-4 rounded-xl w-72 border border-[#DBDBDB]"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label className="text-[#686868]">Email</label>

              <input
                type="text"
                placeholder="mahindrajhon123@gmail.com"
                className="py-3 pr-[221px] pl-4 rounded-xl  border border-[#DBDBDB]"
              />
            </div>
            <div className="flex flex-col mb-6">
              <label className="text-[#686868]">Country</label>

              <input
                type="text"
                name=""
                id=""
                placeholder="India"
                className="py-3 pr-[221px] pl-4 rounded-xl  border border-[#DBDBDB]"
              />
            </div>
            <div className="flex flex-col mb-6">
              <label className="text-[#686868]">State</label>

              <input
                type="text"
                name=""
                id=""
                placeholder="Rajasthan"
                className="py-3 pr-[221px] pl-4 rounded-xl  border border-[#DBDBDB]"
              />
            </div>
            <div className="flex flex-col mb-6">
              <label className="text-[#686868]">Phone number</label>

              <input
                type="text"
                name=""
                id=""
                placeholder="+91 1234567890"
                className="py-3 pr-[221px] pl-4 rounded-xl  border border-[#DBDBDB]"
              />
            </div>
            <div className="flex flex-col mb-6">
              <label className="text-[#686868]">Uploaded resume</label>

              <form
                id="form-file-upload"
                onDragEnter={handleDrag}
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  ref={inputRef}
                  type="file"
                  id="input-file-upload"
                  multiple={true}
                  onChange={handleChange}
                />
                <label
                  id="label-file-upload"
                  htmlFor="input-file-upload"
                  className={dragActive ? "drag-active" : ""}
                >
                  <div className="flex justify-center items-center flex-col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        // eslint-disable-next-line max-len
                        d="M5.15755 16.6273C3.89366 16.6273 2.81394 16.1898 1.91839 15.3148C1.02227 14.4398 0.574219 13.3703 0.574219 12.1064C0.574219 11.0231 0.900608 10.0578 1.55339 9.21061C2.20616 8.36339 3.06033 7.82172 4.11589 7.58561C4.46311 6.30783 5.15755 5.27311 6.19922 4.48145C7.24089 3.68978 8.42144 3.29395 9.74089 3.29395C11.3659 3.29395 12.7442 3.85978 13.8759 4.99145C15.0081 6.12367 15.5742 7.50228 15.5742 9.12728C16.5326 9.23839 17.3278 9.65145 17.9601 10.3664C18.5917 11.082 18.9076 11.9189 18.9076 12.8773C18.9076 13.9189 18.5431 14.8045 17.8142 15.5339C17.0848 16.2628 16.1992 16.6273 15.1576 16.6273H10.5742C10.1159 16.6273 9.72366 16.4642 9.39755 16.1381C9.07089 15.8114 8.90755 15.4189 8.90755 14.9606V10.6689L7.57422 11.9606L6.40755 10.7939L9.74089 7.46061L13.0742 10.7939L11.9076 11.9606L10.5742 10.6689V14.9606H15.1576C15.7409 14.9606 16.2339 14.7592 16.6367 14.3564C17.0395 13.9537 17.2409 13.4606 17.2409 12.8773C17.2409 12.2939 17.0395 11.8009 16.6367 11.3981C16.2339 10.9953 15.7409 10.7939 15.1576 10.7939H13.9076V9.12728C13.9076 7.9745 13.5014 6.99172 12.6892 6.17895C11.8764 5.36672 10.8937 4.96061 9.74089 4.96061C8.58811 4.96061 7.60561 5.36672 6.79339 6.17895C5.98061 6.99172 5.57422 7.9745 5.57422 9.12728H5.15755C4.352 9.12728 3.6645 9.412 3.09505 9.98144C2.52561 10.5509 2.24089 11.2384 2.24089 12.0439C2.24089 12.8495 2.52561 13.537 3.09505 14.1064C3.6645 14.6759 4.352 14.9606 5.15755 14.9606H7.24089V16.6273H5.15755Z"
                        fill="#A1A1A1"
                      />
                    </svg>
                    <div className="flex items-center">
                      <p>Drag and drop your file or</p>
                      <span className="upload-button" onClick={onButtonClick}>
                        browse files
                      </span>
                      <button></button>
                    </div>
                  </div>
                </label>
                {dragActive && (
                  <div
                    id="drag-file-element"
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  ></div>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className=" flex justify-end w-[100%] bg-[#F4F6FC] pt-[14px] pr-9 pb-[14px] pl-[50px]">
          <button className="mr-[35px] text-[#031B59] py-4 px-10 border
            border-[#031B59] rounded-[20px] font-medium text-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

ContactModal.propTypes = {
  closeModal: PropTypes.func,
};
