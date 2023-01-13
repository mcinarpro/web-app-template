"use client";

import * as React from "react";
import {
  Card,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Typography,
} from "@mui/material";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import {
  DeleteOutline,
  DotsVertical,
  EyeOutline,
  PencilOutline,
} from "mdi-material-ui";
import { ThemeColor } from "@/types/layout";
import { TaxReturnsType } from "@/types/tax-return";
import Link from "next/link";

interface StatusType {
  [key: string]: ThemeColor;
}

interface CellType {
  row: TaxReturnsType;
}

const statusObj: StatusType = {
  completed: "success",
  pending: "warning",
  new: "secondary",
};

const MenuItemLink = styled("a")(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  padding: theme.spacing(1.5, 4),
  color: theme.palette.text.primary,
}));

const RowOptions = ({ id }: { id: number | string }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const rowOptionsOpen = Boolean(anchorEl);

  const handleRowOptionsClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleRowOptionsClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    // dispatch(deleteUser(id))
    handleRowOptionsClose();
  };

  return (
    <>
      <IconButton size="small" onClick={handleRowOptionsClick}>
        <DotsVertical />
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={rowOptionsOpen}
        onClose={handleRowOptionsClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{ style: { minWidth: "8rem" } }}
      >
        <MenuItem sx={{ p: 0 }}>
          <MenuItemLink as={Link} href={`/apps/tax-returns/view/${id}`}>
            <EyeOutline fontSize="small" sx={{ mr: 2 }} />
            View
          </MenuItemLink>
        </MenuItem>
        <MenuItem onClick={handleRowOptionsClose}>
          <PencilOutline fontSize="small" sx={{ mr: 2 }} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <DeleteOutline fontSize="small" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Menu>
    </>
  );
};

const columns: GridColumns<TaxReturnsType> = [
  {
    flex: 0.5,
    minWidth: 320,
    field: "name",
    headerName: "Name",
    renderCell: ({ row }: CellType) => {
      return (
        <Link href={`tax-returns/${row.id}`}>
          <Typography noWrap variant="body2">
            {row.name}
          </Typography>
        </Link>
      );
    },
  },
  {
    flex: 0.1,
    minWidth: 80,
    field: "year",
    headerName: "Year",
    renderCell: ({ row }: CellType) => (
      <Typography noWrap variant="body2">
        {row.year}
      </Typography>
    ),
  },
  {
    flex: 0.35,
    minWidth: 160,
    field: "status",
    headerName: "Status",
    renderCell: ({ row }: CellType) => (
      // <CustomChip
      //   size="small"
      //   label={row.status}
      //   color={statusObj[row.status]}
      //   sx={{
      //     textTransform: "capitalize",
      //     "& .MuiChip-label": { lineHeight: "18px" },
      //   }}
      // />
      <></>
    ),
  },
  {
    flex: 0.05,
    minWidth: 120,
    sortable: false,
    field: "actions",
    headerName: "Actions",
    renderCell: ({ row }: CellType) => <RowOptions id={row.id} />,
  },
];

export default function TaxReturnsList({ data }: { data: TaxReturnsType[] }) {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <DataGrid
            autoHeight
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableColumnMenu
            checkboxSelection={false}
            disableSelectionOnClick={true}
            sx={{ "& .MuiDataGrid-columnHeaders": { borderRadius: 0 } }}
          />
        </Card>
      </Grid>
    </Grid>
  );
}
