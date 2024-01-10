import { useState } from "react";
import { Duration } from "./Duration";
import { format } from "date-fns";
import { supabase } from "../../App";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import ReceiptIcon from "@mui/icons-material/Receipt";
const clients = ["Jan Melvil Publishing", "ST.DIO", "Servantes"];

export const TimeEntry = (props) => {
  const { item, onDelete, index, listLength, getTimeEntries } = props;
  const [localDescription, setlocalDescription] = useState(
    item.description ?? ""
  );

  // const itemDuration = item.endTime - item.startTime;
  const endTimeFormatted = format(parseInt(item.finished_at, 10), "HH:mm");
  const startTimeFormatted = format(parseInt(item.started_at, 10), "HH:mm");
  const dateTimeFormatted = format(parseInt(item.started_at, 10), "PP");

  const handleDescriptionChange = (event) => {
    setlocalDescription(event.target.value);
  };

  const handleDescriptionBlur = async () => {
    const { data, error } = await supabase
      .from("timeEntries")
      .update({ description: localDescription })
      .eq("id", `${item.id}`)
      .select();

    getTimeEntries();
  };

  const handleClientChange = async (event) => {
    const { data, error } = await supabase
      .from("timeEntries")
      .update({ client: event.target.value })
      .eq("id", `${item.id}`)
      .select();

    getTimeEntries();
  };

  const comparingNumber = listLength - 1;
  //rendering from the first one again, than second, and again  with third times - one, second, third
  const liClass = index < comparingNumber ? "mb" : "";

  return (
    <>
      <li className={liClass}>
        <Stack direction={"row"} alignItems={"center"}>
          <div>
            <div className="d-flex space-between">
              <strong>{dateTimeFormatted}</strong>
              <Duration timePassed={item.duration_in_ms} />
            </div>
            <input
              className="no-border"
              type="text"
              value={localDescription}
              onChange={handleDescriptionChange}
              onBlur={handleDescriptionBlur}
              placeholder="Přidat popis"
            />
            <strong>{startTimeFormatted}</strong>
            <span> - </span> <strong>{endTimeFormatted}</strong>
            <br />
          </div>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-simple-select-label">Client</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={item.client ?? ""}
              label="Client"
              onChange={handleClientChange}
            >
              {clients.map((client) => {
                return (
                  <MenuItem key={client} value={client}>
                    {client}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <div className="ml-auto">
            <IconButton href={"https://fakturoid.cz"} target="_blank">
              <ReceiptIcon sx={{ color: "#3750eb" }} />
            </IconButton>
            <IconButton onClick={onDelete}>
              <DeleteIcon sx={{ color: "#3750eb" }} />
            </IconButton>
          </div>
        </Stack>
      </li>
    </>
  );
};
