"use client";

import { authClient } from "@/lib/auth-client";
import { successToast } from "@/lib/toasts";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { Calendar, DateField, DatePicker } from "@heroui/react";
import { ComboBox, ListBox } from "@heroui/react";

import { FaCalendar } from "react-icons/fa";

const BookingModal = ({ doctor }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleBooking = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const modalData = Object.fromEntries(formData.entries());
    console.log(modalData);

    const bookingData = {
      userId: user?.id,
      userName: user?.name,
      paitentName: modalData.name,
      appointmentDate: modalData.date,
      paitentGender: modalData.gender,
      paitentPhone: modalData.phone,
      appointmentReason: modalData.reason,
      doctorImage: doctor.image,
      doctorName: doctor.name,
      docotrSpecialty: doctor.specialty,
      docorFee: doctor.fee,
    };

    console.log(bookingData);

    const res = await fetch(`http://localhost:8000/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const result = await res.json();

    successToast("Booking Successfull");
  };

  return (
    <div>
      <Modal>
        <Button className="text-white flex rounded-xl gap-2 items-center bg-[#C64728]  hover:-translate-y-1 transition-all duration-400 md:mx-0 w-70 md:w-163.75  mt-10">
          Book Appointment <FaCalendar />
        </Button>
        <Modal.Backdrop variant="blur">
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading className="text-[#00655C] font-semibold">
                  Book Appointment
                </Modal.Heading>
                <p className="mt-1.5 text-sm leading-5 text-[#3E4947]">
                  With {doctor.name}
                </p>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form
                    onSubmit={handleBooking}
                    className="flex flex-col gap-4"
                  >
                    <TextField
                      isRequired
                      className="w-full"
                      name="name"
                      type="text"
                      variant="secondary"
                    >
                      <Label>Paitent Name</Label>
                      <Input
                        className="bg-[#ECF5F4] shadow-none border border-[#92F0E4]  md:p-3.5"
                        placeholder="Enter Paitent name"
                      />
                    </TextField>
                    <TextField
                      className="w-full"
                      name="date"
                      type="text"
                      variant="secondary"
                    >
                      <DatePicker isRequired name="date">
                        <Label>Date</Label>
                        <DateField.Group
                          className="bg-[#ECF5F4] shadow-none border border-[#92F0E4] "
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
                      className="w-full"
                      name="gender"
                      type="tel"
                      variant="secondary"
                    >
                      <ComboBox isRequired name="gender">
                        <Label>Gender</Label>
                        <ComboBox.InputGroup>
                          <Input
                            className="bg-[#ECF5F4] shadow-none border border-[#92F0E4]  md:p-3.5"
                            placeholder="Input Gender"
                          />
                          <ComboBox.Trigger />
                        </ComboBox.InputGroup>
                        <ComboBox.Popover>
                          <ListBox>
                            <ListBox.Item id="male" textValue="Male">
                              Male
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="female" textValue="Female">
                              Female
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="other" textValue="Other">
                              Other
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>
                        </ComboBox.Popover>
                      </ComboBox>
                    </TextField>
                    <TextField
                      isRequired
                      className="w-full"
                      name="phone"
                      type="text"
                      variant="secondary"
                    >
                      <Label>Phone</Label>
                      <Input
                        className="bg-[#ECF5F4] shadow-none border border-[#92F0E4]  md:p-3.5"
                        placeholder="Enter Paitent name"
                      />
                    </TextField>
                    <TextField
                      isRequired
                      className="w-full"
                      name="reason"
                      variant="secondary"
                    >
                      <Label>Reason</Label>
                      <Input
                        className="bg-[#ECF5F4] shadow-none border border-[#92F0E4]  md:p-3.5 focus:outline-none"
                        placeholder="Enter your message"
                      />
                    </TextField>

                    <Button className="w-full mt-5 bg-[#C64728]" type="submit"
                    slot="close"
                    >
                      Book
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

export default BookingModal;
