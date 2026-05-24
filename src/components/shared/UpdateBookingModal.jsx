"use client";
import {
  Button,
  Calendar,
  DateField,
  DatePicker,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";
import { LuPencil } from "react-icons/lu";
import { parseDate } from "@internationalized/date";
import { successToast } from "@/lib/toasts";
import { useRouter } from "next/navigation";

const UpdateBookingModal = ({ data }) => {
  const router = useRouter();
  const handleUpdateBooking = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updatedData = Object.fromEntries(formData.entries());
    console.log(updatedData);

    const res = await fetch(`http://localhost:8000/bookings/${data._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    const result = await res.json();
    console.log(result);

    successToast("Booking Data Updated");
    router.refresh();
  };

  return (
    <div>
      <Modal>
        <Button className="rounded-xl bg-transparent text-[#00655C] border border-[#00655C]">
          Update
        </Button>
        <Modal.Backdrop variant="blur">
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-[#008075]/20 text-[#008075]">
                  <LuPencil />
                </Modal.Icon>
                <Modal.Heading className="mt-2">
                  Update Credentials
                </Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form
                    onSubmit={handleUpdateBooking}
                    className="flex flex-col gap-4"
                  >
                    <TextField
                      defaultValue={data.paitentName}
                      className="w-full"
                      name="paitentName"
                      type="text"
                      variant="secondary"
                    >
                      <Label>Name</Label>
                      <Input className="bg-[#ECF5F4] shadow-none focus:ring-[#00655C]" />
                    </TextField>

                    <TextField
                      defaultValue={data.paitentPhone}
                      className="w-full"
                      name="paitentPhone"
                      type="text"
                      variant="secondary"
                    >
                      <Label>Phone</Label>
                      <Input className="bg-[#ECF5F4] shadow-none focus:ring-[#00655C]" />
                    </TextField>

                    <TextField
                      className="w-full"
                      name="appointmentDate"
                      type="text"
                      variant="secondary"
                    >
                      <DatePicker
                        defaultValue={parseDate(data.appointmentDate)}
                        name="appointmentDate"
                      >
                        <Label>Date</Label>
                        <DateField.Group
                          className="bg-[#ECF5F4] shadow-none focus-within:ring-[#00655C]"
                          fullWidth
                        >
                          <DateField.Input className="md:p-3.5">
                            {(segment) => (
                              <DateField.Segment segment={segment} />
                            )}
                          </DateField.Input>
                          <DateField.Suffix>
                            <DatePicker.Trigger>
                              <DatePicker.TriggerIndicator />
                            </DatePicker.Trigger>
                          </DateField.Suffix>
                        </DateField.Group>
                        <DatePicker.Popover>
                          <Calendar aria-label="Event date">
                            <Calendar.Header>
                              <Calendar.YearPickerTrigger>
                                <Calendar.YearPickerTriggerHeading />
                                <Calendar.YearPickerTriggerIndicator />
                              </Calendar.YearPickerTrigger>
                              <Calendar.NavButton slot="previous" />
                              <Calendar.NavButton slot="next" />
                            </Calendar.Header>
                            <Calendar.Grid>
                              <Calendar.GridHeader>
                                {(day) => (
                                  <Calendar.HeaderCell>
                                    {day}
                                  </Calendar.HeaderCell>
                                )}
                              </Calendar.GridHeader>
                              <Calendar.GridBody>
                                {(date) => <Calendar.Cell date={date} />}
                              </Calendar.GridBody>
                            </Calendar.Grid>
                            <Calendar.YearPickerGrid>
                              <Calendar.YearPickerGridBody>
                                {({ year }) => (
                                  <Calendar.YearPickerCell year={year} />
                                )}
                              </Calendar.YearPickerGridBody>
                            </Calendar.YearPickerGrid>
                          </Calendar>
                        </DatePicker.Popover>
                      </DatePicker>
                    </TextField>

                    <TextField
                      defaultValue={data.appointmentReason}
                      className="w-full"
                      name="appointmentReason"
                      variant="secondary"
                    >
                      <Label>Reason</Label>
                      <Input className="bg-[#ECF5F4] shadow-none focus:ring-[#00655C]" />
                    </TextField>
                    <Button
                      className="mt-4 w-full bg-[#00655C]"
                      slot="close"
                      type="submit"
                    >
                      Update
                    </Button>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default UpdateBookingModal;
