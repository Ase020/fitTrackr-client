import { DataGrid } from "@mui/x-data-grid";

import "./workout.css";
import { mockDataInvoices } from "../../constants";

const Workout = () => {
  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      headerAlign: "left",
      align: "left",
      renderCell: (params) => <div>${params.row.cost}</div>,
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 0.5,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <div className="workout_container">
      <div className="ex_text_wrapper margin-60">
        <h1 className="ex_title">Grind List</h1>
        <p className="ex_des">
          List of my workouts to help me perspertive and set clear goals
        </p>
      </div>
      <div className="workout_table-container">
        <DataGrid rows={mockDataInvoices} columns={columns} checkboxSelection />
      </div>
    </div>
  );
};

export default Workout;
