import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Sidebar from "../../../components/sidebar";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Axios from "axios";
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
const { SearchBar } = Search;

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

export default function SubCategory() {
  const [openNewSubCat, setOpenNewSubCat] = useState(false);
  const [catId, setCatId] = useState("");
  const [subCatName, setSubCatName] = useState("");
  const [subImg, setSubImg] = useState("");
  const [subPdf, setSubPdf] = useState("");
  const [catList, setCatList] = useState([]);
  const [subCatList, setSubCatList] = useState([]);
  const [openDelSub, setOpenDelSub] = useState(false);
  const [delSubId, setDelSubId] = useState("");
  const [openEditSub, setOpenEditSub] = useState(false);
  const [editSubId, setEditSubId] = useState("");
  const [defaultCat, setDefaultCat] = useState([]);
  const { addToast } = useToasts();

  useEffect(() => {
    // Get all category
    Axios.get("/category/all").then(async (response) => {
      setCatList(response.data);
    });

    // Get all subcategory
    Axios.get("/subcat/all").then(async (response) => {
      setSubCatList(response.data);
    });
  }, []);
  // When clicking "Save" button at New Create Modal.
  const submit = () => {
    if (!catId) {
      addToast("Sorry, please choose category.", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    if (!subCatName) {
      addToast("Sorry, please enter subcategory.", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    if (!subImg) {
      addToast("Sorry, please choose image.", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    if (!subPdf) {
      addToast("Sorry, please choose pdf.", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append("imagesArray", subImg[0]);
    formData.append("imagesArray", subPdf[0]);
    formData.append("catId", catId);
    formData.append("subCat", subCatName);

    Axios.post("/subcat/create", formData, {}).then((res) => {
      if (res.data.status === 200) {
        setOpenNewSubCat(false);
        addToast("Subcategory is saved successfully.", {
          appearance: "success",
          autoDismiss: true,
        });
        setSubImg("");
        setSubPdf("");
        // Get all subcategory
        Axios.get("/subcat/all").then(async (response) => {
          setSubCatList(response.data);
        });
      }
      // When subcategory already exist.
      if (res.data.status === "exist") {
        addToast("Subcategory already exist.", {
          appearance: "warning",
          autoDismiss: true,
        });
      }
    });
  };

  const closeModal = () => {
    setOpenNewSubCat(false);
    setCatId("");
    setSubCatName("");
    setSubImg("");
    setSubPdf("");
  };
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
          onClick={() => showDelModal(row.id)}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          startIcon={<EditIcon />}
          onClick={() => showEditModal(row.id)}
        >
          Edit
        </Button>
      </>
    );
  }

  // When clicking "Delete" button.
  const showDelModal = (id) => {
    setOpenDelSub(true);
    setDelSubId(id);
  };

  // When clicking "Edit" button.
  const showEditModal = (id) => {
    setEditSubId(id);
    Axios.get("/subcat/edit/" + id).then(async (response) => {
      for (var i = 0; i < catList.length; i++) {
        if (catList[i].id === response.data[0].cat_id) {
          setDefaultCat(catList[i]);
        }
      }
      await setSubCatName(response.data[0].name);
      await setCatId(response.data[0].cat_id);
      setOpenEditSub(true);
    });
  };

  // When clicking "Yes" button at Delete Modal.
  const finalDelSub = () => {
    setOpenDelSub(false);
    Axios.delete("/subcat/delete/" + delSubId).then(async (response) => {
      if (response.data.msg === "success") {
        setSubCatList(response.data.sub);
        addToast("Deleted Successfully", {
          appearance: "success",
          autoDismiss: true,
        });
      } else if (response.data.msg === "pro_exist") {
        addToast("Sorry, this subcategory has product", {
          appearance: "error",
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

  // When clicking "Save" button at Edit Modal
  const editSubmit = () => {
    const formData = new FormData();
    formData.append("imagesArray", subImg[0]);
    formData.append("imagesArray", subPdf[0]);
    formData.append("catId", catId);
    formData.append("subCat", subCatName);
    formData.append("editId", editSubId);

    Axios.put("/subcat/update", formData, {}).then((res) => {
      if (res.data.status === 200) {
        setOpenEditSub(false);
        addToast("Subcategory is updated successfully.", {
          appearance: "success",
          autoDismiss: true,
        });
        setSubImg("");
        setSubPdf("");
        // Get all subcategory
        Axios.get("/subcat/all").then(async (response) => {
          setSubCatList(response.data);
        });
      }
    });
  };
  return (
    <Grid container className="p-sub">
      <Sidebar />

      <div className="sub">
        <p>SubCategory</p>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          className="btn-new"
          onClick={() => setOpenNewSubCat(true)}
        >
          New SubCategory
        </Button>
        <ToolkitProvider
          keyField="id"
          data={subCatList}
          columns={columns}
          search
        >
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
        {/* Modal for creating new subcategory */}
        <Modal
          open={openNewSubCat}
          onClose={() => closeModal()}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ zIndex: 13 }}
        >
          <Box sx={modalStyle}>
            <ValidatorForm
              noValidate
              style={{ textAlign: "center" }}
              onSubmit={submit}
            >
              <Autocomplete
                onChange={(event, value) =>
                  value !== null ? setCatId(value["id"]) : setCatId("")
                }
                fullWidth
                options={catList}
                getOptionLabel={(option) => option.name}
                autoHighlight
                renderInput={(params) => (
                  <TextField {...params} required label="Category" />
                )}
              />
              <TextValidator
                key={1}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Subcategory Name"
                autoFocus
                onChange={(e) => setSubCatName(e.target.value)}
                value={subCatName}
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
                  onChange={(e) => setSubImg(e.target.files)}
                />
              </Grid>

              <Grid container alignItems="center">
                <label for="mypdf">Select pdf:</label>
                <input
                  type="file"
                  id="mypdf"
                  name="mypdf"
                  accept=".pdf"
                  onChange={(e) => setSubPdf(e.target.files)}
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
          open={openDelSub}
          onClose={() => setOpenDelSub(false)}
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
                onClick={finalDelSub}
                variant="contained"
                color="primary"
                type="submit"
              >
                Yes
              </Button>
              <Button
                onClick={() => setOpenDelSub(false)}
                variant="contained"
                color="primary"
                type="submit"
              >
                No
              </Button>
            </Grid>
          </Box>
        </Modal>
        {/* Modal for editing subcategory */}
        <Modal
          open={openEditSub}
          onClose={() => setOpenEditSub(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <ValidatorForm
              noValidate
              style={{ textAlign: "center" }}
              onSubmit={editSubmit}
            >
              <Autocomplete
                onChange={(event, value) =>
                  value !== null ? setCatId(value["id"]) : setCatId("")
                }
                fullWidth
                options={catList}
                getOptionLabel={(option) => option.name}
                defaultValue={defaultCat}
                autoHighlight
                renderInput={(params) => (
                  <TextField {...params} required label="Category" />
                )}
              />
              <TextValidator
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Subcategory Name"
                autoFocus
                onChange={(e) => setSubCatName(e.target.value)}
                value={subCatName}
                validators={["required"]}
                errorMessages={["Please enter subategory name"]}
              />
              <Grid container alignItems="center">
                <label for="myimg">Select a image:</label>
                <input
                  type="file"
                  id="myimg"
                  name="myimg"
                  accept=".png, .jpg, .jpeg"
                  onChange={(e) => setSubImg(e.target.files)}
                />
              </Grid>

              <Grid container alignItems="center">
                <label for="mypdf">Select pdf:</label>
                <input
                  type="file"
                  id="mypdf"
                  name="mypdf"
                  accept=".pdf"
                  onChange={(e) => setSubPdf(e.target.files)}
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
