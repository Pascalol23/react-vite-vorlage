import { useState } from "react";
import "./App.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import tableData from "./data/tableData.json";
import geoharvesterLogo from "./geoharvester.png";

function App() {
  const [anbieter, setAnbieter] = useState("");
  const [service, setService] = useState("");

  const anbieterOptions = [...new Set(tableData.map((item) => item.anbieter))];
  const serviceOptions = [...new Set(tableData.map((item) => item.service))];

  const handleAnbieterChange = (event) => {
    setAnbieter(event.target.value);
  };

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };

  const handleReset = () => {
    setAnbieter("");
    setService("");
  };

  return (
    <div className="App">
      {}
      <AppBar position="static" className="App-header">
        <Toolbar>
          <img src={geoharvesterLogo} alt="Geoharvester Logo" height="50" />
          <Typography variant="h6" id="HeaderText">
            Geoharvester
          </Typography>
        </Toolbar>
      </AppBar>

      {}
      <div className="Filters">
        <Select value={anbieter} onChange={handleAnbieterChange} displayEmpty>
          <MenuItem value="">Alle Anbieter</MenuItem>
          {anbieterOptions.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>

        <Select value={service} onChange={handleServiceChange} displayEmpty>
          <MenuItem value="">Alle Services</MenuItem>
          {serviceOptions.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>

        <Button id="ResetButton" onClick={handleReset}>
          Zurücksetzen
        </Button>
      </div>

      {}
      <div className="TableWrapper">
        <Table>
          <TableHead>
            <TableRow id="TableHeader">
              <TableCell>Anbieter</TableCell>
              <TableCell>Service</TableCell>
              <TableCell>Metaqualität</TableCell>
            </TableRow>
          </TableHead>
          <TableBody id="TableBody">
            {tableData
              .filter((row) => (anbieter ? row.anbieter === anbieter : true))
              .filter((row) => (service ? row.service === service : true))
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.anbieter}</TableCell>
                  <TableCell>{row.service}</TableCell>
                  <TableCell>{row.metaqualitaet}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>

      {}
      <footer>
        <Typography variant="body2" align="center">
          © 2024 GeoHarvester - All Rights Reserved
        </Typography>
      </footer>
    </div>
  );
}

export default App;
