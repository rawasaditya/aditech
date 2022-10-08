import React, { useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
const Modal = ({ open, setOpen }) => {
  const [bookname, setBookName] = useState(null);
  const [description, setDescription] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [validateForm, setvalidateForm] = useState({
    name: false,
    description: false,
    thumbnail: false,
  });
  const closeForm = () => {
    setBookName("");
    setDescription("");
    setThumbnail(null);
    setThumbnailFile(null)
    setOpen(false);
  };

  const previewThumbnail = (e) => {
    const file = e.target.files[0];
    setThumbnailFile(file);
    setThumbnail(URL.createObjectURL(file));
  };

  const submitForm = (e) => {
    e.preventDefault();
    const validate = false;
    if (!bookname) {
      setvalidateForm((prev) => ({ ...prev, name: true }));
      validate = true
    } else {
      setvalidateForm((prev) => ({ ...prev, name: false }));
    }
    if (!description) {
      setvalidateForm((prev) => ({ ...prev, description: true }));
      validate = true
    } else {
      setvalidateForm((prev) => ({ ...prev, description: false }));
    }
    if (!thumbnail) {
      setvalidateForm((prev) => ({ ...prev, thumbnail: true }));
      validate = true
    } else {
      setvalidateForm((prev) => ({ ...prev, thumbnail: false }));
    }
    if(validate){
      return
    }
    const formData = new FormData();
    formData.append('file',thumbnailFile);
    formData.append('name',bookname);
    formData.append('description',description);
    
    fetch("/api/book/create",{
      method:"POST",
      body:formData
    })
    .then(res=>{
      if(res.status == "ok"){
        return res.json()
      }else{
        throw res.json();
      }
    })
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      alert(JSON.stringify(err))
    })

  };

  return (
    <>
      <input
        type="checkbox"
        checked={open}
        defaultChecked={false}
        id="my-modal-3"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="relative text-black modal-box">
          <label
            htmlFor="my-modal-3"
            className="absolute btn btn-sm btn-circle right-2 top-2"
            onClick={closeForm}
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Enter Details of book!</h3>
          <form onSubmit={submitForm}>
            <div className="w-full form-control">
              <label className="label">
                <span className="label-text">Name of book</span>
              </label>
              <input
                type="text"
                className={`w-full input input-bordered input-sm ${
                  validateForm.name && "input-error"
                }`}
                value={bookname}
                onChange={(e) => setBookName(e.target.value)}
              />
            </div>
            <div className="w-full form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                className={`w-full input-bordered textarea ${
                  validateForm.description && "input-error"
                }`}
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              >
                {description}
              </textarea>
            </div>
            {!thumbnail ? (
              <div className="w-full form-control">
                <label className="label" htmlFor="thumbnailfile">
                  <span
                    className={`flex gap-2 align-middle btn btn-block btn-outline btn-sm ${
                      validateForm.thumbnail && "input-error"
                    }`}
                  >
                    <span>Upload Thumbnail</span>
                    <AiOutlineUpload size={20} />
                  </span>
                </label>
                <input
                  id="thumbnailfile"
                  onChange={(e) => previewThumbnail(e)}
                  className="hidden w-full input-bordered textarea"
                  type="file"
                />
              </div>
            ) : (
              <div className="w-full form-control">
                <label className="label">
                  <span className="label-text">Preview</span>
                  <span
                    className="text-red-500 cursor-pointer label-text"
                    onClick={(e) => setThumbnail(null)}
                  >
                    x
                  </span>
                </label>
                <div className="flex justify-center">
                  <img src={thumbnail} className="w-[80%] h-[80%]" />
                </div>
              </div>
            )}

            <div className="flex flex-row justify-end w-full gap-2 py-2 form-control ">
              <button type="submit" className="btn btn-success btn-sm">
                Save
              </button>
              <button
                onClick={closeForm}
                type="button"
                className="btn btn-danger btn-sm btn-ghost"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
