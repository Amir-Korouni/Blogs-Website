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

const EditPass = () => {
  return (
    <Dialog>
      <Form>
        <DialogTrigger
          render={
            <Button type="button" className="w-full">
              Change Password
            </Button>
          }
        />
        <DialogContent className="sm:max-w sm:max-h">
          <DialogHeader>
            <DialogTitle>Edit Password</DialogTitle>
            <DialogDescription>
              Make changes to your password profile here. Click save when
              you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-5">
            <Field>
              <Label htmlFor="CurrentPassword">Current Password</Label>
              <Input
                id="CurrentPassword"
                name="CurrentPassword"
                placeholder="CurrentPass123"
              />
            </Field>
            <Field>
              <Label htmlFor="newPassword">NewPassword</Label>
              <Input
                id="newPassword"
                name="newPassword"
                placeholder="example@gmail.com"
              />
            </Field>
            <Field>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Password123"
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

export default EditPass;
