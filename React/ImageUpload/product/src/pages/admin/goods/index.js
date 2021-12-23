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

export default function Goods() {
  const [modalNewPro, setModalNewPro] = useState(false);
  const [proName, setProName] = useState("");
  const [proImg, setProImg] = useState("");
  const [proPdf, setProPdf] = useState("");
  const [subList, setSubList] = useState([]);
  const [subId, setSubId] = useState("");
  const [proList, setProList] = useState([]);
  const [modalDelPro, setModalDelPro] = useState(false);
  const [delProId, setDelProId] = useState("");
  const [editProId, setEditProId] = useState("");
  const [defaultSub, setDefaultSub] = useState([]);
  const [modalEditPro, setModalEditPro] = useState("");
  const { addToast } = useToasts();

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

  function pdfFormatter(cell, row) {
    return (
      <a href={row.pdf_url} target="_blank">
        PDF
      </a>
    );
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

  useEffect(() => {
    // Get all category
    Axios.get("http://localhost:5000/subcat/all").then(async (response) => {
      setSubList(response.data);
    });

    // Get all product
    Axios.get("http://localhost:5000/product/all").then(async (response) => {
      setProList(response.data);
    });
  }, []);

  const closeModal = () => {
    setModalNewPro(false);
  };

  // When clicking "Save" button at New Create Modal.
  const newProSave = () => {
    if (!subId) {
      addToast("Sorry, please choose subcategory.", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    if (!proImg) {
      addToast("Sorry, please choose image.", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    if (!proPdf) {
      addToast("Sorry, please choose pdf.", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append("imagesArray", proImg[0]);
    formData.append("imagesArray", proPdf[0]);
    formData.append("subId", subId);
    formData.append("proName", proName);

    Axios.post("http://localhost:5000/product/create", formData, {}).then(
      (res) => {
        if (res.data.status === 200) {
          setModalNewPro(false);
          addToast("Product is saved successfully.", {
            appearance: "success",
            autoDismiss: true,
          });
          setProImg("");
          setProPdf("");
          // Get all product
          Axios.get("http://localhost:5000/product/all").then(
            async (response) => {
              setProList(response.data);
            }
          );
        }
        // When subcategory already exist.
        if (res.data.status === "exist") {
          addToast("Product already exist.", {
            appearance: "warning",
            autoDismiss: true,
          });
        }
      }
    );
  };

  // When clicking "Delete" button.
  const showDelModal = (id) => {
    setModalDelPro(true);
    setDelProId(id);
  };

  // When clicking "Yes" at Delete Modal
  const finalDelPro = () => {
    setModalDelPro(false);
    Axios.delete("http://localhost:5000/product/delete/" + delProId).then(
      async (response) => {
        if (response.data.msg === "success") {
          setProList(response.data.pro);
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
      }
    );
  };

  // When clicking "Edit" button.
  const showEditModal = (id) => {
    setEditProId(id);
    Axios.get("http://localhost:5000/product/edit/" + id).then(
      async (response) => {
        for (var i = 0; i < proList.length; i++) {
          if (subList[i].id === response.data[0].sub_id) {
            setDefaultSub(subList[i]);
          }
        }
        await setProName(response.data[0].name);
        await setSubId(response.data[0].sub_id);
        setModalEditPro(true);
      }
    );
  };

  // When clicking "Save" button at Edit Modal
  const editSubmit = () => {
    const formData = new FormData();
    formData.append("imagesArray", proImg[0]);
    formData.append("imagesArray", proPdf[0]);
    formData.append("subId", subId);
    formData.append("proName", proName);
    formData.append("editId", editProId);

    Axios.put("http://localhost:5000/product/update", formData, {}).then(
      (res) => {
        if (res.data.status === 200) {
          setModalEditPro(false);
          addToast("Product is updated successfully.", {
            appearance: "success",
            autoDismiss: true,
          });
          setProImg("");
          setProPdf("");
          // Get all product
          Axios.get("http://localhost:5000/product/all").then(
            async (response) => {
              setProList(response.data);
            }
          );
        }
      }
    );
  };
  return (
    <Grid container className="p-good">
      <Sidebar />
      <div className="good">
        <p>Product</p>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          className="btn-new"
          onClick={() => setModalNewPro(true)}
        >
          New Product
        </Button>
        <ToolkitProvider keyField="id" data={proList} columns={columns} search>
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
          open={modalNewPro}
          onClose={() => closeModal()}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ zIndex: 13 }}
        >
          <Box sx={modalStyle}>
            <ValidatorForm
              noValidate
              style={{ textAlign: "center" }}
              onSubmit={newProSave}
            >
              <Autocomplete
                onChange={(event, value) =>
                  value !== null ? setSubId(value["id"]) : setSubId("")
                }
                fullWidth
                options={subList}
                getOptionLabel={(option) => option.name}
                autoHighlight
                renderInput={(params) => (
                  <TextField {...params} required label="SubCategory" />
                )}
              />
              <TextValidator
                key={1}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Product"
                autoFocus
                onChange={(e) => setProName(e.target.value)}
                value={proName}
                validators={["required"]}
                errorMessages={["Please enter product name"]}
              />

              <Grid container alignItems="center">
                <label for="myimg">Select a image:</label>
                <input
                  type="file"
                  id="myimg"
                  name="myimg"
                  accept=".png, .jpg, .jpeg"
                  onChange={(e) => setProImg(e.target.files)}
                />
              </Grid>

              <Grid container alignItems="center">
                <label for="mypdf">Select pdf:</label>
                <input
                  type="file"
                  id="mypdf"
                  name="mypdf"
                  accept=".pdf"
                  onChange={(e) => setProPdf(e.target.files)}
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
          open={modalDelPro}
          onClose={() => setModalDelPro(false)}
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
                onClick={finalDelPro}
                variant="contained"
                color="primary"
                type="submit"
              >
                Yes
              </Button>
              <Button
                onClick={() => setModalDelPro(false)}
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
          open={modalEditPro}
          onClose={() => setModalEditPro(false)}
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
                  value !== null ? setSubId(value["id"]) : setSubId("")
                }
                fullWidth
                options={subList}
                getOptionLabel={(option) => option.name}
                defaultValue={defaultSub}
                autoHighlight
                renderInput={(params) => (
                  <TextField {...params} required label="SubCategory" />
                )}
              />
              <TextValidator
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Product Name"
                autoFocus
                onChange={(e) => setProName(e.target.value)}
                value={proName}
                validators={["required"]}
                errorMessages={["Please enter product name"]}
              />
              <Grid container alignItems="center">
                <label for="myimg">Select a image:</label>
                <input
                  type="file"
                  id="myimg"
                  name="myimg"
                  accept=".png, .jpg, .jpeg"
                  onChange={(e) => setProImg(e.target.files)}
                />
              </Grid>

              <Grid container alignItems="center">
                <label for="mypdf">Select pdf:</label>
                <input
                  type="file"
                  id="mypdf"
                  name="mypdf"
                  accept=".pdf"
                  onChange={(e) => setProPdf(e.target.files)}
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
