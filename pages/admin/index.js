import React, { useEffect, useState } from "react";
import ErrorAlert from "../../components/Alert/ErrorAlert";
import { BiAddToQueue } from "react-icons/bi";
import AddBookFormModal from "../../components/Modal/AddBookFormModal";
const index = () => {
  const getBooks = () => {
    fetch("/api/book")
      .then((data) => {
        if (data.statusText === "OK") {
          return res.json();
        }
      })
      .then((res) => {
        console.log(res);
        setlistofbooks(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBooks();
  }, []);
  const [listofbooks, setlistofbooks] = useState([]);
  const [addbookform, setaddbookform] = useState(false);
  return (
    <>
      <AddBookFormModal open={addbookform} setOpen={setaddbookform} />
      <ErrorAlert message="Some message" display={false} />
      <div className="flex gap-3">
        <div className="w-[20%] max-h-full overscroll-y-auto ">
          <button
            onClick={() => {
              setaddbookform((prev) => !prev);
            }}
            className="my-3 btn-sm btn btn-block btn-success btn-outline modal-button"
          >
            Add new book
          </button>

          {listofbooks.length ? (
            <span>Display list here</span>
          ) : (
            <span>No Lists</span>
          )}
        </div>
        <div className="w-[80%] max-h-full overscroll-y-auto p-5">content</div>
      </div>
    </>
  );
};

export default index;
