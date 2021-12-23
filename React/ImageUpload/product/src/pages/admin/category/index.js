import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Sidebar from "../../../components/sidebar";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import "./index.css";
import Axios from "axios";
import { useToasts } from "react-toast-notifications";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";

const style = {
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
export default function Category() {
  const [openNewCat, setOpenNewCat] = useState(false);
  const [openDelCat, setOpenDelCat] = useState(false);
  const [openEditCat, setOpenEditCat] = useState(false);
  const [catName, setCatName] = useState("");
  const [catList, setCatList] = useState([]);
  const [delCatId, setDelCatId] = useState("");
  const [editCatId, setEditCatId] = useState("");
  const [catImg, setCatImg] = useState("");
  const [catPdf, setCatPdf] = useState("");
  const { addToast } = useToasts();
  const handleNewCatOpen = () => setOpenNewCat(true);
  const handleNewCatClose = () => {
    setOpenNewCat(false);
    setCatName("");
  };
  const handleDelCatClose = () => setOpenDelCat(false);
  const handleEditCatClose = () => setOpenEditCat(false);

  // Table
  const { SearchBar } = Search;
  const columns = [
    {
      dataField: "id",
      text: "No",
      formatter: indexFormatter,
    },
    {
      dataField: "img",
      text: "Img",
      formatter: imgFormatter,
    },
    {
      dataField: "name",
      text: "Name",
      sort: true,
    },
    {
      dataField: "pdf",
      text: "Pdf",
      formatter: pdfFormatter,
    },
    {
      dataField: "action",
      text: "Action",
      sort: true,
      formatter: actionFormatter,
    },
  ];

  function indexFormatter(cell, row) {
    return <>{row.index + 1}</>;
  }
  function imgFormatter(cell, row) {
    return (
      <>
        <img
          src={row.img_url}
          alt="sub-image"
          style={{ width: "auto", height: "auto", maxWidth: "50px" }}
        />
      </>
    );
  }
  function pdfFormatter(cell, row) {
    return (
      <a href={row.pdf_url} target="_blank">
        PDF
      </a>
    );
  }
  function actionFormatter(cell, row) {
    return (
      <>
        <Button
          className="btn-del"
          variant="contained"
          startIcon={<DeleteIcon />}
          onClick={() => deleteCat(row.id)}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          startIcon={<EditIcon />}
          onClick={() => editCat(row.id)}
        >
          Edit
        </Button>
      </>
    );
  }

  useEffect(() => {
    // Get all category
    Axios.get("http://localhost:5000/category/all").then(async (response) => {
      setCatList(response.data);
    });
  }, []);

  const newCatSave = async () => {
    // Hide Modal
    //handleNewCatClose();
    if (!catImg) {
      addToast("Sorry, please choose image.", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    if (!catPdf) {
      addToast("Sorry, please choose pdf.", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append("imagesArray", catImg[0]);
    formData.append("imagesArray", catPdf[0]);
    formData.append("catName", catName);
    Axios.post("http://localhost:5000/category/create", formData, {}).then(
      (res) => {
        if (res.data.status === 200) {
          handleNewCatClose();
          addToast("Category is saved successfully.", {
            appearance: "success",
            autoDismiss: true,
          });
          setCatImg("");
          setCatPdf("");
          // Get all category
          Axios.get("http://localhost:5000/category/all").then(
            async (response) => {
              setCatList(response.data);
            }
          );
        }
        // When category already exist.
        if (res.data.status === "exist") {
          addToast("Category already exist.", {
            appearance: "warning",
            autoDismiss: true,
          });
        }
      }
    );
  };

  // When clicking "Delete" button.
  const deleteCat = async (id) => {
    await setDelCatId(id);
    setOpenDelCat(true);
  };

  // When clicking "Edit" button.
  const editCat = (id) => {
    setEditCatId(id);
    Axios.get("http://localhost:5000/category/edit/" + id).then(
      async (response) => {
        await setCatName(response.data[0].name);
        setOpenEditCat(true);
      }
    );
  };

  // When clicking "Yes" button at Delete Modal.
  const finalDelCat = () => {
    handleDelCatClose();
    Axios.delete("http://localhost:5000/category/delete/" + delCatId).then(
      async (response) => {
        if (response.data.msg === "success") {
          setCatList(response.data.cat);
          addToast("Deleted Successfully", {
            appearance: "success",
            autoDismiss: true,
          });
        } else if (response.data.msg === "sub_exist") {
          addToast("Sorry, this category has sub category", {
            appearance: "error",
            autoDismiss: true,
          });
        } else {
          addToast("Sorry, Operation is failure", {
            appearance: "error",
            autoDismiss: true,
          });
        }
      }
    );
  };

  // When clicking "Yes" button at Edit Modal.
  const catUpdate = async () => {
    const formData = new FormData();
    formData.append("imagesArray", catImg[0]);
    formData.append("imagesArray", catPdf[0]);
    formData.append("catName", catName);
    formData.append("catId", editCatId);

    Axios.put("http://localhost:5000/category/update", formData, {}).then(
      async (res) => {
        if (res.data.status === 200) {
          handleEditCatClose();
          addToast("Updated Successfully", {
            appearance: "success",
            autoDismiss: true,
          });
          setCatImg("");
          setCatPdf("");
          // Get all category
          Axios.get("http://localhost:5000/category/all").then(
            async (response) => {
              setCatList(response.data);
            }
          );
        } else {
          addToast("Sorry, Operation is failure", {
            appearance: "error",
            autoDismiss: true,
          });
        }
      }
    );
  };

  return (
    <Grid className="p-cat" container>
      <Sidebar />
      <div className="cat">
        <p>Category</p>
        <Button
          variant="contained"
          onClick={handleNewCatOpen}
          startIcon={<AddIcon />}
          className="btn-new"
        >
          New Category
        </Button>
        <ToolkitProvider keyField="id" data={catList} columns={columns} search>
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
        {/* Modal for creating new category */}
        <Modal
          open={openNewCat}
          onClose={handleNewCatClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ValidatorForm
              noValidate
              style={{ textAlign: "center" }}
              onSubmit={newCatSave}
            >
              <TextValidator
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Category Name"
                autoFocus
                onChange={(e) => setCatName(e.target.value)}
                value={catName}
                validators={["required"]}
                errorMessages={["Please enter category name"]}
              />
              <Grid container alignItems="center">
                <label for="myimg">Select a image:</label>
                <input
                  type="file"
                  id="myimg"
                  name="myimg"
                  accept=".png, .jpg, .jpeg"
                  onChange={(e) => setCatImg(e.target.files)}
                />
              </Grid>

              <Grid container alignItems="center">
                <label for="mypdf">Select pdf:</label>
                <input
                  type="file"
                  id="mypdf"
                  name="mypdf"
                  accept=".pdf"
                  onChange={(e) => setCatPdf(e.target.files)}
                />
              </Grid>
              <Button variant="contained" color="primary" type="submit">
                Save
              </Button>
            </ValidatorForm>
          </Box>
        </Modal>
        {/* Modal for deleting category */}
        <Modal
          open={openDelCat}
          onClose={handleDelCatClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
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
                onClick={finalDelCat}
                variant="contained"
                color="primary"
                type="submit"
              >
                Yes
              </Button>
              <Button
                onClick={() => setOpenDelCat(false)}
                variant="contained"
                color="primary"
                type="submit"
              >
                No
              </Button>
            </Grid>
          </Box>
        </Modal>
        {/* Modal for editing category */}
        <Modal
          open={openEditCat}
          onClose={handleEditCatClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ValidatorForm
              noValidate
              style={{ textAlign: "center" }}
              onSubmit={catUpdate}
            >
              <TextValidator
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Category Name"
                autoFocus
                onChange={(e) => setCatName(e.target.value)}
                value={catName}
                validators={["required"]}
                errorMessages={["Please enter category name"]}
              />
              <Grid container alignItems="center">
                <label for="myimg">Select a image:</label>
                <input
                  type="file"
                  id="myimg"
                  name="myimg"
                  accept=".png, .jpg, .jpeg"
                  onChange={(e) => setCatImg(e.target.files)}
                />
              </Grid>

              <Grid container alignItems="center">
                <label for="mypdf">Select pdf:</label>
                <input
                  type="file"
                  id="mypdf"
                  name="mypdf"
                  accept=".pdf"
                  onChange={(e) => setCatPdf(e.target.files)}
                />
              </Grid>
              <Button variant="contained" color="primary" type="submit">
                Save
              </Button>
            </ValidatorForm>
          </Box>
        </Modal>
      </div>
    </Grid>
  );
}
