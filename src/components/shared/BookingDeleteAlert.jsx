"use client";

import { successToast } from "@/lib/toasts";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";

const BookingDeleteAlert = ({ data }) => {
  const router = useRouter();
  const hnadleBookingCancle = async () => {
    const res = await fetch(`http://localhost:8000/bookings/${data._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();

    successToast("Booking Canceled");
    router.refresh();
  };

  return (
    <div>
      <AlertDialog>
        <Button className="rounded-xl bg-transparent text-red-500 border border-red-500">
          Cancle
        </Button>
        <AlertDialog.Backdrop variant="blur">
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Cancle Appointment with {data.doctorName}?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete appointment with
                  <strong className="mx-1">{data.doctorName}</strong> and all of
                  its data. This action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button
                  onClick={hnadleBookingCancle}
                  className="w-full"
                  slot="close"
                  variant="danger-soft"
                >
                  Cancle
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default BookingDeleteAlert;
