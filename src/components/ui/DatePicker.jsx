import { useState } from "react";
import { Button } from "./button";
import { PopoverTrigger, PopoverContent, Popover } from "./popover";
import { formatDateToString } from "@/utils";
import { Calendar } from "./calendar";

const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            data-empty={!date}
            variant="outline"
            className="w-full justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
          >
            {date ? formatDateToString(date) : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            defaultMonth={date}
          />
        </PopoverContent>
      </Popover>
    </div>

  )
}
export default DatePicker;