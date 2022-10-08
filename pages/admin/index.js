import React, { useEffect, useState } from "react";
import ErrorAlert from "../../components/Alert/ErrorAlert";
import { BiAddToQueue } from "react-icons/bi";
import AddBookFormModal from "../../components/Modal/AddBookFormModal";
import ListCards from "../../components/Admin/ListCards/ListCards";
const Index = () => {
  const getBooks = () => {
    fetch("/api/book")
      .then((data) => {
        if (data.statusText === "OK") {
          return data.json();
        }
      })
      .then((res) => {
        console.warn(res);
        setlistofbooks(res.record);
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
      <AddBookFormModal
        open={addbookform}
        setOpen={setaddbookform}
        setlistofbooks={setlistofbooks}
      />
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
          <ul>
            {listofbooks.length ? (
              listofbooks.map((i) => (
                <ListCards props={i} key={i._id}/>
              
              ))
            ) : (
              <span className="btn btn-ghost">No List to show</span>
            )}
          </ul>
        </div>
        <div className="w-[80%] max-h-full overscroll-y-auto p-5">content</div>
      </div>
    </>
  );
};

export default Index;
