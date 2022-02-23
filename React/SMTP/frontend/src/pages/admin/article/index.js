import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Sidebar from "../../../components/sidebar";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useToasts } from "react-toast-notifications";
import "./index.css";

const modalStyle = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Article() {
  const history = useHistory();
  const { addToast } = useToasts();
  const [blogList, setBlogList] = useState([]);
  const [modalDelBlog, setModalDelBlog] = useState(false);
  const [delBlogId, setDelBlogId] = useState("");
  const columns = [
    {
      dataField: "id",
      text: "No",
    },
    {
      dataField: "title",
      text: "Title",
    },
    {
      dataField: "content",
      text: "Content",
      formatter: desFormatter,
    },
    {
      dataField: "img",
      text: "Image",
      formatter: imgFormatter,
    },
    {
      dataField: "ref",
      text: "Referrence Site",
      formatter: refFormatter,
    },
    {
      dataField: "action",
      text: "Action",
      sort: true,
      formatter: actionFormatter,
    },
  ];

  function imgFormatter(cell, row) {
    return (
      <>
        <img
          src={row.img}
          alt="sub-image"
          style={{ width: "auto", height: "auto", maxWidth: "50px" }}
        />
      </>
    );
  }

  function refFormatter(cell, row) {
    return (
      <a href={row.ref} target="_blank">
        {row.ref}
      </a>
    );
  }

  function desFormatter(cell, row) {
    return (
      <>
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: row.content,
          }}
        />
      </>
    );
  }

  function actionFormatter(cell, row) {
    return (
      <>
        <Button
          className="btn-del"
          variant="contained"
          startIcon={<DeleteIcon />}
          onClick={() => showDelModal(row.id)}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          startIcon={<EditIcon />}
          onClick={() => showEditPage(row.id)}
        >
          Edit
        </Button>
      </>
    );
  }
  const { SearchBar } = Search;

  useEffect(() => {
    // Get all blog
    Axios.get("/blog/all").then(async (response) => {
      setBlogList(response.data);
    });
  }, []);

  const createArticle = () => {
    history.push("/admin/blog/create");
  };

  // When clicking "Delete" button.
  const showDelModal = (id) => {
    setModalDelBlog(true);
    setDelBlogId(id);
  };

  // When clicking "Edit" button.
  const showEditPage = (id) => {
    history.push({
      pathname: "/admin/blog/edit/" + id,
    });
  };

  // When clicking "Yes" button of Delete Modal.
  const finalDelBlog = () => {
    setModalDelBlog(false);
    Axios.delete("/blog/delete/" + delBlogId).then(async (response) => {
      if (response.data.msg === "success") {
        setBlogList(response.data.blog);
        addToast("Deleted Successfully", {
          appearance: "success",
          autoDismiss: true,
        });
      } else {
        addToast("Sorry, Operation is failure", {
          appearance: "error",
          autoDismiss: true,
        });
      }
    });
  };

  return (
    <Grid container className="p-article">
      <Sidebar />
      <div className="article">
        <p>Blog</p>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          className="btn-new"
          onClick={createArticle}
        >
          New Blog
        </Button>
        <ToolkitProvider keyField="id" columns={columns} data={blogList} search>
          {(props) => (
            <div>
              <div className="opt">
                <div>
                  <SearchBar {...props.searchProps} />
                </div>
              </div>
              <BootstrapTable
                bootstrap4
                pagination={paginationFactory()}
                {...props.baseProps}
              />
            </div>
          )}
        </ToolkitProvider>
        {/* Modal for deleting category */}
        <Modal
          open={modalDelBlog}
          onClose={() => setModalDelBlog(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ textAlign: "center" }}
            >
              Are you sure?
            </Typography>
            <Grid
              container
              justifyContent="space-between"
              sx={{ width: "60%", margin: "auto", paddingTop: "20px" }}
            >
              <Button
                onClick={finalDelBlog}
                variant="contained"
                color="primary"
                type="submit"
              >
                Yes
              </Button>
              <Button
                onClick={() => setModalDelBlog(false)}
                variant="contained"
                color="primary"
                type="submit"
              >
                No
              </Button>
            </Grid>
          </Box>
        </Modal>
      </div>
    </Grid>
  );
}
