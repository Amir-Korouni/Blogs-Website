import { Form } from "@base-ui/react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Field } from "../ui/field";
import { Input } from "../ui/input";

type EditType = {
  id?: number;
  username: string;
  email: string;
  role?: string;
};

const EditDialog = ({ email, username }: EditType) => {
  return (
    <Dialog>
      <Form>
        <DialogTrigger
          render={
            <Button type="button" className="w-full">
              Edit Profile
            </Button>
          }
        />
        <DialogContent className="sm:max-w sm:max-h">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-5">
            <Field>
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue={username} />
            </Field>
            <Field>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" defaultValue={email} />
            </Field>
            <Field>
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" placeholder="Password123" />
            </Field>
            <Field>
              <Label htmlFor="avatarMedia">AvatarMedia</Label>
              <Input
                id="avatarMedia"
                name="avatarMedia"
                placeholder="avatarMedia1"
              />
            </Field>
          </div>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Form>
    </Dialog>
  );
};

export default EditDialog;
