import { authClient } from "@/lib/auth-client";
import { successToast } from "@/lib/toasts";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { LuPencil } from "react-icons/lu";

const UpdateProfileModal = ({ user }) => {
  const hnadleUpdate = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    await authClient.updateUser({
      name: name,
      image: image,
    });

     successToast("Profile Information Updated");
  };

  return (
    <div>
      <Modal>
        <Button className="rounded-xl text-[#00655C] bg-white ">
          {" "}
          <LuPencil />
          Update Profile
        </Button>
        <Modal.Backdrop variant="blur">
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-[#008075]/20 text-[#008075]">
                  <LuPencil />
                </Modal.Icon>
                <Modal.Heading className="mt-2">Update Profile</Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={hnadleUpdate} className="flex flex-col gap-4">
                    <TextField
                      defaultValue={user?.name}
                      className="w-full"
                      name="name"
                      type="text"
                      variant="secondary"
                    >
                      <Label>Name</Label>
                      <Input />
                    </TextField>

                    <TextField
                      defaultValue={user?.image}
                      className="w-full"
                      name="image"
                      variant="secondary"
                    >
                      <Label>Image URL</Label>
                      <Input />
                    </TextField>
                    <Button className="mt-4 w-full bg-[#00655C]" slot="close" type="submit">
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

export default UpdateProfileModal;
